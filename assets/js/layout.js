/* =====================================================================
   MT-Projects — shared header + footer injector.
   Keeps every page in sync. Set <body data-page="projects"> for active nav.
   ===================================================================== */
(function () {
    const page = document.body.dataset.page || "home";
    const links = [
        { key: "home", href: "index.html", label: "الرئيسية" },
        { key: "services", href: "index.html#services", label: "خدماتنا" },
        { key: "projects", href: "projects.html", label: "المشاريع" },
        { key: "courses", href: "courses.html", label: "الكورسات" },
        { key: "about", href: "about.html", label: "من نحن" },
    ];

    const navLinks = links
        .map((l) => `<a href="${l.href}" class="${l.key === page ? "active" : ""}">${l.label}</a>`)
        .join("");

    const socials = `
        <a href="${MT.facebook}" target="_blank" rel="noopener" class="social-btn" title="فيسبوك"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="${MT.instagram}" target="_blank" rel="noopener" class="social-btn" title="انستجرام"><i class="fa-brands fa-instagram"></i></a>`;

    const header = `
    <header class="site-header">
      <div class="container nav">
        <a href="index.html" class="brand">
          <img src="logo.png" alt="MT-Projects" onerror="this.style.display='none'">
          <span class="brand-text">MT<span>-Projects</span></span>
        </a>
        <nav class="nav-links" id="navLinks">${navLinks}</nav>
        <div class="nav-actions">
          ${socials}
          <a href="${waLink("أهلاً MT-Projects، أرغب في الاستفسار 👋")}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-sm"><i class="fa-brands fa-whatsapp"></i> تواصل معنا</a>
          <button class="nav-toggle" aria-label="القائمة" onclick="toggleNav()"><i class="fa-solid fa-bars"></i></button>
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
          <p>فريق هندسي وبرمجي ينفّذ مشاريع التخرّج، أنظمة التيار الخفيف، الحلول البرمجية، والكورسات العملية — للطلاب والشركات.</p>
          <div class="footer-socials">${socials}
            <a href="${waLink("أهلاً MT-Projects 👋")}" target="_blank" rel="noopener" class="social-btn" title="واتساب"><i class="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>
        <div class="footer-col">
          <h4>خدماتنا</h4>
          <a href="projects.html">المشاريع الجاهزة</a>
          <a href="index.html#elv">أنظمة التيار الخفيف</a>
          <a href="index.html#software">الحلول البرمجية</a>
          <a href="courses.html">الكورسات التعليمية</a>
          <a href="about.html">من نحن</a>
        </div>
        <div class="footer-col">
          <h4>تواصل معنا</h4>
          <div class="line"><i class="fa-brands fa-whatsapp"></i> واتساب: +20 112 830 4396</div>
          <div class="line"><i class="fa-brands fa-facebook-f"></i> فيسبوك: MT-Projects</div>
          <div class="line"><i class="fa-brands fa-instagram"></i> انستجرام: mt_company40</div>
          <div class="line"><i class="fa-solid fa-bolt"></i> تسليم فوري بعد تأكيد الدفع</div>
        </div>
      </div>
      <div class="footer-bottom">
        جميع الحقوق محفوظة © <span data-year></span> <strong>MT-Projects</strong> — منصة المشاريع والكورسات الهندسية
      </div>
    </footer>`;

    const h = document.getElementById("site-header");
    const f = document.getElementById("site-footer");
    if (h) h.outerHTML = header;
    if (f) f.outerHTML = footer;
})();
