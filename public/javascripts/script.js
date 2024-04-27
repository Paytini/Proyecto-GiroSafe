document.addEventListener('DOMContentLoaded', function () {
    // Encuentra el formulario de inicio de sesión por su ID
    const loginForm = document.querySelector('.u-form-1');

    // Agrega un evento de escucha para cuando se envía el formulario
    loginForm.addEventListener('submit', function (event) {
        // Evita que el formulario se envíe de forma predeterminada
        event.preventDefault();

        // Obtiene los valores de los campos de correo electrónico y contraseña
        const email = document.getElementById('name-ef64').value;
        const password = document.getElementById('email-ef64').value;

        // Realiza cualquier procesamiento adicional aquí, como validar la entrada o enviarla a un servidor
        // Por ahora, solo imprimimos los valores en la consola para fines de demostración
        console.log('Correo electrónico:', email);
        console.log('Contraseña:', password);

        // Puedes agregar aquí la lógica para enviar los datos del formulario a un servidor
        // por ejemplo, usando fetch o XMLHttpRequest
    });
});
