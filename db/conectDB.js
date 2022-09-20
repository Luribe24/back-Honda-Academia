const mysql = require('mysql');
require('dotenv').config();

const pool = mysql.createPool({

    queueLimit:0, // <-- Valor para peticiones en cola, si es 0 es ilimitado
    connectionLimit:500, // <-- Valor para máximo de peticiones simultaneas, si se supera ( leer abajo )
    waitForConnections:true, // <-- El valor en true para que hayan peticiones en cola si queueLimit es 0 son ilimitadas y son el asyc await de JS podremos procesar cada una.

    host:process.env.DBHOST,
    user:process.env.DBUSER,
    password:process.env.DBPASSWORD,
    database:process.env.DBDATABASE,

});

module.exports= pool;

