const express = require('express')
const {Server: HttpServer} = require('http')
const {Server: IOServer} = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer) 

const Productos = require('./public/js/bin/productos.js')
const Mensajes = require('./public/js/bin/mensajes.js')

app.set('view engine', 'ejs')
app.use(express.static('./public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

io.on('connection', socket => {
    console.log('Usuario conectado')
    socket.emit('productos', products)
    socket.on('nuevo producto', data =>{
        productos.add(data)
        io.sockets.emit('productos', products)
    })
    socket.emit('mensajes', messages)
    socket.on('nuevo mensaje', data =>{
        mensajes.add(data)
        io.sockets.emit('mensajes', messages)
    })
})

/*----*/

let products = [
    {id:1, name: 'Adobe Illustrador', price: 1000, thumbnail:'https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_adobe_illustrator-64.png'},
    {id:2, name: 'Adobe Photoshop', price: 2000, thumbnail:'https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_adobe_photoshop-64.png'},
    {id:3, name: 'Adobe Indesign', price: 800, thumbnail:'https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_indesign_adobe-64.png'}
]

let messages = [
    
]

const productos = new Productos(products)
const mensajes = new Mensajes(messages)


app.get('/', (req,res)=>{
    res.render('pages/index')
})


const PORT = 8080
const server = httpServer.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto http://localhost:${PORT}`);
})
server.on('error', error => console.log(`Error en el servidor ${error}`))