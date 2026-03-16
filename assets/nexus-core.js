/* ================================================
   NEXUS-3D THEME  ·  CORE JAVASCRIPT
   Linen & Steel Design System
   ================================================ */

(function () {
  'use strict';

  /* ── Sticky Header Scroll Effect ── */
  var header = document.getElementById('NexusHeader');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 60) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }, { passive: true });
  }

  /* ── Mobile Menu Toggle ── */
  var menuToggle = document.querySelector('.nexus-header__mobile-toggle');
  var nav = document.querySelector('.nexus-header__nav');
  var mobileNav = document.getElementById('MobileNav');
  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      var expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !expanded);
      if (nav) nav.classList.toggle('is-mobile-open');
      if (mobileNav) mobileNav.setAttribute('aria-hidden', expanded);
    });
  }

  /* ── Intersection Observer: Animate on Scroll ── */
  var animateEls = document.querySelectorAll('[data-nexus-animate]');
  if (animateEls.length > 0 && 'IntersectionObserver' in window) {
    var animObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          animObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    animateEls.forEach(function (el) { animObserver.observe(el); });
  }

  /* ── Smooth scroll for anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── Material Lab: Interactive Material Switcher ── */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-material]');
    if (!btn) return;

    var lab = btn.closest('.nexus-material-lab');
    if (!lab) return;

    /* Toggle active state */
    lab.querySelectorAll('[data-material]').forEach(function (b) {
      b.classList.remove('is-active');
    });
    btn.classList.add('is-active');

    /* Show matching content panel */
    var material = btn.dataset.material;
    lab.querySelectorAll('[data-material-panel]').forEach(function (panel) {
      if (panel.dataset.materialPanel === material) {
        panel.classList.add('is-active');
      } else {
        panel.classList.remove('is-active');
      }
    });
  });

  /* ── FAQ Accordion ── */
  document.addEventListener('click', function (e) {
    var trigger = e.target.closest('.nexus-faq__question');
    if (!trigger) return;

    var item = trigger.closest('.nexus-faq__item');
    var answer = item.querySelector('.nexus-faq__answer');
    var isOpen = item.classList.contains('is-open');

    /* Close all siblings */
    var parent = item.parentElement;
    parent.querySelectorAll('.nexus-faq__item').forEach(function (sibling) {
      sibling.classList.remove('is-open');
      var sibAnswer = sibling.querySelector('.nexus-faq__answer');
      if (sibAnswer) sibAnswer.style.maxHeight = null;
      sibling.querySelector('.nexus-faq__question').setAttribute('aria-expanded', 'false');
    });

    /* Toggle this one */
    if (!isOpen) {
      item.classList.add('is-open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
      trigger.setAttribute('aria-expanded', 'true');
    }
  });

  /* ── Animated Counter ── */
  function animateCounters() {
    var counters = document.querySelectorAll('[data-counter-target]');
    if (!counters.length || !('IntersectionObserver' in window)) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var target = parseInt(el.dataset.counterTarget, 10) || 0;
        var current = 0;
        var step = Math.ceil(target / 120);
        (function tick() {
          current += step;
          if (current >= target) { el.textContent = target.toLocaleString(); return; }
          el.textContent = current.toLocaleString();
          requestAnimationFrame(tick);
        })();
        observer.unobserve(el);
      });
    }, { threshold: 0.3 });

    counters.forEach(function (c) { observer.observe(c); });
  }
  animateCounters();

  /* ── Masonry Filter ── */
  document.addEventListener('click', function (e) {
    var pill = e.target.closest('.nexus-masonry__filter-pill');
    if (!pill) return;

    var section = pill.closest('.nexus-masonry-section');
    if (!section) return;

    section.querySelectorAll('.nexus-masonry__filter-pill').forEach(function (p) {
      p.classList.remove('is-active');
      p.setAttribute('aria-selected', 'false');
    });
    pill.classList.add('is-active');
    pill.setAttribute('aria-selected', 'true');

    var filter = pill.dataset.filter;
    section.querySelectorAll('.nexus-masonry__card').forEach(function (card) {
      card.style.display = (filter === 'all' || card.dataset.tag === filter) ? '' : 'none';
    });
  });

})();
