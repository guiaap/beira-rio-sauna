window.addEventListener("scroll", () => {

    const header = document.querySelector("header");
    const logo = document.getElementById("logo");

    if(window.scrollY > 50 && window.innerWidth > 800) {
        header.style.backgroundColor = "var(--marrom-escuro)";
        logo.setAttribute("src", "src/imagens/favicon.png");
        logo.style.height = "60px";
    } else if(window.scrollY < 50 && window.innerWidth > 800) {
        header.style.backgroundColor = "transparent";
        logo.setAttribute("src", "src/imagens/logo.png");
        logo.style.height = "100px";
    }
});

const mobileMenuButton = document.getElementById("mobile-menu-button");

mobileMenuButton.addEventListener("click", () => {

    const navList = document.getElementById("nav-list");
    const mobileMenuIcon = document.getElementById("mobile-menu-icon");

    navList.classList.toggle("open");

    if(navList.classList.contains("open")) {
        mobileMenuIcon.setAttribute("src", "src/imagens/fechar.png");
        mobileMenuIcon.setAttribute("alt", "Fechar menu");
    } else {
        mobileMenuIcon.setAttribute("src", "src/imagens/menu.png");
        mobileMenuIcon.setAttribute("alt", "Abrir menu");
    }

    const navLinks = document.getElementsByClassName("nav-link");

    for(let n of navLinks) {
        n.addEventListener("click", () => {
            navList.classList.remove("open");
            mobileMenuIcon.setAttribute("src", "src/imagens/menu.png");
            mobileMenuIcon.setAttribute("alt", "Abrir menu");
            n.removeEventListener("click");
        });
    }

});


