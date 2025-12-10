// --- Elements ---
const menu = document.querySelector('#menu-bars');
const navbar = document.querySelector('.navbar');
const searchIcon = document.querySelector('#search-icon');
const searchForm = document.querySelector('#search-form');
const closeSearch = document.querySelector('#close');
const filterBtns = document.querySelectorAll('.filter-btn');
const menuContainer = document.querySelector('#menu-container');
const cartCountElement = document.querySelector('.cart-count');

// --- Navbar Toggle (Mobile) ---
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// Remove active class on scroll
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// --- Search Form Toggle ---
searchIcon.onclick = () => {
    searchForm.classList.add('active');
}

closeSearch.onclick = () => {
    searchForm.classList.remove('active');
}

// --- Menu Data ---
const menuItems = [
    {
        id: 1,
        title: "Classic Cheeseburger",
        category: "burger",
        price: "$12.99",
        rating: 4.5,
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 2,
        title: "Margherita Pizza",
        category: "pizza",
        price: "$15.99",
        rating: 4.8,
        img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 3,
        title: "Creamy Pasta",
        category: "pasta",
        price: "$10.50",
        rating: 4.3,
        img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 4,
        title: "Double Whopper",
        category: "burger",
        price: "$14.99",
        rating: 4.6,
        img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 5,
        title: "Pepperoni Pizza",
        category: "pizza",
        price: "$18.99",
        rating: 4.9,
        img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 6,
        title: "Spaghetti Bolognese",
        category: "pasta",
        price: "$13.99",
        rating: 4.5,
        img: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    }
];

// --- Render Menu Items ---
function renderMenu(category = 'all') {
    menuContainer.innerHTML = '';
    
    const items = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);

    items.forEach(item => {
        const box = document.createElement('div');
        box.classList.add('box');
        box.innerHTML = `
            <i class="fas fa-heart"></i>
            <img src="${item.img}" alt="${item.title}">
            <h3>${item.title}</h3>
            <div class="stars">
                ${getStars(item.rating)}
            </div>
            <span>${item.price}</span>
            <a href="#" class="btn" onclick="addToCart(event)">Add to cart</a>
        `;
        menuContainer.appendChild(box);
    });
}

// Helper for stars
function getStars(rating) {
    let starsHtml = '';
    for(let i = 0; i < 5; i++) {
        if(i < Math.floor(rating)) {
            starsHtml += '<i class="fas fa-star"></i>';
        } else {
            starsHtml += '<i class="far fa-star"></i>';
        }
    }
    return starsHtml;
}

// --- Filter Logic ---
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Visual toggle
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Data filter
        const category = btn.getAttribute('data-filter');
        renderMenu(category);
    });
});

// --- Cart Logic (Simple Counter) ---
let cartCount = 0;
function addToCart(e) {
    e.preventDefault();
    cartCount++;
    cartCountElement.innerText = cartCount;
    
    // Simple visual feedback
    const btn = e.target;
    const originalText = btn.innerText;
    btn.innerText = "Added!";
    btn.style.background = "#27ae60";
    setTimeout(() => {
        btn.innerText = originalText;
        btn.style.background = ""; // reset to CSS default
    }, 1000);
}

// Init
renderMenu();