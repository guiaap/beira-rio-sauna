const mobileMenuButton = document.getElementById("mobile-menu-button");

mobileMenuButton.addEventListener("click", () => {

    const navList = document.getElementById("nav-list");
    const mobileMenuIcon = document.getElementById("mobile-menu-icon");

    navList.classList.toggle("open");

    if(navList.classList.contains("open")) {
        mobileMenuIcon.setAttribute("src", "src/imagens/fechar.png");
    } else {
        mobileMenuIcon.setAttribute("src", "src/imagens/menu.png");
    }

    const navLinks = document.getElementsByClassName("nav-link");

    for(let n of navLinks) {
        n.addEventListener("click", () => {
            navList.classList.remove("open");
            mobileMenuIcon.setAttribute("src", "src/imagens/menu.png");
            n.removeEventListener("click");
        });
    }

});
