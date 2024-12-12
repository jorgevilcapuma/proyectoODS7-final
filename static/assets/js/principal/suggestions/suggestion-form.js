// Insertar datos
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('suggestionForm');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Evitar el envío del formulario

        clearErrors();
        let isValid = true;
        const firstname = document.getElementById('firstname').value.trim();
        const lastname = document.getElementById('lastname').value.trim();
        const email = document.getElementById('email').value.trim();
        const suggestion = document.getElementById('suggestion').value.trim();

        if (!firstname || !/^[A-Za-záéíóúÁÉÍÓÚüÜñÑ ]+$/.test(firstname)) {
            isValid = false;
            displayError('firstnameError', 'El nombre solo debe contener letras y espacios.');
        }

        if (!lastname || !/^[A-Za-záéíóúÁÉÍÓÚüÜñÑ ]+$/.test(lastname)) {
            isValid = false;
            displayError('lastnameError', 'El apellido solo debe contener letras y espacios.');
        }

        if (!email || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            isValid = false;
            displayError('emailError', 'El correo debe ser válido, con un punto después del "@" y un dominio.');
        }

        if (!suggestion || suggestion.length > 200) {
            isValid = false;
            displayError('suggestionError', 'La sugerencia es obligatoria y no debe exceder los 200 caracteres.');
        }

        // Solo enviamos el formulario si todo es válido
        if (isValid) {
            try {
                const response = await fetch('/suggestions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ firstname, lastname, email, suggestion }),
                });

                if (response.ok) {
                    alert('Sugerencia enviada correctamente');
                    form.reset();
                    loadSuggestions();
                } else {
                    alert('Error al enviar la sugerencia');
                }
            } catch (error) {
                console.error('Error de conexión:', error);
            }
        } else {
            alert('Por favor, completa correctamente todos los campos.');
        }
    });

    // Validación en tiempo real (mientras el usuario escribe)
    document.getElementById('firstname').addEventListener('input', () => {
        clearError('firstnameError');
    });

    document.getElementById('lastname').addEventListener('input', () => {
        clearError('lastnameError');
    });

    document.getElementById('email').addEventListener('input', () => {
        clearError('emailError');
    });

    document.getElementById('suggestion').addEventListener('input', () => {
        clearError('suggestionError');
    });
});

// Función para mostrar mensajes de error
function displayError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
}

// Función para limpiar un solo mensaje de error
function clearError(elementId) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = '';
    }
}

// Función para limpiar todos los mensajes de error
function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach((element) => {
        element.textContent = '';
    });
}
