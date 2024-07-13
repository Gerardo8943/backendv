// usuarioController.js

const admin = require('firebase-admin');
const db = admin.firestore();

// Función para crear un usuario
async function crearUsuario(req, res) {
    try {
        const userData = req.body;

     
        await db.collection('usuarios').add(userData);

        res.status(201).json({ message: 'Usuario creado correctamente' });
    } catch (error) {
        console.error('Error al crear usuario:', error);
        res.status(500).json({ error: 'Hubo un error al procesar la solicitud' });
    }
}

// Función para actualizar un usuario
async function actualizarUsuario(req, res) {
    try {
        const cedula = req.params.cedula;
        const updatedData = req.body;

        // Actualizar el documento en Firestore
        const userRef = db.collection('usuarios').doc(cedula);
        await userRef.update(updatedData);

        res.status(200).json({ message: 'Usuario actualizado correctamente' });
    } catch (error) {
        console.error('Error al actualizar usuario:', error);
        res.status(500).json({ error: 'Hubo un error al procesar la solicitud' });
    }
}

// Función para eliminar un usuario
async function eliminarUsuario(req, res) {
    try {
        const cedula = req.params.cedula;

        // Eliminar el documento en Firestore
        await db.collection('usuarios').doc(cedula).delete();

        res.status(200).json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar usuario:', error);
        res.status(500).json({ error: 'Hubo un error al procesar la solicitud' });
    }
}

module.exports = {
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
};