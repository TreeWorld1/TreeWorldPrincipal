document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navbarNav = document.querySelector(".navbar-nav");

    // Alternar menú móvil
    menuToggle.addEventListener("click", () => {
        navbarNav.classList.toggle("active");
    });

    // Mostrar submenú (hover)
    const categoryMenu = document.querySelector("#categoryMenu");
    const submenu = document.querySelector(".submenu");

    categoryMenu.addEventListener("mouseenter", () => {
        submenu.style.display = "block";
    });

    categoryMenu.addEventListener("mouseleave", () => {
        submenu.style.display = "none";
    });
});
