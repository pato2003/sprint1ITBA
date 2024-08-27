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