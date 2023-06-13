class ProductManager {
    constructor() {
        this.products = []
    }

    addProduct(data) {
        const codeExist = this.products.find(product => product.code === data.code)

        if(codeExist) {
            console.log("El código pertenece a otro producto");
            return
        }

        const newProduct = {
            id: this.products.length + 1,
            title: data.title,
            description: data.description,
            price: data.price,
            thumbnail: data.thumbnail,
            code: data.code,
            stock: data.stock
        }

        const productValues = Object.values(newProduct)
        const emptyValue = Object.entries(newProduct).length
        const isUndefined = productValues.includes(undefined)
        const isNull = productValues.includes(null)
        console.log(emptyValue);
        if(isUndefined || isNull) {
            console.log("Error, se deben enviar todos los campos");
            return
        }

        this.products.push(newProduct)
        console.log("Producto agregado");
    }

    getProducts() {
        return this.products
    }

    getProductById(idProduct) {
        const findProduct = this.products.find(product => product.id === idProduct)
        if(!findProduct) {
            console.log("Not found");
        }
    }
}

const producto1 = {
    title: 'Panel Calefactor',
    description: '1400w Temptech Alto Rendimiento',
    price: 50000,
    thumbnail: '/.calefactor.png',
    code: 'AS46D5',
    stock: 5
}

const producto2 = {
    title: 'Notebook',
    description: 'IdeaPad 3i Intel I5 1135g7 Ram 8gb Ssd 256gb Full hd Windows 11',
    thumbnail: '/.computadora.png',
    code: 'AS1D6',
    stock: 10
}

const producto3 = {
    title: 'Bicicleta',
    description: 'Aluminio R29 21v Frenos De Disco Mecánico Color Verde',
    price: 57000,
    thumbnail: '/.bicicleta.png',
    code: 'AS46D5',
    stock: 3
}

const producto4 = {
    title: 'Camara de Seguridad',
    description: 'Resolución de 2MP visión nocturna incluida blanca',
    price: 17000,
    thumbnail: '/.camara.png',
    code: 'A6DF8',
    stock: 4
}

const producto5 = {
    title: 'Joystick inalámbrico',
    description: 'DualSense CFI-ZCT1 white y black',
    price: 48000,
    thumbnail: '',
    code: 'SFG8S4',
    stock: 3
}

const producto6 = {
    title: 'Joystick inalámbrico',
    description: 'DualSense CFI-ZCT1 white y black',
    price: 48000,
    thumbnail: null,
    code: 'GS64D5',
    stock: 3
}

const manager = new ProductManager()

manager.addProduct(producto1)
manager.addProduct(producto2)
manager.addProduct(producto3)
manager.addProduct(producto4)
manager.addProduct(producto5)
manager.addProduct(producto6)

console.log(manager.getProducts());
manager.getProductById(1);
manager.getProductById(0);