/**
 * Rebecca's Mystery — Script Principal (Etapa 05 - Animações e Microinterações Cinematográficas)
 * Preloader cinematográfico, Parallax suave, Scroll Reveal sequencial,
 * Modais com trap de foco, Web Audio API e acessibilidade WCAG.
 */

document.addEventListener("DOMContentLoaded", () => {
  initThemeManager();
  initCinemaPreloader();
  initHeaderScroll();
  initMobileMenu();
  initNavigationScroll();
  initScrollSpy();
  initScrollReveal();
  initModals();
  initAudioToggle();
  initReducedMotion();
  initKeyboardAccessibility();
  initParallaxEffects();
});

/* ==========================================================================
   1. ABERTURA CINEMATOGRÁFICA COM GSAP DRAWSVG (PROMPT 12)
   - Fundo vinho profundo: #160F14
   - Momento 1: Arco ornamental superior desenhado com elegância e fluidez
   - Momento 2: Estrela central superior, estrelas laterais e arco inferior
   - Momento 3: Contornos do monograma RM (R primeiro com curvas nobres, depois M)
   - Momento 4: Finalização dos caminhos SVG e revelação suave da logo original PNG
   - Saída: Pausa contemplativa, redução sutil de escala e transição graciosa para o site
   ========================================================================== */
