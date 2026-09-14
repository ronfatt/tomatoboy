/**
 * 番茄仔 Tomato Boy — 极简新潮交互脚本
 */

document.addEventListener('DOMContentLoaded', () => {
  const config = window.TOMATO_BOY_CONFIG;

  initAnalytics(config);
  initMascotTap();
  renderSwipeGallery(config);
  renderCleanFAQs(config);
  bindUniversalActions(config);
});

/**
 * 吉祥物戳印点击动效
 */
function initMascotTap() {
  const stamp = document.getElementById('mascot-interactive-stamp');
  if (!stamp) return;

  const quotes = ["🍅 鲜到上头！", "🔥 够浓够猛！", "🦐 生猛海鲜！", "✨ 爆汁大虾！", "👑 招牌必吃！"];

  stamp.addEventListener('click', (e) => {
    stamp.style.transform = 'scale(0.88)';
    setTimeout(() => { stamp.style.transform = ''; }, 180);

    const text = quotes[Math.floor(Math.random() * quotes.length)];
    const el = document.createElement('div');
    el.className = 'flying-bubble-fx';
    el.innerText = text;
    el.style.left = `${e.clientX || (stamp.getBoundingClientRect().left + 40)}px`;
    el.style.top = `${e.clientY || (stamp.getBoundingClientRect().top + 20)}px`;
    document.body.appendChild(el);

    setTimeout(() => el.remove(), 800);
  });
}

/**
 * 渲染实拍菜品横向滑动画廊
 */
function renderSwipeGallery(config) {
  const container = document.getElementById('food-swipe-gallery');
  if (!container || !config.menu) return;

  container.innerHTML = config.menu.map(dish => `
    <article class="food-drop-card" id="${dish.id}">
      <div class="food-card-img-wrap">
        <span class="food-drop-tag">${dish.badge}</span>
        <img 
          src="${dish.image}" 
          alt="${dish.nameZh} 实拍 | 番茄仔 Tomato Boy" 
          loading="lazy"
        >
      </div>
      <div class="food-card-info">
        <h3>${dish.nameZh}</h3>
        <p>${dish.description}</p>
        <button class="food-card-btn whatsapp-trigger" data-dish="${dish.nameZh}">
          <span>💬 WhatsApp 预订这道菜 →</span>
        </button>
      </div>
    </article>
  `).join('');
}

/**
 * 渲染精炼 FAQ 手风琴
 */
function renderCleanFAQs(config) {
  const container = document.getElementById('faq-clean-container');
  if (!container || !config.faqs) return;

  container.innerHTML = config.faqs.slice(0, 3).map((f, i) => `
    <div class="faq-clean-item ${i === 0 ? 'active' : ''}">
      <button class="faq-toggle-btn">
        <span>${f.qZh}</span>
        <span style="font-size: 1.1rem; opacity: 0.6;">▾</span>
      </button>
      <div class="faq-drawer">
        <p>${f.aZh}</p>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.faq-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-clean-item');
      const wasActive = item.classList.contains('active');

      container.querySelectorAll('.faq-clean-item').forEach(el => el.classList.remove('active'));
      if (!wasActive) {
        item.classList.add('active');
      }
    });
  });
}

/**
 * 统一绑定转化行动
 */
function bindUniversalActions(config) {
  const num = config.contact.whatsappNumber;
  const isPlaceholder = !num || num === 'WHATSAPP_NUMBER_HERE';

  // WhatsApp
  document.querySelectorAll('.whatsapp-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const dish = btn.getAttribute('data-dish');
      const msg = dish 
        ? encodeURIComponent(`你好番茄仔！我想咨询预订【${dish}】！`) 
        : encodeURIComponent(config.contact.whatsappDefaultMessage);

      if (isPlaceholder) {
        alert('【番茄仔 Tomato Boy】官方 WhatsApp 即将随试营业公布，敬请期待！');
        return;
      }

      window.open(`https://wa.me/${num.replace(/[^0-9]/g, '')}?text=${msg}`, '_blank');
    });
  });

  // Maps
  document.querySelectorAll('.maps-trigger').forEach(btn => {
    btn.setAttribute('href', config.contact.googleMapsUrl);
    btn.setAttribute('target', '_blank');
    btn.setAttribute('rel', 'noopener noreferrer');
  });
}

function initAnalytics(config) {
  const { googleAnalyticsId } = config.analytics || {};
  if (googleAnalyticsId && googleAnalyticsId !== 'GA4_ID_HERE') {
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', googleAnalyticsId);
  }
}
