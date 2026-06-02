import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/detect")({
  head: () => ({
    meta: [
      { title: "Analysis — Deepfake Detector" },
      { name: "description", content: "Upload media for analysis." },
    ],
  }),
  component: DetectPage,
});

type Result = { result: string; confidence: number };

const BACKEND_URL = "https://deepfake-cnn.onrender.com";
const TIMEOUT_MS = 90_000; // 90s — allows Render cold start (can take 30-60s)

function DetectPage() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState("Analyzing...");
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const onSelect = (f: File | null) => {
    setResult(null);
    setError(null);
    setFile(f);
    if (f) {
      const url = URL.createObjectURL(f);
      setPreview(url);
    } else {
      setPreview(null);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

    // After 5s with no response, assume Render is cold-starting
    const wakeUpTimerId = setTimeout(() => {
      setLoadingMsg("Waking up backend… (first request may take ~30s)");
    }, 5000);

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      setLoadingMsg("Analyzing...");
      setError(null);

      const res = await fetch(`${BACKEND_URL}/predict`, {
        method: "POST",
        body: formData,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      clearTimeout(wakeUpTimerId);

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(`Server error ${res.status}${text ? `: ${text}` : ""}`);
      }

      const data = (await res.json()) as Result;
      setResult(data);
    } catch (err: unknown) {
      clearTimeout(timeoutId);
      clearTimeout(wakeUpTimerId);
      console.error(err);
      if (err instanceof Error && err.name === "AbortError") {
        setError("Request timed out. The backend may be sleeping — try again in 30s.");
      } else {
        setError("Analysis failed. Check that the backend is deployed and running.");
      }
    } finally {
      setLoading(false);
      setLoadingMsg("Analyzing...");
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Deep ocean background image */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/image4.png"
          alt="Deep ocean background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Subtle blue gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-transparent to-blue-950/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[80vh] flex flex-col px-6 py-32 md:py-48 max-w-7xl mx-auto w-full font-serif">
        
        <div className="mb-24 flex items-end justify-between border-b border-white/10 pb-8">
          <h1 className="text-5xl md:text-8xl font-light tracking-tight capitalize leading-none text-white">
            Intelligence
          </h1>
          <span className="text-xs uppercase tracking-[0.3em] font-sans font-bold text-neutral-300 hidden md:block">
            [ Drop media to begin ]
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 flex-1">
          
          {/* Left Column: Upload */}
          <div className="flex flex-col h-full">
            <div
              onDragOver={(e) => {
                e.preventDefault();
                e.currentTarget.classList.add("border-white/40", "bg-white/10");
              }}
              onDragLeave={(e) => {
                e.preventDefault();
                e.currentTarget.classList.remove("border-white/40", "bg-white/10");
              }}
              onDrop={(e) => {
                e.preventDefault();
                e.currentTarget.classList.remove("border-white/40", "bg-white/10");
                const f = e.dataTransfer.files?.[0];
                if (f) onSelect(f);
              }}
              onClick={() => inputRef.current?.click()}
              className="flex-1 min-h-[400px] border border-white/20 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center p-6 hover:bg-black/60 hover:border-white/30 transition-all duration-500 cursor-pointer relative group rounded-lg"
            >
              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => onSelect(e.target.files?.[0] ?? null)}
              />
              {preview ? (
                <img src={preview} alt="Selected" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity rounded-lg" />
              ) : null}
              
              <div className="z-10 text-center font-sans">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold mb-4 block text-neutral-300 group-hover:text-white transition-colors">[ Select ]</span>
                <p className="text-3xl font-serif font-light tracking-tight capitalize text-white">Drop Artifact</p>
                <p className="text-xs text-neutral-400 mt-4">or click to browse</p>
              </div>
            </div>

            <div className="mt-8 flex justify-between items-center border-b border-white/10 pb-4 font-sans">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-300 truncate max-w-[200px]">
                {file ? file.name : "No file"}
              </span>
              <div className="flex gap-6">
                <button
                  onClick={() => onSelect(null)}
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:text-neutral-300 transition-colors"
                >
                  Clear
                </button>
                <button
                  onClick={handleUpload}
                  disabled={!file || loading}
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-white disabled:opacity-30 hover:text-neutral-300 transition-colors"
                >
                  {loading ? loadingMsg : "Verify"}
                </button>
              </div>
            </div>
            {error && <p className="mt-4 text-xs font-sans uppercase tracking-[0.2em] text-red-400">{error}</p>}
          </div>

          {/* Right Column: Result */}
          <div className="flex flex-col h-full">
            <div className="border-l border-white/10 pl-0 md:pl-16 pt-12 md:pt-0 h-full">
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-neutral-300 mb-12 block">
                [ Verdict ]
              </span>
              
              <AnimatePresence mode="wait">
                {result ? (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                    className="flex flex-col flex-1"
                  >
                    <div className="flex-1 flex items-center min-h-[300px]">
                      <h2 className={`text-6xl lg:text-7xl font-serif font-light tracking-tight capitalize leading-tight ${result.result === "REAL" ? "text-white" : "text-red-400"}`}>
                        {result.result === "REAL" ? "Authentic." : "Synthetic."}
                      </h2>
                    </div>
                    
                    <div className="mt-12 font-sans">
                      <div className="flex justify-between text-[10px] font-bold uppercase tracking-[0.3em] mb-4 text-neutral-300">
                        <span>Confidence</span>
                        <span>{result.confidence}%</span>
                      </div>
                      <div className="h-px w-full bg-white/20 relative overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${result.confidence}%` }}
                          transition={{ duration: 1.5, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
                          className={`absolute top-0 left-0 h-full ${result.result === "REAL" ? "bg-white" : "bg-red-400"}`}
                        />
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex-1 flex items-center justify-center min-h-[400px]"
                  >
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-neutral-500">
                      Awaiting media
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}