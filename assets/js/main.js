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
   1. ABERTURA CINEMATOGRÁFICA COM GSAP DYNAMIC MORPHING (PROMPT 11)
   Etapa 1: Apresentação da logo Rebecca's Mystery com fade, escala e iluminação sutil.
   Etapa 2: Dynamic Morphing de cortinas SVG com curvas Bézier orgânicas em 3 camadas,
            revelando a Hero Section com stagger e continuidade cinematográfica.
   ========================================================================== */
function initCinemaPreloader() {
  const intro = document.getElementById("cinema-intro");
  if (!intro) return;

  const skipBtn = document.getElementById("intro-skip-btn");
  const logoStage = document.getElementById("intro-logo-stage");
  const crest = document.getElementById("intro-logo-crest");
  const tag = document.getElementById("intro-logo-tag");
  const title = document.getElementById("intro-logo-title");
  const quote = document.getElementById("intro-logo-quote");
  const line = document.getElementById("intro-logo-line");

  const path1 = document.getElementById("morph-path-1");
  const path2 = document.getElementById("morph-path-2");
  const path3 = document.getElementById("morph-path-3");

  // Hero elements para revelação sequencial
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
      intro.remove();
    }, 700);
  };

  // Se o usuário prefere redução de movimento ou já visualizou nesta sessão
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches || document.body.classList.contains("reduce-motion");
  const alreadySeen = sessionStorage.getItem("rm_intro_seen") === "true";

  if (prefersReduced || alreadySeen) {
    completeIntro();
    return;
  }

  // Previne rolagem durante a abertura
  document.body.style.overflow = "hidden";

  // Se o GSAP não estiver disponível por qualquer motivo, fallback gracioso
  if (typeof gsap === "undefined") {
    setTimeout(completeIntro, 2200);
    return;
  }

  // Listener do botão Pular
  let mainTl = null;
  if (skipBtn) {
    skipBtn.addEventListener("click", () => {
      if (mainTl) mainTl.kill();
      gsap.to(intro, {
        opacity: 0,
        duration: 0.4,
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

  // Definição dos caminhos SVG orgânicos para o Dynamic Morphing
  // viewBox: 0 0 1440 900
  // Início: Cobrindo toda a tela
  const fullCover = "M 0 0 L 1440 0 L 1440 900 L 0 900 Z";

  // Morfismo 1: Ondulação fluida intermediária (curva senoidal com ponto de inflexão)
  const waveShapeA = "M 0 0 L 1440 0 L 1440 450 Q 1080 820 720 520 Q 360 220 0 680 Z";
  const waveShapeB = "M 0 0 L 1440 0 L 1440 380 Q 1120 180 720 480 Q 320 780 0 540 Z";
  const waveShapeC = "M 0 0 L 1440 0 L 1440 280 Q 1000 620 720 320 Q 440 80 0 380 Z";

  // Morfismo 2: Retração final orgânica ultrapassando o topo
  const exitWave = "M 0 0 L 1440 0 L 1440 0 Q 720 -180 0 0 Z";

  // Timeline Master do GSAP
  mainTl = gsap.timeline({
    onComplete: completeIntro
  });

  // ETAPA 1: Apresentação da Logo Original
  mainTl
    .set([crest, tag, title, quote, line], { opacity: 0, y: 16 })
    .to(crest, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "power3.out"
    })
    .to(
      [tag, title],
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out"
      },
      "-=0.4"
    )
    .to(
      [quote, line],
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      },
      "-=0.3"
    )
    .to({}, { duration: 0.9 }) // Pausa contemplativa sofisticada
    // Saída suave da logo antes do morphing
    .to(logoStage, {
      opacity: 0,
      y: -25,
      scale: 0.96,
      duration: 0.6,
      ease: "power2.in"
    });

  // ETAPA 2: GSAP Dynamic Morphing das Camadas SVG em Curvas Bézier
  // Animação das 3 camadas SVG escalonadas (Layer 1, Layer 2, Layer 3)
  mainTl
    // Fase 1 do Morphing: Deformação orgânica em ondas fluidas com stagger
    .to(
      path1,
      {
        attr: { d: waveShapeA },
        duration: 0.85,
        ease: "power2.inOut"
      },
      "-=0.2"
    )
    .to(
      path2,
      {
        attr: { d: waveShapeB },
        duration: 0.95,
        ease: "power2.inOut"
      },
      "-=0.75"
    )
    .to(
      path3,
      {
        attr: { d: waveShapeC },
        duration: 1.05,
        ease: "power2.inOut"
      },
      "-=0.85"
    )
    // Fase 2 do Morphing: Retração completa abrindo a tela
    .to(
      path1,
      {
        attr: { d: exitWave },
        duration: 0.8,
        ease: "power3.in"
      },
      "-=0.4"
    )
    .to(
      path2,
      {
        attr: { d: exitWave },
        duration: 0.85,
        ease: "power3.in"
      },
      "-=0.7"
    )
    .to(
      path3,
      {
        attr: { d: exitWave },
        duration: 0.9,
        ease: "power3.in"
      },
      "-=0.75"
    )

    // ETAPA 3: Revelação Cinematográfica da Hero Section
    .to(
      heroPortrait,
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out"
      },
      "-=0.6"
    )
    .to(
      [heroBadge, heroTitle, heroBanner, heroDesc, heroActions],
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out"
      },
      "-=0.7"
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
