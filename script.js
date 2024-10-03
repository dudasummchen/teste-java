// declaracao de variavel
let texto = window.prompt("Digite seu nome: ");

//adiciona conteudo dentro de um html
document.getElementById("titulo").innerHTML = "Meu nome é " + texto;

//instancia o objeto botao
const bntTrocaCor = document.getElementById("trocaCor");
let caixaTexto = document.getElementById('caixa');

//evento de clique
bntTrocaCor.addEventListener("click",  () => {

//captura o nome do conteudo
let caixaTexto = document.getElementById('caixa');

//valida o nome da cor
if( caixaTexto.className === "verde"){
    caixaTexto.classList.add('amarelo');
    caixaTexto.classList.remove('verde');
}else{
    caixaTexto.classList.add('verde');
    caixaTexto.classList.remove('amarelo');
}

//exibe no console
console.log(caixaTexto.className);
});

//troca texto
const bntTrocaTexto = document.getElementById("trocaTexto");
bntTrocaTexto.addEventListener("click", () => {
  if( caixaTexto.innerText === "Banana" ){
     document.getElementById("caixa").innerHTML = "Limão";
  }else{
    document.getElementById("caixa").innerHTML = "Banana";
  }
});

//soma os valores
const btnSoma = document.getElementById("somar");
btnSoma.addEventListener("click",  () => {
  let numero1 = document.getElementById("numero1").value;
  let numero2 = document.getElementById("numero2").value;
  let soma = parseInt(numero1) + parseInt(numero2);
  console.log(soma);
});

// adiciona bolinhas
const btnBolinhas  = document.getElementById("addBolinhas");
let total = 0; // contador de bolinhas
let bolinhas =""; // conteudo das bolinhas
let bola = '<div class="bolinha"></div>';  // conteudo para adicionar
 
//acao de clique
btnBolinhas.addEventListener("click", () => {
total = total + 1;
bolinhas="";
for (let index = 0; index < total; index++){
bolinhas = bolinhas + bola;
 
}
document.getElementById("agrupaBolinhas").innerHTML = bolinhas;
});

//localiza
const btnlocalizar = document.getElementById("localiza");
btnlocalizar.addEventListener("click", () => {
// funcao para exibir a posicao
function showPosition(position) {
let latitude = position.coords.latitude;
let longitude = position.coords.longitude;
 
console.log( "Latitude: " + latitude + "longitude: " + longitude);
}
let coordenadas = navigator.geolocation.getCurrentPosition(showPosition);
});
 
