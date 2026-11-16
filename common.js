// ===== FUNGSI BERSAMA UNTUK SEMUA HALAMAN =====

// Gambar cadangan (SVG inline) kalau foto resep gagal dimuat
const FALLBACK_IMG = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400">' +
  '<rect width="100%" height="100%" fill="#e9e4d8"/>' +
  '<text x="50%" y="50%" fill="#8a8473" font-family="Arial, sans-serif" font-size="24" ' +
  'text-anchor="middle" dominant-baseline="middle">Foto tidak tersedia</text></svg>'
);

// ---------- Penyimpanan (localStorage) ----------
function getUserRecipes() {
  const stored = localStorage.getItem('user_recipes');
  return stored ? JSON.parse(stored) : [];
}

function getAllCulinaryItems() {
  return [...culinaryData, ...getUserRecipes()];
}

function isUserRecipe(id) {
  return String(id).startsWith('usr_');
}

// Hapus resep buatan user (resep bawaan dari data.js tidak bisa dihapus)
function deleteUserRecipe(id) {
  if (!isUserRecipe(id)) return;
  if (!confirm('Yakin mau menghapus resep ini?')) return;
  const updated = getUserRecipes().filter(r => r.id !== id);
  localStorage.setItem('user_recipes', JSON.stringify(updated));
  showToast('Resep berhasil dihapus.');
  setTimeout(() => {
    // Kalau sedang di halaman detail resep yang dihapus, kembali ke home
    if (document.body.dataset.page === 'recipe') {
      window.location.href = 'index.html';
    } else {
      location.reload();
    }
  }, 700);
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
// type: 'success' (hijau, default) atau 'error' (merah)
function showToast(message, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }
  const isError = type === 'error';
  const bg = isError ? 'bg-danger' : 'bg-success';
  const icon = isError ? 'fa-circle-exclamation' : 'fa-circle-check';
  const toastId = 'toast_' + Date.now();
  container.innerHTML = `
    <div id="${toastId}" class="toast align-items-center text-white ${bg} border-0 show shadow" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="d-flex">
        <div class="toast-body fw-semibold">
          <i class="fa-solid ${icon} me-2"></i> ${message}
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
          <li class="nav-item"><a class="nav-link${act('search')}" href="search.html">Search</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle${actGroup(kategori)}" href="#" role="button" data-bs-toggle="dropdown">Categories</a>
            <ul class="dropdown-menu border-0 shadow" style="background-color: var(--light-cream);">
              <li><a class="dropdown-item fw-semibold" href="heavy.html">Makanan Berat</a></li>
              <li><a class="dropdown-item fw-semibold" href="snacks.html">Makanan Ringan</a></li>
              <li><a class="dropdown-item fw-semibold" href="diet.html">Khusus Diet</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle${actGroup(pulau)}" href="#" role="button" data-bs-toggle="dropdown">Islands</a>
            <ul class="dropdown-menu border-0 shadow" style="background-color: var(--light-cream);">
              <li><a class="dropdown-item fw-semibold" href="sumatra.html">Sumatra</a></li>
              <li><a class="dropdown-item fw-semibold" href="jawa.html">Jawa</a></li>
              <li><a class="dropdown-item fw-semibold" href="kalimantan.html">Kalimantan</a></li>
              <li><a class="dropdown-item fw-semibold" href="sulawesi.html">Sulawesi</a></li>
              <li><a class="dropdown-item fw-semibold" href="papua.html">Papua</a></li>
              <li><a class="dropdown-item fw-semibold" href="bali.html">Bali</a></li>
            </ul>
          </li>
          <li class="nav-item"><a class="nav-link${act('input-recipe')}" href="input-recipe.html">Add Recipe</a></li>
          <li class="nav-item"><a class="nav-link${act('rating')}" href="rating.html">Rating</a></li>
          <li class="nav-item"><a class="nav-link${act('about')}" href="about.html">About</a></li>
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
            <li><a class="text-decoration-none text-light opacity-75" href="map.html">Culinary Map</a></li>
            <li><a class="text-decoration-none text-light opacity-75" href="heavy.html">Makanan Berat</a></li>
            <li><a class="text-decoration-none text-light opacity-75" href="input-recipe.html">Add Recipe</a></li>
          </ul>
        </div>
        <div class="col-lg-4 col-6">
          <h5 class="fw-bold mb-3 text-white">Hubungi Kami</h5>
          <p class="text-light opacity-75 small mb-1"><i class="fa-solid fa-envelope me-2"></i>info@tasteofnusantara.id</p>
          <p class="text-light opacity-75 small mb-1"><i class="fa-solid fa-phone me-2"></i>+62 819 4556 6770</p>
          <div class="d-flex gap-3 mt-3">
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

  // Tombol hapus hanya untuk resep buatan user
  const deleteBtn = isUserRecipe(item.id)
    ? `<button class="btn btn-sm btn-outline-danger mt-2"
               onclick="event.stopPropagation(); deleteUserRecipe('${item.id}')">
         <i class="fa-solid fa-trash me-1"></i>Hapus Resep
       </button>`
    : '';

  return `
    <div class="${colClass}">
      <div class="card card-nusantara h-100 cursor-pointer" onclick="openRecipe('${item.id}')">
        <img src="${item.image}" class="card-img-top" alt="${item.name}"
             referrerpolicy="no-referrer"
             onerror="this.onerror=null; this.src=FALLBACK_IMG;">
        <div class="card-body d-flex flex-column">
          <span class="badge badge-island align-self-start mb-2">${item.island}</span>
          <h5 class="card-title fw-bold">${item.name}</h5>
          <p class="card-text text-muted small flex-grow-1">${desc}</p>
          <button class="btn btn-sm ${buttonClass} mt-3">${buttonText}</button>
          ${deleteBtn}
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