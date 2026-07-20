const fallbackImg = 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=600&q=80';

// MOBILE NAVBAR TOGGLE
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        // Close nav drawer when link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // BACK TO TOP BUTTON: show only after scrolling down a bit
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        const toggleBackToTop = () => {
            backToTop.classList.toggle('show', window.scrollY > 500);
        };
        window.addEventListener('scroll', toggleBackToTop, { passive: true });
        toggleBackToTop();
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

// COMPLETE BLINGZY'S RESTOBAR MENU DATASET
const menuItems = [
    // Mains & Pulutan
    { category: 'mains', name: 'Creamy Beef Mushroom', price: '₱399', desc: 'Tender beef slices simmered in rich mushroom cream sauce.', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80' },
    { category: 'mains', name: 'Beef Salpicao', price: '₱399', desc: 'Sautéed beef tenderloin cubes loaded with toasted garlic and butter.', img: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=600&q=80' },
    { category: 'mains', name: 'Gambas', price: '₱399', desc: 'Sizzling shrimp cooked in garlic, olive oil, and chili peppers.', img: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=80' },
    { category: 'mains', name: 'Butter Garlic Shrimp', price: '₱399', desc: 'Juicy shrimp tossed in savory garlic butter sauce.', img: 'https://images.unsplash.com/photo-1559737671-1a3ebc70faef?auto=format&fit=crop&w=600&q=80' },
    { category: 'mains', name: 'Sizzling Bagnet', price: '₱399', desc: 'Crispy deep-fried pork belly served hot on a sizzling plate.', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80' },
    { category: 'mains', name: 'Buffalo Wings', price: '₱370', desc: 'Crispy chicken wings glazed in spicy, tangy buffalo sauce.', img: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=600&q=80' },
    { category: 'mains', name: 'Bagnet', price: '₱350', desc: 'Classic Ilocano crisp-fried pork belly.', img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80' },
    { category: 'mains', name: 'Lechon Kawali', price: '₱350', desc: 'Golden crispy pork belly served with savory liver sauce.', img: 'https://images.unsplash.com/photo-1514944288352-fffac99f0bdf?auto=format&fit=crop&w=600&q=80' },
    { category: 'mains', name: 'Pork Sisig', price: '₱350', desc: 'Sizzling minced pork, onions, and chili peppers topped with fresh egg.', img: 'https://images.unsplash.com/photo-1625938145744-e380515399b7?auto=format&fit=crop&w=600&q=80' },
    { category: 'mains', name: 'Dynamite', price: '₱350', desc: 'Green chili peppers stuffed with cheese and pork wrapped in lumpia wrapper.', img: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=600&q=80' },
    { category: 'mains', name: 'Nachos', price: '₱340', desc: 'Crispy tortilla chips topped with cheese, minced meat, and jalapeños.', img: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=600&q=80' },
    { category: 'mains', name: 'Chicharon Bulaklak', price: '₱320', desc: 'Deep-fried ruffle fat served with spiced vinegar dip.', img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80' },
    { category: 'mains', name: 'Tofu Sisig', price: '₱299', desc: 'Crispy tofu cubes tossed in creamy, spicy sisig dressing.', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80' },
    { category: 'mains', name: 'Chicken Tenders', price: '₱299', desc: 'Breaded chicken breast strips fried to a crispy finish.', img: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80' },
    { category: 'mains', name: 'Calamares', price: '₱250', desc: 'Golden fried squid rings served with tartar sauce.', img: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80' },
    { category: 'mains', name: 'Fries', price: '₱220', desc: 'Classic crispy potato french fries.', img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80' },
    { category: 'mains', name: 'Onion Rings', price: '₱220', desc: 'Batter-dipped fried onion rings with dipping sauce.', img: 'https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=600&q=80' },
    { category: 'mains', name: 'Ensaladang Labanos', price: '₱170', desc: 'Pickled radish salad with onions and vinegar dressing.', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80' },

    // Soups & Pasta
    { category: 'soups-pasta', name: 'Sinigang na Hipon', price: '₱450', desc: 'Tamarind sour soup with fresh shrimp and garden vegetables.', img: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80' },
    { category: 'soups-pasta', name: 'Sinigang na Baboy', price: '₱399', desc: 'Classic sour tamarind broth with tender pork ribs.', img: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80' },
    { category: 'soups-pasta', name: 'Sinigang na Bagnet', price: '₱399', desc: 'Tangy tamarind broth paired with crispy pork bagnet.', img: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80' },
    { category: 'soups-pasta', name: 'Carbonara', price: '₱390', desc: 'Classic Italian pasta with creamy sauce, parmesan, and crisp bacon.', img: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=600&q=80' },
    { category: 'soups-pasta', name: 'Scampi Shrimp Pasta', price: '₱390', desc: 'Garlic butter shrimp tossed with pasta and fine herbs.', img: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=600&q=80' },
    { category: 'soups-pasta', name: 'Baked Mac', price: '₱295', desc: 'Baked macaroni in tomato-based meat sauce topped with triple cheese.', img: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=600&q=80' },
    { category: 'soups-pasta', name: 'Fettuccine', price: '₱295', desc: 'Fettuccine pasta in rich white cream sauce topped with tuna flakes.', img: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=600&q=80' },

    // Sandwiches & Desserts
    { category: 'sandwiches-desserts', name: 'Club House Sandwich', price: '₱320', desc: 'Triple decker with chicken, bacon, egg, lettuce, tomato, and mayo.', img: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80' },
    { category: 'sandwiches-desserts', name: 'Apple Pie', price: '₱420', desc: 'Freshly baked apple pie. (Pre-order only - 1 day lead time)', img: 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=600&q=80' },
    { category: 'sandwiches-desserts', name: 'Cheesecake Slice', price: '₱220', desc: 'Creamy New York-style cheesecake slice.', img: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80' },
    { category: 'sandwiches-desserts', name: 'Parfait', price: '₱150', desc: 'Layered dessert with cream, fruit, and sweet crunch.', img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80' },
    { category: 'sandwiches-desserts', name: 'Yang Chao Rice', price: '₱110', desc: 'Fried rice loaded with veggies, egg, and savory bits.', img: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80' },
    { category: 'sandwiches-desserts', name: 'Pilaf Rice', price: '₱110', desc: 'Seasoned rice cooked in aromatic broth and spices.', img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80' },
    { category: 'sandwiches-desserts', name: 'Plain Rice', price: '₱35', desc: 'Steamed white rice.', img: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=600&q=80' },

    // Drinks & Cocktails
    { category: 'drinks', name: 'Blue Lagoon Cocktail', price: '₱250', desc: 'Refreshing blue curaçao cocktail with citrus garnish. (Happy Hour Discount)', img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80' },
    { category: 'drinks', name: 'Electric Green Sour', price: '₱250', desc: 'Vibrant apple melon blend topped with cherry & pineapple. (Happy Hour Discount)', img: 'image_f6843a.jpg' },
    { category: 'drinks', name: 'Sunset Tropical Punch', price: '₱240', desc: 'Sweet citrus and rum blend. (Happy Hour Discount)', img: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=600&q=80' },
    { category: 'drinks', name: 'San Mig Light Bucket', price: '₱480', desc: 'Ice-cold beer bucket (6 bottles). Free Nachos for every 2 buckets!', img: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=600&q=80' }
];

// TOGGLE FULL MENU
function toggleFullMenu(forceOpen = false) {
    const wrapper = document.getElementById('full-menu-section');
    const btn = document.getElementById('toggle-menu-btn');

    if (forceOpen || !wrapper.classList.contains('active')) {
        wrapper.classList.add('active');
        btn.innerText = "Hide Menu";
        renderMenuCards('all');
        if (forceOpen) {
            wrapper.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        wrapper.classList.remove('active');
        btn.innerText = "See Full Menu";
    }
}

// RENDER MENU CARDS
function renderMenuCards(filter = 'all') {
    const container = document.getElementById('menu-cards-container');
    container.innerHTML = '';

    menuItems.forEach(item => {
        if (filter !== 'all' && item.category !== filter) return;

        const card = document.createElement('div');
        card.className = 'menu-card-item';
        card.onclick = () => openItemModal(item.name, item.price, item.desc, item.img);

        card.innerHTML = `
      <div class="menu-card-img-wrapper skeleton">
        <img class="menu-card-img" src="${item.img}" alt="${item.name}" loading="lazy">
      </div>
      <div class="menu-card-content">
        <div class="menu-card-header">
          <div class="menu-card-title">${item.name}</div>
          <div class="menu-card-price">${item.price}</div>
        </div>
        <div class="menu-card-desc">${item.desc}</div>
      </div>
    `;
        container.appendChild(card);

        // Remove the shimmer once the image is done loading (success or fallback)
        const imgEl = card.querySelector('.menu-card-img');
        const wrapperEl = card.querySelector('.menu-card-img-wrapper');
        const clearSkeleton = () => wrapperEl.classList.remove('skeleton');
        imgEl.addEventListener('load', clearSkeleton, { once: true });
        imgEl.addEventListener('error', () => {
            imgEl.src = fallbackImg;
            clearSkeleton();
        }, { once: true });
        if (imgEl.complete) clearSkeleton();
    });
}

// FILTER CATEGORY
function filterCategory(catName, evt) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    if (evt && evt.target) {
        evt.target.classList.add('active');
    }
    renderMenuCards(catName);
}

// MODAL LOGIC
let lastFocusedBeforeModal = null;

function openItemModal(name, price, desc, img) {
    document.getElementById('modalTitle').innerText = name;
    document.getElementById('modalPrice').innerText = price;
    document.getElementById('modalDesc').innerText = desc;
    const imgElem = document.getElementById('modalImg');
    imgElem.src = img || fallbackImg;
    imgElem.alt = name;
    imgElem.onerror = () => { imgElem.src = fallbackImg; };

    lastFocusedBeforeModal = document.activeElement;
    const modal = document.getElementById('itemModal');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden'; // lock background scroll
    document.getElementById('itemModal').querySelector('.close-modal').focus();
    document.addEventListener('keydown', handleModalKeydown);
}

function closeModal(e) {
    if (e.target.id === 'itemModal') {
        finishCloseModal();
    }
}

function closeModalDirect() {
    finishCloseModal();
}

function finishCloseModal() {
    document.getElementById('itemModal').classList.remove('open');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', handleModalKeydown);
    if (lastFocusedBeforeModal && typeof lastFocusedBeforeModal.focus === 'function') {
        lastFocusedBeforeModal.focus();
    }
}

function handleModalKeydown(e) {
    if (e.key === 'Escape') {
        finishCloseModal();
        return;
    }
    // Simple focus trap: keep Tab cycling within the modal content
    if (e.key === 'Tab') {
        const modalContent = document.querySelector('#itemModal .modal-content');
        const focusable = modalContent.querySelectorAll('button, a[href]');
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    }
}