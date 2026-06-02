import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { UploadCloud, Image as ImageIcon, Loader2, RotateCcw, ShieldCheck, AlertTriangle, ScanLine } from "lucide-react";

export const Route = createFileRoute("/detect")({
  head: () => ({
    meta: [
      { title: "Detect — Deepfake Detector" },
      { name: "description", content: "Upload an image to analyze whether it's authentic or a deepfake." },
    ],
  }),
  component: DetectPage,
});

type Result = { result: string; confidence: number };

function DetectPage() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);
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
    const formData = new FormData();
    formData.append("file", file);
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("http://localhost:8000/predict", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Request failed");
      const data = (await res.json()) as Result;
      setResult(data);
    } catch (err) {
      console.error(err);
      setError("Prediction failed. Make sure the API is running at 127.0.0.1:8000.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto max-w-2xl px-6 py-16 md:py-24">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground">
          Analyze an image
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Drop or select a JPG / PNG. Nothing is stored.
        </p>
      </div>

      <div
        onDragOver={(e) => {
          e.preventDefault();
          e.currentTarget.classList.add("border-primary", "bg-primary/5");
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          e.currentTarget.classList.remove("border-primary", "bg-primary/5");
        }}
        onDrop={(e) => {
          e.preventDefault();
          e.currentTarget.classList.remove("border-primary", "bg-primary/5");
          const f = e.dataTransfer.files?.[0];
          if (f) onSelect(f);
        }}
        onClick={() => inputRef.current?.click()}
        className="group border-2 border-dashed border-border rounded-xl p-12 text-center cursor-pointer hover:border-primary/50 hover:bg-card/50 transition-all duration-200 bg-card/20 backdrop-blur-sm"
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => onSelect(e.target.files?.[0] ?? null)}
        />
        {preview ? (
          <div className="relative">
            <img src={preview} alt="Selected" className="mx-auto max-h-72 rounded-lg object-contain shadow-lg" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center text-white text-sm font-medium">
              Click to replace
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center text-muted-foreground">
            <div className="p-4 bg-secondary rounded-full mb-4 group-hover:scale-110 transition-transform">
              <UploadCloud className="w-8 h-8 text-primary" />
            </div>
            <p className="text-base font-medium text-foreground">Click or drag an image here</p>
            <p className="text-xs mt-2 opacity-70">PNG, JPG up to ~10MB</p>
          </div>
        )}
        {file && !preview && (
          <p className="mt-4 text-xs text-muted-foreground truncate flex items-center justify-center gap-2">
            <ImageIcon className="w-3 h-3" /> {file.name}
          </p>
        )}
      </div>

      <div className="mt-8 flex justify-center gap-4">
        <button
          onClick={handleUpload}
          disabled={!file || loading}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow-md hover:bg-primary/90 hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0 disabled:cursor-not-allowed transition-all"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Analyzing…
            </>
          ) : (
            <>
              <ScanLine className="w-4 h-4" />
              Analyze Image
            </>
          )}
        </button>
        {file && (
          <button
            onClick={() => onSelect(null)}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </button>
        )}
      </div>

      {error && (
        <p className="mt-6 text-center text-sm text-destructive">{error}</p>
      )}

      {result && (
        <div className="mt-12 border border-border/50 rounded-xl p-8 bg-card/30 backdrop-blur-sm shadow-sm text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 opacity-50" />
          
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium mb-4">Verdict</p>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            {result.result === "REAL" ? (
              <ShieldCheck className="w-8 h-8 text-green-500" />
            ) : (
              <AlertTriangle className="w-8 h-8 text-destructive" />
            )}
            <p className={`text-4xl font-extrabold tracking-tight ${result.result === "REAL" ? "text-green-500" : "text-destructive"}`}>
              {result.result}
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="flex justify-between text-sm font-medium text-foreground mb-2">
              <span>Confidence Score</span>
              <span>{result.confidence}%</span>
            </div>
            <div className="h-2 w-full bg-secondary rounded-full overflow-hidden shadow-inner">
              <div
                className={`h-full transition-all duration-1000 ease-out ${result.result === "REAL" ? "bg-green-500" : "bg-destructive"}`}
                style={{ width: `${result.confidence}%` }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}