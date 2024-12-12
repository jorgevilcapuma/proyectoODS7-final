document.getElementById('civicdateForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const namecal = document.getElementById('namecal').value;
    const desccal = document.getElementById('desccal').value;
    const datecal = document.getElementById('datecal').value;

    const formData = {
        namecal: namecal,
        desccal: desccal,
        datecal: datecal
    };
    // Enviar datos
    const response = await fetch('/insert-calendar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    // Respuesta
    if (response.ok) {
        alert('Fecha ingresada exitosamente');
        document.getElementById('civicdateForm').reset();
    } else {
        alert('Error al crear el evento (Puede ya haber uno, fíjese en el inicio.)');
    }
});
