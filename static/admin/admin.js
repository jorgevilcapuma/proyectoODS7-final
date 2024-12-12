// Verificar si el usuario está logueado y tiene el rol de ADMIN
document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    const role = sessionStorage.getItem('role');

    if (!isLoggedIn || role !== 'ADMIN') {
        alert('No tienes permiso para acceder a esta página.');
        window.location.href = '/login.html';
    }
});


document.getElementById('logoutBtn').addEventListener('click', () => {
    // Eliminar los datos de la sesión
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('role');

    // Redirigir al usuario a la página de login
    window.location.href = '/login.html';

    document.addEventListener('DOMContentLoaded', () => {
        // Verificar si el usuario está logueado
        const isLoggedIn = sessionStorage.getItem('isLoggedIn');

        if (!isLoggedIn) {
            // Redirigir a la página de login si no está logueado
            window.location.href = '/login.html';
        }
    });
});
