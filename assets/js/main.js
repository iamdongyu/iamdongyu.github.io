(() => {
  const PROJECTS = [
    {
      img: 'assets/images/research1.jpg',
      titleKey: 'projects.item1.title',
      descKey: 'projects.item1.desc',
      tagsKey: 'projects.item1.tags',
    },
    {
      img: 'assets/images/research2.jpg',
      titleKey: 'projects.item2.title',
      descKey: 'projects.item2.desc',
      tagsKey: 'projects.item2.tags',
    },
    {
      img: 'assets/images/research3.jpg',
      titleKey: 'projects.item3.title',
      descKey: 'projects.item3.desc',
      tagsKey: 'projects.item3.tags',
    },
  ];

  const OPEN_SOURCE_ITEMS = [
    {  key: 'opensource.item1',
    img1: 'group-1.jpg',
    img2: 'group-2.jpg',
    linkCode: null,
    linkDoc: null
  },
  { 
    key: 'opensource.item2',
    img1: 'activity1-1.jpg',
    img2: 'activity1-2.jpg',
    linkCode: null,
    linkDoc: null
  },
  { 
    key: 'opensource.item3',
    img1: 'activity2-1.jpg',
    img2: 'activity2-2.jpg',
    linkCode: null,
    linkDoc: null
  },
  { 
    key: 'opensource.item4',
    img1: 'activity3-1.jpg',
    img2: 'activity3-2.jpg',
    linkCode: null,
    linkDoc: null },
  ];

const TIMELINE_EVENTS = [
  'timeline.event4',
  'timeline.event3',
  'timeline.event2',
  'timeline.event1'
];

const TIMELINE_IMAGES = {
  'timeline.event4': [
    'assets/images/work4-1.jpg',
    'assets/images/work4-2.jpg'
  ],
  'timeline.event3': [
    'assets/images/work3-1.jpg',
    'assets/images/work3-2.jpg'
  ],
  'timeline.event2': [
    'assets/images/work2-1.jpg',
    'assets/images/work2-2.jpg'
  ],
  'timeline.event1': [
    'assets/images/work1-1.jpg',
    'assets/images/work1-2.jpg'
  ]
};

  const TECH_STACK = [
  {
    category: 'skills.embedded',
    items: [
      { key: 'skills.items.monitor', icon: 'fas fa-user-tie' },
      { key: 'skills.items.gpa', icon: 'fas fa-chart-line' },
      { key: 'skills.items.rank', icon: 'fas fa-ranking-star' },
      { key: 'skills.items.scholarship', icon: 'fas fa-award' },
    ],
  },
  {
    category: 'skills.robotics',
    items: [
      { key: 'skills.items.provinceCenter', icon: 'fas fa-building-columns' },
      { key: 'skills.items.viceMinisterFilm', icon: 'fas fa-users' },
      { key: 'skills.items.viceMinisterVolunteer', icon: 'fas fa-hand-holding-heart' },
      { key: 'skills.items.techStation', icon: 'fas fa-laptop' },
    ],
  },
  {
    category: 'skills.software',
    items: [
      { key: 'skills.items.jiangsuAnimation', icon: 'fas fa-trophy' },
      { key: 'skills.items.yanchengCreative', icon: 'fas fa-medal' },
    ],
  },
  {
    category: 'skills.hardware',
    items: [
      { key: 'skills.items.adNational', icon: 'fas fa-crown' },
      { key: 'skills.items.greatHall', icon: 'fas fa-landmark' },
      { key: 'skills.items.lanqiao', icon: 'fas fa-trophy' },
      { key: 'skills.items.ncda', icon: 'fas fa-medal' },
      { key: 'skills.items.academyAd', icon: 'fas fa-award' },
      { key: 'skills.items.videoCompetition', icon: 'fas fa-star' },
    ],
  },
];

 const CONTACT_LINKS = [
  {
    icon: 'fas fa-envelope',
    key: 'contact.email',
    link: 'mailto:yudong196@163.com'
  },
  {
    icon: 'fab fa-github',
    key: 'contact.github',
    link: 'https://github.com/iamdongyu'
  },
  {
    icon: 'fas fa-file-download',
    key: 'contact.resume',
    link: 'assets/files/yudresume .pdf'
  }
];

  function qs(selector, root = document) {
    return root.querySelector(selector);
  }

  function qsa(selector, root = document) {
    return Array.from(root.querySelectorAll(selector));
  }

  function clear(el) {
    if (!el) return;
    el.innerHTML = '';
  }

  function t(key) {
    return window.i18n?.get ? window.i18n.get(key) : key;
  }

  function renderSpanTags(tags, className) {
    if (!Array.isArray(tags)) return '';
    return tags.map((tag) => `<span class="${className}">${tag}</span>`).join('');
  }

  function renderProjectTags(tags) {
    if (!Array.isArray(tags)) return '';
    return `<div class="project-tags">${renderSpanTags(tags, 'project-tag')}</div>`;
  }

  function initThemeToggle() {
    const toggleBtn = qs('.theme-toggle');
    const htmlEl = document.documentElement;
    if (!toggleBtn) return;

    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlEl.setAttribute('data-theme', savedTheme);

    toggleBtn.addEventListener('click', () => {
      const currentTheme = htmlEl.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';

      htmlEl.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      console.log(`[Theme] Switched to ${newTheme}`);
    });
  }

  function initLangToggle() {
    const toggleBtn = qs('.lang-toggle');
    if (!toggleBtn) return;

    toggleBtn.addEventListener('click', () => {
      const current = window.i18n.currentLang();
      const next = current === 'en' ? 'zh' : 'en';
      console.log(`[Lang] Switching to ${next}...`);
      window.i18n.changeLang(next);
    });
  }

  function initProjects() {
    const grid = qs('.projects-grid');
    if (!grid) return;
    clear(grid);

    PROJECTS.forEach((project) => {
      const tagsHtml = renderProjectTags(t(project.tagsKey));

      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <div class="project-thumbnail-wrapper">
          <img src="${project.img}" alt="${t('projects.imgAlt')}" class="project-thumbnail">
        </div>
        <div class="project-info">
          <h3>${t(project.titleKey)}</h3>
          <p class="copyable-text">${t(project.descKey)}</p>
          ${tagsHtml}
        </div>
      `;
      grid.appendChild(card);
    });
  }

  function initOpenSource() {
    const grid = qs('.opensource-grid');
    if (!grid) return;
    clear(grid);

    OPEN_SOURCE_ITEMS.forEach((item) => {
      const tags = t(`${item.key}.tags`) || [];
      const tagsHtml = renderSpanTags(tags, 'os-tag');

      let buttonsHtml = '';
      if (item.linkCode) {
        buttonsHtml += `<a href="${item.linkCode}" target="_blank" rel="noopener noreferrer" class="os-btn"><i class="fab fa-github"></i> ${t('opensource.btnCode')}</a>`;
      }
      if (item.linkDoc) {
        buttonsHtml += `<a href="${item.linkDoc}" target="_blank" rel="noopener noreferrer" class="os-btn"><i class="fas fa-book"></i> ${t('opensource.btnDoc')}</a>`;
      }

      const card = document.createElement('div');
      card.className = 'os-card';
      card.innerHTML = `
        <div class="os-header">
          <div class="os-title">${t(`${item.key}.title`)}</div>
          <i class="fas fa-code-branch" style="color:var(--primary); opacity:0.5;"></i>
        </div>
         
        <div class="practice-img-wrapper">
             <img src="assets/images/${item.img1}" class="practice-img">
             <img src="assets/images/${item.img2}" class="practice-img">
        </div>
        <div class="os-tags">${tagsHtml}</div>
        <div class="os-actions">${buttonsHtml}</div>
      `;
      grid.appendChild(card);
    });
  }

  function initTimeline() {
    const container = qs('.timeline-container');
    if (!container) return;
    clear(container);

    TIMELINE_EVENTS.forEach((key) => {
      const item = document.createElement('div');
      item.className = 'timeline-item';
     const images = TIMELINE_IMAGES[key] || [];

item.innerHTML = `
  <div class="timeline-dot"></div>

  <div class="timeline-inner">

    <div class="timeline-left">
      <span class="timeline-date">${t(`${key}.date`)}</span>
      <div class="timeline-content">
        <h3>${t(`${key}.title`)}</h3>
        <p>${t(`${key}.desc`)}</p>
${t(`${key}.linkText`) !== `${key}.linkText` ? `
  <a href="${t(`${key}.linkUrl`)}" target="_blank" class="timeline-link">
    ${t(`${key}.linkText`)}
  </a>
` : ''}
      </div>
    </div>

    <div class="timeline-right">
      ${images.map(img => `
  <img src="${img}" alt="" class="preview-img">
`).join('')}
    </div>

  </div>
`;
      container.appendChild(item);
    });
  }

  function initTechStack() {
    const container = qs('.skills-wrapper');
    if (!container) return;
    clear(container);

    TECH_STACK.forEach((group) => {
      const itemsHtml = group.items
        .map((s) => `<div class="skill-badge"><i class="${s.icon}"></i> ${t(s.key)}</div>`)
        .join('');

      const col = document.createElement('div');
      col.className = 'skill-category';
      col.innerHTML = `<h3>${t(group.category)}</h3><div class="skill-list">${itemsHtml}</div>`;
      container.appendChild(col);
    });
  }

  function initContactLinks() {
    const container = qs('.contact-links');
    if (!container) return;
    clear(container);

    CONTACT_LINKS.forEach((contact) => {
      const item = document.createElement('div');
      item.className = 'contact-item';
      item.innerHTML = `<a href="${contact.link}" target="_blank" rel="noopener noreferrer"><i class="${contact.icon}"></i><p>${t(contact.key)}</p></a>`;
      container.appendChild(item);
    });
  }

  function initSmoothScroll() {
    qsa('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const href = this.getAttribute('href');
        if (!href || href === '#') return;

        let target;
        try {
          target = qs(href);
        } catch {
          return;
        }

        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth',
          });
        }
      });
    });
  }

function initImagePreview() {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.querySelector(".img-close");

  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("preview-img")) {
      modal.style.display = "flex";
      modalImg.src = e.target.src;
    }
  });

  if (closeBtn) {
    closeBtn.onclick = function () {
      modal.style.display = "none";
    };
  }

  if (modal) {
    modal.onclick = function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    };
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      modal.style.display = "none";
    }
  });
}

function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  elements.forEach(el => observer.observe(el));
}

function initBreathingScroll() {
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    sections.forEach(section => {
      const speed = 0.01; 
      section.style.transform =
        `translateY(${scrollY * speed * -1}px)`;
    });
  });
}

function initPageSnapScroll() {
  const sections = Array.from(document.querySelectorAll("section"));
  let isScrolling = false;

  function getCurrentSectionIndex() {
    const scrollY = window.scrollY;
    return sections.findIndex((section, index) => {
      const top = section.offsetTop;
      const next = sections[index + 1];
      const nextTop = next ? next.offsetTop : Infinity;
      return scrollY >= top && scrollY < nextTop;
    });
  }

  function scrollToSection(index) {
    if (index < 0 || index >= sections.length) return;
    isScrolling = true;

    window.scrollTo({
  top: sections[index].offsetTop - 70,
  behavior: "smooth"
});
  

    setTimeout(() => {
      isScrolling = false;
    }, 700);
  }

  window.addEventListener("wheel", (e) => {
    if (isScrolling) return;

    const currentIndex = getCurrentSectionIndex();

    if (e.deltaY > 0) {
      scrollToSection(currentIndex + 1);
    } else {
      scrollToSection(currentIndex - 1);
    }
  });
}

  document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initLangToggle();
    initSmoothScroll();
    initImagePreview();
  });

  window.addEventListener('i18nLoaded', () => {
    console.log('[main] i18n loaded, rendering content...');
    initProjects();
    initOpenSource();
    initTimeline();
    initTechStack();
    initContactLinks();
    initScrollReveal();
initPageSnapScroll();
  });
})();

