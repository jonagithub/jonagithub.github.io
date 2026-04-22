import { Link, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ThemeToggle } from "./ThemeToggle";

const NAV = [
  { to: "/", label: "Index", id: "00" },
  { to: "/about", label: "About", id: "01" },
  { to: "/projects", label: "Projects", id: "02" },
  { to: "/experience", label: "Experience", id: "03" },
  { to: "/contact", label: "Contact", id: "04" },
] as const;

export function SiteFrame({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-dvh bg-paper text-ink p-3 lg:p-6 selection:bg-accent selection:text-accent-foreground">
      <div className="relative mx-auto flex min-h-[calc(100dvh-3rem)] w-full max-w-[1440px] flex-col border border-grid bg-surface shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        {/* Header */}
        <header className="relative z-20 grid grid-cols-12 border-b border-grid bg-surface/80 backdrop-blur-sm">
          <Link
            to="/"
            className="col-span-6 lg:col-span-3 border-r border-grid p-4 flex items-center gap-3 hover:bg-paper transition-colors"
          >
            <span className="font-mono text-[11px] text-slate uppercase tracking-widest">
              SYS.ID:
            </span>
            <span className="font-mono text-[11px] text-ink uppercase tracking-widest font-medium">
              JR_AI_25
            </span>
          </Link>
          <nav className="hidden lg:flex col-span-6 border-r border-grid items-stretch">
            {NAV.map((item) => {
              const active =
                item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`flex-1 flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-widest border-r border-grid last:border-r-0 transition-colors ${
                    active
                      ? "bg-ink text-surface"
                      : "text-slate hover:text-ink hover:bg-paper"
                  }`}
                >
                  <span className="opacity-60">{item.id}</span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
          <div className="col-span-6 lg:col-span-3 p-4 flex items-center justify-end gap-2">
            <span className="inline-block size-1.5 bg-emerald-500 rounded-full animate-pulse" />
            <span className="font-mono text-[11px] text-slate uppercase tracking-widest">
              Available for hire
            </span>
          </div>
        </header>

        {/* Mobile nav */}
        <nav className="lg:hidden flex border-b border-grid overflow-x-auto">
          {NAV.map((item) => {
            const active =
              item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`shrink-0 px-4 py-3 font-mono text-[10px] uppercase tracking-widest border-r border-grid ${
                  active ? "bg-ink text-surface" : "text-slate"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Main */}
        <main className="relative z-10 flex-1 flex flex-col">{children}</main>

        {/* Footer */}
        <footer className="relative z-20 grid grid-cols-12 border-t border-grid bg-surface">
          <div className="col-span-12 lg:col-span-4 border-b lg:border-b-0 lg:border-r border-grid p-4 flex items-center justify-between">
            <span className="font-mono text-[11px] text-slate uppercase tracking-widest">
              © 2025 Jonathan Rai
            </span>
            <span className="font-mono text-[11px] text-slate uppercase tracking-widest">
              Kathmandu / NP
            </span>
          </div>
          <div className="col-span-6 lg:col-span-4 border-r border-grid p-4 flex items-center gap-4">
            <a
              href="https://github.com/jonagithub"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] text-ink uppercase tracking-widest hover:text-accent transition-colors"
            >
              GitHub →
            </a>
            <a
              href="https://www.linkedin.com/in/jonathan-rai-52106621b/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] text-ink uppercase tracking-widest hover:text-accent transition-colors"
            >
              LinkedIn →
            </a>
          </div>
          <div className="col-span-6 lg:col-span-4 p-4 flex items-center justify-end">
            <a
              href="mailto:jonathan.raia40@gmail.com"
              className="font-mono text-[11px] text-ink tracking-widest hover:text-accent transition-colors normal-case"
            >
              jonathan.raia40@gmail.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export function SectionHeader({
  index,
  label,
  title,
  description,
}: {
  index: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="grid grid-cols-12 border-b border-grid">
      <div className="col-span-12 lg:col-span-2 border-r border-grid p-6 flex flex-col justify-between gap-4 bg-paper/40">
        <span className="font-mono text-[10px] text-slate uppercase tracking-widest">
          § {index}
        </span>
        <span className="font-mono text-[10px] text-accent uppercase tracking-widest">
          {label}
        </span>
      </div>
      <div className="col-span-12 lg:col-span-10 p-6 lg:p-12">
        <h2 className="font-display text-4xl lg:text-6xl font-bold tracking-tighter uppercase leading-[0.9] text-balance">
          {title}
        </h2>
        {description && (
          <p className="mt-6 max-w-[60ch] text-base lg:text-lg text-slate leading-relaxed text-pretty">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
