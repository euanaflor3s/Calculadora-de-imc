window.onload = () => {
  "use strict";
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js");
  }
};

function calcular() {
  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const sexo = document.getElementById("sexo").value;
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;

  soma = peso / (altura * altura);

  nome_final.textContent = nome + ", ";
  idade_final.textContent = idade + " anos";
  sexo_final.textContent = sexo;
  altura_final.textContent = altura + "m -";
  peso_final.textContent = peso + "kg";
  resultado.textContent = Math.floor(soma);

  if (soma < 18.5) {
    tela.style.color = "red";
    tela.textContent = "Abaixo do peso normal";
  } 
  
  else if ((soma > 18.5) & (soma < 24.9)) {
    tela.style.color = "green";
    tela.textContent = "Peso normal";
  }
  
  else if ((soma > 25.0) & (soma < 29.9)) {
    tela.style.color = "red";
    tela.textContent = "Excesso de peso";
  }
  
  else if ((soma > 30.0) & (soma < 34.9)) {
    tela.style.color = "red";
    tela.textContent = "Obsidade classe I";
  }
  
  else if ((soma > 35.0) & (soma < 39.9)) {
    tela.style.color = "red";
    tela.textContent = "Obsidade classe II";
  }
  
  else if (soma > 40) {
    tela.style.color = "red";
    tela.textContent = "Obsidade classe III";
  }
}

function limpar() {
  const nome = (document.getElementById("nome").value = "");
  const idade = (document.getElementById("idade").value = "");
  const sexo = (document.getElementById("sexo").value = "");
  const peso = (document.getElementById("peso").value = "");
  const altura = (document.getElementById("altura").value = "");
}