function initCinemaPreloader() {
  const intro = document.getElementById("cinema-intro");
  if (!intro) return;

  const skipBtn = document.getElementById("intro-skip-btn");
  const logoStage = document.getElementById("intro-logo-stage");
  const logoSvg = document.getElementById("logo-rm-svg");
  const logoPng = document.getElementById("intro-logo-png");

  // Caminhos das 4 etapas de desenho
  const arcTopPaths = document.querySelectorAll("#draw-arc-top .draw-path");
  const starCenterPath = document.querySelectorAll("#draw-star-center .draw-path");
  const starsLateralPaths = document.querySelectorAll("#draw-stars-lateral .draw-path");
  const arcBottomPaths = document.querySelectorAll("#draw-arc-bottom .draw-path");
  const letterRPaths = document.querySelectorAll("#draw-monogram-r .draw-path");
  const letterMPaths = document.querySelectorAll("#draw-monogram-m .draw-path");
  const allSvgPaths = document.querySelectorAll("#logo-rm-svg .draw-path");

  // Hero elements para revelação sequencial pós-intro
  const heroTitle = document.querySelector(".ref-hero-title");
  const heroBadge = document.querySelector(".ref-lead-tag");
  const heroBanner = document.querySelector(".ref-headline-banner");
  const heroDesc = document.querySelector(".ref-hero-desc");
  const heroActions = document.querySelector(".ref-hero-action-row");
  const heroPortrait = document.querySelector(".ref-hero-portrait-frame");
  const heroFloatCards = document.querySelectorAll(".ref-float-card");

  // Função para encerrar e remover overlay
  const completeIntro = () => {
    document.body.style.overflow = "";
    intro.classList.add("intro-complete");
    sessionStorage.setItem("rm_intro_seen", "true");
    setTimeout(() => {
      if (intro && intro.parentNode) {
        intro.remove();
      }
    }, 850);
  };

  // Se o usuário prefere redução de movimento ou já visualizou nesta sessão
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches || document.body.classList.contains("reduce-motion");
  const alreadySeen = sessionStorage.getItem("rm_intro_seen") === "true";

  if (prefersReduced || alreadySeen) {
    completeIntro();
    return;
  }

  // Previne rolagem durante a abertura cinematográfica
  document.body.style.overflow = "hidden";

  // Se o GSAP não estiver disponível, fallback gracioso
  if (typeof gsap === "undefined") {
    setTimeout(completeIntro, 2500);
    return;
  }

  // Listener do botão Pular Intro
  let mainTl = null;
  if (skipBtn) {
    skipBtn.addEventListener("click", () => {
      if (mainTl) mainTl.kill();
      gsap.to(intro, {
        opacity: 0,
        duration: 0.45,
        ease: "power2.out",
        onComplete: completeIntro
      });
    });
  }

  // Estado inicial dos elementos da Hero para revelação coreografada
  gsap.set([heroBadge, heroTitle, heroBanner, heroDesc, heroActions], {
    opacity: 0,
    y: 25
  });
  if (heroPortrait) {
    gsap.set(heroPortrait, { opacity: 0, scale: 0.95, y: 30 });
  }
  if (heroFloatCards.length) {
    gsap.set(heroFloatCards, { opacity: 0, y: 15, scale: 0.9 });
  }

  // Configuração inicial de todos os traços SVG para desenho com DrawSVG
  gsap.set(allSvgPaths, {
    drawSVG: "0%",
    opacity: 0.95
  });
  gsap.set(logoPng, {
    opacity: 0,
    scale: 0.99
  });
  gsap.set(logoStage, {
    opacity: 1,
    scale: 0.98
  });

  // Timeline Master do GSAP com DrawSVGPlugin
  // Calibração de tempo estrita conforme Prompt 13:
  // Entrada do fundo: 0,15s
  // Desenho dos ornamentos: 0,55s
  // Desenho do monograma RM: 0,75s
  // Revelação da logo original: 0,35s
  // Pequena pausa: 0,30s
  // Transição para o site: 0,45s (Duração total ~ 2,55s)
  mainTl = gsap.timeline({
    onComplete: completeIntro
  });

  mainTl
    // Entrada rápida e suave do palco
    .to(logoStage, {
      scale: 1,
      duration: 0.15,
      ease: "power2.out"
    })

    // ==========================================
    // ETAPA 1: Desenho dos Ornamentos (Duração: 0,55s)
    // Arco superior, estrelas e arco inferior em sequência ágil e contínua
    // ==========================================
    .to(arcTopPaths, {
      drawSVG: "100%",
      duration: 0.35,
      ease: "power2.out"
    })
    .to(starCenterPath, {
      drawSVG: "100%",
      duration: 0.22,
      ease: "power2.out"
    }, "-=0.2")
    .to(starsLateralPaths, {
      drawSVG: "100%",
      duration: 0.25,
      stagger: 0.04,
      ease: "power2.out"
    }, "-=0.18")
    .to(arcBottomPaths, {
      drawSVG: "100%",
      duration: 0.35,
      stagger: 0.05,
      ease: "power2.out"
    }, "-=0.22")

    // ==========================================
    // ETAPA 2: Desenho do Monograma RM (Duração: 0,75s)
    // R desenhado primeiro de forma fluida, seguido imediatamente por M
    // ==========================================
    .to(letterRPaths, {
      drawSVG: "100%",
      duration: 0.45,
      stagger: 0.08,
      ease: "power2.out"
    }, "-=0.08")
    .to(letterMPaths, {
      drawSVG: "100%",
      duration: 0.38,
      ease: "power2.out"
    }, "-=0.15")

    // ==========================================
    // ETAPA 3: Revelação da Logo Original (Duração: 0,35s)
    // Logo PNG surge com textura e fidelidade absolutas
    // ==========================================
    .to(logoPng, {
      opacity: 1,
      duration: 0.35,
      ease: "power1.out"
    })
    .to(logoSvg, {
      opacity: 0,
      duration: 0.25,
      ease: "power1.in"
    }, "<")

    // ==========================================
    // ETAPA 4: Pequena Pausa (Duração: 0,30s)
    // ==========================================
    .to(logoPng, {
      scale: 0.98,
      duration: 0.30,
      ease: "none"
    })

    // ==========================================
    // ETAPA 5: Transição para o Site (Duração: 0,45s)
    // Desaparecimento da intro e revelação simultânea da Hero
    // ==========================================
    .to(intro, {
      opacity: 0,
      duration: 0.45,
      ease: "power2.out"
    })

    // Revelação coreografada dos elementos da Hero Section
    .to(
      heroPortrait,
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out"
      },
      "-=0.35"
    )
    .to(
      [heroBadge, heroTitle, heroBanner, heroDesc, heroActions],
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.08,
        ease: "power3.out"
      },
      "-=0.45"
    )
    .to(
      heroFloatCards,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(1.4)"
      },
      "-=0.5"
    );
}

