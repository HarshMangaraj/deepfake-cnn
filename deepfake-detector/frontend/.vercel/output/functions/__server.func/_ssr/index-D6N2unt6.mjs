import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useScroll, a as useTransform, m as motion } from "../_libs/framer-motion.mjs";
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
function Index() {
  const {
    scrollY
  } = useScroll();
  const yMesh = useTransform(scrollY, [0, 3e3], [0, -80]);
  const textReveal = {
    initial: {
      y: "120%"
    },
    animate: {
      y: "0%"
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-h-screen font-serif bg-black", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-screen flex flex-col justify-end px-6 pb-24 overflow-hidden bg-black", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 z-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("video", { src: "../../public/10140734-uhd_4096_2160_25fps.mp4", className: "w-full h-full object-cover opacity-30", autoPlay: true, loop: true, muted: true, playsInline: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl relative z-10 font-sans", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: textReveal, initial: "initial", animate: "animate", transition: {
          duration: 1,
          ease: [0.76, 0, 0.24, 1]
        }, className: "text-xs md:text-sm uppercase tracking-[0.3em] text-neutral-500 mb-8 font-semibold", children: "[ I. The standard of truth ]" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-6xl md:text-[9vw] font-bold tracking-tighter leading-[0.85] uppercase text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: textReveal, initial: "initial", animate: "animate", transition: {
            duration: 1,
            delay: 0.1,
            ease: [0.76, 0, 0.24, 1]
          }, children: "Preserving" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: textReveal, initial: "initial", animate: "animate", transition: {
            duration: 1,
            delay: 0.2,
            ease: [0.76, 0, 0.24, 1]
          }, className: "italic font-serif font-light text-neutral-400", children: "Authenticity." }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, transition: {
        duration: 1,
        delay: 1
      }, className: "absolute bottom-12 right-6 md:right-12 z-20 font-sans", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/detect", className: "group relative flex items-center justify-center h-32 w-32 md:h-40 md:w-40 rounded-full border border-neutral-700 bg-black/50 hover:bg-white hover:border-white hover:text-black transition-all duration-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-bold text-white group-hover:text-black", children: "Begin" }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-black border-t border-neutral-900", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[50vh] md:h-auto overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "../../public/image2.png", alt: "AI neural network visualization representing deep learning detection", className: "absolute inset-0 w-full h-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center px-8 md:px-20 py-24 md:py-32", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-neutral-600 mb-12 font-sans font-semibold", children: "[ II. The Challenge ]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h2, { initial: {
          opacity: 0,
          y: 30
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true,
          margin: "-100px"
        }, transition: {
          duration: 1,
          ease: [0.76, 0, 0.24, 1]
        }, className: "text-2xl md:text-4xl font-light leading-relaxed tracking-tight text-white", children: [
          "AI-generated media is evolving faster than ever.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-500", children: "Our mission is to stay ahead, providing a reliable shield against digital deception." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-32 px-6 md:px-24 bg-neutral-950 border-t border-neutral-900 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-5 overflow-hidden h-[600px] md:h-[800px] relative border border-neutral-800", children: /* @__PURE__ */ jsxRuntimeExports.jsx("video", { src: "../../public/video2.mp4", className: "w-full h-full object-cover", autoPlay: true, loop: true, muted: true, playsInline: true }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-neutral-600 mb-12 font-sans font-semibold", children: "[ III. How It Works ]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 50
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true,
          margin: "-100px"
        }, transition: {
          duration: 1,
          ease: [0.76, 0, 0.24, 1]
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-5xl font-medium tracking-tight leading-tight mb-8 text-white", children: "Advanced CNN architecture for deepfake detection." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg md:text-xl text-neutral-400 font-light leading-relaxed mb-8", children: "Our ResNet18 model analyzes pixel-level inconsistencies, frequency domain artifacts, and spatial irregularities that reveal AI-generated content." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/detect", className: "inline-block border-b border-white pb-1 uppercase tracking-widest text-xs font-sans font-bold text-white hover:text-neutral-400 hover:border-neutral-400 transition-colors", children: "Explore the Technology" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "h-[70vh] relative overflow-hidden flex items-center justify-center border-y border-neutral-900 bg-black", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { style: {
        y: yMesh
      }, className: "absolute inset-0 -top-48 -bottom-48 z-0 opacity-30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("video", { src: "../../public/video3.mp4", className: "w-full h-full object-cover", autoPlay: true, loop: true, muted: true, playsInline: true }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center relative z-10 p-16 bg-black/80 border border-neutral-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-neutral-500 font-sans font-bold mb-6", children: "[ IV. Detection Technology ]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-7xl font-bold uppercase tracking-tighter font-sans text-white", children: "Spot the Fake" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-32 px-6 md:px-24 bg-black", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-24 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-neutral-600 mb-4 font-sans font-semibold", children: "[ V. Detection Process ]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-5xl font-light tracking-tight text-white", children: "Three steps to truth." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-12", children: [{
        title: "Upload",
        desc: "Securely upload any image or video. Your file is processed locally in your browser and never stored on our servers.",
        img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800",
        alt: "Upload interface for media verification"
      }, {
        title: "Analysis",
        desc: "Our AI scans for manipulation patterns, including face swapping, lip-sync forgery, and generative synthesis artifacts.",
        img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
        alt: "AI analyzing digital media for authenticity"
      }, {
        title: "Verdict",
        desc: "Receive a clear result with confidence score. Understand exactly why our model reached its conclusion.",
        img: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&q=80&w=800",
        alt: "Verification result showing authenticity score"
      }].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 50
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true,
        margin: "-50px"
      }, transition: {
        duration: 0.8,
        delay: i * 0.12,
        ease: [0.76, 0, 0.24, 1]
      }, className: "flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden h-56 mb-8 border border-neutral-800 bg-neutral-900", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.img, alt: item.alt, className: "w-full h-full object-cover hover:scale-105 transition-transform duration-700" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-neutral-800 pt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold uppercase tracking-widest mb-4 font-sans text-white", children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-neutral-500 leading-relaxed font-light text-lg", children: item.desc })
        ] })
      ] }, item.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-neutral-900", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 h-[40vh] md:h-[60vh]", children: [{
      src: "https://images.unsplash.com/photo-1542080681-b52d382432af?auto=format&fit=crop&q=80&w=800",
      alt: "Real human portrait - authentic"
    }, {
      src: "../../public/image3.png",
      alt: "AI-generated face - deepfake example"
    }, {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
      alt: "Comparative analysis of real vs fake"
    }].map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden relative group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img.src, alt: img.alt, className: "w-full h-full object-cover group-hover:scale-105 transition-all duration-700" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-700" })
    ] }, i)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-48 px-6 flex flex-col items-center justify-center text-center overflow-hidden bg-black", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-0 opacity-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("video", { src: "../../public/video4.mp4", className: "w-full h-full object-cover", autoPlay: true, loop: true, muted: true, playsInline: true }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-12 font-sans text-white", children: "Verify Truth" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/detect", className: "text-xs uppercase tracking-[0.2em] font-sans font-bold border-b border-white/30 pb-2 hover:border-white transition-colors text-white", children: "Begin Analysis" })
      ] })
    ] })
  ] });
}
export {
  Index as component
};
