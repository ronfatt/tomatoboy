/**
 * 番茄仔 Tomato Boy — 移动优先 · 潮流互动逻辑
 */

document.addEventListener('DOMContentLoaded', () => {
  const config = window.TOMATO_BOY_CONFIG;

  initAnalytics(config);
  initMascotTapReaction();
  initTasteConfigurator(config);
  renderMenuSwiper(config);
  renderFAQs(config);
  bindActions(config);
  initScrollTracker();
});

/**
 * 趣味互动 1：点击番茄仔 IP 触发 "🍅 鲜到上头！+1" 飞天动效
 */
function initMascotTapReaction() {
  const stage = document.getElementById('mascot-badge-stage');
  if (!stage) return;

  const reactionQuotes = [
    "🍅 鲜到上头！",
    "🔥 番茄够浓！",
    "🦐 海鲜够猛！",
    "🍜 嗦一口爆汁！",
    "👑 招牌必吃！",
    "✨ 赞啦！+1"
  ];

  stage.addEventListener('click', (e) => {
    // 弹性缩放
    stage.style.transform = 'scale(0.92)';
    setTimeout(() => { stage.style.transform = ''; }, 160);

    // 随机文案飞出
    const quote = reactionQuotes[Math.floor(Math.random() * reactionQuotes.length)];
    createFlyingParticle(e.clientX, e.clientY, quote);

    trackEvent('mascot_interactive_tap', { quote });
  });
}

function createFlyingParticle(x, y, text) {
  const particle = document.createElement('div');
  particle.className = 'tomato-flying-particle';
  particle.innerText = text;
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;
  document.body.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 850);
}

/**
 * 趣味互动 2：自选鲜度测配器 (Taste Configurator)
 */
function initTasteConfigurator(config) {
  const tabsWrap = document.getElementById('taste-tabs-wrap');
  const previewImg = document.getElementById('taste-preview-img');
  const dishTitle = document.getElementById('taste-dish-title');
  const dishTagline = document.getElementById('taste-dish-tagline');
  const metricAcidity = document.getElementById('taste-metric-acidity');
  const metricSweetness = document.getElementById('taste-metric-sweetness');
  const dishNote = document.getElementById('taste-dish-note');
  const ctaBtn = document.getElementById('taste-order-cta');

  if (!tabsWrap || !config.tasteConfigurator) return;

  // 渲染选项卡 Tabs
  tabsWrap.innerHTML = config.tasteConfigurator.map((item, index) => `
    <button class="taste-tab-btn ${index === 0 ? 'active' : ''}" data-index="${index}">
      ${item.tabName}
    </button>
  `).join('');

  // 切换内容
  function switchTab(index) {
    const data = config.tasteConfigurator[index];
    if (!data) return;

    tabsWrap.querySelectorAll('.taste-tab-btn').forEach((btn, i) => {
      btn.classList.toggle('active', i === index);
    });

    if (previewImg) {
      previewImg.style.opacity = '0.3';
      setTimeout(() => {
        previewImg.src = data.image;
        previewImg.style.opacity = '1';
      }, 150);
    }

    if (dishTitle) dishTitle.innerText = data.dishNameZh;
    if (dishTagline) dishTagline.innerText = data.tagline;
    if (metricAcidity) metricAcidity.innerText = data.acidity;
    if (metricSweetness) metricSweetness.innerText = data.sweetness;
    if (dishNote) dishNote.innerText = data.note;

    if (ctaBtn) {
      const msg = encodeURIComponent(`你好番茄仔！我在官网上看中了【${data.dishNameZh}】，想了解/预订！`);
      ctaBtn.setAttribute('data-msg', msg);
    }

    trackEvent('taste_configurator_switch', { dish: data.dishNameZh });
  }

  tabsWrap.querySelectorAll('.taste-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      switchTab(idx);
    });
  });

  // 初始化第一项
  switchTab(0);
}

/**
 * 渲染经典菜单滑动卡片
 */
