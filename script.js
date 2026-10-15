/* ==========================================================================
   Danel Schwartz Portfolio - Interactive UI & Accessibility Controller
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation Toggle
  const navToggle = document.querySelector('.mobile-nav-toggle');
  const primaryNav = document.getElementById('primary-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isExpanded));
      primaryNav.classList.toggle('is-open', !isExpanded);
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        primaryNav.classList.remove('is-open');
      });
    });
  }

  // 2. Project Category Filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const selectedCategory = btn.getAttribute('data-filter');

        filterButtons.forEach((b) => {
          const isCurrent = b === btn;
          b.classList.toggle('active', isCurrent);
          b.setAttribute('aria-pressed', String(isCurrent));
        });

        projectCards.forEach((card) => {
          const cardCategory = card.getAttribute('data-category');
          if (selectedCategory === 'all' || cardCategory === selectedCategory) {
            card.removeAttribute('hidden');
          } else {
            card.setAttribute('hidden', '');
          }
        });
      });
    });
  }

  // 3. Copy Email Button with Accessible Feedback
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const emailElement = document.getElementById('email-address');

  if (copyEmailBtn && emailElement && navigator.clipboard) {
    copyEmailBtn.addEventListener('click', () => {
      const emailText = emailElement.textContent.trim();
      navigator.clipboard.writeText(emailText).then(() => {
        const originalText = copyEmailBtn.textContent;
        copyEmailBtn.textContent = 'Copied!';
        setTimeout(() => {
          copyEmailBtn.textContent = originalText;
        }, 2000);
      });
    });
  }

  // 4. Active Section Highlighting via IntersectionObserver
  const sections = document.querySelectorAll('main section[id]');
  if ('IntersectionObserver' in window && sections.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const activeId = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
              link.classList.toggle('active', link.getAttribute('href') === `#${activeId}`);
            });
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );

    sections.forEach((sec) => observer.observe(sec));
  }
});
