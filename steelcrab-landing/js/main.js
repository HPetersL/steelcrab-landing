// Esperar a que todo el HTML cargue antes de ejecutar el script
document.addEventListener("DOMContentLoaded", () => {
    
    // Obtenemos los elementos que necesitamos
    const modal = document.getElementById("modalContacto");
    const btnAbrir = document.getElementById("btnAbrirModal");
    const btnCerrar = document.getElementById("btnCerrarModal");
    const formulario = document.getElementById("formularioContacto");
    const mensajeExito = document.getElementById("mensajeExito");

    // Función para abrir el modal (quita la clase 'hidden')
    btnAbrir.addEventListener("click", () => {
        modal.classList.remove("hidden");
    });

    // Función para cerrar el modal (agrega la clase 'hidden')
    btnCerrar.addEventListener("click", () => {
        modal.classList.add("hidden");
        // Limpiamos el formulario al cerrar para que quede como nuevo
        formulario.reset();
        mensajeExito.classList.add("hidden");
    });

    // Cerrar el modal si el usuario hace clic fuera de la caja (en el fondo oscuro)
    modal.addEventListener("click", (evento) => {
        if (evento.target === modal) {
            modal.classList.add("hidden");
            formulario.reset();
            mensajeExito.classList.add("hidden");
        }
    });

    // Evitar que el formulario recargue la página (comportamiento por defecto en C# o PHP)
    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault(); // Detiene la recarga de la página
        
        // Aquí iría tu código para enviar datos al servidor ASP.NET (Fetch API o AJAX)
        // Por ahora, solo simularemos que se envió mostrando el mensaje de éxito
        
        mensajeExito.classList.remove("hidden");
        
        // Opcional: Cerrar automáticamente el modal después de 3 segundos
        setTimeout(() => {
            modal.classList.add("hidden");
            formulario.reset();
            mensajeExito.classList.add("hidden");
        }, 3000);
    });
});