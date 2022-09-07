// Modulos Requeridos
const express = require('express');
const app = express();

// settings
app.set('port', 80)

//routes
app.use(express.static('./public'));

app.listen(app.get('port'), ()=>{
    console.log(`Aplicacion corriendo en el puerto ${app.get('port')}`)
})