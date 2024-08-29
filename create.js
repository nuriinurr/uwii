window.addEventListener('scroll', function() {
    const textLogo = document.getElementById('access-media-text');
    const header = document.getElementById('header');
    const nav = document.getElementById('navbar');

    
    // Jika scroll lebih dari 50px, tambahkan kelas 'scrolled'
    if (window.scrollY > 100) {
        textLogo.classList.add('text-logo');
        header.classList.add('header-active');
        nav.classList.add('nav');
    } else {
        header.classList.remove('header-active');
        textLogo.classList.remove('text-logo');
        nav.classList.remove('nav');
    }
});
let currentSlide = 0;
const clientCards = document.querySelectorAll('.client-card');
const totalSlides = clientCards.length;

document.querySelector('.next').addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
    } else {
        currentSlide = 0; // Kembali ke slide pertama
    }
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = totalSlides - 1; // Pergi ke slide terakhir jika di geser ke kiri
    }
    updateCarousel();
});

function updateCarousel() {
    const carouselWidth = document.querySelector('.clients-carousel').offsetWidth;
    const newTransformValue = -carouselWidth * currentSlide;
    document.querySelector('.clients-container').style.transform = `translateX(${newTransformValue}px)`;
}

// KLIEN//

const carouselContainer = document.querySelector('.clients-container');
const clientCard = document.querySelectorAll('.client-card');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
const totalClients = clientCards.length;
const visibleClients = 6; // Jumlah klien yang terlihat sekaligus

function updateCarousel() {
    const offset = -(currentIndex * (100 / visibleClients));
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    if (currentIndex < totalClients - visibleClients) {
        currentIndex++;
    } else {
        currentIndex = 0; // Kembali ke awal jika sudah mencapai akhir
    }
    updateCarousel();
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalClients - visibleClients; // Geser ke akhir jika sudah di awal
    }
    updateCarousel();
}

document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarMenu = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navbarToggler.addEventListener('click', function() {
        navbarMenu.classList.toggle('show');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navbarMenu.classList.contains('show')) {
                navbarMenu.classList.remove('show');
            }
        });
    });
});




