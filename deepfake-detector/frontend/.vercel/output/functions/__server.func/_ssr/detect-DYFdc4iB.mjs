import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function DetectPage() {
  const [file, setFile] = reactExports.useState(null);
  const [preview, setPreview] = reactExports.useState(null);
  const [result, setResult] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const inputRef = reactExports.useRef(null);
  const onSelect = (f) => {
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
      const res = await fetch("https://deepfake-cnn.onrender.com/predict", {
        method: "POST",
        body: formData
      });
      if (!res.ok) throw new Error("Request failed");
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      setError("Analysis failed. Ensure endpoint is active.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "../../public/image4.png", alt: "Deep ocean background", className: "w-full h-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/60" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-blue-900/30 via-transparent to-blue-950/40" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 min-h-[80vh] flex flex-col px-6 py-32 md:py-48 max-w-7xl mx-auto w-full font-serif", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-24 flex items-end justify-between border-b border-white/10 pb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl md:text-8xl font-light tracking-tight capitalize leading-none text-white", children: "Intelligence" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.3em] font-sans font-bold text-neutral-300 hidden md:block", children: "[ Drop media to begin ]" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-16 flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onDragOver: (e) => {
            e.preventDefault();
            e.currentTarget.classList.add("border-white/40", "bg-white/10");
          }, onDragLeave: (e) => {
            e.preventDefault();
            e.currentTarget.classList.remove("border-white/40", "bg-white/10");
          }, onDrop: (e) => {
            e.preventDefault();
            e.currentTarget.classList.remove("border-white/40", "bg-white/10");
            const f = e.dataTransfer.files?.[0];
            if (f) onSelect(f);
          }, onClick: () => inputRef.current?.click(), className: "flex-1 min-h-[400px] border border-white/20 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center p-6 hover:bg-black/60 hover:border-white/30 transition-all duration-500 cursor-pointer relative group rounded-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: inputRef, type: "file", accept: "image/*", className: "hidden", onChange: (e) => onSelect(e.target.files?.[0] ?? null) }),
            preview ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: preview, alt: "Selected", className: "absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity rounded-lg" }) : null,
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "z-10 text-center font-sans", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.3em] font-bold mb-4 block text-neutral-300 group-hover:text-white transition-colors", children: "[ Select ]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-serif font-light tracking-tight capitalize text-white", children: "Drop Artifact" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-400 mt-4", children: "or click to browse" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex justify-between items-center border-b border-white/10 pb-4 font-sans", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-300 truncate max-w-[200px]", children: file ? file.name : "No file" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => onSelect(null), className: "text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:text-neutral-300 transition-colors", children: "Clear" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleUpload, disabled: !file || loading, className: "text-[10px] font-bold uppercase tracking-[0.2em] text-white disabled:opacity-30 hover:text-neutral-300 transition-colors", children: loading ? "Analyzing..." : "Verify" })
            ] })
          ] }),
          error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs font-sans uppercase tracking-[0.2em] text-red-400", children: error })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l border-white/10 pl-0 md:pl-16 pt-12 md:pt-0 h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-neutral-300 mb-12 block", children: "[ Verdict ]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: result ? /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            x: 50
          }, animate: {
            opacity: 1,
            x: 0
          }, exit: {
            opacity: 0,
            x: -50
          }, transition: {
            duration: 1,
            ease: [0.76, 0, 0.24, 1]
          }, className: "flex flex-col flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex items-center min-h-[300px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: `text-6xl lg:text-7xl font-serif font-light tracking-tight capitalize leading-tight ${result.result === "REAL" ? "text-white" : "text-red-400"}`, children: result.result === "REAL" ? "Authentic." : "Synthetic." }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 font-sans", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[10px] font-bold uppercase tracking-[0.3em] mb-4 text-neutral-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Confidence" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  result.confidence,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-full bg-white/20 relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
                width: 0
              }, animate: {
                width: `${result.confidence}%`
              }, transition: {
                duration: 1.5,
                delay: 0.5,
                ease: [0.76, 0, 0.24, 1]
              }, className: `absolute top-0 left-0 h-full ${result.result === "REAL" ? "bg-white" : "bg-red-400"}` }) })
            ] })
          ] }, "result") : /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
            opacity: 0
          }, animate: {
            opacity: 1
          }, exit: {
            opacity: 0
          }, className: "flex-1 flex items-center justify-center min-h-[400px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-neutral-500", children: "Awaiting media" }) }, "empty") })
        ] }) })
      ] })
    ] })
  ] });
}
export {
  DetectPage as component
};
