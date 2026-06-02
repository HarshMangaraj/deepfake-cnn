import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Deepfake Detector — Authenticity" },
      { name: "description", content: "Verify media authenticity in seconds." },
    ],
  }),
  component: Index,
});

function Index() {
  const { scrollY } = useScroll();
  const yMesh = useTransform(scrollY, [0, 3000], [0, -80]);

  const textReveal = {
    initial: { y: "120%" },
    animate: { y: "0%" },
  };

  return (
    <div className="flex flex-col min-h-screen font-serif bg-black">
      
      {/* Hero Section - NO BLUR */}
      <section className="relative h-screen flex flex-col justify-end px-6 pb-24 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <video 
            src="../../public/10140734-uhd_4096_2160_25fps.mp4"
            className="w-full h-full object-cover opacity-30" 
            autoPlay
            loop
            muted
            playsInline
          />
          {/* Solid black gradient overlay - no blur */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />
        </div>
        
        <div className="max-w-7xl relative z-10 font-sans">
          <div className="overflow-hidden mb-4">
            <motion.p 
              variants={textReveal}
              initial="initial"
              animate="animate"
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="text-xs md:text-sm uppercase tracking-[0.3em] text-neutral-500 mb-8 font-semibold"
            >
              [ I. The standard of truth ]
            </motion.p>
          </div>
          
          <h1 className="text-6xl md:text-[9vw] font-bold tracking-tighter leading-[0.85] uppercase text-white">
            <div className="overflow-hidden pb-2">
              <motion.div
                variants={textReveal}
                initial="initial"
                animate="animate"
                transition={{ duration: 1, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
              >
                Preserving
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                variants={textReveal}
                initial="initial"
                animate="animate"
                transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
                className="italic font-serif font-light text-neutral-400"
              >
                Authenticity.
              </motion.div>
            </div>
          </h1>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-12 right-6 md:right-12 z-20 font-sans"
        >
          <Link
            to="/detect"
            className="group relative flex items-center justify-center h-32 w-32 md:h-40 md:w-40 rounded-full border border-neutral-700 bg-black/50 hover:bg-white hover:border-white hover:text-black transition-all duration-700"
          >
            <span className="text-xs uppercase tracking-widest font-bold text-white group-hover:text-black">Begin</span>
          </Link>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-black border-t border-neutral-900">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Image */}
          <div className="relative h-[50vh] md:h-auto overflow-hidden">
            <img
              src="../../public/image2.png"
              alt="AI neural network visualization representing deep learning detection"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
          </div>
          {/* Right: Text */}
          <div className="flex flex-col justify-center px-8 md:px-20 py-24 md:py-32">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-600 mb-12 font-sans font-semibold">[ II. The Challenge ]</p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="text-2xl md:text-4xl font-light leading-relaxed tracking-tight text-white"
            >
              AI-generated media is evolving faster than ever. 
              <br /><br />
              <span className="text-neutral-500">Our mission is to stay ahead, providing a reliable shield against digital deception.</span>
            </motion.h2>
          </div>
        </div>
      </section>

      {/* Intelligence Section */}
      <section className="py-32 px-6 md:px-24 bg-neutral-950 border-t border-neutral-900 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center">
          <div className="md:col-span-5 overflow-hidden h-[600px] md:h-[800px] relative border border-neutral-800">
            <video  
              src="../../public/video2.mp4"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-600 mb-12 font-sans font-semibold">[ III. How It Works ]</p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            >
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight mb-8 text-white">
                Advanced CNN architecture for deepfake detection.
              </h2>
              <p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed mb-8">
                Our ResNet18 model analyzes pixel-level inconsistencies, frequency domain artifacts, and spatial irregularities that reveal AI-generated content.
              </p>
              <Link to="/detect" className="inline-block border-b border-white pb-1 uppercase tracking-widest text-xs font-sans font-bold text-white hover:text-neutral-400 hover:border-neutral-400 transition-colors">
                Explore the Technology
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Parallax Break - NO BLUR */}
      <section className="h-[70vh] relative overflow-hidden flex items-center justify-center border-y border-neutral-900 bg-black">
        <motion.div 
          style={{ y: yMesh }} 
          className="absolute inset-0 -top-48 -bottom-48 z-0 opacity-30"
        >
          <video
            src="../../public/video3.mp4"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </motion.div>
        <div className="text-center relative z-10 p-16 bg-black/80 border border-neutral-800">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-sans font-bold mb-6">[ IV. Detection Technology ]</p>
          <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter font-sans text-white">
            Spot the Fake
          </h2>
        </div>
      </section>

      {/* The Process */}
      <section className="py-32 px-6 md:px-24 bg-black">
        <div className="mb-24 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-600 mb-4 font-sans font-semibold">[ V. Detection Process ]</p>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white">Three steps to truth.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "Upload",
              desc: "Securely upload any image or video. Your file is processed locally in your browser and never stored on our servers.",
              img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800",
              alt: "Upload interface for media verification"
            },
            {
              title: "Analysis",
              desc: "Our AI scans for manipulation patterns, including face swapping, lip-sync forgery, and generative synthesis artifacts.",
              img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
              alt: "AI analyzing digital media for authenticity"
            },
            {
              title: "Verdict",
              desc: "Receive a clear result with confidence score. Understand exactly why our model reached its conclusion.",
              img: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&q=80&w=800",
              alt: "Verification result showing authenticity score"
            }
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.76, 0, 0.24, 1] }}
              className="flex flex-col"
            >
              <div className="overflow-hidden h-56 mb-8 border border-neutral-800 bg-neutral-900">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="border-t border-neutral-800 pt-8">
                <h3 className="text-xl font-bold uppercase tracking-widest mb-4 font-sans text-white">{item.title}</h3>
                <p className="text-neutral-500 leading-relaxed font-light text-lg">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="border-t border-neutral-900">
        <div className="grid grid-cols-3 h-[40vh] md:h-[60vh]">
          {[
            { src: "https://images.unsplash.com/photo-1542080681-b52d382432af?auto=format&fit=crop&q=80&w=800", alt: "Real human portrait - authentic" },
            { src: "../../public/image3.png", alt: "AI-generated face - deepfake example" },
            { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800", alt: "Comparative analysis of real vs fake" },
          ].map((img, i) => (
            <div key={i} className="overflow-hidden relative group">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-700" />
            </div>
          ))}
        </div>
      </section>

      {/* Footer Banner - NO BLUR */}
      <section className="relative py-48 px-6 flex flex-col items-center justify-center text-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 opacity-20">
          <video
            src="../../public/video4.mp4"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="relative z-10">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-12 font-sans text-white">
            Verify Truth
          </h2>
          <Link
            to="/detect"
            className="text-xs uppercase tracking-[0.2em] font-sans font-bold border-b border-white/30 pb-2 hover:border-white transition-colors text-white"
          >
            Begin Analysis
          </Link>
        </div>
      </section>
    </div>
  );
}