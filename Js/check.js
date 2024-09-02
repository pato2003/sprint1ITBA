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

// document.addEventListener("DOMContentLoaded", function() {
//     const loanForm = document.getElementById("loanForm");
//     const loanResult = document.getElementById("loanResult");

//     loanForm.addEventListener("submit", function(event) {
//         event.preventDefault(); // Evita el envío del formulario

//         // Obtén los valores del formulario
//         const loanAmount = parseFloat(document.getElementById("loanAmount").value);
//         const interestRate = parseFloat(document.getElementById("interestRate").value) / 100;
//         const loanTerm = parseInt(document.getElementById("loanTerm").value);

//         // Cálculo del pago mensual
//         const monthlyInterestRate = interestRate / 12;
//         const numberOfPayments = loanTerm * 12;
//         const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

//         // Muestra el resultado
//         loanResult.textContent = `Pago mensual: $${monthlyPayment.toFixed(2)}`;
//         loanResult.style.color = "green";
//     });

//     const currencyForm = document.getElementById("currencyForm");
//     const currencyResult = document.getElementById("currencyResult");

//     // Tasas de cambio (para simplificación, se utilizan tasas fijas)
//     const exchangeRates = {
//         USD: { EUR: 0.85, USD: 1 },
//         EUR: { USD: 1.18, EUR: 1 }
//     };

//     currencyForm.addEventListener("submit", function(event) {
//         event.preventDefault(); // Evita el envío del formulario

//         // Obtén los valores del formulario
//         const amount = parseFloat(document.getElementById("amount").value);
//         const fromCurrency = document.getElementById("fromCurrency").value;
//         const toCurrency = document.getElementById("toCurrency").value;

//         // Conversión de moneda
//         const rate = exchangeRates[fromCurrency][toCurrency];
//         const convertedAmount = amount * rate;

//         // Muestra el resultado
//         currencyResult.textContent = `Cantidad convertida: ${convertedAmount.toFixed(2)} ${toCurrency}`;
//         currencyResult.style.color = "green";
//     });

//     // Código existente para el modal (opcional)
//     const modal = document.getElementById("accountModal");
//     const closeModal = document.querySelector(".close");
//     const modalAccountNumber = document.getElementById("modalAccountNumber");

//     function openModal(accountNumber) {
//         modalAccountNumber.textContent = "Número de Cuenta: " + accountNumber;
//         modal.style.display = "block";
//     }

//     document.querySelectorAll(".details-btn").forEach(button => {
//         button.addEventListener("click", function() {
//             const accountNumber = this.getAttribute("data-account");
//             openModal(accountNumber);
//         });
//     });

//     closeModal.addEventListener("click", function() {
//         modal.style.display = "none";
//     });

//     window.addEventListener("click", function(event) {
//         if (event.target === modal) {
//             modal.style.display = "none";
//         }
//     });
// });

// //CUENTAS

// document.addEventListener("DOMContentLoaded", function() {
//     const modal = document.getElementById("accountModal");
//     const closeModal = document.querySelector(".close");
//     const modalAccountNumber = document.getElementById("modalAccountNumber");

//     // Función para abrir el modal con la información de la cuenta
//     function openModal(accountNumber) {
//         modalAccountNumber.textContent = "Número de Cuenta: " + accountNumber;
//         modal.style.display = "block";
//     }

//     // Agregar evento de clic a los botones de detalles
//     document.querySelectorAll(".details-btn").forEach(button => {
//         button.addEventListener("click", function() {
//             const accountNumber = this.getAttribute("data-account");
//             openModal(accountNumber);
//         });
//     });

//     // Cerrar el modal al hacer clic en la "X"
//     closeModal.addEventListener("click", function() {
//         modal.style.display = "none";
//     });

//     // Cerrar el modal al hacer clic fuera del contenido del modal
//     window.addEventListener("click", function(event) {
//         if (event.target === modal) {
//             modal.style.display = "none";
//         }
//     });
// });

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
