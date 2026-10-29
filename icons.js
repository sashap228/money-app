/* Анимированные иконки категорий для мини-аппа «Мои финансы». */
(function(){
  var I = {
    'Продукты': ['#7ef29a', '#1fae63',
      '<path d="M7.5 10 10 5M16.5 10 14 5"/><path d="M3.5 10h17l-1.6 8.3a2 2 0 0 1-2 1.7H7.1a2 2 0 0 1-2-1.7z"/>' +
      '<circle class="f bob" cx="12" cy="7.3" r="1.9"/><path d="M9 14v2.5M12 14v2.5M15 14v2.5"/>'],
    'Кафе и доставка': ['#ffc078', '#ff5e57',
      '<path d="M4.5 11h11v3.5a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5z"/><path d="M15.5 12h1.3a2.6 2.6 0 0 1 0 5.2h-1.6"/>' +
      '<path class="steam" d="M7.5 7.5c-.9-1.2.9-2 0-3.3"/><path class="steam d1" d="M10.5 7.5c-.9-1.2.9-2 0-3.3"/><path class="steam d2" d="M13.5 7.5c-.9-1.2.9-2 0-3.3"/>'],
    'Транспорт': ['#7dd3fc', '#2563eb',
      '<g class="bounce"><path d="M3 15.5 5 10a2 2 0 0 1 1.9-1.4h10.2A2 2 0 0 1 19 10l2 5.5V18H3z"/><path d="M3 14h18"/></g>' +
      '<circle class="f" cx="7.2" cy="18.6" r="1.9"/><circle class="f" cx="16.8" cy="18.6" r="1.9"/>' +
      '<path class="speed" d="M.5 9h2.3M0 12h1.8"/>'],
    'Подписки': ['#d8b4fe', '#7c3aed',
      '<rect x="2.5" y="5" width="19" height="12.5" rx="3"/><path d="M8.5 21h7"/>' +
      '<path class="f beat" d="M10 8.6v5.3l4.6-2.65z"/>'],
    'Связь': ['#5eead4', '#0d9488',
      '<rect x="4" y="3" width="9" height="18" rx="2.4"/><path d="M7.5 18h2"/>' +
      '<path class="wave" d="M16 9.3a3.6 3.6 0 0 1 0 5.4"/><path class="wave d1" d="M18.6 7a7 7 0 0 1 0 10"/>'],
    'Игры': ['#f9a8d4', '#a21caf',
      '<path d="M6.5 7.5h11a4.5 4.5 0 0 1 4.4 5.4l-.8 3.8a2.4 2.4 0 0 1-4.2 1L15 15.5H9l-1.9 2.2a2.4 2.4 0 0 1-4.2-1l-.8-3.8a4.5 4.5 0 0 1 4.4-5.4z"/>' +
      '<path d="M7.5 10.5v3.2M5.9 12.1h3.2"/><circle class="f blink" cx="15.6" cy="11" r="1.05"/><circle class="f blink d1" cx="17.8" cy="13.1" r="1.05"/>'],
    'Одежда': ['#fda4af', '#e11d48',
      '<path class="sway" d="M8.4 3.5 3 6.3l2 4.2 2.2-1V20h9.6V9.5l2.2 1 2-4.2-5.4-2.8a3.6 3.6 0 0 1-7.2 0z"/>'],
    'Здоровье': ['#fda4af', '#dc2626',
      '<path class="beat" d="M12 20.3s-7.8-4.6-7.8-10.6A4.3 4.3 0 0 1 12 7.2a4.3 4.3 0 0 1 7.8 2.5c0 6-7.8 10.6-7.8 10.6z"/>' +
      '<path class="pulse" d="M6.5 12.3h2.3l1.4-2.4 2.2 4.8 1.5-2.4h3.6"/>'],
    'Развлечения': ['#fde68a', '#f59e0b',
      '<path class="spin" d="m12 3.2 2.5 5.2 5.7.8-4.1 4 1 5.7L12 16.2l-5.1 2.7 1-5.7-4.1-4 5.7-.8z"/>' +
      '<path class="tw" d="M20 2.5v3M18.5 4h3"/><path class="tw d1" d="M3.5 17v2.6M2.2 18.3h2.6"/>'],
    'Учёба': ['#a5b4fc', '#4f46e5',
      '<path d="M12 6.3C10 4.8 6.7 4.2 3.5 4.7v13.5c3.2-.5 6.5.1 8.5 1.6 2-1.5 5.3-2.1 8.5-1.6V4.7c-3.2-.5-6.5.1-8.5 1.6z"/><path d="M12 6.3v13.5"/>' +
      '<path class="flip" d="M12 6.3c1.6-1.1 3.8-1.6 6-1.6v12.6c-2.2 0-4.4.5-6 1.6"/>'],
    'Жильё': ['#fcd34d', '#d97706',
      '<path d="M3.5 11 12 3.8l8.5 7.2V20h-17z"/><path d="M9.8 20v-5h4.4v5"/>' +
      '<path class="smoke" d="M16.8 5.2c.8-.9-.6-1.6.2-2.6"/><rect class="f glow" x="14.9" y="11.2" width="2.4" height="2.4" rx=".5"/>'],
    'Подарки': ['#f9a8d4', '#db2777',
      '<path d="M4.5 11.5h15V20h-15z"/><path d="M12 11.5V20"/>' +
      '<g class="lid"><path d="M3.5 8.2h17v3.3h-17z"/><path d="M12 8.2c-1.6-3.4-5.6-3.2-4.3-.4M12 8.2c1.6-3.4 5.6-3.2 4.3-.4"/></g>'],
    'Крипта и комиссии': ['#99f6a8', '#0f9f8a',
      '<g class="float"><path d="M6.5 4h11l3.6 5L12 20.5 2.9 9z"/><path d="M2.9 9h18.2M9.3 4 7.6 9 12 20.5 16.4 9l-1.7-5"/></g>' +
      '<path class="tw" d="M20.5 15.5v2.8M19.1 16.9h2.8"/>'],
    'Другое': ['#cbd5e1', '#475569',
      '<g class="wobble"><path d="M3.5 7.8 12 3.5l8.5 4.3v8.4L12 20.5l-8.5-4.3z"/><path d="M3.5 7.8 12 12l8.5-4.2M12 12v8.5"/></g>'],
    'Зарплата': ['#a7f3a0', '#16a34a',
      '<g class="slide"><rect x="2.5" y="6.5" width="19" height="11" rx="2"/><circle cx="12" cy="12" r="2.7"/><path d="M6 10v4M18 10v4"/></g>'],
    'Реклама и каналы': ['#fdba74', '#ea580c',
      '<path d="M3.5 10v4h3l7.5 4.3V5.7L6.5 10z"/><path d="M6.5 14v4.2"/>' +
      '<path class="wave" d="M17 9.4a3.6 3.6 0 0 1 0 5.2"/><path class="wave d1" d="M19.4 7.2a6.8 6.8 0 0 1 0 9.6"/>'],
    'Крипта': ['#99f6a8', '#0f9f8a',
      '<g class="float"><path d="M6.5 4h11l3.6 5L12 20.5 2.9 9z"/><path d="M2.9 9h18.2M9.3 4 7.6 9 12 20.5 16.4 9l-1.7-5"/></g>' +
      '<path class="tw" d="M20.5 15.5v2.8M19.1 16.9h2.8"/>'],
    'Подарок': ['#f9a8d4', '#db2777',
      '<path d="M4.5 11.5h15V20h-15z"/><path d="M12 11.5V20"/>' +
      '<g class="lid"><path d="M3.5 8.2h17v3.3h-17z"/><path d="M12 8.2c-1.6-3.4-5.6-3.2-4.3-.4M12 8.2c1.6-3.4 5.6-3.2 4.3-.4"/></g>'],
    'Другой доход': ['#fde68a', '#ca8a04',
      '<ellipse cx="12" cy="17.5" rx="7" ry="2.5"/><path d="M5 14.5c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5"/><ellipse cx="12" cy="14.5" rx="7" ry="2.5"/>' +
      '<g class="drop"><ellipse cx="12" cy="6" rx="4" ry="1.5"/><path d="M8 6v1.6c0 .8 1.8 1.5 4 1.5s4-.7 4-1.5V6"/></g>'],
    'GRAM': ['#7dd3fc', '#0e7490',
      '<g class="float"><path d="M6.5 4h11l3.6 5L12 20.5 2.9 9z"/><path d="M2.9 9h18.2M9.3 4 7.6 9 12 20.5 16.4 9l-1.7-5"/></g>' +
      '<path class="tw" d="M20.5 15.5v2.8M19.1 16.9h2.8"/><path class="tw d1" d="M3.5 17v2.4M2.3 18.2h2.4"/>'],
    'BYN': ['#bbf7d0', '#15803d',
      '<g class="coin"><circle cx="12" cy="12" r="8.6"/><circle cx="12" cy="12" r="6.2" opacity=".45"/>' +
      '<text x="12" y="15.4" text-anchor="middle" class="tx">Br</text></g>'],
    'RUB': ['#ddd6fe', '#6d28d9',
      '<g class="coin"><circle cx="12" cy="12" r="8.6"/><circle cx="12" cy="12" r="6.2" opacity=".45"/>' +
      '<path d="M10 16.7V7.6h3a2.3 2.3 0 0 1 0 4.6h-4.4M8.6 14.5h4.4"/></g>'],
    'USD': ['#d9f99d', '#4d7c0f',
      '<g class="coin"><circle cx="12" cy="12" r="8.6"/><circle cx="12" cy="12" r="6.2" opacity=".45"/>' +
      '<text x="12" y="15.4" text-anchor="middle" class="tx" style="font-size:9px">$</text></g>'],
    'EUR': ['#bfdbfe', '#1d4ed8',
      '<g class="coin"><circle cx="12" cy="12" r="8.6"/><circle cx="12" cy="12" r="6.2" opacity=".45"/>' +
      '<text x="12" y="15.4" text-anchor="middle" class="tx" style="font-size:9px">€</text></g>'],
    'UAH': ['#fde68a', '#b45309',
      '<g class="coin"><circle cx="12" cy="12" r="8.6"/><circle cx="12" cy="12" r="6.2" opacity=".45"/>' +
      '<text x="12" y="15.4" text-anchor="middle" class="tx" style="font-size:9px">₴</text></g>'],
    'KZT': ['#a5f3fc', '#0e7490',
      '<g class="coin"><circle cx="12" cy="12" r="8.6"/><circle cx="12" cy="12" r="6.2" opacity=".45"/>' +
      '<text x="12" y="15.4" text-anchor="middle" class="tx" style="font-size:9px">₸</text></g>'],
    'PLN': ['#fecaca', '#b91c1c',
      '<g class="coin"><circle cx="12" cy="12" r="8.6"/><circle cx="12" cy="12" r="6.2" opacity=".45"/>' +
      '<text x="12" y="15.4" text-anchor="middle" class="tx">zł</text></g>']
  };

  var css =
    '.ai{display:inline-grid;place-items:center;flex:none;width:1.45em;height:1.45em;vertical-align:-.38em;border-radius:31%;position:relative;overflow:hidden;' +
    'background:linear-gradient(145deg,var(--a),var(--b));box-shadow:inset 0 1px 0 rgba(255,255,255,.4),inset 0 -2px 6px rgba(0,0,0,.12),0 6px 16px -8px var(--b)}' +
    '.ai:before{content:"";position:absolute;inset:0;background:radial-gradient(90% 60% at 25% 0%,rgba(255,255,255,.45),transparent 60%);pointer-events:none}' +
    '.ai svg{width:64%;height:64%;overflow:visible;fill:none;stroke:#fff;stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round;position:relative;filter:drop-shadow(0 1px 1px rgba(0,0,0,.18))}' +
    '.ai .f{fill:#fff;stroke:none}.ai .tx{fill:#fff;stroke:none;font:800 7.5px Onest,system-ui,sans-serif}' +
    '.ai svg *{transform-box:fill-box;transform-origin:center}' +
    '.ai .d1{animation-delay:.35s!important}.ai .d2{animation-delay:.7s!important}' +
    '.ai .bob{animation:ai-bob 1.8s ease-in-out infinite}' +
    '.ai .steam{animation:ai-steam 2.1s ease-in-out infinite;opacity:0}' +
    '.ai .bounce{animation:ai-bounce .9s ease-in-out infinite}' +
    '.ai .speed{animation:ai-speed .9s linear infinite}' +
    '.ai .beat{animation:ai-beat 1.4s ease-in-out infinite}' +
    '.ai .wave{animation:ai-wave 1.6s ease-in-out infinite}' +
    '.ai .blink{animation:ai-blink 1.2s steps(2) infinite}' +
    '.ai .sway{transform-origin:50% 0;animation:ai-sway 2.4s ease-in-out infinite}' +
    '.ai .pulse{stroke-dasharray:22;animation:ai-pulse 1.8s linear infinite}' +
    '.ai .spin{animation:ai-spin 4s ease-in-out infinite}' +
    '.ai .tw{animation:ai-tw 1.6s ease-in-out infinite}' +
    '.ai .flip{transform-origin:0 50%;animation:ai-flip 2.6s ease-in-out infinite}' +
    '.ai .smoke{animation:ai-steam 2.4s ease-in-out infinite;opacity:0}' +
    '.ai .glow{animation:ai-glow 2.2s ease-in-out infinite}' +
    '.ai .lid{animation:ai-lid 1.8s ease-in-out infinite}' +
    '.ai .float{animation:ai-bob 2.2s ease-in-out infinite}' +
    '.ai .wobble{animation:ai-wobble 2.6s ease-in-out infinite}' +
    '.ai .slide{animation:ai-slide 2s ease-in-out infinite}' +
    '.ai .drop{animation:ai-drop 1.8s cubic-bezier(.5,0,.5,1) infinite}' +
    '.ai .coin{animation:ai-coin 3s ease-in-out infinite}' +
    '@keyframes ai-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-1.4px)}}' +
    '@keyframes ai-steam{0%{transform:translateY(1.5px);opacity:0}35%{opacity:1}100%{transform:translateY(-2.5px);opacity:0}}' +
    '@keyframes ai-bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-1px)}}' +
    '@keyframes ai-speed{0%{transform:translateX(1.5px);opacity:0}50%{opacity:1}100%{transform:translateX(-2px);opacity:0}}' +
    '@keyframes ai-beat{0%,40%,100%{transform:scale(1)}15%{transform:scale(1.14)}28%{transform:scale(.96)}}' +
    '@keyframes ai-wave{0%,100%{opacity:.25}50%{opacity:1}}' +
    '@keyframes ai-blink{0%{opacity:1}100%{opacity:.35}}' +
    '@keyframes ai-sway{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(5deg)}}' +
    '@keyframes ai-pulse{0%{stroke-dashoffset:22}60%,100%{stroke-dashoffset:0}}' +
    '@keyframes ai-spin{0%,60%{transform:rotate(0) scale(1)}80%{transform:rotate(72deg) scale(1.08)}100%{transform:rotate(72deg) scale(1)}}' +
    '@keyframes ai-tw{0%,100%{transform:scale(.3);opacity:.2}50%{transform:scale(1);opacity:1}}' +
    '@keyframes ai-flip{0%,55%,100%{transform:scaleX(1)}75%{transform:scaleX(-1)}}' +
    '@keyframes ai-glow{0%,100%{opacity:1}50%{opacity:.45}}' +
    '@keyframes ai-lid{0%,60%,100%{transform:translateY(0) rotate(0)}70%{transform:translateY(-2.2px) rotate(-7deg)}82%{transform:translateY(-.6px) rotate(3deg)}}' +
    '@keyframes ai-wobble{0%,100%{transform:rotate(0)}25%{transform:rotate(-6deg)}75%{transform:rotate(6deg)}}' +
    '@keyframes ai-slide{0%,100%{transform:translateY(.8px)}50%{transform:translateY(-1.2px)}}' +
    '@keyframes ai-drop{0%{transform:translateY(-5px);opacity:0}30%{opacity:1}70%,100%{transform:translateY(0);opacity:1}}' +
    '@keyframes ai-coin{0%,70%,100%{transform:scaleX(1)}85%{transform:scaleX(-1)}}' +
    '@media (prefers-reduced-motion:reduce){.ai *{animation:none!important;opacity:1!important}}';

  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  window.ICON = function(c){
    var s = String(c), sp = s.indexOf(' '), name = sp > 0 ? s.slice(sp + 1) : s;
    var d = I[name] || I[s];
    if(!d) return '<span class="ai" style="--a:#cbd5e1;--b:#475569;font-size:inherit"><span style="font-size:.8em">' + (sp > 0 ? s.slice(0, sp) : s) + '</span></span>';
    return '<span class="ai" style="--a:' + d[0] + ';--b:' + d[1] + '"><svg viewBox="0 0 24 24" aria-hidden="true">' + d[2] + '</svg></span>';
  };
})();
