const formRegistro = document.getElementById('formRegistro');
const email = document.querySelector('#email');
const nombreCuenta = document.querySelector('#usuario');
const password = document.querySelector('#password');
const crearUser = document.querySelector('#crearUser')
//registro de usuarios
class Usuario {
    constructor(email, usuario, password) {
        this.email = email;
        this.nombreCuenta = usuario; 
        this.password = password;
    }
}

const usuariosArray = JSON.parse(localStorage.getItem("usuarios")) || [];

function guardarUsuarios(nuevoUsuario) {
    usuariosArray.push(nuevoUsuario);
}

function guardarEnLS(arr) {
    localStorage.setItem("usuarios", JSON.stringify(arr));
}

formRegistro.addEventListener('submit', (e) => {
    e.preventDefault();
    const nuevoUsuario = new Usuario(email.value, nombreCuenta.value, password.value);
    guardarUsuarios(nuevoUsuario);
    guardarEnLS(usuariosArray);
    window.location.href = "/html/index.html";
});
