/* =====================================================================
   MT-Projects — generic catalog engine (bilingual).
   Powers Projects and Courses pages. Reads localized fields via L() and
   static labels via t(); re-renders on the "mt:lang" event.
   ===================================================================== */

const Catalog = (() => {
    let cfg = null;
    let state = { page: 1, cat: "all", q: "", sort: "default" };

    function filtered() {
        const q = state.q.toLowerCase();
        let out = cfg.items.filter((it) => {
            const inCat = state.cat === "all" || it.cat === state.cat;
            const hay = (L(it, "title") + " " + (L(it, "short") || "") + " " + it.cat + " " + (L(it, "track") || "")).toLowerCase();
            return inCat && (!q || hay.includes(q));
        });
        if (state.sort === "low-high") out.sort((a, b) => a.price - b.price);
        else if (state.sort === "high-low") out.sort((a, b) => b.price - a.price);
        return out;
    }

    function priceHtml(it) {
        const old = it.oldPrice ? `<span class="old">${it.oldPrice}</span>` : "";
        return `<div class="price">${it.price} <small>${t("cat.currency")}</small>${old}</div>`;
    }

    function metaHtml(it) {
        if (cfg.type !== "course") return "";
        return `<div class="meta-row">
            <span><i class="fa-regular fa-clock"></i> ${L(it, "duration")}</span>
            <span><i class="fa-solid fa-layer-group"></i> ${it.lessons} ${t("cat.lessons")}</span>
            <span><i class="fa-solid fa-microchip"></i> ${L(it, "track")}</span>
        </div>`;
    }

    function includesHtml() {
        if (cfg.type === "course") {
            return `<div class="includes"><div class="t">${t("inc.crsTitle")}</div><ul>
                <li><i class="fa-solid fa-video"></i> ${t("inc.videos")}</li>
                <li><i class="fa-solid fa-file-lines"></i> ${t("inc.files")}</li>
                <li><i class="fa-solid fa-certificate"></i> ${t("inc.cert")}</li></ul></div>`;
        }
        return `<div class="includes"><div class="t">${t("inc.projTitle")}</div><ul>
            <li><i class="fa-solid fa-code"></i> ${t("inc.code")}</li>
            <li><i class="fa-solid fa-diagram-project"></i> ${t("inc.wiring")}</li>
            <li><i class="fa-solid fa-file-pdf"></i> ${t("inc.pdf")}</li></ul></div>`;
    }

    function waMsg(it) {
        const en = getLang() === "en";
        const noun = cfg.type === "course" ? (en ? "the course" : "الكورس") : (en ? "the project" : "المشروع");
        const line = en ? `Hi MT-Projects, I'm interested in ${noun}:` : `أهلاً MT-Projects، مهتم بـ${noun}:`;
        const price = en ? `Price: ${it.price} EGP` : `السعر: ${it.price} ج.م`;
        return `${line}\n📌 ${L(it, "title")}\n💰 ${price}`;
    }

    function cardHtml(it) {
        return `<article class="card">
            <div class="card-media">
                <div class="ribbon"><span class="dot"></span> ${t(cfg.ribbonKey)}</div>
                <img src="${it.image}" alt="${L(it, "title")}" loading="lazy"
                     onerror="this.src='https://via.placeholder.com/600x400/f6f7f9/b9790c?text=MT-Projects'">
            </div>
            <div class="card-body">
                <span class="tag tag-${it.cat}">${L(it, "tagLabel")}</span>
                <h3 class="card-title">${L(it, "title")}</h3>
                <p class="card-desc">${L(it, "short")}</p>
                ${metaHtml(it)}
                ${includesHtml()}
                <div class="card-foot">
                    ${priceHtml(it)}
                    <div class="card-actions">
                        <button class="btn btn-icon" title="${t("cat.details")}" onclick="Catalog.share('${it.id}')"><i class="fa-solid fa-share-nodes"></i></button>
                        <button class="btn btn-icon" title="${t("cat.details")}" onclick="Catalog.open('${it.id}')"><i class="fa-solid fa-eye"></i></button>
                        <a class="btn btn-whatsapp btn-sm" href="${waLink(waMsg(it))}" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> ${t(cfg.ctaKey)}</a>
                    </div>
                </div>
            </div>
        </article>`;
    }

    function render() {
        const grid = document.getElementById(cfg.gridId);
        if (!grid) return;
        const all = filtered();
        const shown = all.slice(0, state.page * cfg.perPage);
        grid.innerHTML = shown.length
            ? shown.map(cardHtml).join("")
            : `<div class="empty-state"><i class="fa-solid fa-magnifying-glass"></i><p>${t("cat.empty")}</p></div>`;
        const more = document.getElementById(cfg.loadMoreId);
        if (more) more.style.display = shown.length < all.length ? "block" : "none";
        const count = document.getElementById(cfg.countId);
        if (count) count.textContent = all.length;
    }

    return {
        mount(config) { cfg = config; render(); },
        search(v) { state.q = v.trim(); state.page = 1; render(); },
        filter(cat, ev) {
            state.cat = cat; state.page = 1;
            document.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
            if (ev && ev.target) ev.target.classList.add("active");
            render();
        },
        sort(v) { state.sort = v; render(); },
        more() { state.page++; render(); },
        rerender() { if (cfg) render(); },
        open(id) {
            const it = cfg.items.find((x) => String(x.id) === String(id));
            if (!it) return;
            document.getElementById("mTitle").textContent = L(it, "title");
            document.getElementById("mImg").src = it.image;
            document.getElementById("mDesc").textContent = L(it, "full");
            document.getElementById("mPrice").innerHTML = `${it.price} <small>${t("cat.currency")}</small>`;
            const buy = document.getElementById("mBuy");
            buy.href = waLink(waMsg(it));
            buy.innerHTML = `<i class="fa-brands fa-whatsapp"></i> ${t(cfg.ctaKey)} ${t("cat.viaWa")}`;
            document.getElementById("modal").classList.add("open");
        },
        close() { document.getElementById("modal").classList.remove("open"); },
        share(id) {
            const it = cfg.items.find((x) => String(x.id) === String(id));
            if (it) shareItem(L(it, "title"));
        },
    };
})();

window.addEventListener("click", (e) => { if (e.target.id === "modal") Catalog.close(); });
window.addEventListener("mt:lang", () => Catalog.rerender());
