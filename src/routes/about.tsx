import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "../components/SiteFrame";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Jonathan Rai" },
      {
        name: "description",
        content:
          "About Jonathan Rai — AI/ML Engineer from Kathmandu specializing in OCR, NLP, RAG pipelines and autonomous agent systems.",
      },
      { property: "og:title", content: "About — Jonathan Rai" },
      {
        property: "og:description",
        content:
          "AI Engineer with 2+ years building OCR, NLP, RAG and AI agent systems. B.Sc. CSIT, Tribhuvan University.",
      },
    ],
  }),
  component: AboutPage,
});

const SKILLS: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python"] },
  {
    group: "ML / DL Frameworks",
    items: ["TensorFlow", "PyTorch", "Scikit-learn"],
  },
  { group: "AI / LLM Frameworks", items: ["LangChain", "LangGraph", "CrewAI"] },
  {
    group: "Backend & Deployment",
    items: ["FastAPI", "Streamlit", "Docker"],
  },
  { group: "Databases", items: ["MySQL", "PostgreSQL"] },
  {
    group: "Vector Databases",
    items: ["Pinecone", "ChromaDB", "FAISS", "Weaviate"],
  },
  {
    group: "Computer Vision",
    items: ["OCR", "Image Classification", "Object Detection"],
  },
  {
    group: "NLP",
    items: ["Text Classification", "Sentiment Analysis", "RAG Pipelines"],
  },
  { group: "Version Control", items: ["Git", "GitLab"] },
];

const CERTS = [
  "Multi AI Agent Systems",
  "Deep Learning Specialization",
  "Structuring Machine Learning Projects",
  "Convolutional Neural Networks",
  "Python for Data Science, AI & Development",
  "Applied Data Science Capstone",
  "Omdena Real World AI Project — Hyderabad Chapter",
];

function AboutPage() {
  return (
    <>
      <SectionHeader
        index="01"
        label="About"
        title="Engineer of intelligent systems."
        description="AI Engineer with 2+ years of hands-on experience developing and deploying ML and deep learning models. Focused on OCR, NLP, and Generative AI — including RAG and autonomous agent systems. Seeking opportunities to contribute to innovative AI development in Japan through practical, scalable, research-driven solutions."
      />

      {/* Profile + Education */}
      <section className="grid grid-cols-12 border-b border-grid">
        <div className="col-span-12 lg:col-span-7 border-b lg:border-b-0 lg:border-r border-grid p-6 lg:p-12">
          <h3 className="font-mono text-xs text-accent uppercase tracking-widest mb-6">
            // Profile
          </h3>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 font-mono text-sm">
            {[
              ["Name", "Jonathan Rai"],
              ["Age", "28"],
              ["Location", "Kathmandu, Nepal"],
              ["Email", "jonathan.raia40@gmail.com"],
              ["Phone", "+977 9861034254"],
              ["Status", "Open to opportunities (Japan)"],
            ].map(([k, v]) => (
              <div key={k} className="border-b border-grid py-3">
                <dt className="text-[10px] text-slate uppercase tracking-widest">
                  {k}
                </dt>
                <dd className="mt-1 text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="col-span-12 lg:col-span-5 p-6 lg:p-12 bg-paper/40">
          <h3 className="font-mono text-xs text-accent uppercase tracking-widest mb-6">
            // Education
          </h3>
          <div className="border border-grid bg-surface p-6">
            <p className="font-mono text-[10px] text-slate uppercase tracking-widest">
              2016 — 2020
            </p>
            <h4 className="mt-2 font-display text-xl font-semibold tracking-tight">
              B.Sc. in Computer Science & Information Technology
            </h4>
            <p className="mt-2 text-sm text-slate">
              Orchid International College — Tribhuvan University
            </p>
            <div className="mt-4 flex items-center justify-between font-mono text-xs">
              <span className="text-slate uppercase tracking-widest">
                Final Score
              </span>
              <span className="text-ink tabular-nums">72.02 %</span>
            </div>
            <p className="mt-4 text-xs text-slate leading-relaxed">
              Final Project: Spam Detection in Email using a hand-coded
              Bayesian Classifier.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="grid grid-cols-12 border-b border-grid">
        <div className="col-span-12 lg:col-span-2 border-r border-grid p-6 bg-paper/40">
          <span className="font-mono text-[10px] text-accent uppercase tracking-widest">
            § 02 / Stack
          </span>
        </div>
        <div className="col-span-12 lg:col-span-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((s, i) => (
            <div
              key={s.group}
              className={`p-6 lg:p-8 border-grid ${
                i % 3 !== 2 ? "lg:border-r" : ""
              } ${i % 2 !== 1 ? "md:border-r lg:border-r" : ""} ${
                i < SKILLS.length - 1 ? "border-b" : ""
              }`}
            >
              <h4 className="font-mono text-[10px] text-slate uppercase tracking-widest mb-4">
                {s.group}
              </h4>
              <ul className="flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <li
                    key={it}
                    className="font-mono text-xs px-2.5 py-1 border border-grid text-ink"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-2 border-r border-grid p-6 bg-paper/40">
          <span className="font-mono text-[10px] text-accent uppercase tracking-widest">
            § 03 / Certs
          </span>
        </div>
        <ul className="col-span-12 lg:col-span-10 divide-y divide-grid">
          {CERTS.map((c, i) => (
            <li
              key={c}
              className="grid grid-cols-12 items-center px-6 lg:px-12 py-5"
            >
              <span className="col-span-2 lg:col-span-1 font-mono text-[10px] text-slate tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="col-span-10 lg:col-span-11 font-body text-base text-ink">
                {c}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
