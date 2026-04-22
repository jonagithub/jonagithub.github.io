import { useEffect, useState } from "react";

const STORAGE_KEY = "jr-theme";
type Theme = "light" | "dark";

function getInitial(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initial = getInitial();
    setTheme(initial);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme, mounted]);

  const next = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      aria-label={`Switch to ${next} mode`}
      onClick={() => setTheme(next)}
      className="group inline-flex items-center gap-2 border border-grid px-2.5 py-1 font-mono text-[10px] text-slate uppercase tracking-widest hover:border-ink hover:text-ink transition-colors"
    >
      <span
        aria-hidden
        className="inline-block size-1.5 bg-ink group-hover:bg-accent transition-colors"
      />
      {mounted ? (theme === "dark" ? "DARK" : "LIGHT") : "—"}
    </button>
  );
}
