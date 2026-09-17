/* =====================================================================
   MT-Projects — generic catalog engine
   Powers both the Projects and Courses pages (search / filter / sort /
   pagination / details modal). Configure once, call Catalog.mount().
   ===================================================================== */

const Catalog = (() => {
    let cfg = null;
    let state = { page: 1, cat: "all", q: "", sort: "default" };

    function filtered() {
        let out = cfg.items.filter((it) => {
            const inCat = state.cat === "all" || it.cat === state.cat;
            const q = state.q.toLowerCase();
            const inQ =
                !q ||
                it.title.toLowerCase().includes(q) ||
                (it.short || "").toLowerCase().includes(q) ||
                it.cat.toLowerCase().includes(q);
            return inCat && inQ;
        });
        if (state.sort === "low-high") out.sort((a, b) => a.price - b.price);
        else if (state.sort === "high-low") out.sort((a, b) => b.price - a.price);
        return out;
    }

    function priceHtml(it) {
        const old = it.oldPrice ? `<span class="old">${it.oldPrice}</span>` : "";
        return `<div class="price gold-text">${it.price} <small>${MT.currency}</small>${old}</div>`;
    }

    function metaHtml(it) {
        if (cfg.type !== "course") return "";
        return `<div class="meta-row">
            <span><i class="fa-regular fa-clock"></i> ${it.duration}</span>
            <span><i class="fa-solid fa-layer-group"></i> ${it.lessons} درس</span>
            <span><i class="fa-solid fa-microchip"></i> ${it.track}</span>
        </div>`;
    }

    function includesHtml(it) {
        if (cfg.type === "course") {
            return `<div class="includes"><div class="t">يشمل الكورس:</div><ul>
                <li><i class="fa-solid fa-video"></i> فيديوهات شرح</li>
                <li><i class="fa-solid fa-file-lines"></i> ملفات وأكواد</li>
                <li><i class="fa-solid fa-certificate"></i> شهادة إتمام</li></ul></div>`;
        }
        return `<div class="includes"><div class="t">محتويات التسليم:</div><ul>
            <li><i class="fa-solid fa-code"></i> الكود المصدر</li>
            <li><i class="fa-solid fa-diagram-project"></i> التوصيلات</li>
            <li><i class="fa-solid fa-file-pdf"></i> شرح PDF</li></ul></div>`;
    }

    function cardHtml(it) {
        const noun = cfg.type === "course" ? "الكورس" : "المشروع";
        const wa = waLink(`أهلاً MT-Projects، مهتم بـ${noun}:\n📌 *${it.title}*\n💰 السعر: ${it.price} ${MT.currency}`);
        return `<article class="card">
            <div class="card-media">
                <div class="ribbon"><span class="dot"></span> ${cfg.ribbon}</div>
                <img src="${it.image}" alt="${it.title}" loading="lazy"
                     onerror="this.src='https://via.placeholder.com/600x400/121b30/f5a623?text=MT-Projects'">
            </div>
            <div class="card-body">
                <span class="tag tag-${it.cat}">${it.tagLabel}</span>
                <h3 class="card-title">${it.title}</h3>
                <p class="card-desc">${it.short}</p>
                ${metaHtml(it)}
                ${includesHtml(it)}
                <div class="card-foot">
                    ${priceHtml(it)}
                    <div class="card-actions">
                        <button class="btn btn-icon" title="مشاركة" onclick="Catalog.share('${it.id}')"><i class="fa-solid fa-share-nodes"></i></button>
                        <button class="btn btn-icon" title="التفاصيل" onclick="Catalog.open('${it.id}')"><i class="fa-solid fa-eye"></i></button>
                        <a class="btn btn-whatsapp btn-sm" href="${wa}" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> ${cfg.cta}</a>
                    </div>
                </div>
            </div>
        </article>`;
    }

    function render() {
        const grid = document.getElementById(cfg.gridId);
        const all = filtered();
        const shown = all.slice(0, state.page * cfg.perPage);
        if (!shown.length) {
            grid.innerHTML = `<div class="empty-state"><i class="fa-solid fa-magnifying-glass"></i><p>لا توجد نتائج تطابق بحثك الحالي.</p></div>`;
        } else {
            grid.innerHTML = shown.map(cardHtml).join("");
        }
        const more = document.getElementById(cfg.loadMoreId);
        if (more) more.style.display = shown.length < all.length ? "block" : "none";
        const count = document.getElementById(cfg.countId);
        if (count) count.textContent = all.length;
    }

    return {
        mount(config) {
            cfg = config;
            render();
        },
        search(v) { state.q = v.trim(); state.page = 1; render(); },
        filter(cat, ev) {
            state.cat = cat; state.page = 1;
            document.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
            if (ev && ev.target) ev.target.classList.add("active");
            render();
        },
        sort(v) { state.sort = v; render(); },
        more() { state.page++; render(); },
        open(id) {
            const it = cfg.items.find((x) => String(x.id) === String(id));
            if (!it) return;
            const noun = cfg.type === "course" ? "الكورس" : "المشروع";
            const wa = waLink(`أهلاً MT-Projects، أرغب في ${noun}:\n📌 *${it.title}*\n💰 السعر: ${it.price} ${MT.currency}`);
            document.getElementById("mTitle").textContent = it.title;
            document.getElementById("mImg").src = it.image;
            document.getElementById("mDesc").textContent = it.full;
            document.getElementById("mPrice").innerHTML = `${it.price} <small>${MT.currency}</small>`;
            document.getElementById("mBuy").href = wa;
            document.getElementById("mBuy").innerHTML = `<i class="fa-brands fa-whatsapp"></i> ${cfg.cta} عبر واتساب`;
            document.getElementById("modal").classList.add("open");
        },
        close() { document.getElementById("modal").classList.remove("open"); },
        share(id) {
            const it = cfg.items.find((x) => String(x.id) === String(id));
            if (it) shareItem(it.title, cfg.type === "course" ? "الكورس" : "المشروع");
        },
    };
})();

window.addEventListener("click", (e) => {
    if (e.target.id === "modal") Catalog.close();
});
