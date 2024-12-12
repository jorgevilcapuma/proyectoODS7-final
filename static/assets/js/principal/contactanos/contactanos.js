// Lista de mensajes que irán rotando en el cuadro de diálogo
const messages = [
    "Recuerda que para saber más, ve a la sección de Noticias.",
    "Recuerda buscar usar energias renovables.",
    "¿Sabías que en Perú la huella de carbono ha disminuido un X%?"
];

// Lista de imágenes correspondientes a los mensajes (solo 2 imágenes)
const images = [
    "/images/contactanos/personaje1.png",
    "/images/contactanos/personaje2.png",
    "/images/contactanos/personaje3.png",
];

// Elementos donde se mostrarán el texto y la imagen
let dialogueText = document.getElementById('dialogue-text');
let characterImage = document.getElementById('character-image');

// Índice para controlar qué mensaje e imagen se muestran
let messageIndex = 0;

// Función para cambiar el mensaje y la imagen
function changeMessageAndImage() {
    // Cambiar el mensaje
    dialogueText.innerHTML = messages[messageIndex];

    // Cambiar la imagen (alternar entre las 2 imágenes)
    let imageIndex = messageIndex % images.length;
    characterImage.src = images[imageIndex]; // Rotar las dos imágenes

    // Avanzar al siguiente mensaje
    messageIndex = (messageIndex + 1) % messages.length; // Rotar los mensajes
}

// Cambiar mensaje e imagen inmediatamente al cargar
changeMessageAndImage();

// Cambiar el mensaje y la imagen cada 5 segundos (5000 ms)
setInterval(changeMessageAndImage, 5000);


/* INSERCIÓN Y VALIDACIONES */
// Insertar datos
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactanosForm');
    const cellphoneInput = document.getElementById('cellphone'); // Declarar correctamente el elemento
    
    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Evitar el envío del formulario

        clearErrors();
        let isValid = true;

        const names = document.getElementById('names').value.trim();
        const lastname = document.getElementById('lastname').value.trim();
        const cellphone = cellphoneInput.value.trim(); // Usar el valor del input correctamente
        const email = document.getElementById('email').value.trim();
        const messageContact = document.getElementById('messageContact').value.trim();

        if (!names || !/^[A-Za-záéíóúÁÉÍÓÚüÜñÑ ]+$/.test(names)) {
            isValid = false;
            displayError('namesError', 'El nombre solo debe contener letras y espacios.');
        }

        if (!lastname || !/^[A-Za-záéíóúÁÉÍÓÚüÜñÑ ]+$/.test(lastname)) {
            isValid = false;
            displayError('lastnameError', 'El apellido solo debe contener letras y espacios.');
        }

        if (!/^[9][0-9]{8}$/.test(cellphone)) {
            isValid = false;
            displayError('cellphoneError', 'El teléfono debe contener 9 dígitos y comenzar con 9.');
        }

        if (!email || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            isValid = false;
            displayError('emailError', 'El correo debe ser válido, con un punto después del "@" y un dominio.');
        }

        if (!messageContact || messageContact.length > 500) {
            isValid = false;
            displayError('messageContactError', 'El mensaje es obligatorio y no debe exceder los 500 caracteres.');
        }

        if (isValid) {
            try {
                const response = await fetch('/contactanos', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ names, lastname, cellphone, email, messageContact }),
                });

                if (response.ok) {
                    alert('Mensaje enviado correctamente');
                    form.reset();
                } else {
                    alert('Error al enviar el mensaje');
                }
            } catch (error) {
                console.error('Error de conexión:', error);
            }
        } else {
            alert('Por favor, completa correctamente todos los campos.');
        }
    });

    // Validación en tiempo real para teléfono
    cellphoneInput.addEventListener('input', () => {
        // Permitir solo números y limitar a 9 caracteres
        cellphoneInput.value = cellphoneInput.value.replace(/[^0-9]/g, '').slice(0, 9);
        clearError('cellphoneError');
    });

    document.getElementById('names').addEventListener('input', () => {
        clearError('namesError');
    });

    document.getElementById('lastname').addEventListener('input', () => {
        clearError('lastnameError');
    });

    document.getElementById('email').addEventListener('input', () => {
        clearError('emailError');
    });

    document.getElementById('messageContact').addEventListener('input', () => {
        clearError('messageContactError');
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
