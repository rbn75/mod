const express = require("express");
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cookieparser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

//conectando a la base de datos
mongoose.connect('mongodb://localhost/Prueba')
.then( db => console.log('Base de datos conectada'))
.catch(err => console.log(err));

//importando routers
const indexRouter = require('./controlers/index');
const jobsRouter = require('./controlers/jobsControler');
const usuariosRouter = require('./controlers/usuariosControler');


//configuracion
app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));

//routers
app.use("/",indexRouter);
app.use("/",jobsRouter);
app.use("/",usuariosRouter);

//Iniciar server
app.listen(app.get('port'),()=>{
    console.log("Server corriendo en el puerto", app.get('port'));
});
