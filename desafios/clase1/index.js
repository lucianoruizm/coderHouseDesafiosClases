const listaCaso1 = []
const listaCaso2 = [1, true, 'string']

const mostrarLista = (array) => {
    if (array.length === 0) {
        console.log("Lista vacía");
    } else {
        for (let i = 0; i < array.length; i++) {
            console.log(`elemento ${i}: ${array[i]}`);
        }
    }
}

mostrarLista(listaCaso1)
mostrarLista(listaCaso2)

// Salida:
//    Lista vacía
//    elemento 0: 1
//    elemento 1: true
//    elemento 2: string