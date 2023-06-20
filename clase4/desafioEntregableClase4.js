const fs = require('fs')

let fileExists = fs.existsSync('./product.json');

class ProductManager {
    constructor(path) {
        this.path = path
    }

    getProducts () {
        return fs.promises.readFile(this.path, 'utf-8')
          .then((productString) =>{
            const products = JSON.parse(productString)
            console.log(products)
            return products
          })
          .catch(err => {
            console.log('Error al leer o parsear el archivo')
            return []
          })
    }
    
    addProduct(data) {
        if (!data.title 
            || !data.description
            || !data.price
            || !data.thumbnail
            || !data.code
            || !data.stock) {
              console.log("Error: Campos incorrectos")
              return
        }

        this.getProducts()
            .then(products => {
              const codeExist = products.findIndex(product => product.code === data.code)
              
              if(codeExist) {
                  console.log("El código pertenece a otro producto");
                  return
              }

              const product = {
                title: data.title,
                description: data.description,
                price: data.price,
                thumbnail: data.thumbnail,
                code: data.code,
                stock: data.stock
              }
            
              return this.getProducts()
                  .then(products => {
                    product.id = products.length + 1
                    products.push(product)
                  
                    return fs.promises.writeFile(this.path, JSON.stringify(products, null, 2))
                  })
                  .catch(e => {
                    console.log('Error al guardar el producto')
                  
                    return e
                  })

            })
            .catch(e => {
              console.log('Error al guardar el producto')
            
              return e
            })

    }

    getProductById(id) {
        return this.getProducts()
            .then(products => {
              const product = products.find(product => product.id === id)
            
              return product
            })
            .catch(e => {
              console.log('Not Found')
            
              return e
            })
    }

    updateProducts (id, data) {
        return this.getProducts()
          .then(products => {
            const productIndex = users.findIndex(product => product.id === id)
    
            if (productIndex === -1) {
              return
            }
    
            products[productIndex].title = data.title
            products[productIndex].description = data.description
            products[productIndex].price = data.price
            products[productIndex].thumbnail = data.thumbnail
            products[productIndex].code = data.code
            products[productIndex].stock = data.stock
    
            return fs.promises.writeFile(this.path, JSON.stringify(products, null, 2))
          })
          .catch(e => {
            console.log('Error al actualizar el producto')
    
            return e
          })
      }
}

const body = {
    title: 'Panel Calefactor',
    description: '1400w Temptech Alto Rendimiento',
    price: 50000,
    thumbnail: '/.calefactor.png',
    code: 'AS46D5',
    stock: 5
}

const body2 = {
    title: 'Notebook',
    description: 'IdeaPad 3i Intel I5 1135g7 Ram 8gb Ssd 256gb Full hd Windows 11',
    thumbnail: '/.computadora.png',
    code: 'AS1D6',
    stock: 10
}

const body3 = {
    title: 'Bicicleta',
    description: 'Aluminio R29 21v Frenos De Disco Mecánico Color Verde',
    price: 57000,
    thumbnail: '/.bicicleta.png',
    code: 'AS46D5',
    stock: 3
}

const body4 = {
    title: 'Camara de Seguridad',
    description: 'Resolución de 2MP visión nocturna incluida blanca',
    price: 17000,
    thumbnail: '/.camara.png',
    code: 'A6DF8',
    stock: 4
}

const manager = new ProductManager('./product.json')
manager.addProduct(body3)