//Array para almacenar los nombres de los amigos
let amigos = [];

//Función para agregar un amigo
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.vaule.trim();


    // Verificar si el nombre no está vacío
    
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido.');
        return; // Salir de la función si el nombre está vacío
    }
    // Verificar si el nombre ya existe
    if (amigos.includes(nombreAmigo)) {
        alert(`El amigo ${nombreAmigo} ya está en la lista.`);
        return; // Salir de la función si el amigo ya existe
    }

    // Agregar el nombre al array de amigos
    amigos.push(nombreAmigo);

    // Limpiar el campo de entrada
    inputAmigo.value = '';

    // Actualizar la lista de HTML
    actualizarLista();
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista actual

    // Recorrer el array de amigos y agregar cada uno a la lista
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para seleccionar un amigo al azar
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para seleccionar.');
        return; // Salir si no hay amigos
    }
    // Generar un índice aleatorio y seleccionar un amigo
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    // Obtener el amigo seleccionado
    const amigoSeleccionado = amigos[indiceAleatorio];
    // Mostrar el resultado en el HTML
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo seleccionado es: <strong>${amigoSeleccionado}</strong>`;
}