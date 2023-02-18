const abajo = document.querySelectorAll('.navegacion')

abajo.forEach((pregunta) => {
    pregunta.addEventListener("click", () => {

        pregunta.classList.toggle("active")


    })

});