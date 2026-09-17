/* =====================================================================
   MT-Projects — shared site behaviour
   Single source of truth for contact info + reusable UI helpers.
   ===================================================================== */

const MT = {
    phone: "201128304396",
    facebook: "https://www.facebook.com/share/1FDnTubg9i/",
    instagram: "https://www.instagram.com/mt_company40?stkn=MTRxdmZ1bXdlMmYyNg==",
    currency: "ج.م",
};

/* Build a WhatsApp deep-link with a pre-filled Arabic message */
function waLink(message) {
    return `https://wa.me/${MT.phone}?text=${encodeURIComponent(message)}`;
}

/* Mobile nav toggle */
function toggleNav() {
    document.getElementById("navLinks")?.classList.toggle("open");
}

/* Close mobile nav when a link is tapped */
function initNav() {
    document.querySelectorAll("#navLinks a").forEach((a) =>
        a.addEventListener("click", () => document.getElementById("navLinks")?.classList.remove("open"))
    );
}

/* Toast */
let _toastTimer;
function showToast(msg) {
    let toast = document.getElementById("toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast";
        toast.className = "toast";
        document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(_toastTimer);
    _toastTimer = setTimeout(() => toast.classList.remove("show"), 3000);
}

/* Copy a share link to clipboard */
function shareItem(title) {
    const en = typeof getLang === "function" && getLang() === "en";
    const text = (en ? "Check out this from MT-Projects:\n" : "شاهد هذا من MT-Projects:\n") + title + "\n" + location.href;
    const ok = typeof t === "function" ? t("cat.copied") : "تم نسخ الرابط ✅";
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => showToast(ok), () => showToast(ok));
    } else {
        showToast(ok);
    }
}

/* FAQ accordion (used on multiple pages) */
function toggleFaq(el) {
    el.classList.toggle("open");
}

/* Stamp the current year into any [data-year] node */
function initYear() {
    const y = new Date().getFullYear();
    document.querySelectorAll("[data-year]").forEach((n) => (n.textContent = y));
}

document.addEventListener("DOMContentLoaded", () => {
    initNav();
    initYear();
});
