const { Pool } = require('pg');

// Cambiar contraseña por la clave del usuario postgres
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'pioecommerceusers',
    password: '0898', 
    port: 5432,
});



// Este bloque es opcional para verificar la conexión al iniciar
pool.connect()
    .then(() => console.log('Conexión exitosa a PostgreSQL'))
    .catch(err => console.error('Error al conectar a PostgreSQL:', err.message));

module.exports = pool;
