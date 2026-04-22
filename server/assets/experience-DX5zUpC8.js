import { T as jsxRuntimeExports } from "./worker-entry-bqzVSLWP.js";
import { S as SectionHeader } from "./router-Dv5VDw_U.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const ROLES = [{
  company: "TAI Inc",
  title: "AI Engineer",
  period: "Dec 2023 — Present",
  current: true,
  bullets: ["Developed a QA Testing Agent pipeline to auto-generate Playwright scripts, execute UI tests, and create Allure reports.", "Implemented document verification by fine-tuning YOLO on a custom image dataset to validate uploaded documents.", "Built a Japanese Driving License OCR system for data extraction and export in CSV, JSON, and Excel.", "Implemented Retrieval-Augmented Generation (RAG) pipelines for Q&A systems.", "Enhanced LLM outputs using model merging and Mixture-of-Agents (MoA) techniques.", "Built AI agents using LangGraph and CrewAI for autonomous decision-making workflows.", "Optimized Hugging Face models via quantization and LoRA fine-tuning for efficient inference."]
}, {
  company: "TAI Inc",
  title: "AI Engineer Intern",
  period: "Sept 2023 — Dec 2023",
  bullets: ["Implemented machine learning concepts and algorithms from scratch.", "Built a Next-Word Suggestion application for Nepali text using deep learning.", "Preprocessed and curated datasets for model training and evaluation.", "Explored deep learning architectures (ANN, CNN, RNN) across projects.", "Deployed ML models into production using FastAPI and Streamlit."]
}, {
  company: "Deerwalk Services",
  title: "Associate Software Engineer",
  period: "Feb 2022 — Jul 2022",
  bullets: ["Contributed to backend development of US healthcare applications.", "Resolved system bugs and implemented requirements based on client feedback.", "Worked closely with cross-functional teams to ensure timely delivery."]
}, {
  company: "Mark Fifty I.T Solutions",
  title: "Backend Developer Intern",
  period: "Aug 2020 — Feb 2021",
  bullets: ["Developed and maintained backend features using Python and Django.", "Debugged and improved performance of existing backend systems.", "Collaborated with the frontend team to integrate APIs."]
}];
function ExperiencePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { index: "03", label: "Experience", title: "Five years across AI and backend systems.", description: "From backend engineering on healthcare applications to architecting agentic AI systems and OCR pipelines for Japanese enterprise clients." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "divide-y divide-grid", children: ROLES.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "grid grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 lg:col-span-3 border-b lg:border-b-0 lg:border-r border-grid p-6 lg:p-8 bg-paper/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-slate uppercase tracking-widest", children: r.period }),
          r.current && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 font-mono text-[10px] text-accent uppercase tracking-widest", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 bg-accent rounded-full animate-pulse" }),
            "Current"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-semibold tracking-tight text-ink", children: r.company }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-mono text-xs text-slate uppercase tracking-widest", children: r.title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 lg:col-span-9 p-6 lg:p-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: r.bullets.map((b, bi) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-accent tabular-nums mt-1.5 shrink-0", children: String(bi + 1).padStart(2, "0") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base text-ink leading-relaxed text-pretty", children: b })
      ] }, bi)) }) })
    ] }, i)) })
  ] });
}
export {
  ExperiencePage as component
};
