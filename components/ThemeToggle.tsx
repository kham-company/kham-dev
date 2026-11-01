"use client";

export default function ThemeToggle() {
  function toggle() {
    const r = document.documentElement;
    const dark = r.dataset.theme
      ? r.dataset.theme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    r.dataset.theme = dark ? "light" : "dark";
  }
  return <button className="tt" type="button" onClick={toggle} aria-label="Ganti tema">Tema</button>;
}
