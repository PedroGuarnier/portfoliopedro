/* ==========================================
   PEDRO GUARNIER — PORTFOLIO JS
   ========================================== */

// ---- Traduções / Translations ----
const translations = {
  pt: {
    'nav.about': 'Sobre',
    'nav.experience': 'Experiência',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',
    'hero.label': 'Rio de Janeiro · Freelas & colaborações',
    'hero.role': 'Estagiário de TI & Dev · Ciência da Computação',
    'hero.bio': 'Desenvolvedor com background em Marketing — combino visão de produto com capacidade técnica. No <strong>Escritório de Advocacia Zveiter</strong> construo dashboards, automações e soluções de IA aplicada ao direito desde 2024. Formado em Marketing pela Estácio, finalizando CC nas Américas.',
    'hero.cv': 'Baixar CV',
    'hero.certs': 'Certificados',
    'hero.contact': 'Contato',
    'hero.badge': 'Dev & TI',
    'hero.stat1': 'anos em TI',
    'hero.stat2': 'usuários suportados',
    'hero.stat3': 'projetos entregues',
    'exp.tag': 'Trajetória',
    'exp.title': 'Experiência',
    'exp.period1': 'Jan 2024 — Presente',
    'exp.badge': 'Atual',
    'exp.role1': 'Estagiário de TI & Desenvolvimento',
    'exp.company1': '<a href="https://zveiter.com.br" target="_blank">Escritório de Advocacia Zveiter</a> · Rio de Janeiro',
    'exp.li1_1': 'Suporte técnico para ~80 usuários: Active Directory, Microsoft 365, hardware e redes',
    'exp.li1_2': 'Desenvolvimento do <strong>site institucional</strong> responsivo (HTML/CSS/JS)',
    'exp.li1_3': 'Criação de <strong>dashboard web</strong> de Custas Diárias com Google Sheets + SheetDB como backend',
    'exp.li1_4': 'Implementação de <strong>guia interativo de IA</strong> para 13 áreas de prática jurídica (Gemini, Claude, NotebookLM, JusBrasil)',
    'exp.li1_5': 'Desenvolvimento de <strong>sistema de monitoramento judicial</strong> com FastAPI, WebSocket e dashboard Next.js',
    'exp.li1_6': 'Pesquisa e avaliação de plataformas de IA jurídica (Turivius, JusBrasil IA)',
    'exp.period2': '2020 — 2024',
    'exp.role2': 'Projetos Freelance & Acadêmicos',
    'exp.company2': 'Diversos · Rio de Janeiro',
    'exp.li2_1': 'Projetos de desenvolvimento web e automação durante graduação em Marketing (Estácio de Sá)',
    'exp.li2_2': 'Simulador de dividendos com React 18 e Recharts para projeção de carteiras de FIIs e ações',
    'exp.tag_data': 'Análise de Dados',
    'proj.tag': 'Portfólio',
    'proj.title': 'Projetos',
    'proj.label1': 'Destaque · IA Jurídica',
    'proj.h3_1': 'Sistema de Monitoramento Judicial com IA',
    'proj.p1': 'Plataforma full-stack para acompanhamento de processos judiciais em tempo real. Backend FastAPI com agentes de IA, WebSocket para updates ao vivo e dashboard Next.js 14 com TypeScript, Tailwind e Recharts. Desenvolvido para o Escritório de Advocacia Zveiter.',
    'proj.label2': 'Dashboard · FinTech Jurídica',
    'proj.h3_2': 'Dashboard de Custas Diárias',
    'proj.p2': 'App web com Google Sheets como backend (via SheetDB) para controle de custas processuais. Inclui saldos de clientes, exportação PDF, observações e responsividade mobile completa.',
    'proj.label3': 'Site · Institucional',
    'proj.h3_3': 'Site Institucional — Zveiter Advocacia',
    'proj.p3': 'Site Art Déco premium com design em preto e dourado, tipografia Cormorant Garamond, animações CSS puras e SEO estruturado. Páginas de equipe, casos e recuperação judicial (GAS Consultoria).',
    'proj.label4': 'Guia Interativo · IA',
    'proj.h3_4': 'Guia de IA para Escritórios de Advocacia',
    'proj.p4': 'Single-page app com design Art Déco para capacitação de advogados no uso de IA. Cobre Google Gemini, NotebookLM, Claude e JusBrasil com prompts prontos, workflows multi-ferramenta e matriz filtrável por área de prática.',
    'proj.label5': 'Simulador · Finanças',
    'proj.h3_5': 'Simulador de Dividendos',
    'proj.p5': 'Simulador interativo de carteira de investimentos brasileiros com reinvestimento automático de dividendos. Projeta crescimento patrimonial de 1 a 10 anos com FIIs e ações pagadoras de dividendos, gráficos de evolução e renda passiva estimada.',
    'btn.code': 'Código',
    'btn.visit': 'Ver Site',
    'skills.tag': 'Competências',
    'skills.title': 'Habilidades',
    'skills.label1': '<i class="fa-solid fa-code"></i> Linguagens & Web',
    'skills.label2': '<i class="fa-solid fa-server"></i> Infraestrutura & TI',
    'skills.label3': '<i class="fa-solid fa-robot"></i> IA & Ferramentas',
    'skills.label4': '<i class="fa-solid fa-graduation-cap"></i> Formação',
    'skills.label5_text': 'Certificados',
    'skills.certBtn': 'ver todos',
    'skills.ti1': 'Suporte Técnico',
    'skills.ti2': 'Gestão de Ativos',
    'skills.edu1_title': 'Bacharelado em Ciência da Computação',
    'skills.edu2_title': 'Bacharelado em Marketing',
    'cert.p1': 'ChatGPT for Devs — DIO',
    'cert.p2': 'Lógica de Programação — DIO',
    'cert.p3': 'Prompts Inteligentes — Microsoft',
    'cert.p4': 'Full Stack Python — EBAC',
    'cert.p5': 'Python p/ Análise de Dados — EBAC',
    'cert.p6': 'Inteligência Artificial — EBAC',
    'cert.in_progress_label': 'Cursando',
    'contact.tag': 'Vamos conversar',
    'contact.title': 'Contato',
    'contact.text': 'Freelas e colaborações em projetos de tecnologia — especialmente na interseção entre <strong>IA, desenvolvimento web e automação</strong>.',
    'contact.location': 'Rio de Janeiro, Brasil',
    'contact.role': 'Estagiário TI & Dev · Zveiter',
    'contact.available': 'Freelas & colaborações em projetos',
    'contact.lang': 'Português · Inglês',
    'footer.text': '© 2025 Pedro Guarnier — Desenvolvido com HTML, CSS & JS puro',
    'modal.title': '<i class="fa-solid fa-certificate"></i> Certificados',
    'modal.c1_name': 'ChatGPT for Devs',
    'modal.c2_name': 'Lógica de Programação',
    'modal.c3_name': 'Desenvolvimento Web Moderno',
    'modal.c4_name': 'Git e Controle de Versão',
    'modal.c5_name': 'Prompts Inteligentes',
    'modal.c6_name': 'Python para Análise de Dados',
    'modal.c8_name': 'Python para Análise de Dados',
    'modal.c9_name': 'Inteligência Artificial',
  },
  en: {
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'hero.label': 'Rio de Janeiro · Freelance & collaborations',
    'hero.role': 'IT Intern & Dev · Computer Science',
    'hero.bio': 'Developer with a Marketing background — I combine product vision with technical capability. At <strong>Zveiter Law Firm</strong> I build dashboards, automations and AI solutions applied to law since 2024. Marketing graduate from Estácio, finishing CS at Américas.',
    'hero.cv': 'Download CV',
    'hero.certs': 'Certificates',
    'hero.contact': 'Contact',
    'hero.badge': 'Dev & IT',
    'hero.stat1': 'years in IT',
    'hero.stat2': 'users supported',
    'hero.stat3': 'projects delivered',
    'exp.tag': 'Background',
    'exp.title': 'Experience',
    'exp.period1': 'Jan 2024 — Present',
    'exp.badge': 'Current',
    'exp.role1': 'IT & Development Intern',
    'exp.company1': '<a href="https://zveiter.com.br" target="_blank">Zveiter Law Firm</a> · Rio de Janeiro',
    'exp.li1_1': 'Technical support for ~80 users: Active Directory, Microsoft 365, hardware and networks',
    'exp.li1_2': 'Development of responsive <strong>institutional website</strong> (HTML/CSS/JS)',
    'exp.li1_3': 'Creation of <strong>Daily Costs web dashboard</strong> using Google Sheets + SheetDB as backend',
    'exp.li1_4': 'Implementation of <strong>interactive AI guide</strong> for 13 legal practice areas (Gemini, Claude, NotebookLM, JusBrasil)',
    'exp.li1_5': 'Development of <strong>judicial monitoring system</strong> with FastAPI, WebSocket and Next.js dashboard',
    'exp.li1_6': 'Research and evaluation of legal AI platforms (Turivius, JusBrasil AI)',
    'exp.period2': '2020 — 2024',
    'exp.role2': 'Freelance & Academic Projects',
    'exp.company2': 'Various · Rio de Janeiro',
    'exp.li2_1': 'Web development and automation projects during Marketing degree (Estácio de Sá)',
    'exp.li2_2': 'Dividend simulator with React 18 and Recharts for Brazilian investment portfolio projection (REITs and dividend stocks)',
    'exp.tag_data': 'Data Analysis',
    'proj.tag': 'Portfolio',
    'proj.title': 'Projects',
    'proj.label1': 'Featured · Legal AI',
    'proj.h3_1': 'Judicial Monitoring System with AI',
    'proj.p1': 'Full-stack platform for real-time judicial process tracking. FastAPI backend with AI agents, WebSocket for live updates and Next.js 14 dashboard with TypeScript, Tailwind and Recharts. Developed for Zveiter Law Firm.',
    'proj.label2': 'Dashboard · Legal FinTech',
    'proj.h3_2': 'Daily Court Fees Dashboard',
    'proj.p2': 'Web app using Google Sheets as backend (via SheetDB) to track procedural court fees. Includes client balances, PDF export, notes and full mobile responsiveness.',
    'proj.label3': 'Website · Institutional',
    'proj.h3_3': 'Institutional Website — Zveiter Law Firm',
    'proj.p3': 'Premium Art Déco website in black and gold, Cormorant Garamond typography, pure CSS animations and structured SEO. Pages for team, cases and corporate restructuring (GAS Consultoria).',
    'proj.label4': 'Interactive Guide · AI',
    'proj.h3_4': 'AI Guide for Law Firms',
    'proj.p4': 'Single-page app with Art Déco design for training lawyers in AI usage. Covers Google Gemini, NotebookLM, Claude and JusBrasil with ready-made prompts, multi-tool workflows and filterable matrix by practice area.',
    'proj.label5': 'Simulator · Finance',
    'proj.h3_5': 'Dividend Simulator',
    'proj.p5': 'Interactive Brazilian investment portfolio simulator with automatic dividend reinvestment. Projects wealth growth from 1 to 10 years with REITs and dividend-paying stocks, growth charts and estimated passive income.',
    'btn.code': 'Code',
    'btn.visit': 'Visit Site',
    'skills.tag': 'Competencies',
    'skills.title': 'Skills',
    'skills.label1': '<i class="fa-solid fa-code"></i> Languages & Web',
    'skills.label2': '<i class="fa-solid fa-server"></i> Infrastructure & IT',
    'skills.label3': '<i class="fa-solid fa-robot"></i> AI & Tools',
    'skills.label4': '<i class="fa-solid fa-graduation-cap"></i> Education',
    'skills.label5_text': 'Certificates',
    'skills.certBtn': 'see all',
    'skills.ti1': 'Technical Support',
    'skills.ti2': 'Asset Management',
    'skills.edu1_title': "Bachelor's in Computer Science",
    'skills.edu2_title': "Bachelor's in Marketing",
    'cert.p1': 'ChatGPT for Devs — DIO',
    'cert.p2': 'Programming Logic — DIO',
    'cert.p3': 'Smart Prompts — Microsoft',
    'cert.p4': 'Full Stack Python — EBAC',
    'cert.p5': 'Python for Data Analysis — EBAC',
    'cert.p6': 'Artificial Intelligence — EBAC',
    'cert.in_progress_label': 'In Progress',
    'contact.tag': "Let's talk",
    'contact.title': 'Contact',
    'contact.text': 'Freelance work and collaborations on tech projects — especially at the intersection of <strong>AI, web development and automation</strong>.',
    'contact.location': 'Rio de Janeiro, Brazil',
    'contact.role': 'IT Intern & Dev · Zveiter',
    'contact.available': 'Freelance & project collaborations',
    'contact.lang': 'Portuguese · English',
    'footer.text': '© 2025 Pedro Guarnier — Built with pure HTML, CSS & JS',
    'modal.title': '<i class="fa-solid fa-certificate"></i> Certificates',
    'modal.c1_name': 'ChatGPT for Devs',
    'modal.c2_name': 'Programming Logic',
    'modal.c3_name': 'Modern Web Development',
    'modal.c4_name': 'Git & Version Control',
    'modal.c5_name': 'Smart Prompts',
    'modal.c6_name': 'Python for Data Analysis',
    'modal.c8_name': 'Python for Data Analysis',
    'modal.c9_name': 'Artificial Intelligence',
  }
};

