const themeButton = document.querySelector('.theme-toggle');

function updateThemeLabel() {
  const isDark = document.documentElement.dataset.theme === 'dark';
  themeButton.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} theme`);
  themeButton.title = themeButton.getAttribute('aria-label');
  document.querySelector('meta[name="theme-color"]').content = isDark ? '#191e21' : '#fcfbf8';
}
updateThemeLabel();
themeButton.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = nextTheme;
  try { localStorage.setItem('haibei-theme', nextTheme); } catch (_) { /* Theme still works without storage. */ }
  updateThemeLabel();
});

document.querySelector('#year').textContent = new Date().getFullYear();
