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

var tempoRestante = $("#tempo-digitacao").text();
campo.one("focus", function(){
 var idCronometro = setInterval(function(){
    tempoRestante--;
    $("#tempo-digitacao").text(tempoRestante);
    if(tempoRestante < 1){
      campo.attr("disabled", true);
      clearInterval(idCronometro);
    }
  }, 1000);
});
