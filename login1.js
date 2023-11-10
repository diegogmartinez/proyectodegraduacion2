document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Leer datos del formulario
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;

    // Mostrar en consola el email y contraseña
    console.log('Correo:', email);
    console.log('Contraseña:', password);

    // Intenta leer usuarios del localStorage
    const usersString = localStorage.getItem('users');
    const users = usersString ? JSON.parse(usersString) : [];

    // Verificar si el usuario ya está registrado
    const user = users.find(u => u.email === email);

    if (user) {
        // Verificar contraseña
        if (user.password === password) {
            alert('Inicio de sesión exitoso');
            window.location.href = 'index.html'; // Redireccionar al index.html
        } else {
            alert('Contraseña incorrecta');
        }
    } else {
        // Registrar nuevo usuario
        users.push({ email, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Usuario registrado exitosamente');
        window.location.assign('index.html');    }
});
