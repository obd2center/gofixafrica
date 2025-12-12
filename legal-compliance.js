/**
 * GoFixAfrica Legal Compliance Module
 * Handles multi-jurisdiction data protection compliance
 * Supports: GDPR, Kenya DPA, Nigeria NDPR, South Africa POPIA, Ghana DPA, Uganda DPA, Rwanda DPA
 */

(function() {
  'use strict';

  // Data Protection Frameworks by Country
  const DATA_PROTECTION_LAWS = {
    // East Africa
    KE: {
      country: 'Kenya',
      law: 'Data Protection Act, 2019',
      authority: 'Office of the Data Protection Commissioner (ODPC)',
      authorityUrl: 'https://www.odpc.go.ke',
      keyRights: [
        'Right to be informed of data collection',
        'Right to access personal data',
        'Right to rectification of inaccurate data',
        'Right to deletion of personal data',
        'Right to restrict processing',
        'Right to data portability',
        'Right to object to processing',
        'Right not to be subject to automated decision-making'
      ],
      consentAge: 18,
      breachNotification: '72 hours',
      crossBorderTransfer: 'Requires adequate safeguards or consent',
      penalties: 'Up to KES 5 million or 1% of annual turnover',
      cookieConsent: true,
      dpoRequired: true
    },
    UG: {
      country: 'Uganda',
      law: 'Data Protection and Privacy Act, 2019',
      authority: 'Personal Data Protection Office (PDPO)',
      authorityUrl: 'https://pdpo.go.ug',
      keyRights: [
        'Right to access personal data',
        'Right to correction of personal data',
        'Right to deletion',
        'Right to withdraw consent',
        'Right to object to direct marketing',
        'Right to data portability'
      ],
      consentAge: 18,
      breachNotification: '48 hours',
      crossBorderTransfer: 'Requires consent or adequate protection',
      penalties: 'Up to UGX 4.8 million or imprisonment',
      cookieConsent: true,
      dpoRequired: false
    },
    TZ: {
      country: 'Tanzania',
      law: 'Personal Data Protection Act (Pending) / Cybercrimes Act, 2015',
      authority: 'Tanzania Communications Regulatory Authority (TCRA)',
      authorityUrl: 'https://www.tcra.go.tz',
      keyRights: [
        'Right to privacy (Constitutional)',
        'Right to access information',
        'Right to correction',
        'Protection against unauthorized disclosure'
      ],
      consentAge: 18,
      breachNotification: 'As soon as practicable',
      crossBorderTransfer: 'Subject to authorization',
      penalties: 'Varies by offense',
      cookieConsent: true,
      dpoRequired: false
    },
    RW: {
      country: 'Rwanda',
      law: 'Law N° 058/2021 Relating to the Protection of Personal Data and Privacy',
      authority: 'National Cyber Security Authority (NCSA)',
      authorityUrl: 'https://ncsa.gov.rw',
      keyRights: [
        'Right to be informed',
        'Right of access',
        'Right to rectification',
        'Right to erasure',
        'Right to restrict processing',
        'Right to data portability',
        'Right to object',
        'Rights related to automated decision-making'
      ],
      consentAge: 16,
      breachNotification: '72 hours',
      crossBorderTransfer: 'Requires adequacy or appropriate safeguards',
      penalties: 'Up to RWF 5 million or 5% of annual turnover',
      cookieConsent: true,
      dpoRequired: true
    },
    ET: {
      country: 'Ethiopia',
      law: 'Computer Crime Proclamation No. 958/2016 / Draft Data Protection Law',
      authority: 'Information Network Security Agency (INSA)',
      authorityUrl: 'https://www.insa.gov.et',
      keyRights: [
        'Right to privacy (Constitutional)',
        'Protection of personal data',
        'Right to access',
        'Right to correction'
      ],
      consentAge: 18,
      breachNotification: 'Not specified',
      crossBorderTransfer: 'Subject to restrictions',
      penalties: 'Varies',
      cookieConsent: true,
      dpoRequired: false
    },

    // West Africa
    NG: {
      country: 'Nigeria',
      law: 'Nigeria Data Protection Regulation (NDPR), 2019 & Nigeria Data Protection Act, 2023',
      authority: 'Nigeria Data Protection Commission (NDPC)',
      authorityUrl: 'https://ndpc.gov.ng',
      keyRights: [
        'Right to be informed',
        'Right of access',
        'Right to rectification',
        'Right to erasure (right to be forgotten)',
        'Right to restrict processing',
        'Right to data portability',
        'Right to object',
        'Right to withdraw consent',
        'Right to lodge complaints'
      ],
      consentAge: 18,
      breachNotification: '72 hours',
      crossBorderTransfer: 'Requires adequate level of protection',
      penalties: 'Up to 2% of annual gross revenue or NGN 10 million',
      cookieConsent: true,
      dpoRequired: true,
      dpiaRequired: true
    },
    GH: {
      country: 'Ghana',
      law: 'Data Protection Act, 2012 (Act 843)',
      authority: 'Data Protection Commission',
      authorityUrl: 'https://www.dataprotection.org.gh',
      keyRights: [
        'Right to access personal data',
        'Right to rectification',
        'Right to block processing',
        'Right to erasure',
        'Right to object to processing',
        'Right to compensation for damage'
      ],
      consentAge: 18,
      breachNotification: 'Without undue delay',
      crossBorderTransfer: 'Requires adequate protection',
      penalties: 'Up to GHS 60,000 and/or imprisonment',
      cookieConsent: true,
      dpoRequired: true
    },
    SN: {
      country: 'Senegal',
      law: 'Law No. 2008-12 on Personal Data Protection',
      authority: 'Commission des Données Personnelles (CDP)',
      authorityUrl: 'https://www.cdp.sn',
      keyRights: [
        'Right of access',
        'Right to rectification',
        'Right to object',
        'Right to erasure'
      ],
      consentAge: 18,
      breachNotification: 'Required',
      crossBorderTransfer: 'Requires adequate protection',
      penalties: 'Criminal and civil penalties',
      cookieConsent: true,
      dpoRequired: false
    },
    CI: {
      country: "Côte d'Ivoire",
      law: 'Law No. 2013-450 on Personal Data Protection',
      authority: "Autorité de Régulation des Télécommunications/TIC de Côte d'Ivoire (ARTCI)",
      authorityUrl: 'https://www.artci.ci',
      keyRights: [
        'Right of access',
        'Right to rectification',
        'Right to object',
        'Right to erasure'
      ],
      consentAge: 18,
      breachNotification: 'Required',
      crossBorderTransfer: 'Subject to authorization',
      penalties: 'Fines and imprisonment',
      cookieConsent: true,
      dpoRequired: false
    },

    // Southern Africa
    ZA: {
      country: 'South Africa',
      law: 'Protection of Personal Information Act (POPIA), 2013',
      authority: 'Information Regulator',
      authorityUrl: 'https://www.inforegulator.org.za',
      keyRights: [
        'Right to be notified of data collection',
        'Right to access personal information',
        'Right to request correction or deletion',
        'Right to object to processing',
        'Right not to be subject to automated decision-making',
        'Right to submit complaints',
        'Right to institute civil proceedings'
      ],
      consentAge: 18,
      breachNotification: 'As soon as reasonably possible',
      crossBorderTransfer: 'Requires adequate protection or consent',
      penalties: 'Up to ZAR 10 million and/or imprisonment',
      cookieConsent: true,
      dpoRequired: true,
      informationOfficer: true
    },
    ZW: {
      country: 'Zimbabwe',
      law: 'Cyber and Data Protection Act, 2021',
      authority: 'Postal and Telecommunications Regulatory Authority (POTRAZ)',
      authorityUrl: 'https://www.potraz.gov.zw',
      keyRights: [
        'Right to access',
        'Right to rectification',
        'Right to erasure',
        'Right to restrict processing',
        'Right to data portability',
        'Right to object'
      ],
      consentAge: 18,
      breachNotification: '72 hours',
      crossBorderTransfer: 'Requires authorization',
      penalties: 'Fines and imprisonment',
      cookieConsent: true,
      dpoRequired: true
    },
    BW: {
      country: 'Botswana',
      law: 'Data Protection Act, 2018',
      authority: 'Information and Data Protection Commission',
      authorityUrl: 'https://www.gov.bw',
      keyRights: [
        'Right to access',
        'Right to rectification',
        'Right to erasure',
        'Right to object',
        'Right to data portability'
      ],
      consentAge: 18,
      breachNotification: '72 hours',
      crossBorderTransfer: 'Requires adequate safeguards',
      penalties: 'Fines up to BWP 100,000',
      cookieConsent: true,
      dpoRequired: false
    },

    // European Union (GDPR)
    EU: {
      country: 'European Union',
      law: 'General Data Protection Regulation (GDPR)',
      authority: 'National Data Protection Authorities',
      authorityUrl: 'https://edpb.europa.eu',
      keyRights: [
        'Right to be informed (Articles 13-14)',
        'Right of access (Article 15)',
        'Right to rectification (Article 16)',
        'Right to erasure / right to be forgotten (Article 17)',
        'Right to restrict processing (Article 18)',
        'Right to data portability (Article 20)',
        'Right to object (Article 21)',
        'Rights related to automated decision-making and profiling (Article 22)'
      ],
      consentAge: 16,
      breachNotification: '72 hours',
      crossBorderTransfer: 'Requires adequacy decision or appropriate safeguards (SCCs, BCRs)',
      penalties: 'Up to €20 million or 4% of global annual turnover',
      cookieConsent: true,
      dpoRequired: true,
      dpiaRequired: true,
      lawfulBases: [
        'Consent',
        'Contract',
        'Legal obligation',
        'Vital interests',
        'Public task',
        'Legitimate interests'
      ]
    },

    // Default for unknown regions
    DEFAULT: {
      country: 'International',
      law: 'International Data Protection Best Practices',
      authority: 'GoFixAfrica Data Protection Team',
      authorityUrl: 'mailto:privacy@gofixafrica.com',
      keyRights: [
        'Right to be informed of data collection',
        'Right to access your personal data',
        'Right to correct inaccurate data',
        'Right to request deletion',
        'Right to restrict processing',
        'Right to data portability',
        'Right to object to processing',
        'Right to withdraw consent'
      ],
      consentAge: 18,
      breachNotification: '72 hours',
      crossBorderTransfer: 'Subject to appropriate safeguards',
      penalties: 'As per applicable law',
      cookieConsent: true,
      dpoRequired: false
    }
  };

  // Cookie categories
  const COOKIE_CATEGORIES = {
    essential: {
      name: 'Essential',
      description: 'Required for the website to function. Cannot be disabled.',
      required: true,
      cookies: ['session_id', 'csrf_token', 'cookie_consent']
    },
    functional: {
      name: 'Functional',
      description: 'Remember your preferences and settings.',
      required: false,
      cookies: ['language', 'location', 'theme']
    },
    analytics: {
      name: 'Analytics',
      description: 'Help us understand how you use our website.',
      required: false,
      cookies: ['_ga', '_gid', '_gat']
    },
    marketing: {
      name: 'Marketing',
      description: 'Used to deliver relevant advertisements.',
      required: false,
      cookies: ['_fbp', '_gcl_au']
    }
  };

  // Detect country from subdomain or stored preference
  function detectCountry() {
    // Check subdomain first (e.g., ke.gofixafrica.com)
    const hostname = window.location.hostname;
    const subdomain = hostname.split('.')[0].toUpperCase();
    
    // Check if subdomain is a valid country code
    if (DATA_PROTECTION_LAWS[subdomain]) {
      return subdomain;
    }
    
    // Check localStorage
    const storedCountry = localStorage.getItem('gfa_country');
    if (storedCountry && DATA_PROTECTION_LAWS[storedCountry]) {
      return storedCountry;
    }
    
    // Check for EU based on timezone or language
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const euTimezones = ['Europe/', 'Atlantic/Reykjavik', 'Atlantic/Canary'];
    if (euTimezones.some(tz => timezone.startsWith(tz))) {
      return 'EU';
    }
    
    // Default to Kenya (HQ)
    return 'KE';
  }

  // Get data protection info for current jurisdiction
  function getDataProtectionInfo(countryCode = null) {
    const code = countryCode || detectCountry();
    return DATA_PROTECTION_LAWS[code] || DATA_PROTECTION_LAWS.DEFAULT;
  }

  // Cookie Consent Management
  const CookieConsent = {
    STORAGE_KEY: 'gfa_cookie_consent',
    
    getConsent() {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored ? JSON.parse(stored) : null;
    },
    
    setConsent(preferences) {
      const consent = {
        timestamp: new Date().toISOString(),
        version: '1.0',
        preferences: preferences
      };
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(consent));
      this.applyConsent(preferences);
      return consent;
    },
    
    hasConsent() {
      return this.getConsent() !== null;
    },
    
    acceptAll() {
      return this.setConsent({
        essential: true,
        functional: true,
        analytics: true,
        marketing: true
      });
    },
    
    rejectNonEssential() {
      return this.setConsent({
        essential: true,
        functional: false,
        analytics: false,
        marketing: false
      });
    },
    
    applyConsent(preferences) {
      // Emit event for other scripts to listen
      window.dispatchEvent(new CustomEvent('cookieConsentUpdated', { 
        detail: preferences 
      }));
      
      // Disable Google Analytics if not consented
      if (!preferences.analytics) {
        window['ga-disable-GA_MEASUREMENT_ID'] = true;
      }
    },
    
    showBanner() {
      if (this.hasConsent()) return;
      
      const dpInfo = getDataProtectionInfo();
      
      const banner = document.createElement('div');
      banner.id = 'cookie-consent-banner';
      banner.innerHTML = `
        <div class="cookie-banner-content">
          <div class="cookie-banner-text">
            <h4>🍪 Cookie Preferences</h4>
            <p>We use cookies to enhance your experience. Under ${dpInfo.law}, you have the right to control how your data is used.</p>
          </div>
          <div class="cookie-banner-actions">
            <button class="btn btn-outline btn-sm" id="cookie-customize">Customize</button>
            <button class="btn btn-secondary btn-sm" id="cookie-reject">Reject Non-Essential</button>
            <button class="btn btn-primary btn-sm" id="cookie-accept">Accept All</button>
          </div>
        </div>
      `;
      
      document.body.appendChild(banner);
      
      // Event listeners
      document.getElementById('cookie-accept').addEventListener('click', () => {
        this.acceptAll();
        banner.remove();
      });
      
      document.getElementById('cookie-reject').addEventListener('click', () => {
        this.rejectNonEssential();
        banner.remove();
      });
      
      document.getElementById('cookie-customize').addEventListener('click', () => {
        this.showPreferencesModal();
        banner.remove();
      });
    },
    
    showPreferencesModal() {
      const currentConsent = this.getConsent()?.preferences || {
        essential: true,
        functional: true,
        analytics: true,
        marketing: false
      };
      
      const modal = document.createElement('div');
      modal.id = 'cookie-preferences-modal';
      modal.className = 'modal-overlay active';
      modal.innerHTML = `
        <div class="modal modal-md">
          <div class="modal-header">
            <h3>Cookie Preferences</h3>
            <button class="modal-close" aria-label="Close">&times;</button>
          </div>
          <div class="modal-body">
            <p class="text-muted mb-6">Manage your cookie preferences below. Essential cookies cannot be disabled as they are required for the website to function.</p>
            
            ${Object.entries(COOKIE_CATEGORIES).map(([key, cat]) => `
              <div class="cookie-category">
                <div class="cookie-category-header">
                  <div>
                    <strong>${cat.name}</strong>
                    ${cat.required ? '<span class="badge badge-sm">Required</span>' : ''}
                  </div>
                  <label class="toggle">
                    <input type="checkbox" name="cookie_${key}" ${currentConsent[key] ? 'checked' : ''} ${cat.required ? 'disabled checked' : ''}>
                    <span class="toggle-slider"></span>
                  </label>
                </div>
                <p class="text-sm text-muted">${cat.description}</p>
              </div>
            `).join('')}
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" id="cookie-save-preferences">Save Preferences</button>
          </div>
        </div>
      `;
      
      document.body.appendChild(modal);
      
      // Event listeners
      modal.querySelector('.modal-close').addEventListener('click', () => modal.remove());
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
      });
      
      document.getElementById('cookie-save-preferences').addEventListener('click', () => {
        const preferences = {};
        Object.keys(COOKIE_CATEGORIES).forEach(key => {
          const checkbox = modal.querySelector(`input[name="cookie_${key}"]`);
          preferences[key] = checkbox.checked;
        });
        this.setConsent(preferences);
        modal.remove();
      });
    }
  };

  // Data Subject Request Handler
  const DataSubjectRequest = {
    TYPES: {
      access: 'Access my data',
      rectification: 'Correct my data',
      erasure: 'Delete my data',
      portability: 'Export my data',
      restriction: 'Restrict processing',
      objection: 'Object to processing',
      withdraw: 'Withdraw consent'
    },
    
    generateForm(containerId) {
      const container = document.getElementById(containerId);
      if (!container) return;
      
      const dpInfo = getDataProtectionInfo();
      
      container.innerHTML = `
        <div class="dsr-form-wrapper">
          <div class="dsr-header">
            <h3>Submit a Data Request</h3>
            <p>Under ${dpInfo.law}, you have the right to make the following requests about your personal data.</p>
          </div>
          
          <form id="dsr-form" class="dsr-form">
            <div class="form-group">
              <label class="form-label form-label-required">Request Type</label>
              <select name="request_type" class="form-input form-select" required>
                <option value="">Select request type</option>
                ${Object.entries(this.TYPES).map(([value, label]) => 
                  `<option value="${value}">${label}</option>`
                ).join('')}
              </select>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label class="form-label form-label-required">Full Name</label>
                <input type="text" name="full_name" class="form-input" required>
              </div>
              <div class="form-group">
                <label class="form-label form-label-required">Email Address</label>
                <input type="email" name="email" class="form-input" required>
              </div>
            </div>
            
            <div class="form-group">
              <label class="form-label form-label-required">Phone Number (for verification)</label>
              <input type="tel" name="phone" class="form-input" required>
            </div>
            
            <div class="form-group">
              <label class="form-label">Additional Details</label>
              <textarea name="details" class="form-input" rows="4" placeholder="Please provide any additional information to help us process your request..."></textarea>
            </div>
            
            <div class="form-group">
              <label class="form-checkbox">
                <input type="checkbox" name="identity_confirm" required>
                <span class="checkmark"></span>
                <span>I confirm that I am the data subject or authorized to make this request on behalf of the data subject.</span>
              </label>
            </div>
            
            <div class="dsr-notice">
              <p><strong>Processing Time:</strong> We will respond to your request within 30 days as required by ${dpInfo.law}.</p>
              <p><strong>Verification:</strong> We may need to verify your identity before processing this request.</p>
            </div>
            
            <button type="submit" class="btn btn-primary">Submit Request</button>
          </form>
        </div>
      `;
      
      // Form submission handler
      document.getElementById('dsr-form').addEventListener('submit', (e) => {
        e.preventDefault();
        this.submitRequest(new FormData(e.target));
      });
    },
    
    submitRequest(formData) {
      // In production, this would send to backend
      const data = Object.fromEntries(formData.entries());
      console.log('DSR Request:', data);
      
      // Show success message
      alert(`Your ${this.TYPES[data.request_type]} request has been submitted. You will receive a confirmation email at ${data.email}. Reference: DSR-${Date.now()}`);
    }
  };

  // Render jurisdiction-specific content
  function renderJurisdictionInfo(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const dpInfo = getDataProtectionInfo();
    
    container.innerHTML = `
      <div class="jurisdiction-info">
        <div class="jurisdiction-header">
          <h4>Your Data Protection Rights</h4>
          <p>Based on your location, the following data protection framework applies:</p>
        </div>
        
        <div class="jurisdiction-card">
          <div class="jurisdiction-law">
            <strong>Applicable Law:</strong>
            <span>${dpInfo.law}</span>
          </div>
          
          <div class="jurisdiction-authority">
            <strong>Supervisory Authority:</strong>
            <a href="${dpInfo.authorityUrl}" target="_blank" rel="noopener">${dpInfo.authority}</a>
          </div>
          
          <div class="jurisdiction-rights">
            <strong>Your Rights:</strong>
            <ul>
              ${dpInfo.keyRights.map(right => `<li>${right}</li>`).join('')}
            </ul>
          </div>
          
          <div class="jurisdiction-details">
            <div class="detail-item">
              <span class="detail-label">Consent Age:</span>
              <span class="detail-value">${dpInfo.consentAge} years</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Breach Notification:</span>
              <span class="detail-value">${dpInfo.breachNotification}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Cross-Border Transfers:</span>
              <span class="detail-value">${dpInfo.crossBorderTransfer}</span>
            </div>
          </div>
        </div>
        
        <div class="jurisdiction-contact">
          <p>For data protection inquiries, contact our Data Protection Officer:</p>
          <a href="mailto:dpo@gofixafrica.com" class="btn btn-outline btn-sm">📧 dpo@gofixafrica.com</a>
        </div>
      </div>
    `;
  }

  // Add CSS for legal compliance components
  function injectStyles() {
    const styles = document.createElement('style');
    styles.id = 'legal-compliance-styles';
    styles.textContent = `
      /* Cookie Consent Banner */
      #cookie-consent-banner {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: var(--bg-card, #1a1a2e);
        border-top: 1px solid var(--border-default, #2d2d44);
        padding: 1rem 1.5rem;
        z-index: 9999;
        box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.3);
        animation: slideUp 0.3s ease;
      }
      
      @keyframes slideUp {
        from { transform: translateY(100%); }
        to { transform: translateY(0); }
      }
      
      .cookie-banner-content {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1.5rem;
        flex-wrap: wrap;
      }
      
      .cookie-banner-text h4 {
        font-size: 1rem;
        margin-bottom: 0.25rem;
      }
      
      .cookie-banner-text p {
        font-size: 0.875rem;
        color: var(--text-secondary, #a0a0b0);
        margin: 0;
      }
      
      .cookie-banner-actions {
        display: flex;
        gap: 0.75rem;
        flex-wrap: wrap;
      }
      
      /* Cookie Preferences Modal */
      .cookie-category {
        padding: 1rem;
        background: var(--bg-elevated, #252540);
        border-radius: 0.75rem;
        margin-bottom: 0.75rem;
      }
      
      .cookie-category-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.5rem;
      }
      
      .cookie-category-header .badge {
        margin-left: 0.5rem;
        font-size: 0.625rem;
      }
      
      /* Toggle Switch */
      .toggle {
        position: relative;
        display: inline-block;
        width: 44px;
        height: 24px;
      }
      
      .toggle input {
        opacity: 0;
        width: 0;
        height: 0;
      }
      
      .toggle-slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--bg-elevated, #252540);
        border: 1px solid var(--border-default, #2d2d44);
        transition: 0.2s;
        border-radius: 24px;
      }
      
      .toggle-slider:before {
        position: absolute;
        content: "";
        height: 18px;
        width: 18px;
        left: 2px;
        bottom: 2px;
        background-color: white;
        transition: 0.2s;
        border-radius: 50%;
      }
      
      .toggle input:checked + .toggle-slider {
        background-color: var(--color-primary-500, #FF6B00);
        border-color: var(--color-primary-500, #FF6B00);
      }
      
      .toggle input:checked + .toggle-slider:before {
        transform: translateX(20px);
      }
      
      .toggle input:disabled + .toggle-slider {
        opacity: 0.5;
        cursor: not-allowed;
      }
      
      /* Jurisdiction Info */
      .jurisdiction-info {
        background: var(--bg-card, #1a1a2e);
        border: 1px solid var(--border-default, #2d2d44);
        border-radius: 1rem;
        padding: 1.5rem;
      }
      
      .jurisdiction-header {
        margin-bottom: 1.5rem;
      }
      
      .jurisdiction-header h4 {
        margin-bottom: 0.5rem;
      }
      
      .jurisdiction-header p {
        color: var(--text-secondary, #a0a0b0);
        font-size: 0.875rem;
      }
      
      .jurisdiction-card {
        background: var(--bg-elevated, #252540);
        border-radius: 0.75rem;
        padding: 1.25rem;
        margin-bottom: 1.5rem;
      }
      
      .jurisdiction-law,
      .jurisdiction-authority {
        margin-bottom: 1rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--border-default, #2d2d44);
      }
      
      .jurisdiction-law strong,
      .jurisdiction-authority strong,
      .jurisdiction-rights strong {
        display: block;
        font-size: 0.75rem;
        color: var(--text-muted, #666);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 0.25rem;
      }
      
      .jurisdiction-rights {
        margin-bottom: 1rem;
      }
      
      .jurisdiction-rights ul {
        margin: 0.5rem 0 0 1rem;
        padding: 0;
      }
      
      .jurisdiction-rights li {
        font-size: 0.875rem;
        color: var(--text-secondary, #a0a0b0);
        margin-bottom: 0.25rem;
      }
      
      .jurisdiction-details {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        padding-top: 1rem;
        border-top: 1px solid var(--border-default, #2d2d44);
      }
      
      .detail-item {
        font-size: 0.875rem;
      }
      
      .detail-label {
        color: var(--text-muted, #666);
      }
      
      .detail-value {
        display: block;
        color: var(--text-primary, #fff);
        font-weight: 500;
      }
      
      .jurisdiction-contact {
        text-align: center;
      }
      
      .jurisdiction-contact p {
        font-size: 0.875rem;
        color: var(--text-secondary, #a0a0b0);
        margin-bottom: 0.75rem;
      }
      
      /* DSR Form */
      .dsr-form-wrapper {
        background: var(--bg-card, #1a1a2e);
        border: 1px solid var(--border-default, #2d2d44);
        border-radius: 1rem;
        padding: 1.5rem;
      }
      
      .dsr-header {
        margin-bottom: 1.5rem;
      }
      
      .dsr-header h3 {
        margin-bottom: 0.5rem;
      }
      
      .dsr-header p {
        color: var(--text-secondary, #a0a0b0);
        font-size: 0.875rem;
      }
      
      .dsr-notice {
        background: var(--bg-elevated, #252540);
        border-radius: 0.5rem;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 0.875rem;
      }
      
      .dsr-notice p {
        margin: 0 0 0.5rem 0;
        color: var(--text-secondary, #a0a0b0);
      }
      
      .dsr-notice p:last-child {
        margin-bottom: 0;
      }
      
      /* Mobile Responsive */
      @media (max-width: 640px) {
        #cookie-consent-banner {
          padding: 1rem;
        }
        
        .cookie-banner-content {
          flex-direction: column;
          text-align: center;
        }
        
        .cookie-banner-actions {
          width: 100%;
          justify-content: center;
        }
        
        .jurisdiction-details {
          grid-template-columns: 1fr;
        }
      }
    `;
    document.head.appendChild(styles);
  }

  // Initialize on DOM ready
  function init() {
    injectStyles();
    
    // Show cookie consent banner if needed
    const dpInfo = getDataProtectionInfo();
    if (dpInfo.cookieConsent) {
      CookieConsent.showBanner();
    }
    
    // Render jurisdiction info if container exists
    renderJurisdictionInfo('jurisdiction-info-container');
    
    // Generate DSR form if container exists
    DataSubjectRequest.generateForm('dsr-form-container');
  }

  // Expose public API
  window.GoFixAfricaLegal = {
    detectCountry,
    getDataProtectionInfo,
    CookieConsent,
    DataSubjectRequest,
    renderJurisdictionInfo,
    DATA_PROTECTION_LAWS,
    init
  };

  // Auto-initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
