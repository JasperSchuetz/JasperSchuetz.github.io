const express = require("express");
const app  = express();

const server = require('http').createServer(app)
const port = process.env.PORT || 3000
const path = require('path');
const { isObject } = require("util");
const io = require('socket.io')(server)





app.use(express.static(path.join(__dirname + '/public')))
// just to test the server
io.on('connection', socket => {
    console.log('Some client connected')

    socket.on('chat', message => {
        console.log('from client', message)
        io.emit('chat', message)
    })
})


server.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})