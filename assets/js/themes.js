document.addEventListener("DOMContentLoaded", function () {

  const root = document.documentElement;
  const toggle = document.querySelector(".theme-toggle");
  const icon = document.getElementById("theme-icon");

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      icon.className = "fas fa-moon";
    } else {
      icon.className = "fas fa-sun";
    }
  }

  function toggleTheme() {
    const current = root.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    setTheme(next);
  }

  // Attach click listener
  toggle.addEventListener("click", toggleTheme);

  // Load saved theme (default dark)
  const saved = localStorage.getItem("theme") || "dark";
  setTheme(saved);

});
