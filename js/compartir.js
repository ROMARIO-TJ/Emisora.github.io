const abajo01 = document.querySelectorAll('.cont__inconos')

abajo01.forEach((pregunta) => {
    pregunta.addEventListener("click", () => {

        pregunta.classList.toggle("active")


    })

});