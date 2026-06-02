import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function About() {
  const textReveal = {
    initial: {
      y: "120%"
    },
    animate: {
      y: "0%"
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-black relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-0 opacity-30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("video", { src: "../../public/10140734-uhd_4096_2160_25fps.mp4", className: "w-full h-full object-cover", autoPlay: true, loop: true, muted: true, playsInline: true }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative min-h-[60vh] flex flex-col justify-center px-6 py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: textReveal, initial: "initial", animate: "animate", transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1]
      }, className: "text-xs uppercase tracking-[0.3em] text-neutral-300 mb-8 font-sans font-semibold", children: "[ About ]" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { variants: textReveal, initial: "initial", animate: "animate", transition: {
        duration: 1,
        delay: 0.1,
        ease: [0.76, 0, 0.24, 1]
      }, className: "text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] text-white", children: [
        "Media authenticity,",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-300", children: "simplified." })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 md:px-12 py-20 md:py-32 border-b md:border-b-0 md:border-r border-white/10 backdrop-blur-sm bg-black/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-neutral-300 mb-8 font-sans font-semibold", children: "[ Mission ]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-light leading-relaxed text-white", children: "To provide a reliable, transparent, and accessible tool for verifying digital media in an age of synthetic content." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 md:px-12 py-20 md:py-32 backdrop-blur-sm bg-black/30", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-neutral-300 mb-8 font-sans font-semibold", children: "[ Vision ]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-light leading-relaxed text-white", children: "A digital ecosystem where truth is verifiable, and authenticity is the standard, not the exception." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative px-6 py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto backdrop-blur-sm bg-black/30 p-8 md:p-12 rounded-lg border border-white/10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-neutral-300 mb-12 font-sans font-semibold", children: "[ The Project ]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8 text-neutral-300 leading-relaxed text-lg font-light", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Deepfake Detector is a lightweight tool that helps journalists, researchers, and everyday users verify whether an image has been manipulated by generative models." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We believe trust online starts with transparency. The interface is intentionally minimal so the result is the only thing in focus." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The model runs locally against your provided API endpoint. No uploads leave your control without consent." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-neutral-300 mb-12 font-sans font-semibold", children: "[ Technology ]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "backdrop-blur-sm bg-black/30 p-6 rounded-lg border border-white/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold uppercase tracking-widest mb-4 text-white font-sans", children: "Architecture" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-neutral-300 leading-relaxed font-light", children: "Built on ResNet18, a convolutional neural network optimized for image classification. Our model analyzes pixel-level inconsistencies and frequency domain artifacts." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "backdrop-blur-sm bg-black/30 p-6 rounded-lg border border-white/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold uppercase tracking-widest mb-4 text-white font-sans", children: "Privacy First" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-neutral-300 leading-relaxed font-light", children: "All processing happens locally. Your media never leaves your device unless you explicitly choose to share results." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "backdrop-blur-sm bg-black/30 p-6 rounded-lg border border-white/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold uppercase tracking-widest mb-4 text-white font-sans", children: "Accuracy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-neutral-300 leading-relaxed font-light", children: "Trained on diverse datasets including FaceForensics++, Celeb-DF, and custom deepfake samples for comprehensive detection." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "backdrop-blur-sm bg-black/30 p-6 rounded-lg border border-white/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold uppercase tracking-widest mb-4 text-white font-sans", children: "Continuous Learning" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-neutral-300 leading-relaxed font-light", children: "Regular model updates to adapt to emerging deepfake techniques and generative AI advancements." })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative border-t border-white/10 bg-black/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-neutral-300 mb-12 font-sans font-semibold", children: "[ Principles ]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "backdrop-blur-sm bg-black/30 p-8 rounded-lg border border-white/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-white mb-3 font-sans tracking-tight", children: "01. Transparency" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-neutral-300 leading-relaxed font-light text-lg", children: "Every result includes a confidence score and explanation. No black boxes." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "backdrop-blur-sm bg-black/30 p-8 rounded-lg border border-white/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-white mb-3 font-sans tracking-tight", children: "02. Accessibility" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-neutral-300 leading-relaxed font-light text-lg", children: "Free and open to everyone. Truth shouldn't have a price tag." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "backdrop-blur-sm bg-black/30 p-8 rounded-lg border border-white/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-white mb-3 font-sans tracking-tight", children: "03. Independence" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-neutral-300 leading-relaxed font-light text-lg", children: "No external dependencies. No data collection. No hidden agendas." })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto backdrop-blur-sm bg-black/30 p-8 md:p-12 rounded-lg border border-white/10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-neutral-300 mb-12 font-sans font-semibold", children: "[ Origin ]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 text-neutral-300 leading-relaxed text-lg font-light", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Deepfake Detector was born from a simple observation: as generative AI becomes more sophisticated, the average person has fewer tools to distinguish real from synthetic." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "What started as a research project into CNN-based detection methods evolved into a mission-driven tool focused on making media verification accessible to everyone." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Today, we continue to refine our model and expand our understanding of synthetic media detection, always with the goal of preserving authenticity in the digital age." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 pt-8 border-t border-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/detect", className: "inline-block text-sm uppercase tracking-[0.2em] font-sans font-bold border-b border-white/30 pb-2 hover:border-white transition-colors text-white", children: "Begin Analysis" }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative border-t border-white/10 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-neutral-300 mb-6 font-sans font-semibold", children: "[ Get Started ]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-5xl font-light text-white mb-8", children: "Verify an image today." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/detect", className: "inline-flex items-center justify-center border border-white/30 bg-black/30 backdrop-blur-sm px-8 py-3 text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-300", children: "Try the detector" })
    ] }) })
  ] });
}
export {
  About as component
};
