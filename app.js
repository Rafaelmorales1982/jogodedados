// Gera um número aleatório entre 1 e 6
let randomNumber1 = Math.floor(Math.random() * 6) + 1;

// Cria o nome da imagem do dado
// Exemplo: dice1.png, dice2.png...
let randomDiceImage = 'dice' + randomNumber1 + '.png';

// Caminho completo da imagem
// Exemplo: img/dice1.png
let randomImageSource = 'img/' + randomDiceImage;

// Seleciona a primeira imagem da página
let image1 = document.querySelectorAll('img')[0];

// Altera o atributo src da imagem
image1.setAttribute('src', randomImageSource);


// ==========================
// SEGUNDO JOGADOR
// ==========================

// Gera outro número aleatório entre 1 e 6
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Cria o nome da imagem do segundo dado
let randomDiceImage2 = 'dice' + randomNumber2 + '.png';

// Caminho da segunda imagem
let randomImageSource2 = 'img/' + randomDiceImage2;

// Seleciona a segunda imagem da página
let image2 = document.querySelectorAll('img')[1];

// Troca a imagem do segundo dado
image2.setAttribute('src', randomImageSource2);


// ==========================
// VERIFICA QUEM GANHOU
// ==========================

// Se o número do jogador 1 for maior
if (randomNumber1 > randomNumber2) {

    // Mostra mensagem de vitória do jogador 1
    document.querySelector('h1').innerHTML = "🏆 Jogador 1 ganhou";

// Se os dois números forem iguais
} else if(randomNumber1 === randomNumber2) {

    // Mostra mensagem de empate
    document.querySelector('h1').innerHTML = "😁 Jogador 1 e Jogador 2 empataram";

// Caso contrário, jogador 2 venceu
} else {

    // Mostra mensagem de vitória do jogador 2
    document.querySelector('h1').innerHTML = "🏆 Jogador 2 ganhou";

}