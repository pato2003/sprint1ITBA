var validado = localStorage.getItem("validado");

// Obtener referencia al contenedor
const content1 = document.getElementById('cont__boton_logout');
const content2 = document.getElementById('cont_log_transferencias');

const cont_log_transferencias = `
<p class="info-form">Para realizar una transferencia o pagar con codigo, complete los siguientes datos:</p>
    <div class="form-container">
        <section class="select-op">
            <label for="accion">Seleccione el tipo de operación: </label>
            <select name="accion" id="accion">
                <option value="transferencia">Transferencia</option>
                <option value="pago">Pago</option>
            </select>
        </section>
        <form method="post" >
            <div class="input-transferencia">
                <label for="cbu">Ingrese CBU:</label>
                <input type="number" name="cbu" id="cbu" placeholder="CBU a transferir">
                <label for="monto-transferencia">Ingrese el monto:</label>
                <input type="number" name="monto-transferencia" id="monto-transferencia" placeholder="Monto a transferir">
            </div>
    
            <div class="input-pago">
                <section>
                <label for="codigo-pago">Ingrese el codigo de pago:</label>
                <input type="number" name="codigo-pago" id="codigo-pago" placeholder="Codigo de pago">
                </section>

            </div>
                <article class="buttons">
                    <input type="submit" value="Enviar" id="enviarFormu">
                    <input type="reset" value="Limpiar">
                </article>


            </form>
    </div>
`;

// Renderizado condicional
function renderizado_cond() {
if ( validado === "true" ) {
    content1.innerHTML = `<button id="boton_logout">Cerrar sesión</button>`;
    content2.innerHTML = cont_log_transferencias;
} else {
    content1.innerHTML = '<p>Sesión no iniciada.</p>';
    content2.innerHTML = '<h4 class="recordatorio">Le recordamos que si desea acceder a todas las funcionalidades debe iniciar sesión en la sección "Inicio".</h4>';
}
}

renderizado_cond();

//ATENCIÓN A BOTÓN DE CIERRE DE SESIÓN
function logout() {
    localStorage.removeItem("validado"); // Eliminar la clave del sessionStorage
    localStorage.setItem("validado", "false");
    validado = localStorage.getItem("validado");
    renderizado_cond();
    alert('Has cerrado sesión.');
}

document.getElementById('boton_logout').addEventListener('click', logout);

//TRANSFERENCIAS 

const contenidoPago = document.querySelector(".input-pago")
const contenidoTransferencia = document.querySelector(".input-transferencia")
const btnSubmit = document.querySelector("#enviarFormu")

let selectAccion = document.getElementById("accion")
let mensaje

selectAccion.onchange = () => {
    switch (selectAccion.value) {
        case "transferencia":
            contenidoTransferencia.style.display = "block"
            contenidoPago.style.display = "none"
            break;
        case "pago":
            contenidoTransferencia.style.display = "none"
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
            mensaje = "Transferencia realizada. Le enviaremos por correo el comprobante"
            break;
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
}
