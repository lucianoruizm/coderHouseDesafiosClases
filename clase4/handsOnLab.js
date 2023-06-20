const fs = require('fs')

class UserManager {
  constructor (path) {
    this.path = path
  }

  getUsers () {
    return fs.promises.readFile(this.path, 'utf-8')
      .then((usersString) =>{
        const users = JSON.parse(usersString)
        console.log( {users} )
        return users
      })
      .catch(err => {
        console.log('Error al leer o parsear el archivo')
        return []
      })
  }

  createUser (data) {
    const user = {
      name: data.name,
      lastname: data.lastname,
      username: data.username,
      password: data.password
    }

    return this.getUsers()
      .then(users => {
        user.id = users.length + 1
        users.push(user)

        return fs.promises.writeFile(this.path, JSON.stringify(users, null, 2))
      })
      .catch(e => {
        console.log('Error al guardar el usuario')

        return e
      })
  }

  getUserById (id) {
    return this.getUsers()
      .then(users => {
        const user = users.find(user => user.id === id)

        return user
      })
      .catch(e => {
        console.log('Error al obtener el usuario')

        return e
      })
  }

  updateUser (id, data) {
    return this.getUsers()
      .then(users => {
        const userIndex = users.findIndex(user => user.id === id)

        if (userIndex === -1) {
          return
        }

        users[userIndex].name = data.name
        users[userIndex].lastname = data.lastname
        users[userIndex].username = data.username
        users[userIndex].password = data.password

        return fs.promises.writeFile(this.path, JSON.stringify(users, null, 2))
      })
      .catch(e => {
        console.log('Error al actualizar el usuario')

        return e
      })
  }
}

const manager = new UserManager('./users.json')
const newUser = {
    name: "Jack",
    lastname: "Nicholson",
    username: "jackNic",
    password: "qwertyasd"
}
const newUser2 = {
    name: "Michael",
    lastname: "Keaton",
    username: "micKea",
    password: "qwertyasd2"
}
//manager.createUser(newUser) //SE CREA USER1
//manager.createUser(newUser2) //SE CREA USER2
// manager.getUsers()

manager
  .updateUser(2, {
    name: "Jack",
    lastname: "Nicholson",
    username: "jackNic",
    password: "qwertyasd7"
  })
  .then(() => {
    return manager.getUserById(2)
  })
  .then(user => {
    console.log(user)
  })