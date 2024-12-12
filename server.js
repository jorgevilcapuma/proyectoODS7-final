// Importando librerías
var express = require('express');
var mysql = require('mysql');
var cors = require('cors');
var path = require('path');
var app = express();

// Usar librerías
app.use(express.json());
app.use(express.static(path.join(__dirname, 'static')));
app.use(cors());


/* --------------------------- MAIN --------------------------- */
const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Servidor funcionando en el puerto :" + port);
});


// Ruta para servir `index.html`
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});


/* --------------- CONEXIÓN A BD CALENDARIO --------------- */

var connectiondb = mysql.createConnection(
    {
        host: "database-1.cico3xvh1bph.us-east-1.rds.amazonaws.com",
        user: "admin",
        password: "jorgevilcapumatrujilo",
        database: "as241s2t19",

    }
);

// Probando conexión
connectiondb.connect(function (err) {
    if (err) {
        throw err;
    } else {
        console.log("Conexión a la base de datos del proyecto exitosa");
    }
}
);


// Ruta para traer los datos
app.get(
    "/api/dates/:current", (req, res) => {
        var request = req.params.current;
        connectiondb.query(
            "select NAMECAL, DESCCAL, DATE_FORMAT(DATECAL, '%d/%m/%Y') AS DATECAL from calendarieDay where DATECAL = '" + request + "'",
            function (err, row, fields) {
                if (err) {
                    throw err;
                } else if (row[0] != null) {
                    res.json(
                        row[0]
                    );
                } else {
                    res.json(null)
                }
            })
    })

// Ruta para insertar un evento en la base de datos
app.post('/insert-calendar', (req, res) => {
    const { namecal, desccal, datecal } = req.body;

    // Consulta SQL para insertar los datos
    const query = 'INSERT INTO calendarieDay (NAMECAL, DESCCAL, DATECAL) VALUES (?, ?, ?)';
    connectiondb.query(query, [namecal, desccal, datecal], (error, results) => {
        if (error) {
            console.error('Error al insertar en la base de datos: ', error);
            return res.status(500).send('Error al insertar el evento');
        }
        res.status(200).send('Evento insertado correctamente');
    });
});




/* --------------- CONEXIÓN A BD FORMULARIO DE SUGERENCIAS --------------- */

// Ruta para manejar consultas a la base de datos 
app.get('/suggestions', (req, res) => {
    connectiondb.query('SELECT ID, firstname, lastname, email, suggestion FROM suggestionBox', (error, results) => {
        if (error) {
            return res.status(500).send('Error al obtener los datos');
        }
        res.json(results);
    });
});

// Ruta para manejar inserciones en la base de datos
app.post('/suggestions', (req, res) => {
    const { firstname, lastname, email, suggestion } = req.body;
    connectiondb.query('INSERT INTO suggestionBox (firstname, lastname, email, suggestion) VALUES (?, ?, ?, ?)', [firstname, lastname, email, suggestion], (error) => {
        if (error) {
            return res.status(500).send('Error al insertar datos');
        }
        res.status(201).send('Datos insertados correctamente');
    });
});




/* --------------- CONEXIÓN A LOGIN DE USUARIOS --------------- */

// Endpoint para iniciar sesión
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const query = `SELECT role FROM users WHERE username = ? AND password = ?`;

    connectiondb.query(query, [username, password], (err, results) => {
        if (err) {
            console.error('Error en la consulta:', err);
            return res.status(500).send({ success: false, message: 'Error en el servidor.' });
        }

        if (results.length > 0) {
            res.send({ success: true, role: results[0].role });
        } else {
            res.send({ success: false, message: 'Usuario o contraseña incorrectos.' });
        }
    });
});



/* --------------- CONEXIÓN A BD CONTÁCTANOS --------------- */

// Ruta para manejar consultas a la base de datos
app.get('/contactanos', (req, res) => {
    connectiondb.query('SELECT id, names, lastname, cellphone, email, messageContact, dateContact, status FROM contacto', (error, results) => {
        if (error) {
            return res.status(500).send('Error al obtener los datos');
        }
        res.json(results);
    });
});

// Ruta para manejar inserciones en la base de datos
app.post('/contactanos', (req, res) => {
    const { names, lastname, cellphone, email, messageContact } = req.body;
    connectiondb.query('INSERT INTO contacto (names, lastname, cellphone, email, messageContact) VALUES (?, ?, ?, ?, ?)', [names, lastname, cellphone, email, messageContact], (error) => {
        if (error) {
            return res.status(500).send('Error al insertar datos');
        }
        res.status(201).send('Datos insertados correctamente');
    });
});
