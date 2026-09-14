
const icon = (name) => {
 const icons={
  search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  cart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 5h2l2 10h9l2-7H7"/><circle cx="10" cy="19" r="1"/><circle cx="17" cy="19" r="1"/></svg>',
  user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 21c1-5 4-7 8-7s7 2 8 7"/></svg>',
  menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 1 0-7.6 7.6L12 21l8.8-8.8a5.4 5.4 0 0 0 0-7.6Z"/></svg>',
  truck:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M3 6h11v10H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>',
  shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 3 4 6v5c0 5 3 8 8 10 5-2 8-5 8-10V6z"/><path d="m9 12 2 2 4-4"/></svg>',
  exchange:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M7 7h11l-3-3M17 17H6l3 3M18 7v5M6 17v-5"/></svg>',
  message:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 4h16v12H8l-4 4z"/></svg>'
 }; return icons[name]||'';
};
function getCart(){return JSON.parse(localStorage.getItem('srCart')||'[]')}
function saveCart(c){localStorage.setItem('srCart',JSON.stringify(c)); updateCartCount()}
function getWish(){return JSON.parse(localStorage.getItem('srWish')||'[]')}
function saveWish(w){localStorage.setItem('srWish',JSON.stringify(w))}
function formatPrice(n){return 'Rs. '+Number(n).toLocaleString('en-PK')}
function productById(id){return (window.PRODUCTS||[]).find(p=>p.id===id)}
function addToCart(id,qty=1){const p=productById(id);if(!p)return;let cart=getCart();const x=cart.find(i=>i.id===id);if(x)x.qty+=Number(qty);else cart.push({id,qty:Number(qty)});saveCart(cart);window.location.href='checkout.html'}
function toggleWish(id,btn){let w=getWish(); if(w.includes(id))w=w.filter(x=>x!==id);else w.push(id);saveWish(w);if(btn)btn.classList.toggle('active');toast(w.includes(id)?'Saved to wishlist':'Removed from wishlist')}
function updateCartCount(){const n=getCart().reduce((s,i)=>s+i.qty,0);document.querySelectorAll('.cart-count').forEach(e=>e.textContent=n)}
function toast(msg){let t=document.querySelector('.toast');if(!t){t=document.createElement('div');t.className='toast';document.body.appendChild(t)}t.textContent=msg;t.classList.add('show');clearTimeout(window.__toast);window.__toast=setTimeout(()=>t.classList.remove('show'),2200)}
function navActive(path){return location.pathname.endsWith(path)?'active':''}
function renderShell(){
 const collectionActive=(location.pathname.endsWith('women.html')||location.pathname.endsWith('men.html'))?'active':'';
 const header=`<div class="announcement announcement-marquee" aria-label="Free delivery announcement">
  <div class="announcement-track">
   <span class="announcement-item">${icon('truck')}<b>FREE DELIVERY ACROSS PAKISTAN ON ORDERS ABOVE RS. 5,000</b></span>
   <span class="announcement-item">${icon('truck')}<b>FREE DELIVERY ACROSS PAKISTAN ON ORDERS ABOVE RS. 5,000</b></span>
   <span class="announcement-item">${icon('truck')}<b>FREE DELIVERY ACROSS PAKISTAN ON ORDERS ABOVE RS. 5,000</b></span>
   <span class="announcement-item" aria-hidden="true">${icon('truck')}<b>FREE DELIVERY ACROSS PAKISTAN ON ORDERS ABOVE RS. 5,000</b></span>
   <span class="announcement-item" aria-hidden="true">${icon('truck')}<b>FREE DELIVERY ACROSS PAKISTAN ON ORDERS ABOVE RS. 5,000</b></span>
   <span class="announcement-item" aria-hidden="true">${icon('truck')}<b>FREE DELIVERY ACROSS PAKISTAN ON ORDERS ABOVE RS. 5,000</b></span>
  </div>
 </div>
 <header class="site-header header-v4">
  <div class="container header-v4-row">
   <div class="header-v4-left">
    <button class="icon-btn menu-btn header-v4-menu" aria-label="Menu" onclick="document.querySelector('.mobile-panel').classList.toggle('open')">${icon('menu')}</button>
    <nav class="header-v4-nav header-v4-nav-left" aria-label="Primary navigation left">
     <a class="${navActive('index.html')}" href="index.html">Home</a>
     <div class="collection-nav">
      <button class="collection-nav-toggle ${collectionActive}" type="button" aria-expanded="false" aria-controls="collection-mega-menu" onclick="toggleCollectionMenu(this)" onmouseenter="openCollectionMenu(this)">Collections <span class="nav-caret">⌄</span></button>
     </div>
    </nav>
   </div>
   <a class="header-v4-brand" href="index.html" aria-label="SR Jewellery home"><img src="assets/images/sr-logo-light-gold.png" alt="SR Jewellery"></a>
   <div class="header-v4-right">
    <nav class="header-v4-nav header-v4-nav-right" aria-label="Primary navigation right">
     <a class="${navActive('trending.html')}" href="trending.html">Trending</a>
     <a class="${navActive('new-arrivals.html')}" href="new-arrivals.html">New Arrivals</a>
     <a class="${navActive('contact.html')}" href="contact.html">Contact</a>
    </nav>
    <div class="header-actions">
     <button class="icon-btn" aria-label="Search" onclick="openSearch()">${icon('search')}</button>
     <button class="icon-btn" aria-label="Wishlist" onclick="toast('Wishlist is available on product cards')">${icon('heart')}</button>
     <a class="icon-btn" href="contact.html" aria-label="Account">${icon('user')}</a>
     <button class="icon-btn" type="button" aria-label="Cart" onclick="openCartDrawer()">${icon('cart')}<span class="cart-count">0</span></button>
    </div>
   </div>
  </div>
  <div class="collection-mega-menu" id="collection-mega-menu" aria-hidden="true">
   <div class="collection-mega-inner">
    <div class="collection-mega-heading"><span>Shop Collections</span><button type="button" aria-label="Close collections" onclick="closeCollectionMenu()">✕</button></div>
    <div class="collection-mega-grid">
     <a class="collection-mega-card" href="women.html?type=Earrings"><span class="collection-mega-image"><img src="assets/images/collection-earrings-new.jpg" alt="Earrings collection"></span><strong>Earrings</strong><small>2 Products</small></a>
     <a class="collection-mega-card" href="women.html?type=Bracelets"><span class="collection-mega-image"><img src="assets/images/collection-bracelets-new.jpg" alt="Bracelets collection"></span><strong>Bracelets</strong><small>2 Products</small></a>
     <a class="collection-mega-card" href="women.html?type=Necklaces"><span class="collection-mega-image"><img src="assets/images/collection-necklaces-new.jpg" alt="Necklaces collection"></span><strong>Necklaces</strong><small>2 Products</small></a>
     <a class="collection-mega-card" href="women.html?type=Rings"><span class="collection-mega-image"><img src="assets/images/collection-rings-new.jpg" alt="Rings collection"></span><strong>Rings</strong><small>1 Product</small></a>
     <a class="collection-mega-card" href="men.html?type=Bracelets"><span class="collection-mega-image"><img src="assets/images/collection-men-bracelets-new.jpg" alt="Men bracelets collection"></span><strong>Men's Bracelets</strong><small>3 Products</small></a>
     <a class="collection-mega-card" href="men.html?type=Rings"><span class="collection-mega-image"><img src="assets/images/collection-men-rings-new.jpg" alt="Men rings collection"></span><strong>Men's Rings</strong><small>1 Product</small></a>
    </div>
   </div>
  </div>
  <div class="mobile-panel">
   <button class="mobile-panel-search" type="button" onclick="openSearch()">${icon('search')}<span>Search products...</span></button>
   <a href="index.html">Home</a>
   <details class="mobile-nav-group"><summary>Collections</summary><div class="mobile-submenu collection-mobile-grid"><a href="women.html?type=Earrings">Earrings</a><a href="women.html?type=Bracelets">Bracelets</a><a href="women.html?type=Necklaces">Necklaces</a><a href="women.html?type=Rings">Rings</a><a href="men.html?type=Bracelets">Men's Bracelets</a><a href="men.html?type=Rings">Men's Rings</a></div></details>
   <a href="trending.html">Trending</a><a href="new-arrivals.html">New Arrivals</a><a href="contact.html">Contact</a>
  </div>
 </header>`;
 const whatsappUrl='https://wa.me/923189661981?text=Assalam%20o%20Alaikum%2C%20mujhe%20jewellery%20order%20karni%20hai.';
 const whatsappSvg='<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16.02 3C8.84 3 3 8.69 3 15.69c0 2.47.73 4.88 2.11 6.94L3.72 29l6.54-1.32a13.2 13.2 0 0 0 5.75 1.32H16c7.18 0 13-5.69 13-12.69S23.2 3 16.02 3Zm0 23.86h-.01a11.1 11.1 0 0 1-5.48-1.46l-.39-.23-3.88.78.82-3.7-.25-.38a10.48 10.48 0 0 1-1.7-5.72c0-5.86 4.89-10.63 10.9-10.63 2.91 0 5.65 1.11 7.71 3.12a10.45 10.45 0 0 1 3.2 7.52c-.01 5.86-4.9 10.63-10.92 10.63Zm5.98-7.96c-.33-.16-1.94-.94-2.24-1.05-.3-.11-.52-.16-.74.16-.22.32-.85 1.05-1.04 1.27-.19.21-.38.24-.71.08-.33-.16-1.38-.5-2.63-1.58a9.74 9.74 0 0 1-1.82-2.21c-.19-.32-.02-.49.14-.65.15-.14.33-.37.49-.56.16-.19.22-.32.33-.54.11-.21.05-.4-.03-.56-.08-.16-.74-1.74-1.01-2.38-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.4-.3.32-1.15 1.1-1.15 2.68s1.18 3.11 1.34 3.33c.16.21 2.32 3.46 5.63 4.85.79.33 1.4.53 1.88.68.79.24 1.5.21 2.07.13.63-.09 1.94-.78 2.21-1.53.27-.75.27-1.4.19-1.53-.08-.13-.3-.21-.63-.37Z"/></svg>';
 const footer=`<footer class="site-footer sr-luxe-footer">
  <div class="container sr-footer-main">
   <div class="sr-footer-column sr-footer-quick">
    <h4>QUICK LINKS</h4>
    <div class="sr-footer-title-line" aria-hidden="true"><span></span><i>◆</i><span></span></div>
    <nav class="sr-footer-links" aria-label="Footer quick links">
     <a href="index.html">Home</a>
     <a href="trending.html">Trending</a>
     <a href="new-arrivals.html">New Arrivals</a>
     <a href="contact.html">Contact</a>
    </nav>
   </div>
   <div class="sr-footer-column sr-footer-collections">
    <h4>COLLECTIONS</h4>
    <div class="sr-footer-title-line" aria-hidden="true"><span></span><i>◆</i><span></span></div>
    <nav class="sr-footer-links" aria-label="Footer collections">
     <a href="women.html?type=Earrings">Earrings</a>
     <a href="women.html?type=Rings">Rings</a>
     <a href="women.html?type=Necklaces">Necklaces</a>
     <a href="women.html?type=Bracelets">Bracelets</a>
     <a href="men.html?type=Rings">Men’s Rings</a>
     <a href="men.html?type=Bracelets">Men’s Bracelets</a>
    </nav>
   </div>
   <div class="sr-footer-column sr-footer-contact">
    <h4>CONTACT</h4>
    <div class="sr-footer-title-line" aria-hidden="true"><span></span><i>◆</i><span></span></div>
    <div class="sr-footer-contact-list">
     <a href="tel:+923189661981" aria-label="Call SR Jewellery"><span class="sr-contact-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M5.2 3.8 8 3l2.1 5-2 1.6c1.4 3 3.6 5.2 6.6 6.6l1.6-2 5 2.1-.8 2.8c-.4 1.4-1.8 2.3-3.2 2.1C9.7 20.3 3.7 14.3 2.8 6.7c-.2-1.4.7-2.8 2.4-2.9Z"/></svg></span><span>+92 318 9661981</span></a>
     <a href="mailto:info@srjewellery.pk" aria-label="Email SR Jewellery"><span class="sr-contact-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="5" width="18" height="14" rx="1.8"/><path d="m4 7 8 6 8-6"/></svg></span><span>info@srjewellery.pk</span></a>
     <div><span class="sr-contact-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg></span><span>Karachi, Pakistan</span></div>
    </div>
   </div>
   <div class="sr-footer-brand">
    <a class="sr-footer-logo" href="index.html" aria-label="SR Jewellery home"><img src="assets/images/sr-logo-light-gold.png" alt="SR Jewellery logo"></a>
    <div class="sr-footer-ornament" aria-hidden="true"><span></span><i>◆</i><span></span></div>
    <p>Elegant jewellery for every<br>special moment.</p>
   </div>
  </div>
  <div class="sr-footer-social-row">
   <div class="sr-footer-socials" aria-label="Social media">
    <a href="#" onclick="event.preventDefault()" aria-label="Instagram" title="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
    <span class="sr-social-divider"></span>
    <a href="#" onclick="event.preventDefault()" aria-label="Facebook" title="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.7 22v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5H17V4.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.5V14h2.8v8h3.4Z"/></svg></a>
    <span class="sr-social-divider"></span>
    <a href="#" onclick="event.preventDefault()" aria-label="TikTok" title="TikTok"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.7 3c.3 1.9 1.4 3.3 3.3 4v3.2c-1.3 0-2.5-.4-3.5-1.1v6.2a6.1 6.1 0 1 1-5.3-6v3.2a2.9 2.9 0 1 0 2.1 2.8V3h3.4Z"/></svg></a>
    <span class="sr-social-divider"></span>
    <a href="${whatsappUrl}" target="_blank" rel="noopener" aria-label="WhatsApp" title="WhatsApp">${whatsappSvg}</a>
   </div>
  </div>
  <div class="sr-footer-bottom"><span>© SR Jewellery. All rights reserved.</span><span><a href="#" onclick="event.preventDefault()">Privacy Policy</a><b>|</b><a href="#" onclick="event.preventDefault()">Terms &amp; Conditions</a></span></div>
 </footer>`;
 const headerRoot=document.getElementById('site-header');
 headerRoot.innerHTML=header;
 const mobilePanel=headerRoot.querySelector('.mobile-panel');
 if(mobilePanel){mobilePanel.classList.add('detached-mobile-panel');document.body.appendChild(mobilePanel)}
 document.getElementById('site-footer').innerHTML=footer;
 document.body.insertAdjacentHTML('beforeend',`<div class="search-overlay"><div class="search-box"><form action="search.html"><input name="q" placeholder="Search rings, earrings, necklaces…" autofocus><button type="button" class="icon-btn search-close" onclick="closeSearch()">✕</button></form></div></div><div class="drawer-backdrop" onclick="closeCartDrawer()"></div><aside class="cart-drawer" aria-hidden="true"><div class="cart-drawer-head"><button class="drawer-close" onclick="closeCartDrawer()">✕</button><h3>You have <span id="drawer-count">(0 item)</span> in your bag</h3></div><div id="cart-drawer-items" class="cart-drawer-items"></div><div class="cart-drawer-foot"><div class="drawer-subtotal-row"><span>Subtotal:</span><strong id="drawer-subtotal">Rs. 0</strong></div><div class="drawer-actions"><a class="drawer-btn drawer-btn-light" href="cart.html">Your Bag</a><a class="drawer-btn drawer-btn-gold" href="checkout.html">Checkout</a></div></div></aside><a class="whatsapp-float" href="${whatsappUrl}" target="_blank" rel="noopener" aria-label="Order on WhatsApp"><span class="wa-float-icon">${whatsappSvg}</span><span>Order on WhatsApp</span></a>`);updateCartCount();initCollectionCards();renderCartDrawer();
}

