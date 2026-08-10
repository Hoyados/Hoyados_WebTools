(() => {
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('hoyados-theme');
  if (savedTheme) root.dataset.theme = savedTheme;

  if (!document.body.classList.contains('home-page')) {
    const toolMeta = {
      'csv_dashboard.html': ['tool-csv', '01 / ANALYZE', '▦'],
      'sorting_visualizer.html': ['tool-sort', '02 / VISUALIZE', '≋'],
      'bayes_success_estimator.html': ['tool-bayes', '03 / ESTIMATE', 'β'],
      'ddr_flare_gauge.html': ['tool-ddr', '04 / CALCULATE', '♪'],
      'gacha_simulator.html': ['tool-gacha', '05 / SIMULATE', '✦'],
      'roulette.html': ['tool-roulette', '06 / DECIDE', '◎']
    };
    const fileName = location.pathname.split('/').pop() || '';
    const [toolClass = 'tool-generic', toolNumber = 'HOYADOS TOOL', toolIcon = '↗'] = toolMeta[fileName] || [];
    document.body.classList.add('tool-page', toolClass);

    const title = document.querySelector('body h1, body h2');
    if (title) {
      title.classList.add('tool-title');
      let hero = title.parentElement;
      if (hero.matches('.container, .shell')) {
        hero = document.createElement('header');
        hero.className = 'tool-hero';
        title.parentElement.insertBefore(hero, title);
        hero.append(title);
        const description = hero.nextElementSibling;
        if (description?.matches('.lead, .subtitle, .description')) hero.append(description);
      }
      hero.classList.add('tool-hero');
      const eyebrow = document.createElement('p');
      eyebrow.className = 'tool-eyebrow';
      eyebrow.innerHTML = `<span aria-hidden="true"></span>${toolNumber}`;
      hero.insertBefore(eyebrow, title);
      const icon = document.createElement('span');
      icon.className = 'tool-hero-icon';
      icon.setAttribute('aria-hidden', 'true');
      icon.textContent = toolIcon;
      hero.append(icon);
    }

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
