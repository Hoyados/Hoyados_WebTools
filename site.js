(() => {
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('hoyados-theme');
  if (savedTheme) root.dataset.theme = savedTheme;

  if (!document.body.classList.contains('home-page')) {
    const nav = document.createElement('nav');
    nav.className = 'tool-nav';
    nav.setAttribute('aria-label', '共通ナビゲーション');
    nav.innerHTML = `<a class="brand" href="index.html"><span class="brand-mark">H</span><span>HOYADOS <b>TOOLS</b></span></a><div class="tool-nav-right"><a class="all-tools-link" href="index.html#tools">すべてのツール</a><button class="theme-toggle" type="button" aria-label="カラーテーマを切り替える"><span aria-hidden="true">◐</span></button></div>`;
    document.body.prepend(nav);
  }

  document.querySelectorAll('.theme-toggle').forEach((button) => {
    button.addEventListener('click', () => {
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      localStorage.setItem('hoyados-theme', next);
    });
  });
})();
