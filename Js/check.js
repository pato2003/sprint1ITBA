let users = {
    "lean": "tuc",
    "vanpa": "123",
    "pato": "456"
};

document.getElementById('sesionBTN').addEventListener('click', acceder);

function acceder(event) {
    event.preventDefault(); // Previene la acción por defecto del botón, como recargar la página

    let user = document.getElementById('usuario').value;
    let pswr = document.getElementById('contraseña').value;
    let loginDiv = document.querySelector('.login');

    if (users[user] && pswr === users[user]) {
        // Si el usuario y la contraseña coinciden
        let h1Bienvenida = document.getElementById("bienvenida");
        loginDiv.style.display = 'none';
        // Usamos un switch para determinar el mensaje de bienvenida
        switch (user) {
            case 'lean':
                h1Bienvenida.textContent = "Bienvenido Leandro Sosa";
                
                break;
            case 'vanpa':
                h1Bienvenida.textContent = "Bienvenido Matias Van Pamelen";
                break;
            case 'pato':
                h1Bienvenida.textContent = "Bienvenido Pato Ferreyra";
                break;
            default:
                h1Bienvenida.textContent = "Usuario desconocido";
                break;
        }

        console.log("Sesión Iniciada con éxito.");
    } else {
        // Si las credenciales son incorrectas
        alert("Credenciales Incorrectas.");
    }
}

// // CONVERTIDOR INICIO


//TRANSFERENCIAS 

const contenidoPago = document.querySelector(".input-pago")
// const contenidoPrestamo = document.querySelector(".input-prestamo")
const contenidoTransferencia = document.querySelector(".input-transferencia")
const btnSubmit = document.querySelector("#enviarFormu")

let selectAccion = document.getElementById("accion")
let mensaje

selectAccion.onchange = () => {
    switch (selectAccion.value) {
        case "transferencia":
            contenidoTransferencia.style.display = "block"
            contenidoPrestamo.style.display = "none"
            contenidoPago.style.display = "none"
            break;
        // case "prestamo":
        //     contenidoTransferencia.style.display = "none"
        //     contenidoPrestamo.style.display = "block"
        //     contenidoPago.style.display = "none"
        //     break;
        case "pago":
            contenidoTransferencia.style.display = "none"
            contenidoPrestamo.style.display = "none"
            contenidoPago.style.display = "block"
            break;
    
        default:
            break;
    }
}


btnSubmit.onclick = (e) => {
    clearInputs()
    e.preventDefault()
    switch (selectAccion.value) {
        case "transferencia":
            mensaje = "Transferencia realizada. Le enviareos por correo el comprobante"
            break;
        // case "prestamo":
        //     mensaje = "Solicitud de prestamo realizada. En los proximos dias nos estaremos comunicando con usted para contirnuar con el proceso"
        //     break;
        case "pago":
            mensaje = "Pago de servicio realizado. Gracias por elegirnos!"
            break;
        default:
            break;
    }
    window.alert(mensaje)
}


function clearInputs() {
    document.getElementById("cbu").value =""
    document.getElementById("monto-transferencia").value =""
    document.getElementById("codigo-pago").value =""
    document.getElementById("monto-prestamo").value =""
    document.getElementById("plazo").value =""
}
