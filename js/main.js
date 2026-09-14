/**
 * 番茄仔 Tomato Boy — 核心交互与动态数据渲染
 */

document.addEventListener('DOMContentLoaded', () => {
  const config = window.TOMATO_BOY_CONFIG;

  // 1. 初始化 Analytics 代理追踪体系
  initAnalytics(config);

  // 2. 动态渲染菜单与组件
  renderMenu(config);
  renderSeafoodShowcase(config);
  renderFAQs(config);

  // 3. 绑定各处行动点 (WhatsApp, Google Maps, Navigation)
  bindActionLinks(config);

  // 4. 初始化滚动深度检测 (Scroll Depth Tracker)
  initScrollDepthTracking();
});

/**
 * 分析追踪框架 (GA4 & Meta Pixel Integration)
 */
function initAnalytics(config) {
  const { googleAnalyticsId, metaPixelId } = config.analytics || {};

  // 仅在已配置真实有效 ID 时加载官方 SDK
  if (googleAnalyticsId && googleAnalyticsId !== 'GA4_ID_HERE') {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', googleAnalyticsId);
  }

  if (metaPixelId && metaPixelId !== 'META_PIXEL_ID_HERE') {
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', metaPixelId);
    fbq('track', 'PageView');
  }
}

/**
 * 统一事件分发函数
 */
function trackEvent(eventName, params = {}) {
  // 控制台调试日志
  console.log(`[Event Tracked: ${eventName}]`, params);

  // GA4 统一上报
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }

  // Meta Pixel 统一上报
  if (typeof window.fbq === 'function') {
    window.fbq('trackCustom', eventName, params);
  }
}

/**
 * 渲染菜单卡片
 */
function renderMenu(config) {
  const container = document.getElementById('menu-items-container');
  if (!container || !config.menu) return;

  const html = config.menu.map((item, index) => {
    const isFeatured = item.isSignature ? 'featured' : '';
    const badgeHtml = item.badge ? `<div class="menu-badge">${item.badge}</div>` : '';

    return `
      <article class="menu-card ${isFeatured}" id="${item.id}">
        ${badgeHtml}
        <div class="menu-img-wrap">
          <img 
            src="${item.image}" 
            alt="${item.nameZh} - ${item.nameEn} | 番茄仔 Tomato Boy" 
            class="menu-img" 
            loading="lazy"
            onerror="this.src='assets/images/logo.svg'; this.style.padding='24px';"
          >
        </div>
        <div class="menu-card-content">
          <div class="menu-card-header">
            <h3 class="menu-card-title">${item.nameZh}</h3>
            <span class="menu-price-tag">${item.price}</span>
          </div>
          <div class="menu-card-subtitle">${item.nameEn}</div>
          <p class="menu-card-desc">${item.description}</p>
          <div class="menu-card-action">
            <a href="#location" class="btn btn-secondary btn-sm order-inquire-btn" data-dish="${item.nameZh}">
              到店品尝 / 询问详情 →
            </a>
          </div>
        </div>
      </article>
    `;
  }).join('');

  container.innerHTML = html;

  // 绑定菜单内询问点击
  container.querySelectorAll('.order-inquire-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const dish = btn.getAttribute('data-dish');
      trackEvent('menu_click', { dish_name: dish });
    });
  });
}

/**
 * 渲染海鲜食材专区
 */
function renderSeafoodShowcase(config) {
  const container = document.getElementById('seafood-showcase-container');
  if (!container || !config.seafoodShowcase) return;

  const html = config.seafoodShowcase.map(item => `
    <div class="seafood-card">
      <div style="overflow:hidden;">
        <img 
          src="${item.image}" 
          alt="${item.nameZh} | 番茄仔新鲜食材" 
          class="seafood-card-img" 
          loading="lazy"
          onerror="this.src='assets/images/logo.svg'; this.style.padding='24px';"
        >
      </div>
      <div class="seafood-card-body">
        <h3>${item.nameZh}</h3>
        <div class="seafood-card-en">${item.nameEn}</div>
        <p>${item.desc}</p>
      </div>
    </div>
  `).join('');

  container.innerHTML = html;
}

