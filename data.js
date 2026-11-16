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
    image: 'assets/images/Gudeg.jpg',
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
  },

  // ===== RESEP BARU: SUMATRA =====
  {
    id: 'bika-ambon',
    name: 'Bika Ambon',
    island: 'Sumatra',
    category: 'snacks',
    image: 'assets/images/bika-ambon.jpg',
    desc: 'Kue tradisional berwarna kuning dengan tekstur berongga seperti sarang lebah, beraroma pandan dan berasa manis. Asal: Medan, Sumatera Utara.',
    ingredients: ['150g Tepung tapioka', '75g Tepung terigu', '150g Gula pasir', '4 butir Telur', '300ml Santan', '2 lembar Daun pandan', '2 lembar Daun jeruk', '1 sdt Kunyit bubuk', '1 sdt Ragi instan', '1 sdm Air hangat', '½ sdt Garam'],
    steps: ['1. Rebus santan bersama daun pandan, daun jeruk, kunyit, dan garam. Dinginkan.', '2. Campurkan ragi dengan air hangat dan sedikit gula, diamkan hingga berbusa.', '3. Campurkan tepung tapioka, tepung terigu, dan gula.', '4. Masukkan telur, santan, serta larutan ragi.', '5. Aduk hingga rata dan diamkan sekitar 2 jam.', '6. Tuang adonan ke loyang yang sudah diolesi minyak.', '7. Panggang hingga kue matang dan terbentuk rongga-rongga.', '8. Dinginkan sebelum dipotong.'],
    prepTime: '3 Jam 15 Menit',
    servings: '8 Porsi'
  },
  {
    id: 'gulai-itiak',
    name: 'Gulai Itiak',
    island: 'Sumatra',
    category: 'heavy',
    image: 'assets/images/gulai-itiak.jpg',
    desc: 'Masakan bebek khas Minangkabau yang dimasak dengan cabai hijau dan aneka rempah sehingga menghasilkan rasa gurih serta pedas. Asal: Bukittinggi, Sumatera Barat.',
    ingredients: ['1 ekor Bebek, potong menjadi beberapa bagian', '700ml Santan', '100g Cabai hijau', '2 batang Serai', '3 lembar Daun jeruk', '2 lembar Daun salam', 'Garam secukupnya', 'Bumbu halus: Bawang merah (5 siung), bawang putih (4 siung), kunyit (2 cm), jahe (3 cm), lengkuas (3 cm), ketumbar (1 sdt), cabai hijau'],
    steps: ['1. Bersihkan bebek dan potong sesuai selera.', '2. Haluskan cabai hijau, bawang merah, bawang putih, kunyit, jahe, dan ketumbar.', '3. Tumis bumbu halus bersama serai, lengkuas, daun jeruk, dan daun salam.', '4. Masukkan potongan bebek dan aduk hingga berubah warna.', '5. Tuangkan santan secara perlahan.', '6. Masak dengan api kecil hingga bebek empuk dan bumbu meresap.', '7. Koreksi rasa dan sajikan hangat.'],
    prepTime: '1 Jam 45 Menit',
    servings: '4 Porsi'
  },

  // ===== RESEP BARU: JAWA =====
  {
    id: 'rawon',
    name: 'Rawon',
    island: 'Jawa',
    category: 'heavy',
    image: 'assets/images/rawon.jpg',
    desc: 'Sup daging sapi berkuah hitam yang menggunakan kluwek sebagai bahan utama pemberi warna dan cita rasa khas. Asal: Jawa Timur.',
    ingredients: ['500g Daging sapi', '2 liter Air', '4 buah Kluwek, ambil isinya', '2 batang Serai', '4 lembar Daun jeruk', '2 lembar Daun salam', '2 cm Lengkuas', '2 sdm Minyak goreng', 'Garam secukupnya', 'Bumbu halus: Bawang merah (8 siung), bawang putih (4 siung), kemiri (3 butir), kunyit (2 cm), ketumbar (1 sdt), jahe (1 cm)'],
    steps: ['1. Rebus daging sapi hingga setengah empuk, kemudian potong-potong.', '2. Haluskan kluwek bersama bumbu lainnya.', '3. Tumis bumbu hingga harum.', '4. Masukkan serai, daun jeruk, daun salam, dan lengkuas.', '5. Masukkan tumisan bumbu ke dalam air rebusan daging.', '6. Tambahkan daging dan garam.', '7. Masak hingga daging benar-benar empuk dan kuah berwarna hitam.', '8. Sajikan dengan nasi, tauge, dan telur asin.'],
    prepTime: '1 Jam 55 Menit',
    servings: '5 Porsi'
  },
  {
    id: 'soto-betawi',
    name: 'Soto Betawi',
    island: 'Jawa',
    category: 'heavy',
    image: 'assets/images/soto-betawi.jpg',
    desc: 'Sup daging sapi khas Betawi dengan kuah santan dan susu yang gurih, dilengkapi tomat serta kentang. Asal: Jakarta, DKI Jakarta.',
    ingredients: ['500g Daging sapi', '500ml Santan', '300ml Susu cair', '1,5 liter Air', '2 buah Kentang', '2 buah Tomat', '2 batang Serai', '3 lembar Daun salam', '3 lembar Daun jeruk', 'Garam secukupnya', 'Bumbu halus: Bawang merah (6 siung), bawang putih (4 siung), kemiri (3 butir), jahe (2 cm), ketumbar (1 sdt), merica (½ sdt)'],
    steps: ['1. Rebus daging sapi hingga empuk dan potong sesuai selera.', '2. Haluskan bumbu, lalu tumis hingga harum.', '3. Tambahkan serai, daun salam, dan daun jeruk.', '4. Masukkan bumbu ke dalam air rebusan daging.', '5. Tuangkan santan dan susu secara perlahan sambil diaduk.', '6. Masukkan kentang dan masak hingga matang.', '7. Tambahkan garam sesuai selera.', '8. Sajikan dengan potongan tomat dan bawang goreng.'],
    prepTime: '85 Menit',
    servings: '4 Porsi'
  },
  {
    id: 'kerak-telor',
    name: 'Kerak Telor',
    island: 'Jawa',
    category: 'snacks',
    image: 'assets/images/kerak-telor.jpg',
    desc: 'Makanan tradisional berbahan ketan dan telur yang dimasak menggunakan wajan tanpa banyak minyak, kemudian diberi ebi dan serundeng. Asal: Betawi, Jakarta.',
    ingredients: ['100g Beras ketan putih', '2 butir Telur bebek atau ayam', '2 sdm Ebi kering', '3 sdm Kelapa parut sangrai', '1 sdm Bawang goreng', '½ sdt Garam', '¼ sdt Merica', '½ sdt Gula pasir'],
    steps: ['1. Rendam beras ketan selama kurang lebih 2 jam.', '2. Sangrai kelapa parut hingga kecokelatan.', '3. Sangrai ebi, lalu haluskan.', '4. Panaskan wajan kecil dan masukkan ketan bersama sedikit air.', '5. Tutup dan masak hingga ketan setengah matang.', '6. Tambahkan telur yang sudah dikocok bersama garam dan merica.', '7. Masak hingga telur matang dan bagian bawahnya renyah.', '8. Taburkan ebi, kelapa sangrai, gula, dan bawang goreng.'],
    prepTime: '35 Menit + rendam ketan 2 jam',
    servings: '2 Porsi'
  },
  {
    id: 'lumpia-semarang',
    name: 'Lumpia Semarang',
    island: 'Jawa',
    category: 'snacks',
    image: 'assets/images/lumpia-semarang.jpg',
    desc: 'Gorengan berbentuk gulungan dengan kulit tipis yang berisi rebung, telur, dan ayam atau udang. Asal: Semarang, Jawa Tengah.',
    ingredients: ['12 lembar Kulit lumpia', '300g Rebung, iris tipis', '100g Ayam cincang', '2 butir Telur', '3 siung Bawang putih', '5 siung Bawang merah', '1 sdm Kecap manis', '½ sdt Merica', 'Garam secukupnya', 'Minyak untuk menggoreng'],
    steps: ['1. Rebus rebung hingga empuk dan tiriskan.', '2. Haluskan bawang merah, bawang putih, dan merica.', '3. Tumis bumbu hingga harum.', '4. Masukkan ayam cincang dan masak hingga matang.', '5. Tambahkan rebung, telur, kecap manis, dan garam.', '6. Aduk hingga isian matang dan tidak terlalu berair.', '7. Letakkan isian di atas kulit lumpia, kemudian gulung dan rekatkan ujungnya.', '8. Goreng hingga berwarna keemasan.'],
    prepTime: '60 Menit',
    servings: '4 Porsi (± 12 lumpia)'
  },

  // ===== RESEP BARU: KALIMANTAN =====
  {
    id: 'nasi-kuning-banjar',
    name: 'Nasi Kuning Banjar',
    island: 'Kalimantan',
    category: 'heavy',
    image: 'assets/images/nasi-kuning-banjar.jpg',
    desc: 'Nasi berwarna kuning dari kunyit dan santan yang disajikan bersama lauk seperti telur, ikan, atau ayam. Asal: Kalimantan Selatan.',
    ingredients: ['500g Beras', '400ml Santan', '2 cm Kunyit, haluskan', '2 batang Serai', '3 lembar Daun salam', '2 lembar Daun pandan', '2 lembar Daun jeruk', '1 sdt Garam', 'Pelengkap: 3 butir telur rebus, 200g ikan atau ayam, bawang goreng secukupnya'],
    steps: ['1. Cuci beras hingga bersih.', '2. Rebus santan bersama kunyit, serai, daun salam, daun pandan, dan garam.', '3. Masukkan beras ke dalam santan.', '4. Aduk hingga santan terserap.', '5. Kukus nasi hingga matang dan pulen.', '6. Siapkan telur dan lauk pendamping.', '7. Sajikan nasi kuning bersama lauk dan bawang goreng.'],
    prepTime: '60 Menit',
    servings: '4 Porsi'
  },
  {
    id: 'chai-kue',
    name: 'Chai Kue',
    island: 'Kalimantan',
    category: 'snacks',
    image: 'assets/images/chai-kue.jpg',
    desc: 'Kue kukus berkulit lembut dan kenyal dengan isian bengkuang atau kucai yang gurih. Asal: Singkawang, Kalimantan Barat.',
    ingredients: ['Kulit: 150g tepung beras, 50g tepung tapioka, 300ml air panas, 1 sdm minyak goreng, ½ sdt garam', 'Isian: 250g bengkuang serut, 2 siung bawang putih, 1 sdm ebi, ½ sdt merica, garam secukupnya'],
    steps: ['1. Tumis bawang putih dan ebi hingga harum.', '2. Masukkan bengkuang dan bumbui dengan garam serta merica.', '3. Masak hingga isian agak kering.', '4. Campurkan tepung beras, tapioka, dan garam.', '5. Tuangkan air panas sedikit demi sedikit sambil diaduk.', '6. Tambahkan minyak dan uleni hingga adonan bisa dibentuk.', '7. Ambil adonan, pipihkan, lalu isi dengan tumisan bengkuang.', '8. Bentuk seperti pastel dan kukus selama 15–20 menit.'],
    prepTime: '60 Menit',
    servings: '4 Porsi (± 12 buah)'
  },
  {
    id: 'gangan-manok',
    name: 'Gangan Manok',
    island: 'Kalimantan',
    category: 'diet',
    image: 'assets/images/gangan-manok.jpg',
    desc: 'Sup ayam tradisional dengan kuah bening yang segar, biasanya dilengkapi sayuran dan bumbu sederhana. Pilihan rendah minyak jika diolah tanpa banyak lemak. Asal: Kalimantan Timur.',
    ingredients: ['400g Ayam, potong kecil', '1,5 liter Air', '1 buah Wortel', '1 buah Kentang', '100g Jagung manis', '3 siung Bawang putih', '4 siung Bawang merah', '2 batang Serai', '2 cm Jahe', '1 batang Daun bawang', 'Garam dan merica secukupnya'],
    steps: ['1. Rebus ayam bersama jahe dan serai hingga setengah matang.', '2. Haluskan bawang merah dan bawang putih.', '3. Masukkan bumbu halus ke dalam rebusan.', '4. Tambahkan wortel, kentang, dan jagung.', '5. Masak hingga ayam dan sayuran empuk.', '6. Tambahkan garam serta merica.', '7. Masukkan daun bawang sebelum api dimatikan.', '8. Sajikan selagi hangat.'],
    prepTime: '50 Menit',
    servings: '4 Porsi'
  },
  {
    id: 'wadi',
    name: 'Wadi',
    island: 'Kalimantan',
    category: 'heavy',
    image: 'assets/images/wadi.jpg',
    desc: 'Lauk tradisional berupa ikan air tawar yang difermentasi dengan garam dan beras sangrai. Asal: Kalimantan Tengah dan Kalimantan Selatan.',
    ingredients: ['500g Ikan air tawar segar', '2 sdm Garam', '100g Beras, sangrai hingga kecokelatan lalu tumbuk kasar', 'Cabai sesuai selera', '4 siung Bawang merah', '3 siung Bawang putih', '1 batang Serai', '2 sdm Minyak goreng'],
    steps: ['1. Bersihkan ikan dan potong sesuai ukuran.', '2. Lumuri ikan dengan garam hingga merata.', '3. Diamkan beberapa jam di tempat bersih dan dingin.', '4. Campurkan ikan dengan beras sangrai yang sudah ditumbuk.', '5. Simpan dalam wadah kedap udara yang bersih untuk proses fermentasi (sekitar 3–7 hari).', '6. Setelah fermentasi selesai, ambil ikan secukupnya.', '7. Tumis bawang, cabai, dan serai.', '8. Masukkan ikan wadi dan masak hingga matang sempurna.', 'Catatan keamanan: gunakan resep fermentasi yang teruji, wadah bersih, dan ikan segar. Jangan mengonsumsi ikan yang berbau busuk atau menunjukkan tanda kerusakan.'],
    prepTime: '65 Menit + fermentasi 3–7 hari',
    servings: '4 Porsi'
  },

  // ===== RESEP BARU: SULAWESI =====
  {
    id: 'pisang-epe',
    name: 'Pisang Epe',
    island: 'Sulawesi',
    category: 'snacks',
    image: 'assets/images/pisang-epe.jpg',
    desc: 'Pisang kepok matang yang dibakar, dipipihkan, kemudian disiram saus gula merah yang manis dan legit. Asal: Makassar, Sulawesi Selatan.',
    ingredients: ['8 buah Pisang kepok matang', '150g Gula merah', '150ml Air', '1 lembar Daun pandan', '½ sdt Garam', '1 sdm Margarin'],
    steps: ['1. Kupas pisang kepok.', '2. Olesi pisang dengan sedikit margarin.', '3. Bakar pisang di atas panggangan hingga kecokelatan.', '4. Pipihkan pisang menggunakan alat penekan.', '5. Rebus gula merah, air, daun pandan, dan garam hingga mengental.', '6. Angkat saus dan saring jika diperlukan.', '7. Siramkan saus gula merah di atas pisang.', '8. Sajikan selagi hangat.'],
    prepTime: '25 Menit',
    servings: '4 Porsi'
  },
  {
    id: 'konro',
    name: 'Konro',
    island: 'Sulawesi',
    category: 'heavy',
    image: 'assets/images/konro.jpg',
    desc: 'Sup iga sapi berkuah hitam kecokelatan yang kaya rempah, dengan kluwek sebagai salah satu bahan pemberi warna dan rasa khas. Asal: Makassar, Sulawesi Selatan.',
    ingredients: ['1 kg Iga sapi', '2 liter Air', '4 buah Kluwek', '2 batang Serai', '3 lembar Daun salam', '3 lembar Daun jeruk', '3 cm Lengkuas', '2 sdm Minyak goreng', 'Garam secukupnya', 'Bumbu halus: Bawang merah (8 siung), bawang putih (5 siung), kemiri (3 butir), jahe (2 cm), ketumbar (1 sdt), jintan (½ sdt), merica (½ sdt)'],
    steps: ['1. Rebus iga sapi hingga mulai empuk.', '2. Ambil isi kluwek dan haluskan bersama bumbu lainnya.', '3. Tumis bumbu hingga harum.', '4. Masukkan serai, daun salam, daun jeruk, dan lengkuas.', '5. Masukkan tumisan bumbu ke dalam rebusan iga.', '6. Tambahkan garam dan masak hingga iga benar-benar empuk.', '7. Koreksi rasa dan sajikan dengan nasi atau ketupat.'],
    prepTime: '2 Jam 25 Menit',
    servings: '4 Porsi'
  },
  {
    id: 'nasi-kuning-manado',
    name: 'Nasi Kuning Manado',
    island: 'Sulawesi',
    category: 'heavy',
    image: 'assets/images/nasi-kuning-manado.jpg',
    desc: 'Nasi kuning dengan aroma rempah yang khas dan biasanya disajikan bersama ikan cakalang, sambal, serta pelengkap lainnya. Asal: Manado, Sulawesi Utara.',
    ingredients: ['500g Beras', '400ml Santan', '2 cm Kunyit, haluskan', '2 batang Serai', '3 lembar Daun pandan', '3 lembar Daun jeruk', '1 sdt Garam', 'Lauk: 250g ikan cakalang, 5 cabai merah, 4 siung bawang merah, 3 siung bawang putih, 1 buah tomat, garam secukupnya'],
    steps: ['1. Cuci beras hingga bersih.', '2. Rebus santan dengan kunyit, serai, daun pandan, daun jeruk, dan garam.', '3. Masukkan beras dan aduk hingga santan terserap.', '4. Kukus beras hingga matang.', '5. Suwir ikan cakalang yang sudah dikukus atau direbus.', '6. Tumis bawang merah, bawang putih, dan cabai.', '7. Masukkan tomat serta ikan cakalang, lalu masak hingga bumbu meresap.', '8. Sajikan nasi kuning bersama ikan cakalang berbumbu.'],
    prepTime: '65 Menit',
    servings: '4 Porsi'
  },
  {
    id: 'kue-panada',
    name: 'Kue Panada',
    island: 'Sulawesi',
    category: 'snacks',
    image: 'assets/images/kue-panada.jpg',
    desc: 'Kue berbentuk pastel dengan kulit roti yang lembut dan isian ikan cakalang berbumbu pedas. Asal: Manado, Sulawesi Utara.',
    ingredients: ['Kulit: 250g tepung terigu, 1 sdt ragi instan, 1 butir telur, 100ml santan hangat, 2 sdm gula pasir, ½ sdt garam, 2 sdm margarin', 'Isian: 200g ikan cakalang suwir, 4 siung bawang merah, 3 siung bawang putih, 5 cabai merah, 2 lembar daun jeruk, ½ sdt garam, minyak secukupnya'],
    steps: ['1. Campurkan tepung, ragi, gula, telur, dan santan.', '2. Tambahkan margarin serta garam, lalu uleni hingga kalis.', '3. Diamkan adonan selama sekitar 45 menit hingga mengembang.', '4. Tumis bawang merah, bawang putih, cabai, dan daun jeruk.', '5. Masukkan ikan cakalang suwir dan masak hingga bumbu meresap.', '6. Bagi adonan kulit menjadi beberapa bagian dan pipihkan.', '7. Masukkan isian ikan, lalu tutup dan bentuk seperti pastel.', '8. Goreng dengan api sedang hingga matang dan kecokelatan.'],
    prepTime: '1 Jam 45 Menit',
    servings: '4 Porsi (± 10 buah)'
  },

  // ===== RESEP BARU: PAPUA =====
  {
    id: 'ikan-bakar-manokwari',
    name: 'Ikan Bakar Manokwari',
    island: 'Papua',
    category: 'heavy',
    image: 'assets/images/ikan-bakar-manokwari.jpg',
    desc: 'Ikan bakar khas Papua dengan sambal mentah dari cabai, bawang merah, dan jeruk nipis. Pedas dan segar. Asal: Manokwari, Papua Barat.',
    ingredients: ['1 ekor Ikan tongkol atau ikan laut lainnya', '2 buah Jeruk nipis', '1 sdt Garam', '1 sdm Minyak goreng', 'Sambal: 10 cabai rawit, 6 siung bawang merah, 1 buah tomat, 2 buah jeruk nipis, ½ sdt garam, ½ sdt gula pasir'],
    steps: ['1. Bersihkan ikan dan buat beberapa sayatan pada bagian tubuhnya.', '2. Lumuri ikan dengan jeruk nipis dan garam.', '3. Diamkan selama 15 menit.', '4. Bakar ikan di atas bara api atau panggangan hingga matang.', '5. Iris cabai, bawang merah, dan tomat untuk membuat sambal.', '6. Campurkan semua bahan sambal dengan jeruk nipis, garam, dan gula.', '7. Letakkan sambal mentah di atas ikan bakar.', '8. Sajikan selagi hangat.'],
    prepTime: '45 Menit',
    servings: '4 Porsi'
  },
  {
    id: 'kue-lontar',
    name: 'Kue Lontar',
    island: 'Papua',
    category: 'snacks',
    image: 'assets/images/kue-lontar.jpg',
    desc: 'Kue berbentuk mangkuk besar dengan kulit renyah dan isian custard manis berbahan telur serta susu, berkembang dari tradisi kue tart Belanda.',
    ingredients: ['Kulit: 200g tepung terigu, 100g margarin, 1 kuning telur, 2 sdm gula halus', 'Isi: 4 butir telur, 200ml susu kental manis, 250ml air, 1 sdt vanili'],
    steps: ['1. Campurkan tepung terigu, margarin, kuning telur, dan gula.', '2. Uleni hingga adonan dapat dibentuk.', '3. Pipihkan adonan dan letakkan pada cetakan kue lontar.', '4. Campurkan telur, susu kental manis, air, dan vanili.', '5. Aduk perlahan hingga tercampur rata, lalu saring agar teksturnya halus.', '6. Tuangkan adonan isi ke dalam kulit kue.', '7. Panggang pada suhu sekitar 160°C selama 40–50 menit hingga isian mengeras.', '8. Dinginkan sebelum dipotong dan disajikan.'],
    prepTime: '75 Menit',
    servings: '8 Porsi'
  },
  {
    id: 'ikan-kuah-kuning',
    name: 'Ikan Kuah Kuning Papua',
    island: 'Papua',
    category: 'heavy',
    image: 'assets/images/ikan-kuah-kuning.jpg',
    desc: 'Sup ikan berkuah kuning dari kunyit dengan rasa segar asam dan gurih, hidangan khas Papua yang biasa dinikmati bersama papeda atau nasi hangat.',
    ingredients: ['500g Ikan kakap atau tongkol, potong-potong', '1 buah Jeruk nipis', '800ml Air', '2 batang Serai, memarkan', '3 lembar Daun jeruk', '1 genggam Daun kemangi', '2 buah Tomat, potong', '5 Cabai rawit utuh', '2 sdm Minyak goreng', 'Garam secukupnya', 'Bumbu halus: Bawang merah (5 siung), bawang putih (3 siung), kunyit (3 cm), jahe (2 cm)'],
    steps: ['1. Lumuri ikan dengan air jeruk nipis dan sedikit garam, diamkan 10 menit lalu bilas.', '2. Tumis bumbu halus bersama serai dan daun jeruk hingga harum.', '3. Tuang air, didihkan hingga bumbu tercampur rata.', '4. Masukkan ikan, masak dengan api sedang hingga matang, sekitar 10 hingga 15 menit.', '5. Tambahkan tomat, cabai rawit, dan garam, masak 3 menit.', '6. Masukkan daun kemangi, aduk sebentar lalu angkat.', '7. Sajikan hangat bersama papeda atau nasi.'],
    prepTime: '45 Menit',
    servings: '4 Porsi'
  },
  {
    id: 'sagu-bakar',
    name: 'Sagu Bakar',
    island: 'Papua',
    category: 'snacks',
    image: 'assets/images/sagu-bakar.jpg',
    desc: 'Makanan tradisional berbahan dasar sagu yang dibentuk padat kemudian dibakar hingga bagian luarnya sedikit kering dan aromanya harum.',
    ingredients: ['250g Tepung sagu', '150ml Air hangat', '50g Kelapa parut', '2 sdm Gula merah, sisir', '½ sdt Garam', '1 lembar Daun pandan'],
    steps: ['1. Campurkan tepung sagu dengan kelapa parut.', '2. Tambahkan gula merah dan garam.', '3. Tuangkan air hangat sedikit demi sedikit.', '4. Aduk hingga adonan dapat dipadatkan.', '5. Masukkan adonan ke dalam cetakan atau bentuk sesuai selera.', '6. Bakar di atas panggangan dengan api kecil.', '7. Balik secara berkala hingga matang dan bagian luarnya sedikit kecokelatan.', '8. Sajikan selagi hangat.'],
    prepTime: '35 Menit',
    servings: '4 Porsi'
  },

  // ===== RESEP BARU: BALI =====
  {
    id: 'sate-lilit',
    name: 'Sate Lilit',
    island: 'Bali',
    category: 'heavy',
    image: 'assets/images/sate-lilit.jpg',
    desc: 'Sate khas Bali berbahan ikan atau daging cincang yang dicampur kelapa parut dan rempah, kemudian dililitkan pada batang serai.',
    ingredients: ['500g Ikan tenggiri giling atau ayam cincang', '100g Kelapa parut', '2 sdm Santan', '2 batang Serai, bagian putih diambil untuk adonan', 'Batang serai utuh untuk tusukan', 'Bumbu halus: Bawang merah (5 siung), bawang putih (3 siung), cabai merah (3), kunyit (2 cm), jahe (2 cm), kencur (2 cm), kemiri (2 butir), ketumbar (½ sdt), garam secukupnya'],
    steps: ['1. Haluskan semua bumbu.', '2. Tumis bumbu hingga harum dan dinginkan.', '3. Campurkan ikan atau ayam cincang dengan kelapa parut.', '4. Tambahkan bumbu dan santan.', '5. Aduk hingga seluruh bahan tercampur rata.', '6. Ambil sedikit adonan dan lilitkan pada batang serai.', '7. Panggang di atas bara api atau teflon.', '8. Balik hingga matang merata dan sajikan hangat.'],
    prepTime: '45 Menit',
    servings: '4 Porsi'
  },
  {
    id: 'lawar',
    name: 'Lawar',
    island: 'Bali',
    category: 'heavy',
    image: 'assets/images/lawar.jpg',
    desc: 'Campuran sayuran, kelapa parut, dan daging yang dicincang halus dengan bumbu khas Bali. Gurih dan kaya rempah.',
    ingredients: ['200g Kacang panjang', '150g Daging ayam cincang', '100g Kelapa parut', '3 lembar Daun jeruk', '2 sdm Minyak goreng', 'Garam secukupnya', 'Bumbu halus: Bawang merah (6 siung), bawang putih (4 siung), cabai merah (5), kunyit (2 cm), kencur (2 cm), jahe (2 cm), kemiri (2 butir), ketumbar (½ sdt)'],
    steps: ['1. Rebus kacang panjang hingga matang, kemudian iris kecil.', '2. Tumis bumbu halus hingga harum.', '3. Masukkan ayam cincang dan masak hingga matang sempurna.', '4. Sangrai kelapa parut hingga harum.', '5. Campurkan kacang panjang, ayam berbumbu, dan kelapa parut.', '6. Tambahkan garam serta daun jeruk yang sudah diiris.', '7. Aduk hingga semua bahan tercampur rata.', '8. Sajikan sebagai lauk pendamping nasi.'],
    prepTime: '55 Menit',
    servings: '4 Porsi'
  },
  {
    id: 'ayam-pelalah',
    name: 'Ayam Pelalah',
    island: 'Bali',
    category: 'heavy',
    image: 'assets/images/ayam-pelalah.jpg',
    desc: 'Hidangan ayam suwir khas Bali yang dicampur sambal matah dan bumbu rempah segar. Rasanya pedas, segar, dan gurih dengan aroma serai serta jeruk limau.',
    ingredients: ['600 g Dada atau paha ayam tanpa tulang', '1 batang Serai, memarkan', '3 lembar Daun salam', '2 lembar Daun jeruk', '2 cm Jahe, memarkan', '1 sdt Garam', '2 sdm Air jeruk limau', '2 sdm Minyak kelapa', 'Bumbu pelalah: Bawang merah (8 siung, iris tipis), bawang putih (3 siung, iris tipis), cabai rawit (10, iris), cabai merah keriting (4, iris), serai (2 batang, iris sangat tipis), daun jeruk (4 lembar, iris halus), kemangi (1 genggam), terasi bakar (1/2 sdt), garam dan gula secukupnya'],
    steps: ['1. Rebus ayam bersama serai, daun salam, daun jeruk, jahe, dan garam hingga empuk, sekitar 25–30 menit.', '2. Angkat ayam, tiriskan, lalu suwir kasar mengikuti serat daging.', '3. Panaskan minyak kelapa, lalu siramkan ke irisan bawang merah, bawang putih, cabai, serai, dan daun jeruk.', '4. Tambahkan terasi bakar, garam, gula, dan air jeruk limau, lalu aduk rata.', '5. Campurkan ayam suwir dengan bumbu pelalah dan kemangi hingga tercampur merata.', '6. Pastikan suhu bagian terdalam daging ayam mencapai sekitar 74°C saat direbus.', '7. Koreksi rasa, lalu sajikan dengan nasi hangat.'],
    prepTime: '1 Jam',
    servings: '4 Porsi'
  },
  {
    id: 'nasi-campur-bali',
    name: 'Nasi Campur Bali',
    island: 'Bali',
    category: 'heavy',
    image: 'assets/images/nasi-campur-bali.jpg',
    desc: 'Nasi putih yang disajikan dengan aneka lauk khas Bali, seperti sate lilit, ayam suwir, lawar, telur, dan sambal matah.',
    ingredients: ['500g Beras putih', '200g Ayam rebus', '4 buah Sate lilit', '100g Lawar', '2 butir Telur rebus', '1 buah Mentimun', 'Bawang goreng secukupnya', 'Bumbu ayam suwir: Bawang merah (5 siung), bawang putih (3 siung), cabai merah (3), kunyit (2 cm), jahe (2 cm), daun jeruk (2 lembar), garam secukupnya', 'Sambal matah: Bawang merah (6 siung), cabai rawit (5), serai bagian putih (2 batang), daun jeruk (2 lembar), jeruk limau (1 buah), minyak kelapa panas (3 sdm), garam secukupnya'],
    steps: ['1. Cuci beras dan masak hingga menjadi nasi putih.', '2. Rebus ayam hingga matang, lalu suwir-suwir.', '3. Haluskan bumbu ayam dan tumis hingga harum.', '4. Masukkan ayam suwir dan aduk hingga bumbu meresap.', '5. Siapkan sate lilit dan lawar yang sudah matang.', '6. Iris bawang merah, cabai, serai, dan daun jeruk untuk sambal matah.', '7. Campurkan bahan sambal, lalu siram dengan minyak kelapa panas dan tambahkan jeruk limau.', '8. Tata nasi di piring bersama ayam suwir, sate lilit, lawar, telur, dan sambal matah.'],
    prepTime: '85 Menit',
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
    foods:[['Papeda','Bubur sagu kenyal dengan kuah kuning ikan.'],['Ikan Bakar Manokwari','Ikan bakar segar dengan sambal mentah ulek.'],['Kue Lontar','Kue pai susu manis tradisional.'],['Ikan Kuah Kuning','Sup ikan berkuah kunyit segar, pendamping khas papeda.'],['Sagu Bakar','Olahan sagu padat yang dibakar hingga gurih.']] },
  Bali: { label:'Bali', coords:[-8.4095,115.1889], zoom:9,
    history:"Pulau Dewata dengan budaya Hindu-Bali yang kuat; kuliner Bali berpusat pada base genep, bumbu dasar kaya rempah untuk upacara dan keseharian.",
    foods:[['Ayam Betutu','Ayam berbumbu base genep dibungkus daun pisang dan dipanggang lama.'],['Sate Lilit','Sate cincang ikan/daging dililit pada batang serai.'],['Lawar','Campuran sayur, kelapa parut, dan daging berbumbu khas Bali.'],['Ayam Pelalah','Ayam suwir berbumbu sambal matah, serai, dan daun jeruk. Rasanya pedas, segar, dan gurih.'],['Nasi Campur Bali','Nasi dengan aneka lauk kecil: sate, lawar, ayam suwir, sambal matah.']] }
};