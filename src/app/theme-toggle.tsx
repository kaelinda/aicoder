"use client";

function SunIcon() {
  return (
    <svg className="icon-sun" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 3v1.8M12 19.2V21M4.9 4.9l1.3 1.3M17.8 17.8l1.3 1.3M3 12h1.8M19.2 12H21M4.9 19.1l1.3-1.3M17.8 6.2l1.3-1.3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="icon-moon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M15.5 3.8A8.2 8.2 0 1 0 20.2 15 6.6 6.6 0 0 1 15.5 3.8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ThemeToggle() {
  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label="切换浅色或深色外观"
      onClick={() => {
        const root = document.documentElement;
        const explicit = root.getAttribute("data-theme");
        const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const current =
          explicit === "light" || explicit === "dark" ? explicit : systemDark ? "dark" : "light";
        const next = current === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", next);
        try {
          localStorage.setItem("theme", next);
        } catch {
          /* Private mode can block storage; the choice still applies for this view. */
        }
      }}
    >
      <SunIcon />
      <MoonIcon />
    </button>
  );
}
