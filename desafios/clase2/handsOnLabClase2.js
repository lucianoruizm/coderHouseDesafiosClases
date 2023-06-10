class TicketManager {
    #precioBaseDeGanancia = 0.15
    constructor () {
        this.eventos = []
    }

    getEventos() {
        return this.eventos
    }

    agregarEvento(data) {
        const nuevoEvento = {
            id: this.eventos.length + 1,
            participantes: [],
            nombre: data.nombre,
            lugar: data.lugar,
            precio: data.precio + this.#precioBaseDeGanancia,
            capacidad: data.capacidad ?? 50,
            fecha: data.fecha ? new Date(data.fecha) : new Date()  
        }

        this.eventos.push(nuevoEvento)
    }

    agregarUsuario(idEvento, idUsuario) {
        const evento = this.eventos.find(evento => evento.id === idEvento)
        
        if(!evento) {
            console.log("Error, el evento no existe")
            return
        }

        const existeParticipante = evento.participantes.findIndex(participante => participante === idUsuario)
        
        if(existeParticipante !== -1) {
            console.log("Error, el usuario ya es un participante");
            return
        }

        evento.participantes.push(idUsuario)
        console.log("El nuevo usuario ha sido registrado en el evento");
        
    }

    ponerEventoEnGira(idEvento, nuevoLugar, nuevaFecha) {
        const eventoPrevio = this.eventos.find(evento => evento.id === idEvento)
        const { lugar, fecha, id, participantes, ...rest} = eventoPrevio
        
        const nuevosCampos = {
            id: this.eventos.length + 1,
            participantes: [],
            lugar: nuevoLugar,
            fecha: nuevaFecha
        }

        const nuevoEvento = { ...rest, ...nuevosCampos}

        this.eventos.push(nuevoEvento)
    }
    
}

const manager = new TicketManager()

console.log(manager.getEventos());

const evento1 = {
    nombre: 'Evento 1',
    lugar: 'Miami',
    precio: 1.30
}

manager.agregarEvento(evento1)

console.log(manager.getEventos());

const evento2 = {
    nombre: 'Evento 2',
    lugar: 'Barcelona',
    precio: 5.40,
    capacidad: 100
}

manager.agregarEvento(evento2)

console.log(manager.getEventos());

manager.agregarUsuario(1, 1)
manager.agregarUsuario(2, 1)
manager.agregarUsuario(2, 1)
manager.agregarUsuario(2, 2)
manager.agregarUsuario(1, 3)

console.log(manager.getEventos());

manager.ponerEventoEnGira(2, 'Lima', new Date('2023-05-05'))

console.log(manager.getEventos());