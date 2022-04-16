const mongoose = require('mongoose');

const Filme = mongoose.model('Filme',{
  titulo:String,
  tipo:String,
  capa:String,
  logo:String,
  thumb:String,
  descricao:Array,
  elenco:Array,
  genero:String,
  cenas_momentos:Array,


});


module.exports = Filme;

