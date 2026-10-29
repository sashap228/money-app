/* Живой режим: мини-апп берёт данные у бота через туннель и сохраняет изменения сразу. */
(function(){
  var tg = window.Telegram && window.Telegram.WebApp;
  var initData = (tg && tg.initData) || '';
  var hp = new URLSearchParams(location.hash.slice(1));
  var hasHashData = !!hp.get('d');
  var api = hp.get('api') || 'https://moneyday.auc9157.workers.dev';
  var live = false;

  function reveal(){ document.body.style.visibility = '' }
  function currentView(){ var v = document.querySelector('.view.on'); return v ? v.id.slice(2) : 'home' }

  function toast(text){
    var el = document.getElementById('toast');
    if(!el){
      el = document.createElement('div'); el.id = 'toast';
      el.style.cssText = 'position:fixed;left:50%;top:14px;transform:translateX(-50%);background:var(--ink);color:var(--bg);' +
        'font-weight:600;font-size:14px;padding:11px 16px;border-radius:14px;z-index:60;opacity:0;transition:opacity .2s;' +
        'pointer-events:none;max-width:90vw;text-align:center;box-shadow:0 8px 30px rgba(0,0,0,.3)';
      document.body.appendChild(el);
    }
    el.textContent = text; el.style.opacity = '1';
    clearTimeout(el._t); el._t = setTimeout(function(){ el.style.opacity = '0' }, 2200);
  }

  function apply(d){
    D = d;
    $('demo').hidden = true;
    var v = currentView();
    document.querySelectorAll('.view').forEach(function(x){ x.classList.toggle('on', x.id === 'v-' + v) });
    window.RENDER[v]();
    window.__live = true;
    if(window.onData) window.onData(d);
    reveal();
  }

  function call(path, body){
    return fetch(api.replace(/\/$/, '') + path, {
      method: body ? 'POST' : 'GET',
      headers: {'Content-Type': 'application/json', 'X-Init-Data': initData},
      body: body ? JSON.stringify(body) : undefined
    }).then(function(r){ if(!r.ok) throw new Error('HTTP ' + r.status); return r.json() });
  }

  function cloudGet(cb){
    try{ tg.CloudStorage.getItem('api', function(err, v){ cb(err ? '' : (v || '')) }) }catch(e){ cb('') }
  }
  function cloudSet(v){ try{ tg.CloudStorage.setItem('api', v) }catch(e){} }

  function offline(){
    reveal();
    if(hasHashData || !inTg) return;
    document.querySelector('.nav').style.display = 'none';
    document.querySelector('.app').innerHTML =
      '<div style="min-height:80vh;display:grid;place-items:center;text-align:center;padding:0 12px">' +
      '<div><div style="font-size:56px">📡</div>' +
      '<h2 style="justify-content:center;font-size:22px;margin:14px 0 8px">Не получилось загрузить</h2>' +
      '<p style="color:var(--soft);font-size:15px;max-width:300px;margin:0 auto">Проверь интернет и попробуй ещё раз. Если не помогло — открой мини-апп кнопкой «Финансы» в чате с ботом.</p>' +
      '<button class="primary" style="margin-top:22px;max-width:300px" id="tryAgain">Попробовать снова</button></div></div>';
    $('tryAgain').onclick = function(){ location.reload() };
  }

  function load(url){
    api = url;
    if(!api || !initData) return offline();
    var tries = 0;
    (function attempt(){
      call('/api/data').then(function(d){ live = true; apply(d) })
        .catch(function(){ if(++tries < 3) setTimeout(attempt, 1500); else offline() });
    })();
  }

  // сохранение: сразу в бота, без закрытия мини-аппа
  var originalSend = send;
  send = function(obj, doneText){
    if(!live) return originalSend(obj, doneText);
    haptic('medium');
    var btn = document.activeElement; if(btn && btn.tagName === 'BUTTON') btn.disabled = true;
    call('/api/act', obj).then(function(d){
      try{ tg.HapticFeedback.notificationOccurred('success') }catch(e){}
      closeSheet(); apply(d); toast(doneText || 'Готово');
    }).catch(function(){
      try{ tg.HapticFeedback.notificationOccurred('error') }catch(e){}
      toast('Не сохранилось, проверь интернет');
    }).then(function(){ if(btn) btn.disabled = false });
  };

  if(api) cloudSet(api);
  if(api && initData) load(api);
  else if(initData) cloudGet(load);
  else reveal();
})();
