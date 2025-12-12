/**
 * GoFixAfrica - Main Application JavaScript
 * Shared functionality across all pages
 * Version: 1.0.0
 */

(function() {
  'use strict';

  // ============================================
  // CONSTANTS & CONFIGURATION
  // ============================================

  const CONFIG = {
    whatsappNumber: '254720123456',
    defaultCity: 'nairobi',
    animationDuration: 300,
    debounceDelay: 250,
  };

  const CITIES = {
    nairobi: { name: 'Nairobi', country: 'Kenya', currency: 'KES', code: '+254', mechanics: 347, vendors: 89 },
    mombasa: { name: 'Mombasa', country: 'Kenya', currency: 'KES', code: '+254', mechanics: 156, vendors: 42 },
    lagos: { name: 'Lagos', country: 'Nigeria', currency: 'NGN', code: '+234', mechanics: 523, vendors: 167 },
    johannesburg: { name: 'Johannesburg', country: 'South Africa', currency: 'ZAR', code: '+27', mechanics: 412, vendors: 134 },
    kigali: { name: 'Kigali', country: 'Rwanda', currency: 'RWF', code: '+250', mechanics: 89, vendors: 28 },
    kampala: { name: 'Kampala', country: 'Uganda', currency: 'UGX', code: '+256', mechanics: 134, vendors: 45 },
    dar: { name: 'Dar es Salaam', country: 'Tanzania', currency: 'TZS', code: '+255', mechanics: 178, vendors: 56 },
    accra: { name: 'Accra', country: 'Ghana', currency: 'GHS', code: '+233', mechanics: 201, vendors: 67 },
  };

  const SERVICES = [
    { id: 'general', name: 'General Service', icon: '🔧', price: 'From KES 8,000' },
    { id: 'brakes', name: 'Brakes & Tyres', icon: '🛞', price: 'From KES 6,500' },
    { id: 'battery', name: 'Battery', icon: '🔋', price: 'From KES 4,000' },
    { id: 'electrical', name: 'Electrical', icon: '⚡', price: 'From KES 5,000' },
    { id: 'diagnostics', name: 'Diagnostics', icon: '🔍', price: 'From KES 2,500' },
    { id: 'ac', name: 'AC & Cooling', icon: '❄️', price: 'From KES 7,000' },
    { id: 'engine', name: 'Engine & Gearbox', icon: '⚙️', price: 'Quote on inspection' },
    { id: 'ecu', name: 'ECU Programming', icon: '💻', price: 'From KES 15,000' },
  ];

  // ============================================
  // UTILITY FUNCTIONS
  // ============================================

  const Utils = {
    // Debounce function
    debounce(func, wait = CONFIG.debounceDelay) {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    },

    // Throttle function
    throttle(func, limit) {
      let inThrottle;
      return function executedFunction(...args) {
        if (!inThrottle) {
          func(...args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      };
    },

    // Format phone number
    formatPhone(phone, countryCode = '+254') {
      const cleaned = phone.replace(/\D/g, '');
      if (cleaned.length === 9) {
        return `${countryCode}${cleaned}`;
      }
      return phone;
    },

    // Format currency
    formatCurrency(amount, currency = 'KES') {
      const formats = {
        KES: { locale: 'en-KE', options: { style: 'currency', currency: 'KES', minimumFractionDigits: 0 } },
        NGN: { locale: 'en-NG', options: { style: 'currency', currency: 'NGN', minimumFractionDigits: 0 } },
        ZAR: { locale: 'en-ZA', options: { style: 'currency', currency: 'ZAR', minimumFractionDigits: 0 } },
      };
      const format = formats[currency] || formats.KES;
      return new Intl.NumberFormat(format.locale, format.options).format(amount);
    },

    // Get query parameter
    getQueryParam(name) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(name);
    },

    // Set query parameter
    setQueryParam(name, value) {
      const url = new URL(window.location);
      url.searchParams.set(name, value);
      window.history.pushState({}, '', url);
    },

    // Local storage helpers
    storage: {
      get(key, defaultValue = null) {
        try {
          const item = localStorage.getItem(`gfa_${key}`);
          return item ? JSON.parse(item) : defaultValue;
        } catch (e) {
          return defaultValue;
        }
      },
      set(key, value) {
        try {
          localStorage.setItem(`gfa_${key}`, JSON.stringify(value));
        } catch (e) {
          console.warn('LocalStorage not available');
        }
      },
      remove(key) {
        localStorage.removeItem(`gfa_${key}`);
      }
    },

    // Generate WhatsApp URL
    whatsappUrl(message, phone = CONFIG.whatsappNumber) {
      const encodedMessage = encodeURIComponent(message);
      return `https://wa.me/${phone}?text=${encodedMessage}`;
    },

    // Scroll to element
    scrollTo(element, offset = 80) {
      const el = typeof element === 'string' ? document.querySelector(element) : element;
      if (el) {
        const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    },

    // Check if element is in viewport
    isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    },
  };

  // ============================================
  // HEADER COMPONENT
  // ============================================

  const Header = {
    init() {
      this.header = document.querySelector('.header');
      this.mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
      this.mobileMenu = document.querySelector('.mobile-menu');

      if (this.header) {
        this.handleScroll();
        window.addEventListener('scroll', Utils.throttle(() => this.handleScroll(), 100));
      }

      if (this.mobileMenuToggle && this.mobileMenu) {
        this.mobileMenuToggle.addEventListener('click', () => this.toggleMobileMenu());
      }
    },

    handleScroll() {
      if (window.scrollY > 10) {
        this.header.classList.add('scrolled');
      } else {
        this.header.classList.remove('scrolled');
      }
    },

    toggleMobileMenu() {
      this.mobileMenu.classList.toggle('open');
      document.body.classList.toggle('menu-open');
    },

    closeMobileMenu() {
      if (this.mobileMenu) {
        this.mobileMenu.classList.remove('open');
        document.body.classList.remove('menu-open');
      }
    }
  };

  // ============================================
  // GEOLOCATION
  // ============================================

  const Geolocation = {
    currentCity: null,

    init() {
      this.currentCity = Utils.storage.get('city', CONFIG.defaultCity);
      this.citySelector = document.querySelector('[data-city-selector]');

      if (this.citySelector) {
        this.citySelector.value = this.currentCity;
        this.citySelector.addEventListener('change', (e) => this.setCity(e.target.value));
      }

      this.updateCityDisplay();
    },

    setCity(cityKey) {
      this.currentCity = cityKey;
      Utils.storage.set('city', cityKey);
      this.updateCityDisplay();

      // Dispatch custom event
      window.dispatchEvent(new CustomEvent('cityChanged', { detail: CITIES[cityKey] }));
    },

    getCity() {
      return CITIES[this.currentCity] || CITIES[CONFIG.defaultCity];
    },

    updateCityDisplay() {
      const city = this.getCity();

      // Update mechanic count
      document.querySelectorAll('[data-mechanic-count]').forEach(el => {
        el.textContent = city.mechanics;
      });

      // Update vendor count
      document.querySelectorAll('[data-vendor-count]').forEach(el => {
        el.textContent = city.vendors;
      });

      // Update city name
      document.querySelectorAll('[data-city-name]').forEach(el => {
        el.textContent = city.name;
      });
    },

    detectLocation() {
      return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
          reject(new Error('Geolocation not supported'));
          return;
        }

        navigator.geolocation.getCurrentPosition(
          (position) => {
            // In production, reverse geocode to get city
            // For now, default to Nairobi
            resolve({ lat: position.coords.latitude, lng: position.coords.longitude });
          },
          (error) => reject(error),
          { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
        );
      });
    }
  };

  // ============================================
  // FORM HANDLING
  // ============================================

  const Forms = {
    init() {
      // Phone input formatting
      document.querySelectorAll('input[type="tel"]').forEach(input => {
        input.addEventListener('input', (e) => this.formatPhoneInput(e.target));
      });

      // Form validation
      document.querySelectorAll('form[data-validate]').forEach(form => {
        form.addEventListener('submit', (e) => this.handleSubmit(e));
      });

      // Real-time validation
      document.querySelectorAll('[data-validate-on="blur"]').forEach(input => {
        input.addEventListener('blur', (e) => this.validateField(e.target));
      });
    },

    formatPhoneInput(input) {
      let value = input.value.replace(/\D/g, '');

      // Format for Kenyan numbers
      if (value.startsWith('254')) {
        value = value.slice(3);
      } else if (value.startsWith('0')) {
        value = value.slice(1);
      }

      if (value.length > 9) {
        value = value.slice(0, 9);
      }

      // Format: 7XX XXX XXX
      if (value.length >= 3) {
        value = value.slice(0, 3) + ' ' + value.slice(3);
      }
      if (value.length >= 7) {
        value = value.slice(0, 7) + ' ' + value.slice(7);
      }

      input.value = value;
    },

    validateField(field) {
      const rules = field.dataset.rules?.split('|') || [];
      const value = field.value.trim();
      let isValid = true;
      let errorMessage = '';

      for (const rule of rules) {
        if (rule === 'required' && !value) {
          isValid = false;
          errorMessage = 'This field is required';
          break;
        }
        if (rule === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          isValid = false;
          errorMessage = 'Please enter a valid email';
          break;
        }
        if (rule === 'phone' && value && !/^[0-9\s]{9,12}$/.test(value.replace(/\D/g, ''))) {
          isValid = false;
          errorMessage = 'Please enter a valid phone number';
          break;
        }
        if (rule.startsWith('min:')) {
          const min = parseInt(rule.split(':')[1]);
          if (value.length < min) {
            isValid = false;
            errorMessage = `Must be at least ${min} characters`;
            break;
          }
        }
      }

      this.setFieldState(field, isValid, errorMessage);
      return isValid;
    },

    setFieldState(field, isValid, message = '') {
      const wrapper = field.closest('.form-group');
      const errorEl = wrapper?.querySelector('.form-error');

      field.classList.remove('form-input-error', 'form-input-success');

      if (!isValid) {
        field.classList.add('form-input-error');
        if (errorEl) {
          errorEl.textContent = message;
          errorEl.style.display = 'flex';
        }
      } else if (field.value) {
        field.classList.add('form-input-success');
        if (errorEl) {
          errorEl.style.display = 'none';
        }
      }
    },

    handleSubmit(e) {
      const form = e.target;
      const fields = form.querySelectorAll('[data-rules]');
      let isValid = true;

      fields.forEach(field => {
        if (!this.validateField(field)) {
          isValid = false;
        }
      });

      if (!isValid) {
        e.preventDefault();
        // Scroll to first error
        const firstError = form.querySelector('.form-input-error');
        if (firstError) {
          Utils.scrollTo(firstError);
        }
      }
    }
  };

  // ============================================
  // MODALS
  // ============================================

  const Modal = {
    activeModal: null,

    init() {
      // Modal triggers
      document.querySelectorAll('[data-modal]').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
          e.preventDefault();
          const modalId = trigger.dataset.modal;
          this.open(modalId);
        });
      });

      // Close buttons
      document.querySelectorAll('[data-modal-close]').forEach(btn => {
        btn.addEventListener('click', () => this.close());
      });

      // Click outside to close
      document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
          if (e.target === overlay) this.close();
        });
      });

      // Escape key to close
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.activeModal) this.close();
      });
    },

    open(modalId) {
      const modal = document.getElementById(modalId);
      if (!modal) return;

      this.activeModal = modal;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';

      // Focus first input
      const firstInput = modal.querySelector('input, button');
      if (firstInput) firstInput.focus();
    },

    close() {
      if (!this.activeModal) return;

      this.activeModal.classList.remove('active');
      document.body.style.overflow = '';
      this.activeModal = null;
    }
  };

  // ============================================
  // TABS
  // ============================================

  const Tabs = {
    init() {
      document.querySelectorAll('[data-tabs]').forEach(tabContainer => {
        const tabs = tabContainer.querySelectorAll('[data-tab]');
        const panels = tabContainer.querySelectorAll('[data-tab-panel]');

        tabs.forEach(tab => {
          tab.addEventListener('click', () => {
            const targetId = tab.dataset.tab;

            // Update tabs
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Update panels
            panels.forEach(panel => {
              panel.style.display = panel.dataset.tabPanel === targetId ? 'block' : 'none';
            });
          });
        });
      });
    }
  };

  // ============================================
  // ANIMATIONS
  // ============================================

  const Animations = {
    init() {
      // Intersection Observer for scroll animations
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in-up');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );

      document.querySelectorAll('[data-animate]').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
      });

      // Staggered animations
      document.querySelectorAll('[data-stagger]').forEach(container => {
        const children = container.children;
        Array.from(children).forEach((child, index) => {
          child.style.animationDelay = `${index * 100}ms`;
        });
      });
    }
  };

  // ============================================
  // WHATSAPP INTEGRATION
  // ============================================

  const WhatsApp = {
    init() {
      // Booking form submission
      const bookingForm = document.querySelector('[data-booking-form]');
      if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => this.handleBookingSubmit(e));
      }

      // Quick WhatsApp buttons
      document.querySelectorAll('[data-whatsapp]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const message = btn.dataset.whatsapp;
          const phone = btn.dataset.phone || CONFIG.whatsappNumber;
          window.open(Utils.whatsappUrl(message, phone), '_blank');
        });
      });
    },

    handleBookingSubmit(e) {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);

      const message = this.buildBookingMessage(formData);
      window.open(Utils.whatsappUrl(message), '_blank');
    },

    buildBookingMessage(formData) {
      const lines = ['Hi GoFixAfrica! I need help with my car.', ''];

      const name = formData.get('name');
      if (name) lines.push(`Name: ${name}`);

      const phone = formData.get('phone');
      if (phone) lines.push(`Phone: ${Utils.formatPhone(phone)}`);

      const location = formData.get('location');
      if (location) lines.push(`Location: ${location}`);

      const vehicle = formData.get('vehicle');
      if (vehicle) lines.push(`Vehicle: ${vehicle}`);

      const service = formData.get('service');
      if (service) {
        const serviceObj = SERVICES.find(s => s.id === service);
        lines.push(`Service: ${serviceObj?.name || service}`);
      }

      const issue = formData.get('issue');
      if (issue) {
        lines.push('');
        lines.push(`Issue: ${issue}`);
      }

      return lines.join('\n');
    }
  };

  // ============================================
  // MULTI-STEP FORM
  // ============================================

  const MultiStepForm = {
    currentStep: 1,
    totalSteps: 1,
    form: null,

    init() {
      this.form = document.querySelector('[data-multistep-form]');
      if (!this.form) return;

      this.steps = this.form.querySelectorAll('[data-step]');
      this.totalSteps = this.steps.length;
      this.progressIndicators = document.querySelectorAll('[data-step-indicator]');

      // Next/Prev buttons
      this.form.querySelectorAll('[data-step-next]').forEach(btn => {
        btn.addEventListener('click', () => this.nextStep());
      });

      this.form.querySelectorAll('[data-step-prev]').forEach(btn => {
        btn.addEventListener('click', () => this.prevStep());
      });

      this.updateDisplay();
    },

    nextStep() {
      // Validate current step
      const currentStepEl = this.steps[this.currentStep - 1];
      const fields = currentStepEl.querySelectorAll('[data-rules]');
      let isValid = true;

      fields.forEach(field => {
        if (!Forms.validateField(field)) {
          isValid = false;
        }
      });

      if (isValid && this.currentStep < this.totalSteps) {
        this.currentStep++;
        this.updateDisplay();
      }
    },

    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
        this.updateDisplay();
      }
    },

    goToStep(step) {
      if (step >= 1 && step <= this.totalSteps) {
        this.currentStep = step;
        this.updateDisplay();
      }
    },

    updateDisplay() {
      // Show/hide steps
      this.steps.forEach((step, index) => {
        step.style.display = index === this.currentStep - 1 ? 'block' : 'none';
      });

      // Update progress indicators
      this.progressIndicators.forEach((indicator, index) => {
        indicator.classList.remove('active', 'completed');
        if (index < this.currentStep - 1) {
          indicator.classList.add('completed');
        } else if (index === this.currentStep - 1) {
          indicator.classList.add('active');
        }
      });

      // Update progress bar
      const progressBar = document.querySelector('[data-progress-bar]');
      if (progressBar) {
        const progress = ((this.currentStep - 1) / (this.totalSteps - 1)) * 100;
        progressBar.style.width = `${progress}%`;
      }

      // Scroll to top of form
      Utils.scrollTo(this.form);
    }
  };

  // ============================================
  // INITIALIZE
  // ============================================

  function init() {
    Header.init();
    Geolocation.init();
    Forms.init();
    Modal.init();
    Tabs.init();
    Animations.init();
    WhatsApp.init();
    MultiStepForm.init();

    // Expose utilities globally
    window.GoFixAfrica = {
      Utils,
      CITIES,
      SERVICES,
      Geolocation,
      Modal,
      WhatsApp,
    };

    console.log('🔧 GoFixAfrica initialized');
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
