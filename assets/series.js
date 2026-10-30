(() => {
  // Series selector: where the works scroll sideways, start with the current one in view.
  const nav = document.querySelector(".series-nav");
  const current = nav && nav.querySelector('a[aria-current="page"]');
  const centre = () => {
    if (!nav.clientWidth || nav.scrollWidth <= nav.clientWidth) return;
    const left = current.getBoundingClientRect().left - nav.getBoundingClientRect().left;
    nav.scrollLeft += left - (nav.clientWidth - current.offsetWidth) / 2;
  };
  if (current) {
    centre();
    // The web fonts change the widths once they arrive.
    if (document.fonts) document.fonts.ready.then(centre);
  }

  // Stage viewers: a slider steps through stacked images of the work at successive stages.
  for (const fig of document.querySelectorAll("[data-stages]")) {
    const viewer = fig.querySelector(".viewer");
    const range = fig.querySelector('input[type="range"]');
    const imgs = viewer ? Array.from(viewer.querySelectorAll("img")) : [];
    if (!imgs.length || !range) continue;
    const name = fig.querySelector(".scrub-name");
    const count = fig.querySelector(".scrub-count");
    const note = fig.querySelector(".scrub-note");
    const show = (i) => {
      imgs.forEach((im, k) => im.classList.toggle("is-on", k === i));
      const im = imgs[i];
      if (name) name.textContent = im.dataset.name;
      if (count) count.textContent = `Stage ${i + 1} of ${imgs.length}`;
      if (note) note.textContent = im.dataset.note;
      viewer.setAttribute("aria-label", `${im.dataset.name}. ${im.dataset.note}`);
      range.setAttribute("aria-valuetext", `Stage ${i + 1}, ${im.dataset.name}`);
    };
    range.addEventListener("input", () => show(Number(range.value)));
    for (const b of fig.querySelectorAll(".scrub-btn")) {
      b.addEventListener("click", () => {
        const v = Math.min(imgs.length - 1, Math.max(0, Number(range.value) + Number(b.dataset.dir)));
        range.value = String(v);
        show(v);
      });
    }
  }

  // Step maps: the step crossing a band just above the middle of the screen lights its marker
  // and legend entry, and the map shows the work as it stood after that step.
  if (!("IntersectionObserver" in window)) return;
  for (const grid of document.querySelectorAll(".paint-grid")) {
    const steps = Array.from(grid.querySelectorAll(".step"));
    const markers = Array.from(grid.querySelectorAll(".marker"));
    const legend = Array.from(grid.querySelectorAll(".map-legend a"));
    const stack = Array.from(grid.querySelectorAll(".map-stack img"));
    const caption = grid.querySelector(".map-caption [aria-live]");
    if (!steps.length) continue;

    const setActive = (id) => {
      markers.forEach((m) => m.classList.toggle("is-active", m.dataset.target === id));
      legend.forEach((a) => {
        if (a.getAttribute("href") === "#" + id) a.setAttribute("aria-current", "step");
        else a.removeAttribute("aria-current");
      });
      const step = steps.find((s) => s.id === id);
      const n = step && step.dataset.stack !== undefined ? Number(step.dataset.stack) : steps.indexOf(step);
      if (n >= 0 && stack[n]) {
        stack.forEach((im, k) => im.classList.toggle("is-on", k === n));
        if (caption) caption.textContent = stack[n].dataset.caption;
      }
    };

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: "-40% 0px -55% 0px" });
    steps.forEach((s) => io.observe(s));
  }
})();
