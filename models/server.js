
const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        
        // Inicialización de propiedades de clase
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';        

        // Middlewares
        this.middlewares();

        // Rutas
        this.routes();    
    }

    middlewares() {

        // Cors
        this.app.use( cors() );

        // Lectura y parseo del body - solicitar datos del body, en este caso en formato JSON. podría ser en XML
        this.app.use( express.json() );

        // Directorio público
        this.app.use( express.static('public') ); // express.static() hace referencia a la carpeta pública 
    }

    routes() {
        this.app.use( this.usersPath, require('../routes/user') );
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log( `servidor corriendo en puerto ${ this.port }` );
        });
    }
}

module.exports = Server;