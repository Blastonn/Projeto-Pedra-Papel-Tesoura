let pontuaRobo = 0;
let pontuaHumano = 0;
const pontuacaoMaxima = 5;
const buttons = document.querySelectorAll("button");
const content = document.createElement("div");
const para = document.createElement("p");
const resultado = document.createElement("p");
let pontuacao = document.createElement("p");
const container = document.querySelector(".container");

content.classList.add("content");
para.classList.add("text-computer");
pontuacao.classList.add("pontuacao");
resultado.classList.add("resultado-final");


function getHumanChoice(escolha){
    //ag
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
                content.textContent = "Voce perdeu papel vence pedra!";
            }else if(humanChoice.toLowerCase() === "papel" && computerChoice === "Pedra"){
                pontuaHumano += 1;
                content.textContent = "Voce ganhou papel vence pedra! ";
            }else if(humanChoice.toLowerCase() === "tesoura" && computerChoice === "Pedra"){
                pontuaRobo += 1;
                content.textContent = "Voce perdeu pedra amassa tesoura ! ";
            }else if(humanChoice.toLowerCase() === "pedra" && computerChoice === "Tesoura"){
                pontuaHumano +=1;
                content.textContent = "Voce ganhou pedra amassa tesoura";
            }else if(humanChoice.toLowerCase() === "tesoura" && computerChoice === "Papel"){
                pontuaHumano +=1
                content.textContent= "Voce ganhou tesoura corta papel";
            }else if(humanChoice.toLowerCase() === "papel" && computerChoice === "Tesoura"){
                pontuaRobo += 1;
                content.textContent = "Voce perdeu tesoura corta papel" ;
            }else{
                content.textContent = "empate";
            }

    }

function vencedorJogo(){
    if (pontuaHumano == pontuacaoMaxima ){
        resultado.textContent = "Parabens! voce ganhou da maquina.";  
        resultado.style.color = "green";  
        desativarJogo();    
    }else if (pontuaRobo == pontuacaoMaxima){
        resultado.textContent = "Voce perdeu";
        resultado.style.color = "red";
        desativarJogo();
    }
}

function desativarJogo(){
    buttons.forEach((button) => {
        button.disabled = true;
    });
}

function playGameBt(){
    buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let choiceHuman = getHumanChoice(button.id);
        let choiceComputer = getComputerChoice();
        playRound(choiceHuman, choiceComputer);
        
        para.textContent = "Escolha do computador: " + choiceComputer;

        pontuacao.textContent = `Sua pontuacao: ${pontuaHumano} , 
        Pontuacao maquina: ${pontuaRobo}`;

        container.appendChild(pontuacao);
        container.appendChild(para);
        container.appendChild(content);  
        container.appendChild(resultado);   
        return vencedorJogo(); 
    });
});
}

playGameBt();
