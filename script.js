document.addEventListener("DOMContentLoaded", () => {
    // 1. Mobil menü elemek lekérése
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const hamburgerIcon = document.getElementById("hamburger-icon");
    const mobileLinks = document.querySelectorAll(".mobile-link");

    // Ha megtalálható a gomb és a menü, hozzáadjuk az eseménykezelőt
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", (e) => {
            e.preventDefault();
            mobileMenu.classList.toggle("open");
            if (hamburgerIcon) {
                hamburgerIcon.classList.toggle("open");
            }
        });

        // Menü bezárása bármelyik mobil linkre kattintáskor
        mobileLinks.forEach(link => {
            link.addEventListener("click", () => {
                mobileMenu.classList.remove("open");
                if (hamburgerIcon) {
                    hamburgerIcon.classList.remove("open");
                }
            });
        });
    }


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