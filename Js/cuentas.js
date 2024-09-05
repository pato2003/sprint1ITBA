var validado = localStorage.getItem("validado");

// Obtener referencia al contenedor
const content1 = document.getElementById('cont__boton_logout');
const content2 = document.getElementById('cont_log_cuentas');

const cont_log_cuentas = `
            <!-- Tabla de cuentas -->
            <table class="accounts-table">
                <thead>
                    <tr>
                        <th>Tipo de Cuenta</th>
                        <th>Número de Cuenta</th>
                        <th>Saldo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Cuenta Corriente</td>
                        <td>123-456789-00</td>
                        <td>$50,000</td>
                        <td><button class="details-btn" data-account="123-456789-00">Ver Detalles</button></td>
                    </tr>
                    <tr>
                        <td>Caja de Ahorro</td>
                        <td>987-654321-00</td>
                        <td>$15,300</td>
                        <td><button class="details-btn" data-account="987-654321-00">Ver Detalles</button></td>
                    </tr>
                </tbody>
            </table> 

            <!-- Movimientos recientes -->
            <div class="account-summary">
                <h3>Movimientos Recientes</h3>
                <ul>
                    <li>Depósito: $2,000 (01/09/2024)</li>
                    <li>Transferencia: -$500 (02/09/2024)</li>
                    <li>Pago de Servicios: -$1,200 (03/09/2024)</li>
                </ul>
            </div> 
        `;

// Renderizado condicional
function renderizado_cond() {
if ( validado === "true" ) {
    content1.innerHTML = `<button id="boton_logout">Cerrar sesión</button>`;
    content2.innerHTML = cont_log_cuentas;
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

//CUENTAS

document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("accountModal");
    const closeModal = document.querySelector(".close");
    const modalAccountNumber = document.getElementById("modalAccountNumber");

    // Función para abrir el modal con la información de la cuenta
    function openModal(accountNumber) {
        modalAccountNumber.textContent = "Número de Cuenta: " + accountNumber;
        modal.style.display = "block";
    }

    // Agregar evento de clic a los botones de detalles
    document.querySelectorAll(".details-btn").forEach(button => {
        button.addEventListener("click", function() {
            const accountNumber = this.getAttribute("data-account");
            openModal(accountNumber);
        });
    });

    // Cerrar el modal al hacer clic en la "X"
    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Cerrar el modal al hacer clic fuera del contenido del modal
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});