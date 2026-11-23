/* 星辰 AI 小店（xingchen666.store）· 暖亚麻黑曜换肤脚本 v2.3（新增反重力 Antigravity 图标）
 * 用法：尽量把 <script src="...xc-theme-linen.js?v=23"></script> 放到后台「头部/<head>代码」区（勿加 defer/async）以彻底消除整页跳转闪烁
 * 回滚：删掉后台那行引用即可，页面立即恢复原样
 */
(function () {
  if (window.__xc) return;
  window.__xc = 23;

  try {
    var SID = 'xc-theme-style';
    if (!document.getElementById(SID)) {
      var style = document.createElement('style');
      style.id = SID;
      style.textContent = `
:root{
  --q-bg:#F4EFE8;--q-panel:#FBF8F3;--q-line:#DDD5CA;--q-div:#EAE2D7;
  --q-ink:#1F1D1A;--q-muted:#8F897F;--q-card:#1C1B19;--q-on:#FBF8F3;--q-gold:#FFD27A;
}

/* 1. 全站暖亚麻底色、毛玻璃顶栏与通用面板 */
body.tokyo-theme{background:var(--q-bg)!important;color:var(--q-ink)!important}
body.tokyo-theme main.tokyo-main{padding-bottom:84px!important}
body.tokyo-theme .tokyo-nav-shell{background:transparent!important;border:none!important;box-shadow:none!important}
body.tokyo-theme .tokyo-nav{background:rgba(244,239,232,.86)!important;border:1px solid var(--q-line)!important;box-shadow:0 8px 24px rgba(31,29,26,.05)!important;backdrop-filter:blur(16px)!important;-webkit-backdrop-filter:blur(16px)!important;border-radius:16px!important}
body.tokyo-theme .tokyo-brand-chip{background:transparent!important;border:none!important;box-shadow:none!important;padding:0 4px!important}
body.tokyo-theme .tokyo-brand-chip::after{display:none!important}
body.tokyo-theme .tokyo-brand-name{color:var(--q-ink)!important;font-weight:700!important}
body.tokyo-theme .tokyo-nav a.tokyo-nav-link,body.tokyo-theme .tokyo-nav .nav-link{color:#5C5750!important;border-radius:999px!important;transition:.16s ease!important}
body.tokyo-theme .tokyo-nav a.tokyo-nav-link:hover,body.tokyo-theme .tokyo-nav a.tokyo-nav-link.is-active,body.tokyo-theme .tokyo-nav a.tokyo-nav-link.active{color:var(--q-ink)!important;background:rgba(31,29,26,.06)!important;font-weight:600!important}
body.tokyo-theme .site-language-toggle,body.tokyo-theme .tokyo-nav-toggle,body.tokyo-theme .tokyo-nav a.tokyo-button-light{background:var(--q-panel)!important;border:1px solid var(--q-line)!important;color:var(--q-ink)!important;border-radius:999px!important}
body.tokyo-theme .site-language-toggle *,body.tokyo-theme .tokyo-nav-toggle *,body.tokyo-theme .tokyo-nav a.tokyo-button-light *{color:var(--q-ink)!important;stroke:var(--q-ink)!important}
body.tokyo-theme .tokyo-nav .tokyo-notice-trigger,body.tokyo-theme button.tokyo-notice-trigger{background:#EFE7DC!important;border:1px solid var(--q-line)!important;color:var(--q-ink)!important;border-radius:999px!important}
body.tokyo-theme .tokyo-notice-trigger *{color:var(--q-ink)!important;fill:var(--q-ink)!important}
body.tokyo-theme .tokyo-nav a.tokyo-button-dark,body.tokyo-theme .tokyo-button.tokyo-button-dark,body.tokyo-theme .item-search-trigger{background:var(--q-card)!important;border:1px solid var(--q-card)!important;color:var(--q-on)!important;border-radius:999px!important}
body.tokyo-theme .tokyo-nav a.tokyo-button-dark *,body.tokyo-theme .tokyo-button.tokyo-button-dark *,body.tokyo-theme .item-search-trigger *{color:var(--q-on)!important;fill:var(--q-on)!important}

body.tokyo-theme .panel{background:var(--q-panel)!important;border:1px solid var(--q-line)!important;border-radius:18px!important;box-shadow:0 8px 26px rgba(31,29,26,.04)!important;color:var(--q-ink)!important}
body.tokyo-theme .panel-header{background:transparent!important;border-bottom:1px solid var(--q-div)!important}
body.tokyo-theme .panel-kicker{color:var(--q-muted)!important;letter-spacing:.12em!important}
body.tokyo-theme .panel-title,body.tokyo-theme .tokyo-current-name{color:var(--q-ink)!important}
body.tokyo-theme .tokyo-catalog-body,body.tokyo-theme .tokyo-table-wrap,body.tokyo-theme .cream-waterfall{background:transparent!important;border-color:transparent!important;box-shadow:none!important}
body.tokyo-theme .tokyo-searchbox,body.tokyo-theme .tokyo-searchbox-combo{background:#FFF!important;border:1px solid var(--q-line)!important;border-radius:999px!important}

/* 防闪烁遮罩：未替换完成前先隐藏旧图，彻底杜绝切分类/PJAX 时闪出旧白框或旧图标 */
body.tokyo-theme .cream-waterfall-cover:not(.xc-ready),
body.tokyo-theme .tokyo-category-icon:not(.xc-ready),
body.tokyo-theme .tokyo-mobile-category-chip-icon:not(.xc-ready){background-image:none!important}

/* 2. 电脑端左侧分类：单列不截断 + 发光 AI 圆角图标 */
body.tokyo-theme #tokyo-category-tree.tokyo-category-tree{display:grid!important;grid-template-columns:1fr!important;gap:7px!important;padding:4px 2px!important;max-height:calc(100vh - 150px)!important}
body.tokyo-theme .tokyo-category-node,body.tokyo-theme .tokyo-category-row{width:100%!important;margin:0!important}
body.tokyo-theme .tokyo-category-link{display:flex!important;align-items:center!important;gap:11px!important;width:100%!important;height:46px!important;min-height:46px!important;max-height:46px!important;padding:0 12px!important;margin:0!important;box-sizing:border-box!important;background:var(--q-panel)!important;border:1px solid var(--q-line)!important;border-radius:12px!important;color:var(--q-ink)!important;box-shadow:none!important;transition:.16s ease!important}
body.tokyo-theme .tokyo-category-link:hover{border-color:var(--q-ink)!important;background:#FFF!important}
body.tokyo-theme .tokyo-category-icon{display:inline-flex!important;align-items:center!important;justify-content:center!important;flex:0 0 32px!important;width:32px!important;height:32px!important;padding:0!important;border-radius:9px!important;overflow:hidden!important;background-color:var(--q-card)!important;background-size:cover!important;background-position:center!important;box-shadow:0 2px 5px rgba(31,29,26,.16)!important}
body.tokyo-theme .tokyo-category-icon.xc-has-svg{background-image:none!important}
body.tokyo-theme .tokyo-category-icon svg{width:100%!important;height:100%!important;display:block!important}
body.tokyo-theme .tokyo-category-copy{display:flex!important;align-items:center!important;justify-content:space-between!important;flex:1 1 auto!important;min-width:0!important;gap:8px!important}
body.tokyo-theme .tokyo-category-name{font-size:13px!important;font-weight:600!important;color:var(--q-ink)!important;overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important}
body.tokyo-theme .tokyo-category-side{display:inline-flex!important;align-items:center!important;flex-shrink:0!important;color:#5C5750!important}
body.tokyo-theme .tokyo-category-count{font-size:11px!important;font-weight:600!important;padding:2px 8px!important;border-radius:999px!important;background:rgba(31,29,26,.07)!important;color:#5C5750!important}
body.tokyo-theme .tokyo-category-link.is-active,body.tokyo-theme .tokyo-category-link.active,body.tokyo-theme .tokyo-category-link[aria-selected="true"]{background:var(--q-card)!important;border-color:var(--q-card)!important;box-shadow:0 6px 16px rgba(28,27,25,.18)!important}
body.tokyo-theme .tokyo-category-link.is-active .tokyo-category-name,body.tokyo-theme .tokyo-category-link.active .tokyo-category-name,body.tokyo-theme .tokyo-category-link.is-active .tokyo-category-side{color:var(--q-on)!important}
body.tokyo-theme .tokyo-category-link.is-active .tokyo-category-count,body.tokyo-theme .tokyo-category-link.active .tokyo-category-count{background:rgba(255,210,122,.18)!important;color:var(--q-gold)!important}

/* 3. 黑曜石商品卡片 + 无缝发光 AI 图标 + 悬停微放大 + 修复标题两行正常折行 */
body.tokyo-theme .cream-waterfall-card{position:relative!important;isolation:isolate!important;overflow:hidden!important;display:flex!important;flex-direction:column!important;background:var(--q-card)!important;border:0!important;border-radius:14px!important;box-shadow:0 10px 24px rgba(28,27,25,.14)!important;color:var(--q-on)!important;text-decoration:none!important;transition:transform .25s ease,box-shadow .25s ease!important}
body.tokyo-theme .cream-waterfall-card:hover{transform:translateY(-3px)!important;box-shadow:0 18px 36px rgba(28,27,25,.26)!important}
body.tokyo-theme .cream-waterfall-cover{position:relative!important;display:block!important;width:100%!important;min-width:100%!important;max-width:100%!important;height:auto!important;min-height:150px!important;max-height:300px!important;aspect-ratio:1/.92!important;padding:0!important;margin:0!important;overflow:hidden!important;border:none!important;background:radial-gradient(75% 55% at 50% 35%,#3B3934 0%,#1C1B19 100%)!important;background-size:contain!important;background-position:center!important;background-repeat:no-repeat!important}
body.tokyo-theme .cream-waterfall-cover.xc-has-svg{background-image:none!important}
body.tokyo-theme .cream-waterfall-cover .xc-art{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;display:block!important;transform-origin:50% 42%!important;transition:transform .58s cubic-bezier(.2,.7,.2,1)!important}
body.tokyo-theme .cream-waterfall-card:hover .cream-waterfall-cover .xc-art{transform:scale(1.06)!important}
body.tokyo-theme .cream-waterfall-card[data-xc-badge]::after{content:attr(data-xc-badge)!important;position:absolute!important;top:12px!important;left:12px!important;z-index:3!important;pointer-events:none!important;padding:3px 10px!important;border-radius:999px!important;font-size:11px!important;font-weight:600!important;line-height:1.35!important;background:rgba(28,27,25,.52)!important;border:1px solid rgba(255,255,255,.28)!important;color:#F8FAFC!important;backdrop-filter:blur(8px)!important}
body.tokyo-theme .cream-waterfall-card[data-xc-bt="hot"]::after{background:#EF4444!important;border-color:#EF4444!important;color:#FFF!important;box-shadow:0 4px 12px rgba(239,68,68,.4)!important}
body.tokyo-theme .cream-waterfall-card[data-xc-bt="gold"]::after{background:rgba(42,35,20,.65)!important;border-color:rgba(255,210,122,.52)!important;color:#FFD27A!important}
body.tokyo-theme .cream-waterfall-card[data-xc-bt="blue"]::after{background:rgba(30,58,138,.58)!important;border-color:rgba(147,197,253,.5)!important;color:#EFF6FF!important}
body.tokyo-theme .cream-waterfall-info{position:relative!important;z-index:2!important;display:flex!important;flex-direction:column!important;align-items:stretch!important;flex:1 1 auto!important;width:100%!important;gap:8px!important;padding:4px 15px 15px!important;margin-top:-10px!important;box-sizing:border-box!important;text-align:left!important}
body.tokyo-theme .cream-waterfall-info::before{content:"● 自动发货"!important;display:block!important;font-size:11px!important;letter-spacing:.12em!important;color:#7FB38A!important;line-height:1.2!important;text-align:left!important}
body.tokyo-theme .cream-waterfall-name{display:-webkit-box!important;-webkit-line-clamp:2!important;-webkit-box-orient:vertical!important;overflow:hidden!important;text-overflow:ellipsis!important;white-space:normal!important;word-break:break-word!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;color:var(--q-on)!important;font-size:13.5px!important;font-weight:600!important;line-height:1.45!important;min-height:2.9em!important;text-align:left!important}
body.tokyo-theme .cream-waterfall-price{display:block!important;width:100%!important;margin-top:auto!important;padding-top:4px!important;color:var(--q-gold)!important;font-size:22px!important;font-weight:700!important;line-height:1.1!important;letter-spacing:-.02em!important;text-align:left!important}

/* 4. 商品详情页、公告与客服 */
body.tokyo-theme .panel.tokyo-item-panel .tokyo-item-cover-card,body.tokyo-theme .panel.tokyo-item-panel .tokyo-item-cover-trigger{background:var(--q-card)!important;border-radius:16px!important;padding:0!important;overflow:hidden!important;display:flex!important;align-items:center!important;justify-content:center!important;position:relative!important}
body.tokyo-theme .panel.tokyo-item-panel .xc-detail-art{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;pointer-events:none!important}
body.tokyo-theme #tokyo-notice-popup>div{background:var(--q-panel)!important;border-radius:18px!important}
body.tokyo-theme #online-service .online-service-launcher{background:var(--q-card)!important;color:var(--q-on)!important;box-shadow:0 10px 24px rgba(28,27,25,.28)!important}

/* 5. 手机端（≤767px）：四列 iOS 发光 AI 图标宫格 + 炭黑双环选中圈 */
@media (max-width:767px){
  body.tokyo-theme .tokyo-nav{border-radius:14px!important}
  body.tokyo-theme .panel{border-radius:16px!important}
  body.tokyo-theme #tokyo-mobile-category-panel .tokyo-mobile-category-head,body.tokyo-theme #tokyo-mobile-category-panel .tokyo-mobile-category-label{display:none!important}
  body.tokyo-theme #tokyo-mobile-category-panel .tokyo-mobile-category-rail,body.tokyo-theme .xc-mob-list{display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:12px 6px!important;overflow:visible!important;width:100%!important;max-height:none!important;padding:10px 8px 12px!important;box-sizing:border-box!important;margin:0!important}
  body.tokyo-theme #tokyo-mobile-category-panel .tokyo-mobile-category-chip{display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:flex-start!important;width:100%!important;min-width:0!important;max-width:100%!important;height:auto!important;min-height:0!important;padding:0!important;margin:0!important;gap:6px!important;border-radius:0!important;background:transparent!important;border:0!important;box-shadow:none!important;text-align:center!important}
  body.tokyo-theme #tokyo-mobile-category-panel .tokyo-mobile-category-chip-icon{width:52px!important;height:52px!important;flex:0 0 52px!important;padding:0!important;border-radius:15px!important;overflow:hidden!important;background-color:var(--q-card)!important;background-size:cover!important;background-position:center!important;box-shadow:0 3px 10px rgba(28,27,25,.16)!important;transition:box-shadow .18s ease,transform .18s ease!important}
  body.tokyo-theme #tokyo-mobile-category-panel .tokyo-mobile-category-chip-icon.xc-has-svg{background-image:none!important}
  body.tokyo-theme #tokyo-mobile-category-panel .tokyo-mobile-category-chip-icon svg{width:100%!important;height:100%!important;display:block!important}
  body.tokyo-theme #tokyo-mobile-category-panel .tokyo-mobile-category-chip-text{display:block!important;width:100%!important;font-size:11.5px!important;font-weight:500!important;line-height:1.25!important;color:var(--q-ink)!important;text-align:center!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}
  body.tokyo-theme #tokyo-mobile-category-panel .tokyo-mobile-category-chip.is-active .tokyo-mobile-category-chip-icon,body.tokyo-theme #tokyo-mobile-category-panel .tokyo-mobile-category-chip.active .tokyo-mobile-category-chip-icon{box-shadow:0 0 0 2px var(--q-panel),0 0 0 4px var(--q-ink)!important;transform:scale(1.03)!important}
  body.tokyo-theme #tokyo-mobile-category-panel .tokyo-mobile-category-chip.is-active .tokyo-mobile-category-chip-text,body.tokyo-theme #tokyo-mobile-category-panel .tokyo-mobile-category-chip.active .tokyo-mobile-category-chip-text{color:var(--q-ink)!important;font-weight:700!important}
  body.tokyo-theme .cream-waterfall-card{border-radius:12px!important}
  body.tokyo-theme .cream-waterfall-cover{min-height:0!important;aspect-ratio:1/.88!important}
  body.tokyo-theme .cream-waterfall-card[data-xc-badge]::after{top:8px!important;left:8px!important;font-size:9.5px!important;padding:2px 7px!important}
  body.tokyo-theme .cream-waterfall-info{padding:2px 11px 12px!important;gap:5px!important;margin-top:-6px!important}
  body.tokyo-theme .cream-waterfall-info::before{font-size:10px!important}
  body.tokyo-theme .cream-waterfall-name{font-size:12.5px!important;line-height:1.4!important;min-height:2.8em!important}
  body.tokyo-theme .cream-waterfall-price{font-size:18px!important}
}
`;
      (document.head || document.documentElement).appendChild(style);
    }

    /* ================= 真实 AI 品牌发光矢量图标工厂 ================= */
    var uid = 0;
    function makeArt(key, isTile) {
      var id = 'x' + (++uid);
      var end = isTile ? '#141418' : '#1C1B19';
      var bot = isTile ? '' : '<rect y="126" width="200" height="74" fill="url(#' + id + 'f)"/>';
      var fade = isTile ? '' : '<linearGradient id="' + id + 'f" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1C1B19" stop-opacity="0"/><stop offset="1" stop-color="#1C1B19" stop-opacity="1"/></linearGradient>';
      var cfg = {
        antigravity: {
          bg: ['#253B8E', '#13163A', end],
          defs: '<linearGradient id="' + id + 'g" x1="12%" y1="88%" x2="88%" y2="18%"><stop offset="0%" stop-color="#EA4335"/><stop offset="32%" stop-color="#FBBC05"/><stop offset="62%" stop-color="#34A853"/><stop offset="100%" stop-color="#4285F4"/></linearGradient>',
          mark: '<g filter="url(#' + id + 'b)"><path transform="translate(34,28) scale(5.5)" d="M19.94 20.59c1.09.82 2.73.27 1.23-1.23C16.67 15 17.62 3 12.03 3S7.39 15 2.89 19.36c-1.64 1.64.14 2.05 1.23 1.23c4.23-2.86 3.95-7.91 7.91-7.91s3.68 5.05 7.91 7.91" fill="url(#' + id + 'g)"/></g>'
        },
        gemini: {
          bg: ['#1A3578', '#0D1736', end],
          defs: '<linearGradient id="' + id + 'g" x1="15%" y1="85%" x2="85%" y2="15%"><stop offset="0%" stop-color="#FACC15"/><stop offset="28%" stop-color="#FB7185"/><stop offset="62%" stop-color="#4F86F7"/><stop offset="100%" stop-color="#34D399"/></linearGradient>',
          mark: '<g filter="url(#' + id + 'b)"><path transform="translate(32,26) scale(5.65)" d="M12 1C12.7 6.9 17.1 11.3 23 12C17.1 12.7 12.7 17.1 12 23C11.3 17.1 6.9 12.7 1 12C6.9 11.3 11.3 6.9 12 1Z" fill="url(#' + id + 'g)"/></g>'
        },
        openai: {
          bg: ['#064E3B', '#04271D', end],
          defs: '<linearGradient id="' + id + 'g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#5EEAD4"/><stop offset="50%" stop-color="#19C37D"/><stop offset="100%" stop-color="#059669"/></linearGradient>',
          mark: '<g filter="url(#' + id + 'b)"><path transform="translate(38,32) scale(5.15)" d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" fill="url(#' + id + 'g)"/></g>'
        },
        claude: {
          bg: ['#5C2815', '#2F150C', end],
          defs: '<radialGradient id="' + id + 'g" cx="50%" cy="50%" r="55%"><stop offset="0%" stop-color="#FFF7ED"/><stop offset="28%" stop-color="#F59B78"/><stop offset="100%" stop-color="#D97757"/></radialGradient>',
          mark: '<g filter="url(#' + id + 'b)"><path transform="translate(36,30) scale(5.3)" d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z" fill="url(#' + id + 'g)"/></g>'
        },
        grok: {
          bg: ['#262D45', '#151826', end],
          defs: '<linearGradient id="' + id + 'g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="55%" stop-color="#CBD5E1"/><stop offset="100%" stop-color="#94A3B8"/></linearGradient>',
          mark: '<g filter="url(#' + id + 'b)"><path transform="translate(36,30) scale(5.3)" d="M9.27 15.29l7.978-5.897c.391-.29.95-.177 1.137.272.98 2.369.542 5.215-1.41 7.169-1.951 1.954-4.667 2.382-7.149 1.406l-2.711 1.257c3.889 2.661 8.611 2.003 11.562-.953 2.341-2.344 3.066-5.539 2.388-8.42l.006.007c-.983-4.232.242-5.924 2.75-9.383.06-.082.12-.164.179-.248l-3.301 3.305v-.01L9.267 15.292M7.623 16.723c-2.792-2.67-2.31-6.801.071-9.184 1.761-1.763 4.647-2.483 7.166-1.425l2.705-1.25a7.808 7.808 0 00-1.829-1A8.975 8.975 0 005.984 5.83c-2.533 2.536-3.33 6.436-1.962 9.764 1.022 2.487-.653 4.246-2.34 6.022-.599.63-1.199 1.259-1.682 1.925l7.62-6.815" fill="url(#' + id + 'g)"/></g>'
        },
        gmail: {
          bg: ['#5E1616', '#2C0D0D', end],
          defs: '<radialGradient id="' + id + 'g" cx="50%" cy="55%" r="55%"><stop offset="0%" stop-color="#FFE4E6"/><stop offset="35%" stop-color="#FB7185"/><stop offset="100%" stop-color="#EF4444"/></radialGradient>',
          mark: '<g filter="url(#' + id + 'b)"><path d="M44 134V66c0-9 10-14 17-9l39 29 39-29c7-5 17 0 17 9v68c0 6-5 11-11 11h-15V93l-30 23-30-23v52H55c-6 0-11-5-11-11z" fill="url(#' + id + 'g)"/></g>'
        },
        muse: {
          bg: ['#222263', '#13133A', end],
          defs: '<linearGradient id="' + id + 'g" x1="0%" y1="30%" x2="100%" y2="70%"><stop offset="0%" stop-color="#38BDF8"/><stop offset="52%" stop-color="#818CF8"/><stop offset="100%" stop-color="#D946EF"/></linearGradient>',
          mark: '<g filter="url(#' + id + 'b)"><path d="M44 132L64 62c3-9 14-8 16 1l9 46 21-45c4-9 16-7 17 3l5 44 14-26c5-8 17-3 14 7l-14 42c-4 10-18 9-19-2l-4-27-16 32c-5 9-18 7-20-3l-7-34-15 39c-4 10-19 8-21-7z" fill="url(#' + id + 'g)"/></g>'
        },
        perplexity: {
          bg: ['#08414C', '#06222A', end],
          defs: '<linearGradient id="' + id + 'g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#67E8F9"/><stop offset="100%" stop-color="#06B6D4"/></linearGradient>',
          mark: '<g filter="url(#' + id + 'b)"><path transform="translate(34,28) scale(5.4)" d="M5.735 2l6.265 5.39V2h1.5v5.39L19.765 2v6.22h2.235v7.56h-2.235V22l-6.265-5.39V22H12v-5.39L5.735 22v-6.22H3.5V8.22h2.235V2zm1.5 3.16v3.06h3.55L7.235 5.16zm11.03 0l-3.55 3.06h3.55V5.16zM5 9.72v4.56h1.45l4.38-4.56H5zm14 0h-5.83l4.38 4.56H19V9.72zm-11.765 6.06v3.06l3.55-3.06h-3.55zm11.03 0h-3.55l3.55 3.06v-3.06z" fill="url(#' + id + 'g)"/></g>'
        },
        autodesk: {
          bg: ['#0A404B', '#092229', end],
          defs: '<linearGradient id="' + id + 'g" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stop-color="#0EA5E9"/><stop offset="100%" stop-color="#5EEAD4"/></linearGradient>',
          mark: '<g filter="url(#' + id + 'b)"><path d="M54 140l36-86c4-9 16-9 20 0l36 86h-26l-20-52-18 46h28l-10 20H54z" fill="url(#' + id + 'g)"/></g>'
        },
        heygen: {
          bg: ['#31186B', '#1B0E3E', end],
          defs: '<linearGradient id="' + id + 'g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#C4B5FD"/><stop offset="100%" stop-color="#818CF8"/></linearGradient>',
          mark: '<g filter="url(#' + id + 'b)"><text x="100" y="112" text-anchor="middle" font-family="Inter,system-ui,sans-serif" font-weight="800" font-size="42" letter-spacing="-1.5" fill="url(#' + id + 'g)">HeyGen</text></g>'
        },
        figma: {
          bg: ['#26233E', '#181628', end],
          defs: '',
          mark: '<g filter="url(#' + id + 'b)" transform="translate(36,28) scale(5.4)"><path d="M8.5 2H12v7H8.5a3.5 3.5 0 1 1 0-7z" fill="#F24E1E"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" fill="#FF7262"/><path d="M15.5 9a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z" fill="#1ABCFE"/><path d="M8.5 9H12v7H8.5a3.5 3.5 0 1 1 0-7z" fill="#A259FF"/><path d="M8.5 16H12v3.5a3.5 3.5 0 1 1-3.5-3.5z" fill="#0ACF83"/></g>'
        },
        media: {
          bg: ['#571010', '#2B0A0A', end],
          defs: '',
          mark: '<g filter="url(#' + id + 'b)"><rect x="38" y="56" width="124" height="86" rx="22" fill="#EF4444"/><path d="M88 80l36 19-36 19z" fill="#FFF"/></g>'
        },
        rec: {
          bg: ['#4E3A19', '#292011', end],
          defs: '<linearGradient id="' + id + 'g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FFF2C2"/><stop offset="55%" stop-color="#FFD27A"/><stop offset="100%" stop-color="#D99B26"/></linearGradient>',
          mark: '<g filter="url(#' + id + 'b)"><path d="M100 38l17 36 40 5-29 28 7 40-35-19-35 19 7-40-29-28 40-5z" fill="url(#' + id + 'g)"/></g>'
        },
        'new': {
          bg: ['#FFFFFF', '#F8F4EC', '#EFE8DC'],
          defs: '<linearGradient id="' + id + 'g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FDE047"/><stop offset="100%" stop-color="#F59E0B"/></linearGradient>',
          mark: '<path d="M100 42l16 34 38 5-28 26 7 38-33-18-33 18 7-38-28-26 38-5z" fill="url(#' + id + 'g)"/>'
        },
        code: {
          bg: ['#1E3A5F', '#112036', end],
          defs: '',
          mark: '<g filter="url(#' + id + 'b)" stroke="#60A5FA" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" fill="none"><path d="M74 72L46 100l28 28"/><path d="M126 72l28 28-28 28"/><path d="M110 62l-20 76"/></g>'
        }
      }[key];
      if (!cfg) return '';
      return '<svg class="xc-art" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">'
        + '<defs><radialGradient id="' + id + 'a" cx="50%" cy="42%" r="68%"><stop offset="0%" stop-color="' + cfg.bg[0] + '"/><stop offset="55%" stop-color="' + cfg.bg[1] + '"/><stop offset="100%" stop-color="' + cfg.bg[2] + '"/></radialGradient>'
        + '<filter id="' + id + 'b" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="' + cfg.bg[0] + '" flood-opacity="0.95"/></filter>'
        + fade + cfg.defs + '</defs>'
        + '<rect width="200" height="200" fill="url(#' + id + 'a)"/>'
        + cfg.mark + bot + '</svg>';
    }

    var MATCHERS = [
      [/反重力|antigravity|\bagy\b/i, 'antigravity'],
      [/邮箱|gmail/i, 'gmail'], [/gemini|谷歌|google/i, 'gemini'], [/chatgpt|openai|\bgpt\b/i, 'openai'],
      [/claude/i, 'claude'], [/grok|cursor|推特/i, 'grok'], [/muse/i, 'muse'],
      [/perplexity/i, 'perplexity'], [/autodesk|autocad/i, 'autodesk'], [/heygen/i, 'heygen'],
      [/figma|设计|绘画|canva|midjourney/i, 'figma'], [/自媒体|youtube|影音|视频|microsoft/i, 'media'],
      [/推荐|热门|精选/, 'rec'], [/新上|新品/, 'new'], [/测试|代码|开发/, 'code']
    ];
    function matchKey(t) {
      if (!t) return '';
      for (var i = 0; i < MATCHERS.length; i++) if (MATCHERS[i][0].test(t)) return MATCHERS[i][1];
      return '';
    }
    function matchBadge(t) {
      if (/超[级]?低价/.test(t)) return ['超低价', 'hot'];
      if (/200\s*美刀/.test(t)) return ['Pro $200', 'gold'];
      if (/100\s*美刀/.test(t) && /gpt|chatgpt/i.test(t)) return ['Pro $100', 'gold'];
      if (/\bsuper\b/i.test(t)) return ['Super', 'blue'];
      if (/\bpremium\b/i.test(t)) return ['Premium', 'std'];
      if (/\bplus\b/i.test(t)) return ['Plus', 'std'];
      if (/\bultra\b/i.test(t)) return ['Ultra', 'std'];
      if (/\bmax/i.test(t)) return ['Max', 'std'];
      if (/(?:^|[^a-z])pro(?:$|[^a-z])/i.test(t)) return ['Pro', 'std'];
      return null;
    }

    function applyIcon(el, key, isTile) {
      if (!el) return;
      if (key) {
        if (el.dataset.xcKey !== key || !el.querySelector('svg.xc-art')) {
          var svg = makeArt(key, isTile);
          if (svg) {
            el.innerHTML = svg;
            el.classList.add('xc-has-svg');
            el.dataset.xcKey = key;
          }
        }
      }
      if (!el.classList.contains('xc-ready')) el.classList.add('xc-ready');
    }

    var inRun = false;
    function run() {
      if (inRun) return;
      inRun = true;
      try {
        var cards = document.querySelectorAll('.cream-waterfall-card');
        for (var i = 0; i < cards.length; i++) {
          var c = cards[i], n = ((c.querySelector('.cream-waterfall-name') || c).textContent || '').trim();
          applyIcon(c.querySelector('.cream-waterfall-cover'), matchKey(n), false);
          if (!c.dataset.xcBadged) {
            var b = matchBadge(n);
            if (b) { c.setAttribute('data-xc-badge', b[0]); c.setAttribute('data-xc-bt', b[1]); }
            c.dataset.xcBadged = '1';
          }
        }
        var cats = document.querySelectorAll('.tokyo-category-link');
        for (var j = 0; j < cats.length; j++) {
          var k = cats[j], tn = ((k.querySelector('.tokyo-category-name') || k).textContent || '').trim();
          applyIcon(k.querySelector('.tokyo-category-icon'), matchKey(tn), true);
        }
        var chips = document.querySelectorAll('.tokyo-mobile-category-chip');
        for (var m = 0; m < chips.length; m++) {
          var ch = chips[m], p = ch.parentElement;
          if (p && !p.classList.contains('xc-mob-list')) p.classList.add('xc-mob-list');
          var mn = ((ch.querySelector('.tokyo-mobile-category-chip-text') || ch).textContent || '').trim();
          applyIcon(ch.querySelector('.tokyo-mobile-category-chip-icon'), matchKey(mn), true);
        }
        var dTitle = document.querySelector('.tokyo-item-inline-title');
        var dWrap = document.querySelector('.tokyo-item-panel .tokyo-item-cover-trigger');
        if (dTitle && dWrap && !dWrap.querySelector('.xc-detail-art')) {
          var dk = matchKey(dTitle.textContent || '');
          if (dk) {
            var img = dWrap.querySelector('.item-cover');
            if (img) img.style.opacity = '0';
            var box = document.createElement('span');
            box.className = 'xc-detail-art';
            box.innerHTML = makeArt(dk, true);
            dWrap.insertBefore(box, dWrap.firstChild);
          }
        }
      } finally {
        inRun = false;
      }
    }

    /* 零延迟同步拦截：MutationObserver 在浏览器绘制下一帧前执行，彻底消灭切分类/PJAX 闪烁 */
    run();
    function bindObs() {
      if (!document.body) return;
      new MutationObserver(run).observe(document.body, { childList: true, subtree: true });
    }
    if (document.body) bindObs();
    else document.addEventListener('DOMContentLoaded', function () { run(); bindObs(); });

    document.addEventListener('pjax:end', run);
    document.addEventListener('pjax:success', run);
    if (window.jQuery) window.jQuery(document).on('pjax:end pjax:success pjax:complete', run);
  } catch (e) {}
})();