/* ==========================================================================
   2. HEADER & NAVEGAÇÃO
   ========================================================================== */
function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  let lastScrollY = window.scrollY;

  const onScroll = () => {
    const currentY = window.scrollY;

    if (currentY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    lastScrollY = currentY;
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ==========================================================================
   3. MENU MOBILE ACESSÍVEL
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!toggleBtn || !navMenu) return;

  const toggleMenu = () => {
    const isOpen = navMenu.classList.contains("open");
    if (isOpen) {
      navMenu.classList.remove("open");
      toggleBtn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
      toggleBtn.focus();
    } else {
      navMenu.classList.add("open");
      toggleBtn.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
      const firstLink = navMenu.querySelector(".nav-link");
      if (firstLink) firstLink.focus();
    }
  };

  toggleBtn.addEventListener("click", toggleMenu);

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("open")) {
        toggleMenu();
      }
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMenu.classList.contains("open")) {
      toggleMenu();
    }
  });
}

/* ==========================================================================
   4. ROLAGEM SUAVE COM OFFSET
   ========================================================================== */
function initNavigationScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (targetId === "#") return;

      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      e.preventDefault();
      const headerHeight = document.querySelector(".site-header")?.offsetHeight || 80;
      const targetPos = targetEl.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: targetPos,
        behavior: "smooth"
      });
    });
  });
}

/* ==========================================================================
   5. SCROLLSPY COM INDICADOR ATIVO
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
          } else {
            link.classList.remove("active");
            link.removeAttribute("aria-current");
          }
        });
      }
    });
  }, {
    rootMargin: "-30% 0px -40% 0px",
    threshold: 0
  });

  sections.forEach(sec => observer.observe(sec));
}

/* ==========================================================================
   6. SCROLL REVEAL COM STAGGER NATURAL
   ========================================================================== */
function initScrollReveal() {
  const reveals = document.querySelectorAll(".reveal");
  if (!reveals.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || document.body.classList.contains("reduce-motion")) {
    reveals.forEach(el => el.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  });

  reveals.forEach(el => observer.observe(el));
}

/* ==========================================================================
   7. PARALLAX SUAVE E SUTIL EM ELEMENTOS FLUTUANTES (DESKTOP)
   ========================================================================== */
function initParallaxEffects() {
  if (window.innerWidth < 1024) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || document.body.classList.contains("reduce-motion")) return;

  const parallaxElements = document.querySelectorAll(".parallax-element");
  if (!parallaxElements.length) return;

  let ticking = false;

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        parallaxElements.forEach(el => {
          const speed = parseFloat(el.getAttribute("data-parallax-speed")) || 0.1;
          const offset = scrollY * speed;
          el.style.transform = `translate3d(0, ${offset}px, 0)`;
        });
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/* ==========================================================================
   8. MODAIS COM GERENCIAMENTO DE FOCO ACESSÍVEL
   ========================================================================== */
let lastActiveElement = null;

function initModals() {
  const dossierModal = document.getElementById("dossier-modal");
  const dossierCloseBtn = document.getElementById("dossier-modal-close");

  if (dossierCloseBtn && dossierModal) {
    dossierCloseBtn.addEventListener("click", () => {
      closeModal(dossierModal);
    });
  }

  const playModal = document.getElementById("play-modal");
  const playBtn = document.getElementById("btn-play-action");
  const playCloseBtn = document.getElementById("play-modal-close");

  if (playBtn && playModal) {
    playBtn.addEventListener("click", (e) => {
      e.preventDefault();
      openModal(playModal);
    });
  }

  if (playCloseBtn && playModal) {
    playCloseBtn.addEventListener("click", () => {
      closeModal(playModal);
    });
  }

  window.addEventListener("click", (e) => {
    if (dossierModal && e.target === dossierModal) closeModal(dossierModal);
    if (playModal && e.target === playModal) closeModal(playModal);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (dossierModal?.classList.contains("open")) closeModal(dossierModal);
      if (playModal?.classList.contains("open")) closeModal(playModal);
    }
  });
}

