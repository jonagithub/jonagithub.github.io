import { T as jsxRuntimeExports } from "./worker-entry-bqzVSLWP.js";
import { S as SectionHeader } from "./router-Dv5VDw_U.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const CHANNELS = [{
  label: "Email",
  value: "jonathan.raia40@gmail.com",
  href: "mailto:jonathan.raia40@gmail.com",
  code: "CH-01"
}, {
  label: "LinkedIn",
  value: "jonathan-rai-52106621b",
  href: "https://www.linkedin.com/in/jonathan-rai-52106621b/",
  code: "CH-02"
}, {
  label: "GitHub",
  value: "github.com/jonagithub",
  href: "https://github.com/jonagithub",
  code: "CH-03"
}, {
  label: "Phone",
  value: "+977 9861034254",
  href: "tel:+9779861034254",
  code: "CH-04"
}];
function ContactPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { index: "04", label: "Contact", title: "Establish a comm channel.", description: "Open to AI engineering opportunities — particularly in Japan — and to research-driven collaborations on OCR, NLP and agentic systems." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid grid-cols-12 border-b border-grid", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 lg:col-span-7 border-b lg:border-b-0 lg:border-r border-grid", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-grid", children: CHANNELS.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: c.href, target: c.href.startsWith("http") ? "_blank" : void 0, rel: c.href.startsWith("http") ? "noopener noreferrer" : void 0, className: "group grid grid-cols-12 items-center px-6 lg:px-12 py-8 hover:bg-paper/60 transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "col-span-3 lg:col-span-2 font-mono text-[10px] text-slate uppercase tracking-widest", children: c.code }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "col-span-3 lg:col-span-2 font-mono text-xs text-accent uppercase tracking-widest", children: c.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "col-span-12 lg:col-span-7 mt-2 lg:mt-0 font-display text-lg lg:text-2xl font-semibold tracking-tight text-ink truncate normal-case lowercase", children: c.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden lg:flex col-span-1 justify-end font-mono text-sm text-ink group-hover:text-accent group-hover:translate-x-1 transition-all", children: "→" })
      ] }) }, c.code)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "col-span-12 lg:col-span-5 p-6 lg:p-12 bg-paper/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-mono text-xs text-accent uppercase tracking-widest mb-6", children: "// Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-grid bg-surface p-6 space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-slate uppercase tracking-widest", children: "Availability" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 font-mono text-xs text-ink", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 bg-emerald-500 rounded-full animate-pulse" }),
              "Open"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-t border-grid pt-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-slate uppercase tracking-widest", children: "Preferred Region" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-ink", children: "Japan / Remote" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-t border-grid pt-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-slate uppercase tracking-widest", children: "Response Time" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-ink", children: "< 48h" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-t border-grid pt-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-slate uppercase tracking-widest", children: "Timezone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-ink", children: "UTC +5:45" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:jonathan.raia40@gmail.com", className: "mt-8 group flex items-center justify-between bg-ink text-surface px-6 py-5 hover:bg-accent transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg font-semibold uppercase tracking-tight", children: "Send a message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs uppercase tracking-widest border border-surface/30 px-3 py-1.5 group-hover:border-surface", children: "EXEC →" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ContactPage as component
};
