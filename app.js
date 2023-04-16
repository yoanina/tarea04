const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.render('login');
});

// Ruta de matriculas
app.post('/opciones', (req, res) => {
    const usuario = req.body.usuario;
    const contrasena = req.body.contrasena;

    if (usuario === 'yoanina' && contrasena === 'yoanina') {
        res.render('opciones');
    } else {
        res.render('login', { error: 'Usuario o contraseña incorrectos' });
    }
});

// Ruta de confirmacion de modulos
app.post('/productos', (req, res) => {
  const opcion = req.body.opcion;

  if (opcion === 'opcion 1') {
    costo = 1*1200
    res.render('productos', { opcion, costo });
} else {
    costo=1*800
    res.render('productos', { opcion, costo });
}
  
});

app.post('/pago', (req, res) => {
  const modulo = req.body.modulo;
  if (opcion === 'opcion 2') {
    costo=1*800
    res.render('pago', { opcion, costo });
}
});


app.post('/confirmacion', (req, res) => {
    const medioPago = req.body.medioPago;

    if (medioPago === 'Pago en efectivo' ) {
      descuento = 0.10*costo
      pago=costo-descuento

    res.render('efectivo', {  medioPago , descuento, pago});
}else {
  descuento = 0*costo
  pago=costo-descuento
  res.render('confirmacion', {  medioPago, descuento, pago});
}
  
})

const PORT = 7500;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
