var validado = localStorage.getItem("validado");

// Obtener referencia al contenedor
const content1 = document.getElementById('cont__boton_logout');
const content2 = document.getElementById('cont_log_prestamos');

const cont_log_prestamos = `
<h3>Para conocer el valor de los pagos mensuales que debe realizar, ingrese los siguientes datos:</h3>
    <p class="info-form">Se considerará una tasa mensual del 2%.</p>
    <div class="form-container">
   <form id="form_prest" class="form-container>
            <label class="label-prestamo" for="monto">Ingrese el monto en pesos del préstamo que desea realizar:</label>
            <input type="number" id="monto" name="monto" placeholder="Monto del préstamo" required>

            <label class="label-prestamo" for="periodo">Ingrese el periodo de tiempo en meses en el cual abonará el préstamo:</label>
            <input type="number" id="periodo" name="periodo" placeholder="Periodo" required>

            <button type="submit">Calcular</button>

            <label class="label-prestamo" for="resultado">Valor calculado de los pagos mensuales a realizar:</label>
            <input type="number" id="resultado" name="resultado" disabled>

            <label class="label-prestamo" for="acumulado">Valor total acumulado en el periodo indicado:</label>
            <input type="number" id="acumulado" name="acumulado" disabled>
            </form>
        </div>
    `;

// Renderizado condicional
function renderizado_cond() {
    if (validado === "true") {
        content1.innerHTML = `<button id="boton_logout">Cerrar sesión</button>`;
        content2.innerHTML = cont_log_prestamos;
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

//ATENCIÓN A FORMULARIOS

document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('form_prest');
    const resultado_form = document.getElementById('resultado');
    const acumulado_form = document.getElementById('acumulado');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const monto = document.getElementById('monto').value;
        const periodo = document.getElementById('periodo').value;
        const tasa = 0.02;

        const numerador = tasa * monto;
        const denominador = 1 - ((1 + tasa) ** (-periodo));

        const resul = numerador / denominador;
        const resultado = resul.toFixed(2);

        const acum = resultado * periodo;
        const acumulado = acum.toFixed(2);

        resultado_form.value = resultado;
        acumulado_form.value = acumulado;
    });
});
