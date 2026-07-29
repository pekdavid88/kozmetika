document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. MOBIL HAMBURGER MENÜ KEZELÉSE
    // ==========================================
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function toggleMenu() {
        const isOpen = mobileMenu.classList.contains('open');
        if (isOpen) {
            // Bezárás
            mobileMenu.classList.remove('open');
            hamburgerIcon.classList.remove('open');
            document.body.style.overflow = 'auto'; // Görgetés visszaállítása
        } else {
            // Megnyitás
            mobileMenu.classList.add('open');
            hamburgerIcon.classList.add('open');
            document.body.style.overflow = 'hidden'; // Háttér görgetés letiltása
        }
    }

    menuBtn.addEventListener('click', toggleMenu);

    // Ha egy menüpontra kattintanak, zárjuk be a menüt
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('open')) {
                toggleMenu();
            }
        });
    });


    // ==========================================
    // 2. SZEMÉLYRE SZABOTT CAROUSEL CSÚSZTATÓ
    // ==========================================
    const carousel = document.getElementById('carousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (carousel && prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            // A konténer szélességének 80%-ával görgetünk visszafelé
            const scrollAmount = carousel.clientWidth * 0.8;
            carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', () => {
            // A konténer szélességének 80%-ával görgetünk előre
            const scrollAmount = carousel.clientWidth * 0.8;
            carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    }
});