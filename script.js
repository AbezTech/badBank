const tab = document.querySelectorAll('[data-tab-target]')
const tabcontent = document.querySelectorAll('[data-tab-content]')
const botonSubmit = document.querySelector('.botonSubmit')
let invalido = document.querySelector('.letrasrojas')
const titulo = document.querySelector('.titulocrearcuenta')

const crearNombre = document.querySelector('#crearnombre') /***/
const crearContrasena = document.querySelector('#contrase') /***/
const crearCorreo = document.querySelector('#crearcorreo')
const botonCrear = document.querySelector('.botonCrear')
const form = document.querySelector('.form')
let correoInvalido = document.querySelector('.letrasrojasdos')
const emailregistrado = document.querySelector('.emailregistrado')
const loginContrasena = document.querySelector('#contrasena')



tab.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabcontent.forEach(tabcontent => {
            tabcontent.classList.remove('active')
        })
        target.classList.add('active')
    })
})






function validacionFormu() {

    if (crearContrasena.value.length <= 6) {
        invalido.setAttribute('style', 'display:block')
        invalido.innerHTML = 'Contrasena Invalida'
    } else {
        invalido.style.color = 'green'
        invalido.style.display = 'block'
        invalido.innerHTML = 'Contrasena Valida'
    }
    if (crearCorreo.value.includes('@')) {
        correoInvalido.style.display = 'block'
        correoInvalido.style.color = 'green'
        correoInvalido.innerHTML = 'Correo Valido'
    } else {
        correoInvalido.style.display = 'block'
        correoInvalido.innerHTML = 'Correo Invalido'
        correoInvalido.style.color = 'red'
    }
    
    

}


form.addEventListener('submit', function (e) {
    e.preventDefault()
    validacionFormu()

    emailregistrado.innerHTML = crearCorreo.value
  

})

botonSubmit.addEventListener('click', function(){

    if(crearContrasena.value == loginContrasena.value){
    window.location.href = '/paginaprofile.html'
     }else{
        alert('Clave Incorrecta')
     }
})