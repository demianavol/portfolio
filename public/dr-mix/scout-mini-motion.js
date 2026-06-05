(() => {
  const page = document.body;
  if (!page || page.dataset.page !== "scout-mini") return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealItems = [...document.querySelectorAll("[data-reveal]")];
  const story = document.querySelector("[data-story]");
  const steps = [...document.querySelectorAll("[data-story-step]")];
  const photos = [...document.querySelectorAll(".scout-story-visual img")];
  const hero = document.querySelector(".scout-hero");

  page.dataset.motionReady = "true";

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    revealItems.forEach((item, index) => {
      item.style.setProperty("--reveal-delay", `${Math.min(index % 5, 4) * 70}ms`);
      revealObserver.observe(item);
    });
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  function updatePageProgress() {
    const scrollMax = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const pageProgress = Math.min(1, Math.max(0, window.scrollY / scrollMax));
    page.style.setProperty("--page-progress", pageProgress.toFixed(4));
  }

  function setHeroMotion(event) {
    if (!hero || reduceMotion) return;
    const rect = hero.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) return;

    const x = ((event.clientX - rect.left) / Math.max(1, rect.width) - 0.5) * 2;
    const y = ((event.clientY - rect.top) / Math.max(1, rect.height) - 0.5) * 2;

    page.style.setProperty("--hero-x", x.toFixed(3));
    page.style.setProperty("--hero-y", y.toFixed(3));
    page.style.setProperty("--hero-tilt", `${(x * 1.2).toFixed(3)}deg`);
  }

  function resetHeroMotion() {
    page.style.setProperty("--hero-x", "0");
    page.style.setProperty("--hero-y", "0");
    page.style.setProperty("--hero-tilt", "0deg");
  }

  if (reduceMotion || !story || !steps.length || !photos.length) {
    steps[0]?.classList.add("active");
    photos[0]?.classList.add("active");
    revealItems.forEach((item) => item.classList.add("is-visible"));
    updatePageProgress();
    return;
  }

  let activeIndex = 0;
  let ticking = false;

  function setActive(index) {
    if (index === activeIndex) return;
    activeIndex = index;

    steps.forEach((step, stepIndex) => {
      step.classList.toggle("active", stepIndex === activeIndex);
    });
    photos.forEach((photo, photoIndex) => {
      photo.classList.toggle("active", photoIndex === activeIndex);
    });
  }

  function updateStory() {
    ticking = false;
    updatePageProgress();

    const rect = story.getBoundingClientRect();
    const range = Math.max(1, rect.height - window.innerHeight);
    const rawProgress = Math.min(1, Math.max(0, -rect.top / range));
    const stepIndex = Math.min(steps.length - 1, Math.floor(rawProgress * steps.length));
    const eased = rawProgress * rawProgress * (3 - 2 * rawProgress);

    story.style.setProperty("--story-progress", eased.toFixed(3));
    setActive(stepIndex);
  }

  function requestStoryUpdate() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateStory);
  }

  window.addEventListener("scroll", requestStoryUpdate, { passive: true });
  window.addEventListener("resize", requestStoryUpdate);
  window.addEventListener("pointermove", setHeroMotion, { passive: true });
  hero?.addEventListener("pointerleave", resetHeroMotion);
  updateStory();
})();
