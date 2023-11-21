function Register() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const correo = document.getElementById("correo").value;
    const contraseña = document.getElementById("Contraseña").value;
    const sexo = document.getElementById("sexo").value;

    const usuario = {
        nombre,
        apellido,
        correo,
        contraseña,
        sexo
    };

    localStorage.setItem(correo, JSON.stringify(usuario));
    window.location.href = "Sing_In.html";
    alert("Usuario creado correctamente. Por favor, inicie sesión.");
}

function Login() {
    const Usuario_login = document.getElementById("Usuario_login").value;
    const Contraseña_login = document.getElementById("Contraseña_login").value;

    const usuarioGuardado = localStorage.getItem(Usuario_login);

    if (usuarioGuardado) {
        const usuario = JSON.parse(usuarioGuardado);

        if (usuario.contraseña === Contraseña_login) {
            window.location.href = "Principal.html";
            document.getElementById('usuarioLogueado').style.display = 'block';
            document.getElementById("nombre_usuario").innerText = usuario.nombre;
        } else {
            document.getElementById("mensajeError").innerText = "Contraseña incorrecta";
        }
    } else {
        document.getElementById("mensajeError").innerText = "Usuario no registrado";
    }
}


function SignOff() {
    window.location.href = "Index.html";
}


function Logo_1(){

}

document.getElementById("mensajeError").innerText = '';
document.getElementById("nombre_usuario").initext = usuario;
document.getElementById('nombreUsuario').innerText = usuario.nombre;