/* 星辰 AI 小店 / AI世家 · 🎴 绝区零潮酷漫画独立上线版 v1.3（精修必看弹窗 + CapCut/Suno 图标 + 搜索栏修复）
 * 本次更新：
 * 1) 修复搜索栏外层 .tokyo-search-combo 露出白色胶囊底壳与黑框错位顶起问题
 * 2) 新增 CapCut（剪映）与 Suno 官方轮廓波普漫画图标（分类 + 卡片 + 详情页通用）
 * 3) 商品详情入口升级为高醒目「🔥 下单必看」脉冲横幅按钮，引导买家下单前必看须知
 * 4) 附带细节精修：提亮联系方式占位字、详情封面满铺无底缝、左侧分类栏暗色极细滚动条
 * 【注意】如果你用 jsDelivr 引用，push 新代码后记得把链接里的 @旧commit哈希 换成新提交哈希！
 */
(function () {
  if (window.__xc) return;
  window.__xc = 'anime-13';

  try {
    var SID = 'xc-theme-style';
    var old = document.getElementById(SID);
    if (old) old.parentNode.removeChild(old);

    var style = document.createElement('style');
    style.id = SID;
    style.textContent = `
:root{
  --a-bg:radial-gradient(rgba(255,255,255,.065) 1.2px,transparent 1.2px),radial-gradient(ellipse 70% 42% at 88% 0%,rgba(255,46,147,.2),transparent 55%),#0B0B11;
  --a-panel:#13131C;--a-card:#151520;--a-ink:#FFFFFF;--a-muted:#A1A1AA;
  --a-acid:#E2FF00;--a-pink:#FF2E93;--a-cyan:#38BDF8;
}

/* 1. 全站波普漫画网点底色（彻底盖掉 CreamWaterfall 的奶油黄外壳） */
html,body.tokyo-theme{background:var(--a-bg)!important;background-size:16px 16px,100% 100%,100% 100%!important;background-attachment:fixed!important;color:var(--a-ink)!important}
body.tokyo-theme .tokyo-page-frame,body.tokyo-theme #pjax-container,body.tokyo-theme main.tokyo-main,body.tokyo-theme .tokyo-shell{background:transparent!important}
body.tokyo-theme main.tokyo-main{padding-bottom:88px!important}

/* 顶部导航栏（强制单行不折字 + 修复手机汉堡图标隐身） */
body.tokyo-theme .tokyo-nav-shell{background:transparent!important;border:none!important;box-shadow:none!important}
body.tokyo-theme .tokyo-nav{background:rgba(17,17,25,.94)!important;border:2.5px solid #000!important;box-shadow:4px 4px 0 var(--a-acid)!important;backdrop-filter:blur(14px)!important;border-radius:14px!important}
body.tokyo-theme .tokyo-brand-chip{background:transparent!important;border:none!important;box-shadow:none!important;padding:0 4px!important}
body.tokyo-theme .tokyo-brand-chip::after{display:none!important}
body.tokyo-theme .tokyo-brand-name{color:#FFF!important;font-weight:900!important;letter-spacing:.02em!important;text-shadow:2px 2px 0 #000!important;white-space:nowrap!important}
body.tokyo-theme .tokyo-nav-links{gap:4px!important;align-items:center!important}
body.tokyo-theme .tokyo-nav a.tokyo-nav-link,body.tokyo-theme .tokyo-nav .nav-link{color:#D4D4D8!important;border-radius:8px!important;font-weight:700!important;white-space:nowrap!important;flex-shrink:0!important;padding:6px 10px!important;font-size:13px!important;transition:.15s ease!important}
body.tokyo-theme .tokyo-nav a.tokyo-nav-link:hover,body.tokyo-theme .tokyo-nav a.tokyo-nav-link.is-active,body.tokyo-theme .tokyo-nav a.tokyo-nav-link.active{color:#09090B!important;background:var(--a-acid)!important;box-shadow:2px 2px 0 #000!important}
body.tokyo-theme .site-language-toggle,body.tokyo-theme .tokyo-nav-toggle,body.tokyo-theme .tokyo-nav a.tokyo-button-light,body.tokyo-theme .tokyo-button.tokyo-button-light{background:#1E1E2C!important;border:2px solid #000!important;color:#FFF!important;border-radius:10px!important;box-shadow:2px 2px 0 #000!important;white-space:nowrap!important;flex-shrink:0!important}
body.tokyo-theme .site-language-toggle *,body.tokyo-theme .tokyo-nav-toggle *,body.tokyo-theme .tokyo-nav a.tokyo-button-light *{color:#FFF!important;stroke:#FFF!important}
body.tokyo-theme .tokyo-nav-toggle .navbar-toggler-icon{filter:invert(1) brightness(2.2)!important}
body.tokyo-theme .tokyo-nav .tokyo-notice-trigger,body.tokyo-theme button.tokyo-notice-trigger{background:var(--a-pink)!important;border:2px solid #000!important;color:#FFF!important;border-radius:10px!important;box-shadow:2px 2px 0 #000!important;font-weight:800!important;white-space:nowrap!important;flex-shrink:0!important;padding:6px 11px!important}
body.tokyo-theme .tokyo-notice-trigger *{color:#FFF!important;fill:#FFF!important}
body.tokyo-theme .tokyo-nav a.tokyo-button-dark,body.tokyo-theme .tokyo-button.tokyo-button-dark,body.tokyo-theme .item-search-trigger{background:var(--a-acid)!important;border:2px solid #000!important;color:#09090B!important;border-radius:10px!important;font-weight:900!important;box-shadow:3px 3px 0 var(--a-pink)!important;white-space:nowrap!important;flex-shrink:0!important}
body.tokyo-theme .tokyo-nav a.tokyo-button-dark *,body.tokyo-theme .tokyo-button.tokyo-button-dark *,body.tokyo-theme .item-search-trigger *{color:#09090B!important;fill:#09090B!important}
body.tokyo-theme .tokyo-auth-actions{display:flex!important;align-items:center!important;gap:8px!important;flex-wrap:nowrap!important}

body.tokyo-theme .panel{background:var(--a-panel)!important;border:2.5px solid #000!important;border-radius:16px!important;box-shadow:5px 5px 0 rgba(226,255,0,.28)!important;color:#FFF!important}
body.tokyo-theme .panel-header{background:transparent!important;border-bottom:2px dashed rgba(226,255,0,.22)!important}
body.tokyo-theme .panel-kicker{color:var(--a-acid)!important;font-weight:900!important;letter-spacing:.12em!important}
body.tokyo-theme .panel-title,body.tokyo-theme .tokyo-current-name{color:#FFF!important;font-weight:900!important}
body.tokyo-theme .tokyo-catalog-body,body.tokyo-theme .tokyo-table-wrap,body.tokyo-theme .cream-waterfall{background:transparent!important;border-color:transparent!important;box-shadow:none!important}
body.tokyo-theme .tokyo-search-combo{display:flex!important;align-items:center!important;gap:8px!important;background:transparent!important;border:0!important;box-shadow:none!important;padding:0!important;border-radius:0!important;overflow:visible!important}
body.tokyo-theme .tokyo-searchbox,body.tokyo-theme .tokyo-searchbox-combo{display:flex!important;align-items:center!important;gap:8px!important;height:40px!important;min-height:40px!important;margin:0!important;padding:0 12px!important;background:#0A0A10!important;border:2px solid #000!important;border-radius:10px!important;box-shadow:3px 3px 0 rgba(226,255,0,.38)!important;color:#FFF!important;box-sizing:border-box!important}
body.tokyo-theme .tokyo-searchbox i,body.tokyo-theme .tokyo-searchbox-combo i{color:#A1A1AA!important;margin:0!important;flex-shrink:0!important}
body.tokyo-theme .item-search-input{background:transparent!important;border:0!important;outline:none!important;box-shadow:none!important;color:#FFF!important;height:100%!important;margin:0!important;padding:0!important}
body.tokyo-theme .item-search-input::placeholder{color:#8E8E9E!important;opacity:1!important}
body.tokyo-theme .tokyo-search-combo .item-search-trigger{height:40px!important;min-height:40px!important;margin:0!important;padding:0 15px!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;gap:6px!important;box-sizing:border-box!important}

/* 防闪烁遮罩 */
body.tokyo-theme .cream-waterfall-cover:not(.xc-ready),
body.tokyo-theme .tokyo-category-icon:not(.xc-ready),
body.tokyo-theme .tokyo-mobile-category-chip-icon:not(.xc-ready){background-image:none!important}

/* 2. 电脑端左侧分类：潮酷硬边单列 + 暗色极细滚动条 */
body.tokyo-theme #tokyo-category-tree.tokyo-category-tree{display:grid!important;grid-template-columns:1fr!important;gap:8px!important;padding:4px 4px 4px 2px!important;max-height:calc(100vh - 150px)!important;scrollbar-width:thin!important;scrollbar-color:#3F3F52 transparent!important}
body.tokyo-theme #tokyo-category-tree.tokyo-category-tree::-webkit-scrollbar{width:5px!important}
body.tokyo-theme #tokyo-category-tree.tokyo-category-tree::-webkit-scrollbar-thumb{background:#3F3F52!important;border-radius:999px!important}
body.tokyo-theme #tokyo-category-tree.tokyo-category-tree::-webkit-scrollbar-track{background:transparent!important}
body.tokyo-theme .tokyo-category-node,body.tokyo-theme .tokyo-category-row{width:100%!important;margin:0!important}
body.tokyo-theme .tokyo-category-link{display:flex!important;align-items:center!important;gap:10px!important;width:100%!important;height:46px!important;min-height:46px!important;max-height:46px!important;padding:0 11px!important;margin:0!important;box-sizing:border-box!important;background:#1A1A26!important;border:2px solid #000!important;border-radius:11px!important;color:#FFF!important;box-shadow:3px 3px 0 #000!important;transition:.15s ease!important}
body.tokyo-theme .tokyo-category-link:hover{border-color:var(--a-acid)!important;transform:translate(-1px,-1px)!important;box-shadow:4px 4px 0 var(--a-acid)!important}
body.tokyo-theme .tokyo-category-icon{display:inline-flex!important;align-items:center!important;justify-content:center!important;flex:0 0 32px!important;width:32px!important;height:32px!important;padding:0!important;border-radius:8px!important;overflow:hidden!important;background-color:#111!important;border:2px solid #000!important}
body.tokyo-theme .tokyo-category-icon.xc-has-svg{background-image:none!important}
body.tokyo-theme .tokyo-category-icon svg{width:100%!important;height:100%!important;display:block!important}
body.tokyo-theme .tokyo-category-copy{display:flex!important;align-items:center!important;justify-content:space-between!important;flex:1 1 auto!important;min-width:0!important;gap:8px!important}
body.tokyo-theme .tokyo-category-name{font-size:13px!important;font-weight:700!important;color:#FFF!important;overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important}
body.tokyo-theme .tokyo-category-side{display:inline-flex!important;align-items:center!important;flex-shrink:0!important;color:#A1A1AA!important}
body.tokyo-theme .tokyo-category-count{font-size:11px!important;font-weight:800!important;padding:2px 7px!important;border-radius:6px!important;background:#09090B!important;color:var(--a-acid)!important}
body.tokyo-theme .tokyo-category-link.is-active,body.tokyo-theme .tokyo-category-link.active,body.tokyo-theme .tokyo-category-link[aria-selected="true"]{background:var(--a-acid)!important;border-color:#000!important;box-shadow:4px 4px 0 var(--a-pink)!important;transform:none!important}
body.tokyo-theme .tokyo-category-link.is-active .tokyo-category-name,body.tokyo-theme .tokyo-category-link.active .tokyo-category-name,body.tokyo-theme .tokyo-category-link.is-active .tokyo-category-side{color:#09090B!important;font-weight:900!important}
body.tokyo-theme .tokyo-category-link.is-active .tokyo-category-count,body.tokyo-theme .tokyo-category-link.active .tokyo-category-count{background:#09090B!important;color:#FFF!important}

/* 3. 潮酷漫画商品卡 */
body.tokyo-theme .cream-waterfall-card{--ash:#38BDF8;position:relative!important;isolation:isolate!important;overflow:hidden!important;display:flex!important;flex-direction:column!important;background:var(--a-card)!important;border:2.5px solid #000!important;border-radius:14px!important;box-shadow:4px 4px 0 var(--ash)!important;color:#FFF!important;text-decoration:none!important;transition:transform .18s ease,box-shadow .18s ease!important;will-change:transform!important}
body.tokyo-theme .cream-waterfall-card[data-xc-r="ssr"]{--ash:#E2FF00}
body.tokyo-theme .cream-waterfall-card[data-xc-r="sr"]{--ash:#FF2E93}
body.tokyo-theme .cream-waterfall-card:hover{box-shadow:6px 6px 0 var(--ash)!important}
body.tokyo-theme .cream-waterfall-card::before{content:""!important;position:absolute!important;inset:0!important;z-index:4!important;pointer-events:none!important;background:linear-gradient(115deg,transparent 35%,rgba(255,255,255,.22) 50%,transparent 65%)!important;transform:translateX(-125%)!important;transition:transform .58s cubic-bezier(.2,.7,.2,1)!important}
body.tokyo-theme .cream-waterfall-card:hover::before{transform:translateX(125%)!important}
body.tokyo-theme .cream-waterfall-cover{position:relative!important;display:block!important;width:100%!important;min-width:100%!important;max-width:100%!important;height:auto!important;min-height:146px!important;max-height:290px!important;aspect-ratio:1/.88!important;padding:0!important;margin:0!important;overflow:hidden!important;border:none!important;border-bottom:2.5px solid #000!important;background:#11111A!important;background-size:contain!important;background-position:center!important;background-repeat:no-repeat!important}
body.tokyo-theme .cream-waterfall-cover.xc-has-svg{background-image:none!important}
body.tokyo-theme .cream-waterfall-cover .xc-art{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;display:block!important;transform-origin:50% 48%!important;transition:transform .45s cubic-bezier(.2,.7,.2,1)!important}
body.tokyo-theme .cream-waterfall-card:hover .cream-waterfall-cover .xc-art{transform:scale(1.07)!important}
body.tokyo-theme .cream-waterfall-card[data-xc-badge]::after{content:attr(data-xc-badge)!important;position:absolute!important;top:10px!important;left:10px!important;z-index:3!important;pointer-events:none!important;padding:2px 9px!important;border-radius:4px!important;font-size:10px!important;font-weight:900!important;letter-spacing:.04em!important;line-height:1.35!important;background:var(--a-acid)!important;border:2px solid #000!important;color:#09090B!important;transform:skewX(-10deg)!important;box-shadow:2px 2px 0 #000!important}
body.tokyo-theme .cream-waterfall-card[data-xc-bt="hot"]::after{background:var(--a-pink)!important;color:#FFF!important}
body.tokyo-theme .cream-waterfall-card[data-xc-bt="cyan"]::after{background:var(--a-cyan)!important;color:#09090B!important}
body.tokyo-theme .cream-waterfall-card[data-xc-bt="purple"]::after{background:#A855F7!important;color:#FFF!important}
body.tokyo-theme .cream-waterfall-card[data-xc-bt="mint"]::after{background:#34D399!important;color:#09090B!important}
body.tokyo-theme .cream-waterfall-info{position:relative!important;z-index:2!important;display:flex!important;flex-direction:column!important;align-items:stretch!important;flex:1 1 auto!important;width:100%!important;gap:7px!important;padding:10px 13px 13px!important;box-sizing:border-box!important;text-align:left!important}
body.tokyo-theme .cream-waterfall-info::before{content:"⚡ 自动发卡"!important;display:block!important;font-size:10.5px!important;font-weight:800!important;letter-spacing:.06em!important;color:#4ADE80!important;line-height:1.2!important;text-align:left!important}
body.tokyo-theme .cream-waterfall-card[data-xc-svc="1"] .cream-waterfall-info::before{content:"💬 1V1 人工协助"!important;color:var(--a-acid)!important}
body.tokyo-theme .cream-waterfall-name{display:-webkit-box!important;-webkit-line-clamp:2!important;-webkit-box-orient:vertical!important;overflow:hidden!important;text-overflow:ellipsis!important;white-space:normal!important;word-break:break-word!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;color:#FFF!important;font-size:13px!important;font-weight:700!important;line-height:1.45!important;min-height:2.9em!important;text-align:left!important}
body.tokyo-theme .cream-waterfall-price{display:flex!important;align-items:baseline!important;justify-content:space-between!important;width:100%!important;margin-top:auto!important;padding-top:4px!important;color:var(--a-acid)!important;font-size:21px!important;font-weight:900!important;line-height:1.1!important;text-align:left!important}
body.tokyo-theme .cream-waterfall-price::after{content:"GET!"!important;font-size:10px!important;font-weight:900!important;padding:1px 6px!important;background:rgba(255,255,255,.08)!important;border-radius:4px!important;color:#FFF!important;transform:skewX(-10deg)!important}

/* 4. 商品详情页（同步暗黑化批发价表格 + 付款选择区 + 顶层通透漫画弹窗） */
body.tokyo-theme .panel.tokyo-item-panel>div,body.tokyo-theme .panel.tokyo-item-panel .panel-body{background:transparent!important;color:#FFF!important}
body.tokyo-theme .tokyo-item-panel .tokyo-item-cover-card,body.tokyo-theme .tokyo-item-panel .tokyo-item-cover-trigger{background:#11111A!important;border:2.5px solid #000!important;border-radius:14px!important;box-shadow:4px 4px 0 var(--a-pink)!important;padding:0!important;overflow:hidden!important;display:flex!important;align-items:center!important;justify-content:center!important;position:relative!important}
body.tokyo-theme .tokyo-item-panel .xc-detail-art{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;pointer-events:none!important;z-index:1!important}
body.tokyo-theme .tokyo-item-panel .xc-detail-art svg{width:100%!important;height:100%!important;display:block!important}
body.tokyo-theme .tokyo-item-panel .tokyo-item-cover-hint{z-index:5!important;background:#09090B!important;border:2px solid var(--a-acid)!important;color:var(--a-acid)!important;font-weight:800!important}
body.tokyo-theme .tokyo-item-form-wrap::before{content:"⚡ SPECIAL DROP · 潮酷装备检视"!important;display:inline-block!important;align-self:flex-start!important;width:fit-content!important;margin-bottom:8px!important;padding:2px 10px!important;background:var(--a-pink)!important;border:2px solid #000!important;color:#FFF!important;font-size:11px!important;font-weight:900!important;transform:skewX(-8deg)!important;box-shadow:2px 2px 0 #000!important}
body.tokyo-theme .tokyo-item-inline-title{color:#FFF!important;font-weight:900!important}
body.tokyo-theme .tokyo-item-badges .badge-soft,body.tokyo-theme .tokyo-item-badges .badge-soft-success,body.tokyo-theme .tokyo-item-badges .badge-soft-tag,body.tokyo-theme .tokyo-item-badges .badge-soft-info{background:#1F1F2E!important;border:1.5px solid #000!important;color:#FFF!important;border-radius:6px!important;font-weight:700!important}
body.tokyo-theme .tokyo-item-price,body.tokyo-theme .tokyo-item-price .price{color:var(--a-acid)!important;font-weight:900!important;text-shadow:2px 2px 0 #000!important}
body.tokyo-theme .tokyo-item-panel label{color:#D4D4D8!important;font-weight:700!important}
body.tokyo-theme .tokyo-item-panel .form-control,body.tokyo-theme .tokyo-item-panel input,body.tokyo-theme .tokyo-item-panel select,body.tokyo-theme .tokyo-item-panel .qty-group,body.tokyo-theme .tokyo-item-panel .change-num-sub,body.tokyo-theme .tokyo-item-panel .change-num-add{background:#0A0A10!important;border:2px solid #272736!important;color:#FFF!important;border-radius:10px!important}
body.tokyo-theme .tokyo-item-panel .form-control::placeholder,body.tokyo-theme .tokyo-item-panel input::placeholder{color:#8E8E9E!important;opacity:1!important}
/* 宝贝类型 SKU 选项：未选暗黑沉稳，已选中（.is-primary）亮白高亮 + 荧光黄漫画投影 */
body.tokyo-theme .tokyo-item-panel .sku-list .tokyo-sku-option,body.tokyo-theme .tokyo-item-panel .sku-list a.sku{background:#181826!important;border:2px solid #323246!important;color:#D4D4D8!important;box-shadow:2px 2px 0 #000!important;transition:.15s ease!important}
body.tokyo-theme .tokyo-item-panel .sku-list .tokyo-sku-option .tokyo-sku-current-price,body.tokyo-theme .tokyo-item-panel .sku-list a.sku .tokyo-sku-current-price{background:#0B0B11!important;color:#A1A1AA!important;border:1px solid #2D2D3F!important}
body.tokyo-theme .tokyo-item-panel .sku-list .tokyo-sku-option .tokyo-sku-name,body.tokyo-theme .tokyo-item-panel .sku-list a.sku .tokyo-sku-name{color:#D4D4D8!important;font-weight:700!important}
body.tokyo-theme .tokyo-item-panel .sku-list .tokyo-sku-option:hover,body.tokyo-theme .tokyo-item-panel .sku-list a.sku:hover{background:#222234!important;border-color:var(--a-acid)!important;color:#FFF!important}
body.tokyo-theme .tokyo-item-panel .sku-list .tokyo-sku-option.is-primary,body.tokyo-theme .tokyo-item-panel .sku-list a.sku.is-primary,body.tokyo-theme .tokyo-item-panel .sku-list a.sku.active{background:#FFFFFF!important;border:2.5px solid #000!important;color:#09090B!important;box-shadow:4px 4px 0 var(--a-acid)!important;transform:translate(-1px,-1px)!important}
body.tokyo-theme .tokyo-item-panel .sku-list .tokyo-sku-option.is-primary .tokyo-sku-current-price,body.tokyo-theme .tokyo-item-panel .sku-list a.sku.is-primary .tokyo-sku-current-price,body.tokyo-theme .tokyo-item-panel .sku-list a.sku.active .tokyo-sku-current-price{background:#09090B!important;color:var(--a-acid)!important;border-color:#09090B!important;font-weight:900!important}
body.tokyo-theme .tokyo-item-panel .sku-list .tokyo-sku-option.is-primary .tokyo-sku-name,body.tokyo-theme .tokyo-item-panel .sku-list a.sku.is-primary .tokyo-sku-name,body.tokyo-theme .tokyo-item-panel .sku-list a.sku.active .tokyo-sku-name{color:#09090B!important;font-weight:900!important}
body.tokyo-theme .tokyo-item-panel .wholesale-table,body.tokyo-theme .tokyo-item-panel .wholesale-table th,body.tokyo-theme .tokyo-item-panel .wholesale-table td{background:#1A1A26!important;color:#E4E4E7!important;border-color:#2D2D3F!important}
body.tokyo-theme .tokyo-item-panel .wholesale-table th{background:#0E0E16!important;color:var(--a-acid)!important;font-weight:800!important}
body.tokyo-theme .tokyo-item-panel .cash-pay{background:#1A1A26!important;border:2px solid #000!important;border-radius:12px!important;padding:12px!important;color:#FFF!important}
body.tokyo-theme .tokyo-item-panel .cash-pay .pay-title,body.tokyo-theme .tokyo-item-panel .cash-pay label,body.tokyo-theme .tokyo-item-panel .cash-pay span{color:#D4D4D8!important}
body.tokyo-theme .tokyo-item-panel .pay-list a.pay,body.tokyo-theme .tokyo-item-panel .pay-list .pay{background:#0E0E16!important;border:2px solid #2D2D3F!important;color:#FFF!important;border-radius:10px!important;font-weight:700!important;transition:.15s ease!important}
body.tokyo-theme .tokyo-item-panel .pay-list a.pay:hover,body.tokyo-theme .tokyo-item-panel .pay-list a.pay.active,body.tokyo-theme .tokyo-item-panel .pay-list a.pay.is-active{background:var(--a-acid)!important;border-color:#000!important;color:#09090B!important;box-shadow:3px 3px 0 var(--a-pink)!important}
body.tokyo-theme .tokyo-item-panel .pay-list a.pay:hover *,body.tokyo-theme .tokyo-item-panel .pay-list a.pay.active *{color:#09090B!important}
body.tokyo-theme .tokyo-item-panel button[type="submit"],body.tokyo-theme .tokyo-item-panel .btn-primary,body.tokyo-theme .tokyo-item-panel .pay-button,body.tokyo-theme .tokyo-item-panel .tokyo-pay-btn{background:var(--a-acid)!important;border:2px solid #000!important;color:#09090B!important;border-radius:10px!important;font-weight:900!important;box-shadow:4px 4px 0 var(--a-pink)!important}

@keyframes xcMustPulse{0%,100%{transform:scale(1) skewX(-8deg);box-shadow:2px 2px 0 #000,0 0 0 0 rgba(255,46,147,.65)}50%{transform:scale(1.05) skewX(-8deg);box-shadow:2px 2px 0 #000,0 0 0 7px rgba(255,46,147,0)}}
@keyframes xcMustSheen{0%,62%{transform:translateX(-140%) skewX(-20deg)}100%{transform:translateX(260%) skewX(-20deg)}}
body.tokyo-theme .xc-desc-trigger{position:relative!important;overflow:hidden!important;display:flex!important;align-items:center!important;justify-content:space-between!important;gap:12px!important;width:100%!important;margin:12px 0 8px!important;padding:11px 14px!important;background:linear-gradient(95deg,#E2FF00 0%,#EEFF55 62%,#D9F900 100%)!important;border:2.5px solid #000!important;color:#09090B!important;border-radius:12px!important;cursor:pointer!important;text-align:left!important;box-shadow:4px 4px 0 var(--a-pink)!important;box-sizing:border-box!important;transition:transform .15s ease,box-shadow .15s ease!important}
body.tokyo-theme .xc-desc-trigger::before{content:""!important;position:absolute!important;top:0!important;bottom:0!important;left:0!important;width:36%!important;pointer-events:none!important;background:linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent)!important;animation:xcMustSheen 3.2s ease-in-out infinite!important}
body.tokyo-theme .xc-desc-trigger:hover{transform:translate(-2px,-2px)!important;box-shadow:6px 6px 0 var(--a-pink)!important}
body.tokyo-theme .xc-must-left{position:relative!important;z-index:1!important;display:flex!important;align-items:center!important;gap:10px!important;min-width:0!important;flex:1 1 auto!important}
body.tokyo-theme .xc-must-tag{flex-shrink:0!important;display:inline-flex!important;align-items:center!important;gap:3px!important;padding:4px 9px!important;background:#FF1E56!important;color:#FFF!important;border:2px solid #000!important;border-radius:6px!important;font-size:11.5px!important;font-weight:900!important;letter-spacing:.04em!important;line-height:1.15!important;animation:xcMustPulse 1.8s ease-in-out infinite!important}
body.tokyo-theme .xc-must-copy{display:flex!important;flex-direction:column!important;gap:2px!important;min-width:0!important}
body.tokyo-theme .xc-must-title{font-size:14px!important;font-weight:900!important;color:#09090B!important;line-height:1.25!important}
body.tokyo-theme .xc-must-sub{font-size:11.5px!important;font-weight:700!important;color:#27272A!important;line-height:1.25!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}
body.tokyo-theme .xc-must-go{position:relative!important;z-index:1!important;flex-shrink:0!important;padding:6px 12px!important;background:#09090B!important;color:var(--a-acid)!important;border:2px solid #000!important;border-radius:8px!important;font-size:12px!important;font-weight:900!important;letter-spacing:.03em!important;white-space:nowrap!important;box-shadow:2px 2px 0 rgba(0,0,0,.25)!important}

/* 顶层独立弹窗（直接挂在 body 下，彻底避开父容器模糊/层级穿透导致发灰） */
#xc-desc-modal-root{display:none!important;position:fixed!important;inset:0!important;z-index:2147483000!important;padding:24px 16px!important;box-sizing:border-box!important;background:rgba(6,6,12,.76)!important;backdrop-filter:blur(8px)!important;align-items:center!important;justify-content:center!important;overflow:auto!important}
#xc-desc-modal-root.xc-open{display:flex!important}
@keyframes xcComicPop{from{opacity:0;transform:scale(.93) rotate(-1deg)}to{opacity:1;transform:scale(1) rotate(0)}}
#xc-desc-modal-root .xc-modal-card{position:relative!important;z-index:2!important;width:100%!important;max-width:760px!important;max-height:86vh!important;display:flex!important;flex-direction:column!important;background:#13131C!important;border:3px solid #000!important;border-radius:16px!important;box-shadow:7px 7px 0 var(--a-acid)!important;overflow:hidden!important;opacity:1!important;filter:none!important;animation:xcComicPop .2s ease both!important}
#xc-desc-modal-root .panel-header{display:flex!important;align-items:center!important;justify-content:space-between!important;padding:13px 18px!important;background:#1A1A26!important;border-bottom:2.5px solid #000!important;flex-shrink:0!important}
#xc-desc-modal-root .panel-title{color:#FFF!important;font-weight:900!important;font-size:15px!important;margin:0!important}
#xc-desc-modal-root .xc-modal-close{width:34px!important;height:34px!important;border-radius:8px!important;border:2px solid #000!important;background:var(--a-pink)!important;color:#FFF!important;font-size:15px!important;font-weight:900!important;cursor:pointer!important;box-shadow:2px 2px 0 #000!important}
#xc-desc-modal-root .panel-body{overflow-y:auto!important;background:#FFFFFF!important;color:#0F172A!important;border-radius:10px!important;border:2px solid #000!important;margin:14px!important;padding:16px!important;box-sizing:border-box!important;opacity:1!important}
body.tokyo-theme .panel.tokyo-description-panel.xc-hidden-src{display:none!important}

body.tokyo-theme #tokyo-notice-popup>div{background:#F8FAFC!important;color:#09090B!important;border:3px solid #000!important;box-shadow:6px 6px 0 var(--a-acid)!important;border-radius:16px!important}
body.tokyo-theme #online-service .online-service-launcher{background:var(--a-acid)!important;color:#09090B!important;border:2px solid #000!important;font-weight:900!important;box-shadow:3px 3px 0 var(--a-pink)!important}

/* 5. 手机端（≤767px）：四列潮酷漫画 AI 图标宫格 */
@media (max-width:767px){
  body.tokyo-theme #tokyo-mobile-category-panel .tokyo-mobile-category-head,body.tokyo-theme #tokyo-mobile-category-panel .tokyo-mobile-category-label{display:none!important}
  body.tokyo-theme #tokyo-mobile-category-panel .tokyo-mobile-category-rail,body.tokyo-theme .xc-mob-list{display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:12px 6px!important;overflow:visible!important;width:100%!important;max-height:none!important;padding:10px 8px 12px!important;box-sizing:border-box!important;margin:0!important}
  body.tokyo-theme #tokyo-mobile-category-panel .tokyo-mobile-category-chip{display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:flex-start!important;width:100%!important;min-width:0!important;max-width:100%!important;height:auto!important;min-height:0!important;padding:0!important;margin:0!important;gap:6px!important;border-radius:0!important;background:transparent!important;border:0!important;box-shadow:none!important;text-align:center!important}
  body.tokyo-theme #tokyo-mobile-category-panel .tokyo-mobile-category-chip-icon{width:50px!important;height:50px!important;flex:0 0 50px!important;padding:0!important;border-radius:12px!important;overflow:hidden!important;background-color:#111!important;border:2px solid #000!important;box-shadow:3px 3px 0 #000!important}
  body.tokyo-theme #tokyo-mobile-category-panel .tokyo-mobile-category-chip-icon.xc-has-svg{background-image:none!important}
  body.tokyo-theme #tokyo-mobile-category-panel .tokyo-mobile-category-chip-icon svg{width:100%!important;height:100%!important;display:block!important}
  body.tokyo-theme #tokyo-mobile-category-panel .tokyo-mobile-category-chip-text{display:block!important;width:100%!important;font-size:11px!important;font-weight:700!important;line-height:1.25!important;color:#FFF!important;text-align:center!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}
  body.tokyo-theme #tokyo-mobile-category-panel .tokyo-mobile-category-chip.is-active .tokyo-mobile-category-chip-icon,body.tokyo-theme #tokyo-mobile-category-panel .tokyo-mobile-category-chip.active .tokyo-mobile-category-chip-icon{border-color:var(--a-acid)!important;box-shadow:0 0 0 2px #13131C,0 0 0 4px var(--a-acid),4px 4px 0 var(--a-pink)!important;transform:scale(1.04)!important}
  body.tokyo-theme #tokyo-mobile-category-panel .tokyo-mobile-category-chip.is-active .tokyo-mobile-category-chip-text,body.tokyo-theme #tokyo-mobile-category-panel .tokyo-mobile-category-chip.active .tokyo-mobile-category-chip-text{color:var(--a-acid)!important;font-weight:900!important}
  body.tokyo-theme .cream-waterfall-card{border-radius:12px!important;box-shadow:3px 3px 0 var(--ash)!important}
  body.tokyo-theme .cream-waterfall-cover{min-height:0!important;aspect-ratio:1/.86!important}
  body.tokyo-theme .cream-waterfall-card[data-xc-badge]::after{top:8px!important;left:8px!important;font-size:9px!important;padding:1.5px 6px!important}
  body.tokyo-theme .cream-waterfall-info{padding:8px 10px 10px!important;gap:5px!important}
  body.tokyo-theme .cream-waterfall-info::before{font-size:9.5px!important}
  body.tokyo-theme .cream-waterfall-name{font-size:12px!important;line-height:1.4!important;min-height:2.8em!important}
  body.tokyo-theme .cream-waterfall-price{font-size:17px!important}
  body.tokyo-theme .cream-waterfall-price::after{display:none!important}
  body.tokyo-theme .xc-desc-trigger{padding:10px 11px!important;gap:8px!important}
  body.tokyo-theme .xc-must-tag{font-size:10.5px!important;padding:3px 7px!important}
  body.tokyo-theme .xc-must-title{font-size:12.5px!important}
  body.tokyo-theme .xc-must-sub{display:none!important}
  body.tokyo-theme .xc-must-go{padding:5px 9px!important;font-size:11px!important}
}
`;
    (document.head || document.documentElement).appendChild(style);

    /* ================= 15 枚 100% 真实 AI 轮廓 + 波普漫画贴纸徽章工厂 ================= */
    var uid = 0;
    function makeArt(key, isTile) {
      var id = 'ca' + (++uid);
      var cfg = {
        support: {
          bg: '#0E2422', ray: '#2DD4BF', plate: '#0D9488',
          mark: isTile
            ? '<path d="M56 58h88c10 0 18 8 18 18v44c0 10-8 18-18 18H96l-24 18v-18H56c-10 0-18-8-18-18V76c0-10 8-18 18-18z" fill="#6EE7B7" stroke="#09090B" stroke-width="5"/><circle cx="78" cy="98" r="8" fill="#09090B"/><circle cx="100" cy="98" r="8" fill="#09090B"/><circle cx="122" cy="98" r="8" fill="#09090B"/>'
            : '<path d="M100 34l50 18v40c0 32-21 58-50 68-29-10-50-36-50-68V52l50-18z" fill="#14B8A6" stroke="#09090B" stroke-width="5" stroke-linejoin="round"/><path d="M74 68h52c7 0 13 6 13 13v26c0 7-6 13-13 13H98l-15 11v-11h-9c-7 0-13-6-13-13V81c0-7 6-13 13-13z" fill="#E2FF00" stroke="#09090B" stroke-width="4.5"/><circle cx="85" cy="94" r="5" fill="#09090B"/><circle cx="100" cy="94" r="5" fill="#09090B"/><circle cx="115" cy="94" r="5" fill="#09090B"/>'
        },
        antigravity: {
          bg: '#16162E', ray: '#E2FF00', plate: '#1E293B',
          defs: '<linearGradient id="' + id + 'g" x1="12%" y1="88%" x2="88%" y2="18%"><stop offset="0%" stop-color="#EA4335"/><stop offset="32%" stop-color="#FBBC05"/><stop offset="62%" stop-color="#34A853"/><stop offset="100%" stop-color="#4285F4"/></linearGradient>',
          mark: '<path transform="translate(42,36) scale(4.85)" d="M19.94 20.59c1.09.82 2.73.27 1.23-1.23C16.67 15 17.62 3 12.03 3S7.39 15 2.89 19.36c-1.64 1.64.14 2.05 1.23 1.23c4.23-2.86 3.95-7.91 7.91-7.91s3.68 5.05 7.91 7.91" fill="url(#' + id + 'g)" stroke="#09090B" stroke-width="1.1" stroke-linejoin="round"/>'
        },
        gemini: {
          bg: '#121B38', ray: '#60A5FA', plate: '#1E1B4B',
          defs: '<linearGradient id="' + id + 'g" x1="15%" y1="85%" x2="85%" y2="15%"><stop offset="0%" stop-color="#FACC15"/><stop offset="30%" stop-color="#FB7185"/><stop offset="64%" stop-color="#4F86F7"/><stop offset="100%" stop-color="#34D399"/></linearGradient>',
          mark: '<path transform="translate(40,34) scale(5)" d="M12 1C12.7 6.9 17.1 11.3 23 12C17.1 12.7 12.7 17.1 12 23C11.3 17.1 6.9 12.7 1 12C6.9 11.3 11.3 6.9 12 1Z" fill="url(#' + id + 'g)" stroke="#09090B" stroke-width="1.1"/>'
        },
        openai: {
          bg: '#0D211B', ray: '#10B981', plate: '#10A37F',
          mark: '<path transform="translate(46,40) scale(4.5)" d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" fill="#FFFFFF" stroke="#09090B" stroke-width=".75"/>'
        },
        claude: {
          bg: '#26140F', ray: '#F97316', plate: '#D97757',
          mark: '<path transform="translate(46,40) scale(4.5)" d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z" fill="#FFF7ED" stroke="#09090B" stroke-width=".55"/>'
        },
        grok: {
          bg: '#151524', ray: '#38BDF8', plate: '#18181B',
          mark: '<path transform="translate(46,40) scale(4.5)" d="M9.27 15.29l7.978-5.897c.391-.29.95-.177 1.137.272.98 2.369.542 5.215-1.41 7.169-1.951 1.954-4.667 2.382-7.149 1.406l-2.711 1.257c3.889 2.661 8.611 2.003 11.562-.953 2.341-2.344 3.066-5.539 2.388-8.42l.006.007c-.983-4.232.242-5.924 2.75-9.383.06-.082.12-.164.179-.248l-3.301 3.305v-.01L9.267 15.292M7.623 16.723c-2.792-2.67-2.31-6.801.071-9.184 1.761-1.763 4.647-2.483 7.166-1.425l2.705-1.25a7.808 7.808 0 00-1.829-1A8.975 8.975 0 005.984 5.83c-2.533 2.536-3.33 6.436-1.962 9.764 1.022 2.487-.653 4.246-2.34 6.022-.599.63-1.199 1.259-1.682 1.925l7.62-6.815" fill="#FFFFFF" stroke="#09090B" stroke-width=".6"/>'
        },
        gmail: {
          bg: '#2A1015', ray: '#FF2E93', plate: '#FFF1F2',
          mark: '<path d="M52 132V70c0-8 9-12 15-7l33 25 33-25c6-5 15-1 15 7v62c0 5-4 9-9 9h-13V94l-26 20-26-20v47H61c-5 0-9-4-9-9z" fill="#EA4335" stroke="#09090B" stroke-width="5" stroke-linejoin="round"/>'
        },
        muse: {
          bg: '#171433', ray: '#C084FC', plate: '#2563EB',
          defs: '<linearGradient id="' + id + 'g" x1="0%" y1="30%" x2="100%" y2="70%"><stop offset="0%" stop-color="#38BDF8"/><stop offset="52%" stop-color="#E2FF00"/><stop offset="100%" stop-color="#FF2E93"/></linearGradient>',
          mark: '<path d="M52 128L68 68c3-8 12-7 14 1l7 38 18-37c4-8 14-6 15 3l4 36 12-22c4-7 14-2 12 6l-12 36c-4 8-15 7-16-2l-4-23-14 27c-5 8-15 6-17-3l-6-28-13 33c-3 8-15 6-16-6z" fill="url(#' + id + 'g)" stroke="#09090B" stroke-width="4.5" stroke-linejoin="round"/>'
        },
        perplexity: {
          bg: '#0C2128', ray: '#22D3EE', plate: '#0E7490',
          mark: '<path transform="translate(46,40) scale(4.5)" d="M5.735 2l6.265 5.39V2h1.5v5.39L19.765 2v6.22h2.235v7.56h-2.235V22l-6.265-5.39V22H12v-5.39L5.735 22v-6.22H3.5V8.22h2.235V2zm1.5 3.16v3.06h3.55L7.235 5.16zm11.03 0l-3.55 3.06h3.55V5.16zM5 9.72v4.56h1.45l4.38-4.56H5zm14 0h-5.83l4.38 4.56H19V9.72zm-11.765 6.06v3.06l3.55-3.06h-3.55zm11.03 0h-3.55l3.55 3.06v-3.06z" fill="#67E8F9" stroke="#09090B" stroke-width=".6"/>'
        },
        autodesk: {
          bg: '#0C2229', ray: '#2DD4BF', plate: '#0F172A',
          mark: '<path d="M58 136l32-76c4-8 16-8 20 0l32 76h-22l-20-46-15 40h24l-9 16H58z" fill="#2DD4BF" stroke="#09090B" stroke-width="5" stroke-linejoin="round"/>'
        },
        heygen: {
          bg: '#20133D', ray: '#C084FC', plate: '#4F46E5',
          mark: '<text x="100" y="109" text-anchor="middle" font-family="Inter,system-ui,sans-serif" font-weight="900" font-size="36" fill="#E2FF00" stroke="#09090B" stroke-width="2.5" paint-order="stroke">HeyGen</text>'
        },
        capcut: {
          bg: '#14151E', ray: '#38BDF8', plate: '#FFFFFF',
          mark: '<g fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M55 108V121Q55 132 66 132H88L145 64" stroke="#09090B" stroke-width="14"/><path d="M98 76L134 119" stroke="#FFFFFF" stroke-width="21"/><path d="M55 88V75Q55 64 66 64H88L145 132" stroke="#09090B" stroke-width="14"/></g>'
        },
        suno: {
          bg: '#261115', ray: '#FF7A00', plate: '#181018',
          defs: '<linearGradient id="' + id + 'g" x1="15%" y1="12%" x2="88%" y2="88%"><stop offset="0%" stop-color="#FFD000"/><stop offset="48%" stop-color="#FF5500"/><stop offset="100%" stop-color="#E11D48"/></linearGradient>',
          mark: '<circle cx="100" cy="98" r="46" fill="url(#' + id + 'g)" stroke="#09090B" stroke-width="5"/><path d="M62 96A38 38 0 0 1 134 80C122 94 108 98 96 92C82 85 70 88 62 96Z" fill="#FFFFFF" stroke="#09090B" stroke-width="3.5" stroke-linejoin="round"/><path d="M138 100A38 38 0 0 1 66 116C78 102 92 98 104 104C118 111 130 108 138 100Z" fill="#FFFFFF" stroke="#09090B" stroke-width="3.5" stroke-linejoin="round"/>'
            + (isTile ? '' : '<text x="100" y="184" text-anchor="middle" font-family="Inter,system-ui,sans-serif" font-weight="900" font-size="18" letter-spacing="4" fill="#FFE082" stroke="#09090B" stroke-width="3" paint-order="stroke">SUNO</text>')
        },
        figma: {
          bg: '#1A162B', ray: '#FF2E93', plate: '#18181B',
          mark: '<g transform="translate(46,38) scale(4.6)" stroke="#09090B" stroke-width="1"><path d="M8.5 2H12v7H8.5a3.5 3.5 0 1 1 0-7z" fill="#F24E1E"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" fill="#FF7262"/><path d="M15.5 9a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z" fill="#1ABCFE"/><path d="M8.5 9H12v7H8.5a3.5 3.5 0 1 1 0-7z" fill="#A259FF"/><path d="M8.5 16H12v3.5a3.5 3.5 0 1 1-3.5-3.5z" fill="#0ACF83"/></g>'
        },
        media: {
          bg: '#2A1014', ray: '#EF4444', plate: '#EF4444',
          mark: '<rect x="46" y="60" width="108" height="74" rx="18" fill="#EF4444" stroke="#09090B" stroke-width="5"/><path d="M88 80l32 17-32 17z" fill="#FFF" stroke="#09090B" stroke-width="3.5" stroke-linejoin="round"/>'
        },
        rec: {
          bg: '#241B0D', ray: '#E2FF00', plate: '#F59E0B',
          mark: '<path d="M100 42l15 32 36 5-26 24 6 36-31-17-31 17 6-36-26-24 36-5z" fill="#E2FF00" stroke="#09090B" stroke-width="5" stroke-linejoin="round"/>'
        },
        'new': {
          bg: '#1F1B0E', ray: '#FACC15', plate: '#FFFBEB',
          mark: '<path d="M100 42l15 32 36 5-26 24 6 36-31-17-31 17 6-36-26-24 36-5z" fill="#F59E0B" stroke="#09090B" stroke-width="5" stroke-linejoin="round"/>'
        },
        code: {
          bg: '#121D33', ray: '#38BDF8', plate: '#1D4ED8',
          mark: '<g stroke="#E2FF00" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" fill="none"><path d="M76 74L50 98l26 24"/><path d="M124 74l26 24-26 24"/><path d="M108 66l-16 64"/></g>'
        }
      }[key];
      if (!cfg) return '';
      var rays = isTile ? '' : '<g stroke="' + cfg.ray + '" stroke-opacity=".22" stroke-width="3.5"><line x1="100" y1="96" x2="8" y2="8"/><line x1="100" y1="96" x2="192" y2="12"/><line x1="100" y1="96" x2="196" y2="148"/><line x1="100" y1="96" x2="6" y2="152"/><line x1="100" y1="96" x2="100" y2="0"/><line x1="100" y1="96" x2="198" y2="86"/><line x1="100" y1="96" x2="2" y2="88"/></g>';
      var plate = isTile
        ? '<rect x="14" y="14" width="172" height="172" rx="34" fill="' + cfg.plate + '" stroke="#09090B" stroke-width="6"/>'
        : '<rect x="38" y="34" width="128" height="128" rx="26" fill="#09090B" transform="rotate(-4 102 98) translate(6,6)"/><rect x="38" y="34" width="128" height="128" rx="26" fill="' + cfg.plate + '" stroke="#09090B" stroke-width="6" transform="rotate(-4 102 98)"/>';
      return '<svg class="xc-art" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">'
        + '<defs>' + (cfg.defs || '') + '</defs>'
        + '<rect width="200" height="200" fill="' + cfg.bg + '"/>'
        + rays + plate + cfg.mark + '</svg>';
    }

    var MATCHERS = [
      [/接码|疑难|解惑|答疑|咨询|人工|排查|微信|\bwx\b/i, 'support'],
      [/反重力|antigravity|\bagy\b/i, 'antigravity'],
      [/邮箱|gmail/i, 'gmail'], [/gemini|谷歌|google/i, 'gemini'], [/chatgpt|openai|\bgpt\b/i, 'openai'],
      [/claude/i, 'claude'], [/grok|cursor|推特/i, 'grok'], [/muse/i, 'muse'],
      [/perplexity/i, 'perplexity'], [/autodesk|autocad/i, 'autodesk'], [/heygen/i, 'heygen'],
      [/capcut|剪映/i, 'capcut'], [/suno/i, 'suno'],
      [/figma|设计|绘画|canva|midjourney/i, 'figma'], [/自媒体|youtube|影音|视频|microsoft/i, 'media'],
      [/推荐|热门|精选/, 'rec'], [/新上|新品/, 'new'], [/测试|代码|开发/, 'code']
    ];
    function matchKey(t) { if (!t) return ''; for (var i = 0; i < MATCHERS.length; i++) if (MATCHERS[i][0].test(t)) return MATCHERS[i][1]; return ''; }
    function matchBadge(name) {
      if (/接码|疑难|解惑|答疑|微信|\bwx\b/i.test(name)) return { r: 'r', b: '人工协助', bt: 'mint' };
      if (/超[级]?低价|特价|最低价|限时/.test(name)) return { r: 'sr', b: '特价', bt: 'hot' };
      if (/200\s*美刀/.test(name)) return { r: 'ssr', b: '直充 $200', bt: 'std' };
      if (/100\s*美刀/.test(name) && /gpt|chatgpt/i.test(name)) return { r: 'ssr', b: '直充 $100', bt: 'std' };
      if (/\bsuper\b/i.test(name)) return { r: 'ssr', b: 'SUPER', bt: 'std' };
      if (/\bultra\b/i.test(name)) return { r: 'ssr', b: 'ULTRA', bt: 'std' };
      if (/\bmax/i.test(name)) return { r: 'ssr', b: 'MAX', bt: 'std' };
      if (/(?:^|[^a-z])pro(?:$|[^a-z])/i.test(name)) return { r: 'ssr', b: 'PRO', bt: 'std' };
      if (/\bpremium\b/i.test(name)) return { r: 'sr', b: 'PREMIUM', bt: 'purple' };
      if (/\bplus\b/i.test(name)) return { r: 'sr', b: 'PLUS', bt: 'std' };
      if (/官方直充|直充|代充|代开/.test(name)) return { r: 'sr', b: /代开/.test(name) ? '代开' : '代充', bt: 'purple' };
      if (/成品|普号|邮箱|账号/.test(name)) return { r: 'r', b: '成品号', bt: 'cyan' };
      return null;
    }
    function applyIcon(el, key, isTile) {
      if (!el) return;
      if (key && (el.dataset.xcKey !== key || !el.querySelector('svg.xc-art'))) {
        var svg = makeArt(key, isTile);
        if (svg) { el.innerHTML = svg; el.classList.add('xc-has-svg'); el.dataset.xcKey = key; }
      }
      if (!el.classList.contains('xc-ready')) el.classList.add('xc-ready');
    }
    function bindTilt(card) {
      if (card.dataset.xcTilt || window.innerWidth <= 767) return;
      card.dataset.xcTilt = '1';
      card.addEventListener('mousemove', function (e) {
        var b = card.getBoundingClientRect(), x = (e.clientX - b.left) / b.width - 0.5, y = (e.clientY - b.top) / b.height - 0.5;
        card.style.transform = 'perspective(540px) rotateY(' + (x * 10).toFixed(1) + 'deg) rotateX(' + (-y * 8).toFixed(1) + 'deg) translate(-2px,-3px)';
      });
      card.addEventListener('mouseleave', function () { card.style.transform = ''; });
    }

    /* 独立挂载至 body 顶层的漫画详情弹窗（离开详情页自动清理） */
    function setupDescModal() {
      var desc = document.querySelector('.panel.tokyo-description-panel'), formWrap = document.querySelector('.tokyo-item-form-wrap');
      var root = document.getElementById('xc-desc-modal-root');
      if (!desc || !formWrap) {
        if (root && root.parentNode) root.parentNode.removeChild(root);
        return;
      }
      if (!desc.classList.contains('xc-hidden-src')) {
        desc.classList.add('xc-hidden-src');
        if (root && root.parentNode) root.parentNode.removeChild(root);
        root = document.createElement('div');
        root.id = 'xc-desc-modal-root';
        var card = document.createElement('div');
        card.className = 'xc-modal-card';
        var head = document.createElement('div');
        head.className = 'panel-header';
        head.innerHTML = '<div class="panel-title"><span style="display:inline-block;margin-right:8px;padding:2px 7px;background:#FF1E56;color:#FFF;border:1.5px solid #000;border-radius:5px;font-size:11px;font-weight:900;vertical-align:1px">🔥 下单必看</span>商品详情 · 售后情报</div>';
        var closeBtn = document.createElement('button');
        closeBtn.type = 'button'; closeBtn.className = 'xc-modal-close'; closeBtn.textContent = '✕';
        closeBtn.onclick = function () { root.classList.remove('xc-open'); };
        head.appendChild(closeBtn);
        var body = document.createElement('div');
        body.className = 'panel-body';
        var srcBody = desc.querySelector('.panel-body');
        body.innerHTML = srcBody ? srcBody.innerHTML : desc.innerHTML;
        card.appendChild(head);
        card.appendChild(body);
        root.appendChild(card);
        root.addEventListener('click', function (e) { if (e.target === root) root.classList.remove('xc-open'); });
        document.body.appendChild(root);
      }
      if (!formWrap.querySelector('.xc-desc-trigger')) {
        var btn = document.createElement('button');
        btn.type = 'button'; btn.className = 'xc-desc-trigger';
        btn.innerHTML = '<span class="xc-must-left"><span class="xc-must-tag">🔥 下单必看</span><span class="xc-must-copy"><span class="xc-must-title">查看商品详情 / 使用与售后须知</span><span class="xc-must-sub">下单前请务必点击阅读发货规则、风控与质保说明</span></span></span><span class="xc-must-go">立即查看 ▸</span>';
        btn.onclick = function () {
          var r = document.getElementById('xc-desc-modal-root');
          if (r) r.classList.add('xc-open');
        };
        var anchor = formWrap.querySelector('.tokyo-item-badges') || formWrap.querySelector('.tokyo-item-inline-title');
        if (anchor && anchor.parentNode) anchor.parentNode.insertBefore(btn, anchor.nextSibling);
        else formWrap.insertBefore(btn, formWrap.firstChild);
      }
    }

    var inRun = false;
    function run() {
      if (inRun) return; inRun = true;
      try {
        var cards = document.querySelectorAll('.cream-waterfall-card');
        for (var i = 0; i < cards.length; i++) {
          var c = cards[i], n = ((c.querySelector('.cream-waterfall-name') || c).textContent || '').trim();
          var k0 = matchKey(n);
          applyIcon(c.querySelector('.cream-waterfall-cover'), k0, false);
          if (k0 === 'support') c.setAttribute('data-xc-svc', '1');
          bindTilt(c);
          if (!c.dataset.xcBadged) {
            var info = matchBadge(n);
            if (info) { c.setAttribute('data-xc-r', info.r); c.setAttribute('data-xc-badge', info.b); c.setAttribute('data-xc-bt', info.bt); }
            c.dataset.xcBadged = '1';
          }
        }
        var rows = document.querySelectorAll('.tokyo-commodity-row');
        for (var q = 0; q < rows.length; q++) {
          var row = rows[q], th = row.querySelector('.tokyo-commodity-thumb'); if (!th) continue;
          var rk = matchKey(((row.querySelector('.tokyo-commodity-name') || row).textContent || '').trim());
          if (rk && th.dataset.xcKey !== rk) { th.style.backgroundImage = 'url("data:image/svg+xml;charset=utf-8,' + encodeURIComponent(makeArt(rk, true)) + '")'; th.dataset.xcKey = rk; }
        }
        var cats = document.querySelectorAll('.tokyo-category-link');
        for (var j = 0; j < cats.length; j++) applyIcon(cats[j].querySelector('.tokyo-category-icon'), matchKey(((cats[j].querySelector('.tokyo-category-name') || cats[j]).textContent || '').trim()), true);
        var chips = document.querySelectorAll('.tokyo-mobile-category-chip');
        for (var m = 0; m < chips.length; m++) {
          var p = chips[m].parentElement; if (p && !p.classList.contains('xc-mob-list')) p.classList.add('xc-mob-list');
          applyIcon(chips[m].querySelector('.tokyo-mobile-category-chip-icon'), matchKey(((chips[m].querySelector('.tokyo-mobile-category-chip-text') || chips[m]).textContent || '').trim()), true);
        }
        var dTitle = document.querySelector('.tokyo-item-inline-title'), dWrap = document.querySelector('.tokyo-item-panel .tokyo-item-cover-trigger');
        if (dTitle && dWrap) {
          var dk = matchKey(dTitle.textContent || '');
          if (dk && !dWrap.querySelector('.xc-detail-art')) {
            var img = dWrap.querySelector('.item-cover'); if (img) img.style.opacity = '0';
            var box = document.createElement('span'); box.className = 'xc-detail-art'; box.innerHTML = makeArt(dk, false);
            dWrap.insertBefore(box, dWrap.firstChild);
          }
        }
        setupDescModal();
      } finally { inRun = false; }
    }

    run();
    var bind = function () {
      var s = document.getElementById(SID); if (s && document.head) document.head.appendChild(s);
      if (document.body) new MutationObserver(run).observe(document.body, { childList: true, subtree: true });
    };
    document.body ? bind() : document.addEventListener('DOMContentLoaded', function () { run(); bind(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { var r = document.getElementById('xc-desc-modal-root'); if (r) r.classList.remove('xc-open'); } });
    document.addEventListener('pjax:end', run);
    document.addEventListener('pjax:success', run);
    if (window.jQuery) window.jQuery(document).on('pjax:end pjax:success pjax:complete', run);
  } catch (e) {}
})();