let currentLang = 'pt';

function applyLang(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
}

const langBtn = document.getElementById('langBtn');
langBtn.addEventListener('click', () => {
  currentLang = currentLang === 'pt' ? 'en' : 'pt';
  langBtn.textContent = currentLang === 'pt' ? 'EN' : 'PT';
  langBtn.title = currentLang === 'pt' ? 'Switch to English' : 'Mudar para Português';
  applyLang(currentLang);
});

// ---- Cursor personalizado ----
const cursor = document.getElementById('cursor');
const cursorTrail = document.getElementById('cursorTrail');

if (window.matchMedia('(pointer: fine)').matches) {
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursorTrail.style.left = e.clientX + 'px';
    cursorTrail.style.top = e.clientY + 'px';
  });

  document.querySelectorAll('a, button, .project-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.style.transform = 'translate(-50%,-50%) scale(2)');
    el.addEventListener('mouseleave', () => cursor.style.transform = 'translate(-50%,-50%) scale(1)');
  });
} else {
  cursor.style.display = 'none';
  cursorTrail.style.display = 'none';
}

// ---- Header scroll ----
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
  updateActiveNav();
});

// ---- Active nav link ----
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach(l => {
    l.classList.toggle('active', l.getAttribute('href') === `#${current}`);
  });
}

