
$("#botao-placar").on('click', mostraPlacar);

function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Beatriz";
    var numPalavras = $("#contador-palavras").text();

    var linha = novaLinha(usuario, numPalavras);
    linha.find(".botao-remover").on("click", removeLinha)

    corpoTabela.prepend(linha);
    $(".placar").slideDown(500);
}

function scrollPlacar(){
    var posicaoPlacar = $(".placar").offset().top;
    $("body").animate({
        scrollTop: posicaoPlacar+"px"
    }, 1000);
}

function novaLinha(usuario, palavras) {
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(palavras);
    var colunaRemover = $("<td>");

    var link = $("<a>").addClass("botao-remover").attr("href", "#");
    link.text("❌");

    colunaRemover.append(link);
    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
}

function removeLinha() {
    event.preventDefault();
    var linha = $(this).parent().parent();
    linha.fadeOut(1000);
    setTimeout(function () {
        linha.remove();
    }, 1000);
}

function mostraPlacar() {
    $(".placar").stop().slideToggle(600);
    $(".placar").css("display", "flex");
}