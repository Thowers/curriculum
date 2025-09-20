document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", (e) => {
        let valid = true;
        let messages = [];

        // Nombre (mínimo 3 caracteres)
        const nombre = form.querySelector("#id_nombre");
        if (nombre.value.trim().length < 3) {
            valid = false;
            messages.push("El nombre debe tener al menos 3 caracteres.");
        }

        // Email (regex simple)
        const email = form.querySelector("#id_email");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            valid = false;
            messages.push("Ingrese un correo válido.");
        }

        // Teléfono (opcional, pero solo números y + - )
        const telefono = form.querySelector("#id_telefono");
        if (telefono.value.trim() !== "" && !/^[0-9+\- ]{7,20}$/.test(telefono.value.trim())) {
            valid = false;
            messages.push("El teléfono solo puede contener números, + o - (7 a 20 dígitos).");
        }

        // Asunto (mínimo 5 caracteres)
        const asunto = form.querySelector("#id_asunto");
        if (asunto.value.trim().length < 5) {
            valid = false;
            messages.push("El asunto debe tener al menos 5 caracteres.");
        }

        // Mensaje (mínimo 10 caracteres)
        const mensaje = form.querySelector("#id_mensaje");
        if (mensaje.value.trim().length < 10) {
            valid = false;
            messages.push("El mensaje debe tener al menos 10 caracteres.");
        }

        // Si hay errores, cancela envío
        if (!valid) {
            e.preventDefault();
            alert(messages.join("\n"));
        }
    });
});