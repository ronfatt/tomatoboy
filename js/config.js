/**
 * 番茄仔 Tomato Boy — 官方品牌与门店数据配置中心 (Gen-Z Street Foodie Edition)
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
    chefOrigin: "沙巴山打根 (Sandakan, Sabah)",
    locationCity: "Cheras, Kuala Lumpur, Malaysia"
  },

  contact: {
    whatsappNumber: "WHATSAPP_NUMBER_HERE", 
    whatsappDefaultMessage: "你好番茄仔！我想咨询 / 预订【沙巴番茄海鲜面】！",
    googleMapsUrl: "https://maps.google.com/?q=Tomato+Boy+Cheras+Kuala+Lumpur",
    wazeUrl: "https://waze.com/ul?q=Tomato+Boy+Cheras+Kuala+Lumpur",
    address: {
      displayAddressZh: "吉隆坡 蕉赖 (Cheras, Kuala Lumpur)",
      displayAddressEn: "Cheras, Kuala Lumpur, Malaysia",
      fullAddressPlaceholder: "详细门牌与商圈地址即将公布 (Cheras 核心美食圈)",
      parkingInfo: "街区充足停车位 / 便利泊车"
    },
    openingHours: {
      displayZh: "筹备试营业中 · 10:30 AM – 9:30 PM (周一至周日)",
      displayEn: "Soft Opening Soon · 10:30 AM – 9:30 PM",
      days: "Monday – Sunday",
      hours: "10:30 - 21:30"
    },
    social: {
      facebook: "https://facebook.com/tomatoboy.my",
      instagram: "https://instagram.com/tomatoboy.my"
    }
  },

  // 互动自选测配器数据 (Interactive Taste Configurator)
  tasteConfigurator: [
    {
      id: "seafood-combo",
      tabName: "👑 豪华全料海鲜面",
      dishNameZh: "招牌番茄海鲜面 (全料王)",
      tagline: "大虾 + 厚切海鱼片 + 现煮浓郁红汤",
      acidity: "★★★★★ (果酸浓郁醒胃)",
      sweetness: "★★★★★ (双重海产清甜)",
      image: "assets/images/tomato-boy-logo-badge.jpg",
      note: "啊顺师父力推！生猛鲜虾与嫩滑鱼肉汇聚一碗，红汤挂面，鲜到上头！"
    },
    {
      id: "fresh-prawn",
      tabName: "🦐 鲜虾派必点",
      dishNameZh: "番茄鲜虾面 (甘甜脆弹)",
      tagline: "原只生猛海虾现煮，虾膏精华融入番茄汤",
      acidity: "★★★★☆ (清爽果酸提味)",
      sweetness: "★★★★★ (虾青素与天然甘甜)",
      image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1000&q=80",
      note: "虾肉紧致弹牙，每一口汤汁都带着海岛沙滩的气息！"
    },
    {
      id: "fish-slice",
      tabName: "🐟 嫩滑鱼肉派",
      dishNameZh: "番茄鱼肉面 (厚切鲜爽)",
      tagline: "厚切海鱼片温火轻烫，嫩而不散，无腥清甜",
      acidity: "★★★★★ (极度开胃生津)",
      sweetness: "★★★★☆ (鱼肉纯净甘甜)",
      image: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=1000&q=80",
      note: "嫩滑鱼片完全吸饱番茄精华，热汤滑入胃底超疗愈！"
    }
  ],

  // 经典菜单项
  menu: [
    {
      id: "dish-signature-combo",
      badge: "镇店爆品 👑",
      nameZh: "番茄海鲜面",
      nameEn: "Signature Tomato Seafood Noodles",
      price: "RM [待定 / TBC]",
      image: "assets/images/tomato-boy-logo-badge.jpg",
      description: "啊顺师父看家之作！鲜虾与厚切鱼肉在浓稠番茄红汤中现煮滚沸，酸香生津，海味甘猛，鲜到上头！"
    },
    {
      id: "dish-fish",
      badge: "鲜嫩爽滑 🐟",
      nameZh: "番茄鱼肉面",
      nameEn: "Tomato Fish Slice Noodles",
      price: "RM [待定 / TBC]",
      image: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=1000&q=80",
      description: "精选厚切海鱼片，精准火候煮至恰好断生，肉质滑嫩无腥，与熟成番茄的天然果酸碰撞出绝妙层次。"
    },
    {
      id: "dish-prawn",
      badge: "海味甘甜 🦐",
      nameZh: "番茄鲜虾面",
      nameEn: "Tomato Fresh Prawn Noodles",
      price: "RM [待定 / TBC]",
      image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1000&q=80",
      description: "生猛大虾滚汤现煮，脆弹紧致。虾汁融入番茄高汤，汤头更显醇厚鲜香，嗦面吸汁极其过瘾。"
    }
  ],

  // 针对 SEO 的常见问答
  faqs: [
    {
      qZh: "番茄仔 Tomato Boy 在哪里？",
      qEn: "Where is Tomato Boy located?",
      aZh: "番茄仔位于马来西亚吉隆坡蕉赖 (Cheras, Kuala Lumpur)。我们把来自沙巴山打根的风味带到吉隆坡，详细地址与开业日期即将公布，敬请留意页面最新动态！",
      aEn: "Tomato Boy is located in Cheras, Kuala Lumpur. Exact address will be officially announced shortly."
    },
    {
      qZh: "番茄仔卖什么？为什么说“鲜到上头”？",
      qEn: "What does Tomato Boy serve?",
      aZh: "番茄仔主打【沙巴风味番茄海鲜面】！核心特色是「番茄够浓，海鲜够猛」——精选熟成番茄熬制浓郁果酸红汤，配上海虾与鱼肉现点现煮，每一口都酸爽鲜甜、生津开胃！",
      aEn: "We specialise in Sabah-inspired Tomato Seafood Noodles, featuring slow-simmered rich tomato broth and freshly boiled seafood."
    },
    {
      qZh: "啊顺师父是谁？",
      qEn: "Who is Chef Ah Soon?",
      aZh: "啊顺师父来自沙巴山打根（Sandakan, Sabah），是番茄仔招牌番茄海鲜面的主理厨师。师父在山打根海港浸润多年，对海鲜鲜度与番茄汤底配比有着严苛标准。",
      aEn: "Chef Ah Soon hails from Sandakan, Sabah. He is the master chef behind our signature tomato seafood broth."
    },
    {
      qZh: "有什么招牌推荐？",
      qEn: "What are your signature dishes?",
      aZh: "首推【招牌番茄海鲜面】（鲜虾与鱼肉双拼的豪华全料王）。喜欢纯纯鱼肉的可点【番茄鱼肉面】，爱吃弹牙虾仁的必选【番茄鲜虾面】！",
      aEn: "Our top recommendation is the Signature Tomato Seafood Noodles (full combo with prawns and fish slices)."
    }
  ],

  analytics: {
    googleAnalyticsId: "GA4_ID_HERE",
    metaPixelId: "META_PIXEL_ID_HERE"
  }
};
