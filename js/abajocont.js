const contenedor01 = document.querySelectorAll('.abajo01')

contenedor01.forEach(function (contenedor) {

    const btn = contenedor.querySelector('.pregunta01')
    btn.addEventListener('click', function () {
        contenedor01.forEach(function (item) {
            if (item !== contenedor) {
                item.classList.remove('active')
            }
        })

        contenedor.classList.toggle('active')
    })
})

// const contenedor = document.querySelectorAll('.abajo01')

// contenedor.forEach(function (contenedor) {

//     const btn = contenedor.querySelector('.pregunta01')
//     btn.addEventListener('click', function () {
//         //de esta manera tambien se puede accederal documeto
//         document.querySelectorAll('.abajo01').forEach(function (item) {
//             if (item !== contenedor) {
//                 item.classList.remove('active')
//             }
//         })

//         contenedor.classList.toggle('active')
//     })
// })
