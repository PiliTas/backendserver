const express = require('express');
const mongoose = require('mongoose');

let app = express();


mongoose.connection.openUri('mongodb://localhost:27017/colegioDB', (err, res) => {
    if (err) throw err;
    console.log('Base de datos:\x1b[36m%s\x1b[0m', 'online');
});

app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensaje: 'Petición realizada correctamente'
    });
});

app.listen(3000, () => {
    console.log('Express server puerto 3000:\x1b[36m%s\x1b[0m', 'online');
})