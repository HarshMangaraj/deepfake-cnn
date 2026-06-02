import { createFileRoute } from "@tanstack/react-router";

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
    title: "Upload",
    body: "Choose an image from your device. It's sent securely to our detection API and never stored.",
  },
  {
    n: "02",
    title: "Analyze",
    body: "A deep neural network inspects pixel-level artifacts, frequency patterns, and facial inconsistencies.",
  },
  {
    n: "03",
    title: "Verdict",
    body: "You get a clear label — real or fake — along with a confidence score you can act on.",
  },
];

function HowItWorks() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-[0.2em] text-primary">Pipeline</span>
        <h1 className="mt-4 text-4xl md:text-5xl font-medium tracking-tight text-foreground">
          How it works
        </h1>
        <p className="mt-4 text-muted-foreground">
          Three steps. No noise. Just an answer.
        </p>
      </div>

      <div className="relative border-l border-border/50 ml-4 md:ml-6 space-y-12 pb-4">
        {steps.map((s) => (
          <div key={s.n} className="relative pl-8 md:pl-12 group">
            <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-background border-2 border-primary ring-4 ring-background group-hover:bg-primary transition-colors" />
            <div className="text-primary font-mono text-xs mb-2 bg-primary/10 inline-block px-2 py-0.5 rounded-md">{s.n}</div>
            <div>
              <h2 className="text-xl font-semibold text-foreground tracking-tight">{s.title}</h2>
              <p className="mt-2 text-base text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}