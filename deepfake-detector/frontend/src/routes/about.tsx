import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Deepfake Detector" },
      { name: "description", content: "About the Deepfake Detector project and its mission for media authenticity." },
    ],
  }),
  component: About,
});

function About() {
  const textReveal = {
    initial: { y: "120%" },
    animate: { y: "0%" },
  };

  return (
    <div className="bg-black relative">
      {/* Background video for translucency effect */}
      <div className="fixed inset-0 z-0 opacity-30">
        <video 
          src="/10140734-uhd_4096_2160_25fps.mp4"
          className="w-full h-full object-cover" 
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex flex-col justify-center px-6 py-24 md:py-32">
        <div className="max-w-3xl mx-auto">
          <div className="overflow-hidden mb-6">
            <motion.p 
              variants={textReveal}
              initial="initial"
              animate="animate"
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="text-xs uppercase tracking-[0.3em] text-neutral-300 mb-8 font-sans font-semibold"
            >
              [ About ]
            </motion.p>
          </div>
          
          <div className="overflow-hidden">
            <motion.h1 
              variants={textReveal}
              initial="initial"
              animate="animate"
              transition={{ duration: 1, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
              className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] text-white"
            >
              Media authenticity,
              <br />
              <span className="text-neutral-300">simplified.</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Mission Section - Translucent */}
      <section className="relative border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="px-6 md:px-12 py-20 md:py-32 border-b md:border-b-0 md:border-r border-white/10 backdrop-blur-sm bg-black/40">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-300 mb-8 font-sans font-semibold">[ Mission ]</p>
            <h2 className="text-2xl md:text-3xl font-light leading-relaxed text-white">
              To provide a reliable, transparent, and accessible tool for verifying digital media in an age of synthetic content.
            </h2>
          </div>
          <div className="px-6 md:px-12 py-20 md:py-32 backdrop-blur-sm bg-black/30">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-300 mb-8 font-sans font-semibold">[ Vision ]</p>
            <h2 className="text-2xl md:text-3xl font-light leading-relaxed text-white">
              A digital ecosystem where truth is verifiable, and authenticity is the standard, not the exception.
            </h2>
          </div>
        </div>
      </section>

      {/* Main Content - Translucent */}
      <section className="relative px-6 py-24 md:py-32">
        <div className="max-w-3xl mx-auto backdrop-blur-sm bg-black/30 p-8 md:p-12 rounded-lg border border-white/10">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-300 mb-12 font-sans font-semibold">[ The Project ]</p>
          
          <div className="space-y-8 text-neutral-300 leading-relaxed text-lg font-light">
            <p>
              Deepfake Detector is a lightweight tool that helps journalists, researchers,
              and everyday users verify whether an image has been manipulated by generative models.
            </p>
            
            <p>
              We believe trust online starts with transparency. The interface is intentionally
              minimal so the result is the only thing in focus.
            </p>
            
            <p>
              The model runs locally against your provided API endpoint. No uploads leave your
              control without consent.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Stack - Translucent */}
      <section className="relative border-t border-white/10">
        <div className="px-6 py-24 md:py-32">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-300 mb-12 font-sans font-semibold">[ Technology ]</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="backdrop-blur-sm bg-black/30 p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold uppercase tracking-widest mb-4 text-white font-sans">Architecture</h3>
                <p className="text-neutral-300 leading-relaxed font-light">
                  Built on ResNet18, a convolutional neural network optimized for image classification. Our model analyzes pixel-level inconsistencies and frequency domain artifacts.
                </p>
              </div>
              <div className="backdrop-blur-sm bg-black/30 p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold uppercase tracking-widest mb-4 text-white font-sans">Privacy First</h3>
                <p className="text-neutral-300 leading-relaxed font-light">
                  All processing happens locally. Your media never leaves your device unless you explicitly choose to share results.
                </p>
              </div>
              <div className="backdrop-blur-sm bg-black/30 p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold uppercase tracking-widest mb-4 text-white font-sans">Accuracy</h3>
                <p className="text-neutral-300 leading-relaxed font-light">
                  Trained on diverse datasets including FaceForensics++, Celeb-DF, and custom deepfake samples for comprehensive detection.
                </p>
              </div>
              <div className="backdrop-blur-sm bg-black/30 p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold uppercase tracking-widest mb-4 text-white font-sans">Continuous Learning</h3>
                <p className="text-neutral-300 leading-relaxed font-light">
                  Regular model updates to adapt to emerging deepfake techniques and generative AI advancements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Translucent */}
      <section className="relative border-t border-white/10 bg-black/20">
        <div className="px-6 py-24 md:py-32">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-300 mb-12 font-sans font-semibold">[ Principles ]</p>
            
            <div className="space-y-8">
              <div className="backdrop-blur-sm bg-black/30 p-8 rounded-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-3 font-sans tracking-tight">01. Transparency</h3>
                <p className="text-neutral-300 leading-relaxed font-light text-lg">
                  Every result includes a confidence score and explanation. No black boxes.
                </p>
              </div>
              <div className="backdrop-blur-sm bg-black/30 p-8 rounded-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-3 font-sans tracking-tight">02. Accessibility</h3>
                <p className="text-neutral-300 leading-relaxed font-light text-lg">
                  Free and open to everyone. Truth shouldn't have a price tag.
                </p>
              </div>
              <div className="backdrop-blur-sm bg-black/30 p-8 rounded-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-3 font-sans tracking-tight">03. Independence</h3>
                <p className="text-neutral-300 leading-relaxed font-light text-lg">
                  No external dependencies. No data collection. No hidden agendas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team / Origin - Translucent */}
      <section className="relative border-t border-white/10">
        <div className="px-6 py-24 md:py-32">
          <div className="max-w-3xl mx-auto backdrop-blur-sm bg-black/30 p-8 md:p-12 rounded-lg border border-white/10">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-300 mb-12 font-sans font-semibold">[ Origin ]</p>
            
            <div className="space-y-6 text-neutral-300 leading-relaxed text-lg font-light">
              <p>
                Deepfake Detector was born from a simple observation: as generative AI becomes more sophisticated, 
                the average person has fewer tools to distinguish real from synthetic.
              </p>
              
              <p>
                What started as a research project into CNN-based detection methods evolved into a mission-driven 
                tool focused on making media verification accessible to everyone.
              </p>
              
              <p>
                Today, we continue to refine our model and expand our understanding of synthetic media detection, 
                always with the goal of preserving authenticity in the digital age.
              </p>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/20">
              <Link
                to="/detect"
                className="inline-block text-sm uppercase tracking-[0.2em] font-sans font-bold border-b border-white/30 pb-2 hover:border-white transition-colors text-white"
              >
                Begin Analysis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA - Translucent */}
      <section className="relative border-t border-white/10 py-20">
        <div className="text-center px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-300 mb-6 font-sans font-semibold">[ Get Started ]</p>
          <h2 className="text-3xl md:text-5xl font-light text-white mb-8">Verify an image today.</h2>
          <Link
            to="/detect"
            className="inline-flex items-center justify-center border border-white/30 bg-black/30 backdrop-blur-sm px-8 py-3 text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            Try the detector
          </Link>
        </div>
      </section>
    </div>
  );
}