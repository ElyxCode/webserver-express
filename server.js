const express = require('express');
const app = express();

app.use(express.static('public'));

// Express HBS engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    

    res.render('home.hbs', {
        nombre: 'Douglas',
        anio: new Date().getFullYear()
    });
});

app.listen(3000, () => {
    console.log('Escuchando por el puerto 3000');
});
 