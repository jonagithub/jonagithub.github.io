import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "../components/SiteFrame";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Jonathan Rai" },
      {
        name: "description",
        content:
          "Selected AI/ML projects by Jonathan Rai — QA testing agents, document verification, Japanese OCR, RAG pipelines, and more.",
      },
      { property: "og:title", content: "Projects — Jonathan Rai" },
      {
        property: "og:description",
        content:
          "Selected AI/ML projects: QA testing agents, OCR systems, RAG pipelines, recommender systems and disease prediction.",
      },
    ],
  }),
  component: ProjectsPage,
});

type Project = {
  no: string;
  title: string;
  org: string;
  year: string;
  team: string;
  role: string;
  stack: string[];
  overview: string;
  highlight?: boolean;
};

const PROJECTS: Project[] = [
  {
    no: "01",
    title: "QA Testing Automation Agent",
    org: "TAI Inc",
    year: "2024",
    team: "3 members",
    role: "AI Engineer",
    stack: ["Python", "LangGraph", "Allure", "Streamlit", "FastAPI", "Docker"],
    overview:
      "AI-enabled testing pipeline that auto-generates and executes Playwright test scripts from test-case Excel files, producing Allure reports for QA engineers.",
    highlight: true,
  },
  {
    no: "02",
    title: "Document Verification System",
    org: "TAI Inc",
    year: "2024",
    team: "3 members",
    role: "AI Engineer",
    stack: ["Python", "YOLO", "Roboflow"],
    overview:
      "Document verification system that authenticates document accuracy using a fine-tuned YOLO model and OCR confidence scoring.",
    highlight: true,
  },
  {
    no: "03",
    title: "Japanese Driving License OCR",
    org: "TAI Inc",
    year: "2024",
    team: "Individual",
    role: "AI Engineer",
    stack: ["Python", "OpenCV", "PaddleOCR", "Tesseract", "Streamlit"],
    overview:
      "OCR application extracting structured data fields from Japanese driver licenses with multi-format export (CSV, Excel, JSON).",
    highlight: true,
  },
  {
    no: "04",
    title: "Next-Word Suggestion for Nepali Text",
    org: "TAI Inc",
    year: "2023",
    team: "Individual",
    role: "AI Engineer Intern",
    stack: ["Python", "TensorFlow", "NLP"],
    overview:
      "Next-word prediction model for Nepali text that converts romanized input into Nepali Unicode output.",
  },
  {
    no: "05",
    title: "Chat with Multiple PDFs",
    org: "Personal",
    year: "2024",
    team: "Individual",
    role: "AI Engineer",
    stack: ["Python", "Streamlit", "LangChain", "Groq API", "VectorDB", "PyPDF2"],
    overview:
      "LLM-based PDF Q&A system: upload multiple PDFs, generate vector embeddings, retrieve contextually relevant answers in real time.",
    highlight: true,
  },
  {
    no: "06",
    title: "Multiple Disease Prediction System",
    org: "Personal",
    year: "2022",
    team: "Individual",
    role: "Engineer",
    stack: ["Python", "Scikit-learn", "Streamlit", "FastAPI"],
    overview:
      "ML system predicting Diabetes, Heart Disease, and Parkinson's from user-provided medical parameters. Logistic Regression and SVM compared; deployed via Streamlit UI and FastAPI service.",
  },
  {
    no: "07",
    title: "Content-Based Movie Recommender",
    org: "Personal",
    year: "2022",
    team: "Individual",
    role: "Engineer",
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    overview:
      "Movie recommender system suggesting similar films using content-based filtering and cosine similarity.",
  },
  {
    no: "08",
    title: "Face Recognition System",
    org: "Personal",
    year: "2020",
    team: "Individual",
    role: "Engineer",
    stack: ["Python", "OpenCV", "Tkinter"],
    overview:
      "Supervised face recognition via webcam or image upload. Preprocessing (grayscale, resize, sharpen), feature extraction and real-time GUI recognition.",
  },
  {
    no: "09",
    title: "Spam Detection — Bayesian Classifier",
    org: "Tribhuvan University",
    year: "2020",
    team: "4 members",
    role: "Final Year Project",
    stack: ["Python", "Tkinter"],
    overview:
      "GUI-based spam detection using a hand-coded Naive Bayes algorithm — no external ML libraries.",
  },
];

function ProjectsPage() {
  return (
    <>
      <SectionHeader
        index="02"
        label="Projects"
        title="Selected work, 2020 — 2025."
        description="A catalogue of shipped systems across OCR, NLP, RAG, autonomous agents and classical ML. Mix of enterprise work at TAI Inc and personal research."
      />

      <section className="divide-y divide-grid">
        {PROJECTS.map((p) => (
          <article key={p.no} className="grid grid-cols-12">
            {/* Index */}
            <div className="col-span-12 lg:col-span-2 border-b lg:border-b-0 lg:border-r border-grid p-6 bg-paper/40 flex lg:flex-col items-center lg:items-start justify-between gap-4">
              <span className="font-display text-3xl lg:text-5xl font-bold tracking-tighter tabular-nums text-ink">
                {p.no}
              </span>
              <div className="text-right lg:text-left">
                <div className="font-mono text-[10px] text-slate uppercase tracking-widest">
                  {p.year}
                </div>
                <div className="font-mono text-[10px] text-slate uppercase tracking-widest">
                  {p.team}
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="col-span-12 lg:col-span-10 p-6 lg:p-12">
              <div className="flex flex-wrap items-baseline justify-between gap-4 mb-4">
                <h3 className="font-display text-2xl lg:text-4xl font-semibold tracking-tight text-balance flex items-center gap-3">
                  {p.title}
                  {p.highlight && (
                    <span className="inline-block size-2 bg-accent" />
                  )}
                </h3>
                <span className="font-mono text-[11px] text-slate uppercase tracking-widest">
                  {p.org} · {p.role}
                </span>
              </div>
              <p className="text-base text-slate leading-relaxed text-pretty max-w-[70ch]">
                {p.overview}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <li
                    key={t}
                    className="font-mono text-xs px-2.5 py-1 border border-grid text-ink hover:border-ink transition-colors"
                  >
                    {t}
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
