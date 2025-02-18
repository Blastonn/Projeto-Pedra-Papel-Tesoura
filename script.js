function getComputerChoice(escolha){
    let num = Math.floor(Math.random() * 3 + 1);
    console.log(num);
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

