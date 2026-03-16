/* ================================================
   NEXUS-3D THEME  ·  CORE JAVASCRIPT
   ================================================ */

(function () {
  'use strict';

  /* ── Sticky Header Scroll Effect ── */
  var header = document.getElementById('NexusHeader');
  if (header) {
    var lastScroll = 0;
    window.addEventListener('scroll', function () {
      var currentScroll = window.pageYOffset;
      if (currentScroll > 80) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
      lastScroll = currentScroll;
    }, { passive: true });
  }

  /* ── Mobile Menu Toggle ── */
  var menuToggle = document.querySelector('.nexus-header__mobile-toggle');
  var nav = document.querySelector('.nexus-header__nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      var expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !expanded);
      nav.classList.toggle('is-mobile-open');
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

})();
