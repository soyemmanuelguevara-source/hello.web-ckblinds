(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------------------
     Loading screen
     ------------------------------------------------------------------- */
  var loader = document.getElementById('loader');
  document.body.classList.add('no-scroll');

  function hideLoader() {
    if (!loader) return;
    loader.classList.add('is-hidden');
    document.body.classList.remove('no-scroll');
    setTimeout(function () {
      loader.setAttribute('hidden', '');
    }, 650);
  }

  window.addEventListener('load', function () {
    setTimeout(hideLoader, 1800);
  });
  // Safety net in case the load event is delayed by slow external assets.
  setTimeout(hideLoader, 6000);

  /* ---------------------------------------------------------------------
     Header scroll state
     ------------------------------------------------------------------- */
  var header = document.getElementById('siteHeader');
  var ticking = false;

  function updateHeader() {
    if (window.scrollY > 40) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(updateHeader);
      ticking = true;
    }
  });
  updateHeader();

  /* ---------------------------------------------------------------------
     Mobile navigation
     ------------------------------------------------------------------- */
  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');

  function closeNav() {
    mainNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('no-scroll');
  }

  function toggleNav() {
    var isOpen = mainNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.classList.toggle('no-scroll', isOpen);
  }

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', toggleNav);
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeNav);
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 860) closeNav();
    });
  }

  /* ---------------------------------------------------------------------
     Scroll reveal (IntersectionObserver)
     ------------------------------------------------------------------- */
  var animatedEls = document.querySelectorAll('[data-animate]');

  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    var revealObserver = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    animatedEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    animatedEls.forEach(function (el) { el.classList.add('in-view'); });
  }

  /* ---------------------------------------------------------------------
     Hero particle background
     ------------------------------------------------------------------- */
  var particleCanvas = document.getElementById('heroParticles');
  var heroSection = document.querySelector('.hero');

  if (particleCanvas && heroSection && !prefersReducedMotion) {
    var ctx = particleCanvas.getContext('2d');
    var particles = [];
    var particleRAF = null;
    var particlesRunning = false;
    var DPR = Math.min(window.devicePixelRatio || 1, 2);

    function particleCount() {
      return window.innerWidth < 640 ? 24 : window.innerWidth < 1024 ? 40 : 58;
    }

    function resizeParticleCanvas() {
      var rect = heroSection.getBoundingClientRect();
      particleCanvas.width = rect.width * DPR;
      particleCanvas.height = rect.height * DPR;
      particleCanvas.style.width = rect.width + 'px';
      particleCanvas.style.height = rect.height + 'px';
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    function createParticles() {
      var rect = heroSection.getBoundingClientRect();
      var count = particleCount();
      particles = [];
      for (var i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          r: Math.random() * 1.6 + 0.6,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          a: Math.random() * 0.4 + 0.2
        });
      }
    }

    function drawParticles() {
      var rect = heroSection.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = rect.width; else if (p.x > rect.width) p.x = 0;
        if (p.y < 0) p.y = rect.height; else if (p.y > rect.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(111, 224, 255,' + p.a + ')';
        ctx.fill();
      }

      for (var a = 0; a < particles.length; a++) {
        for (var b = a + 1; b < particles.length; b++) {
          var dx = particles[a].x - particles[b].x;
          var dy = particles[a].y - particles[b].y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.strokeStyle = 'rgba(28, 173, 228,' + (0.12 * (1 - dist / 120)) + ')';
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      particleRAF = requestAnimationFrame(drawParticles);
    }

    function startParticles() {
      if (particlesRunning) return;
      particlesRunning = true;
      particleRAF = requestAnimationFrame(drawParticles);
    }

    function stopParticles() {
      particlesRunning = false;
      if (particleRAF) cancelAnimationFrame(particleRAF);
    }

    resizeParticleCanvas();
    createParticles();
    startParticles();

    var particleResizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(particleResizeTimer);
      particleResizeTimer = setTimeout(function () {
        resizeParticleCanvas();
        createParticles();
      }, 200);
    });

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) startParticles(); else stopParticles();
        });
      }, { threshold: 0 }).observe(heroSection);
    }

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) stopParticles(); else startParticles();
    });
  }

  /* ---------------------------------------------------------------------
     Hero typewriter + gradient title effect
     ------------------------------------------------------------------- */
  var typewriterEl = document.getElementById('heroTypewriter');
  var phrases = [
    'Sheer Elegance.',
    'Black Out total.',
    'Estilo Enrollable.',
    'Toldos a tu Medida.',
    'Cortinas de Diseño.'
  ];

  if (typewriterEl) {
    if (prefersReducedMotion) {
      typewriterEl.textContent = phrases[0];
    } else {
      var phraseIndex = 0;
      var charIndex = 0;
      var isDeleting = false;

      function tick() {
        var current = phrases[phraseIndex];

        if (isDeleting) {
          charIndex--;
        } else {
          charIndex++;
        }

        typewriterEl.textContent = current.substring(0, charIndex);

        var delay = isDeleting ? 45 : 90;

        if (!isDeleting && charIndex === current.length) {
          delay = 1600;
          isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          delay = 300;
        }

        setTimeout(tick, delay);
      }

      setTimeout(tick, 900);
    }
  }

  /* ---------------------------------------------------------------------
     Parallax "fixed" effect on key images (hero + split section)
     ------------------------------------------------------------------- */
  var parallaxImgs = document.querySelectorAll('.parallax-img');
  if (parallaxImgs.length && !prefersReducedMotion) {
    var parallaxTicking = false;

    function updateParallax() {
      var viewportCenter = window.innerHeight / 2;
      parallaxImgs.forEach(function (img) {
        var rect = img.parentElement.getBoundingClientRect();
        var elementCenter = rect.top + rect.height / 2;
        var offset = (viewportCenter - elementCenter) * 0.08;
        offset = Math.max(-24, Math.min(24, offset));
        img.style.transform = 'scale(1.18) translateY(' + offset.toFixed(2) + 'px)';
      });
      parallaxTicking = false;
    }

    window.addEventListener('scroll', function () {
      if (!parallaxTicking) {
        window.requestAnimationFrame(updateParallax);
        parallaxTicking = true;
      }
    }, { passive: true });
    window.addEventListener('resize', updateParallax);
    updateParallax();
  }

  /* ---------------------------------------------------------------------
     FAQ accordion
     ------------------------------------------------------------------- */
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    var question = item.querySelector('.faq-question');
    question.addEventListener('click', function () {
      var isOpen = item.classList.contains('is-open');

      faqItems.forEach(function (other) {
        other.classList.remove('is-open');
        other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('is-open');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ---------------------------------------------------------------------
     Back to top
     ------------------------------------------------------------------- */
  var backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      backToTop.classList.toggle('is-visible', window.scrollY > 700);
    });
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  }

  /* ---------------------------------------------------------------------
     Footer year
     ------------------------------------------------------------------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

})();
