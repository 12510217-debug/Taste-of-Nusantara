// ===== FUNGSI BERSAMA UNTUK SEMUA HALAMAN =====

// ---------- Penyimpanan (localStorage) ----------
function getUserRecipes() {
  const stored = localStorage.getItem('user_recipes');
  return stored ? JSON.parse(stored) : [];
}

function getAllCulinaryItems() {
  return [...culinaryData, ...getUserRecipes()];
}

function getReviews() {
  const stored = localStorage.getItem('user_reviews');
  if (stored) return JSON.parse(stored);
  return [
    { name: 'Budi Santoso', food: 'Rendang Minang', stars: 5, comment: 'Rendangnya benar-benar empuk dan bumbunya meresap sempurna! Sangat autentik.' },
    { name: 'Siti Aminah', food: 'Coto Makassar', stars: 5, comment: 'Kuahnya kental dan gurih banget, mirip seperti waktu saya liburan ke Makassar.' }
  ];
}

// ---------- Toast ----------
function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }
  const toastId = 'toast_' + Date.now();
  container.innerHTML = `
    <div id="${toastId}" class="toast align-items-center text-white bg-success border-0 show shadow" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="d-flex">
        <div class="toast-body fw-semibold">
          <i class="fa-solid fa-circle-check me-2"></i> ${message}
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    </div>
  `;
  setTimeout(() => {
    const el = document.getElementById(toastId);
    if (el) el.remove();
  }, 4000);
}

// ---------- Navbar ----------
function renderNavbar() {
  const page = document.body.dataset.page || '';
  const kategori = ['heavy', 'snacks', 'diet'];
  const pulau = ['sumatra', 'jawa', 'kalimantan', 'sulawesi', 'papua', 'bali'];
  const act = (name) => (page === name ? ' active-nav' : '');
  const actGroup = (list) => (list.includes(page) ? ' active-nav' : '');

  document.getElementById('navbar').innerHTML = `
  <nav class="navbar navbar-expand-lg sticky-top">
    <div class="container px-4">
      <a class="navbar-brand fw-bold" href="index.html">
        <i class="fa-solid fa-utensils me-2"></i>Taste of Nusantara
      </a>
      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav align-items-center gap-1">
          <li class="nav-item"><a class="nav-link${act('home')}" href="index.html">Home</a></li>
          <li class="nav-item"><a class="nav-link${act('map')}" href="map.html">Map</a></li>
          <li class="nav-item"><a class="nav-link${act('search')}" href="search.html">Pencarian</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle${actGroup(kategori)}" href="#" role="button" data-bs-toggle="dropdown">Kategori</a>
            <ul class="dropdown-menu border-0 shadow" style="background-color: var(--light-cream);">
              <li><a class="dropdown-item fw-semibold" href="heavy.html">Makanan Berat</a></li>
              <li><a class="dropdown-item fw-semibold" href="snacks.html">Makanan Ringan</a></li>
              <li><a class="dropdown-item fw-semibold" href="diet.html">Khusus Diet</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle${actGroup(pulau)}" href="#" role="button" data-bs-toggle="dropdown">Pulau</a>
            <ul class="dropdown-menu border-0 shadow" style="background-color: var(--light-cream);">
              <li><a class="dropdown-item fw-semibold" href="sumatra.html">Sumatra</a></li>
              <li><a class="dropdown-item fw-semibold" href="jawa.html">Jawa</a></li>
              <li><a class="dropdown-item fw-semibold" href="kalimantan.html">Kalimantan</a></li>
              <li><a class="dropdown-item fw-semibold" href="sulawesi.html">Sulawesi</a></li>
              <li><a class="dropdown-item fw-semibold" href="papua.html">Papua</a></li>
              <li><a class="dropdown-item fw-semibold" href="bali.html">Bali</a></li>
            </ul>
          </li>
          <li class="nav-item"><a class="nav-link${act('input-recipe')}" href="input-recipe.html">Tambah Resep</a></li>
          <li class="nav-item"><a class="nav-link${act('rating')}" href="rating.html">Rating</a></li>
          <li class="nav-item"><a class="nav-link${act('about')}" href="about.html">Tentang</a></li>
        </ul>
      </div>
    </div>
  </nav>`;
}

