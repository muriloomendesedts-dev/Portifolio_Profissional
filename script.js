// ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// nav: sombra ao rolar
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 10);
});

// menu mobile
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// animação de entrada ao rolar
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => observer.observe(el));

// projetos em destaque
const projects = [
  {
    name: 'projeto-refrigerantes',
    title: 'Distribuidora de Refrigerantes',
    desc: 'Catálogo de produtos e sistema web para gestão de pedidos de uma distribuidora de bebidas.',
    tag: 'Indústria',
    lang: 'CSS / JS'
  },
  {
    name: 'devcafe',
    title: 'DevCafé',
    desc: 'Site institucional e cardápio digital para uma cafeteria, com navegação responsiva.',
    tag: 'Pequenos negócios',
    lang: 'CSS / JS'
  },
  {
    name: 'salao-portifolio',
    title: 'Salão de Beleza',
    desc: 'Site institucional para salão de beleza com apresentação de serviços e contato direto.',
    tag: 'Clínicas & Estética',
    lang: 'CSS / JS'
  },
  {
    name: 'loja',
    title: 'Loja Virtual',
    desc: 'Base de sistema de loja virtual, estruturada em Python para gestão de produtos.',
    tag: 'E-commerce',
    lang: 'Python'
  },
  {
    name: 'Projeto-2-tradutor',
    title: 'Tradutor Web',
    desc: 'Aplicação web para tradução de textos, com integração de API e interface simples.',
    tag: 'Ferramenta',
    lang: 'JavaScript'
  }
];

const projectsEl = document.getElementById('projects');
projectsEl.innerHTML = projects.map((p, i) => `
  <article class="project-card reveal" style="transition-delay:${i * 60}ms">
    <div class="project-card__top">
      <h3>${p.title}</h3>
      <span class="tag">${p.tag}</span>
    </div>
    <p>${p.desc}</p>
    <div class="project-card__footer">
      <span>${p.lang}</span>
      <a href="https://github.com/muriloomendesedts-dev/${p.name}" target="_blank" rel="noopener">Ver no GitHub →</a>
    </div>
  </article>
`).join('');

// re-observa os cards de projeto recém-criados
projectsEl.querySelectorAll('.reveal').forEach(el => observer.observe(el));
