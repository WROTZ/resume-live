(function () {
  const themeConfigs = [
    {
      id: "ocean",
      label: "Ocean",
      bg1: "#04121f",
      bg2: "#071a2b",
      bg3: "#0d1230",
      surface: "rgba(10, 20, 34, 0.54)",
      surfaceStrong: "rgba(8, 16, 28, 0.76)",
      surfaceSoft: "rgba(255, 255, 255, 0.06)",
      glassWhite: "rgba(255, 255, 255, 0.08)",
      border: "rgba(255, 255, 255, 0.16)",
      borderStrong: "rgba(255, 255, 255, 0.24)",
      textPrimary: "#eff8ff",
      textSecondary: "#a8bfd7",
      textMuted: "#7f96b0",
      accent: "#66ecff",
      accent2: "#7e8bff",
      accent3: "#90ffd3",
      glow: "rgba(102, 236, 255, 0.34)",
    },
    {
      id: "aurora",
      label: "Aurora",
      bg1: "#0f1022",
      bg2: "#161936",
      bg3: "#0d1f22",
      surface: "rgba(21, 18, 40, 0.56)",
      surfaceStrong: "rgba(14, 11, 28, 0.8)",
      surfaceSoft: "rgba(255, 255, 255, 0.06)",
      glassWhite: "rgba(255, 255, 255, 0.1)",
      border: "rgba(255, 255, 255, 0.16)",
      borderStrong: "rgba(255, 255, 255, 0.26)",
      textPrimary: "#f4f2ff",
      textSecondary: "#bcb6df",
      textMuted: "#928ab8",
      accent: "#ff83d8",
      accent2: "#8b8dff",
      accent3: "#83ffd9",
      glow: "rgba(255, 131, 216, 0.3)",
    },
    {
      id: "sunset",
      label: "Sunset",
      bg1: "#190f18",
      bg2: "#2b1122",
      bg3: "#2a1d12",
      surface: "rgba(35, 18, 28, 0.58)",
      surfaceStrong: "rgba(25, 12, 20, 0.8)",
      surfaceSoft: "rgba(255, 255, 255, 0.06)",
      glassWhite: "rgba(255, 255, 255, 0.1)",
      border: "rgba(255, 255, 255, 0.15)",
      borderStrong: "rgba(255, 255, 255, 0.24)",
      textPrimary: "#fff4ec",
      textSecondary: "#e7c2b0",
      textMuted: "#c8947c",
      accent: "#ffb066",
      accent2: "#ff6f91",
      accent3: "#ffd86a",
      glow: "rgba(255, 176, 102, 0.3)",
    },
  ];

  const workItems = [
    {
      title: "Kosmo Gulf Trading Est.",
      category: "Business website",
      domain: "kosmogulf.com",
      url: "https://kosmogulf.com/",
      previewUrl: "https://image.thum.io/get/width/1200/https://kosmogulf.com/",
      summary:
        "Corporate website for an oil, gas, electrical, and construction trading business with a professional industrial presentation and enquiry-focused structure.",
      stack: ["Responsive UI", "Service pages", "Lead funnels"],
    },
    {
      title: "Car Castle Chengannur",
      category: "Service business website",
      domain: "carcastlechengannur.com",
      url: "https://carcastlechengannur.com/",
      previewUrl: "https://image.thum.io/get/width/1200/https://carcastlechengannur.com/",
      summary:
        "Premium rental and wedding car website with bold hero messaging, fleet-focused layout, customer trust highlights, and direct booking actions.",
      stack: ["Booking CTA", "Fleet layout", "Mobile-first"],
    },
    {
      title: "Daily Wealth 4 You",
      category: "Brand website",
      domain: "dailywealth4you.com",
      url: "https://dailywealth4you.com/",
      previewUrl: "https://image.thum.io/get/width/1200/https://dailywealth4you.com/",
      summary:
        "Service-focused website for the Daily Wealth 4 You brand with clean content presentation, trust-building sections, and clear pathways for visitors.",
      stack: ["Brand storytelling", "Conversion sections", "Deployment"],
    },
  ];

  const projectItems = [
    {
      title: "Phishing Website Detection with Real-Time Email Notification System",
      period: "Nov 2024 - Feb 2025",
      summary:
        "Security-focused ML project built to detect malicious websites and notify users instantly through a real-time alert system.",
      bullets: [
        "Developed a phishing detection system with ML algorithms to identify malicious websites.",
        "Integrated a real-time email notification feature for user alerts.",
        "Built an Android application using Flutter to extend accessibility.",
      ],
      stack: ["Machine Learning", "Flutter", "Security"],
    },
    {
      title: "Stock Market Prediction Using Machine Learning",
      period: "Feb 2025 - Apr 2025",
      summary:
        "Predictive modeling project focused on market trend analysis using supervised learning workflows and forecasting logic.",
      bullets: [
        "Designed and trained predictive models for stock market trends using supervised ML techniques.",
      ],
      stack: ["Python", "Supervised ML", "Forecasting"],
    },
    {
      title: "Appointment Calendar for Clinic Staff",
      period: "Jun 2025",
      summary:
        "A responsive clinic scheduling interface designed to simplify appointment management for staff with a polished, usable UI.",
      bullets: [
        "Built a responsive web-based calendar system for managing patient appointments.",
        "Used React.js and Material UI with local Storage persistence to ensure smooth user experience.",
        "Implemented features like dark mode, doctor/patient filters, and appointment operations.",
      ],
      stack: ["React.js", "Material UI", "Local Storage"],
    },
    {
      title: "3D Model Viewer Web Application",
      period: "Jul 2025",
      summary:
        "Interactive browser-based 3D viewer created to upload, inspect, and present GLB models through a clean dashboard experience.",
      bullets: [
        "Developed a React.js web application to upload and display 3D GLB models.",
        "Implemented interactive 3D rendering for enhanced visualization.",
        "Supported model uploads via a user-friendly dashboard.",
      ],
      stack: ["React.js", "3D Rendering", "GLB"],
    },
    {
      title: "Flutter PDF Generator Application",
      period: "2025",
      summary:
        "Document workflow app built for business use cases where users need fast, customizable PDF creation directly from mobile inputs.",
      bullets: [
        "Developed a Flutter mobile application that generates dynamic PDF documents from user inputs.",
        "Implemented customizable templates and file export functionality for business use cases.",
      ],
      stack: ["Flutter", "PDF", "Templates"],
    },
    {
      title: "Business Website Development Project",
      period: "2026",
      summary:
        "Modern company website focused on strong presentation, performance, and SEO-friendly structure while following a polished UI direction from Figma.",
      bullets: [
        "Designed and developed a modern, responsive business website with optimized performance and SEO-friendly structure.",
        "Applied best UI/UX practices using Figma and implemented the frontend using modern web technologies.",
      ],
      stack: ["Frontend", "SEO", "Figma"],
    },
  ];

  const root = document.documentElement;
  const body = document.body;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let backgroundController = null;

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function lerp(start, end, amount) {
    return start + (end - start) * amount;
  }

  function safeLocalStorageGet(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function safeLocalStorageSet(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (error) {
      return;
    }
  }

  function parseColor(value, alphaOverride) {
    const color = (value || "").trim();
    if (!color) {
      return `rgba(255, 255, 255, ${alphaOverride == null ? 1 : alphaOverride})`;
    }

    if (color.startsWith("#")) {
      let hex = color.slice(1);
      if (hex.length === 3) {
        hex = hex
          .split("")
          .map((part) => part + part)
          .join("");
      }

      const number = parseInt(hex.slice(0, 6), 16);
      const red = (number >> 16) & 255;
      const green = (number >> 8) & 255;
      const blue = number & 255;
      const alpha = alphaOverride == null ? 1 : alphaOverride;
      return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    }

    const rgbMatch = color.match(/rgba?\(([^)]+)\)/i);
    if (rgbMatch) {
      const parts = rgbMatch[1].split(",").map((part) => part.trim());
      const red = parts[0] || "255";
      const green = parts[1] || "255";
      const blue = parts[2] || "255";
      const alpha = alphaOverride == null ? parts[3] || "1" : alphaOverride;
      return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    }

    return color;
  }

  function readThemePalette() {
    const styles = window.getComputedStyle(root);
    return {
      bg1: styles.getPropertyValue("--bg-1").trim(),
      bg2: styles.getPropertyValue("--bg-2").trim(),
      bg3: styles.getPropertyValue("--bg-3").trim(),
      accent: styles.getPropertyValue("--accent").trim(),
      accent2: styles.getPropertyValue("--accent-2").trim(),
      accent3: styles.getPropertyValue("--accent-3").trim(),
      border: styles.getPropertyValue("--border").trim(),
      glow: styles.getPropertyValue("--glow").trim(),
      text: styles.getPropertyValue("--text-primary").trim(),
    };
  }

  function applyTheme(themeId) {
    const theme = themeConfigs.find((item) => item.id === themeId) || themeConfigs[0];
    const map = {
      "--bg-1": theme.bg1,
      "--bg-2": theme.bg2,
      "--bg-3": theme.bg3,
      "--surface": theme.surface,
      "--surface-strong": theme.surfaceStrong,
      "--surface-soft": theme.surfaceSoft,
      "--glass-white": theme.glassWhite,
      "--border": theme.border,
      "--border-strong": theme.borderStrong,
      "--text-primary": theme.textPrimary,
      "--text-secondary": theme.textSecondary,
      "--text-muted": theme.textMuted,
      "--accent": theme.accent,
      "--accent-2": theme.accent2,
      "--accent-3": theme.accent3,
      "--glow": theme.glow,
    };

    Object.keys(map).forEach((key) => {
      root.style.setProperty(key, map[key]);
    });

    root.dataset.theme = theme.id;
    safeLocalStorageSet("portfolio-theme", theme.id);

    document.querySelectorAll("[data-theme-switcher] button").forEach((button) => {
      const active = button.dataset.themeId === theme.id;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    if (backgroundController) {
      backgroundController.refreshTheme();
    }
  }

  function renderThemeSwitchers() {
    document.querySelectorAll("[data-theme-switcher]").forEach((wrapper) => {
      wrapper.innerHTML = themeConfigs
        .map(
          (theme) => `
            <button type="button" data-theme-id="${theme.id}" aria-pressed="false" aria-label="Switch to ${theme.label} theme">
              <span class="theme-chip-dot" style="color:${theme.accent};background:linear-gradient(135deg, ${theme.accent}, ${theme.accent2});"></span>${theme.label}
            </button>
          `
        )
        .join("");
    });

    document.querySelectorAll("[data-theme-id]").forEach((button) => {
      button.addEventListener("click", function () {
        applyTheme(this.dataset.themeId);
      });
    });
  }

  function renderWorkCard(item) {
    const stack = item.stack.map((tag) => `<span class="stack-chip">${tag}</span>`).join("");

    return `
      <article class="glass-card work-card">
        <div class="preview-shell">
          <span class="preview-badge">Live deployment</span>
          <img src="${item.previewUrl}" alt="Preview of ${item.title}" loading="lazy">
          <div class="preview-fallback">
            <div>
              <span>Live domain</span>
              <strong>${item.domain}</strong>
            </div>
          </div>
        </div>
        <div class="work-copy">
          <p class="mini-label">${item.category}</p>
          <h3>${item.title}</h3>
          <p>${item.summary}</p>
          <div class="meta-row">
            <a class="domain-chip" href="${item.url}" target="_blank" rel="noreferrer">${item.domain}</a>
            <span class="domain-chip">${item.category}</span>
          </div>
          <div class="meta-row">${stack}</div>
          <div class="section-actions">
            <a class="button button-primary" href="${item.url}" target="_blank" rel="noreferrer">
              Visit site
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
          </div>
        </div>
      </article>
    `;
  }

  function renderProjectCard(item) {
    const bullets = item.bullets.map((bullet) => `<li>${bullet}</li>`).join("");
    const stack = item.stack.map((tag) => `<span class="stack-chip">${tag}</span>`).join("");

    return `
      <article class="glass-card project-card">
        <div class="project-copy">
          <p class="project-period">${item.period}</p>
          <h3>${item.title}</h3>
          <p>${item.summary}</p>
          <div class="mini-divider"></div>
          <ul class="project-bullets">${bullets}</ul>
          <div class="meta-row">${stack}</div>
        </div>
      </article>
    `;
  }

  function renderWorkSections() {
    document.querySelectorAll("[data-work-list]").forEach((container) => {
      const limit = Number(container.dataset.limit || workItems.length);
      container.innerHTML = workItems.slice(0, limit).map(renderWorkCard).join("");
    });

    document.querySelectorAll("[data-domain-list]").forEach((container) => {
      container.innerHTML = workItems
        .map(
          (item) =>
            `<a class="domain-chip" href="${item.url}" target="_blank" rel="noreferrer">${item.domain}</a>`
        )
        .join("");
    });
  }

  function renderProjectSections() {
    document.querySelectorAll("[data-project-list]").forEach((container) => {
      container.innerHTML = projectItems.map(renderProjectCard).join("");
    });
  }

  function applyPreviewFallbacks() {
    document.querySelectorAll(".preview-shell img").forEach((image) => {
      image.addEventListener("error", function () {
        this.closest(".preview-shell").classList.add("is-fallback");
      });
    });
  }

  function setPageCounts() {
    document.querySelectorAll("[data-work-count]").forEach((node) => {
      node.textContent = String(workItems.length);
    });

    document.querySelectorAll("[data-project-count]").forEach((node) => {
      node.textContent = String(projectItems.length);
    });

    document.querySelectorAll("[data-current-year]").forEach((node) => {
      node.textContent = String(new Date().getFullYear());
    });
  }

  function setActiveNav() {
    const page = body.dataset.page;
    document.querySelectorAll("[data-nav-link]").forEach((link) => {
      link.classList.toggle("is-active", link.dataset.navLink === page);
    });
  }

  function setupNavToggle() {
    const nav = document.querySelector("[data-nav]");
    const toggle = document.querySelector("[data-nav-toggle]");
    const menu = document.querySelector("[data-nav-menu]");

    if (!nav || !toggle || !menu) {
      return;
    }

    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("is-open");
      this.setAttribute("aria-expanded", String(open));
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function createBackgroundController() {
    const background = document.querySelector(".page-bg");
    const canvas = document.querySelector(".bg-canvas");
    if (!background || !canvas) {
      return null;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return null;
    }

    const state = {
      reduced: reducedMotion.matches,
      dpr: Math.min(window.devicePixelRatio || 1, 2),
      width: 0,
      height: 0,
      currentX: 0,
      currentY: 0,
      targetX: 0,
      targetY: 0,
      currentIntensity: 0.24,
      targetIntensity: 0.24,
      lastPointerX: null,
      lastPointerY: null,
      palette: null,
      frameId: 0,
      blobs: [
        {
          x: 0.12,
          y: 0.2,
          radius: 0.34,
          stretch: 1.18,
          swingX: 0.05,
          swingY: 0.04,
          speed: 0.72,
          depth: 0.09,
          offset: 0.4,
          rotation: -0.22,
          color: "accent",
          alpha: 0.8,
        },
        {
          x: 0.18,
          y: 0.82,
          radius: 0.32,
          stretch: 1.3,
          swingX: 0.06,
          swingY: 0.05,
          speed: 0.56,
          depth: 0.14,
          offset: 2.2,
          rotation: 0.18,
          color: "accent2",
          alpha: 0.82,
        },
        {
          x: 0.56,
          y: 0.14,
          radius: 0.3,
          stretch: 1.08,
          swingX: 0.05,
          swingY: 0.035,
          speed: 0.64,
          depth: 0.1,
          offset: 4.1,
          rotation: -0.12,
          color: "accent3",
          alpha: 0.72,
        },
        {
          x: 0.9,
          y: 0.18,
          radius: 0.4,
          stretch: 1.16,
          swingX: 0.035,
          swingY: 0.03,
          speed: 0.44,
          depth: 0.08,
          offset: 1.1,
          rotation: 0.08,
          color: "text",
          alpha: 0.86,
        },
        {
          x: 0.82,
          y: 0.78,
          radius: 0.3,
          stretch: 1.16,
          swingX: 0.05,
          swingY: 0.04,
          speed: 0.52,
          depth: 0.08,
          offset: 5.2,
          rotation: -0.18,
          color: "accent",
          alpha: 0.62,
        },
      ],
    };

    function applyPointerVars() {
      const px = 50 + state.currentX * 34;
      const py = 42 + state.currentY * 28;
      const softX = 24 - state.currentX * 18;
      const softY = 22 - state.currentY * 14;

      root.style.setProperty("--move-x", `${(state.currentX * 44).toFixed(2)}px`);
      root.style.setProperty("--move-y", `${(state.currentY * 32).toFixed(2)}px`);
      root.style.setProperty("--pointer-x", `${px.toFixed(2)}%`);
      root.style.setProperty("--pointer-y", `${py.toFixed(2)}%`);
      root.style.setProperty("--pointer-x-soft", `${softX.toFixed(2)}%`);
      root.style.setProperty("--pointer-y-soft", `${softY.toFixed(2)}%`);
      root.style.setProperty("--pointer-active", state.currentIntensity.toFixed(3));
    }

    function resizeCanvas() {
      state.width = window.innerWidth;
      state.height = window.innerHeight;
      state.dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(state.width * state.dpr);
      canvas.height = Math.round(state.height * state.dpr);
      canvas.style.width = `${state.width}px`;
      canvas.style.height = `${state.height}px`;
      context.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
      requestPaint();
    }

    function resolveColor(key) {
      if (!state.palette) {
        return "#ffffff";
      }

      const map = {
        accent: state.palette.accent,
        accent2: state.palette.accent2,
        accent3: state.palette.accent3,
        text: state.palette.text,
      };

      return map[key] || state.palette.accent;
    }

    function drawBackdrop() {
      const fill = context.createLinearGradient(0, 0, state.width, state.height);
      fill.addColorStop(0, state.palette ? state.palette.bg1 : "#04121f");
      fill.addColorStop(0.46, state.palette ? state.palette.bg2 : "#071a2b");
      fill.addColorStop(1, state.palette ? state.palette.bg3 : "#0d1230");
      context.fillStyle = fill;
      context.fillRect(0, 0, state.width, state.height);
    }

    function drawRibbon(color, time, anchorY, thickness, rotation, swing) {
      const length = Math.hypot(state.width, state.height) * 1.35;
      const centerX =
        state.width * 0.52 +
        Math.sin(time * 0.00012 + swing) * state.width * 0.06 +
        state.currentX * state.width * 0.1;
      const centerY =
        state.height * anchorY +
        Math.cos(time * 0.00014 + swing) * state.height * 0.05 +
        state.currentY * state.height * 0.08;

      context.save();
      context.translate(centerX, centerY);
      context.rotate(rotation + Math.sin(time * 0.00008 + swing) * 0.12);
      const gradient = context.createLinearGradient(-length / 2, 0, length / 2, 0);
      gradient.addColorStop(0, parseColor(color, 0));
      gradient.addColorStop(0.24, parseColor(color, 0.05));
      gradient.addColorStop(0.5, parseColor(color, 0.16));
      gradient.addColorStop(0.76, parseColor(color, 0.05));
      gradient.addColorStop(1, parseColor(color, 0));
      context.fillStyle = gradient;
      context.fillRect(-length / 2, -(state.height * thickness) / 2, length, state.height * thickness);
      context.restore();
    }

    function drawBlob(blob, time) {
      const oscillation = state.reduced ? 0 : time * 0.00012 * blob.speed;
      const x =
        (blob.x + Math.sin(oscillation + blob.offset) * blob.swingX + state.currentX * blob.depth) *
        state.width;
      const y =
        (blob.y + Math.cos(oscillation * 1.14 + blob.offset) * blob.swingY + state.currentY * blob.depth * 0.82) *
        state.height;
      const radius = Math.max(state.width, state.height) * blob.radius;
      const ellipseScale = blob.stretch;
      const rotation = blob.rotation + Math.sin(oscillation + blob.offset) * 0.1;
      const gradient = context.createRadialGradient(0, 0, radius * 0.06, 0, 0, radius);
      const color = resolveColor(blob.color);

      gradient.addColorStop(0, parseColor(color, 0.42 * blob.alpha));
      gradient.addColorStop(0.34, parseColor(color, 0.22 * blob.alpha));
      gradient.addColorStop(0.68, parseColor(color, 0.08 * blob.alpha));
      gradient.addColorStop(1, parseColor(color, 0));

      context.save();
      context.translate(x, y);
      context.rotate(rotation);
      context.scale(1, ellipseScale);
      context.fillStyle = gradient;
      context.beginPath();
      context.arc(0, 0, radius, 0, Math.PI * 2);
      context.fill();
      context.restore();
    }

    function drawCursorAura() {
      const x = ((state.currentX + 0.5) * state.width);
      const y = ((state.currentY + 0.5) * state.height);
      const radius = Math.max(state.width, state.height) * (0.12 + state.currentIntensity * 0.04);
      const gradient = context.createRadialGradient(x, y, radius * 0.05, x, y, radius);

      gradient.addColorStop(0, parseColor(state.palette ? state.palette.text : "#ffffff", 0.22));
      gradient.addColorStop(0.3, parseColor(state.palette ? state.palette.accent : "#66ecff", 0.14));
      gradient.addColorStop(1, parseColor(state.palette ? state.palette.accent2 : "#7e8bff", 0));

      context.fillStyle = gradient;
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fill();
    }

    function renderScene(time) {
      context.clearRect(0, 0, state.width, state.height);
      drawBackdrop();

      context.globalCompositeOperation = "screen";
      drawRibbon(resolveColor("accent2"), time, 0.48, 0.26, -0.46, 0.6);
      drawRibbon(resolveColor("accent"), time, 0.28, 0.18, 0.78, 2.1);
      state.blobs.forEach((blob) => {
        drawBlob(blob, time);
      });
      drawCursorAura();
      context.globalCompositeOperation = "source-over";
    }

    function paint(time) {
      state.currentX = lerp(state.currentX, state.targetX, 0.08);
      state.currentY = lerp(state.currentY, state.targetY, 0.08);
      state.currentIntensity = lerp(state.currentIntensity, state.targetIntensity, 0.1);
      state.targetIntensity = lerp(state.targetIntensity, 0.24, 0.05);
      applyPointerVars();
      renderScene(time || performance.now());

      const settledX = Math.abs(state.currentX - state.targetX) < 0.001;
      const settledY = Math.abs(state.currentY - state.targetY) < 0.001;
      const settledIntensity = Math.abs(state.currentIntensity - state.targetIntensity) < 0.003;

      if (!state.reduced || !settledX || !settledY || !settledIntensity) {
        state.frameId = window.requestAnimationFrame(paint);
      } else {
        state.frameId = 0;
      }
    }

    function requestPaint() {
      if (!state.frameId) {
        state.frameId = window.requestAnimationFrame(paint);
      }
    }

    function updatePointer(clientX, clientY) {
      if (state.reduced) {
        return;
      }

      const previousX = state.lastPointerX == null ? clientX : state.lastPointerX;
      const previousY = state.lastPointerY == null ? clientY : state.lastPointerY;
      const distance = Math.hypot(clientX - previousX, clientY - previousY);
      state.lastPointerX = clientX;
      state.lastPointerY = clientY;
      state.targetX = clamp(clientX / window.innerWidth - 0.5, -0.5, 0.5);
      state.targetY = clamp(clientY / window.innerHeight - 0.5, -0.5, 0.5);
      state.targetIntensity = clamp(0.24 + distance / 90, 0.24, 1);
      requestPaint();
    }

    function resetPointer() {
      state.lastPointerX = null;
      state.lastPointerY = null;
      state.targetX = 0;
      state.targetY = 0;
      state.targetIntensity = 0.24;
      requestPaint();
    }

    function onMotionPreferenceChange() {
      state.reduced = reducedMotion.matches;
      if (state.reduced) {
        state.targetX = 0;
        state.targetY = 0;
        state.targetIntensity = 0.24;
        requestPaint();
      }
    }

    function refreshTheme() {
      state.palette = readThemePalette();
      root.style.setProperty("--cursor-glow-a", parseColor(state.palette.accent, 0.42));
      root.style.setProperty("--cursor-glow-b", parseColor(state.palette.accent2, 0.3));
      root.style.setProperty("--cursor-glow-c", parseColor(state.palette.accent3, 0.24));
      root.style.setProperty("--scene-wash-a", parseColor(state.palette.accent, 0.22));
      root.style.setProperty("--scene-wash-b", parseColor(state.palette.accent2, 0.24));
      root.style.setProperty("--scene-wash-c", parseColor(state.palette.accent3, 0.18));
      root.style.setProperty("--scene-highlight", parseColor(state.palette.text, 0.3));
      root.style.setProperty("--scene-shadow", parseColor(state.palette.bg1, 0.34));
      requestPaint();
    }

    window.addEventListener(
      "pointermove",
      function (event) {
        updatePointer(event.clientX, event.clientY);
      },
      { passive: true }
    );

    window.addEventListener(
      "touchmove",
      function (event) {
        if (!event.touches || !event.touches[0]) {
          return;
        }
        updatePointer(event.touches[0].clientX, event.touches[0].clientY);
      },
      { passive: true }
    );

    window.addEventListener("pointerleave", resetPointer);
    window.addEventListener("blur", resetPointer);
    window.addEventListener("resize", resizeCanvas, { passive: true });

    if (typeof reducedMotion.addEventListener === "function") {
      reducedMotion.addEventListener("change", onMotionPreferenceChange);
    } else if (typeof reducedMotion.addListener === "function") {
      reducedMotion.addListener(onMotionPreferenceChange);
    }

    resizeCanvas();
    refreshTheme();
    requestPaint();

    return {
      refreshTheme,
    };
  }

  function init() {
    renderThemeSwitchers();
    applyTheme(safeLocalStorageGet("portfolio-theme") || "aurora");
    renderWorkSections();
    renderProjectSections();
    applyPreviewFallbacks();
    setPageCounts();
    setActiveNav();
    setupNavToggle();
    backgroundController = createBackgroundController();
    if (backgroundController) {
      backgroundController.refreshTheme();
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();
