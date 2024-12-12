document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        // Realizar la solicitud al servidor
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const result = await response.json();

        if (result.success) {
            // Guardar estado de sesión en sessionStorage
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('role', result.role);

            // Redirigir según el rol
            if (result.role === 'ADMIN') {
                window.location.href = '/admin/admin.html';
            } else {
                window.location.href = '/index.html';
            }
        } else {
            // Mostrar mensaje de error
            document.getElementById('errorMessage').textContent = result.message || 'Usuario o contraseña incorrectos';
            document.getElementById('errorMessage').style.display = 'block';
        }
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        document.getElementById('errorMessage').textContent = 'Error al conectar con el servidor.';
        document.getElementById('errorMessage').style.display = 'block';
    }
});
