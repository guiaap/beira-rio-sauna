window.addEventListener("scroll", () => {

    const header = document.querySelector("header");
    const logo = document.getElementById("logo");

    if(window.scrollY > 50 && window.innerWidth > 800) {
        header.style.backgroundImage = "linear-gradient(180deg, var(--marrom-escuro) 80%, var(--marrom-amadeirado))";
        logo.setAttribute("src", "src/imagens/favicon.png");
        logo.style.height = "50px";
    } else if(window.scrollY < 50 && window.innerWidth > 800) {
        header.style.backgroundImage = "none";
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

const observers = document.querySelectorAll('.fade-up, .fade-left, .fade-right, .fade-delay');

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

observers.forEach(el => observer.observe(el));

