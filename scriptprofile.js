const botoncerrar = document.querySelector('.cerrar')
const tab = document.querySelectorAll('[data-tab-target]')
const tabcontent = document.querySelectorAll('[data-tab-content]')
const botonSubmit = document.querySelector('.botonSubmit')
const balance = document.querySelector('.balancetotal')
const botonRetirar = document.querySelector('.botonRetirar')
const botonDeposito = document.querySelector('.botonDeposito')
const tituloDeposito = document.querySelector('.titulodepositar')
const cantidadDeposito = document.querySelector('#deposito')
let cantidadRetiro = document.querySelector('#retirardinero')

let tuBalance = document.querySelector('.tubalance')






botonDeposito.addEventListener('click', function () {

    let monto = cantidadDeposito.value
    balance.innerHTML = (balance.innerHTML * 1) + (monto * 1)
    tuBalance.innerHTML = balance.innerHTML
    tituloDeposito.innerHTML = ' DEPOSITO EXITOSO'

})



botonRetirar.addEventListener('click',function(){

    let balanceTotal = parseInt(tuBalance.innerHTML)
    let cantidad = cantidadRetiro.value
    let nuevoBalance = balanceTotal - cantidad
    tuBalance.innerText = nuevoBalance
    balance.innerText = nuevoBalance

})





botoncerrar.addEventListener('click', () => {

    window.location.href = '/index.html'

})


tab.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabcontent.forEach(tabcontent => {
            tabcontent.classList.remove('active')
        })
        target.classList.add('active')
    })
})

function newFunction() {
    return tuBalance.value
}

