//Array para almacenar los nombres de los amigos
let amigos = [];

//Función para agregar un amigo
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.ariaValueMax.trim();


    // Verificar si el nombre no está vacío
    if (nombreAmigo !== '') {
        // Agregar el nombre al array
        amigos.push(nombreAmigo);
        // Limpiar el campo de entrada
        inputAmigo.value = '';
        // Actualizar la lista de amigos
        mostrarAmigos();
    } else {
        alert('Por favor, ingresa un nombre válido.');
        return; // Salir de la función si el nombre está vacío
    }
    // Verificar si el nombre ya existe
    if (amigos.includes(nombreAmigo)) {
        alert('El amigo ya está en la lista.');
        return; // Salir de la función si el amigo ya existe
    }
}

// Función para seleccionar un amigo al azar
function seleccionarAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para seleccionar.');
        return; // Salir si no hay amigos
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];
    alert(`Tu amigo secreto es: ${amigoSeleccionado}`);
}