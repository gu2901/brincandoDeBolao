import Jogo from 'Jogo.js';

class Rodada{

    constructor(numero){
        this.numeroRodada = numero,
        this.nomeRodada = "nome da rodada",
        this.firstGameDate = new Date(),
        this.lastGameDate = new Date(),
        this.statusRodada = "status",
        this.jogos = new Object()
    }

    adicionaJogoNaRodada(){
        const newJogo = new Jogo(nrJogo,data,estadio,timeCasa,timeVisitante)
    }
    

}

const rodada1 = new Rodada(1)
rodada1.adicionaJogoNaRodada(1,new Date(),"estadio dos campeoes","corinthians","palmeiras")

console.log(rodada1.jogos)