(() => {
  const page = document.body;
  if (!page || page.dataset.page !== "dr-mix") return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealItems = [...document.querySelectorAll("[data-reveal]")];
  const story = document.querySelector("[data-story]");
  const steps = [...document.querySelectorAll("[data-story-step]")];
  const photos = [...document.querySelectorAll(".dr-photo-stack img")];
  const caption = document.querySelector("[data-story-caption]");
  const hero = document.querySelector(".dr-hero");
  const captions = [
    "Реальный аппарат",
    "Резервуар 1,5 л",
    "Подача в бутылочку",
    "Готов к кормлению",
  ];

  page.dataset.motionReady = "true";

  function revealVisibleHashItems() {
    revealItems.forEach((item) => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
        item.classList.add("is-visible");
      }
    });
  }

  function scrollToCurrentHash(attempt = 0) {
    const id = decodeURIComponent(window.location.hash.replace(/^#/, ""));
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({ block: "start" });
    window.requestAnimationFrame(revealVisibleHashItems);
    if (attempt >= 3) return;
    window.setTimeout(() => scrollToCurrentHash(attempt + 1), 180);
  }

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

    const revealVisibleItems = () => {
      revealItems.forEach((item) => {
        if (item.classList.contains("is-visible")) return;
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
          item.classList.add("is-visible");
          revealObserver.unobserve(item);
        }
      });
    };

    window.requestAnimationFrame(revealVisibleItems);
    window.addEventListener(
      "load",
      () => {
        revealVisibleItems();
        window.setTimeout(() => {
          scrollToCurrentHash();
          revealVisibleItems();
        }, 80);
      },
      { once: true },
    );
    window.addEventListener("hashchange", () => {
      window.requestAnimationFrame(() => {
        scrollToCurrentHash();
        revealVisibleItems();
      });
    });
    window.addEventListener("scroll", revealVisibleItems, { passive: true });
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  function startInlineVideos() {
    const videos = [...document.querySelectorAll(".dr-phone-video, .dr-video-phone video")];

    videos.forEach((video) => {
      video.muted = true;
      video.loop = true;
      video.playsInline = true;

      const play = () => video.play().catch(() => {});
      if (video.readyState >= 2) play();
      video.addEventListener("loadedmetadata", play, { once: true });
    });

    if (!("IntersectionObserver" in window)) return;

    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          }
        });
      },
      { rootMargin: "160px 0px", threshold: 0.08 },
    );

    videos.forEach((video) => videoObserver.observe(video));
  }

  startInlineVideos();

  function setupGroupedNav() {
    const groups = [...document.querySelectorAll(".dr-nav-group")];
    if (!groups.length) return;

    groups.forEach((group) => {
      group.addEventListener("toggle", () => {
        if (!group.open) return;
        groups.forEach((item) => {
          if (item !== group) item.open = false;
        });
      });

      group.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          group.open = false;
        });
      });
    });

    document.addEventListener("click", (event) => {
      if (event.target.closest(".dr-nav-groups")) return;
      groups.forEach((group) => {
        group.open = false;
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      groups.forEach((group) => {
        group.open = false;
      });
    });
  }

  setupGroupedNav();

  function setupSupportWidget() {
    const widget = document.querySelector(".dr-support-widget");
    const summary = widget?.querySelector("summary");
    if (!widget || !summary) return;

    let closeTimer = null;
    const animationMs = reduceMotion ? 0 : 240;

    function openWidget() {
      window.clearTimeout(closeTimer);
      widget.open = true;
      widget.classList.remove("is-closing");
      window.requestAnimationFrame(() => {
        widget.classList.add("is-open");
      });
    }

    function closeWidget() {
      if (!widget.open || widget.classList.contains("is-closing")) return;
      window.clearTimeout(closeTimer);
      widget.classList.remove("is-open");
      widget.classList.add("is-closing");
      closeTimer = window.setTimeout(() => {
        widget.open = false;
        widget.classList.remove("is-closing");
      }, animationMs);
    }

    summary.addEventListener("click", (event) => {
      event.preventDefault();
      if (widget.open) {
        closeWidget();
      } else {
        openWidget();
      }
    });

    widget.querySelectorAll(".dr-support-panel a").forEach((link) => {
      link.addEventListener("click", () => {
        window.setTimeout(closeWidget, 80);
      });
    });

    document.addEventListener("click", (event) => {
      if (!widget.open || widget.contains(event.target)) return;
      closeWidget();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeWidget();
    });
  }

  setupSupportWidget();

  function updatePageProgress() {
    const scrollMax = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const pageProgress = Math.min(1, Math.max(0, window.scrollY / scrollMax));
    page.style.setProperty("--page-progress", pageProgress.toFixed(4));
  }

  function setHeroMotion(event) {
    if (!hero) return;
    const rect = hero.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) return;

    const x = ((event.clientX - rect.left) / Math.max(1, rect.width) - 0.5) * 2;
    const y = ((event.clientY - rect.top) / Math.max(1, rect.height) - 0.5) * 2;

    page.style.setProperty("--hero-x", x.toFixed(3));
    page.style.setProperty("--hero-y", y.toFixed(3));
    page.style.setProperty("--hero-tilt", `${(x * 1.4).toFixed(3)}deg`);
  }

  function resetHeroMotion() {
    page.style.setProperty("--hero-x", "0");
    page.style.setProperty("--hero-y", "0");
    page.style.setProperty("--hero-tilt", "0deg");
  }

  if (reduceMotion || !story || !steps.length || !photos.length) {
    steps[0]?.classList.add("active");
    photos[0]?.classList.add("active");
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

    if (caption) caption.textContent = captions[activeIndex] || captions[0];
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
    story.style.setProperty("--story-glow", (0.28 + eased * 0.5).toFixed(3));
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
