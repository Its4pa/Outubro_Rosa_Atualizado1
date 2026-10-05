// ---------- Menu no celular ----------
var botaoMenu = document.getElementById("botao-menu");
var menu = document.getElementById("menu");

botaoMenu.addEventListener("click", function () {
  menu.classList.toggle("aberto");
});

// Fecha o menu ao clicar em um link
var linksMenu = menu.getElementsByTagName("a");
for (var i = 0; i < linksMenu.length; i++) {
  linksMenu[i].addEventListener("click", function () {
    menu.classList.remove("aberto");
  });
}

// ---------- Passos do autoexame ----------
var titulos = document.querySelectorAll(".passo-titulo");

titulos.forEach(function (titulo) {
  titulo.addEventListener("click", function () {
    // Abre ou fecha o passo clicado
    titulo.parentElement.classList.toggle("aberto");
  });
});

// ---------- Relatos ----------
var relatos = [
  {
    texto: "Fiz a mamografia por insistência da minha filha. O tumor era pequeno e hoje estou curada.",
    autor: "Maria, 54 anos"
  },
  {
    texto: "Senti um nódulo no banho e fui ao médico na mesma semana. Descobrir cedo mudou tudo.",
    autor: "Ana, 41 anos"
  },
  {
    texto: "Acompanhei minha esposa em cada consulta. Estar junto fez a diferença para nós dois.",
    autor: "Carlos, 48 anos"
  },
  {
    texto: "A campanha do Outubro Rosa no meu trabalho me fez marcar o exame que eu adiava há anos.",
    autor: "Juliana, 47 anos"
  }
];

var posicao = 0;
var textoRelato = document.getElementById("relato-texto");
var autorRelato = document.getElementById("relato-autor");

function mostrarRelato() {
  textoRelato.textContent = "“" + relatos[posicao].texto + "”";
  autorRelato.textContent = "— " + relatos[posicao].autor;
}

document.getElementById("relato-proximo").addEventListener("click", function () {
  posicao = posicao + 1;
  if (posicao >= relatos.length) {
    posicao = 0;
  }
  mostrarRelato();
});

document.getElementById("relato-anterior").addEventListener("click", function () {
  posicao = posicao - 1;
  if (posicao < 0) {
    posicao = relatos.length - 1;
  }
  mostrarRelato();
});

mostrarRelato();

// ---------- Botão voltar ao topo ----------
var botaoTopo = document.getElementById("botao-topo");

window.addEventListener("scroll", function () {
  if (window.scrollY > 400) {
    botaoTopo.style.display = "block";
  } else {
    botaoTopo.style.display = "none";
  }
});

botaoTopo.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});