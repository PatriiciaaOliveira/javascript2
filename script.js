
//Tecnologia	Função	Exemplos de Uso
//HTML	Linguagem de marcação para estruturar conteúdo.	
//Título
//Parágrafo

//CSS	Linguagem de estilos para apresentação e estilização.	

//JavaScript (JS)	Linguagem de programação para interatividade.	function iniciarJogo() { ... }

//declarar uma variável
// para puxar o h1 do html usa document.querySelector
//querySelector- Case Sensitive: Diferencia maiúsculas e minúsculas
let titulo = document.querySelector("h1");
titulo.innerHTML = "jogo do número secreto";

let paragrafo = document.querySelector("p");
paragrafo.innerHTML = "Escolha um número entre 1 e 10";
//quando colocar uma função tem que colocar function e tem que colocar um nome, toda função tem que declarar o nome, as funções precisam ter nomes descritivos
function verificarChute(){

}