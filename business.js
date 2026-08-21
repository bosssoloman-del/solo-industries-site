const businesses = {
  'phat-man': {
    name: 'PHAT Man Apparel', eyebrow: 'Operating line 01 · Live',
    role: 'Streetwear · Print on demand',
    logo: 'assets/PHAT-Man-AP---shield-logo---PHAT-Man-LLC---black-bg.jpeg',
    summary: 'Proud, Hairy and Tatted. Casual and luxury streetwear for men who do not fit the mold.',
    notice: 'Live catalog: 35 products. Weight Class: ROYAL is the basic tier; Kings Apply Pressure is the luxury tier.',
    cards: [
      ['Weight Class: ROYAL', 'Basic tier carrying SSND — Sell Soap Not Dope — across slogan and graphic expressions.'],
      ['Kings Apply Pressure', 'Luxury tier carrying SFL, GROWTH, The Sovereign Algorithm, and Quad-Sovereign Algorithm.'],
      ['Channel system', 'Shopify converts demand; Pinterest and X distribute the visual catalog and campaign content.']
    ],
    links: [
      ['Shopify storefront', '35 products and current retail pricing.', 'https://phat-man-llc.myshopify.com'],
      ['Pinterest · @OfficialPHATManAP', 'Visual discovery, product boards, and campaign pins.', 'https://www.pinterest.com/OfficialPHATManAP/'],
      ['X · @PHATManAP', 'Launches, campaign conversation, and public updates.', 'https://x.com/PHATManAP']
    ]
  },
  'loner': {
    name: 'Loner Publishing', eyebrow: 'Operating line 02',
    role: 'Books · Publishing · Canon',
    logo: 'assets/LONER_Publishing_logo.png',
    summary: 'Books for the ones who figured it out alone. Home of Lone Track Fiction, Cash Clear Guides, and the company journal.',
    notice: 'Publication status is governed title by title. The links below point only to catalog records already present in the company system.',
    cards: [
      ['Lone Track Fiction', 'Fiction imprint and home of The Kushite Chronicles universe.'],
      ['Cash Clear Guides', 'Plain-language guides built for people starting from nothing.'],
      ['Diary of a Mad Black Father', 'The founder’s record of building the company, raising his children, and keeping the story straight.']
    ],
    links: [
      ['Diary of a Mad Black Father', 'Read the live company blog.', 'blog.html'],
      ['Investment Guide', 'Shop on Amazon · affiliate link.', 'https://www.amazon.com/dp/B0H7PB39G2?tag=soloaffilia0a-20'],
      ['The Kushite Chronicles · Book I', 'Shop on Amazon · affiliate link.', 'https://www.amazon.com/dp/B0H7P47XMX?tag=soloaffilia0a-20'],
      ['The Kushite Chronicles · Book II', 'Shop on Amazon · affiliate link.', 'https://www.amazon.com/dp/B0H9H2KJLJ?tag=soloaffilia0a-20']
    ]
  },
  'scented': {
    name: 'Scented Serenity', eyebrow: 'Operating line 03 · Filed',
    role: 'Handmade goods',
    logo: 'assets/Scented_Serenity_logo.png',
    summary: 'Handmade candles, soaps, and lotions produced in small batches.',
    notice: 'The business line is filed. A verified public storefront link is not yet recorded, so this page does not invent one.',
    cards: [
      ['Candles', 'Small-batch scent products built as finished premium goods.'],
      ['Soap', 'Handmade personal-care products under the Scented Serenity line.'],
      ['Lotions', 'A planned extension of the same handmade product system.']
    ],
    links: []
  },
  'highway-bean': {
    name: 'Highway Bean Company', eyebrow: 'Operating line 04 · Filed',
    role: 'Scope awaiting founder ruling',
    logo: 'assets/AnitaRose_Beans_logo.png',
    summary: 'The upstream goods line. Current records conflict between coffee and broader agriculture.',
    notice: 'Founder decision required: canonical records flag the scope as unresolved — coffee versus fruits, herbs, and vegetables. This page preserves that conflict instead of presenting a guess as fact.',
    cards: [
      ['AnitaRose Beans', 'The coffee identity already represented by the current brand asset.'],
      ['Agriculture scope', 'A second documented direction covering fruits, herbs, and vegetables.'],
      ['Upstream role', 'Whichever scope is approved, Highway Bean is positioned to feed products into the wider company chain.']
    ],
    links: []
  },
  'up-up': {
    name: 'Up Up and Sold LLC', eyebrow: 'Operating line 05 · Formation pending',
    role: 'Collectibles · Gaming · Resale',
    summary: 'Pop-culture collectibles, trading cards, toys, memorabilia, gaming finds, and other inventory worth selling.',
    notice: 'Formation is pending and no verified public storefront is recorded yet.',
    cards: [
      ['Collectibles', 'Curated toys, memorabilia, and pop-culture inventory.'],
      ['Cards', 'Trading cards and related collector products.'],
      ['Gaming', 'Games, hardware, and resale opportunities that fit the line.']
    ],
    links: []
  },
  'dolo': {
    name: 'DoLo REI', eyebrow: 'Operating line 06 · Formation pending',
    role: 'Real estate investment',
    logo: 'assets/dolo_rei_logo.png',
    summary: 'Land, property, acquisition, and the long move toward physical permanence.',
    notice: 'The mandate is long-hold ownership. Any private-money activity requires legal review because it may create securities-law obligations.',
    cards: [
      ['Acquisition', 'Identify property that can strengthen the company’s physical base.'],
      ['Long-hold strategy', 'Prioritize durable ownership over short-term flipping.'],
      ['Governed capital', 'Financing and partnership structures stay behind legal and founder approval gates.']
    ],
    links: []
  },
  'solutions': {
    name: 'SoLo Solutions Lab', eyebrow: 'Technology arm',
    role: 'AI orchestration · Automation · Systems',
    logo: 'assets/solo_solutions_lab_logo.png',
    summary: 'The technology arm behind the operating lines: CEO Elaine, the Da Nine Board of Directors, automation, and governed company systems.',
    notice: 'Visitors can shop, learn, and interact without gaining access to founder records, financials, filings, internal plans, or company controls.',
    cards: [
      ['CEO Elaine + Da Nine', 'One AI Chief Executive Officer leading a nine-member AI Board of Directors.'],
      ['Company intelligence', 'Governed information keeps public answers accurate while private operations stay private.'],
      ['Revenue systems', 'Five coordinated engines connecting services, digital assets, POD products, machine-facing services, and affiliate commerce.']
    ],
    links: [
      ['Talk to Elaine', 'Use the governed public information route.', 'index.html#elaine'],
      ['Five income engines', 'See the revenue architecture and current status.', 'income-engines.html'],
      ['Tools & recommendations', 'Browse the active Amazon affiliate commerce engine.', 'affiliate.html'],
      ['Growth system', 'Pinterest, affiliate, digital-asset, and POD loops.', 'growth.html']
    ]
  }
};

