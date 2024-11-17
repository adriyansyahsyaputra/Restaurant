const getDataFoods = [
  {
    id: 1,
    name: "Nasi Goreng Spesial",
    rating: 4.5,
    quantity: 10,
    reviewer: 230,
    price: "35000",
    image: "foods/nasgor.png",
    description:
      "Nasi goreng spesial dengan rasa autentik Indonesia, disajikan dengan topping telur mata sapi, potongan ayam, dan irisan sosis. Hidangan ini dilengkapi kerupuk renyah yang menambah kelezatan setiap suapan.",
  },
  {
    id: 2,
    name: "Pasta Carbonara",
    rating: 4.2,
    quantity: 15,
    reviewer: 190,
    price: "55000",
    image: "foods/pasta-carbonara.jpg",
    description:
      "Pasta creamy khas Italia dengan saus carbonara yang kaya rasa, dibuat dari campuran keju, krim, dan potongan daging asap yang gurih. Sajian ini sempurna untuk Anda yang mencari makanan lezat dan mengenyangkan.",
  },
  {
    id: 3,
    name: "Sate Ayam Madura",
    rating: 4.6,
    quantity: 20,
    reviewer: 310,
    price: "40000",
    image: "foods/sate-ayam.jpg",
    description:
      "Sate ayam khas Madura yang dibuat dari potongan daging ayam empuk, dipanggang hingga harum, dan disajikan dengan saus kacang yang kaya rasa. Hidangan ini semakin nikmat dengan tambahan lontong dan bawang goreng.",
  },
  {
    id: 4,
    name: "Beef Stroganoff",
    rating: 4.4,
    quantity: 12,
    reviewer: 175,
    price: "70000",
    image: "foods/beef-stroganoff.jpg",
    description:
      "Beef Stroganoff adalah hidangan daging sapi empuk yang dimasak dengan saus krim lembut dan sedikit asam. Menu khas Rusia ini sangat cocok dinikmati bersama nasi putih atau mashed potato.",
  },
  {
    id: 5,
    name: "Rendang Sapi",
    rating: 4.8,
    quantity: 8,
    reviewer: 290,
    price: "65000",
    image: "foods/rendang-sapi.jpg",
    description:
      "Rendang sapi adalah masakan tradisional Minang yang terkenal di dunia, dibuat dari daging sapi berkualitas yang dimasak lama dengan bumbu rempah hingga menghasilkan rasa yang gurih dan kaya. Hidangan ini cocok disantap dengan nasi hangat.",
  },
  {
    id: 6,
    name: "Fish and Chips",
    rating: 4.3,
    quantity: 18,
    reviewer: 150,
    price: "50000",
    image: "foods/fish-chips.jpg",
    description:
      "Fish and Chips klasik dengan fillet ikan segar yang digoreng renyah, disajikan bersama kentang goreng gurih dan saus tartar. Hidangan khas Inggris ini sempurna untuk makan siang yang ringan namun memuaskan.",
  },
  {
    id: 7,
    name: "Ayam Betutu",
    rating: 4.5,
    quantity: 14,
    reviewer: 220,
    price: "60000",
    image: "foods/ayam-betutu.jpg",
    description:
      "Ayam Betutu adalah masakan tradisional Bali dengan ayam yang dimasak bersama rempah-rempah khas hingga menghasilkan rasa yang kaya dan pedas. Menu ini sangat nikmat saat disajikan dengan nasi hangat dan sambal matah.",
  },
  {
    id: 8,
    name: "Lasagna Bolognese",
    rating: 4.2,
    quantity: 10,
    reviewer: 160,
    price: "65000",
    image: "foods/lasagna-bolognese.jpg",
    description:
      "Lasagna khas Italia yang terdiri dari lapisan pasta lembut, saus bolognese kaya rasa, dan keju mozzarella yang meleleh. Hidangan ini adalah pilihan tepat bagi pencinta makanan dengan tekstur dan rasa yang memanjakan lidah.",
  },
  {
    id: 9,
    name: "Gado-Gado",
    rating: 4.1,
    quantity: 25,
    reviewer: 130,
    price: "30000",
    image: "foods/gado-gado.jpg",
    description:
      "Gado-gado adalah salad khas Indonesia yang terdiri dari sayuran segar, tahu, tempe, dan lontong, disiram dengan saus kacang yang kental dan gurih. Hidangan ini menjadi pilihan sehat untuk Anda yang mencari menu vegetarian.",
  },
  {
    id: 10,
    name: "Steak Frites",
    rating: 4.6,
    quantity: 9,
    reviewer: 210,
    price: "75000",
    image: "foods/steak-frites.jpg",
    description:
      "Steak Frites adalah hidangan khas Prancis dengan daging steak yang dipanggang sempurna dan disajikan dengan kentang goreng renyah. Menu ini menawarkan rasa gurih dan tekstur lembut yang memanjakan lidah.",
  },
  {
    id: 11,
    name: "Sop Buntut",
    rating: 4.4,
    quantity: 7,
    reviewer: 180,
    price: "65000",
    image: "foods/sop-buntut.jpg",
    description:
      "Sop buntut khas Indonesia yang dibuat dari buntut sapi empuk, disajikan dalam kuah kaldu bening dengan rasa yang kaya dan lezat. Menu ini sangat cocok untuk Anda yang ingin menikmati makanan berkuah hangat.",
  },
  {
    id: 41,
    name: "Paella",
    rating: 4.5,
    quantity: 13,
    reviewer: 200,
    price: "85000",
    image: "foods/paella.jpg",
    description:
      "Paella adalah hidangan nasi khas Spanyol yang dimasak dengan campuran seafood segar, ayam, dan rempah-rempah khas. Hidangan ini menghadirkan cita rasa otentik yang menggugah selera.",
  },
  {
    id: 13,
    name: "Bakso Malang",
    rating: 4.3,
    quantity: 30,
    reviewer: 300,
    price: "25000",
    image: "foods/bakso-malang.jpg",
    description:
      "Bakso Malang adalah hidangan khas Jawa Timur dengan bakso daging sapi yang kenyal, tahu goreng, dan mie kuning. Kuah kaldu yang gurih membuat sajian ini cocok dinikmati di segala suasana.",
  },
  {
    id: 14,
    name: "Pizza Margherita",
    rating: 4.7,
    quantity: 8,
    reviewer: 260,
    price: "90000",
    image: "foods/pizza-margherita.jpg",
    description:
      "Pizza klasik asal Italia dengan topping sederhana berupa saus tomat segar, keju mozzarella, dan daun basil. Rasanya yang autentik menjadikan menu ini favorit di kalangan pecinta pizza.",
  },
  {
    id: 15,
    name: "Mie Goreng Jawa",
    rating: 4.2,
    quantity: 22,
    reviewer: 150,
    price: "28000",
    image: "foods/miegoreng-jawa.jpg",
    description:
      "Mie goreng dengan cita rasa khas Jawa yang kaya bumbu, disajikan dengan potongan ayam, telur, dan sayuran segar. Sajian ini adalah pilihan tepat untuk makan malam yang mengenyangkan.",
  },
  {
    id: 16,
    name: "Quiche Lorraine",
    rating: 4.1,
    quantity: 14,
    reviewer: 110,
    price: "55000",
    image: "foods/quiche-lorraine.jpg",
    description:
      "Quiche Lorraine adalah pai khas Prancis dengan isian campuran telur, krim, dan daging asap yang gurih. Sajian ini sempurna untuk sarapan atau makan siang ringan.",
  },
  {
    id: 17,
    name: "Soto Ayam",
    rating: 4.6,
    quantity: 17,
    reviewer: 280,
    price: "30000",
    image: "foods/soto-ayam.jpg",
    description:
      "Soto ayam adalah hidangan berkuah kuning khas Indonesia dengan rasa rempah yang kaya. Disajikan dengan potongan ayam, telur rebus, dan sambal, menu ini selalu menjadi favorit.",
  },
  {
    id: 18,
    name: "Beef Wellington",
    rating: 4.5,
    quantity: 6,
    reviewer: 190,
    price: "120000",
    image: "foods/beef-wellingtons.jpg",
    description:
      "Beef Wellington adalah hidangan mewah dengan daging sapi yang dilapisi puff pastry renyah, jamur, dan prosciutto. Menu ini cocok untuk momen spesial dan makan malam elegan.",
  },
  {
    id: 19,
    name: "Tongseng Ayam",
    rating: 4.3,
    quantity: 35,
    reviewer: 140,
    price: "25000",
    image: "foods/tongseng-ayam.jpg",
    description:
      "Tongseng ayam adalah masakan tradisional Jawa yang memadukan rasa manis, pedas, dan gurih dalam kuah santan. Daging ayam yang empuk semakin melengkapi kelezatan hidangan ini.",
  },
  {
    id: 20,
    name: "Croissant Sandwich",
    rating: 4.4,
    quantity: 20,
    reviewer: 155,
    price: "45000",
    image: "foods/croissant-sandwich.jpg",
    description:
      "Croissant sandwich adalah perpaduan sempurna antara roti croissant renyah dan isian seperti daging, keju, dan sayuran segar. Cocok untuk sarapan praktis atau camilan di sore hari.",
  },
];

export { getDataFoods };
