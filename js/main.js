/**
 * 番茄仔 Tomato Boy — 进阶交互控制 (BottomSheet + Hotspot + Social Matrix)
 */

document.addEventListener('DOMContentLoaded', () => {
  const config = window.TOMATO_BOY_CONFIG;

  initAnalytics(config);
  initMascotTap();
  initIngredientHotspots(config);
  renderSwipeGallery(config);
  renderSocialMatrix(config);
  renderCleanFAQs(config);
  initBottomSheetOrder(config);
  bindNavigationLinks(config);
});

/**
 * 1. 1:1 实拍图食材探测器交互 (Ingredient Hotspots)
 */
function initIngredientHotspots(config) {
  const pills = document.querySelectorAll('.hotspot-pill-btn');
  const bubble = document.getElementById('hotspot-bubble');
  const bubbleTitle = document.getElementById('hotspot-bubble-title');
  const bubbleDesc = document.getElementById('hotspot-bubble-desc');

  if (!pills.length || !bubble || !config.ingredientHotspots) return;

  pills.forEach(btn => {
    btn.addEventListener('click', () => {
      const spotKey = btn.getAttribute('data-spot');
      const data = config.ingredientHotspots[spotKey];
      if (!data) return;

      // 切换选中状态
      pills.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');

      // 更新气泡
      bubbleTitle.innerHTML = `${data.name} <span style="font-size:0.7rem; color:var(--tb-yellow); font-weight:700;">${data.tag}</span>`;
      bubbleDesc.innerText = data.desc;

      // 动效高光
      bubble.classList.remove('show');
      void bubble.offsetWidth; // trigger reflow
      bubble.classList.add('show');
    });
  });
}

/**
 * 2. 社交媒体矩阵动态渲染 (Facebook, 小红书, TikTok)
 */
function renderSocialMatrix(config) {
  const container = document.getElementById('social-buttons-container');
  if (!container || !config.socialChannels) return;

  container.innerHTML = config.socialChannels.map(item => `
    <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="social-item-tile ${item.platform}" data-platform="${item.platform}">
      <div class="social-icon-wrapper ${item.platform}">
        ${item.iconSvg}
      </div>
      <div class="social-meta-info">
        <h4>${item.nameZh}</h4>
        <p>${item.tip}</p>
        <span class="social-tag-badge" style="background:${item.color}22; color:${item.color === '#000000' ? '#00F2FE' : item.color}; border:1px solid ${item.color}55;">
          ${item.badge} →
        </span>
      </div>
    </a>
  `).join('');

  container.querySelectorAll('.social-item-tile').forEach(link => {
    link.addEventListener('click', (e) => {
      const platform = link.getAttribute('data-platform');
      console.log(`[Social Clicked: ${platform}]`);
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'social_follow_click', { platform });
      }
    });
  });
}

/**
 * 3. iOS 风格底部点单抽屉 (BottomSheet Order Modal)
 */
function initBottomSheetOrder(config) {
  const modal = document.getElementById('order-sheet-modal');
  const closeBtn = document.getElementById('close-sheet-btn');
  const dishList = document.getElementById('sheet-dish-list');
  const diningBtns = document.querySelectorAll('.toggle-option-btn');
  const submitBtn = document.getElementById('submit-sheet-order-btn');

  if (!modal || !dishList || !config.menu) return;

  let selectedDishes = [config.menu[0].nameZh]; // 默认选中招牌
  let diningType = "堂食到店";

  // 渲染菜单勾选列表
  dishList.innerHTML = config.menu.map((dish, i) => `
    <div class="sheet-dish-row ${i === 0 ? 'selected' : ''}" data-name="${dish.nameZh}">
      <div>
        <div class="sheet-dish-name">${dish.nameZh}</div>
        <div class="sheet-dish-badge">${dish.badge}</div>
      </div>
      <span class="sheet-check-mark" style="color:var(--tb-yellow); font-size:1.1rem;">${i === 0 ? '✔' : '○'}</span>
    </div>
  `).join('');

  // 菜品行点击多选/单选
  dishList.querySelectorAll('.sheet-dish-row').forEach(row => {
    row.addEventListener('click', () => {
      const name = row.getAttribute('data-name');
      const check = row.querySelector('.sheet-check-mark');

      if (row.classList.contains('selected')) {
        // 如果已经选中且不是唯一一个，取消选中
        if (selectedDishes.length > 1) {
          selectedDishes = selectedDishes.filter(d => d !== name);
          row.classList.remove('selected');
          check.innerText = '○';
        }
      } else {
        selectedDishes.push(name);
        row.classList.add('selected');
        check.innerText = '✔';
      }
    });
  });

  // 堂食 / 外带 切换
  diningBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      diningBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      diningType = btn.getAttribute('data-type');
    });
  });

  // 打开抽屉
  document.querySelectorAll('.open-order-sheet-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      modal.classList.add('active');
    });
  });

  // 关闭抽屉
  closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  // 提交生成 WhatsApp 订单
  submitBtn.addEventListener('click', () => {
    const num = config.contact.whatsappNumber;
    const isPlaceholder = !num || num === 'WHATSAPP_NUMBER_HERE';

    const orderText = `你好番茄仔！我想预约/订餐：
🍜 预订菜品：${selectedDishes.join(' + ')}
🥡 用餐方式：${diningType}
📍 期望到店 / 取餐时间：(请在此填入时间与人数)`;

    if (isPlaceholder) {
      alert(`【番茄仔 Tomato Boy】预订信息已就绪：\n\n${orderText}\n\n※ 官方 WhatsApp 号码即将随试营业公布，敬请留意最新动态！`);
      modal.classList.remove('active');
      return;
    }

    const url = `https://wa.me/${num.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(orderText)}`;
    window.open(url, '_blank');
    modal.classList.remove('active');
  });
}

/**
 * 4. 渲染 5 大实拍横滑画廊
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
        <button class="food-card-btn open-order-sheet-btn" data-dish="${dish.nameZh}">
          <span>💬 WhatsApp 预订这道菜 →</span>
        </button>
      </div>
    </article>
  `).join('');
}

/**
 * 5. 精炼 FAQ
 */
function renderCleanFAQs(config) {
  const container = document.getElementById('faq-clean-container');
  if (!container || !config.faqs) return;

  container.innerHTML = config.faqs.map((f, i) => `
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
      if (!wasActive) item.classList.add('active');
    });
  });
}

/**
 * 6. Google Maps & Waze 本地双导航绑定
 */
function bindNavigationLinks(config) {
  document.querySelectorAll('.maps-trigger').forEach(btn => {
    btn.setAttribute('href', config.contact.googleMapsUrl);
    btn.setAttribute('target', '_blank');
    btn.setAttribute('rel', 'noopener noreferrer');
  });

  document.querySelectorAll('.waze-trigger').forEach(btn => {
    btn.setAttribute('href', config.contact.wazeUrl);
    btn.setAttribute('target', '_blank');
    btn.setAttribute('rel', 'noopener noreferrer');
  });
}

/**
 * 7. 吉祥物点击动效
 */
function initMascotTap() {
  const stamp = document.getElementById('mascot-interactive-stamp');
  if (!stamp) return;

  const quotes = ["🍅 鲜到上头！", "🔥 够浓够猛！", "🦐 生猛大虾！", "🦪 爆汁生蚝！", "👑 招牌必吃！"];

  stamp.addEventListener('click', (e) => {
    stamp.style.transform = 'scale(0.86)';
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
