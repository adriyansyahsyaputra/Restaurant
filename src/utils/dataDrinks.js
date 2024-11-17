const getDataDrinks = [
  {
    id: 21,
    name: "Es Teh Manis",
    rating: 4.5,
    quantity: 50,
    reviewer: 300,
    price: "10000",
    image: "/drinks/esteh.jpg",
    description:
      "Es Teh Manis adalah minuman sederhana namun menyegarkan dengan rasa manis dari gula alami. Cocok untuk menemani santap siang atau sore hari yang hangat.",
  },
  {
    id: 22,
    name: "Cappuccino",
    rating: 4.7,
    quantity: 20,
    reviewer: 220,
    price: "30000",
    image: "/drinks/cappucino.jpg",
    description:
      "Cappuccino adalah perpaduan sempurna antara espresso, susu panas, dan busa susu yang lembut. Minuman ini menjadi pilihan favorit pecinta kopi di pagi atau sore hari.",
  },
  {
    id: 23,
    name: "Es Jeruk",
    rating: 4.3,
    quantity: 40,
    reviewer: 250,
    price: "12000",
    image: "/drinks/esjeruk.jpg",
    description:
      "Es Jeruk terbuat dari jeruk segar yang diperas langsung untuk memberikan rasa asam manis alami. Minuman ini sangat pas untuk menghilangkan dahaga.",
  },
  {
    id: 24,
    name: "Latte",
    rating: 4.6,
    quantity: 25,
    reviewer: 270,
    price: "32000",
    image: "/drinks/latte.jpg",
    description:
      "Latte adalah minuman kopi yang creamy dengan campuran espresso dan susu yang di-steam. Rasanya lembut dan aromanya harum, cocok untuk menemani suasana santai.",
  },
  {
    id: 25,
    name: "Es Cendol",
    rating: 4.4,
    quantity: 35,
    reviewer: 190,
    price: "15000",
    image: "/drinks/escendol.jpg",
    description:
      "Es Cendol adalah minuman tradisional Indonesia yang manis dan segar, terdiri dari cendol hijau, santan, dan gula merah cair. Cocok dinikmati di siang hari.",
  },
  {
    id: 26,
    name: "Green Tea Matcha",
    rating: 4.5,
    quantity: 18,
    reviewer: 210,
    price: "28000",
    image: "/drinks/green-tea.jpg",
    description:
      "Green Tea Matcha adalah minuman khas Jepang dengan rasa teh hijau yang khas dan sedikit pahit. Minuman ini juga dikenal baik untuk kesehatan.",
  },
  {
    id: 27,
    name: "Jus Kalamansi",
    rating: 4.3,
    quantity: 20,
    reviewer: 130,
    price: "13000",
    image: "/drinks/jus-kalamansi.jpg",
    description:
      "Jus Kalamansi adalah minuman segar dengan rasa asam manis dari buah kalamansi. Minuman ini kaya akan vitamin C dan sangat menyegarkan.",
  },
  {
    id: 28,
    name: "Espresso",
    rating: 4.6,
    quantity: 15,
    reviewer: 240,
    price: "25000",
    image: "/drinks/espresso.jpg",
    description:
      "Espresso adalah minuman kopi pekat yang disajikan dalam porsi kecil namun penuh rasa. Cocok bagi Anda yang menginginkan dosis energi ekstra.",
  },
  {
    id: 29,
    name: "Es Kelapa Muda",
    rating: 4.4,
    quantity: 30,
    reviewer: 200,
    price: "18000",
    image: "/drinks/eskelapa.jpg",
    description:
      "Es Kelapa Muda adalah minuman tropis yang menyegarkan dengan potongan daging kelapa muda dan air kelapa alami. Sempurna untuk melawan panasnya cuaca.",
  },
  {
    id: 30,
    name: "Hot Chocolate",
    rating: 4.5,
    quantity: 22,
    reviewer: 150,
    price: "35000",
    image: "/drinks/hot-chocolate.jpg",
    description:
      "Hot Chocolate adalah minuman hangat dengan rasa cokelat yang kaya dan creamy. Ideal untuk menemani hari-hari dingin atau momen santai di rumah.",
  },
  {
    id: 31,
    name: "Teh Tarik",
    rating: 4.4,
    quantity: 25,
    reviewer: 190,
    price: "12000",
    image: "/drinks/teh-tarik.jpg",
    description:
      "Teh Tarik adalah minuman khas dengan perpaduan teh dan susu yang ditarik hingga berbusa. Rasanya manis dan aromanya menggugah selera.",
  },
  {
    id: 12,
    name: "Smoothie Berry",
    rating: 4.7,
    quantity: 10,
    reviewer: 180,
    price: "30000",
    image: "/drinks/smoothie-berry.jpg",
    description:
      "Smoothie Berry adalah minuman sehat dan lezat yang dibuat dari campuran berbagai jenis buah berry segar. Kaya akan vitamin dan sangat menyegarkan.",
  },
  {
    id: 33,
    name: "Kopi Tubruk",
    rating: 4.5,
    quantity: 27,
    reviewer: 260,
    price: "15000",
    image: "/drinks/kopi-tubruk.jpg",
    description:
      "Kopi Tubruk adalah kopi tradisional Indonesia yang diseduh langsung dengan bubuk kopi kasar. Rasanya autentik dan aromanya kuat, ideal untuk para penikmat kopi sejati.",
  },
  {
    id: 34,
    name: "Mojito Mocktail",
    rating: 4.3,
    quantity: 15,
    reviewer: 140,
    price: "25000",
    image: "/drinks/mojito-mocktail.jpg",
    description:
      "Mojito Mocktail adalah minuman segar tanpa alkohol dengan perpaduan daun mint, jeruk nipis, dan soda. Cocok untuk suasana santai di hari yang cerah.",
  },
  {
    id: 35,
    name: "Es Kopi Susu",
    rating: 4.6,
    quantity: 35,
    reviewer: 310,
    price: "18000",
    image: "/drinks/eskopi-susu.jpg",
    description:
      "Es Kopi Susu adalah minuman favorit dengan perpaduan kopi, susu, dan es yang menyegarkan. Cocok dinikmati kapan saja sepanjang hari.",
  },
  {
    id: 36,
    name: "Lemon Tea",
    rating: 4.3,
    quantity: 40,
    reviewer: 200,
    price: "15000",
    image: "/drinks/lemon-tea.jpg",
    description:
      "Lemon Tea adalah minuman teh yang segar dengan tambahan perasan lemon. Kombinasi rasa manis dan asamnya sangat menggugah selera.",
  },
  {
    id: 37,
    name: "Jus Alpukat",
    rating: 4.5,
    quantity: 18,
    reviewer: 220,
    price: "17000",
    image: "/drinks/jus-alpukat.jpg",
    description:
      "Jus Alpukat adalah minuman kental dengan rasa creamy dari buah alpukat segar. Tambahkan susu kental manis untuk sensasi rasa yang lebih nikmat.",
  },
  {
    id: 38,
    name: "Milkshake Vanilla",
    rating: 4.4,
    quantity: 12,
    reviewer: 160,
    price: "25000",
    image: "/drinks/milkshake-vanilla.jpg",
    description:
      "Milkshake Vanilla adalah minuman manis dan creamy dengan rasa vanilla yang klasik. Cocok untuk menemani waktu bersantai atau sebagai pencuci mulut.",
  },
  {
    id: 39,
    name: "Wedang Jahe",
    rating: 4.2,
    quantity: 28,
    reviewer: 140,
    price: "12000",
    image: "/drinks/wedang-jahe.jpg",
    description:
      "Wedang Jahe adalah minuman tradisional hangat yang terbuat dari jahe dan gula merah. Minuman ini dikenal baik untuk menghangatkan tubuh dan mengatasi masuk angin.",
  },
  {
    id: 40,
    name: "Es Soda Gembira",
    rating: 4.3,
    quantity: 33,
    reviewer: 180,
    price: "20000",
    image: "/drinks/essoda-gembira.jpg",
    description:
      "Es Soda Gembira adalah minuman menyenangkan dengan kombinasi soda, susu kental manis, dan sirup. Rasanya manis dan segar, cocok untuk segala suasana.",
  },
];

export { getDataDrinks };