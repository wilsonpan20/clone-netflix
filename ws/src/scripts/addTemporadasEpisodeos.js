const database = require("../services/database");
const Filme = require("../models/filme");
const Temporada = require('../models/temporada')
const  Episodeo = require('../models/episodeo')


const addTemporadasEpisodeos= async () => {
  try {
    const series = await Filme.find({tipo:'serie'}).select('_id');
    for(let serie of series){
        console.log(`FILME${serie}-----`)
        const numTemporadas = Math.floor(Math.random()* 5)+1;
        for(let i = 1;i< numTemporadas;i++){
            console.log(`Inserido temporada${i} de ${numTemporadas}`);
            const temporada = await new Temporada({
                filme_id:serie,
                titulo:`Temporada ${i}`

            }).save();  

            const numEpisodeos = Math.floor(Math.random()* 5)+1;
            for(let x = 1; x< numEpisodeos;x ++){
                console.log(`Inserido episodeos${x} de ${numEpisodeos}`);
                await new Episodeo({
                    temporada_id:temporada._id,
                    titulo:`Episodeos ${x}`,
                    numero:x,
                    descricao:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                    capa:'https://picsum.photos/300/200',

                }).save()


            }

        }
    }
   console.log('FINAL DO SCRIPTS')
  } catch (err) {
    console.log(err.message);
  }
};

addTemporadasEpisodeos();