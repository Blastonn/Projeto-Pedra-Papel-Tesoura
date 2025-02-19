let humanScore = 0;
let computerScore = 0;


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

function playRound(humanChoice, computerChoice){
    
    if (humanChoice.toLowerCase() === "pedra" && computerChoice === "Papel")  {
        computerScore++;
        return console.log("Voce perdeu papel vence pedra! " + computerScore);
    }else if(humanChoice.toLowerCase() === "papel" && computerChoice === "Pedra"){
        humanScore++;
        return console.log("Voce ganhou papel vence pedra! " + humanScore);
    }else if(humanChoice.toLowerCase() === "tesoura" && computerChoice === "Pedra"){
        computerScore++;
        return console.log("Voce perdeu pedra amassa tesoura ! " + computerScore);
    }else if(humanChoice.toLowerCase() === "pedra" && computerChoice === "Tesoura"){
        humanScore++;
        return console.log("Voce ganhou pedra amassa tesoura" + humanScore);
    }else if(humanChoice.toLowerCase() === "tesoura" && computerChoice === "Papel"){
        humanScore++;
        return console.log("Voce ganhou tesoura corta papel" + humanScore);
    }else if(humanChoice.toLowerCase() === "papel" && computerChoice === "Tesoura"){
        computerScore++;
        return console.log("Voce perdeu tesoura corta papel" + computerScore);
    }else{
        return console.log("Empate");
    }
}


const choiceHuman = getHumanChoice();
const choiceComputer = getComputerChoice();

playRound(choiceHuman,choiceComputer);