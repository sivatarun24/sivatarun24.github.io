*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --cream:    #f6f2eb;
    --ink:      #18181b;
    --ink-soft: #3d3d42;
    --muted:    #8c8c94;
    --green:    #1a6b45;
    --green-lt: #e8f3ed;
    --rule:     #ddd9d0;
    --serif:    'Cormorant Garamond', Georgia, serif;
    --sans:     'Epilogue', sans-serif;
    --mono:     'JetBrains Mono', monospace;
  }
  html { scroll-behavior: smooth; }
  body { background: var(--cream); color: var(--ink); font-family: var(--sans); font-size: 16px; line-height: 1.6; -webkit-font-smoothing: antialiased; }
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: var(--cream); }
  ::-webkit-scrollbar-thumb { background: var(--green); border-radius: 2px; }
  a { color: inherit; text-decoration: none; }

  /* NAV */
  nav { position: fixed; top: 0; left: 0; right: 0; z-index: 200; background: rgba(246,242,235,.92); backdrop-filter: blur(10px); border-bottom: 1px solid var(--rule); }
  .nav-inner { max-width: 980px; margin: 0 auto; padding: 0 2rem; height: 60px; display: flex; justify-content: space-between; align-items: center; }
  .nav-logo { font-family: var(--serif); font-size: 1.2rem; font-weight: 600; }
  .nav-logo em { font-style: italic; color: var(--green); }
  .nav-links { display: flex; gap: 2rem; list-style: none; }
  .nav-links a { font-size: .75rem; font-weight: 500; letter-spacing: .08em; text-transform: uppercase; color: var(--muted); transition: color .2s; }
  .nav-links a:hover, .nav-links a.active { color: var(--ink); }
  .nav-pill { font-family: var(--mono); font-size: .62rem; background: var(--green); color: #fff; padding: .28rem .75rem; border-radius: 100px; letter-spacing: .04em; }
  .nav-wave { display: inline-block; animation: wave 2s ease-in-out infinite; transform-origin: 70% 70%; }
  @keyframes wave { 0%,100%{transform:rotate(0deg)} 20%{transform:rotate(-15deg)} 40%{transform:rotate(14deg)} 60%{transform:rotate(-8deg)} 80%{transform:rotate(8deg)} }

  /* LAYOUT */
  .container { max-width: 980px; margin: 0 auto; padding: 0 2rem; }
  section { padding: 5rem 0; border-bottom: 1px solid var(--rule); }
  section:last-of-type { border-bottom: none; }
  .section-header { margin-bottom: 2.8rem; }
  .section-num { font-family: var(--mono); font-size: .62rem; color: var(--muted); letter-spacing: .15em; text-transform: uppercase; display: block; margin-bottom: .4rem; }
  .section-title { font-family: var(--serif); font-size: clamp(2rem, 4vw, 2.8rem); font-weight: 600; line-height: 1; }

  /* TYPING ANIMATION */
  .typing-wrap { display: flex; align-items: center; gap: .5rem; margin-top: .75rem; }
  .typing-prefix { font-family: var(--mono); font-size: .7rem; color: var(--muted); }
  .typing-text { font-family: var(--mono); font-size: .7rem; color: var(--green); }
  .typing-cursor { display: inline-block; width: 2px; height: .8em; background: var(--green); vertical-align: middle; margin-left: 2px; animation: blink .85s step-end infinite; }
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

  /* CODE CARD */
  .code-card { border: 1px solid var(--rule); border-radius: 6px; overflow: hidden; background: #fff; font-family: var(--mono); font-size: .72rem; margin-top: 1.2rem; }
  .code-bar { background: var(--cream); border-bottom: 1px solid var(--rule); padding: .45rem .9rem; display: flex; align-items: center; gap: .45rem; }
  .code-dot { width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0; }
  .code-filename { font-size: .6rem; color: var(--muted); margin-left: .3rem; letter-spacing: .04em; }
  .code-body { padding: 1rem 1.2rem; line-height: 2; }
  .ln { color: var(--rule); margin-right: .9rem; user-select: none; font-size: .62rem; }
  .kw  { color: #7c4daa; }
  .fn  { color: #1a6b45; }
  .str { color: #b5522a; }
  .cm  { color: #aab0b8; font-style: italic; }
  .nm  { color: #1a5c8a; }

  /* GIT BADGE */
  .git-badge { display: inline-flex; align-items: center; gap: .4rem; font-family: var(--mono); font-size: .6rem; color: var(--muted); padding: .18rem .55rem; border: 1px solid var(--rule); border-radius: 3px; background: var(--cream); margin-bottom: .7rem; }
  .git-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--green); flex-shrink: 0; }

  /* REVEAL */
  .reveal { opacity: 0; transform: translateY(18px); transition: opacity .65s ease, transform .65s ease; }
  .reveal.in { opacity: 1; transform: none; }

  /* HERO */
  #home { padding-top: 120px; padding-bottom: 5rem; }
  .hero-top { display: grid; grid-template-columns: 1fr auto; align-items: end; gap: 2rem; margin-bottom: 2rem; }
  .hero-eyebrow { font-family: var(--mono); font-size: .68rem; color: var(--green); letter-spacing: .12em; text-transform: uppercase; margin-bottom: .9rem; display: flex; align-items: center; gap: .6rem; }
  .hero-eyebrow::before { content: ''; width: 22px; height: 1px; background: var(--green); }
  .hero-name { font-family: var(--serif); font-size: clamp(3rem, 6.5vw, 5.5rem); font-weight: 700; line-height: .92; letter-spacing: -.01em; }
  .hero-name span { font-style: italic; color: var(--green); }
  .hero-sub { font-size: .9rem; color: var(--ink-soft); margin-top: .8rem; }
  .hero-meta { display: flex; gap: 1.2rem; flex-wrap: wrap; font-family: var(--mono); font-size: .66rem; color: var(--muted); align-items: flex-end; }
  .hero-meta-item { display: flex; align-items: center; gap: .35rem; }
  .hero-btns { display: flex; gap: .8rem; flex-wrap: wrap; margin-top: 1.8rem; }
  .btn { display: inline-flex; align-items: center; gap: .45rem; font-family: var(--sans); font-size: .8rem; font-weight: 500; letter-spacing: .03em; padding: .68rem 1.4rem; border-radius: 4px; transition: all .2s; }
  .btn-dark { background: var(--ink); color: var(--cream); }
  .btn-dark:hover { background: #2c2c30; transform: translateY(-1px); box-shadow: 0 4px 14px rgba(0,0,0,.18); }
  .btn-outline { background: transparent; color: var(--ink); border: 1.5px solid var(--rule); }
  .btn-outline:hover { border-color: var(--ink); transform: translateY(-1px); }
  .btn-download { background: var(--green-lt); color: var(--green); border: 1.5px solid var(--green); }
  .btn-download:hover { background: var(--green); color: #fff; transform: translateY(-1px); box-shadow: 0 4px 14px rgba(26,107,69,.2); }

  /* STATS */
  .stats-bar { display: grid; grid-template-columns: repeat(4,1fr); border: 1px solid var(--rule); margin-top: 3rem; background: #fff; border-radius: 6px; overflow: visible; }
  .stat { padding: 1.4rem 1.6rem; border-right: 1px solid var(--rule); }
  .stat:last-child { border-right: none; }
  .stat-n { font-family: var(--serif); font-size: 2.2rem; font-weight: 700; line-height: 1; margin-bottom: .15rem; }
  .stat-n em { font-style: normal; color: var(--green); }
  .stat-l { font-family: var(--mono); font-size: .6rem; color: var(--muted); letter-spacing: .08em; text-transform: uppercase; }

  /* ABOUT */
  .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }
  .about-bio { font-size: .9rem; color: var(--ink-soft); line-height: 1.9; }
  .about-bio p + p { margin-top: 1rem; }
  .edu-card { border: 1px solid var(--rule); border-radius: 6px; padding: 1.8rem; background: #fff; transition: border-color .2s; }
  .edu-card:hover { border-color: var(--green); }
  .edu-label { font-family: var(--mono); font-size: .6rem; color: var(--green); letter-spacing: .12em; text-transform: uppercase; margin-bottom: .9rem; }
  .edu-deg { font-family: var(--serif); font-size: 1.25rem; font-weight: 600; margin-bottom: .25rem; }
  .edu-school { font-size: .83rem; color: var(--muted); margin-bottom: .9rem; }
  .edu-row { display: flex; justify-content: space-between; align-items: center; padding-top: .9rem; border-top: 1px solid var(--rule); }
  .edu-gpa { font-family: var(--serif); font-size: 2rem; font-weight: 700; color: var(--green); line-height: 1; }
  .edu-gpa-l { font-family: var(--mono); font-size: .58rem; color: var(--muted); letter-spacing: .1em; text-transform: uppercase; }
  .edu-dates { font-family: var(--mono); font-size: .65rem; color: var(--muted); }

  /* EXPERIENCE */
  .exp-list { display: grid; gap: 1px; background: var(--rule); border: 1px solid var(--rule); border-radius: 6px; overflow: hidden; }
  .exp-item { background: #fff; padding: 2.2rem 2.5rem; display: grid; grid-template-columns: 200px 1fr; gap: 2.5rem; transition: background .2s; }
  .exp-item:hover { background: #fdfcfa; }
  .exp-company { font-family: var(--serif); font-size: 1.35rem; font-weight: 600; margin-bottom: .25rem; }
  .exp-period { font-family: var(--mono); font-size: .62rem; color: var(--green); letter-spacing: .05em; margin-bottom: .4rem; }
  .exp-badge { display: inline-block; font-family: var(--mono); font-size: .58rem; color: var(--muted); letter-spacing: .07em; text-transform: uppercase; padding: .18rem .55rem; border: 1px solid var(--rule); border-radius: 3px; }
  .exp-title { font-size: .9rem; font-weight: 600; margin-bottom: .3rem; }
  .exp-points { list-style: none; display: grid; gap: .55rem; margin-bottom: 1.1rem; }
  .exp-points li { font-size: .83rem; color: var(--ink-soft); padding-left: 1.1rem; position: relative; line-height: 1.75; }
  .exp-points li::before { content: '-'; position: absolute; left: 0; color: var(--green); font-family: var(--mono); }
  .tags { display: flex; flex-wrap: wrap; gap: .35rem; }
  .tag { font-family: var(--mono); font-size: .6rem; color: var(--muted); padding: .18rem .55rem; background: var(--cream); border: 1px solid var(--rule); border-radius: 3px; letter-spacing: .04em; transition: all .2s; }
  .tag:hover { background: var(--green-lt); color: var(--green); border-color: var(--green); }

  /* SKILLS */
  .skills-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 1px; background: var(--rule); border: 1px solid var(--rule); border-radius: 6px; overflow: hidden; }
  .skill-block { background: #fff; padding: 1.8rem 2.2rem; transition: background .2s; }
  .skill-block:hover { background: #fdfcfa; }
  .skill-cat { font-family: var(--mono); font-size: .6rem; color: var(--green); letter-spacing: .12em; text-transform: uppercase; margin-bottom: 1.1rem; display: flex; align-items: center; gap: .6rem; }
  .skill-cat::after { content: ''; flex: 1; height: 1px; background: var(--rule); }
  .pills { display: flex; flex-wrap: wrap; gap: .38rem; }
  .pill { font-family: var(--mono); font-size: .65rem; padding: .28rem .75rem; background: var(--cream); color: var(--ink-soft); border: 1px solid var(--rule); border-radius: 100px; transition: all .2s; }
  .pill:hover { background: var(--green-lt); color: var(--green); border-color: var(--green); }

  /* LEADERSHIP */
  .lead-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.2rem; }
  .lead-card { background: #fff; border: 1px solid var(--rule); border-radius: 6px; padding: 1.8rem; transition: border-color .2s, transform .2s, box-shadow .2s; }
  .lead-card:hover { border-color: var(--green); transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,.06); }
  .lead-icon { font-size: 1.3rem; margin-bottom: .9rem; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; background: var(--green-lt); border-radius: 8px; }
  .lead-title { font-family: var(--serif); font-size: 1.05rem; font-weight: 600; margin-bottom: .5rem; }
  .lead-desc { font-size: .82rem; color: var(--muted); line-height: 1.8; }
  .lead-metric { display: inline-block; margin-top: .9rem; font-family: var(--mono); font-size: .6rem; color: var(--green); padding: .22rem .65rem; background: var(--green-lt); border-radius: 100px; }

  /* CONTACT */
  .contact-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 4rem; align-items: start; }
  .contact-tagline { font-family: var(--serif); font-size: 1.4rem; font-style: italic; line-height: 1.55; color: var(--ink-soft); margin-bottom: 2rem; }
  .contact-links { display: grid; gap: .55rem; }
  .c-link { display: flex; align-items: center; gap: .9rem; padding: .85rem 1.1rem; background: #fff; border: 1px solid var(--rule); border-radius: 6px; transition: all .2s; color: var(--ink); }
  .c-link:hover { border-color: var(--green); background: var(--green-lt); }
  .c-icon { font-size: .85rem; width: 18px; text-align: center; flex-shrink: 0; }
  .c-lbl { font-family: var(--mono); font-size: .58rem; color: var(--muted); letter-spacing: .1em; text-transform: uppercase; }
  .c-val { font-size: .82rem; font-weight: 500; margin-top: .08rem; }
  .form-card { background: #fff; border: 1px solid var(--rule); border-radius: 6px; padding: 2rem; }
  .form-title { font-family: var(--serif); font-size: 1.2rem; font-weight: 600; margin-bottom: 1.3rem; }
  .form-group { margin-bottom: .9rem; }
  .form-label { display: block; font-family: var(--mono); font-size: .6rem; color: var(--muted); letter-spacing: .1em; text-transform: uppercase; margin-bottom: .38rem; }
  .form-input, .form-textarea { width: 100%; padding: .65rem .95rem; font-family: var(--sans); font-size: .86rem; color: var(--ink); background: var(--cream); border: 1.5px solid var(--rule); border-radius: 4px; outline: none; transition: border-color .2s; resize: none; }
  .form-input:focus, .form-textarea:focus { border-color: var(--green); background: #fff; }
  .form-textarea { min-height: 105px; }
  .form-btn { width: 100%; padding: .8rem; background: var(--ink); color: var(--cream); font-family: var(--sans); font-size: .83rem; font-weight: 500; letter-spacing: .04em; border: none; border-radius: 4px; transition: all .2s; margin-top: .3rem; }
  .form-btn:hover { background: var(--green); transform: translateY(-1px); box-shadow: 0 6px 18px rgba(26,107,69,.22); }
  .form-status { font-size: .76rem; text-align: center; margin-top: .7rem; min-height: 1.1em; }
  .form-status.ok { color: var(--green); }
  .form-status.err { color: #c0392b; }

  /* FOOTER */
  footer { padding: 2.2rem 0; }
  .footer-inner { max-width: 980px; margin: 0 auto; padding: 0 2rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; border-top: 1px solid var(--rule); padding-top: 2.2rem; }
  footer p { font-size: .76rem; color: var(--muted); }
  footer strong { color: var(--ink); font-weight: 500; }
  .footer-code { font-family: var(--mono); font-size: .65rem; color: var(--muted); display: flex; align-items: center; gap: .5rem; }
  .footer-code .cm { color: #aab0b8; font-style: italic; }
  /* #rotateRole { transition: opacity .3s ease; } */
  #rotateRole { transition: opacity .5s ease, transform .5s ease; display: inline-block; }

  /* MOBILE */
  @media (max-width: 760px) {
    .nav-links, .nav-pill { display: none; }
    .hero-top { grid-template-columns: 1fr; }
    .hero-meta { display: none; }
    .stats-bar { grid-template-columns: 1fr 1fr; }
    .stat:nth-child(2) { border-right: none; }
    .about-grid, .exp-item, .contact-grid { grid-template-columns: 1fr; gap: 2rem; }
    .skills-grid { grid-template-columns: 1fr; }
    .lead-grid { grid-template-columns: 1fr; }
    section { padding: 3.5rem 0; }
  }

  @keyframes wiggle { 0%,100%{transform:translateY(-1px) rotate(0deg)} 25%{transform:rotate(-2deg)} 75%{transform:rotate(2deg)} }
  .btn-dark:hover { animation: wiggle .4s ease; }
  .contact-tagline::after { content: ' 👇'; }

  /* REAL TALK CARD */
  #realTalkCard { display:none; margin-top:1.5rem; background:#fff; border:1px solid var(--rule); border-radius:6px; padding:1.5rem; font-size:.82rem; color:var(--ink-soft); line-height:1.9; animation: popIn .5s cubic-bezier(.34,1.56,.64,1) both; }
  @keyframes popIn { from{opacity:0;transform:scale(.85) translateY(10px)} to{opacity:1;transform:scale(1) translateY(0)} }

  @keyframes confettiFall { to { transform: translateY(100vh) rotate(720deg); opacity: 0; } }