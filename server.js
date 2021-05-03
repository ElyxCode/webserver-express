const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers.js');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/parciales'); 

app.get('/', (req, res) => {
    
    res.render('home', {
        nombre: 'doUglas juARez',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    
    res.render('about', {
        anio: new Date().getFullYear()
    });
});

app.listen(port, () => {
    console.log(`Escuchando por el puerto ${port}`);
});
 