// ---------- Footer ----------
function renderFooter() {
  document.getElementById('footer').innerHTML = `
  <footer class="py-5 mt-5">
    <div class="container px-4">
      <div class="row g-4">
        <div class="col-lg-5">
          <h3 class="fw-bold mb-3 text-white"><i class="fa-solid fa-utensils me-2"></i>Taste of Nusantara</h3>
          <p class="text-light opacity-75">
            Website ensiklopedia dan panduan kuliner tradisional Indonesia terlengkap. Mari lestarikan warisan rasa leluhur bangsa.
          </p>
        </div>
        <div class="col-lg-3 col-6">
          <h5 class="fw-bold mb-3 text-white">Navigasi Cepat</h5>
          <ul class="list-unstyled d-flex flex-column gap-2">
            <li><a class="text-decoration-none text-light opacity-75" href="index.html">Home</a></li>
            <li><a class="text-decoration-none text-light opacity-75" href="map.html">Peta Kuliner</a></li>
            <li><a class="text-decoration-none text-light opacity-75" href="heavy.html">Makanan Berat</a></li>
            <li><a class="text-decoration-none text-light opacity-75" href="input-recipe.html">Tambah Resep</a></li>
          </ul>
        </div>
        <div class="col-lg-4 col-6">
          <h5 class="fw-bold mb-3 text-white">Hubungi Kami</h5>
          <p class="text-light opacity-75 small mb-1"><i class="fa-solid fa-envelope me-2"></i>info@tasteofnusantara.id</p>
          <p class="text-light opacity-75 small mb-1"><i class="fa-solid fa-phone me-2"></i>+62 812 3456 7890</p>
          <div class="d-flex gap-3 mt-3">
            <a href="#" class="text-white fs-5"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" class="text-white fs-5"><i class="fa-brands fa-facebook"></i></a>
            <a href="#" class="text-white fs-5"><i class="fa-brands fa-youtube"></i></a>
          </div>
        </div>
      </div>
      <hr class="border-secondary my-4">
      <div class="text-center text-light opacity-50 small">
        &copy; 2026 Taste of Nusantara. All Rights Reserved.
      </div>
    </div>
  </footer>`;
}

// ---------- Kartu resep ----------
function openRecipe(id) {
  window.location.href = 'recipe.html?id=' + encodeURIComponent(id);
}

function recipeCardHTML(item, colClass, buttonText, buttonClass, shortDesc) {
  const desc = shortDesc ? item.desc.substring(0, 70) + '...' : item.desc;
  return `
    <div class="${colClass}">
      <div class="card card-nusantara h-100 cursor-pointer" onclick="openRecipe('${item.id}')">
        <img src="${item.image}" class="card-img-top" alt="${item.name}">
        <div class="card-body d-flex flex-column">
          <span class="badge badge-island align-self-start mb-2">${item.island}</span>
          <h5 class="card-title fw-bold">${item.name}</h5>
          <p class="card-text text-muted small flex-grow-1">${desc}</p>
          <button class="btn btn-sm ${buttonClass} mt-3">${buttonText}</button>
        </div>
      </div>
    </div>`;
}

// Grid per pulau (dipakai halaman sumatra, jawa, dst.)
function renderIslandGrid(islandName, gridId) {
  const grid = document.getElementById(gridId);
  const items = getAllCulinaryItems().filter(i => i.island.toLowerCase() === islandName.toLowerCase());
  if (items.length === 0) {
    grid.innerHTML = `<div class="text-center py-5 text-muted col-12">Belum ada resep untuk pulau ${islandName}. Jadilah yang pertama menambahkannya!</div>`;
    return;
  }
  grid.innerHTML = items.map(item =>
    recipeCardHTML(item, 'col-md-4 col-sm-6', 'Lihat Resep Selengkapnya', 'btn-custom-primary', false)
  ).join('');
}

// Grid per kategori (dipakai halaman heavy, snacks, diet)
function renderCategoryGrid(catKey, gridId) {
  const grid = document.getElementById(gridId);
  const items = getAllCulinaryItems().filter(i => i.category === catKey);
  grid.innerHTML = items.map(item =>
    recipeCardHTML(item, 'col-md-4 col-sm-6', 'Lihat Resep', 'btn-custom-primary', false)
  ).join('');
}

// ---------- Jalankan otomatis ----------
renderNavbar();
renderFooter();
