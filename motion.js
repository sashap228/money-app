/* Минималистичные анимации интерфейса. Отключаются, если в системе включено «Уменьшение движения». */
(function(){
  if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var css =
    '@keyframes m-up{from{opacity:0;transform:translateY(10px)}}' +
    '@keyframes m-pop{from{opacity:0;transform:scale(.6)}}' +
    '@keyframes m-grow{from{transform:scaleY(0)}}' +
    '@keyframes m-shine{0%{transform:translateX(-120%)}22%,100%{transform:translateX(120%)}}' +
    '@keyframes m-tab{0%{transform:scale(.55)}60%{transform:scale(1.12)}100%{transform:scale(1)}}' +
    '@keyframes m-bump{0%{transform:scale(1)}40%{transform:scale(1.07)}100%{transform:scale(1)}}' +
    '@keyframes m-breathe{0%,100%{box-shadow:0 10px 30px -6px rgba(157,251,139,.55),inset 0 1px 0 rgba(255,255,255,.6)}50%{box-shadow:0 10px 38px -2px rgba(157,251,139,.85),inset 0 1px 0 rgba(255,255,255,.6)}}' +
    '.tx,.dh,.crow,.fact,.wcard,.empty{animation:m-up .45s cubic-bezier(.2,.8,.2,1) both;animation-delay:calc(var(--i,0) * 40ms)}' +
    '.cal .c{animation:m-pop .35s cubic-bezier(.3,1.4,.5,1) both;animation-delay:calc(var(--i,0) * 9ms)}' +
    '.bars .b{transform-origin:50% 100%;animation:m-grow .6s cubic-bezier(.2,.8,.2,1) both;animation-delay:calc(var(--i,0) * 14ms)}' +
    '.hero:before,.wcard.by:before{content:"";position:absolute;inset:0;pointer-events:none;z-index:2;' +
      'background:linear-gradient(105deg,transparent 38%,rgba(255,255,255,.38) 50%,transparent 62%);transform:translateX(-120%);animation:m-shine 7s ease-in-out 1.4s infinite}' +
    '.chip,.tx,.pill,.t,.kind button,.wcard button,.pad button,.primary,.danger,.plus{transition:transform .18s cubic-bezier(.3,1.4,.5,1),background .2s,color .2s,box-shadow .2s}' +
    '.chip:active,.tx:active,.pill:active,.kind button:active,.wcard button:active,.pad button:active{transform:scale(.95)}' +
    '.t:active{transform:scale(.88)}.t.on svg{animation:m-tab .45s cubic-bezier(.3,1.4,.5,1)}' +
    '.plus{animation:m-breathe 3.2s ease-in-out infinite}.plus svg{transition:transform .35s cubic-bezier(.3,1.4,.5,1)}.plus:active svg{transform:rotate(90deg)}' +
    '#amt.m-bump{animation:m-bump .22s ease-out}' +
    '.sheet.on>*{animation:m-up .4s cubic-bezier(.2,.8,.2,1) both;animation-delay:calc(var(--i,0) * 35ms + 60ms)}' +
    '#toast{transition:opacity .25s,transform .35s cubic-bezier(.3,1.4,.5,1)!important}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  // порядковые номера для «волны»
  function index(root, sel){ var els = root.querySelectorAll(sel); for (var i = 0; i < els.length; i++) els[i].style.setProperty('--i', Math.min(i, 16)); }
  function indexAll(root, sel, cap){ var els = root.querySelectorAll(sel); for (var i = 0; i < els.length; i++) els[i].style.setProperty('--i', Math.min(i, cap || 40)); }

  // счётчик: целая часть числа набирается от нуля
  var RX = /^(\D*?)(\d(?:[\d   ]*\d)?)([\s\S]*)$/;
  function countUp(el){
    if (!el) return;
    var w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT), node;
    while ((node = w.nextNode())) { if (/\d/.test(node.data)) break; }
    if (!node) return;
    var m = node.data.match(RX); if (!m) return;
    var target = parseInt(m[2].replace(/\D/g, ''), 10);
    if (!(target >= 3) || el.__last === node.data) return;
    var pre = m[1], post = m[3], start = performance.now(), dur = Math.min(900, 450 + target / 20), final = node.data;
    el.__last = final;
    (function step(t){
      var k = Math.min(1, (t - start) / dur), e = 1 - Math.pow(1 - k, 3);
      if (!node.isConnected) return;
      node.data = k < 1 ? pre + Math.round(target * e).toLocaleString('ru-RU') + post : final;
      if (k < 1) requestAnimationFrame(step);
    })(start);
  }

  // кольцо статистики прорисовывается по сегментам
  function drawDonut(svg){
    var cs = svg.querySelectorAll('circle');
    for (var i = 1; i < cs.length; i++) (function(c, i){
      var to = c.getAttribute('stroke-dasharray'); if (!to) return;
      var C = to.split(' ')[1] || 600;
      c.style.transition = 'none'; c.style.strokeDasharray = '0 ' + C;
      requestAnimationFrame(function(){ requestAnimationFrame(function(){
        c.style.transition = 'stroke-dasharray .9s cubic-bezier(.2,.8,.2,1) ' + (i * 90) + 'ms'; c.style.strokeDasharray = to;
      }); });
    })(cs[i], i);
  }

  function watch(id, fn, opts){
    var el = document.getElementById(id); if (!el) return;
    new MutationObserver(function(){ fn(el) }).observe(el, opts || {childList: true});
    fn(el);
  }

  watch('recent', function(el){ indexAll(el, '.tx, .dh, .empty', 12) });
  watch('histList', function(el){ indexAll(el, '.tx, .dh, .empty', 14) });
  watch('cal', function(el){ index(el, '.c') });
  watch('bars', function(el){ index(el, '.b') });
  watch('allCats', function(el){ index(el, '.crow') });
  watch('facts', function(el){ index(el, '.fact') });
  watch('wCards', function(el){ index(el, '.wcard'); el.querySelectorAll('.wb').forEach(countUp) });
  watch('donut', drawDonut);
  ['todayBig', 'donutSum', 'wTotal', 'incV', 'expV'].forEach(function(id){ watch(id, countUp) });
  watch('amt', function(el){ el.classList.remove('m-bump'); void el.offsetWidth; el.classList.add('m-bump') });

  document.querySelectorAll('.sheet').forEach(function(s){ [].forEach.call(s.children, function(c, i){ c.style.setProperty('--i', i) }) });

  // всплывашка выезжает сверху
  new MutationObserver(function(){
    var t = document.getElementById('toast'); if (!t || t.__m) return; t.__m = 1;
    new MutationObserver(function(){ var v = 'translateX(-50%) translateY(' + (t.style.opacity === '1' ? '0' : '-12px') + ')'; if (t.style.transform !== v) t.style.transform = v })
      .observe(t, {attributes: true, attributeFilter: ['style']});
  }).observe(document.body, {childList: true});
})();