function openModal(modal) {
  if (!modal) return;
  lastActiveElement = document.activeElement;
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
  const closeBtn = modal.querySelector(".modal-close-btn");
  if (closeBtn) closeBtn.focus();
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
  if (lastActiveElement) {
    lastActiveElement.focus();
    lastActiveElement = null;
  }
}

window.openModalHelper = openModal;
window.closeModalHelper = closeModal;

/* ==========================================================================
   9. ÁUDIO AMBIENTE SUTIL (WEB AUDIO API)
   ========================================================================== */
function initAudioToggle() {
  const audioBtn = document.getElementById("audio-toggle-btn");
  if (!audioBtn) return;

  audioBtn.addEventListener("click", () => {
    if (!window.ambientSound) return;
    const isPlaying = window.ambientSound.toggle();
    if (isPlaying) {
      audioBtn.classList.add("active");
      audioBtn.setAttribute("aria-label", "Silenciar trilha ambiente");
      audioBtn.title = "Silenciar trilha ambiente";
    } else {
      audioBtn.classList.remove("active");
      audioBtn.setAttribute("aria-label", "Tocar trilha atmosférica da Saint Claire");
      audioBtn.title = "Tocar trilha atmosférica";
    }
  });
}

/* ==========================================================================
   10. REDUÇÃO DE MOVIMENTO (PREFERS-REDUCED-MOTION)
   ========================================================================== */
function initReducedMotion() {
  const motionBtn = document.getElementById("motion-toggle-btn");
  const savedPreference = localStorage.getItem("rm_reduced_motion");

  if (savedPreference === "true") {
    document.body.classList.add("reduce-motion");
    if (motionBtn) motionBtn.classList.add("active");
  }

  if (motionBtn) {
    motionBtn.addEventListener("click", () => {
      const isReduced = document.body.classList.toggle("reduce-motion");
      motionBtn.classList.toggle("active", isReduced);
      localStorage.setItem("rm_reduced_motion", isReduced ? "true" : "false");
    });
  }
}

/* ==========================================================================
   11. SUPORTE GLOBAL A FOCO POR TECLADO
   ========================================================================== */
function initKeyboardAccessibility() {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      document.body.classList.add("user-is-tabbing");
    }
  });

  document.addEventListener("mousedown", () => {
    document.body.classList.remove("user-is-tabbing");
  });
}

/* ==========================================================================
   12. GERENCIADOR DE MODO CLARO & MODO ESCURO (PROMPT 08)
   ========================================================================== */
function initThemeManager() {
  const themeBtn = document.getElementById("theme-toggle-btn");
  if (!themeBtn) return;

  const getSystemTheme = () => {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const currentTheme = () => {
    return document.documentElement.getAttribute("data-theme") || "light";
  };

  const updateButtonState = (theme) => {
    const isDark = theme === "dark";
    themeBtn.setAttribute(
      "aria-label",
      isDark ? "Alternar para modo claro" : "Alternar para modo escuro"
    );
    themeBtn.title = isDark ? "Alternar para modo claro" : "Alternar para modo escuro";
    themeBtn.classList.toggle("active", isDark);

    // Atualiza theme-color meta tag para mobile status bar
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute("content", isDark ? "#160F14" : "#2B1923");
    }
  };

  const applyTheme = (theme, animate = false) => {
    if (animate) {
      document.body.classList.add("theme-transitioning");
    }

    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("rm_theme", theme);
    updateButtonState(theme);

    if (animate) {
      setTimeout(() => {
        document.body.classList.remove("theme-transitioning");
      }, 400);
    }
  };

  // Define estado inicial
  const savedTheme = localStorage.getItem("rm_theme");
  const initialTheme = savedTheme || getSystemTheme();
  applyTheme(initialTheme, false);

  // Evento de clique / teclado no botão
  themeBtn.addEventListener("click", () => {
    const newTheme = currentTheme() === "dark" ? "light" : "dark";
    applyTheme(newTheme, true);
  });

  // Escuta alteração do tema no sistema operacional caso o usuário não tenha preferência salva
  if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      if (!localStorage.getItem("rm_theme")) {
        applyTheme(e.matches ? "dark" : "light", true);
      }
    });
  }
}
