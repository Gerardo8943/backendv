const express = require('express');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');
const serviceAccount = require('./viajes-gz-73055-firebase-adminsdk-eusou-7081b14a6c.json'); // Ruta al archivo de credenciales de Firebase


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const usuarioRoutes = require('./routes/usuarioRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas para manejar las solicitudes CRUD
app.use('/api', usuarioRoutes);

app.listen(port, () => {
    console.log('Servidor corriendo en el puerto ' + port);
});