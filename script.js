let pontuaRobo = 1;
let pontuaHumano = 1;

function getHumanChoice(escolha){
    escolha = prompt("Pedra, papel ou tesoura?");
    return escolha;
}


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


function playRound(humanChoice, computerChoice){
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
function playGame(){
        for(i = 0; i < 5;i++){
                let choiceHuman = getHumanChoice();
                let choiceComputer = getComputerChoice();
                console.log("Escolha do computador: " + choiceComputer);
                playRound(choiceHuman,choiceComputer);
            }    
           return vencedorJogo();
        }

function vencedorJogo(roboPont, humanPont){
    if (pontuaHumano > pontuaRobo){
        console.log("Parabens! voce ganhou da maquina.");
    }else if(pontuaHumano < pontuaRobo){
        console.log("Que triste! Voce perdeu para maquina");
    }else{
        console.log("Empate!");
    }
}

playGame();
