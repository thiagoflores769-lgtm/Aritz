/* =========================================================
   MENÚ RESPONSIVE
========================================================= */

const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");


// Abrir / cerrar menú

menuBtn.addEventListener("click", function () {

    nav.classList.toggle("activo");

});



/* =========================================================
   CERRAR MENÚ AL HACER CLICK EN UN ENLACE
========================================================= */

const enlacesMenu = document.querySelectorAll(".nav a");

enlacesMenu.forEach(function (enlace) {

    enlace.addEventListener("click", function () {

        nav.classList.remove("activo");

    });

});



/* =========================================================
   CERRAR MENÚ SI SE HACE CLICK AFUERA
========================================================= */

document.addEventListener("click", function (evento) {

    const hizoClickEnMenu =
        nav.contains(evento.target);

    const hizoClickEnBoton =
        menuBtn.contains(evento.target);


    if (
        !hizoClickEnMenu &&
        !hizoClickEnBoton
    ) {

        nav.classList.remove("activo");

    }

});



/* =========================================================
   CAMBIAR EL HEADER AL HACER SCROLL
========================================================= */

const header = document.querySelector(".header");


window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.classList.add("header-scroll");

    } else {

        header.classList.remove("header-scroll");

    }

});



/* =========================================================
   RESALTAR LA SECCIÓN ACTUAL EN EL MENÚ
========================================================= */

const secciones = document.querySelectorAll("main section[id]");

const enlacesNavegacion =
    document.querySelectorAll(".nav a");


function actualizarMenu() {

    let seccionActual = "";

    const posicionScroll =
        window.scrollY + 150;


    secciones.forEach(function (seccion) {

        const inicio =
            seccion.offsetTop;

        const altura =
            seccion.offsetHeight;


        if (
            posicionScroll >= inicio &&
            posicionScroll < inicio + altura
        ) {

            seccionActual =
                seccion.getAttribute("id");

        }

    });


    enlacesNavegacion.forEach(function (enlace) {

        enlace.classList.remove("activo");

        const destino =
            enlace.getAttribute("href");


        if (
            destino === "#" + seccionActual
        ) {

            enlace.classList.add("activo");

        }

    });

}


window.addEventListener(
    "scroll",
    actualizarMenu
);

actualizarMenu();



/* =========================================================
   ANIMACIÓN AL APARECER ELEMENTOS
========================================================= */

const elementosAnimados = document.querySelectorAll(
    ".card, .especialidad, .noticia, .acceso, .contacto-item"
);


const observador = new IntersectionObserver(
    function (entradas) {

        entradas.forEach(function (entrada) {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("mostrar");

                observador.unobserve(
                    entrada.target
                );

            }

        });

    },
    {
        threshold: 0.15
    }
);


elementosAnimados.forEach(function (elemento) {

    elemento.classList.add("animacion");

    observador.observe(elemento);

});



/* =========================================================
   BOTÓN "VOLVER ARRIBA"
========================================================= */

const botonArriba =
    document.createElement("button");


botonArriba.innerHTML = "↑";

botonArriba.classList.add(
    "boton-arriba"
);

botonArriba.setAttribute(
    "aria-label",
    "Volver arriba"
);


document.body.appendChild(
    botonArriba
);


window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        botonArriba.classList.add("visible");

    } else {

        botonArriba.classList.remove("visible");

    }

});


botonArriba.addEventListener(
    "click",
    function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);



/* =========================================================
   CERRAR EL MENÚ SI CAMBIA EL TAMAÑO DE PANTALLA
========================================================= */

window.addEventListener(
    "resize",
    function () {

        if (window.innerWidth > 750) {

            nav.classList.remove("activo");

        }

    }
);



/* =========================================================
   AÑO AUTOMÁTICO DEL FOOTER
========================================================= */

const añoActual =
    new Date().getFullYear();


const textoFooter =
    document.querySelector(".footer-bottom p");


if (textoFooter) {

    textoFooter.textContent =
        "© " +
        añoActual +
        " EEST N° 2 de Lanús. Todos los derechos reservados.";

}