let pontuaRobo = 1;
let pontuaHumano = 1;

function getComputerChoice(escolha){
    let num = Math.floor(Math.random() * 3 + 1);
    if(num === 1){
        escolha = "Pedra";
        return escolha;
    }else if (num === 2){
        escolha = "Papel";
        return escolha;
    }else{
        escolha = "Tesoura";
        return escolha;
    }
}

function getHumanChoice(escolha){
    escolha = prompt("Pedra, papel ou tesoura?");
    return escolha;
}

for (let i = 1; i <= 5; i++){
function playGame(humanChoice, computerChoice){
        function playRound(){ 
            if (humanChoice.toLowerCase() === "pedra" && computerChoice === "Papel"){
                pontuaRobo += 1;
                return console.log("Voce perdeu papel vence pedra!  ");
            }else if(humanChoice.toLowerCase() === "papel" && computerChoice === "Pedra"){
                pontuaHumano += 1;
                return console.log("Voce ganhou papel vence pedra! " );
            }else if(humanChoice.toLowerCase() === "tesoura" && computerChoice === "Pedra"){
                pontuaRobo += 1;
                return console.log("Voce perdeu pedra amassa tesoura ! " );
            }else if(humanChoice.toLowerCase() === "pedra" && computerChoice === "Tesoura"){
                pontuaHumano +=1;
                return console.log("Voce ganhou pedra amassa tesoura" );
            }else if(humanChoice.toLowerCase() === "tesoura" && computerChoice === "Papel"){
                pontuaHumano +=1
                return console.log("Voce ganhou tesoura corta papel" );
            }else if(humanChoice.toLowerCase() === "papel" && computerChoice === "Tesoura"){
                pontuaRobo += 1;
                return console.log("Voce perdeu tesoura corta papel" );
            }else{
                console.log("empate");
            }

        }
        return playRound();
}

    let choiceHuman = getHumanChoice();
    let choiceComputer = getComputerChoice();
    playGame(choiceHuman,choiceComputer);
}
vencedorJogo();

function vencedorJogo(roboPont, humanPont){
    roboPont = pontuaRobo;
    humanPont = pontuaHumano;
    if (humanPont > roboPont){
        return console.log("Parabens! voce ganhou da maquina.");
    }else{
        return console.log("Que triste! Voce perdeu para maquina");
    }
}

