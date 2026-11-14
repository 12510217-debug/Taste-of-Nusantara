// ===== DATA RESEP KULINER =====
const culinaryData = [
  {
    id: 'rendang',
    name: 'Rendang Minang',
    island: 'Sumatra',
    category: 'heavy',
    image: 'assets/images/rendang.jpg',
    desc: 'Hidangan daging sapi empuk berlapis bumbu rempah kaya santan yang dimasak berjam-jam hingga karamelisasi sempurna.',
    ingredients: ['1 kg Daging Sapi (paha)', '1 liter Santan kental dari 3 butir kelapa', '3 lembar Daun jeruk purut', '2 lembar Daun kunyit', '2 batang Serai, memarkan', 'Bumbu halus: Bawang merah, bawang putih, cabai merah, lengkuas, jahe, kunyit, ketumbar, garam.'],
    steps: ['1. Potong daging sapi sesuai selera.', '2. Rebus santan bersama bumbu halus, serai, daun jeruk, dan daun kunyit dengan api sedang.', '3. Masukkan daging sapi, aduk perlahan hingga santan mendidih dan berminyak (Gulai).', '4. Kecilkan api, aduk terus menerus hingga santan mengering, berwarna kecokelatan gelap, dan empuk (Kalio & Rendang).', '5. Angkat dan sajikan hangat.'],
    prepTime: '4 Jam',
    servings: '6 Porsi'
  },
  {
    id: 'pempek',
    name: 'Pempek Palembang',
    island: 'Sumatra',
    category: 'snacks',
    image: 'assets/images/pempek.jpg',
    desc: 'Kudapan gurih berbahan dasar ikan giling dan sagu, disajikan bersama kuah cuko asam manis pedas yang menyegarkan.',
    ingredients: ['500g Daging ikan tenggiri giling', '300ml Air es', '1 sendok makan Garam', '1 sendok teh Gula pasir', '400g Tepung sagu', 'Bahan Cuko: Gula aren, asam jawa, cabai rawit, bawang putih, air, ebi bubuk, garam.'],
    steps: ['1. Campur daging ikan giling dengan air es, garam, dan gula hingga kenyal dan menyatu.', '2. Masukkan tepung sagu sedikit-sedikit, aduk ringan jangan terlalu diuleni.', '3. Bentuk adonan sesuai selera (kapal selam diisi telur, lenjer bentuk silinder).', '4. Rebus dalam air mendidih hingga mengapung, lalu tiriskan.', '5. Goreng sebelum disajikan dengan kuah cuko.'],
    prepTime: '60 Menit',
    servings: '5 Porsi'
  },
  {
    id: 'mie-aceh',
    name: 'Mie Aceh',
    island: 'Sumatra',
    category: 'heavy',
    image: 'assets/images/mieaceh.jpg',
    desc: 'Mie kuning tebal dengan kuah kari berempah pekat, disajikan bersama irisan daging sapi, kambing, atau makanan laut.',
    ingredients: ['400g Mie kuning basah', '200g Daging sapi / udang', 'Kol, tauge, tomat secukupnya', 'Bumbu kari halus: Cabai merah, bawang merah, bawang putih, jintan, kapulaga, kunyit, kemiri.', 'Kecap manis & kuah kaldu'],
    steps: ['1. Tumis bumbu halus hingga harum.', '2. Masukkan daging sapi atau udang, aduk hingga berubah warna.', '3. Masukkan sayuran kol dan tauge, lalu tuang kaldu.', '4. Masukkan mie kuning, bambahkan garam, kecap, dan aduk rata hingga meresap.', '5. Sajikan dengan emping dan acar.'],
    prepTime: '30 Menit',
    servings: '3 Porsi'
  },
  {
    id: 'gudeg',
    name: 'Gudeg Yogyakarta',
    island: 'Jawa',
    category: 'heavy',
    image: 'Gudeg.jpg',
    desc: 'Olahan nangka muda (gori) yang dimasak berjam-jam dengan gula jawa dan santan, menghasilkan rasa manis gurih khas Jawa.',
    ingredients: ['1 kg Nangka muda, potong-potong', '1 liter Santan', '200g Gula jawa, sisir', 'Bumbu halus: Bawang merah, bawang putih, kemiri, ketumbar', 'Daun salam, lengkuas, daun jeruk'],
    steps: ['1. Susun daun salam dan lengkuas di dasar panci.', '2. Masukkan nangka muda, taburi gula jawa, dan siram bumbu halus serta santan.', '3. Masak dengan api kecil tertutup selama 4 hingga 5 jam hingga nangka berwarna kemerahan dan empuk.', '4. Sajikan dengan opor ayam, sambal krecek, dan nasi hangat.'],
    prepTime: '5 Jam',
    servings: '6 Porsi'
  },
  {
    id: 'tinutuan',
    name: 'Bubur Manado',
    island: 'Sulawesi',
    category: 'heavy',
    image: 'assets/images/tinutuan.jpg',
    desc: 'Makanan khas Sulawesi Utara yang terbuat dari campuran beras, sayuran segar, seperti labu kuning, bayam, kangkung, dan jagung. Memiliki tekstur lembut, rasa gurih, serta kaya akan nutrisi dan serat. Biasanya disajikan dengan sambal roa dan ikan asin.',
    ingredients: ['200 gram beras, 150 gram labu kuning, 1 buah jagung manis, 1 ikat kangkung, 1 ikat bayam, 1 batang serai, 1 batang daun bawang, 1 liter air, garam dan kaldu bubuk secukupnya.'],
    steps: ['1. Rebus beras bersama air dan serai hingga beras mulai menjadi bubur. 2. Masukkan jagung manis dan labu kuning, masak hingga empuk. 3. Aduk sesekali agar bubur tidak gosong di bagian bawah. 4. Tambahkan garam dan kaldu bubuk secukupnya. 5. Masukkan kangkung dan bayam, aduk hingga sayuran layu. 6. Tambahkan daun bawang, lalu masak hingga semua bahan matang dan tekstur bubur mengental. 7. Angkat dan sajikan selagi hangat.'],
    prepTime: '60 menit',
    servings: '4-5  Porsi'
  },
  {
    id: 'soto-banjar',
    name: 'Soto Banjar',
    island: 'Kalimantan',
    category: 'heavy',
    image: 'assets/images/sotobanjar.jpg',
    desc: 'Soto ayam berkuah bening kekuningan dengan aroma harum rempah kayu manis, kapulaga, dan cengkeh khas Kalimantan Selatan.',
    ingredients: ['1 ekor Ayam kampung', 'Rempah cemplung: Kayu manis, cengkeh, kapulaga, pekak', 'Bumbu halus: Bawang merah, bawang putih, merica', 'Pelengkap: Perkedel kentang, suwun, telur rebus, ketupat'],
    steps: ['1. Rebus ayam hingga empuk, suwir dagingnya.', '2. Tumis bumbu halus bersama rempah cemplung, lalu masukkan ke dalam air rebusan ayam sebagai kuah kaldu.', '3. Beri susu cair atau santan encer sedikit jika suka kuah lebih gurih.', '4. Tata ketupat, suun, suwiran ayam, dan perkedel di mangkuk, siram kuah panas.'],
    prepTime: '60 Menit',
    servings: '5 Porsi'
  },
  {
    id: 'coto-makassar',
    name: 'Coto Makassar',
    island: 'Sulawesi',
    category: 'heavy',
    image: 'assets/images/cotomakassar.jpg',
    desc: 'Sup daging dan jeroan sapi khas Makassar dengan kuah kental kaya kacang tanah sangrai dan rempah gurih.',
    ingredients: ['500g Daging dan jeroan sapi', '200g Kacang tanah, sangrai dan haluskan', 'Bumbu halus: Bawang merah, bawang putih, ketumbar, jintan, merica, lengkuas, serai', 'Air tajin (air cucian beras kedua)'],
    steps: ['1. Rebus daging dan jeroan sapi dalam air tajin hingga empuk.', '2. Tumis bumbu halus hingga harum, lalu masukkan ke dalam rebusan daging.', '3. Masukkan kacang tanah halus, aduk rata dan masak hingga bumbu meresap.', '4. Sajikan hangat bersama ketupat atau buras dan sambal tauco.'],
    prepTime: '90 Menit',
    servings: '5 Porsi'
  },
  {
    id: 'papeda',
    name: 'Papeda Papua',
    island: 'Papua',
    category: 'diet',
    image: 'assets/images/papeda.jpg',
    desc: 'Bubur sagu khas Papua bertekstur kenyal lembut, lazim dinikmati bersama kuah kuning ikan kuah asam segar.',
    ingredients: ['250g Tepung sagu murni', '1 liter Air mendidih', 'Garam secukupnya', 'Kuah Ikan: Ikan kakap/tenggiri, belimbing wuluh, kemangi, kunyit, serai, cabai.'],
    steps: ['1. Larutkan tepung sagu dengan sedikit air dingin di mangkuk.', '2. Tuang air mendidih secara perlahan sambil terus diaduk cepat dan konstan hingga sagu berubah warna bening transparan dan kenyal.', '3. Masak ikan dengan bumbu kuah kuning dan belimbing wuluh hingga harum.', '4. Sajikan papeda selagi hangat bersama kuah ikan.'],
    prepTime: '30 Menit',
    servings: '4 Porsi'
  },
  {
    id: 'ayam-betutu',
    name: 'Ayam Betutu Bali',
    island: 'Bali',
    category: 'heavy',
    image: 'assets/images/ayambetutu.jpg',
    desc: 'Ayam utuh yang dibumbui rempah lengkap base genep khas Bali, lalu dibungkus daun pisang dan dipanggang perlahan.',
    ingredients: ['1 ekor Ayam kampung utuh', 'Bumbu Base Genep: Bawang merah, bawang putih, cabai, kemiri, ketumbar, kunyit, jahe, lengkuas, kencur, terasi, serai', 'Minyak kelapa murni'],
    steps: ['1. Haluskan seluruh bumbu base genep dan tumis sebentar dengan minyak kelapa.', '2. Lumuri seluruh permukaan dan rongga perut ayam dengan bumbu secara merata.', '3. Bungkus rapat ayam dengan daun pisang.', '4. Kukus atau panggang dalam oven dengan suhu sedang selama 2 hingga 3 jam hingga empuk meresap.'],
    prepTime: '3 Jam',
    servings: '6 Porsi'
  },
  {
    id: 'klepon',
    name: 'Klepon Tradisional',
    island: 'Jawa',
    category: 'snacks',
    image: 'assets/images/klepon.jpg',
    desc: 'Kue bulat hijau dari tepung ketan berisi gula aren cair yang meletus di mulut, dibalut parutan kelapa gurih.',
    ingredients: ['250g Tepung ketan putih', '50ml Air suji / pandan', '150ml Air hangat', 'Gula merah sisir secukupnya', '100g Kelapa parut kukus'],
    steps: ['1. Campur tepung ketan dengan air pandan dan air hangat sedikit demi sedikit hingga bisa dipulung.', '2. Ambil sedikit adonan, pipihkan, beri isian gula merah di tengahnya, lalu bulatkan.', '3. Rebus bola klepon dalam air mendidih hingga mengapung sebagai tanda sudah matang.', '4. Gulingkan di atas parutan kelapa kukus.'],
    prepTime: '30 Menit',
    servings: '4 Porsi'
  }
];

