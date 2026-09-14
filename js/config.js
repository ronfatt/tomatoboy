/**
 * 番茄仔 Tomato Boy — 官方品牌与门店数据配置中心
 * 
 * 修改本文件即可一键同步全站内容，无需深入 HTML 修改代码：
 * - 联系方式与社交媒体
 * - 店铺地址、营业时间、地图导航链接
 * - 菜单项目、价格、图片
 * - SEO 与分析工具代码 (GA4, Meta Pixel)
 */

window.TOMATO_BOY_CONFIG = {
  // 品牌基本信息
  brand: {
    nameZh: "番茄仔",
    nameEn: "Tomato Boy",
    fullName: "番茄仔 Tomato Boy",
    sloganZh: "一碗来自沙巴的番茄海鲜面",
    sloganEn: "Sabah Tomato Seafood Noodles",
    subheadlineZh: "沙巴风味番茄汤 × 新鲜海鲜 × 一碗热腾腾的面",
    chefName: "啊顺师父",
    chefTitle: "Chef Ah Soon · Sandakan, Sabah",
    chefOrigin: "沙巴山打根 (Sandakan, Sabah)",
    locationCity: "Cheras, Kuala Lumpur, Malaysia"
  },

  // 联络与到店信息（所有未公布数据均使用规范占位符）
  contact: {
    // 真实电话上线时填入，例如 "60123456789"
    whatsappNumber: "WHATSAPP_NUMBER_HERE", 
    whatsappDefaultMessage: "你好！我想咨询 / 预订【番茄仔 Tomato Boy】沙巴番茄海鲜面。",
    // Google Maps 真实导航链接
    googleMapsUrl: "https://maps.google.com/?q=Tomato+Boy+Cheras+Kuala+Lumpur",
    wazeUrl: "https://waze.com/ul?q=Tomato+Boy+Cheras+Kuala+Lumpur",
    // 详细地址与交通
    address: {
      displayAddressZh: "马来西亚 吉隆坡 蕉赖 (Cheras, Kuala Lumpur)",
      displayAddressEn: "Cheras, Kuala Lumpur, Malaysia",
      fullAddressPlaceholder: "详细门牌与商圈地址即将公布 (Cheras, KL 核心美食据点)",
      parkingInfo: "备有充足停车位 / 周边便利泊车 (Parking Available)"
    },
    // 营业时间
    openingHours: {
      displayZh: "筹备试营业中 · 每日 10:30 AM – 9:30 PM (待定)",
      displayEn: "Soft Opening Coming Soon · 10:30 AM – 9:30 PM (TBC)",
      days: "Monday – Sunday",
      hours: "10:30 - 21:30"
    },
    // 社交平台（占位符）
    social: {
      facebook: "https://facebook.com/tomatoboy.my",
      instagram: "https://instagram.com/tomatoboy.my",
      tiktok: "#"
    }
  },

  // 招牌亮点与风味关键词
  flavorKeywords: [
    {
      keyword: "酸香",
      titleEn: "Bright Acidity",
      description: "天然熟成番茄熬煮，果酸生津醒胃，不冲不腻，恰到好处地唤醒味蕾。"
    },
    {
      keyword: "鲜甜",
      titleEn: "Natural Sweetness",
      description: "每日严选新鲜海产，鲜虾与鱼肉的天然甘甜，与番茄汤底无间交融。"
    },
    {
      keyword: "开胃",
      titleEn: "Appetising Warmth",
      description: "热气蒸腾的一碗红汤，第一口暖胃生津，每一口都吸饱高汤精华。"
    }
  ],

  // 菜单数据（支持无限扩展，图片使用高质量 CDN，可随时替换为本地拍摄文件）
  menu: [
    {
      id: "dish-signature-combo",
      isSignature: true,
      badge: "镇店招牌 Signature",
      nameZh: "番茄海鲜面",
      nameEn: "Tomato Seafood Noodles",
      taglineZh: "鲜虾、厚切鱼片与沙巴风味番茄汤的丰盛荟萃",
      price: "RM [待定 / TBC]",
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1000&q=80",
      description: "啊顺师父代表作。浓郁酸香的番茄汤底中，汇聚新鲜大虾与鲜甜鱼肉，面条充分吸收番茄与海产的鲜浓滋味，是番茄仔最圆满的一碗体验。"
    },
    {
      id: "dish-fish",
      isSignature: false,
      badge: "鲜滑首选 Fish Slices",
      nameZh: "番茄鱼肉面",
      nameEn: "Tomato Fish Slice Noodles",
      taglineZh: "肉质细嫩紧致，吸饱番茄酸香的高汤精华",
      price: "RM [待定 / TBC]",
      image: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=1000&q=80",
      description: "精选新鲜海鱼厚切片，烹煮至恰好熟嫩，鱼肉的纯净鲜甜与番茄果酸在舌尖碰撞，清鲜开胃，久喝不腻。"
    },
    {
      id: "dish-prawn",
      isSignature: false,
      badge: "海味甘甜 Fresh Prawns",
      nameZh: "番茄鲜虾面",
      nameEn: "Tomato Fresh Prawn Noodles",
      taglineZh: "弹牙鲜红海虾，为汤底注入浓郁海风甘甜",
      price: "RM [待定 / TBC]",
      image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1000&q=80",
      description: "整尾新鲜红虾入汤，虾肉紧实脆爽。虾头熬出的天然鲜味与番茄高汤锁在一起，汤头更加醇厚鲜美。"
    }
  ],

  // 海鲜食材灵魂专区 (Section 05)
  seafoodShowcase: [
    {
      nameZh: "严选新鲜海虾",
      nameEn: "Fresh Ocean Prawns",
      desc: "壳亮肉弹，为浓汤增添第一道鲜甜海味",
      image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=700&q=80"
    },
    {
      nameZh: "厚切海鱼片",
      nameEn: "Tender Fish Fillets",
      desc: "质地嫩滑无腥，与番茄的自然果酸完美契合",
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=700&q=80"
    },
    {
      nameZh: "鲜熬熟成番茄高汤",
      nameEn: "Slow-Simmered Tomato Broth",
      desc: "大颗番茄温火慢煨，酸甜浓郁，滴滴入味",
      image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=700&q=80"
    }
  ],

  // 常见问答 FAQ (针对 Local SEO: Cheras, KL, Sabah, Sandakan)
  faqs: [
    {
      qZh: "番茄仔 Tomato Boy 在哪里？",
      qEn: "Where is Tomato Boy located?",
      aZh: "番茄仔位于马来西亚吉隆坡蕉赖 (Cheras, Kuala Lumpur)。我们把来自沙巴山打根的风味带到吉隆坡，详细地址与开业日期即将公布，敬请留意页面最新动态！",
      aEn: "Tomato Boy is located in Cheras, Kuala Lumpur, Malaysia. Exact shop lot address will be officially announced shortly."
    },
    {
      qZh: "番茄仔主打卖什么？",
      qEn: "What does Tomato Boy serve?",
      aZh: "番茄仔主打【沙巴风味番茄海鲜面】。特色是用自然熟成番茄慢煨的浓郁酸香汤底，搭配每日新鲜海鲜（如鲜虾、厚切鱼肉）及精选面条，酸香开胃，鲜美温润。",
      aEn: "We specialise in Sabah-inspired Tomato Seafood Noodles, featuring rich tomato broth slow-simmered with fresh seafood like prawns and fish slices."
    },
    {
      qZh: "啊顺师父是谁？",
      qEn: "Who is Chef Ah Soon?",
      aZh: "啊顺师父来自沙巴山打根（Sandakan, Sabah），是番茄仔招牌番茄海鲜面的主理厨师。师父凭借对沙巴海鲜风味与家乡烹饪习惯的多年体悟，精心调配出这碗酸香与鲜甜平衡的招牌番茄高汤。",
      aEn: "Chef Ah Soon hails from Sandakan, Sabah. He is the master chef behind our signature tomato seafood broth, bringing cherished Sabah flavours directly to Cheras."
    },
    {
      qZh: "有什么招牌推荐？",
      qEn: "What are your signature dishes?",
      aZh: "最推荐初次到访品尝【番茄海鲜面】（汇集鲜虾与鱼肉的全料大满足）。如果您偏好特定海产，亦可选择纯厚切的【番茄鱼肉面】或鲜甜弹牙的【番茄鲜虾面】。",
      aEn: "Our top recommendation is the Signature Tomato Seafood Noodles (full combo with prawns and fish slices), as well as dedicated Fish Slice or Fresh Prawn options."
    },
    {
      qZh: "番茄汤底喝起来是什么风味感受？",
      qEn: "What is the flavour profile of the tomato broth?",
      aZh: "我们的汤底坚持「酸香、鲜甜、开胃」。纯正番茄的自然果酸突出海鲜的天然甘甜，汤头浓郁而不油腻，让人一口接一口喝到碗底朝天。",
      aEn: "Our broth is bright, naturally sweet, appetising, and deeply comforting — letting the tomato's natural acidity elevate the seafood without excessive oiliness."
    }
  ],

  // 顾客动态与社区证明占位配置 (Social Proof Placeholders)
  socialProof: {
    badge: "Community & Foodies · 敬请期待",
    titleZh: "即将在 Cheras 留下每一碗好评",
    titleEn: "Real Foodies. Real Sabah Flavour Coming Soon.",
    note: "真实食客口碑与试吃评价将在正式开业后实时更新展示（不虚构虚假评分）。"
  },

  // 第三方分析追踪代码（上线时填入真实 ID）
  analytics: {
    googleAnalyticsId: "GA4_ID_HERE", // 例如: "G-XXXXXXXXXX"
    metaPixelId: "META_PIXEL_ID_HERE"   // 例如: "123456789012345"
  }
};
