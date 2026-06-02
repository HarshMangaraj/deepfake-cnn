import { createFileRoute } from "@tanstack/react-router";

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
  return (
    <section className="mx-auto max-w-2xl px-6 py-20 md:py-28">
      <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary mb-6 ring-1 ring-primary/20">About</span>
      <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
        Media authenticity,<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">simplified.</span>
      </h1>
      <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
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
    </section>
  );
}