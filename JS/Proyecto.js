function Register() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const correo = document.getElementById("correo").value;
    const name_usu = document.getElementById("Usuario").value;
    const contraseña = document.getElementById("Contraseña").value;
    const sexo = document.getElementById("sexo").value;

    const usuario = {
        nombre,
        apellido,
        correo,
        name_usu,
        contraseña,
        sexo
    };

    localStorage.setItem(name_usu, JSON.stringify(usuario));

    alert("Usuario creado correctamente. Por favor, inicie sesión.");
}

function Login() {
    const Usuario_login = document.getElementById("Usuario_login").value;
    const Contraseña_login = document.getElementById("Contraseña_login").value;

    const usuarioGuardado = localStorage.getItem(Usuario_login);

    if (usuarioGuardado) {
        const usuario = JSON.parse(usuarioGuardado);

        if (usuario.contraseña === Contraseña_login) {
            document.getElementById("mensajeError").innerText = '';
            document.getElementById("nombre_usuario").initext = usuario;
            document.getElementById('nombreUsuario').innerText = usuario.nombre;
            location.href = "Principal.html";
        } else {
            document.getElementById("mensajeError").innerText = "Contraseña incorrecta";
        }
    } else {
        document.getElementById("mensajeError").innerText = "Usuario no registrado";
    }
}
function Logo_1(){

}