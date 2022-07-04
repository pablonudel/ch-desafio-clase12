class Productos{
    constructor (array){
        this.array = array
    }

    add(obj){
        const newId = this.array.length === 0 ? 1 : this.array[this.array.length - 1].id + 1
        obj.id = newId
        this.array.push(obj)
    }
}

module.exports = Productos
