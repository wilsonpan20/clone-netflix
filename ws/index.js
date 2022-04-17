const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const bodyParser = require('body-parser')
const database = require('./src/services/database')

const app = express();

const filmeRoutes = require('./src/routes/filmes.routes')
const usuarioRoutes = require('./src/routes/usuario.routes')

///MIDDLEWARES
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

///ROUTES
app.use('/',filmeRoutes)
app.use('/usuario',usuarioRoutes)


app.listen(3001,()=>{
    console.log('Meu servidor está funcionando');
})