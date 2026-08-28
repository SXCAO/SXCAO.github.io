/* ═══════════════════════════════════════════════════════════
   Shuxin Cao — site behaviour
   ═══════════════════════════════════════════════════════════ */

/* ---------- publication tabs ---------- */
(function pubTabs() {
  const tabs = document.querySelectorAll(".pub-tab");
  const panels = document.querySelectorAll(".pub-panel");
  if (!tabs.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.panel;
      tabs.forEach((t) => {
        t.classList.toggle("active", t === tab);
        t.setAttribute("aria-selected", String(t === tab));
      });
      panels.forEach((p) => { p.hidden = p.dataset.panel !== target; });
    });
  });
})();

/* ---------- mobile nav toggle ---------- */
(function navToggle() {
  const btn = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  if (!btn || !links) return;
  btn.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
  });
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      links.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    })
  );
})();

/* ---------- news show more ---------- */
(function newsToggle() {
  const btn = document.getElementById("news-toggle");
  const news = document.getElementById("news");
  if (!btn || !news) return;
  const hasMore = news.querySelectorAll(".news-more").length > 0;
  if (!hasMore) { btn.remove(); return; }
  btn.addEventListener("click", () => {
    news.classList.add("expanded");
  });
})();

/* ---------- scroll-spy nav ---------- */
(function scrollSpy() {
  const links = [...document.querySelectorAll(".nav-links a")];
  const map = new Map(links.map((a) => [a.getAttribute("href").slice(1), a]));
  const secs = [...document.querySelectorAll("section[id]")];
  if (!secs.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      links.forEach((a) => a.classList.remove("active"));
      map.get(en.target.id)?.classList.add("active");
    });
  }, { rootMargin: "-15% 0px -70% 0px", threshold: 0 });

  secs.forEach((s) => io.observe(s));
})();
