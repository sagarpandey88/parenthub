// Function to toggle between themes
function setTheme(themeName) {
  // Remove all theme classes
  document.documentElement.classList.remove('pink-theme', 'dark-theme');
  
  // Add the selected theme class
  if (themeName !== 'default') {
    document.documentElement.classList.add(`${themeName}-theme`);
  }
  
  // Save the theme preference
  localStorage.setItem('theme', themeName);
}

// Function to initialize theme based on saved preference
function initTheme() {
  // Check for saved theme preference or use default
  const savedTheme = localStorage.getItem('theme') || 'default';
  setTheme(savedTheme);
  
  // Update the theme toggle UI state based on current theme
  document.querySelectorAll('[data-theme-value]').forEach(toggle => {
    const themeValue = toggle.getAttribute('data-theme-value');
    if (themeValue === savedTheme) {
      toggle.setAttribute('aria-pressed', 'true');
      toggle.classList.add('active');
    } else {
      toggle.setAttribute('aria-pressed', 'false');
      toggle.classList.remove('active');
    }
  });
}

// Set up event listeners for theme toggle buttons
function setupThemeToggle() {
  document.querySelectorAll('[data-theme-value]').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const themeValue = toggle.getAttribute('data-theme-value');
      
      // Reset all toggles
      document.querySelectorAll('[data-theme-value]').forEach(btn => {
        btn.setAttribute('aria-pressed', 'false');
        btn.classList.remove('active');
      });
      
      // Set the selected toggle as active
      toggle.setAttribute('aria-pressed', 'true');
      toggle.classList.add('active');
      
      // Apply the theme
      setTheme(themeValue);
    });
  });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  setupThemeToggle();
});

// Re-initialize when the page content updates (for Astro transitions)
document.addEventListener('astro:page-load', () => {
  initTheme();
  setupThemeToggle();
});

export { setTheme, initTheme, setupThemeToggle };