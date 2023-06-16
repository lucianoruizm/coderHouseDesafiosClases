const fs = require('fs')

const date = new Date()
const contenido = date.toDateString()
console.log(contenido)

const archivo = './archivo_datenow.txt'

fs.writeFile(archivo, contenido, (err) => {
  if (err !== null) {
    console.log(err)
    return err
  }

  fs.readFile(archivo, 'utf-8', (err, contenidoArchivo) => {
    if (err !== null) {
      console.log(err)
      return err
    }

    console.log({ contenidoArchivo })
  })
})