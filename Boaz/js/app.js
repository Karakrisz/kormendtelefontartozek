const tescoBtn = document.getElementById("tesco-btn")

const rakocziBtn = document.getElementById("rakoczi-btn")

const tescoMap = document.getElementById("map-tesco")

const rakocziMap = document.getElementById("map-rakoczi-ut")

rakocziMap.classList.add("map--inactive")

tescoBtn.addEventListener('click', () => {

    setTimeout(() => {

        rakocziBtn.classList.remove("map-btn-box__btn--focus")
        tescoBtn.classList.add("map-btn-box__btn--focus")
        rakocziMap.classList.add("map--inactive")
        tescoMap.classList.remove("map--inactive")

    }, 150)

})

rakocziBtn.addEventListener('click', () => {

    setTimeout(() => {

        tescoBtn.classList.remove("map-btn-box__btn--focus")
        rakocziBtn.classList.add("map-btn-box__btn--focus")
        tescoMap.classList.add("map--inactive")
        rakocziMap.classList.remove("map--inactive")

    }, 150)

})