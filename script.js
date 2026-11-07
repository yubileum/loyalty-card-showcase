'use strict';
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('#nav-links');
function closeMenu() {
  navLinks.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Buka navigasi');
}
menuButton.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Tutup navigasi' : 'Buka navigasi');
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navLinks.classList.contains('open')) {
    closeMenu();
    menuButton.focus();
  }
});
const examples = {
  cafe: { name: 'Ruang Kopi', symbol: '☕', reward: 'Gratis 1 kopi pilihan', goal: 'kopi favorit Anda', color: '#422675' },
  salon: { name: 'Studio Rona', symbol: '✂', reward: 'Diskon 20% perawatan', goal: 'reward perawatan Anda', color: '#754251' },
  laundry: { name: 'Bersih Laundry', symbol: '✳', reward: 'Gratis cuci 2 kg', goal: 'reward laundry Anda', color: '#245f5b' }
};
let currentBusiness = 'cafe';
let stamps = 3;
const stampButton = document.querySelector('#add-stamp');
function renderCard() {
  const example = examples[currentBusiness];
  document.querySelector('#demo-brand').textContent = example.name;
  document.querySelector('#demo-symbol').textContent = example.symbol;
  document.querySelector('#demo-reward').textContent = example.reward;
  document.querySelector('#interactive-card').style.setProperty('--card-color', example.color);
  const slots = document.querySelector('#demo-stamps');
  slots.replaceChildren();
  for (let i = 0; i < 5; i++) {
    const slot = document.createElement('span');
    slot.className = 'demo-stamp' + (i < stamps ? ' filled' : '');
    slot.textContent = i < stamps ? '✳' : String(i + 1);
    slots.append(slot);
  }
  document.querySelector('#demo-progress').textContent = `${stamps} dari 5 stamp`;
  document.querySelector('#progress-fill').style.width = `${stamps * 20}%`;
  document.querySelector('[role="progressbar"]').setAttribute('aria-valuenow', String(stamps));
  document.querySelector('#demo-status').textContent = stamps === 5
    ? `Reward terbuka: ${example.reward}. Ini hanya simulasi.`
    : `${5 - stamps} stamp lagi menuju ${example.goal}.`;
  stampButton.textContent = stamps === 5 ? '↺ Coba lagi dari awal' : '+ Simulasikan kunjungan';
}
document.querySelectorAll('[data-business]').forEach(button => button.addEventListener('click', () => {
  currentBusiness = button.dataset.business;
  stamps = 3;
  document.querySelectorAll('[data-business]').forEach(option => {
    const selected = option === button;
    option.classList.toggle('selected', selected);
    option.setAttribute('aria-pressed', String(selected));
  });
  renderCard();
}));
stampButton.addEventListener('click', () => { stamps = stamps === 5 ? 0 : stamps + 1; renderCard(); });
document.querySelector('#reset-demo').addEventListener('click', () => { stamps = 3; renderCard(); });
renderCard();
document.querySelector('#copy-brief').addEventListener('click', async () => {
  const fallback = document.querySelector('#brief-fallback');
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText(fallback.value);
    fallback.hidden = true;
    status.textContent = 'Pesan tersalin. Tempelkan di DM Instagram @yubisa.ai.';
  } catch {
    fallback.hidden = false;
    fallback.focus();
    fallback.select();
    status.textContent = 'Silakan salin pesan di bawah, lalu kirim melalui Instagram.';
  }
});
document.querySelector('#year').textContent = String(new Date().getFullYear());
