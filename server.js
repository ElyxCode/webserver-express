const express = require('express');
const app = express();
const hbs = require('hbs');

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/parciales'); 

app.get('/', (req, res) => {
    
    res.render('home', {
        nombre: 'Douglas',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    
    res.render('about', {
        anio: new Date().getFullYear()
    });
});

app.listen(3000, () => {
    console.log('Escuchando por el puerto 3000');
});
 