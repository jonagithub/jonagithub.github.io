import { T as jsxRuntimeExports } from "./worker-entry-bqzVSLWP.js";
import { S as SectionHeader } from "./router-Dv5VDw_U.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const SKILLS = [{
  group: "Languages",
  items: ["Python"]
}, {
  group: "ML / DL Frameworks",
  items: ["TensorFlow", "PyTorch", "Scikit-learn"]
}, {
  group: "AI / LLM Frameworks",
  items: ["LangChain", "LangGraph", "CrewAI"]
}, {
  group: "Backend & Deployment",
  items: ["FastAPI", "Streamlit", "Docker"]
}, {
  group: "Databases",
  items: ["MySQL", "PostgreSQL"]
}, {
  group: "Vector Databases",
  items: ["Pinecone", "ChromaDB", "FAISS", "Weaviate"]
}, {
  group: "Computer Vision",
  items: ["OCR", "Image Classification", "Object Detection"]
}, {
  group: "NLP",
  items: ["Text Classification", "Sentiment Analysis", "RAG Pipelines"]
}, {
  group: "Version Control",
  items: ["Git", "GitLab"]
}];
const CERTS = ["Multi AI Agent Systems", "Deep Learning Specialization", "Structuring Machine Learning Projects", "Convolutional Neural Networks", "Python for Data Science, AI & Development", "Applied Data Science Capstone", "Omdena Real World AI Project — Hyderabad Chapter"];
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { index: "01", label: "About", title: "Engineer of intelligent systems.", description: "AI Engineer with 2+ years of hands-on experience developing and deploying ML and deep learning models. Focused on OCR, NLP, and Generative AI — including RAG and autonomous agent systems. Seeking opportunities to contribute to innovative AI development in Japan through practical, scalable, research-driven solutions." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid grid-cols-12 border-b border-grid", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 lg:col-span-7 border-b lg:border-b-0 lg:border-r border-grid p-6 lg:p-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-mono text-xs text-accent uppercase tracking-widest mb-6", children: "// Profile" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dl", { className: "grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 font-mono text-sm", children: [["Name", "Jonathan Rai"], ["Age", "28"], ["Location", "Kathmandu, Nepal"], ["Email", "jonathan.raia40@gmail.com"], ["Phone", "+977 9861034254"], ["Status", "Open to opportunities (Japan)"]].map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-grid py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-[10px] text-slate uppercase tracking-widest", children: k }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "mt-1 text-ink", children: v })
        ] }, k)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 lg:col-span-5 p-6 lg:p-12 bg-paper/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-mono text-xs text-accent uppercase tracking-widest mb-6", children: "// Education" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-grid bg-surface p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] text-slate uppercase tracking-widest", children: "2016 — 2020" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-2 font-display text-xl font-semibold tracking-tight", children: "B.Sc. in Computer Science & Information Technology" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-slate", children: "Orchid International College — Tribhuvan University" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between font-mono text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate uppercase tracking-widest", children: "Final Score" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ink tabular-nums", children: "72.02 %" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-slate leading-relaxed", children: "Final Project: Spam Detection in Email using a hand-coded Bayesian Classifier." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid grid-cols-12 border-b border-grid", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 lg:col-span-2 border-r border-grid p-6 bg-paper/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-accent uppercase tracking-widest", children: "§ 02 / Stack" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 lg:col-span-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3", children: SKILLS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-6 lg:p-8 border-grid ${i % 3 !== 2 ? "lg:border-r" : ""} ${i % 2 !== 1 ? "md:border-r lg:border-r" : ""} ${i < SKILLS.length - 1 ? "border-b" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-mono text-[10px] text-slate uppercase tracking-widest mb-4", children: s.group }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-wrap gap-2", children: s.items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "font-mono text-xs px-2.5 py-1 border border-grid text-ink", children: it }, it)) })
      ] }, s.group)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 lg:col-span-2 border-r border-grid p-6 bg-paper/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-accent uppercase tracking-widest", children: "§ 03 / Certs" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "col-span-12 lg:col-span-10 divide-y divide-grid", children: CERTS.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "grid grid-cols-12 items-center px-6 lg:px-12 py-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "col-span-2 lg:col-span-1 font-mono text-[10px] text-slate tabular-nums", children: String(i + 1).padStart(2, "0") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "col-span-10 lg:col-span-11 font-body text-base text-ink", children: c })
      ] }, c)) })
    ] })
  ] });
}
export {
  AboutPage as component
};
