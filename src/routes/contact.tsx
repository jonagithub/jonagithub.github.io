import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "../components/SiteFrame";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Jonathan Rai" },
      {
        name: "description",
        content:
          "Get in touch with Jonathan Rai — AI/ML Engineer based in Kathmandu, open to roles in Japan and remote opportunities.",
      },
      { property: "og:title", content: "Contact — Jonathan Rai" },
      {
        property: "og:description",
        content:
          "Reach Jonathan Rai via email, LinkedIn or GitHub. Open to AI engineering opportunities in Japan.",
      },
    ],
  }),
  component: ContactPage,
});

const CHANNELS = [
  {
    label: "Email",
    value: "jonathan.raia40@gmail.com",
    href: "mailto:jonathan.raia40@gmail.com",
    code: "CH-01",
  },
  {
    label: "LinkedIn",
    value: "jonathan-rai-52106621b",
    href: "https://www.linkedin.com/in/jonathan-rai-52106621b/",
    code: "CH-02",
  },
  {
    label: "GitHub",
    value: "github.com/jonagithub",
    href: "https://github.com/jonagithub",
    code: "CH-03",
  },
  {
    label: "Phone",
    value: "+977 9861034254",
    href: "tel:+9779861034254",
    code: "CH-04",
  },
];

function ContactPage() {
  return (
    <>
      <SectionHeader
        index="04"
        label="Contact"
        title="Establish a comm channel."
        description="Open to AI engineering opportunities — particularly in Japan — and to research-driven collaborations on OCR, NLP and agentic systems."
      />

      <section className="grid grid-cols-12 border-b border-grid">
        <div className="col-span-12 lg:col-span-7 border-b lg:border-b-0 lg:border-r border-grid">
          <ul className="divide-y divide-grid">
            {CHANNELS.map((c) => (
              <li key={c.code}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group grid grid-cols-12 items-center px-6 lg:px-12 py-8 hover:bg-paper/60 transition-colors"
                >
                  <span className="col-span-3 lg:col-span-2 font-mono text-[10px] text-slate uppercase tracking-widest">
                    {c.code}
                  </span>
                  <span className="col-span-3 lg:col-span-2 font-mono text-xs text-accent uppercase tracking-widest">
                    {c.label}
                  </span>
                  <span className="col-span-12 lg:col-span-7 mt-2 lg:mt-0 font-display text-lg lg:text-2xl font-semibold tracking-tight text-ink truncate normal-case lowercase">
                    {c.value}
                  </span>
                  <span className="hidden lg:flex col-span-1 justify-end font-mono text-sm text-ink group-hover:text-accent group-hover:translate-x-1 transition-all">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <aside className="col-span-12 lg:col-span-5 p-6 lg:p-12 bg-paper/40">
          <h3 className="font-mono text-xs text-accent uppercase tracking-widest mb-6">
            // Status
          </h3>
          <div className="border border-grid bg-surface p-6 space-y-5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-slate uppercase tracking-widest">
                Availability
              </span>
              <span className="inline-flex items-center gap-2 font-mono text-xs text-ink">
                <span className="size-1.5 bg-emerald-500 rounded-full animate-pulse" />
                Open
              </span>
            </div>
            <div className="flex items-center justify-between border-t border-grid pt-5">
              <span className="font-mono text-[10px] text-slate uppercase tracking-widest">
                Preferred Region
              </span>
              <span className="font-mono text-xs text-ink">Japan / Remote</span>
            </div>
            <div className="flex items-center justify-between border-t border-grid pt-5">
              <span className="font-mono text-[10px] text-slate uppercase tracking-widest">
                Response Time
              </span>
              <span className="font-mono text-xs text-ink">&lt; 48h</span>
            </div>
            <div className="flex items-center justify-between border-t border-grid pt-5">
              <span className="font-mono text-[10px] text-slate uppercase tracking-widest">
                Timezone
              </span>
              <span className="font-mono text-xs text-ink">UTC +5:45</span>
            </div>
          </div>

          <a
            href="mailto:jonathan.raia40@gmail.com"
            className="mt-8 group flex items-center justify-between bg-ink text-surface px-6 py-5 hover:bg-accent transition-colors"
          >
            <span className="font-display text-lg font-semibold uppercase tracking-tight">
              Send a message
            </span>
            <span className="font-mono text-xs uppercase tracking-widest border border-surface/30 px-3 py-1.5 group-hover:border-surface">
              EXEC →
            </span>
          </a>
        </aside>
      </section>
    </>
  );
}
