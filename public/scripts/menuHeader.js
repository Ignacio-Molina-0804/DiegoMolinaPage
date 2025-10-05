const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const line1 = menuBtn?.querySelector(".line1");
const line2 = menuBtn?.querySelector(".line2");
const line3 = menuBtn?.querySelector(".line3");

let open = false;

menuBtn?.addEventListener("click", () => {
  open = !open;

  // Animación del menú
  if (open) {
    mobileMenu?.classList.remove("max-h-0");
    mobileMenu?.classList.add("max-h-screen");

    // Animación a "X"
    line1?.classList.add("rotate-45", "translate-y-2");
    line2?.classList.add("opacity-0");
    line3?.classList.add("-rotate-45", "-translate-y-2");
  } else {
    mobileMenu?.classList.add("max-h-0");
    mobileMenu?.classList.remove("max-h-screen");

    // Volver a hamburguesa
    line1?.classList.remove("rotate-45", "translate-y-2");
    line2?.classList.remove("opacity-0");
    line3?.classList.remove("-rotate-45", "-translate-y-2");
  }
});
