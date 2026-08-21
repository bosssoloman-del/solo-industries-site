const apiBase = document.documentElement.dataset.apiBase?.replace(/\/$/, '') || '';
const api = path => `${apiBase}${path}`;

function formatDate(value) {
  return new Date(value).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric'
  });
}

document.querySelectorAll('[data-year]').forEach(node => {
  node.textContent = new Date().getFullYear();
});

document.querySelectorAll('.nav-links').forEach(nav => {
  if (!nav.querySelector('a[href="affiliate.html"]')) {
    const affiliate = document.createElement('a');
    affiliate.href = 'affiliate.html';
    affiliate.textContent = 'Tools & Deals';
    nav.appendChild(affiliate);
  }
  if (nav.querySelector('.shop')) return;
  const shop = document.createElement('a');
  shop.className = 'shop';
  shop.href = 'https://phat-man-llc.myshopify.com';
  shop.target = '_blank';
  shop.rel = 'noopener';
  shop.textContent = 'Shop';
  nav.appendChild(shop);
});
