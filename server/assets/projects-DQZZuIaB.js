import { T as jsxRuntimeExports } from "./worker-entry-bqzVSLWP.js";
import { S as SectionHeader } from "./router-Dv5VDw_U.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const PROJECTS = [{
  no: "01",
  title: "QA Testing Automation Agent",
  org: "TAI Inc",
  year: "2024",
  team: "3 members",
  role: "AI Engineer",
  stack: ["Python", "LangGraph", "Allure", "Streamlit", "FastAPI", "Docker"],
  overview: "AI-enabled testing pipeline that auto-generates and executes Playwright test scripts from test-case Excel files, producing Allure reports for QA engineers.",
  highlight: true
}, {
  no: "02",
  title: "Document Verification System",
  org: "TAI Inc",
  year: "2024",
  team: "3 members",
  role: "AI Engineer",
  stack: ["Python", "YOLO", "Roboflow"],
  overview: "Document verification system that authenticates document accuracy using a fine-tuned YOLO model and OCR confidence scoring.",
  highlight: true
}, {
  no: "03",
  title: "Japanese Driving License OCR",
  org: "TAI Inc",
  year: "2024",
  team: "Individual",
  role: "AI Engineer",
  stack: ["Python", "OpenCV", "PaddleOCR", "Tesseract", "Streamlit"],
  overview: "OCR application extracting structured data fields from Japanese driver licenses with multi-format export (CSV, Excel, JSON).",
  highlight: true
}, {
  no: "04",
  title: "Next-Word Suggestion for Nepali Text",
  org: "TAI Inc",
  year: "2023",
  team: "Individual",
  role: "AI Engineer Intern",
  stack: ["Python", "TensorFlow", "NLP"],
  overview: "Next-word prediction model for Nepali text that converts romanized input into Nepali Unicode output."
}, {
  no: "05",
  title: "Chat with Multiple PDFs",
  org: "Personal",
  year: "2024",
  team: "Individual",
  role: "AI Engineer",
  stack: ["Python", "Streamlit", "LangChain", "Groq API", "VectorDB", "PyPDF2"],
  overview: "LLM-based PDF Q&A system: upload multiple PDFs, generate vector embeddings, retrieve contextually relevant answers in real time.",
  highlight: true
}, {
  no: "06",
  title: "Multiple Disease Prediction System",
  org: "Personal",
  year: "2022",
  team: "Individual",
  role: "Engineer",
  stack: ["Python", "Scikit-learn", "Streamlit", "FastAPI"],
  overview: "ML system predicting Diabetes, Heart Disease, and Parkinson's from user-provided medical parameters. Logistic Regression and SVM compared; deployed via Streamlit UI and FastAPI service."
}, {
  no: "07",
  title: "Content-Based Movie Recommender",
  org: "Personal",
  year: "2022",
  team: "Individual",
  role: "Engineer",
  stack: ["Python", "Pandas", "NumPy", "Scikit-learn"],
  overview: "Movie recommender system suggesting similar films using content-based filtering and cosine similarity."
}, {
  no: "08",
  title: "Face Recognition System",
  org: "Personal",
  year: "2020",
  team: "Individual",
  role: "Engineer",
  stack: ["Python", "OpenCV", "Tkinter"],
  overview: "Supervised face recognition via webcam or image upload. Preprocessing (grayscale, resize, sharpen), feature extraction and real-time GUI recognition."
}, {
  no: "09",
  title: "Spam Detection — Bayesian Classifier",
  org: "Tribhuvan University",
  year: "2020",
  team: "4 members",
  role: "Final Year Project",
  stack: ["Python", "Tkinter"],
  overview: "GUI-based spam detection using a hand-coded Naive Bayes algorithm — no external ML libraries."
}];
function ProjectsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { index: "02", label: "Projects", title: "Selected work, 2020 — 2025.", description: "A catalogue of shipped systems across OCR, NLP, RAG, autonomous agents and classical ML. Mix of enterprise work at TAI Inc and personal research." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "divide-y divide-grid", children: PROJECTS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "grid grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 lg:col-span-2 border-b lg:border-b-0 lg:border-r border-grid p-6 bg-paper/40 flex lg:flex-col items-center lg:items-start justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-3xl lg:text-5xl font-bold tracking-tighter tabular-nums text-ink", children: p.no }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right lg:text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] text-slate uppercase tracking-widest", children: p.year }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] text-slate uppercase tracking-widest", children: p.team })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 lg:col-span-10 p-6 lg:p-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-baseline justify-between gap-4 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-2xl lg:text-4xl font-semibold tracking-tight text-balance flex items-center gap-3", children: [
            p.title,
            p.highlight && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block size-2 bg-accent" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[11px] text-slate uppercase tracking-widest", children: [
            p.org,
            " · ",
            p.role
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-slate leading-relaxed text-pretty max-w-[70ch]", children: p.overview }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 flex flex-wrap gap-2", children: p.stack.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "font-mono text-xs px-2.5 py-1 border border-grid text-ink hover:border-ink transition-colors", children: t }, t)) })
      ] })
    ] }, p.no)) })
  ] });
}
export {
  ProjectsPage as component
};
