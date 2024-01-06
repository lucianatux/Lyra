function toggleDarkMode() {
    const root = document.documentElement;
    const currentMode = root.getAttribute('data-theme') || 'light';
  
    if (currentMode === 'light') {
      root.style.setProperty('--first-color', '#e6e6e6');
      root.style.setProperty('--second-color', '#131313');
      root.style.setProperty('--third-color', '#d95679');
      root.style.setProperty('--success', '#306ABB');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.style.setProperty('--first-color', '#121212');
      root.style.setProperty('--second-color', '#e6e6e6');
      root.style.setProperty('--third-color', '#d95679');
      root.style.setProperty('--success', '#306ABB');
      root.removeAttribute('data-theme');
    }
  }