document.addEventListener("DOMContentLoaded", () => {
  const langBtn = document.getElementById("lang-btn");
  const langMenu = document.getElementById("lang-menu");
  const currentLang = document.getElementById("current-lang");
  const desktopNav = document.getElementById("desktop-nav");
  const mobileNav = document.getElementById("mobile-nav-links");
  const logoLink = document.getElementById("logo-link");

  const isPT = window.location.pathname.startsWith("/pt");
  const base = isPT ? "/pt" : "";

  if (currentLang) currentLang.textContent = isPT ? "PT" : "ES";
  if (logoLink) logoLink.href = base + "/";

  const links = [
    { href: "/", label: isPT ? "Início" : "Inicio" },
    { href: "/sobre-mi", label: isPT ? "Sobre mim" : "Sobre mí" },
    { href: "/oportunidad", label: isPT ? "Oportunidade" : "Oportunidad" },
    { href: "/audios", label: isPT ? "Áudios" : "Audios" },
    { href: "/contacto", label: isPT ? "Contato" : "Contacto" },
  ];

  // Render desktop nav
  if (desktopNav) {
    desktopNav.innerHTML = links
      .map(
        (l) =>
          `<a href="${base + l.href}" class="hover:text-[#00ff7f] transition">${l.label}</a>`
      )
      .join("");
  }

  // Render mobile nav
  if (mobileNav) {
    mobileNav.innerHTML = links
      .map(
        (l) =>
          `<a href="${base + l.href}" class="hover:text-[#00ff7f] transition">${l.label}</a>`
      )
      .join("");
  }

// --- Control del menú de idioma ---
  langBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    langMenu?.classList.toggle("hidden");
  });

  document.addEventListener("click", () => langMenu?.classList.add("hidden"));

  // Detectar ruta actual
  const currentPath = window.location.pathname;

  // Calcular versión en otro idioma
  const pathInPT = currentPath.startsWith("/pt")
    ? currentPath // ya en PT
    : "/pt" + (currentPath === "/" ? "" : currentPath);
  const pathInES = currentPath.startsWith("/pt")
    ? currentPath.replace(/^\/pt/, "") || "/"
    : currentPath;

  // Actualizar links del menú de idioma dinámicamente
  if (langMenu) {
    langMenu.innerHTML = `
      <a href="${pathInES}" class="block px-3 py-2 hover:bg-[#00ff7f]/20 transition">Español</a>
      <a href="${pathInPT}" class="block px-3 py-2 hover:bg-[#00ff7f]/20 transition">Português</a>
    `;
  }

  // --- Tu parte del botón hamburguesa ---
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const line1 = menuBtn?.querySelector(".line1");
  const line2 = menuBtn?.querySelector(".line2");
  const line3 = menuBtn?.querySelector(".line3");

  let open = false;

  menuBtn?.addEventListener("click", () => {
    open = !open;

    if (open) {
      mobileMenu?.classList.remove("max-h-0");
      mobileMenu?.classList.add("max-h-screen");
      line1?.classList.add("rotate-45", "translate-y-2");
      line2?.classList.add("opacity-0");
      line3?.classList.add("-rotate-45", "-translate-y-2");
    } else {
      mobileMenu?.classList.add("max-h-0");
      mobileMenu?.classList.remove("max-h-screen");
      line1?.classList.remove("rotate-45", "translate-y-2");
      line2?.classList.remove("opacity-0");
      line3?.classList.remove("-rotate-45", "-translate-y-2");
    }
  });
});
