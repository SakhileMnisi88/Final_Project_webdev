// JAVASCRIPT - MODULAR ORGANIZED

// App Configuration
const CONFIG = {
  animationSpeed: 300,
  scrollOffset: 100,
  emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
};

// DOM Elements Cache
const DOM = {
  header: document.getElementById('header'),
  menuToggle: document.getElementById('menu-toggle'),
  navMenu: document.getElementById('nav-menu'),
  navLinks: document.querySelectorAll('.nav-link'),
  pages: document.querySelectorAll('.page'),
  fadeElements: document.querySelectorAll('.fade-in'),
  contactForm: document.getElementById('contact-form'),
  submitBtn: document.getElementById('submit-btn'),
  btnText: document.getElementById('btn-text'),
  btnLoading: document.getElementById('btn-loading'),
  formSuccess: document.getElementById('form-success')
};

// NAVIGATION FUNCTIONALITY
class Navigation {
  constructor() {
    this.currentPage = 'home';
    this.init();
  }
  init() {
    this.bindEvents();
    this.handleScrollHeader();
    this.observeElements();
  }
  bindEvents() {
    // Mobile menu toggle
    DOM.menuToggle.addEventListener('click', () => this.toggleMobileMenu());
    // Navigation links click
    DOM.navLinks.forEach(link => link.addEventListener('click', e => this.handleNavClick(e)));
    // Smooth scroll etc. Additional handlers
    window.addEventListener('scroll', () => this.handleScroll());
    window.addEventListener('resize', () => this.handleResize());
  }
  toggleMobileMenu() {
    DOM.menuToggle.classList.toggle('active');
    DOM.navMenu.classList.toggle('active');
  }
  handleNavClick(e) {
    e.preventDefault();
    const targetPage = e.target.getAttribute('data-page');
    if (targetPage && targetPage !== this.currentPage) {
      this.navigateToPage(targetPage);
      this.closeMobileMenu();
    }
  }
  navigateToPage(pageName) {
    DOM.pages.forEach(page => page.classList.remove('active'));
    DOM.navLinks.forEach(link => link.classList.remove('active'));
    const targetPage = document.getElementById(pageName);
    const targetLink = document.querySelector(`[data-page="${pageName}"]`);
    if (targetPage) targetPage.classList.add('active');
    if (targetLink) targetLink.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.currentPage = pageName;
    this.observeElements();
  }
  closeMobileMenu() {
    DOM.menuToggle.classList.remove('active');
    DOM.navMenu.classList.remove('active');
  }
  handleScroll() {
    const scrollY = window.scrollY;
    if (scrollY > 50) DOM.header.classList.add('scrolled');
    else DOM.header.classList.remove('scrolled');
  }
  handleResize() {
    if (window.innerWidth > 768) this.closeMobileMenu();
  }
  handleScrollHeader() {
    this.handleScroll();
  }
  observeElements() {
    // Intersection Observer logic for fade-in animations
  }
}

// FORM HANDLING
class FormHandler {
  constructor() {
    this.form = DOM.contactForm;
    this.fields = {
      name: document.getElementById('name'),
      email: document.getElementById('email'),
      subject: document.getElementById('subject'),
      message: document.getElementById('message')
    };
    if (this.form) this.bindEvents();
  }
  bindEvents() {
    this.form.addEventListener('submit', e => this.handleSubmit(e));
    // Real-time validation and other handlers...
  }
  handleSubmit(e) {
    e.preventDefault();
    // Validate form, submit, show success or errors
  }
}

// Additional utility classes, handlers, and app initialization
class App {
  constructor() {
    this.navigation = null;
    this.formHandler = null;
    this.init();
  }
  init() {
    document.addEventListener('DOMContentLoaded', () => this.start());
  }
  start() {
    this.navigation = new Navigation();
    this.formHandler = new FormHandler();
  }
}

// Start the app
const app = new App();