function openCartDrawer(){const d=document.querySelector('.cart-drawer');const b=document.querySelector('.drawer-backdrop');if(!d||!b)return;renderCartDrawer();d.classList.add('open');b.classList.add('open');document.body.classList.add('drawer-open')}
function closeCartDrawer(){document.querySelector('.cart-drawer')?.classList.remove('open');document.querySelector('.drawer-backdrop')?.classList.remove('open');document.body.classList.remove('drawer-open')}
function renderCartDrawer(){const wrap=document.querySelector('#cart-drawer-items');if(!wrap)return;const cart=getCart();document.querySelectorAll('#drawer-count').forEach(e=>e.textContent=`(${cart.reduce((s,i)=>s+i.qty,0)} item${cart.reduce((s,i)=>s+i.qty,0)===1?'':'s'})`);if(!cart.length){wrap.innerHTML=`<div class="drawer-empty"><h4>Your bag is empty</h4><p>Add something beautiful to get started.</p></div>`;document.querySelector('#drawer-subtotal').textContent='Rs. 0';return}wrap.innerHTML=cart.map(item=>{const p=productById(item.id);return `<div class="drawer-item"><img src="assets/images/${p.image}" alt="${p.name}"><div class="drawer-item-info"><h4>${p.name}</h4><div class="drawer-item-price">${formatPrice(p.price)}</div><button class="drawer-remove" onclick="drawerRemove('${p.id}')">Remove</button></div><div class="drawer-qty"><button onclick="drawerQty('${p.id}',-1)">−</button><input value="${item.qty}" readonly><button onclick="drawerQty('${p.id}',1)">+</button></div></div>`}).join('');document.querySelector('#drawer-subtotal').textContent=formatPrice(cart.reduce((s,i)=>s+productById(i.id).price*i.qty,0))}
function drawerQty(id,n){let c=getCart(),x=c.find(i=>i.id===id);if(!x)return;x.qty=Math.max(1,x.qty+n);saveCart(c);renderCartDrawer()}
function drawerRemove(id){saveCart(getCart().filter(i=>i.id!==id));renderCartDrawer()}
function initCollectionCards(){document.querySelectorAll('.collection-product-card').forEach(card=>{const oldBtn=card.querySelector('.collection-add-btn');const media=card.querySelector('.collection-product-media');const info=card.querySelector('.collection-product-info');if(!oldBtn||!media||!info)return;const match=(oldBtn.getAttribute('onclick')||'').match(/addToCart\('([^']+)'\)/);const id=match?match[1]:'';const p=productById(id);if(!p)return;card.setAttribute('data-id',id);if(!media.querySelector('.collection-hover-btn')){const hover=document.createElement('button');hover.className='collection-hover-btn';hover.type='button';hover.textContent='ADD TO CART';hover.setAttribute('onclick',`addToCart('${id}')`);media.appendChild(hover);}if(!info.querySelector('.collection-card-price')){const price=document.createElement('div');price.className='collection-card-price';price.innerHTML=`<span class="price">${formatPrice(p.price)}</span>`;info.appendChild(price);}oldBtn.remove();})}

function initStickyHeader(){}
function toggleNavDropdown(button){
 const current=button.closest('.nav-dropdown');
 document.querySelectorAll('.nav-dropdown.open').forEach(menu=>{if(menu!==current){menu.classList.remove('open');menu.querySelector('button')?.setAttribute('aria-expanded','false')}});
 const isOpen=current.classList.toggle('open');
 button.setAttribute('aria-expanded',isOpen?'true':'false');
}
document.addEventListener('click',event=>{
 if(!event.target.closest('.nav-dropdown')) document.querySelectorAll('.nav-dropdown.open').forEach(menu=>{menu.classList.remove('open');menu.querySelector('button')?.setAttribute('aria-expanded','false')});
 if(!event.target.closest('.collection-nav') && !event.target.closest('.collection-mega-menu')) closeCollectionMenu();
});
function openCollectionMenu(button){
 const panel=document.querySelector('.collection-mega-menu');
 const trigger=button||document.querySelector('.collection-nav-toggle');
 if(!panel||!trigger)return;
 clearTimeout(window.__collectionCloseTimer);
 panel.classList.add('open');
 panel.setAttribute('aria-hidden','false');
 trigger.setAttribute('aria-expanded','true');
 document.body.classList.add('collection-menu-open');
}
function toggleCollectionMenu(button){
 const panel=document.querySelector('.collection-mega-menu');
 if(!panel)return;
 if(panel.classList.contains('open')) closeCollectionMenu();
 else openCollectionMenu(button);
}
function setupCollectionHover(){
 const trigger=document.querySelector('.collection-nav-toggle');
 const panel=document.querySelector('.collection-mega-menu');
 const navBar=document.querySelector('.header-v4')||document.querySelector('.header-nav-bar');
 if(!trigger||!panel||!navBar)return;
 const cancelClose=()=>clearTimeout(window.__collectionCloseTimer);
 const scheduleClose=()=>{
  clearTimeout(window.__collectionCloseTimer);
  window.__collectionCloseTimer=setTimeout(closeCollectionMenu,180);
 };
 trigger.addEventListener('mouseenter',()=>openCollectionMenu(trigger));
 trigger.addEventListener('focus',()=>openCollectionMenu(trigger));
 panel.addEventListener('mouseenter',cancelClose);
 navBar.addEventListener('mouseleave',scheduleClose);
}
function closeCollectionMenu(){
 const panel=document.querySelector('.collection-mega-menu');
 const button=document.querySelector('.collection-nav-toggle');
 if(!panel)return;
 panel.classList.remove('open');
 panel.setAttribute('aria-hidden','true');
 if(button)button.setAttribute('aria-expanded','false');
 document.body.classList.remove('collection-menu-open');
}
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeCollectionMenu()});
function openSearch(){document.querySelectorAll('.mobile-panel.open,.detached-mobile-panel.open').forEach(p=>p.classList.remove('open'));const overlay=document.querySelector('.search-overlay');overlay.classList.add('open');document.body.classList.add('search-open');setTimeout(()=>overlay.querySelector('input').focus(),20)}function closeSearch(){document.querySelector('.search-overlay').classList.remove('open');document.body.classList.remove('search-open')}
function productCard(p){const wish=getWish().includes(p.id)?'active':'';return `<article class="product-card home-style-card" data-type="${p.type}"><div class="product-media"><span class="badge">${p.badge}</span><button class="wish-btn ${wish}" onclick="toggleWish('${p.id}',this)" aria-label="Wishlist">${icon('heart')}</button><a href="product.html?id=${p.id}"><img src="assets/images/${p.image}" alt="${p.name}" loading="lazy"></a><button class="btn btn-primary quick-add" onclick="addToCart('${p.id}')">ADD TO CART</button></div><div class="product-info"><a href="product.html?id=${p.id}"><h3 class="product-name">${p.name}</h3></a><div class="product-price-row"><span class="price">${formatPrice(p.price)}</span><span class="old-price">${formatPrice(p.oldPrice)}</span></div></div></article>`}
function renderProducts(target,items){document.querySelector(target).innerHTML=items.map(productCard).join('')}
function categoryItems(category){return PRODUCTS.filter(p=>p.category===category)}
function initCategory(category){
 let items=categoryItems(category);
 if(category==='men') items=items.filter(p=>['Bracelet','Ring'].includes(p.type));
 const groups=category==='women'
  ? {Bracelets:['Bracelet'],Earrings:['Earrings'],Necklaces:['Necklace Set','Pendant'],Rings:['Ring']}
  : {Bracelets:['Bracelet'],Rings:['Ring']};
 const grid=document.querySelector('#shop-grid');
 const requested=new URLSearchParams(location.search).get('type');
 const hero=document.querySelector('#category-hero');
 const heroContent=document.querySelector('#category-hero-content');
 function updateCategoryHero(type){
  if(category!=='women'||!hero)return;
  const bannerMap={
   Rings:'assets/images/rings-category-banner.png',
   Bracelets:'assets/images/bracelets-category-banner.png',
   Necklaces:'assets/images/necklaces-category-banner.jpg',
   Earrings:'assets/images/earrings-category-banner-2048x596.jpg'
  };
  const bannerRatios={
   Rings:'2048 / 596',
   Bracelets:'2048 / 596',
   Necklaces:'2048 / 596',
   Earrings:'2048 / 596'
  };
  if(bannerMap[type]){
   hero.style.backgroundImage=`url('${bannerMap[type]}')`;
   hero.style.aspectRatio=bannerRatios[type]||'2048 / 596';
   hero.classList.add('category-image-banner');
   if(heroContent)heroContent.hidden=true;
   document.title=`${type} | SR Jewellery`;
  }else{
   hero.style.backgroundImage="url('assets/images/women-banner.webp')";
   hero.style.removeProperty('aspect-ratio');
   hero.classList.remove('category-image-banner');
   if(heroContent)heroContent.hidden=false;
   document.title='Women Jewellery | SR';
  }
 }
 if(requested&&groups[requested]){
  const radio=document.querySelector(`input[name="type"][value="${requested}"]`);
  if(radio) radio.checked=true;
 }
 function paint(){
  let type=document.querySelector('input[name="type"]:checked')?.value||'all';
  updateCategoryHero(type);
  let sort=document.querySelector('#sort')?.value||'featured';
  let out=items.filter(p=>type==='all'||(groups[type]||[]).includes(p.type));
  if(sort==='low')out.sort((a,b)=>a.price-b.price);
  if(sort==='high')out.sort((a,b)=>b.price-a.price);
  if(sort==='name')out.sort((a,b)=>a.name.localeCompare(b.name));
  grid.innerHTML=out.map(productCard).join('');
  document.querySelector('#result-count').textContent=out.length+' products';
 }
 document.querySelectorAll('input[name="type"]').forEach(i=>i.addEventListener('change',paint));
 document.querySelector('#sort')?.addEventListener('change',paint);
 paint();
}
function initProduct(){const id=new URLSearchParams(location.search).get('id')||'w01';const p=productById(id)||PRODUCTS[0];document.title=p.name+' | SR Jewellery';document.querySelector('#product-content').innerHTML=`<div class="product-gallery"><div class="product-main-image"><img src="assets/images/${p.image}" alt="${p.name}"></div></div><div class="product-details"><div class="eyebrow">${p.type}</div><h1>${p.name}</h1><div><span class="price">${formatPrice(p.price)}</span><span class="old-price">${formatPrice(p.oldPrice)}</span></div><div class="rating">★★★★★ <span style="color:var(--muted);font-size:13px">4.9 · 37 reviews</span></div><p class="product-desc">${p.desc}</p><div class="option-label">Finish</div><div class="option-row"><button class="option active">Gold</button><button class="option">Silver</button><button class="option">Rose Gold</button></div><div class="option-label">Quantity</div><div class="buy-row"><div class="qty"><button onclick="qtyChange(-1)">−</button><input id="qty-input" value="1" inputmode="numeric"><button onclick="qtyChange(1)">+</button></div><button class="btn btn-primary" onclick="addToCart('${p.id}',document.querySelector('#qty-input').value)">Add to Cart</button><button class="icon-btn" style="border:1px solid var(--line)" onclick="toggleWish('${p.id}',this)">${icon('heart')}</button></div><div class="trust-grid" style="grid-template-columns:1fr 1fr;padding:10px 0"><div class="trust-item">${icon('truck')}<div><b>Fast Delivery</b><span>3–5 working days</span></div></div><div class="trust-item">${icon('exchange')}<div><b>Easy Exchange</b><span>Within 7 days</span></div></div></div><div class="detail-accordion"><details class="detail-item" open><summary>Product details</summary><p>Premium fashion jewellery with careful finishing. Store in the included pouch and keep away from perfume and water.</p></details><details class="detail-item"><summary>Delivery & returns</summary><p>Delivery across Pakistan. Cash on Delivery is available. Unworn items may be exchanged within 7 days.</p></details><details class="detail-item"><summary>Care guide</summary><p>Wipe gently after use and store separately in a dry place to preserve shine.</p></details></div></div>`;renderProducts('#related-grid',PRODUCTS.filter(x=>x.id!==p.id&&x.category===p.category).slice(0,4))}
function qtyChange(n){const q=document.querySelector('#qty-input');q.value=Math.max(1,Number(q.value||1)+n)}
function initCart(){const cart=getCart();const list=document.querySelector('#cart-list');if(!cart.length){list.innerHTML='<div class="empty-state"><h2>Your cart is empty</h2><p>Add something beautiful to get started.</p><a class="btn btn-primary" href="women.html">Continue Shopping</a></div>';document.querySelector('#cart-summary').style.display='none';return}list.innerHTML=cart.map(item=>{const p=productById(item.id);return `<div class="cart-item"><img src="assets/images/${p.image}" alt="${p.name}"><div><div class="product-type">${p.type}</div><h3>${p.name}</h3><span class="price">${formatPrice(p.price)}</span></div><div><div class="qty"><button onclick="cartQty('${p.id}',-1)">−</button><input value="${item.qty}" readonly><button onclick="cartQty('${p.id}',1)">+</button></div><button class="remove-btn" onclick="removeCart('${p.id}')">Remove</button></div></div>`}).join('');updateSummary()}
function cartQty(id,n){let c=getCart(),x=c.find(i=>i.id===id);x.qty=Math.max(1,x.qty+n);saveCart(c);initCart()}function removeCart(id){saveCart(getCart().filter(i=>i.id!==id));initCart()}
function updateSummary(){const sub=getCart().reduce((s,i)=>s+productById(i.id).price*i.qty,0);const ship=sub>=5000?0:250;document.querySelector('#subtotal').textContent=formatPrice(sub);document.querySelector('#shipping').textContent=ship?'Rs. 250':'FREE';document.querySelector('#total').textContent=formatPrice(sub+ship)}

function createOrderId(){
 const d=new Date();
 const date=[d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('');
 const time=[String(d.getHours()).padStart(2,'0'),String(d.getMinutes()).padStart(2,'0'),String(d.getSeconds()).padStart(2,'0')].join('');
 return `SR-${date}-${time}-${Math.floor(100+Math.random()*900)}`;
}
function getCheckoutField(form,name){return (form.elements[name]?.value||'').trim()}
function buildOrderPayload(form,cart,sub,ship){
 const items=cart.map(i=>{const p=productById(i.id);return {id:p.id,name:p.name,type:p.type,price:p.price,qty:i.qty,lineTotal:p.price*i.qty}});
 return {
  orderId:createOrderId(),
  createdAt:new Date().toISOString(),
  store:'SR Jewellery',
  customer:{
   contact:getCheckoutField(form,'contact'),firstName:getCheckoutField(form,'first_name'),lastName:getCheckoutField(form,'last_name'),
   country:getCheckoutField(form,'country'),address:getCheckoutField(form,'address'),
   apartment:getCheckoutField(form,'apartment'),city:getCheckoutField(form,'city'),postalCode:getCheckoutField(form,'postal_code')
  },
  paymentMethod:form.querySelector('input[name="payment_method"]:checked')?.value||'cod',
  items,subtotal:sub,shipping:ship,total:sub+ship,status:'New'
 };
}
function buildOrderWhatsappMessage(order){
 const payment=order.paymentMethod==='bank'?'Bank Transfer':'Cash on Delivery';
 const itemLines=order.items.map((i,n)=>`${n+1}. ${i.name} × ${i.qty} — ${formatPrice(i.lineTotal)}`).join('\n');
 const c=order.customer;
 return [
  `*New Order — ${order.orderId}*`,
  '',itemLines,'',
  `Subtotal: ${formatPrice(order.subtotal)}`,
  `Shipping: ${formatPrice(order.shipping)}`,
  `*Total: ${formatPrice(order.total)}*`,
  `Payment: ${payment}`,'',
  `Customer: ${[c.firstName,c.lastName].filter(Boolean).join(' ')||'Customer'}`,
  `Contact: ${c.contact}`,
  `Address: ${[c.address,c.apartment,c.city,c.postalCode,c.country].filter(Boolean).join(', ')}`
 ].join('\n');
}
function initCheckout(){
 const cart=getCart();
 if(!cart.length){location.href='cart.html';return}
 const sub=cart.reduce((s,i)=>s+productById(i.id).price*i.qty,0),ship=sub>=5000?0:200,total=sub+ship;
 document.querySelector('#checkout-items').innerHTML=cart.map(i=>{const p=productById(i.id);return `<div class="checkout-product-row"><div class="checkout-product-thumb"><img src="assets/images/${p.image}" alt="${p.name}"><span class="checkout-qty-badge">${i.qty}</span></div><div class="checkout-product-meta"><div class="checkout-product-name">${p.name}</div><small>${p.type}</small></div><strong>${formatPrice(p.price*i.qty)}</strong></div>`}).join('');
 const subtotalEl=document.querySelector('#checkout-subtotal');if(subtotalEl)subtotalEl.textContent=formatPrice(sub);
 const shipEl=document.querySelector('#checkout-ship');if(shipEl)shipEl.textContent=ship?formatPrice(ship):'FREE';
 document.querySelector('#checkout-total').textContent=formatPrice(total);
 const bankMsg=document.querySelector('#bank-transfer-message');
 const paymentRadios=document.querySelectorAll('input[name="payment_method"]');
 const updatePaymentUI=()=>{const selected=document.querySelector('input[name="payment_method"]:checked')?.value;if(bankMsg)bankMsg.hidden=selected!=='bank'};
 paymentRadios.forEach(r=>r.addEventListener('change',updatePaymentUI));updatePaymentUI();
 const form=document.querySelector('#order-form');
 form.addEventListener('submit',e=>{
  e.preventDefault();
  if(!form.reportValidity())return;
  const button=document.querySelector('#complete-order-btn');
  const status=document.querySelector('#order-submit-status');
  button.disabled=true;button.textContent='Opening WhatsApp…';
  const order=buildOrderPayload(form,cart,sub,ship);
  localStorage.setItem('srLastOrder',JSON.stringify(order));
  const whatsappUrl=`https://wa.me/923189661981?text=${encodeURIComponent(buildOrderWhatsappMessage(order))}`;
  localStorage.removeItem('srCart');updateCartCount();
  if(status)status.textContent='WhatsApp khul raha hai. Order bhejne ke liye Send dabayein.';
  setTimeout(()=>{window.location.href=whatsappUrl},250);
 });
}
function initSearch(){const q=(new URLSearchParams(location.search).get('q')||'').trim().toLowerCase();document.querySelector('#search-title').textContent=q?`Results for “${q}”`:'Search products';const out=q?PRODUCTS.filter(p=>(p.name+' '+p.type+' '+p.category).toLowerCase().includes(q)):PRODUCTS;renderProducts('#search-grid',out);document.querySelector('#search-count').textContent=out.length+' products found'}


const WELCOME_SOCIAL_LINKS={
 facebook:'#',
 threads:'#',
 x:'#',
 instagram:'#',
 youtube:'#'
};
function welcomeSocialIcon(name){
 const icons={
  facebook:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.2 8.4V6.8c0-.8.5-1 1-1h2.6V2.1L14.3 2c-3.5 0-5.1 2-5.1 4.7v1.7H6v4.1h3.2V22h5v-9.5h3.3l.5-4.1h-3.8Z"/></svg>',
  threads:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.4 2C7 2 3.8 5.5 3.8 11.8c0 6.2 3.4 10.2 8.7 10.2 4.5 0 7.7-2.5 7.7-6.2 0-2.7-1.6-4.4-4-5.3-.3-4-2.6-6.1-6.2-6.1-2.4 0-4.2 1-5.2 2.9l2.7 1.3c.5-1 1.3-1.5 2.5-1.5 1.8 0 2.8 1 3 2.8-.4 0-.8-.1-1.2-.1-3.8 0-6.1 1.8-6.1 4.8 0 2.7 2.2 4.6 5.3 4.6 2.8 0 4.8-1.5 5.2-4.2.6.5.9 1.2.9 2 0 2-1.8 3.2-4.6 3.2-3.7 0-5.7-2.9-5.7-8.2 0-4.9 1.8-7.2 5.6-7.2 2.5 0 4.1 1 5.1 3.2l2.7-1.4C18.7 3.4 16.1 2 12.4 2Zm-1.2 14.5c-1.5 0-2.4-.8-2.4-1.9 0-1.3 1.1-2 3.1-2 .5 0 .9 0 1.3.1-.1 2.5-.8 3.8-2 3.8Z"/></svg>',
  x:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4l16 16M20 4 4 20"/></svg>',
  instagram:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.3 2h9.4A5.3 5.3 0 0 1 22 7.3v9.4a5.3 5.3 0 0 1-5.3 5.3H7.3A5.3 5.3 0 0 1 2 16.7V7.3A5.3 5.3 0 0 1 7.3 2Zm0 2A3.3 3.3 0 0 0 4 7.3v9.4A3.3 3.3 0 0 0 7.3 20h9.4a3.3 3.3 0 0 0 3.3-3.3V7.3A3.3 3.3 0 0 0 16.7 4H7.3Zm10.2 1.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/></svg>',
  youtube:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8ZM9.7 15.3V8.7L15.5 12l-5.8 3.3Z"/></svg>'
 };
 return icons[name]||'';
}
function closeWelcomePopup(){
 const overlay=document.querySelector('.sr-welcome-overlay');
 if(!overlay)return;
 overlay.classList.remove('is-open');
 document.body.classList.remove('sr-welcome-locked');
 setTimeout(()=>overlay.remove(),330);
}
function initWelcomePopup(){
 let seen=false;
 try{seen=sessionStorage.getItem('srWelcomePopupSeen')==='1'}catch(e){}
 if(seen)return;
 try{sessionStorage.setItem('srWelcomePopupSeen','1')}catch(e){}
 const overlay=document.createElement('div');
 overlay.className='sr-welcome-overlay';
 overlay.setAttribute('role','dialog');
 overlay.setAttribute('aria-modal','true');
 overlay.setAttribute('aria-labelledby','sr-welcome-title');
 overlay.innerHTML=`<div class="sr-welcome-dialog">
  <button class="sr-welcome-close" type="button" aria-label="Close welcome offer">×</button>
  <div class="sr-welcome-photo" role="img" aria-label="Woman wearing elegant silver rings"></div>
  <div class="sr-welcome-content">
   <p class="sr-welcome-kicker">On your first purchase</p>
   <h2 class="sr-welcome-title" id="sr-welcome-title">Get Upto 30%<br>Off + Free<br>Shipping</h2>
   <form class="sr-welcome-form" novalidate>
    <div class="sr-welcome-email-row">
     <input type="email" name="email" autocomplete="email" placeholder="Email Address" aria-label="Email address" required>
     <button type="submit">Sign Up</button>
    </div>
    <label class="sr-welcome-consent"><input type="checkbox" name="terms" required><span>I agree with the <a href="contact.html">Terms &amp; Conditions</a></span></label>
    <div class="sr-welcome-message" role="status" aria-live="polite"></div>
   </form>
   <div class="sr-welcome-social" aria-label="Social media links">
    <span class="sr-welcome-social-label">Social Media :</span>
    ${Object.keys(WELCOME_SOCIAL_LINKS).map(name=>`<a class="sr-social-${name}" href="${WELCOME_SOCIAL_LINKS[name]}" data-social="${name}" aria-label="${name}" target="_blank" rel="noopener">${welcomeSocialIcon(name)}</a>`).join('')}
   </div>
  </div>
 </div>`;
 document.body.appendChild(overlay);
 document.body.classList.add('sr-welcome-locked');
 const close=overlay.querySelector('.sr-welcome-close');
 const form=overlay.querySelector('.sr-welcome-form');
 const firstInput=overlay.querySelector('input[type="email"]');
 close.addEventListener('click',closeWelcomePopup);
 overlay.addEventListener('click',e=>{if(e.target===overlay)closeWelcomePopup()});
 overlay.querySelectorAll('[data-social]').forEach(link=>link.addEventListener('click',e=>{
  if(link.getAttribute('href')==='#'){
   e.preventDefault();
   const name=link.dataset.social.charAt(0).toUpperCase()+link.dataset.social.slice(1);
   toast(`${name} link will be added soon`);
  }
 }));
 form.addEventListener('submit',e=>{
  e.preventDefault();
  const message=form.querySelector('.sr-welcome-message');
  if(!form.reportValidity()){
   message.textContent='Please enter your email and accept the terms.';
   return;
  }
  const email=form.elements.email.value.trim();
  try{localStorage.setItem('srNewsletterEmail',email)}catch(err){}
  const button=form.querySelector('button[type="submit"]');
  button.disabled=true;
  button.textContent='Signed Up ✓';
  message.textContent='Thank you! Your welcome offer is ready.';
  setTimeout(closeWelcomePopup,1200);
 });
 const onKey=e=>{
  if(e.key==='Escape'){
   closeWelcomePopup();
   document.removeEventListener('keydown',onKey);
  }
 };
 document.addEventListener('keydown',onKey);
 requestAnimationFrame(()=>{
  overlay.classList.add('is-open');
  setTimeout(()=>firstInput.focus({preventScroll:true}),330);
 });
}

document.addEventListener('DOMContentLoaded',()=>{renderShell();setupCollectionHover();initWelcomePopup()});
