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