function renderMenuSwiper(config) {
  const container = document.getElementById('menu-items-swiper');
  if (!container || !config.menu) return;

  container.innerHTML = config.menu.map(dish => `
    <article class="dish-card" id="${dish.id}">
      <div class="dish-top-img-wrap">
        <span class="dish-badge-flag">${dish.badge}</span>
        <img 
          src="${dish.image}" 
          alt="${dish.nameZh} | 番茄仔 Tomato Boy" 
          class="dish-top-img" 
          loading="lazy"
          onerror="this.src='assets/images/tomato-boy-logo-badge.jpg';"
        >
      </div>
      <div class="dish-body">
        <div class="dish-header-row">
          <h3 class="dish-name">${dish.nameZh}</h3>
          <span class="dish-price-pill">${dish.price}</span>
        </div>
        <div class="dish-en">${dish.nameEn}</div>
        <p class="dish-desc">${dish.description}</p>
        <div>
          <a href="#location" class="btn btn-pill-fire btn-sm" style="width:100%;">
            到店嗦面 / 了解更多 →
          </a>
        </div>
      </div>
    </article>
  `).join('');
}

/**
 * 渲染与绑定 FAQ 手风琴
 */
function renderFAQs(config) {
  const container = document.getElementById('faq-accordion-wrap');
  if (!container || !config.faqs) return;

  container.innerHTML = config.faqs.map((faq, index) => `
    <div class="faq-box ${index === 0 ? 'active' : ''}">
      <button class="faq-q-btn" aria-expanded="${index === 0 ? 'true' : 'false'}">
        <span>${faq.qZh}</span>
        <svg class="faq-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div class="faq-a-drawer">
        <div class="faq-a-text">
          <p>${faq.aZh}</p>
          <p style="margin-top: 6px; font-size: 0.75rem; opacity: 0.7;">${faq.aEn}</p>
        </div>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.faq-q-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const box = btn.closest('.faq-box');
      const wasActive = box.classList.contains('active');

      container.querySelectorAll('.faq-box').forEach(b => {
        b.classList.remove('active');
        b.querySelector('.faq-q-btn').setAttribute('aria-expanded', 'false');
      });

      if (!wasActive) {
        box.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
        trackEvent('faq_expand', { question: btn.innerText.trim() });
      }
    });
  });
}

/**
 * 动态事件与链接绑定 (WhatsApp, Maps, Scroll Anchors)
 */
function bindActions(config) {
  const whatsappNum = config.contact.whatsappNumber;
  const isPlaceholderNumber = !whatsappNum || whatsappNum === 'WHATSAPP_NUMBER_HERE';

  // 通用 WhatsApp 按钮
  document.querySelectorAll('.whatsapp-action-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      trackEvent('whatsapp_click', { origin: btn.getAttribute('data-origin') || 'general' });

      if (isPlaceholderNumber) {
        e.preventDefault();
        alert('【番茄仔 Tomato Boy】官方 WhatsApp 即将随试营业公布，敬请期待！');
        return;
      }

      const customMsg = btn.getAttribute('data-msg') || encodeURIComponent(config.contact.whatsappDefaultMessage);
      const url = `https://wa.me/${whatsappNum.replace(/[^0-9]/g, '')}?text=${customMsg}`;
      window.open(url, '_blank');
    });
  });

  // Google Maps
  document.querySelectorAll('.maps-action-btn').forEach(btn => {
    btn.setAttribute('href', config.contact.googleMapsUrl);
    btn.setAttribute('target', '_blank');
    btn.setAttribute('rel', 'noopener noreferrer');
    btn.addEventListener('click', () => {
      trackEvent('maps_click', { origin: btn.getAttribute('data-origin') || 'general' });
    });
  });
}

/**
 * 滚动深度监测
 */
function initScrollTracker() {
  const depths = [25, 50, 75, 100];
  const tracked = {};

  window.addEventListener('scroll', () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    if (total <= 0) return;
    const pct = Math.round((window.scrollY / total) * 100);

    depths.forEach(d => {
      if (pct >= d && !tracked[d]) {
        tracked[d] = true;
        trackEvent('scroll_depth', { depth: `${d}%` });
      }
    });
  }, { passive: true });
}

/**
 * 事件上报统一分发
 */
function trackEvent(eventName, params = {}) {
  console.log(`[Event Tracked: ${eventName}]`, params);

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }

  if (typeof window.fbq === 'function') {
    window.fbq('trackCustom', eventName, params);
  }
}

function initAnalytics(config) {
  const { googleAnalyticsId, metaPixelId } = config.analytics || {};
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
}