// ===== DATA PULAU UNTUK PETA =====
const islandData = {
  Sumatra: { label:'Sumatera', coords:[0.5897,101.3431], zoom:6,
    history:"Sumatera dikenal sebagai 'Suwarnadwipa' (Pulau Emas) dalam catatan kuno dan menjadi pusat perdagangan maritim serta Kerajaan Sriwijaya.",
    foods:[['Rendang','Daging sapi khas Minangkabau yang dimasak lama dengan santan dan rempah.'],['Pempek','Makanan khas Palembang berbahan ikan dan sagu dengan kuah cuko.'],['Mie Aceh','Mie kuning tebal berkuah kari kental berempah.'],['Bika Ambon','Kue tradisional Medan berongga beraroma daun jeruk.'],['Gulai Itiak','Masakan bebek khas Bukittinggi dengan cabai hijau giling.']] },
  Jawa: { label:'Jawa', coords:[-7.6145,110.7122], zoom:7,
    history:"Jawa adalah pusat peradaban klasik yang melahirkan Majapahit, Mataram, hingga pusat pemerintahan modern Indonesia.",
    foods:[['Gudeg','Nangka muda dimasak berjam-jam dengan gula jawa dan santan khas Yogyakarta.'],['Rawon','Sup daging berkuah hitam dengan kluwek khas Jawa Timur.'],['Soto Betawi','Soto berkuah santan gurih khas Jakarta.'],['Kerak Telor','Olahan ketan, telur, ebi, dan serundeng khas Betawi.'],['Lumpia Semarang','Gorengan isi rebung dan ayam/udang dengan saus kental.']] },
  Kalimantan: { label:'Kalimantan', coords:[-0.5,114.0], zoom:6,
    history:"Pulau Borneo kaya sejarah kerajaan Hindu-Islam tertua seperti Kutai serta tradisi masyarakat adat Dayak di hutan tropis.",
    foods:[['Soto Banjar','Soto ayam berkuah bening beraroma rempah khas Banjar.'],['Nasi Kuning Banjar','Nasi kuning bumbu habang dengan lauk telur/ikan.'],['Chai Kue','Kue isi bengkuang atau kucai khas Singkawang.'],['Gangan Manok','Sup ayam tradisional Dayak berkuah bening segar.'],['Wadi','Makanan fermentasi ikan air tawar khas Kalimantan.']] },
  Sulawesi: { label:'Sulawesi', coords:[-1.5,121.5], zoom:6,
    history:"Dikenal dengan pelaut ulung Bugis-Makassar, kerajaan maritim Gowa-Tallo, serta situs megalitikum Toraja.",
    foods:[['Coto Makassar','Sup daging berkuah kental kaya kacang tanah sangrai.'],['Pisang Epe','Pisang bakar pipih berkuah gula merah khas Makassar.'],['Konro','Sup iga sapi berkuah hitam berempah kluwek.'],['Nasi Kuning Manado','Nasi kuning dengan cakalang fufu rica-rica pedas.'],['Kue Panada','Kue empuk isi tumisan ikan cakalang pedas.']] },
  Papua: { label:'Papua', coords:[-4.2,137.0], zoom:6,
    history:"Memiliki tradisi luhur masyarakat adat yang harmonis dengan alam pegunungan serta kekayaan alam melimpah.",
    foods:[['Papeda','Bubur sagu kenyal dengan kuah kuning ikan.'],['Ikan Bakar Manokwari','Ikan bakar segar dengan sambal mentah ulek.'],['Kue Lontar','Kue pai susu manis tradisional.'],['Udang Selingkuh','Udang air tawar besar khas sungai Baliem.'],['Sagu Bakar','Olahan sagu padat yang dibakar hingga gurih.']] },
  Bali: { label:'Bali', coords:[-8.4095,115.1889], zoom:9,
    history:"Pulau Dewata dengan budaya Hindu-Bali yang kuat; kuliner Bali berpusat pada base genep, bumbu dasar kaya rempah untuk upacara dan keseharian.",
    foods:[['Ayam Betutu','Ayam berbumbu base genep dibungkus daun pisang dan dipanggang lama.'],['Sate Lilit','Sate cincang ikan/daging dililit pada batang serai.'],['Lawar','Campuran sayur, kelapa parut, dan daging berbumbu khas Bali.'],['Babi Guling','Babi panggang utuh berbumbu rempah, sajian upacara adat.'],['Nasi Campur Bali','Nasi dengan aneka lauk kecil: sate, lawar, ayam suwir, sambal matah.']] }
};
