var validado = localStorage.getItem("validado");

// Obtener referencia al contenedor
const content1 = document.getElementById('cont__boton_logout');
const content2 = document.getElementById('cont_log_index');

const cont_log_index = `
        <div class="login">
            <h3>Iniciar Sesión </h3>
            <form>
                <input type="text" id="usuario" name="usuario" placeholder="Usuario" required>
                <input type="password" id="contraseña" name="contraseña" placeholder="Contraseña" required>
                <button type="submit" id="sesionBTN">Iniciar Sesión</button>
            </form>
        </div>
        `;

// Renderizado condicional
function renderizado_cond() {
    validado = localStorage.getItem("validado");
    if ( validado === "true" ) {
        content1.innerHTML = `<button id="boton_logout">Cerrar sesión</button>`;
        content2.innerHTML = ``;
    } else {
        content1.innerHTML = '<p>Sesión no iniciada.</p>';
        content2.innerHTML = cont_log_index;
    }
}

renderizado_cond();

//INDEX (ex check.js)

let users = {
    "ITPOWERBANK": "2024"
};

function acceder(event) {
    event.preventDefault(); // Previene la acción por defecto del botón, como recargar la página

    let user = document.getElementById('usuario').value;
    let pswr = document.getElementById('contraseña').value;
    let loginDiv = document.querySelector('.login');

    if (users[user] && pswr === users[user]) {
        // Si el usuario y la contraseña coinciden

        let h1Bienvenida = document.getElementById("bienvenida");
        loginDiv.style.display = 'none';

        h1Bienvenida.textContent = `¡Bienvenido, ${user}!`;

        localStorage.setItem("validado", "true");
        renderizado_cond();

    } else {
        // Si las credenciales son incorrectas
        localStorage.setItem("validado", "false");
        alert("Credenciales Incorrectas.");
        renderizado_cond();
    }
}

//ATENCIÓN A BOTÓN DE CIERRE DE SESIÓN
function logout() {
    localStorage.removeItem("validado"); // Eliminar la clave del sessionStorage
    localStorage.setItem("validado", "false");
    renderizado_cond();
    alert('Has cerrado sesión.');
}

// Atención a los eventos de los botones según el estado de la sesión
if ( validado === "true" ) {
    document.getElementById('boton_logout').addEventListener('click', logout);
} else {
    document.getElementById('sesionBTN').addEventListener('click', acceder);
}





