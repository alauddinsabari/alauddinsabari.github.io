// Small helper for active nav link
(() => {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach(a => {
    const href = a.getAttribute("href");
    if (href === path) a.classList.add("active");
  });
})();



// Theme toggle (dark/light) with localStorage
(() => {
  const root = document.documentElement;
  const saved = localStorage.getItem("theme");
  if (saved === "light") root.setAttribute("data-theme","light");

  const btn = document.getElementById("themeToggle");
  if (!btn) return;
  const setLabel = () => {
    const isLight = root.getAttribute("data-theme") === "light";
    btn.textContent = isLight ? "Dark" : "Light";
    btn.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
  };
  setLabel();

  btn.addEventListener("click", () => {
    const isLight = root.getAttribute("data-theme") === "light";
    if (isLight){
      root.removeAttribute("data-theme");
      localStorage.setItem("theme","dark");
    } else {
      root.setAttribute("data-theme","light");
      localStorage.setItem("theme","light");
    }
    setLabel();
  });
})();
