//boton hacia arriba
document.getElementById("boton_up").addEventListener("click", scrollUp);

function scrollUp() {
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > 0) {
        window.requestAnimationFrame(scrollUp);
        window.scrollTo(0, currentScroll - (currentScroll / 2));
    }

}

botonUp = document.getElementById("boton_up");

window.onscroll = function () {

    var scroll = document.documentElement.scrollTop;

    if (scroll > 400) {
        botonUp.style.transform = "scale(1)";
    } else if (scroll < 400) {
        botonUp.style.transform = "scale(0)";
    }

}