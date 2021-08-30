var frase = $(".text").text();
var numPalavras = frase.split(" ").length;
var tamanhoFrase = $("#textSize");
tamanhoFrase.text(numPalavras);

var campo = $(".campo-digitacao");
campo.on("input", function(){
  var conteudo = campo.val();

  var qtdPalavras = conteudo.split(/\S+/).length - 1;
  $("#contador-palavras").text(qtdPalavras);

  var qtdCaracteres = conteudo.length;
  $("#contador-caracteres").text(qtdCaracteres);
});