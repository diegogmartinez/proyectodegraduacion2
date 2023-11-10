document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById("registroButton");
    loginButton.addEventListener('click', function (event) {
      event.preventDefault();
  
      // Obtener los valores de usuario y clave de los campos de entrada
      const usuario = document.querySelector('input[type="text"]').value;
      const clave = document.querySelector('input[type="password"]').value;
  
      // Construir el objeto de datos para la solicitud POST
      const data = {
        usuario: usuario,
        clave: clave,
      };
  
      // Realizar la solicitud POST al servidor
      fetch('https://localhost:7159/RegistroUsuario/Login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.text())
        .then((result) => {
          if (result === 'Existe') {
            // Redirigir al index.html
            window.location.href = 'home.html';
          } else if (result === 'No existe') {
            // Mostrar una alerta de usuario o clave incorrectos
            alert('Usuario o clave incorrectos');
          } else {
            // Manejar otros posibles resultados aquí
            console.log('Respuesta inesperada del servidor: ' + result);
          }
        })
        .catch((error) => {
          console.error('Error al realizar la solicitud:', error);
        });
    });
  });
