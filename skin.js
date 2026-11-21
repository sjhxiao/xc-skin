/* 星辰 AI 小店 · 换肤脚本
 * 用法：把本文件放到可公开访问的地址，后台字段填一行 script 引用（src 指向本文件）
 * 回滚：删掉后台那行引用即可，页面立即恢复原样
 */
(function () {
  if (window.__xc) return;
  window.__xc = 1;

  try {
    var STYLE_ID = 'xc-theme-style';
    if (!document.getElementById(STYLE_ID)) {
      var style = document.createElement('style');
      style.id = STYLE_ID;
      style.textContent = `
/* 卡片 */
.cream-waterfall-card {
  position: relative !important;
  isolation: isolate !important;
  overflow: hidden !important;
  display: flex !important;
  flex-direction: column !important;
  background: linear-gradient(180deg, var(--xc-card-top), var(--xc-card-bot)) !important;
  border: 1px solid var(--xc-card-border) !important;
  border-radius: var(--xc-card-radius) !important;
  box-shadow: 0 10px 26px rgba(12, 12, 17, 0.16) !important;
  color: var(--xc-text-main) !important;
  text-decoration: none !important;
  transition: transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease !important;
}
.cream-waterfall-card::before {
  content: "" !important;
  position: absolute !important;
  inset: 0 !important;
  z-index: -1 !important;
  pointer-events: none !important;
  background: radial-gradient(circle at 50% 34%, var(--xc-glow, var(--xc-glow-default)) 0%, transparent 72%) !important;
  opacity: var(--xc-glow-opacity) !important;
  transition: opacity 0.22s ease !important;
}
.cream-waterfall-card:hover {
  transform: translateY(-3px) !important;
  border-color: var(--xc-glow, var(--xc-glow-default)) !important;
  box-shadow: 0 14px 32px rgba(12, 12, 17, 0.26) !important;
}
.cream-waterfall-card:hover::before { opacity: var(--xc-glow-hover-opacity) !important; }
.cream-waterfall-card.xc-pro::after {
  content: "PRO" !important;
  position: absolute !important; top: 10px !important; left: 10px !important; z-index: 2 !important;
  pointer-events: none !important; padding: 2px 8px !important; border-radius: 999px !important;
  background: linear-gradient(135deg, #5B8CFF, #8B5CF6) !important; color: #FFFFFF !important;
  font-size: 10px !important; font-weight: 700 !important; letter-spacing: 0.06em !important;
  line-height: 1.4 !important; box-shadow: 0 2px 8px rgba(91, 140, 255, 0.35) !important;
}
.cream-waterfall-info {
  display: flex !important; flex-direction: column !important; flex: 1 1 auto !important;
  gap: 8px !important; padding: 12px 14px 14px !important; box-sizing: border-box !important;
}
.cream-waterfall-name {
  display: -webkit-box !important; -webkit-line-clamp: 2 !important; -webkit-box-orient: vertical !important;
  overflow: hidden !important; text-overflow: ellipsis !important; word-break: break-word !important;
  white-space: normal !important; max-width: 100% !important;
  color: var(--xc-text-main) !important; font-size: 13.5px !important; font-weight: 600 !important;
  line-height: 1.45 !important; min-height: 2.9em !important;
}
.cream-waterfall-price {
  display: block !important; margin-top: auto !important; color: var(--xc-gold) !important;
  font-size: 22px !important; font-weight: 700 !important; line-height: 1.1 !important; letter-spacing: -0.02em !important;
}
@keyframes xcCardEnter { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
.cream-waterfall-card.xc-card { animation: xcCardEnter 0.28s ease both !important; }

/* 封面 */
.cream-waterfall-cover {
  display: block !important; width: 100% !important; min-width: 100% !important; max-width: 100% !important;
  height: auto !important; min-height: 160px !important; max-height: 360px !important; aspect-ratio: 1 / 1 !important;
  padding: 14% !important; box-sizing: border-box !important; background-color: var(--xc-cover-bg) !important;
  background-size: contain !important; background-position: center center !important; background-repeat: no-repeat !important;
  background-origin: content-box !important; background-clip: padding-box !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05) !important;
}
.cream-waterfall-cover.xc-light { background-color: var(--xc-light-cover-bg) !important; }

/* 分类砖 */
.tokyo-category-node, .tokyo-category-row { width: 100% !important; }
.tokyo-category-link {
  position: relative !important; isolation: isolate !important; overflow: hidden !important;
  display: flex !important; align-items: center !important; gap: 10px !important; width: 100% !important;
  height: 52px !important; min-height: 52px !important; max-height: 52px !important; padding: 0 12px !important;
  box-sizing: border-box !important; background-color: var(--xc-cat-bg) !important;
  background-image: linear-gradient(180deg, rgba(21, 21, 27, 0.05), rgba(21, 21, 27, 0.05)) !important;
  background-repeat: no-repeat !important; background-position: bottom center !important; background-size: 100% 0% !important;
  border: 1px solid var(--xc-cat-border) !important; border-radius: var(--xc-cat-radius) !important; text-align: left !important;
  transition: background-size 0.2s ease, border-color 0.2s ease, background-color 0.2s ease, color 0.2s ease !important;
  margin-bottom: 8px !important;
}
.tokyo-category-link::before {
  content: "" !important; position: absolute !important; inset: 0 !important; z-index: -1 !important; pointer-events: none !important;
  background: radial-gradient(circle at 27px 50%, var(--xc-glow, var(--xc-glow-default)) 0%, transparent 56%) !important;
  opacity: var(--xc-cat-glow-opacity) !important;
}
.tokyo-category-link:hover { background-size: 100% 100% !important; border-color: var(--tokyo-border-strong, #D5CCB8) !important; }
.tokyo-category-icon {
  display: inline-block !important; flex: 0 0 30px !important; width: 30px !important; min-width: 30px !important; max-width: 30px !important;
  height: 30px !important; min-height: 30px !important; max-height: 30px !important; padding: 4px !important; box-sizing: border-box !important;
  border-radius: 9px !important; background-color: transparent !important; background-size: contain !important;
  background-position: center center !important; background-repeat: no-repeat !important; background-origin: content-box !important;
  box-shadow: none !important;
}
.tokyo-category-icon.xc-light { background-color: var(--xc-light-cover-bg) !important; }
.tokyo-category-copy { display: flex !important; align-items: center !important; justify-content: space-between !important; flex: 1 1 auto !important; min-width: 0 !important; gap: 8px !important; }
.tokyo-category-name { font-size: 12.5px !important; font-weight: 600 !important; color: var(--cream-ink, #1D1D24) !important; overflow: hidden !important; text-overflow: ellipsis !important; white-space: nowrap !important; }
.tokyo-category-side { display: inline-flex !important; align-items: center !important; flex-shrink: 0 !important; }
.tokyo-category-count { display: inline-block !important; font-size: 11px !important; font-weight: 600 !important; line-height: 1.2 !important; padding: 2px 7px !important; border-radius: 999px !important; background: rgba(21, 21, 27, 0.08) !important; color: var(--tokyo-text, #55524B) !important; }
body .tokyo-category-link.is-active,
body .tokyo-category-link.active,
body .tokyo-category-link[aria-selected="true"] {
  background-color: #15151B !important; background-image: none !important;
  border-color: #2A2A35 !important; box-shadow: 0 6px 16px rgba(21, 21, 27, 0.18) !important;
}
body .tokyo-category-link.is-active .tokyo-category-name,
body .tokyo-category-link.active .tokyo-category-name { color: #F5C242 !important; }
.tokyo-nav-link { background-image: linear-gradient(90deg, var(--xc-gold), var(--xc-gold)) !important; background-repeat: no-repeat !important; background-position: left bottom !important; background-size: 100% 0% !important; transition: background-size 0.2s ease, color 0.2s ease !important; }
.tokyo-nav-link:hover { background-size: 100% 2px !important; }

/* 公告弹窗：只改背景色，其余一切不动 */
.tokyo-notice-trigger {
  background-color: #F3EDE0 !important;
  color: #1D1D24 !important;
  border: 1px solid #E4DBC8 !important;
  border-radius: 999px !important;
}
.tokyo-notice-trigger * { color: #1D1D24 !important; fill: #1D1D24 !important; }
#tokyo-notice-popup,
#tokyo-notice-popup > div,
#tokyo-notice-popup > * > div:first-child {
  background-color: var(--xc-flat-bg) !important;
}

/* 商品详情页：只改背景色，其余一切不动 */
.panel.tokyo-item-panel,
.panel.tokyo-item-panel > div,
.panel.tokyo-item-panel .panel-body {
  background-color: var(--xc-flat-bg) !important;
}
.panel.tokyo-item-panel .card,
.panel.tokyo-item-panel [class*="panel"] {
  background-color: var(--xc-flat-bg) !important;
}

/* 详情页主图：加暗底，让透明底的白 logo 显示出来，和列表卡片一致 */
.tokyo-item-panel .tokyo-item-cover-card,
.tokyo-item-panel .tokyo-item-cover-trigger,
.tokyo-item-panel .item-cover {
  background-color: #0B0B10 !important;
}

/* 手机端适配（≤768px）：卡片与分类砖整体收一档 */
@media (max-width: 768px) {
  .cream-waterfall-card { border-radius: 13px !important; }
  .cream-waterfall-card.xc-pro::after {
    font-size: 9px !important; padding: 1px 6px !important;
    top: 7px !important; left: 7px !important;
  }
  .cream-waterfall-cover {
    min-height: 0 !important; max-height: none !important; padding: 11% !important;
  }
  .cream-waterfall-info { padding: 10px 11px 12px !important; gap: 6px !important; }
  .cream-waterfall-name {
    font-size: 12.5px !important; line-height: 1.4 !important; min-height: 2.8em !important;
  }
  .cream-waterfall-price { font-size: 18px !important; }

  .tokyo-category-link {
    height: 46px !important; min-height: 46px !important; max-height: 46px !important;
    padding: 0 10px !important; gap: 8px !important; margin-bottom: 7px !important;
  }
  .tokyo-category-icon {
    flex: 0 0 26px !important;
    width: 26px !important; min-width: 26px !important; max-width: 26px !important;
    height: 26px !important; min-height: 26px !important; max-height: 26px !important;
    padding: 3px !important; border-radius: 8px !important;
    box-shadow: none !important;
  }
  .tokyo-category-name { font-size: 12px !important; }
  .tokyo-category-count { font-size: 10px !important; padding: 1px 6px !important; }
}

@media (prefers-reduced-motion: reduce) {
  .cream-waterfall-card, .cream-waterfall-card::before, .cream-waterfall-card.xc-card, .tokyo-category-link, .tokyo-nav-link {
    animation: none !important; transition: none !important; transform: none !important; opacity: 1 !important;
  }
}

/* 手机端分类胶囊 */
@media (max-width: 768px) {
  .tokyo-mobile-category-chip {
    background-color: #FBF9F4 !important;
    border: 1px solid #E9E3D6 !important;
    border-radius: 12px !important;
  }
  .tokyo-mobile-category-chip-icon {
    background-color: transparent !important;
    background-size: contain !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
  }
  .tokyo-mobile-category-chip.is-active {
    background-color: #15151B !important;
    border-color: #2A2A35 !important;
  }
  .tokyo-mobile-category-chip.is-active .tokyo-mobile-category-chip-text {
    color: #F5C242 !important;
  }
}

/* 调参区 */
:root {
  --xc-card-top: #14141A; --xc-card-bot: #0C0C11; --xc-card-border: #24242C; --xc-card-radius: 16px;
  --xc-cover-bg: rgba(8, 8, 12, 0.55); --xc-light-cover-bg: #F6F3EC; --xc-text-main: #F3F3F8; --xc-gold: #F5C242;
  --xc-glow-default: #6E7B91; --xc-glow-opacity: 0.62; --xc-glow-hover-opacity: 0.76;
  --xc-cat-bg: #FBF9F4; --xc-cat-border: #E9E3D6; --xc-cat-radius: 13px; --xc-cat-active-bg: #15151B;
  --xc-cat-glow-opacity: 0.28; --xc-cat-active-glow-opacity: 0.45;
  /* 公告弹窗 / 商品详情页的背景色：只改这一个值
     暖米 #F3EDE0（默认，文字仍清晰）
     纸白 #FFFFFF（和原站一样，等于没改）
     浅灰 #EFF1F4（偏冷） */
  --xc-flat-bg: #F3EDE0;
}
`;
      (document.head || document.documentElement).appendChild(style);
    }

    var LIGHT_BG_RE = /4dcfab42|08ec969f|38efa1ed|8b8180a6|affea6d7/;
    /* 白底图兜底：即使以后换了新图，只要是这些品牌就按白底处理 */
    var LIGHT_NAME_RE = /google|谷歌|capcut|剪映|heygen|perplexity|autodesk|autocad/i;
    var PRO_RE = /(?:^|[^a-z])(pro|ultra)(?:$|[^a-z])/i;
    var BRANDS = [
      [/gemini/i, '#7FB0FF'], [/chatgpt|openai|\bgpt\b/i, '#10C08C'], [/claude/i, '#F0855F'],
      [/grok/i, '#C7CEDA'], [/muse/i, '#A78BFA'], [/perplexity/i, '#33E0F0'],
      [/autodesk/i, '#2DD4BF'], [/heygen/i, '#7C83FF'], [/capcut/i, '#9B8BFF'],
      [/谷歌|google/i, '#4C8DF6'],
      [/midjourney/i, '#6B5CE7'], [/notion/i, '#111111'], [/figma/i, '#F24E1E'],
      [/canva/i, '#00C4CC'], [/cursor/i, '#7C8CF8'], [/copilot/i, '#3B82F6'],
      [/suno/i, '#F4511E'], [/runway/i, '#22C55E'], [/poe\b/i, '#5D5CDE'],
      [/kimi/i, '#111111'], [/豆包|即梦|可灵/i, '#4C8DF6'],
      [/推荐|热门|爆款|精选/, '#F5C242'], [/设计|绘画|图像|视觉|出图/, '#A78BFA'],
      [/影音|视频|剪辑|音乐/, '#9B8BFF'], [/办公|效率|文档|编程|代码|开发/, '#2DD4BF'],
      [/对话|聊天|写作|大模型|问答/, '#10C08C'], [/搜索|学术|科研|论文/, '#33E0F0'], [/邮箱|账号|成品|海外|工具/, '#4C8DF6']
    ];
    function matchBrand(t){ if(!t) return ''; for(var i=0;i<BRANDS.length;i++){ if(BRANDS[i][0].test(t)) return BRANDS[i][1]; } return ''; }
    function markLightBg(el, nameText){ if(!el || el.classList.contains('xc-light')) return; var u=(el.style && el.style.backgroundImage)||''; if(LIGHT_BG_RE.test(u) || LIGHT_NAME_RE.test(nameText||'')) el.classList.add('xc-light'); }

    function enhanceCards(){
      var cards=document.querySelectorAll('.cream-waterfall-card');
      for(var i=0;i<cards.length;i++){
        var card=cards[i];
        var nameEl=card.querySelector('.cream-waterfall-name');
        var nameText=(nameEl?nameEl.textContent:card.textContent||'').trim();
        markLightBg(card.querySelector('.cream-waterfall-cover'), nameText);
        if(card.classList.contains('xc-card')) continue;
        var glow=matchBrand(nameText);
        if(glow) card.style.setProperty('--xc-glow', glow);
        if(PRO_RE.test(nameText)) card.classList.add('xc-pro');
        card.classList.add('xc-card');
      }
    }
    function enhanceCategories(){
      var links=document.querySelectorAll('.tokyo-category-link');
      for(var i=0;i<links.length;i++){
        var link=links[i];
        markLightBg(link.querySelector('.tokyo-category-icon'));
        if(link.classList.contains('xc-cat')) continue;
        var nameEl=link.querySelector('.tokyo-category-name');
        var nameText=(nameEl?nameEl.textContent:link.textContent||'').trim();
        var glow=matchBrand(nameText);
        if(glow) link.style.setProperty('--xc-glow', glow);
        link.classList.add('xc-cat');
      }
    }

    function run(){ try{ enhanceCards(); enhanceCategories(); }catch(e){} }

    var timer=null;
    function schedule(){ if(timer) return; timer=setTimeout(function(){ timer=null; run(); }, 200); }

    run();
    if (document.body) {
      new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true });
    } else {
      document.addEventListener('DOMContentLoaded', function(){
        run();
        if (document.body) new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true });
      });
    }
    document.addEventListener('pjax:end', schedule);
    if (window.jQuery) window.jQuery(document).on('pjax:end', schedule);
  } catch (e) {}
})();
