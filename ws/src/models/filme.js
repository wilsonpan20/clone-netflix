const mongoose = require('mongoose');

const Filme = mongoose.model('Filme',{
  titulo:String,
  tipo:String,
  capa:String,
  logo:String,
  thumb:String,
  descricao:String,
  elenco:String,
  genero:String,
  cenas_momentos:Array,


});


module.exports = Filme;

