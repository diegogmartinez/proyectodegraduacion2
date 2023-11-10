document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const registroButton = document.getElementById("registroButton"); // Agrega el ID al botón
  
    registroButton.addEventListener("click", function (e) {
      e.preventDefault(); // Prevenir la recarga de la página al hacer clic
  
      // Obtener los valores de los campos de texto
      const usuario = document.getElementById("username").value;
      const nombre = document.getElementById("fullName").value;
      const edad = document.getElementById("phoneNumber").value;
      const correo = document.getElementById("email").value;
      const clave = document.getElementById("password").value;
  
      // Crear un objeto con los datos a enviar
      const data = {
        usuario,
        nombre,
        edad,
        correo,
        clave,
      };
  
      // Realizar la solicitud POST al endpoint
      fetch("https://localhost:7159/RegistroUsuario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.status === 200) {
            // Procesar la respuesta si es exitosa
            console.log("Registro exitoso");
            window.location.href = 'login.html';
          } else {
            // Manejar errores
            console.error("Error en el registro");
          }
        })
        .catch((error) => {
          console.error("Error de red:", error);
        });
    });
  });