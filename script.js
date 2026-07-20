const fallbackImg = 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=600&q=80';

const fbPageLink = 'https://www.facebook.com/share/17oRUbmkQj/?mibextid=wwXIfr';

// GALLERY ALBUMS
// NOTE: Most photos/links below are placeholders — swap `img` and `link` per
// photo with the real picture and the real Facebook post permalink whenever
// you have them. The "Kuya Bunjeng" tile already points to the real post.
const albums = [
    {
        id: 'birthdays',
        name: 'Birthdays',
        cover: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=600&q=80',
        photos: [
            { img: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=600&q=80', caption: 'Birthday celebration at Blingzy\'s', link: fbPageLink },
            { img: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=600&q=80', caption: 'Cheers to another year', link: fbPageLink }
        ]
    },
    {
        id: 'live-band',
        name: 'Live Band Nights',
        cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80',
        photos: [
            { img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80', caption: 'Live band set at Blingzy\'s', link: fbPageLink },
            { img: 'https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?auto=format&fit=crop&w=600&q=80', caption: 'Table-side view of the show', link: fbPageLink }
        ]
    },
    {
        id: 'dj-sets',
        name: 'DJ Sets',
        cover: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&w=600&q=80',
        photos: [
            { img: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&w=600&q=80', caption: 'DJ set at the Sundown Bar', link: fbPageLink },
            { img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80', caption: 'Dancefloor cocktails', link: fbPageLink }
        ]
    },
    {
        id: 'visitors',
        name: 'Visitors & Creators',
        cover: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=600&q=80',
        photos: [
            { img: 'https://scontent.fmnl4-7.fna.fbcdn.net/v/t39.30808-6/742215295_1530222025784321_511558362847768790_n.jpg?stp=dst-jpg_tt6&cstp=mx1086x1448&ctp=s1086x1448&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=BtRmc4w_8gsQ7kNvwFucEIs&_nc_oc=Adpt8Db20JuWnJPuaimw4e_acW2WGQMcq_hW4VNmpgjFJ4RW3nvj7ZxctZ924yRvxCOUytm2DnQgzrMLvsAFPjIH&_nc_zt=23&_nc_ht=scontent.fmnl4-7.fna&_nc_gid=3_acjuJfaMrSkup_CJN07Q&_nc_ss=7b2a8&oh=00_AQAWeBsNo8_RpisvUqfE4jXIvPyHpFJPIiiQJLERDLiMUQ&oe=6A63B630', caption: 'Kuya Bunjeng visits Blingzy\'s', link: 'https://www.facebook.com/photo/?fbid=1530222022450988&set=a.381770433962825' },
            { img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80', caption: 'A regular stopping by', link: fbPageLink }
        ]
    },
    {
        id: 'food-drinks',
        name: 'Food & Drinks',
        cover: 'https://images.unsplash.com/photo-1625938145744-e380515399b7?auto=format&fit=crop&w=600&q=80',
        photos: [
            { img: 'https://images.unsplash.com/photo-1625938145744-e380515399b7?auto=format&fit=crop&w=600&q=80', caption: 'Fresh off the kitchen', link: fbPageLink },
            { img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80', caption: 'Sizzling favorites', link: fbPageLink }
        ]
    },
    {
        id: 'crowd-vibes',
        name: 'Crowd & Vibes',
        cover: 'https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?auto=format&fit=crop&w=600&q=80',
        photos: [
            { img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80', caption: 'Good vibes, good crowd', link: fbPageLink },
            { img: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&w=600&q=80', caption: 'Another night at Blingzy\'s', link: fbPageLink }
        ]
    }
];

let activeAlbumId = null;

function renderAlbumGrid() {
    const grid = document.getElementById('album-grid');
    if (!grid) return;
    grid.innerHTML = '';
    albums.forEach(album => {
        const card = document.createElement('button');
        card.type = 'button';
        card.className = 'album-card';
        card.setAttribute('aria-expanded', 'false');
        card.innerHTML = `
      <img src="${album.cover}" alt="${album.name} album cover" loading="lazy" decoding="async"
        onerror="this.src='${fallbackImg}'">
      <div class="album-card-overlay">
        <span class="album-card-name">${album.name}</span>
        <span class="album-card-count">${album.photos.length} Photos</span>
      </div>
    `;
        card.addEventListener('click', () => openAlbum(album.id));
        grid.appendChild(card);
    });
}

function openAlbum(albumId) {
    const album = albums.find(a => a.id === albumId);
    if (!album) return;
    activeAlbumId = albumId;

    document.getElementById('album-photos-title').textContent = album.name;
    const photosGrid = document.getElementById('album-photos-grid');
    photosGrid.innerHTML = '';
    album.photos.forEach(photo => {
        const tile = document.createElement('a');
        tile.className = 'album-photo-tile';
        tile.href = photo.link;
        tile.target = '_blank';
        tile.rel = 'noopener noreferrer';
        tile.title = photo.caption + ' — view on Facebook';
        tile.innerHTML = `
      <img src="${photo.img}" alt="${photo.caption}" loading="lazy" decoding="async"
        onerror="this.src='${fallbackImg}'">
      <span class="album-photo-caption">${photo.caption}</span>
    `;
        photosGrid.appendChild(tile);
    });

    document.querySelectorAll('.album-card').forEach((card, i) => {
        card.setAttribute('aria-expanded', albums[i].id === albumId ? 'true' : 'false');
    });

    const wrapper = document.getElementById('album-photos-section');
    wrapper.classList.add('open');
    wrapper.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function closeAlbumPanel() {
    activeAlbumId = null;
    document.getElementById('album-photos-section').classList.remove('open');
    document.querySelectorAll('.album-card').forEach(card => card.setAttribute('aria-expanded', 'false'));
}

// MOBILE NAVBAR TOGGLE
document.addEventListener('DOMContentLoaded', () => {
    renderAlbumGrid();
    const albumCloseBtn = document.getElementById('album-close-btn');
    if (albumCloseBtn) albumCloseBtn.addEventListener('click', closeAlbumPanel);

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
    { category: 'mains', name: 'Creamy Beef Mushroom', price: '₱399', desc: 'Tender beef slices simmered in rich mushroom cream sauce.', img: 'https://www.cookinwithmima.com/wp-content/uploads/2018/10/Creamy-Mushroom-Steak.jpg' },
    { category: 'mains', name: 'Beef Salpicao', price: '₱399', desc: 'Sautéed beef tenderloin cubes loaded with toasted garlic and butter.', img: 'https://yummykitchentv.com/wp-content/uploads/2022/06/beef-salpicao-recipe-02.jpg' },
    { category: 'mains', name: 'Gambas', price: '₱399', desc: 'Sizzling shrimp cooked in garlic, olive oil, and chili peppers.', img: 'https://www.allrecipes.com/thmb/_rjAOFACbhUhfhLwmMpYcPwu95o=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/266085-spanish-garlic-shrimp-DDMFS-beauty-4x3-e4e199450d704150b787a0eb59640add.jpg' },
    { category: 'mains', name: 'Butter Garlic Shrimp', price: '₱399', desc: 'Juicy shrimp tossed in savory garlic butter sauce.', img: 'https://www.foodfidelity.com/wp-content/uploads/2025/02/Garlic-Butter-Shrimp-low-pro-best-1.jpg' },
    { category: 'mains', name: 'Sizzling Bagnet', price: '₱399', desc: 'Crispy deep-fried pork belly served hot on a sizzling plate.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRww-n8jdh6gk-qr_ZiJDt6GRoT_NSQsQcjADSgQa9CvoD32564ssUR7usP&s=10' },
    { category: 'mains', name: 'Buffalo Wings', price: '₱370', desc: 'Crispy chicken wings glazed in spicy, tangy buffalo sauce.', img: 'https://easychickenrecipes.com/wp-content/uploads/2023/08/featured-buffalo-wings-recipe.jpg' },
    { category: 'mains', name: 'Bagnet', price: '₱350', desc: 'Classic Ilocano crisp-fried pork belly.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBeMi1IotdGg3ODNRuzNOyoJ1epFnmQOaIMyUzumKoskW3gD2g5qOgh1_6&s=10' },
    { category: 'mains', name: 'Lechon Kawali', price: '₱350', desc: 'Golden crispy pork belly served with savory liver sauce.', img: 'https://www.seriouseats.com/thmb/orl1xkPajYxzsOZwkooPtdYvM-M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20210508-lechon-kawali-melissa-hom-2-inchChunks-seriouseats-1d53c12cee234305b921362e2106bf29.jpg' },
    { category: 'mains', name: 'Pork Sisig', price: '₱350', desc: 'Sizzling minced pork, onions, and chili peppers topped with fresh egg.', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhm-m8a8Q3JRgaqSGOcHqI8RptUYPe16IXr-FQgcdWm7slPyn_vGKaC6QnQBWTM71ZC5snRFh8V26yg0C2mcVd_flCj30ebr1gB7L5Du0ihlottu-aptH4HjgBaPxIRe7Q7xYGnGP_dqiJe/s1600/Sizzling+Pork+Sisig+Recipe-5.jpg' },
    { category: 'mains', name: 'Dynamite', price: '₱350', desc: 'Green chili peppers stuffed with cheese and pork wrapped in lumpia wrapper.', img: 'https://images.yummy.ph/yummy/uploads/2016/09/1609_Dynamite-Cheese-Sticks-640-1.jpg' },
    { category: 'mains', name: 'Nachos', price: '₱340', desc: 'Crispy tortilla chips topped with cheese, minced meat, and jalapeños.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4By-UP-6BQW4LSCmJyl87p6fwuM8AN7Hc7zu26sdgcLsVyu3hA5vcU_iG&s=10' },
    { category: 'mains', name: 'Chicharon Bulaklak', price: '₱320', desc: 'Deep-fried ruffle fat served with spiced vinegar dip.', img: 'https://www.foxyfolksy.com/wp-content/uploads/2024/11/how-to-cook-chicharon-bulaklak.jpg' },
    { category: 'mains', name: 'Tofu Sisig', price: '₱299', desc: 'Crispy tofu cubes tossed in creamy, spicy sisig dressing.', img: 'https://assets.unileversolutions.com/recipes-v2/110254.jpg' },
    { category: 'mains', name: 'Chicken Tenders', price: '₱299', desc: 'Breaded chicken breast strips fried to a crispy finish.', img: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80' },
    { category: 'mains', name: 'Calamares', price: '₱250', desc: 'Golden fried squid rings served with tartar sauce.', img: 'https://thefatbutcherph.com/cdn/shop/articles/Pia_Santiago_Squid_Rings_1_73d55a7c-1bcb-4418-aae9-5ca8ce40529b.jpg?v=1752892180' },
    { category: 'mains', name: 'Fries', price: '₱220', desc: 'Classic crispy potato french fries.', img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80' },
    { category: 'mains', name: 'Onion Rings', price: '₱220', desc: 'Batter-dipped fried onion rings with dipping sauce.', img: 'https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=600&q=80' },
    { category: 'mains', name: 'Ensaladang Labanos', price: '₱170', desc: 'Pickled radish salad with onions and vinegar dressing.', img: 'https://www.angsarap.net/wp-content/uploads/2017/07/Ensaladang-Labanos-with-Alamang.jpg' },

    // Soups & Pasta
    { category: 'soups-pasta', name: 'Sinigang na Hipon', price: '₱450', desc: 'Tamarind sour soup with fresh shrimp and garden vegetables.', img: 'https://i.ytimg.com/vi/Mh7wIz0KlFE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA0IHEjKMtkISxyUZkRJX9NHyGyhg' },
    { category: 'soups-pasta', name: 'Sinigang na Baboy', price: '₱399', desc: 'Classic sour tamarind broth with tender pork ribs.', img: 'https://assets.sbs.com.au/dims4/default/573f28f/2147483647/strip/true/crop/1000x563+0+385/resize/1280x720!/quality/90/?url=https%3A%2F%2Fsbs-au-brightspot.s3.ap-southeast-2.amazonaws.com%2Fdrupal%2Ffood%2Fpublic%2F7I_soups_sinigang_baboy_0.jpg' },
    { category: 'soups-pasta', name: 'Sinigang na Bagnet', price: '₱399', desc: 'Tangy tamarind broth paired with crispy pork bagnet.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeNncHOojcSMrEKzUVifYHIiBnJaqV_73NEqaQM7mSQ70lJi605KCAfcA&s=10' },
    { category: 'soups-pasta', name: 'Carbonara', price: '₱390', desc: 'Classic Italian pasta with creamy sauce, parmesan, and crisp bacon.', img: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=600&q=80' },
    { category: 'soups-pasta', name: 'Scampi Shrimp Pasta', price: '₱390', desc: 'Garlic butter shrimp tossed with pasta and fine herbs.', img: 'https://www.allrecipes.com/thmb/_C15iXp1hHyIx4SPC_5y3OXqXFo=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/229960-shrimp-scampi-with-pasta-DDMFS-4x3-e065ddef4e6d44479d37b4523808cc23.jpg' },
    { category: 'soups-pasta', name: 'Baked Mac', price: '₱295', desc: 'Baked macaroni in tomato-based meat sauce topped with triple cheese.', img: 'https://www.nestlegoodnes.com/ph/sites/default/files/styles/1_1_768px_width/public/srh_recipes/89c69f2511cdead9de76388ddd734e8c.jpg.webp?itok=Hzc50YOl' },
    { category: 'soups-pasta', name: 'Fettuccine', price: '₱295', desc: 'Fettuccine pasta in rich white cream sauce topped with tuna flakes.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwlDmLcYoHJFeqHGLPtg0-U8LeLkKGG-j8HtjC7bqLRF2lcOe8z5jaGuo&s=10' },

    // Sandwiches & Desserts
    { category: 'sandwiches-desserts', name: 'Club House Sandwich', price: '₱320', desc: 'Triple decker with chicken, bacon, egg, lettuce, tomato, and mayo.', img: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80' },
    { category: 'sandwiches-desserts', name: 'Apple Pie', price: '₱420', desc: 'Freshly baked apple pie. (Pre-order only - 1 day lead time)', img: 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=600&q=80' },
    { category: 'sandwiches-desserts', name: 'Cheesecake Slice', price: '₱220', desc: 'Creamy New York-style cheesecake slice.', img: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80' },
    { category: 'sandwiches-desserts', name: 'Parfait', price: '₱150', desc: 'Layered dessert with cream, fruit, and sweet crunch.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm9DhBshW-aV_rOEGOlYIevj439xP2TJJtey1VL4jp0l6e-zTLrIXX_R8&s=10' },
    { category: 'sandwiches-desserts', name: 'Yang Chao Rice', price: '₱110', desc: 'Fried rice loaded with veggies, egg, and savory bits.', img: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80' },
    { category: 'sandwiches-desserts', name: 'Pilaf Rice', price: '₱110', desc: 'Seasoned rice cooked in aromatic broth and spices.', img: 'https://www.allrecipes.com/thmb/ohqQTWBnC0VwlTxxb_E4-H5pCWk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/203951-Sarahs-rice-pilaf-Beauty-3x4_38497-f2f18ff1bcc04abcac58ccbd8c6a17c9.jpg' },
    { category: 'sandwiches-desserts', name: 'Plain Rice', price: '₱35', desc: 'Steamed white rice.', img: 'https://ruhskitchen.com/wp-content/uploads/2024/09/istockphoto-491090528-612x612-1.jpg' },

    // Drinks & Cocktails
    { category: 'drinks', name: 'Blue Lagoon Cocktail', price: '₱250', desc: 'Refreshing blue curaçao cocktail with citrus garnish. (Happy Hour Discount)', img: 'https://bols.com/cdn/shop/files/Blue-Curacao-Spritz-Cocktail-Bols-Blue-Curacao-Liqueur.jpg?v=1779200470&width=1920' },
    { category: 'drinks', name: 'Electric Green Sour', price: '₱250', desc: 'Vibrant apple melon blend topped with cherry & pineapple. (Happy Hour Discount)', img: 'https://3catsfoodie.com/wp-content/uploads/2026/01/IMG_5051.jpg' },
    { category: 'drinks', name: 'Sunset Tropical Punch', price: '₱240', desc: 'Sweet citrus and rum blend. (Happy Hour Discount)', img: 'https://brickellmag.com/wp-content/uploads/2019/06/1561588087-74249639220c75ac3549dcc4b1368930-683x1024.jpg' },
    { category: 'drinks', name: 'San Mig Light Bucket', price: '₱480', desc: 'Ice-cold beer bucket (6 bottles). Free Nachos for every 2 buckets!', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAP7xdI--Q69o8rUL7J-hY_20rMEXJB51xZK2BEMHg6VjrkV8tPlFPq6ce&s=10' }
];

// TOGGLE FULL MENU
function toggleFullMenu(forceOpen = false) {
    const wrapper = document.getElementById('full-menu-section');
    const btn = document.getElementById('toggle-menu-btn');

    if (forceOpen || !wrapper.classList.contains('active')) {
        wrapper.classList.add('active');
        btn.innerText = "Hide Menu";
        renderMenuCards('all');
        scrollToFullMenu();
    } else {
        wrapper.classList.remove('active');
        btn.innerText = "See Full Menu";
    }
}

// Scroll to the full menu section, stopping just below the fixed navbar
// so the filter bar is always visible right away (not scrolled past it).
function scrollToFullMenu() {
    const wrapper = document.getElementById('full-menu-section');
    if (!wrapper) return;
    const navbar = document.querySelector('.navbar');
    const navHeight = navbar ? navbar.offsetHeight : 80;
    const extraBreathingRoom = 16;
    const targetTop = wrapper.getBoundingClientRect().top + window.pageYOffset - (navHeight + extraBreathingRoom);

    window.scrollTo({ top: targetTop, behavior: 'smooth' });
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