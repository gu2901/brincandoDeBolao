class Jogo{
    constructor(name){
        this.estadio = "Estadio",
        this.diaHorarioJogo = new Date();
        this.nomeJogo = name,
        this.nrJogo = 1,
        this.timeCasa =  "Corinthians",
        this.golsCasa = 2,
        this.timeVisitante =  "Palmeiras",
        this.golsVisitante = 1,
        this.resultadoGols = "2,1",
        this.resultadoPersona = "Casa"
    }
    atualizaResultado(resultadoCasa,resultadoVisitante){
        this.golsCasa = resultadoCasa
        this.golsVisitante = resultadoVisitante
        this.resultadoGols = resultadoCasa.toString() + "," + resultadoVisitante.toString()
        if (resultadoVisitante > resultadoCasa){
            console.log("Visitante"),
            this.resultadoPersona = "Visitante"
        }else if (resultadoVisitante < resultadoCasa){
            console.log("Casa"),
            this.resultadoPersona = "Casa"
        }else {
            if(resultadoVisitante == resultadoCasa){
                console.log("Casa"),
                this.resultadoPersona = "Empate"
            }
        }
        
    }
    test(){
        console.log("teste funcionando")
    }

}

const corpal = new Jogo("corXpal")
console.log(corpal);
console.log(corpal.nomeJogo);

corpal.atualizaResultado(3,0)
console.log(corpal)

corpal.atualizaResultado(3,3)
corpal.test()

