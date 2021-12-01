const express = require('express');
const cors = require('cors');

const { socketController } = require('../sockets/controller');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);

        this.paths = {}

        //conectar a base de datos

        //Middlewares
        this.middlewares();
        //Rutas de mi aplicacion
        this.routes();
        //sockets
        this.sockets();
    }

    async conectarDB() {
        await dbConection();
    }

    middlewares() {
        //CORS
        this.app.use(cors());
        //Lectura y parse del body

        //Directorio publico
        this.app.use(express.static('public'));
        //fileupload - carga de archivos

    }

    routes() {

    }

    sockets() {
        this.io.on('connection', socketController);
    }

    lister() {
        this.server.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}

module.exports = Server;