class Persona {
    constructor (name) {
        this.name = name
    }
}

const persona1 = new Persona("Kratos")
console.log(persona1);

class Contador {
    constructor (nombre) {
        this.nombre = nombre
        this.contador = 0
    }

    static contadorGlobal = 0

    getResponsable () {
        return `El responsable es:${this.nombre}`
    } 

    contar () {
        this.contador = this.contador + 1
        Contador.contadorGlobal = Contador.contadorGlobal + 1
    }

    getCuentaIndividual () {
        return this.contador
    }

    getCuentaGlobal () {
        return Contador.contadorGlobal
    }
}

const responsable1 = new Contador("Kratos")
const responsable2 = new Contador("Zeus")
const responsable3 = new Contador("Thor")

console.log(responsable1.getResponsable());

responsable3.contar()
responsable1.contar()
responsable1.contar()
responsable2.contar()
responsable1.contar()

console.log(`cuenta individual de ${responsable1.nombre} es: ${responsable1.getCuentaIndividual()}`);
console.log(`cuenta individual de ${responsable2.nombre} es: ${responsable2.getCuentaIndividual()}`);
console.log(`cuenta individual de ${responsable3.nombre} es: ${responsable3.getCuentaIndividual()}`);

console.log(`cuenta global es: ${responsable1.getCuentaGlobal()}`);