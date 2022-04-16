const database = require("../services/database");

const Filme = require("../models/filme");
const filmeJSON = require("../data/filme.json");

const addFilme = async () => {
  try {
    for (let filme of filmeJSON) {
      console.log(`Inserido${filme.nome}`);
      await new Filme(filme).save();
    }
    console.log("Final do Script");
  } catch (err) {
    console.log(err.message);
  }
};

addFilme();
