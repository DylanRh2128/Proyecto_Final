function Register() {
    const nombre = document.getElementById("Usuario").value;
    const apellido = document.getElementById("Contraseña").value;
    const sexo = document.getElementById("sexo").value;

    const usuario = {
        nombre,
        sexo,
        contrasena
    };
    localStorage.setItem(correo, JSON.stringify(usuario));

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

            location.href="../Principal.html";
            document.getElementById("nombreUsuario").innerText = usuario.nombre;

            document.getElementById("app").style.display = 'none';
        } else {
            document.getElementById("mensajeError").innerText = "Contraseña incorrecta";
        }
    } else {
        document.getElementById("mensajeError").innerText = "Usuario no registrado";
    }
}