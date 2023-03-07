

function MessageError() {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Parece que te dejaste un espacio en blanco',
    })
};

function MessageSuccessfull() {
    Swal.fire({
        icon: 'success',
        title: 'Enviado exitosamente'
    })
}