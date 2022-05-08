const conn = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBNAME
});

conn.connect((err) => {
    if (err) throw err;
    console.log('conexion establecida con BD');
});

module.exports = conn;