const key = document.body.dataset.business;
const business = businesses[key];
if (!business) throw new Error(`Unknown business page: ${key}`);

document.getElementById('eyebrow').textContent = business.eyebrow;
document.getElementById('title').textContent = business.name;
document.getElementById('role').textContent = business.role;
document.getElementById('summary').textContent = business.summary;
document.getElementById('notice').textContent = business.notice;
if (business.logo) {
  const image = document.getElementById('logo');
  image.src = business.logo;
  image.alt = `${business.name} logo`;
} else {
  document.getElementById('logo')?.remove();
}
document.getElementById('cards').innerHTML = business.cards.map((card, index) => `
  <article class="card">
    <div class="num">0${index + 1}</div>
    <h3>${card[0]}</h3>
    <p>${card[1]}</p>
  </article>`).join('');

const links = document.getElementById('links');
if (!business.links.length) {
  links.innerHTML = '<div class="notice">No verified public commerce or social link is recorded for this line yet.</div>';
} else {
  links.innerHTML = business.links.map((link, index) => `
    <a class="list-row" href="${link[2]}"${link[2].startsWith('http') ? ` target="_blank" rel="${link[2].includes('tag=soloaffilia0a-20') ? 'sponsored noopener' : 'noopener'}"` : ''}>
      <span class="idx">0${index + 1}</span>
      <span><strong>${link[0]}</strong><p>${link[1]}</p></span>
      <span class="go">Open →</span>
    </a>`).join('');
}
