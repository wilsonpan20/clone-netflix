const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const bodyParser = require('body-parser')
const database = require('./src/services/database')

const app = express();

const filmeRoutes = require('./src/routes/filmes.routes')
const usuarioRoutes = require('./src/routes/usuario.routes')
const episodeosRoutes = require('./src/routes/episodeos.routes')

///MIDDLEWARES
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

///ROUTES
app.use('/',filmeRoutes)
app.use('/usuario',usuarioRoutes)
app.use('/episodeo',episodeosRoutes)



app.listen(3002,()=>{
    console.log('Meu servidor está funcionando');
})