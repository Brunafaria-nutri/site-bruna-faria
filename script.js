// ======================================
// BRUNA FARIA
// NUTRIÇÃO ESPORTIVA E ESTÉTICA
// ======================================

// Rolagem suave dos links do menu

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if(destino){

            destino.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ======================================
// HEADER AO ROLAR A PÁGINA
// ======================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.style.background = "#ffffff";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.10)";

    }else{

        header.style.background = "#ffffff";
        header.style.boxShadow = "0 2px 20px rgba(0,0,0,.05)";

    }

});

// ======================================
// ANIMAÇÃO DAS SEÇÕES
// ======================================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(sec=>{

    observer.observe(sec);

});

// ======================================
// BOTÃO VOLTAR AO TOPO
// ======================================

const botaoTopo = document.createElement("button");

botaoTopo.innerHTML = "↑";

botaoTopo.id = "topo";

document.body.appendChild(botaoTopo);

botaoTopo.style.position = "fixed";
botaoTopo.style.right = "20px";
botaoTopo.style.bottom = "20px";
botaoTopo.style.width = "50px";
botaoTopo.style.height = "50px";
botaoTopo.style.border = "none";
botaoTopo.style.borderRadius = "50%";
botaoTopo.style.background = "#b88b7d";
botaoTopo.style.color = "#fff";
botaoTopo.style.fontSize = "22px";
botaoTopo.style.cursor = "pointer";
botaoTopo.style.display = "none";
botaoTopo.style.boxShadow = "0 10px 20px rgba(0,0,0,.20)";
botaoTopo.style.zIndex = "9999";

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 500){

        botaoTopo.style.display = "block";

    }else{

        botaoTopo.style.display = "none";

    }

});

botaoTopo.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ======================================
// BOTÃO FLUTUANTE WHATSAPP
// ======================================

const whatsapp = document.createElement("a");

whatsapp.href = "https://wa.me/55SEUNUMERO";

whatsapp.target = "_blank";

whatsapp.innerHTML = '<i class="fab fa-whatsapp"></i>';

document.body.appendChild(whatsapp);

whatsapp.style.position = "fixed";
whatsapp.style.left = "20px";
whatsapp.style.bottom = "20px";
whatsapp.style.width = "60px";
whatsapp.style.height = "60px";
whatsapp.style.borderRadius = "50%";
whatsapp.style.background = "#25D366";
whatsapp.style.display = "flex";
whatsapp.style.alignItems = "center";
whatsapp.style.justifyContent = "center";
whatsapp.style.fontSize = "30px";
whatsapp.style.color = "#fff";
whatsapp.style.textDecoration = "none";
whatsapp.style.boxShadow = "0 10px 20px rgba(0,0,0,.20)";
whatsapp.style.zIndex = "9999";

// ======================================
// FIM
// ======================================