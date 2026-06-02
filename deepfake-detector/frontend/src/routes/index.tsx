import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Deepfake Detector — Verify media authenticity" },
      { name: "description", content: "Upload an image and instantly check whether it's a deepfake. Fast, private, minimalist." },
      { property: "og:title", content: "Deepfake Detector" },
      { property: "og:description", content: "Verify media authenticity in seconds." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 md:py-32 text-center">
      <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary mb-6 ring-1 ring-primary/20">
        AI-powered authenticity
      </span>
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
        Detect deepfakes<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">in a single click.</span>
      </h1>
      <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
        Upload an image and our CNN model returns a verdict with a confidence score in seconds. 
        Minimal interface. Maximum clarity.
      </p>
      <div className="mt-10 flex items-center justify-center gap-3">
        <Link
          to="/detect"
          className="group relative inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-0.5"
        >
          Try the detector
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          to="/how-it-works"
          className="inline-flex items-center justify-center rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
        >
          How it works
        </Link>
      </div>
    </section>
  );
}
