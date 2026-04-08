const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("open");
  });

  document.addEventListener("click", (event) => {
    if (!nav.classList.contains("open")) {
      return;
    }
    if (nav.contains(event.target) || toggle.contains(event.target)) {
      return;
    }
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
}

const yearNode = document.querySelector("[data-year]");
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const form = document.querySelector("[data-demo-form]");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const notice = document.querySelector("[data-form-notice]");
    if (notice) {
      notice.hidden = false;
    }
    form.reset();
  });
}
