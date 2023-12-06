// Calcular costo total de productos seleccionados por el usuario.

const productos = () => {
    let total = 0;

    while (true) {
        let entrada = prompt("Ingrese el valor de su producto (o 'fin' para terminar):");

        // Verificar si el usuario desea terminar el proceso
        if (entrada.toLowerCase() === 'fin') {
            break; // Salir del bucle si se ingresa 'fin'
        }

        // Convertir la entrada a número y sumarla al total
        let valor = Number(entrada);
        if (valor) {
            total += valor;
        } else {
            alert("Por favor, ingrese un valor numérico válido.");
        }
    }

    alert(`La suma total de sus productos es de: ${total} Pesos Argentinos.`);
    return total;
}

// Llamar a la función
productos();




