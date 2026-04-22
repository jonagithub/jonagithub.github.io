import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteFrame } from "../components/SiteFrame";

function NotFoundComponent() {
  return (
    <SiteFrame>
      <div className="flex-1 flex items-center justify-center p-12">
        <div className="max-w-md text-center">
          <p className="font-mono text-[11px] text-accent uppercase tracking-widest mb-4">
            ERR.404
          </p>
          <h1 className="font-display text-7xl font-bold uppercase tracking-tighter">
            Not Found
          </h1>
          <p className="mt-4 text-sm text-slate">
            This route is not registered in the system.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 bg-ink text-surface px-5 py-3 font-mono text-xs uppercase tracking-widest hover:bg-accent transition-colors"
          >
            Return to Index →
          </Link>
        </div>
      </div>
    </SiteFrame>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Jonathan Rai — AI/ML Engineer" },
      {
        name: "description",
        content:
          "Jonathan Rai — AI/ML Engineer building OCR, NLP, RAG and AI agent systems with Python, PyTorch, LangGraph and CrewAI.",
      },
      { name: "author", content: "Jonathan Rai" },
      { property: "og:title", content: "Jonathan Rai — AI/ML Engineer" },
      {
        property: "og:description",
        content:
          "Portfolio of Jonathan Rai — 2+ years engineering OCR, NLP, RAG and agentic AI systems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Manrope:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <SiteFrame>
      <Outlet />
    </SiteFrame>
  );
}
