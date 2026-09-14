/**
 * 番茄仔 Tomato Boy — 官方配置中心 (全功能进阶版)
 */

window.TOMATO_BOY_CONFIG = {
  brand: {
    nameZh: "番茄仔",
    nameEn: "Tomato Boy",
    sloganMain: "番茄够浓，海鲜够猛！",
    sloganSub: "鲜到上头！番茄汤底 · 海鲜现煮",
    storyHeadline: "一碗来自沙巴的番茄海鲜面",
    chefName: "啊顺师父",
    chefTitle: "Chef Ah Soon · Sandakan, Sabah",
    locationCity: "Cheras, Kuala Lumpur, Malaysia"
  },

  // 营业与到店状态
  status: {
    isOpen: false,
    badgeText: "🟢 筹备试营业中 · 开放首批 WhatsApp 尝鲜预订",
    softOpeningDate: "即将正式公布"
  },

  contact: {
    whatsappNumber: "WHATSAPP_NUMBER_HERE", 
    whatsappDefaultMessage: "你好番茄仔！我想咨询 / 预约尝鲜【沙巴番茄海鲜面】！",
    // Google Maps & Waze 本地双导航
    googleMapsUrl: "https://maps.google.com/?q=Cheras+Kuala+Lumpur+Tomato+Boy",
    wazeUrl: "https://waze.com/ul?q=Cheras+Kuala+Lumpur",
    address: {
      displayAddressZh: "吉隆坡 蕉赖 (Cheras, Kuala Lumpur)",
      displayAddressEn: "Cheras, Kuala Lumpur, Malaysia",
      fullAddressPlaceholder: "详细门牌与商圈地址即将公布 (Cheras 核心美食圈)",
      parkingInfo: "周边配有街区泊车位与便利停车空间"
    },
    openingHours: {
      displayZh: "每日 10:30 AM – 9:30 PM (筹备试营业中)",
      hours: "10:30 - 21:30"
    }
  },

  // 社交媒体矩阵 (Facebook, 小红书 RED, TikTok)
  socialChannels: [
    {
      platform: "facebook",
      nameZh: "Facebook 官方粉丝专页",
      nameEn: "Follow on Facebook",
      badge: "抢鲜开业福利",
      url: "https://facebook.com/tomatoboy.my",
      color: "#1877F2",
      iconSvg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
      tip: "点赞 Follow 即可第一时间获取【开业买一送一 / 优惠券】一手资讯！"
    },
    {
      platform: "xiaohongshu",
      nameZh: "小红书 官方探店号",
      nameEn: "Red / 小红书 @番茄仔",
      badge: "解锁隐藏吃法",
      url: "https://www.xiaohongshu.com",
      color: "#FE2C55",
      iconSvg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/></svg>',
      tip: "关注小红书打卡标签 #番茄仔TomatoBoy，看真实食客测评与私房吃法！"
    },
    {
      platform: "tiktok",
      nameZh: "TikTok 官方视频号",
      nameEn: "TikTok @tomatoboy.my",
      badge: "爆汁嗦面现场",
      url: "https://tiktok.com",
      color: "#000000",
      iconSvg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>',
      tip: "沉浸式看啊顺师父熬煮番茄浓汤、大头虾焦香镬气短视频，深夜别点！"
    }
  ],

  // 1:1 实拍大碗「食材探测器」热点解说 (Interactive Foodie Hotspots)
  ingredientHotspots: {
    "prawn": {
      name: "生猛海虾 (Ocean Prawn)",
      tag: "原只现烫 · 脆弹甘甜",
      desc: "整只鲜虾在滚烫番茄汤中快速烫熟，虾肉紧致清脆，虾青素自然融入红汤！"
    },
    "oyster": {
      name: "肥美大生蚝 (Plump Oysters)",
      tag: "大颗饱满 · 爆浆甘鲜",
      desc: "精选肥大多汁鲜生蚝，温火断生，一口咬下尽是海洋纯净鲜汁，与番茄果酸绝配！"
    },
    "fish": {
      name: "厚切石斑鱼片 (Grouper Slices)",
      tag: "细嫩厚切 · 无腥无刺",
      desc: "新鲜海鱼厚切片，带皮脆滑肉质如蒜瓣，完全吸饱番茄高汤精华！"
    },
    "crispy-skin": {
      name: "酥香炸鱼皮 (Crispy Fish Skin)",
      tag: "手工炸香 · 吸汁神器",
      desc: "金黄酥脆！趁热浸入番茄红汤 3 秒，外酥内浸汁，口感层次瞬间升华！"
    },
    "tomato-broth": {
      name: "自熬熟番茄原泥 (Tomato Broth)",
      tag: "纯果慢火 · 酸甜浓郁",
      desc: "大颗新鲜番茄熬至起沙化泥，无任何人工色素香精，纯纯果酸生津醒胃！"
    }
  },

  // 5大经典菜品
  menu: [
    {
      id: "dish-signature-combo",
      badge: "镇店之宝 👑",
      nameZh: "招牌番茄海鲜全料面",
      nameEn: "Signature Seafood Tomato Noodles",
      price: "RM [待定 / TBC]",
      image: "assets/images/dish-signature-seafood-combo.jpg",
      description: "生猛大虾 + 大颗肥蚝 + 厚切石斑鱼片 + 酥脆炸鱼皮。浓郁自熬番茄红汤挂面，鲜到上头！"
    },
    {
      id: "dish-giant-prawn-noodles",
      badge: "爆膏必点 🦐",
      nameZh: "生猛大头虾脆生面",
      nameEn: "Giant River Prawn Crispy Noodles",
      price: "RM [待定 / TBC]",
      image: "assets/images/dish-giant-prawn-noodles.jpg",
      description: "巨头大虾对开焦香，金黄虾膏流淌，搭配酥脆炸生面与滑蛋浓芡，镬气升腾！"
    },
    {
      id: "dish-grouper-fish",
      badge: "鲜滑厚切 🐟",
      nameZh: "厚切石斑鱼片番茄面",
      nameEn: "Grouper Fish Slice Tomato Noodles",
      price: "RM [待定 / TBC]",
      image: "assets/images/dish-tomato-grouper-fish.jpg",
      description: "精选新鲜石斑鱼厚切，鱼肉滑嫩带皮，浸入纯正番茄原浆高汤，清润酸爽。"
    },
    {
      id: "dish-red-snapper",
      badge: "深海红鱼 🔴",
      nameZh: "鲜红鲷鱼片番茄面",
      nameEn: "Red Snapper Tomato Noodles",
      price: "RM [待定 / TBC]",
      image: "assets/images/dish-tomato-red-snapper.jpg",
      description: "红润深海鱼肉细嫩弹牙，酸香四溢的番茄汤烘托出鱼肉深层甘鲜，极度开胃。"
    },
    {
      id: "dish-giant-prawn-rice",
      badge: "拌饭神器 🍚",
      nameZh: "招牌大头虾海味浓汁饭",
      nameEn: "Giant Prawn with Rich Broth Rice",
      price: "RM [待定 / TBC]",
      image: "assets/images/dish-giant-prawn-rice.jpg",
      description: "生猛大虾开背煎香，淋上特制酸甜海味浓汁，搭配香热米饭，口口浓郁满足！"
    }
  ],

  // 常见问答
  faqs: [
    {
      qZh: "番茄仔在哪里？如何导航？",
      qEn: "Where is Tomato Boy located?",
      aZh: "番茄仔位于吉隆坡蕉赖 (Cheras, KL)。页面提供 Google Maps 和 Waze 双导航支持，具体店址即将正式通告！"
    },
    {
      qZh: "这一碗招牌海鲜面里面有什么？",
      qEn: "What ingredients are in the signature bowl?",
      aZh: "招牌全料面包含：原只生猛海虾、大颗肥美生蚝、厚切石斑海鱼片、手工酥炸鱼皮，配以纯番茄果泥熬煮的浓汤！"
    },
    {
      qZh: "如何提前预订或关注试营业动态？",
      qEn: "How to reserve or follow soft opening updates?",
      aZh: "点击页面上的【WhatsApp 预约】或关注我们的 Facebook、小红书和 TikTok，即可在试营业开放时第一时间收到通知并锁定尝鲜名额！"
    }
  ],

  analytics: {
    googleAnalyticsId: "GA4_ID_HERE",
    metaPixelId: "META_PIXEL_ID_HERE"
  }
};
