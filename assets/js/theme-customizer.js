/**
 * NAFEER DIGITAL | نفير الرقمي
 * Interactive Theme & Mood Customizer
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'nafeer_theme_customizer_v1';

  const DEFAULT_SETTINGS = {
    theme: 'signature', // signature | midnight | luxury | ocean | minimal | emerald | custom
    mood: 'professional', // professional | luxury | modern | minimal | dark
    mode: 'light', // light | dark
    customColors: {
      primary: '#063B35',
      secondary: '#10243A',
      accent: '#E7B94F',
      bgPage: '#F5F7F6'
    }
  };

  let state = loadSettings();

  function loadSettings() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return Object.assign({}, DEFAULT_SETTINGS, JSON.parse(saved));
      }
    } catch (e) {
      console.warn('Could not load theme settings from localStorage', e);
    }
    return Object.assign({}, DEFAULT_SETTINGS);
  }

  function saveSettings() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Could not save theme settings to localStorage', e);
    }
  }

  function applySettings() {
    const root = document.documentElement;

    // Apply Theme
    if (state.theme && state.theme !== 'custom') {
      root.setAttribute('data-theme', state.theme);
      // clear any inline custom color properties
      root.style.removeProperty('--primary');
      root.style.removeProperty('--secondary');
      root.style.removeProperty('--accent');
      root.style.removeProperty('--bg-page');
    } else if (state.theme === 'custom') {
      root.removeAttribute('data-theme');
      root.style.setProperty('--primary', state.customColors.primary);
      root.style.setProperty('--secondary', state.customColors.secondary);
      root.style.setProperty('--accent', state.customColors.accent);
      root.style.setProperty('--bg-page', state.customColors.bgPage);
    }

    // Apply Mood
    if (state.mood) {
      root.setAttribute('data-mood', state.mood);
    }

    // Apply Mode (Light / Dark)
    if (state.mode) {
      root.setAttribute('data-mode', state.mode);
    }

    // Sync UI elements if panel exists
    updatePanelUI();
  }

  function updatePanelUI() {
    // Theme presets
    document.querySelectorAll('.theme-preset-btn').forEach(btn => {
      const t = btn.getAttribute('data-theme-val');
      btn.classList.toggle('active', t === state.theme);
    });

    // Mood buttons
    document.querySelectorAll('.mood-btn').forEach(btn => {
      const m = btn.getAttribute('data-mood-val');
      btn.classList.toggle('active', m === state.mood);
    });

    // Mode buttons
    document.querySelectorAll('.mode-btn').forEach(btn => {
      const mode = btn.getAttribute('data-mode-val');
      btn.classList.toggle('active', mode === state.mode);
    });

    // Color pickers
    const primaryInput = document.getElementById('picker-primary');
    const secondaryInput = document.getElementById('picker-secondary');
    const accentInput = document.getElementById('picker-accent');
    const bgInput = document.getElementById('picker-bg');

    if (primaryInput) primaryInput.value = state.customColors.primary;
    if (secondaryInput) secondaryInput.value = state.customColors.secondary;
    if (accentInput) accentInput.value = state.customColors.accent;
    if (bgInput) bgInput.value = state.customColors.bgPage;
  }

  function initPanelEvents() {
    // Toggle buttons (floating trigger and header triggers)
    const openBtns = document.querySelectorAll('.js-open-theme-panel');
    const closeBtns = document.querySelectorAll('.js-close-theme-panel');
    const overlay = document.getElementById('theme-panel-overlay');
    const panel = document.getElementById('theme-panel');

    function openPanel() {
      if (overlay) overlay.classList.add('open');
      if (panel) panel.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closePanel() {
      if (overlay) overlay.classList.remove('open');
      if (panel) panel.classList.remove('open');
      document.body.style.overflow = '';
    }

    openBtns.forEach(btn => btn.addEventListener('click', openPanel));
    closeBtns.forEach(btn => btn.addEventListener('click', closePanel));
    if (overlay) overlay.addEventListener('click', closePanel);

    // Theme preset clicks
    document.querySelectorAll('.theme-preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.theme = btn.getAttribute('data-theme-val');
        saveSettings();
        applySettings();
      });
    });

    // Mood clicks
    document.querySelectorAll('.mood-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.mood = btn.getAttribute('data-mood-val');
        if (state.mood === 'dark') {
          state.mode = 'dark';
        }
        saveSettings();
        applySettings();
      });
    });

    // Mode clicks (Light / Dark)
    document.querySelectorAll('.mode-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.mode = btn.getAttribute('data-mode-val');
        if (state.mode === 'dark' && state.mood === 'professional') {
          state.mood = 'dark';
        } else if (state.mode === 'light' && state.mood === 'dark') {
          state.mood = 'professional';
        }
        saveSettings();
        applySettings();
      });
    });

    // Custom color pickers
    const bindPicker = (id, key) => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('input', (e) => {
          state.theme = 'custom';
          state.customColors[key] = e.target.value;
          saveSettings();
          applySettings();
        });
      }
    };

    bindPicker('picker-primary', 'primary');
    bindPicker('picker-secondary', 'secondary');
    bindPicker('picker-accent', 'accent');
    bindPicker('picker-bg', 'bgPage');

    // Reset button
    const resetBtn = document.getElementById('btn-reset-theme');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        state = Object.assign({}, DEFAULT_SETTINGS);
        saveSettings();
        applySettings();
      });
    }
  }

  // Initial apply immediately on execution
  applySettings();

  // Attach event handlers when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      applySettings();
      initPanelEvents();
    });
  } else {
    applySettings();
    initPanelEvents();
  }

  // Export to global for direct access if needed
  window.NafeerTheme = {
    getState: () => state,
    setTheme: (t) => { state.theme = t; saveSettings(); applySettings(); },
    setMood: (m) => { state.mood = m; saveSettings(); applySettings(); },
    setMode: (m) => { state.mode = m; saveSettings(); applySettings(); },
    reset: () => { state = Object.assign({}, DEFAULT_SETTINGS); saveSettings(); applySettings(); }
  };
})();
