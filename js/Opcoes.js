const opcao = document.querySelector("#maisOpcao");
const maisLink = document.querySelector("#mais");

function showMais() {
  opcao.style.display = "block";
}

function hideMais() {
  opcao.style.display = "none";
}

maisLink.addEventListener("mouseover", showMais);
maisLink.addEventListener("mouseout", hideMais);
opcao.addEventListener("mouseover", showMais);
opcao.addEventListener("mouseout", hideMais);
