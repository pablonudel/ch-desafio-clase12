class Mensajes{
    constructor (array){
        this.array = array
    }

    add(obj){
        const newId = this.array.length === 0 ? 1 : this.array[this.array.length - 1].id + 1
        const date = new Date()
        const msgDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`
        obj.id = newId
        obj.date = msgDate
        this.array.push(obj)
    }
}

module.exports = Mensajes