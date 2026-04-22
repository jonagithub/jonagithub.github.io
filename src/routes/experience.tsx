import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "../components/SiteFrame";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Jonathan Rai" },
      {
        name: "description",
        content:
          "Work history of Jonathan Rai: AI Engineer at TAI Inc, Associate Software Engineer at Deerwalk Services, Backend Intern at Mark Fifty.",
      },
      { property: "og:title", content: "Experience — Jonathan Rai" },
      {
        property: "og:description",
        content:
          "Professional history across AI engineering, backend development and ML internships.",
      },
    ],
  }),
  component: ExperiencePage,
});

const ROLES = [
  {
    company: "TAI Inc",
    title: "AI Engineer",
    period: "Dec 2023 — Present",
    current: true,
    bullets: [
      "Developed a QA Testing Agent pipeline to auto-generate Playwright scripts, execute UI tests, and create Allure reports.",
      "Implemented document verification by fine-tuning YOLO on a custom image dataset to validate uploaded documents.",
      "Built a Japanese Driving License OCR system for data extraction and export in CSV, JSON, and Excel.",
      "Implemented Retrieval-Augmented Generation (RAG) pipelines for Q&A systems.",
      "Enhanced LLM outputs using model merging and Mixture-of-Agents (MoA) techniques.",
      "Built AI agents using LangGraph and CrewAI for autonomous decision-making workflows.",
      "Optimized Hugging Face models via quantization and LoRA fine-tuning for efficient inference.",
    ],
  },
  {
    company: "TAI Inc",
    title: "AI Engineer Intern",
    period: "Sept 2023 — Dec 2023",
    bullets: [
      "Implemented machine learning concepts and algorithms from scratch.",
      "Built a Next-Word Suggestion application for Nepali text using deep learning.",
      "Preprocessed and curated datasets for model training and evaluation.",
      "Explored deep learning architectures (ANN, CNN, RNN) across projects.",
      "Deployed ML models into production using FastAPI and Streamlit.",
    ],
  },
  {
    company: "Deerwalk Services",
    title: "Associate Software Engineer",
    period: "Feb 2022 — Jul 2022",
    bullets: [
      "Contributed to backend development of US healthcare applications.",
      "Resolved system bugs and implemented requirements based on client feedback.",
      "Worked closely with cross-functional teams to ensure timely delivery.",
    ],
  },
  {
    company: "Mark Fifty I.T Solutions",
    title: "Backend Developer Intern",
    period: "Aug 2020 — Feb 2021",
    bullets: [
      "Developed and maintained backend features using Python and Django.",
      "Debugged and improved performance of existing backend systems.",
      "Collaborated with the frontend team to integrate APIs.",
    ],
  },
];

function ExperiencePage() {
  return (
    <>
      <SectionHeader
        index="03"
        label="Experience"
        title="Five years across AI and backend systems."
        description="From backend engineering on healthcare applications to architecting agentic AI systems and OCR pipelines for Japanese enterprise clients."
      />

      <section className="divide-y divide-grid">
        {ROLES.map((r, i) => (
          <article key={i} className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-3 border-b lg:border-b-0 lg:border-r border-grid p-6 lg:p-8 bg-paper/40">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-[10px] text-slate uppercase tracking-widest">
                  {r.period}
                </span>
                {r.current && (
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-accent uppercase tracking-widest">
                    <span className="size-1.5 bg-accent rounded-full animate-pulse" />
                    Current
                  </span>
                )}
              </div>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
                {r.company}
              </h3>
              <p className="mt-1 font-mono text-xs text-slate uppercase tracking-widest">
                {r.title}
              </p>
            </div>
            <div className="col-span-12 lg:col-span-9 p-6 lg:p-12">
              <ul className="space-y-4">
                {r.bullets.map((b, bi) => (
                  <li key={bi} className="flex gap-4">
                    <span className="font-mono text-[10px] text-accent tabular-nums mt-1.5 shrink-0">
                      {String(bi + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base text-ink leading-relaxed text-pretty">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
