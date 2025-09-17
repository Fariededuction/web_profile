// Basic interactions: smooth scroll, theme toggle, tabs, project filters, simple form handling, mobile menu

document.addEventListener('DOMContentLoaded', () => {


  // theme toggle (no persistence per your choice)
  themeToggle.addEventListener('click', () => {
    if (body.classList.contains('theme-dark')) {
      body.classList.remove('theme-dark');
      body.classList.add('theme-light');
      themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
      body.classList.remove('theme-light');
      body.classList.add('theme-dark');
      themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
  });

  // smooth scroll for nav links


  // active nav on scroll
  const sections = [...document.querySelectorAll('main section')];
  window.addEventListener('scroll', () => {
    const top = window.scrollY + 90;
    let cur = sections[0].id;
    for (const s of sections) {
      if (s.offsetTop <= top) cur = s.id;
    }
    document.querySelectorAll('.nav-link').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
  });

  // tabs (skills)
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.toggle('active', p.id === tab));
    });
  });

  // filters (projects)
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const f = btn.dataset.filter;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.project-card').forEach(card => {
        const t = card.dataset.type;
        card.style.display = (f === 'all' || t === f) ? '' : 'none';
      });
      // optional: scroll to projects
      document.getElementById('projects').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });



  // mobile nav toggle
  const mobileToggle = document.getElementById('mobileToggle');
  mobileToggle.addEventListener('click', toggleMobileNav);
  function toggleMobileNav() {
    const nav = document.querySelector('.nav');
    if (nav.style.display === 'flex') {
      nav.style.display = '';
      mobileToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    } else {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.position = 'absolute';
      nav.style.right = '20px';
      nav.style.top = '64px';
      nav.style.background = 'var(--card)';
      nav.style.padding = '12px';
      nav.style.borderRadius = '12px';
      nav.style.boxShadow = '0 10px 30px rgba(2,6,23,0.6)';
      mobileToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }
  }
  function closeMobileNav() {
    const nav = document.querySelector('.nav');
    if (window.innerWidth <= 720) {
      nav.style.display = '';
      mobileToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
  }

  // close mobile nav on resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 720) {
      document.querySelector('.nav').style.display = 'flex';
      document.querySelector('.nav').style.position = '';
      document.querySelector('.nav').style.right = '';
      document.querySelector('.nav').style.top = '';
      document.querySelector('.nav').style.padding = '';
      document.querySelector('.nav').style.borderRadius = '';
      document.querySelector('.nav').style.boxShadow = '';
    } else {
      closeMobileNav();
    }
  });
});


