// Apply the saved theme before paint. Storage restrictions never block the page.
try {
  const savedTheme = localStorage.getItem('haibei-theme');
  if (savedTheme === 'dark' || savedTheme === 'light') {
    document.documentElement.dataset.theme = savedTheme;
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.dataset.theme = 'dark';
  }
} catch (_) { /* Keep the default light theme. */ }