// ---- Hamburger ----
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  nav.classList.toggle('open');
});

nav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
  });
});

// ---- Reveal on scroll ----
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

// Wrap all reveal elements in their parent section
document.querySelectorAll('section, .hero').forEach(section => {
  observer.observe(section);
  section.querySelectorAll('.reveal-up, .reveal-right').forEach(el => {
    // start animation when parent section is visible
  });
});

// Alternative: observe each reveal element directly
const revealEls = document.querySelectorAll('.reveal-up, .reveal-right');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => revealObs.observe(el));

// ---- Skill bar animation ----
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.bar-fill').forEach(bar => {
        bar.classList.add('animated');
      });
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('#habilidades').forEach(s => barObserver.observe(s));

// ---- Modal de Certificados ----
const modal = document.getElementById('certModal');
const certBtns = [document.getElementById('certBtn'), document.getElementById('certBtn2')];
const modalClose = document.getElementById('modalClose');

function openModal() { modal.classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeModal() { modal.classList.remove('open'); document.body.style.overflow = ''; }

certBtns.forEach(btn => { if (btn) btn.addEventListener('click', openModal); });
modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ---- Smooth scroll offset for fixed header ----
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = target.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  });
});

// Hero section starts visible
document.querySelector('.hero').querySelectorAll('.reveal-up, .reveal-right').forEach(el => {
  el.style.animationPlayState = 'running';
});
