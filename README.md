# 番茄仔 Tomato Boy — 沙巴番茄海鲜面 Landing Page

> **Brand:** 番茄仔 Tomato Boy  
> **Main Product:** Sabah Tomato Seafood Noodles (沙巴番茄海鲜面)  
> **Location:** Cheras, Kuala Lumpur, Malaysia  
> **Chef:** 啊顺师父 (Chef Ah Soon · Sandakan, Sabah)

---

## 🌟 项目亮点与设计原则

1. **高端马来西亚现代美食品牌定位**：
   - 拒绝传统茶餐室老旧排版，采用杂志画报级现代极简风（Editorial Clean & Warm）。
   - 品牌色彩系统：番茄熟红（Tomato Red）、沙巴雨林深绿（Forest Green）、温润奶油米白（Warm Cream）与石墨炭黑（Charcoal）。
   - 摄影与食材主导（Image-Led），极具食欲感与专业度。
2. **移动端优先（Mobile-First Conversion）**：
   - 底部常驻吸底快捷操作栏：`菜单 Menu | WhatsApp 订购 (突出醒目) | 导航 Maps`。
   - 大触控热区（Min 48px target）、流畅交互体验。
3. **真实诚恳的品牌叙事（Chef Ah Soon Story）**：
   - 从沙巴山打根到 Cheras，讲述啊顺师父把熟悉的沙巴海味与浓郁番茄汤带到吉隆坡的温情故事。
   - 绝不捏造虚拟 AI 人脸或虚假国际大奖，使用专属主厨剪影与工坊档案占位符。
4. **严格严谨的风味表达**：
   - 核心风味三元组：「**酸香**」、「**鲜甜**」、「**开胃**」。
   - 绝不夸大或虚构任何医疗与保健功效，专注于纯天然熟成番茄与海鲜本味的平衡。
5. **强力 Local SEO & 结构化数据**：
   - 单一标准 H1，语义化 H2/H3 层级。
   - 深度植入 Schema.org JSON-LD (`Restaurant`, `LocalBusiness`, `FAQPage`)。
   - 针对关键词：`Sabah Tomato Seafood Noodles Cheras`, `Cheras 番茄海鲜面`, `吉隆坡番茄海鲜面`, `Mee Sup Tomato Cheras` 等。
6. **零依赖与极速加载**：
   - 纯原生现代 HTML5 + CSS3 + Vanilla JavaScript，无沉重打包与臃肿框架。
   - 完美支持 GitHub Pages、Vercel、Netlify 一键托管。

---

## 📁 目录结构

```text
├── index.html                  # 核心落地页（SEO 语义标签、Schema 结构化数据、响应式布局）
├── css/
│   └── style.css               # 定制现代设计系统与响应式样式
├── js/
│   ├── config.js               # 统一配置中心（菜单、价格、地址、WhatsApp、营业时间、追踪代码）
│   └── main.js                 # 核心交互、动态渲染、事件追踪（GA4、Meta Pixel）
├── assets/
│   └── images/
│       ├── logo.svg            # 番茄仔矢量品牌 Logo
│       ├── favicon.svg         # 网站 Favicon 图标
│       ├── chef-placeholder.svg # 啊顺师父工坊意象剪影占位卡
└── README.md                   # 项目文档与维护指引
```

---

## 🛠️ 如何快速修改店铺资料 (即改即生效)

所有的业务信息已全部抽离至 `js/config.js` 文件中，**无需修改 HTML 代码**，只要打开 `js/config.js` 即可修改：

### 1. 更新 WhatsApp 电话与默认消息
```javascript
contact: {
  whatsappNumber: "60123456789", // 替换为真实的马来西亚手机号（带国号60）
  whatsappDefaultMessage: "你好！我想咨询 / 预订【番茄仔 Tomato Boy】沙巴番茄海鲜面。",
  ...
}
```

### 2. 更新 Google Maps 链接与具体地址
```javascript
contact: {
  googleMapsUrl: "https://maps.app.goo.gl/您的实际定位短链",
  address: {
    displayAddressZh: "No. XX, Jalan XX, Cheras, 56000 Kuala Lumpur",
    ...
  }
}
```

### 3. 修改菜单价格与菜品图片
```javascript
menu: [
  {
    id: "dish-signature-combo",
    nameZh: "番茄海鲜面",
    nameEn: "Tomato Seafood Noodles",
    price: "RM 18.90", // 填入实际定价
    image: "assets/images/实际拍摄图.jpg", // 替换为店内实拍高清图
    description: "..."
  },
  ...
]
```

### 4. 接入 Google Analytics 4 与 Meta Pixel
```javascript
analytics: {
  googleAnalyticsId: "G-XXXXXXXXXX",  // 填入真实 GA4 测量 ID
  metaPixelId: "123456789012345"       // 填入真实 Meta Pixel ID
}
```

---

## 🚀 GitHub 部署与上线指南

由于本项目为免构建的纯静态架构，可以直接通过 GitHub 免费一键上线：

1. 将代码 Push 至 GitHub：
   ```bash
   git add .
   git commit -m "feat: initial release of Tomato Boy Sabah Tomato Seafood Noodles landing page"
   git push origin main
   ```
2. 在 GitHub 仓库页面点击 **Settings** -> **Pages**。
3. 在 **Build and deployment** 下将 Branch 设为 `main`，Folder 设为 `/ (root)`，点击 **Save**。
4. 稍等 1-2 分钟，即可通过 `https://<your-github-username>.github.io/tomatoboy/` 访问正式上线的网站！
