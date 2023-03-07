'use strict';

let welcome = document.getElementById('welcome')
let hello = document.getElementById('hello');

let btnInscribirme = document.getElementById('botonInsc');

btnInscribirme.addEventListener('click', validar);

function validar() {
    let inputName = document.getElementById('InputName').value;
    let inputApellido = document.getElementById('inputApellido').value;
    let inputTel = document.getElementById('inputTel').value;
    let inputEmail = document.getElementById('inputEmail').value;


    if (inputName == '' || inputName == undefined || inputName == null) {
        MessageError();
        return false
    }
    if (inputApellido == '' || inputApellido == undefined || inputApellido == null) {
        MessageError();
        return false
    }
    if (inputTel == '' || inputTel == undefined || inputTel == null || isNaN(inputTel)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Número de teléfono no válido',
        })
        return false
    }
    if (inputEmail == '' || inputEmail == undefined || inputEmail == null) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Email invalido o en blanco',
        })
        return false
    } else {
        hello.classList.remove('shown')
        hello.classList.add('hidden')
        welcome.classList.remove('hidden');
        welcome.classList.add('shown')
        MessageSuccessfull()
        return true
    }

}