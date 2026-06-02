import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How it works — Deepfake Detector" },
      { name: "description", content: "Learn how our deepfake detection pipeline works, from upload to verdict." },
    ],
  }),
  component: HowItWorks,
});

const steps = [
  {
    n: "01",
    title: "Secure Upload",
    subtitle: "Zero-knowledge architecture",
    body: "Choose an image from your device. The file is encrypted during transmission and processed through our secure API endpoint. We never store your images — they exist only temporarily in memory during analysis, then are permanently discarded.",
    details: [
      "End-to-end encryption",
      "No permanent storage",
      "GDPR compliant",
      "Anonymous processing"
    ]
  },
  {
    n: "02",
    title: "Deep Analysis",
    subtitle: "Multi-layered neural inspection",
    body: "Our ResNet18 deep neural network examines the image across multiple dimensions. It analyzes pixel-level inconsistencies, frequency domain artifacts, compression patterns, and facial landmark irregularities that are invisible to the human eye but reveal synthetic generation.",
    details: [
      "Pixel-level artifact detection",
      "Frequency spectrum analysis",
      "Spatial inconsistency mapping",
      "Generative fingerprint recognition"
    ]
  },
  {
    n: "03",
    title: "Verification Report",
    subtitle: "Clear, actionable results",
    body: "Within seconds, you receive a definitive verdict with a confidence percentage. The model highlights suspicious regions and provides an explanation of which artifacts led to the conclusion — empowering you to make informed decisions about media authenticity.",
    details: [
      "Confidence scoring system",
      "Artifact localization",
      "Transparent methodology",
      "Exportable results"
    ]
  },
];

const technicalHighlights = [
  {
    title: "ResNet18 Architecture",
    desc: "18-layer convolutional neural network optimized for image classification and deepfake detection.",
  },
  {
    title: "Frequency Domain Analysis",
    desc: "Examines Fourier transforms to detect inconsistencies in high-frequency components typical of GAN-generated images.",
  },
  {
    title: "Spatial Feature Extraction",
    desc: "Identifies unnatural edge patterns, texture anomalies, and blending artifacts left by generative models.",
  },
  {
    title: "Real-time Processing",
    desc: "Optimized inference pipeline delivers results in under 3 seconds on standard hardware.",
  },
];

function HowItWorks() {
  const textReveal = {
    initial: { y: "120%" },
    animate: { y: "0%" },
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Deep ocean background */}
      <div className="fixed inset-0 z-0">
        <img 
          src="../../public/image5.png"
          alt="Deep ocean background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-transparent to-blue-950/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col px-6 py-32 md:py-48 max-w-5xl mx-auto w-full">
        
        {/* Header */}
        <div className="text-center mb-32">
          <div className="overflow-hidden mb-4">
            <motion.p 
              variants={textReveal}
              initial="initial"
              animate="animate"
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="text-xs uppercase tracking-[0.3em] text-neutral-300 font-sans font-semibold"
            >
              [ The Methodology ]
            </motion.p>
          </div>
          
          <div className="overflow-hidden">
            <motion.h1 
              variants={textReveal}
              initial="initial"
              animate="animate"
              transition={{ duration: 1, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
              className="text-5xl md:text-7xl font-light tracking-tight text-white"
            >
              How it works
            </motion.h1>
          </div>
          
          <div className="overflow-hidden mt-6">
            <motion.p 
              variants={textReveal}
              initial="initial"
              animate="animate"
              transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
              className="text-neutral-300 font-light text-lg max-w-2xl mx-auto"
            >
              A transparent, three-stage pipeline designed for accuracy and clarity.
            </motion.p>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-24 mb-32">
          {steps.map((step, index) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.76, 0, 0.24, 1] }}
              className="relative"
            >
              {/* Glass card */}
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl hover:bg-white/10 transition-all duration-500">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  {/* Left - Step number */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-blue-500/10 to-transparent p-8 md:p-10 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/10">
                    <div className="text-8xl md:text-9xl font-bold text-white/5 font-mono">
                      {step.n}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-5xl md:text-6xl font-light text-white mb-2">
                          {step.title.split(' ')[0]}
                        </div>
                        <div className="text-sm uppercase tracking-wider text-blue-400 font-sans font-semibold">
                          {step.subtitle}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right - Content */}
                  <div className="md:col-span-2 p-8 md:p-10">
                    <p className="text-neutral-300 leading-relaxed text-base md:text-lg font-light mb-6">
                      {step.body}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {step.details.map((detail, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-blue-400/60" />
                          <span className="text-xs text-neutral-400 font-sans">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Connector line between steps */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 -translate-x-1/2 bottom-[-48px] w-px h-12 bg-gradient-to-b from-blue-400/40 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Technical Highlights Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
          className="mb-32"
        >
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-sans font-semibold mb-4">
              [ Technical Foundation ]
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-white">
              Built on proven research
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technicalHighlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="backdrop-blur-sm bg-black/30 border border-white/10 rounded-xl p-6 hover:bg-black/40 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-2 font-sans tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed font-light">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why It Matters Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="mb-32"
        >
          <div className="backdrop-blur-md bg-blue-500/5 border border-blue-400/20 rounded-2xl p-10 md:p-12 text-center shadow-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-blue-400 font-sans font-semibold mb-4">
              [ Why It Matters ]
            </p>
            <h2 className="text-2xl md:text-3xl font-light text-white mb-6 leading-relaxed">
              "In an era of generative AI,<br />
              verification is not optional — it's essential."
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto font-light">
              Deepfakes are becoming indistinguishable from reality. Our mission is to provide accessible, 
              transparent tools that restore trust in digital media.
            </p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="text-center"
        >
          <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-12 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
              Ready to verify?
            </h3>
            <p className="text-neutral-400 mb-8 font-light">
              Upload an image and see the technology in action.
            </p>
            <Link
              to="/detect"
              className="inline-flex items-center justify-center border border-white/30 bg-white/10 backdrop-blur-sm px-8 py-3 text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-300 rounded-lg"
            >
              Start Analysis
            </Link>
          </div>
        </motion.div>

        {/* Footer note */}
        <div className="mt-24 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-600 font-sans">
            Powered by ResNet18 • Trained on FaceForensics++, Celeb-DF, and custom datasets
          </p>
        </div>
      </div>
    </div>
  );
}