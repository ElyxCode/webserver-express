const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // res.send('Hello world');
    let salida = {
        nombre: 'Douglas',
        edad: '29',
        url: req.url
    }

    res.send(salida);
});

app.listen(3000, () => {
    console.log('Escuchando por el puerto 3000');
});
