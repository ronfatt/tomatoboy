/**
 * 番茄仔 Tomato Boy — 官方品牌与门店数据配置中心 (实拍菜品全景版)
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
    whatsappDefaultMessage: "你好番茄仔！我在官网上看到了实拍招牌面，想咨询预订！",
    googleMapsUrl: "https://maps.google.com/?q=Tomato+Boy+Cheras+Kuala+Lumpur",
    wazeUrl: "https://waze.com/ul?q=Tomato+Boy+Cheras+Kuala+Lumpur",
    address: {
      displayAddressZh: "吉隆坡 蕉赖 (Cheras, Kuala Lumpur)",
      displayAddressEn: "Cheras, Kuala Lumpur, Malaysia",
      fullAddressPlaceholder: "详细门牌与商圈地址即将公布 (Cheras 核心据点)",
      parkingInfo: "街区充足停车位 / 周边便利泊车"
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

  // 手机端自选测配器数据 (全部联动高清真实实拍图)
  tasteConfigurator: [
    {
      id: "seafood-combo",
      tabName: "👑 豪华全料海鲜面",
      dishNameZh: "招牌番茄海鲜全料面",
      tagline: "大虾 + 肥厚生蚝 + 厚切鱼片 + 酥脆炸鱼皮",
      acidity: "★★★★★ (果酸浓郁开胃)",
      sweetness: "★★★★★ (三重海味天然回甘)",
      image: "assets/images/dish-signature-seafood-combo.jpg",
      note: "与 Logo 完美呼应的镇店代表作！整只红虾、大颗生蚝与鲜鱼片滚汤现烫，配上炸鱼皮吸满茄汁，鲜到上头！"
    },
    {
      id: "giant-prawn-noodles",
      tabName: "🦐 生猛巨头虾生面",
      dishNameZh: "生猛大头虾香脆生面",
      tagline: "对开焦香大头虾，爆满虾膏融入滑蛋芡汁",
      acidity: "★★★☆☆ (鲜香醇厚)",
      sweetness: "★★★★★ (爆膏虾甜与镬气)",
      image: "assets/images/dish-giant-prawn-noodles.jpg",
      note: "金黄焦香巨型大头虾，虾肉脆韧弹牙，搭配炸生面与浓郁滑蛋，镬气十足！"
    },
    {
      id: "grouper-fish",
      tabName: "🐟 厚切石斑鱼片面",
      dishNameZh: "厚切石斑鱼片番茄面",
      tagline: "厚切石斑鱼片整齐排列，纯净鲜滑无腥",
      acidity: "★★★★★ (自然番茄果酸)",
      sweetness: "★★★★☆ (海鱼纯正胶质清甜)",
      image: "assets/images/dish-tomato-grouper-fish.jpg",
      note: "石斑鱼片厚切不断生，鱼肉如蒜瓣般细嫩，浸入纯正熬煮番茄果泥，暖胃又过瘾！"
    },
    {
      id: "red-snapper",
      tabName: "🔴 鲜红鲷鱼片番茄面",
      dishNameZh: "深海红鲷鱼片番茄面",
      tagline: "红皮紧实鱼肉，红汤衬红鱼的极致视觉",
      acidity: "★★★★★ (极度生津醒胃)",
      sweetness: "★★★★☆ (肉质弹爽甘鲜)",
      image: "assets/images/dish-tomato-red-snapper.jpg",
      note: "精选深海红鱼切片，红润诱人，鱼皮爽滑鱼肉紧实，每一口汤都透着山打根的海风滋味！"
    },
    {
      id: "giant-prawn-rice",
      tabName: "🍚 招牌大头虾特调饭",
      dishNameZh: "浓郁海味大头虾特调饭",
      tagline: "生猛大头虾开背，浓香特制酱汁裹满米饭",
      acidity: "★★★★☆ (浓醇咸鲜微酸)",
      sweetness: "★★★★★ (虾汁拌饭灵魂绝配)",
      image: "assets/images/dish-giant-prawn-rice.jpg",
      note: "不想吃面？这一盘大虾盖饭绝对震撼！虾膏与海鲜浓汁浸润每一粒米饭，口口暴击！"
    }
  ],

  // 完整实拍经典菜单库
  menu: [
    {
      id: "dish-signature-combo",
      badge: "镇店之宝 👑",
      nameZh: "招牌番茄海鲜全料面",
      nameEn: "Signature Seafood Tomato Noodles",
      price: "RM [待定 / TBC]",
      image: "assets/images/dish-signature-seafood-combo.jpg",
      description: "啊顺师父巅峰作！生猛大虾、大颗生蚝、厚切鱼片与金黄炸鱼皮汇于一碗，熟成番茄天然酸香渗透每一根面条，鲜到上头！"
    },
    {
      id: "dish-giant-prawn-noodles",
      badge: "爆膏必点 🦐",
      nameZh: "生猛大头虾脆生面",
      nameEn: "Giant River Prawn Crispy Noodles",
      price: "RM [待定 / TBC]",
      image: "assets/images/dish-giant-prawn-noodles.jpg",
      description: "巨无霸大头虾对开焦香，虾膏金黄流淌，与香脆炸生面及滑蛋浓芡碰撞，镬气升腾，满足感拉满！"
    },
    {
      id: "dish-grouper-fish",
      badge: "鲜滑厚切 🐟",
      nameZh: "厚切石斑鱼片番茄面",
      nameEn: "Grouper Fish Slice Tomato Noodles",
      price: "RM [待定 / TBC]",
      image: "assets/images/dish-tomato-grouper-fish.jpg",
      description: "严选新鲜石斑鱼厚切，鱼片紧实滑润无暗刺，搭配慢火熬煮的鲜番茄原泥高汤，清润酸爽，久喝不燥。"
    },
    {
      id: "dish-red-snapper",
      badge: "深海红鱼 🔴",
      nameZh: "鲜红鲷鱼片番茄面",
      nameEn: "Red Snapper Tomato Noodles",
      price: "RM [待定 / TBC]",
      image: "assets/images/dish-tomato-red-snapper.jpg",
      description: "红亮诱人的深海红鱼切片，肉质细嫩弹牙，浸润在酸香四溢的番茄汤中，入口甘美温润，生津开胃。"
    },
    {
      id: "dish-giant-prawn-rice",
      badge: "拌饭神器 🍚",
      nameZh: "招牌大头虾海味浓汁饭",
      nameEn: "Giant Prawn with Rich Broth Rice",
      price: "RM [待定 / TBC]",
      image: "assets/images/dish-giant-prawn-rice.jpg",
      description: "生猛大虾开背香煎，淋上特制酸甜海味浓汁与蒜酥，搭配香热米饭与嫩绿时蔬，浓郁开胃，暴风吸入！"
    }
  ],

  // 常见问答 FAQ
  faqs: [
    {
      qZh: "番茄仔的番茄海鲜面有什么独特之处？",
      qEn: "What makes Tomato Boy noodles special?",
      aZh: "看看我们的真实实拍！每一碗都是「番茄够浓，海鲜够猛」——自熬纯番茄果泥酸香开胃，搭配整只大虾、肥美生蚝、厚切石斑鱼片及手工炸鱼皮现点现煮，拒绝香精勾兑，天然鲜甜！",
      aEn: "Our noodles feature freshly simmered real tomato purée broth paired with whole fresh prawns, plump oysters, thick grouper fish slices, and crispy fish skin."
    },
    {
      qZh: "番茄仔在哪里？什么时候试营业？",
      qEn: "Where is Tomato Boy located?",
      aZh: "番茄仔位于吉隆坡蕉赖 (Cheras, Kuala Lumpur)。我们正在积极筹备试营业，具体店址与开业时间将第一时间在官方渠道公布，欢迎通过 WhatsApp 提前关注登记！",
      aEn: "Located in Cheras, Kuala Lumpur. Soft opening dates and exact shoplot will be officially announced shortly."
    },
    {
      qZh: "啊顺师父是谁？",
      qEn: "Who is Chef Ah Soon?",
      aZh: "啊顺师父来自沙巴山打根 (Sandakan, Sabah)，山打根海港的海风与新鲜海产滋养了师父的烹饪灵感。师父将熟悉的沙巴海鲜煮面技艺带到 Cheras，让大家不用飞沙巴也能吃到地道风味。",
      aEn: "Chef Ah Soon hails from Sandakan, Sabah, bringing beloved Sabah-inspired seafood culinary heritage to Cheras, KL."
    },
    {
      qZh: "除了番茄面，还有其他选择吗？",
      qEn: "Are there other options besides tomato noodles?",
      aZh: "有的！除了招牌全料面与石斑鱼片面，我们还推出镬气十足的【生猛大头虾脆生面】以及浓郁下饭的【大头虾特调浓汁饭】，面饭俱备，满足所有海鲜爱好者的胃！",
      aEn: "Yes! In addition to tomato soup noodles, we also serve Giant River Prawn Crispy Noodles and Giant Prawn Rich Sauce Rice."
    }
  ],

  analytics: {
    googleAnalyticsId: "GA4_ID_HERE",
    metaPixelId: "META_PIXEL_ID_HERE"
  }
};
