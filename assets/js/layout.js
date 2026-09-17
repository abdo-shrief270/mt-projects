/* =====================================================================
   MT-Projects — shared header + footer injector (bilingual).
   Text uses data-i18n keys; i18n.js fills them. Set <body data-page="…">.
   ===================================================================== */
(function () {
    const page = document.body.dataset.page || "home";
    const links = [
        { key: "home", href: "index.html", i18n: "nav.home" },
        { key: "services", href: "index.html#services", i18n: "nav.services" },
        { key: "projects", href: "projects.html", i18n: "nav.projects" },
        { key: "courses", href: "courses.html", i18n: "nav.courses" },
        { key: "about", href: "about.html", i18n: "nav.about" },
    ];
    const navLinks = links
        .map((l) => `<a href="${l.href}" class="${l.key === page ? "active" : ""}" data-i18n="${l.i18n}"></a>`)
        .join("");

    const socials = `
        <a href="${MT.facebook}" target="_blank" rel="noopener" class="social-btn" title="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="${MT.instagram}" target="_blank" rel="noopener" class="social-btn" title="Instagram"><i class="fa-brands fa-instagram"></i></a>`;

    const header = `
    <header class="site-header">
      <div class="container nav">
        <a href="index.html" class="brand">
          <img src="logo.png" alt="MT-Projects" onerror="this.style.display='none'">
          <span class="brand-text">MT<span>-Projects</span></span>
        </a>
        <nav class="nav-links" id="navLinks">${navLinks}</nav>
        <div class="nav-actions">
          <button id="langToggle" class="social-btn" onclick="toggleLang()" title="Language" style="font-weight:800;font-size:0.82rem;">EN</button>
          ${socials}
          <a href="${waLink("MT-Projects 👋")}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-sm" data-i18n="nav.contactBtn"></a>
          <button class="nav-toggle" aria-label="menu" onclick="toggleNav()"><i class="fa-solid fa-bars"></i></button>
        </div>
      </div>
    </header>`;

    const footer = `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="brand">
            <img src="logo.png" alt="MT-Projects" onerror="this.style.display='none'">
            <span class="brand-text">MT<span>-Projects</span></span>
          </a>
          <p data-i18n="foot.blurb"></p>
          <div class="footer-socials">${socials}
            <a href="${waLink("MT-Projects 👋")}" target="_blank" rel="noopener" class="social-btn" title="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>
        <div class="footer-col">
          <h4 data-i18n="foot.servicesTitle"></h4>
          <a href="projects.html" data-i18n="foot.projects"></a>
          <a href="index.html#elv" data-i18n="foot.elv"></a>
          <a href="index.html#software" data-i18n="foot.software"></a>
          <a href="courses.html" data-i18n="foot.courses"></a>
          <a href="about.html" data-i18n="foot.about"></a>
        </div>
        <div class="footer-col">
          <h4 data-i18n="foot.contactTitle"></h4>
          <div class="line"><i class="fa-brands fa-whatsapp"></i> <span data-i18n="foot.wa"></span></div>
          <div class="line"><i class="fa-brands fa-facebook-f"></i> <span data-i18n="foot.fb"></span></div>
          <div class="line"><i class="fa-brands fa-instagram"></i> <span data-i18n="foot.ig"></span></div>
          <div class="line"><i class="fa-solid fa-bolt"></i> <span data-i18n="foot.delivery"></span></div>
        </div>
      </div>
      <div class="footer-bottom">
        <span data-i18n="foot.rights"></span> <span data-year></span> <strong>MT-Projects</strong> — <span data-i18n="foot.tagline"></span>
      </div>
    </footer>`;

    const h = document.getElementById("site-header");
    const f = document.getElementById("site-footer");
    if (h) h.outerHTML = header;
    if (f) f.outerHTML = footer;

    if (typeof initI18n === "function") initI18n();
})();
