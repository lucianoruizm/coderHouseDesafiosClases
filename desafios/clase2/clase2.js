const objetos =  [
    {
     manzanas:3,
     peras:2,
     carne:1,
     jugos:5,
     dulces:2
    },
    {
     manzanas:1,
     sandias:1,
     huevos:6,
     jugos:1,
     panes:4
    }
]

const tipoObjetos = objetos.map(el => {
    const elArray = Object.keys(el)
    const elArrayJoin = elArray.join(',')
    return elArrayJoin
})

console.log(tipoObjetos.join(',').split(','))

const tipoObjetos2 = objetos.map(el => {
    const elArray2 = Object.keys(el)
    return elArray2
})

console.log(tipoObjetos2.flat()) //mismo resultado que el primero

const valoresObjetos = objetos.map(el => {
    const valuesArray = Object.values(el)
    const valuesArrayJoin = valuesArray.join(',')
    return valuesArrayJoin
})

const values = valoresObjetos.join(',').split(',')

const sumValues = values.reduce( (acc, curr) => {
    return parseInt(acc) + parseInt(curr)
}, 0)
console.log("Total:", sumValues);