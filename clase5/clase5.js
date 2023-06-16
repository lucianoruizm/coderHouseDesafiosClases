const objeto = {}

for (let i = 0; i <= 1000; i++) {
    const random = Math.floor(Math.random() * 20 + 1)
    if (!(random in objeto)) {
        objeto[random] = 0
    }

    objeto[random] += 1
}
console.log(objeto)