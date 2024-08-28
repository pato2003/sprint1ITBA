var MainUser = "lea"
var MainPswr = "tuc"

document.getElementById('sesionBTN').addEventListener('click', acceder);


function acceder() {
    let user = document.getElementById('usuario').value;
    let pswr = document.getElementById('contraseña').value;

    if(user==MainUser&pswr==MainPswr)
        {
            console.log("Sesión Iniciada con exito.");
        }
        else
        {
            console.log("Credenciales Incorrectas.");
        }
   
}


// TRANSFERENCIAS


const contenidoPago = document.querySelector(".input-pago")
const contenidoPrestamo = document.querySelector(".input-prestamo")
const contenidoTransferencia = document.querySelector(".input-transferencia")

let selectAccion = document.getElementById("accion")

selectAccion.onchange = () => {
    switch (selectAccion.value) {
        case "transferencia":
            contenidoTransferencia.style.display = "block"
            contenidoPrestamo.style.display = "none"
            contenidoPago.style.display = "none"
            break;
        case "prestamo":
            contenidoTransferencia.style.display = "none"
            contenidoPrestamo.style.display = "block"
            contenidoPago.style.display = "none"
            break;
        case "pago":
            contenidoTransferencia.style.display = "none"
            contenidoPrestamo.style.display = "none"
            contenidoPago.style.display = "block"
            break;
    
        default:
            break;
    }
}
