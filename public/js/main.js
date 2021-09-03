var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

$(function () {
  atualizaTamanhoFrase();
  iniciaContadores();
  iniciaCronometro();
  iniciaMarcadores();
  $("#botao-reiniciar").on("click", reiniciaJogo);
})

function atualizaTamanhoFrase() {
  var frase = $(".text").text();
  var numPalavras = frase.split(" ").length;
  var tamanhoFrase = $("#textSize");
  tamanhoFrase.text(numPalavras);
}

function iniciaContadores() {
  campo.on("input", function () {
    var conteudo = campo.val();

    var qtdPalavras = conteudo.split(/\S+/).length - 1;
    $("#contador-palavras").text(qtdPalavras);

    var qtdCaracteres = conteudo.length;
    $("#contador-caracteres").text(qtdCaracteres);
  });
}

function iniciaCronometro() {
  var tempoRestante = $("#tempo-digitacao").text();
  campo.one("focus", function () {
    $("#botao-reiniciar").attr("disabled", true);
    var idCronometro = setInterval(function () {
      tempoRestante--;
      $("#tempo-digitacao").text(tempoRestante);
      if (tempoRestante < 1) {
        campo.attr("disabled", true);
        clearInterval(idCronometro);
        $("#botao-reiniciar").attr("disabled", false);
        inserePlacar();
      }
    }, 1000);
  });
}

function iniciaMarcadores() {
  var frase = $(".text").text();
  campo.on("input", function () {
    var digitado = campo.val();
    var comparavel = frase.substr(0, digitado.length);
    if (digitado == comparavel) {
      campo.addClass("campo-correto");
      campo.removeClass("campo-errado");
    } else {
      campo.addClass("campo-errado");
      campo.removeClass("campo-correto");
    }
  })
}

function inserePlacar() {
  var corpoTabela = $(".placar").find("tbody");
  var usuario = "Beatriz";
  var numPalavras = $("#contador-palavras").text();

  var linha = novaLinha(usuario, numPalavras);
  linha.find(".botao-remover").on("click", removeLinha)

  corpoTabela.prepend(linha);
}

function novaLinha(usuario, palavras) {
  var linha = $("<tr>");
  var colunaUsuario = $("<td>").text(usuario);
  var colunaPalavras = $("<td>").text(palavras);
  var colunaRemover = $("<td>");

  var link = $("<a>").addClass("botao-remover").attr("href", "#");
  link.text("remover");

  colunaRemover.append(link);
  linha.append(colunaUsuario);
  linha.append(colunaPalavras);
  linha.append(colunaRemover);

  return linha;
}

function removeLinha() {
  event.preventDefault();
  $(this).parent().parent().remove();
}

$(".botao-remover").on("click", function(event){
  event.preventDefault();
  $(this).parent().parent().remove();
})

function reiniciaJogo() {
  campo.attr("disabled", false);
  campo.val("");
  $("#contador-palavras").text("0");
  $("#contador-caracteres").text("0");
  $("#tempo-digitacao").text(tempoInicial);
  iniciaCronometro();
  campo.removeClass("campo-correto");
  campo.removeClass("campo-errado");
}