/**
 * 渲染与绑定 FAQ 手风琴
 */
function renderFAQs(config) {
  const container = document.getElementById('faq-container');
  if (!container || !config.faqs) return;

  const html = config.faqs.map((faq, index) => `
    <div class="faq-item ${index === 0 ? 'active' : ''}">
      <button class="faq-question-btn" aria-expanded="${index === 0 ? 'true' : 'false'}">
        <span class="faq-q-text">${faq.qZh}</span>
        <svg class="faq-icon-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div class="faq-answer-wrap">
        <div class="faq-answer-text">
          <p>${faq.aZh}</p>
          <p style="margin-top: 6px; font-size: 0.8125rem; opacity: 0.75;">${faq.aEn}</p>
        </div>
      </div>
    </div>
  `).join('');

  container.innerHTML = html;

  // 绑定手风琴展开与收起
  container.querySelectorAll('.faq-question-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const wasActive = item.classList.contains('active');

      // 收起其他已展开项（保持整洁）
      container.querySelectorAll('.faq-item').forEach(other => {
        other.classList.remove('active');
        const otherBtn = other.querySelector('.faq-question-btn');
        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
      });

      if (!wasActive) {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
        trackEvent('faq_click', { question: btn.querySelector('.faq-q-text').innerText });
      }
    });
  });
}

/**
 * 动态链接绑定 (WhatsApp, Maps, Scroll Anchors)
 */
function bindActionLinks(config) {
  const whatsappNum = config.contact.whatsappNumber;
  const whatsappMsg = encodeURIComponent(config.contact.whatsappDefaultMessage);
  const isPlaceholderNumber = !whatsappNum || whatsappNum === 'WHATSAPP_NUMBER_HERE';

  // WhatsApp 链接配置
  const whatsappUrl = isPlaceholderNumber 
    ? 'javascript:void(0);' 
    : `https://wa.me/${whatsappNum.replace(/[^0-9]/g, '')}?text=${whatsappMsg}`;

  document.querySelectorAll('.whatsapp-trigger-btn').forEach(btn => {
    btn.setAttribute('href', whatsappUrl);
    if (!isPlaceholderNumber) {
      btn.setAttribute('target', '_blank');
      btn.setAttribute('rel', 'noopener noreferrer');
    }

    btn.addEventListener('click', (e) => {
      trackEvent('whatsapp_click', { location: btn.getAttribute('data-origin') || 'general' });
      if (isPlaceholderNumber) {
        e.preventDefault();
        alert('【番茄仔 Tomato Boy】官方 WhatsApp 号码即将随正式试业公布，敬请期待！');
      }
    });
  });

  // Google Maps & Waze 链接配置
  const mapsUrl = config.contact.googleMapsUrl || 'https://maps.google.com/?q=Cheras+Kuala+Lumpur';
  document.querySelectorAll('.maps-trigger-btn').forEach(btn => {
    btn.setAttribute('href', mapsUrl);
    btn.setAttribute('target', '_blank');
    btn.setAttribute('rel', 'noopener noreferrer');

    btn.addEventListener('click', () => {
      trackEvent('maps_click', { location: btn.getAttribute('data-origin') || 'general' });
    });
  });

  // 菜单 CTA 点击追踪
  document.querySelectorAll('.menu-trigger-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      trackEvent('menu_click', { location: 'hero_or_cta' });
    });
  });
}

/**
 * 滚动深度监测 (25%, 50%, 75%, 100%)
 */
function initScrollDepthTracking() {
  const milestones = [25, 50, 75, 100];
  const reached = {};

  window.addEventListener('scroll', () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollHeight <= 0) return;
    const currentPercent = Math.round((window.scrollY / scrollHeight) * 100);

    milestones.forEach(m => {
      if (currentPercent >= m && !reached[m]) {
        reached[m] = true;
        trackEvent('scroll_depth', { depth_percentage: m });
      }
    });
  }, { passive: true });
}
