/* ==========================================
   BRUNA FARIA - SCRIPT
========================================== */

// Menu muda de cor ao rolar

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "#ffffff";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";

    } else {

        navbar.style.background = "#ffffff";
        navbar.style.boxShadow = "none";

    }

});

// Animação de entrada dos cards

const cards = document.querySelectorAll(".card-servico");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("mostrar");

        }

    });

},{

    threshold:0.2

});

cards.forEach(card => observer.observe(card));


// Botão voltar ao topo

const botaoTopo = document.createElement("button");

botaoTopo.innerHTML = "↑";

botaoTopo.className = "topo";

document.body.appendChild(botaoTopo);

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        botaoTopo.classList.add("ativo");

    }else{

        botaoTopo.classList.remove("ativo");

    }

});

botaoTopo.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});