
  const formLogin = document.querySelector('#login');
  const loginUsuario = document.querySelector('#usuario');
  const loginPassword = document.querySelector('#password');
  const usuariosArray = JSON.parse(localStorage.getItem("usuarios")) || [];
  const crearCuenta =document.querySelector('#registrar')
  let registroClick = false;
  //login
  formLogin.addEventListener('submit', (e) => {
      e.preventDefault();
      const usuarioIngresado = loginUsuario.value;
      const passwordIngresado = loginPassword.value;
      const usuarioEncontrado = usuariosArray.find(usuario => usuario.nombreCuenta === usuarioIngresado);
      if (usuarioEncontrado && usuarioEncontrado.password === passwordIngresado) {
          alert('Bienvenido '+ usuarioIngresado);
          window.location.href= "/html/inicio.html"
      } else {
        if (!registroClick) {
            alert('Usuario o contraseña no válido/s. Por favor, inténtelo de nuevo.');
        } else {
            registroClick = false; 
        }
    }
});
  crearCuenta.addEventListener('click', () => {
    registroClick = true; 
    window.location.href = "/html/registro.html";
});

