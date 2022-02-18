
$(function(){
    const url = "https://api.nasa.gov/planetary/apod?api_key=Uc5vfbgN9tti89W17Ge5JMPpNlKSDn2NVw9e4Vcr";

    var requisicao = new XMLHttpRequest();
    requisicao.open("GET", url);
    requisicao.send();

    requisicao.onload=function(){
        if(this.status == 200){
            const infos = JSON.parse(this.responseText);
            mostraFoto(infos);
        }
        else{
            console("Requisição mal-sucedida!")
        }
    }

    function mostraFoto(infos){
        let urlFoto = infos.url;
        console.log(urlFoto);
        let dataFoto = infos.date;
        console.log(dataFoto);
        let descricao = infos.explanation;
        $(".foto").html(
            `<img src="${urlFoto}">
            <br>
            <p>${dataFoto}</p>
            <p>
            ${descricao}
            </p>`
        )
    }

    $("button").click(function(){
        console.log("apertei o botao");
        let novaData = $("#dataPedido").val();
        console.log(novaData);
        let novaUrl = `https://api.nasa.gov/planetary/apod?api_key=Uc5vfbgN9tti89W17Ge5JMPpNlKSDn2NVw9e4Vcr&date=${novaData}`
        requisicao.open("GET", novaUrl);
        requisicao.send();
        
    })
    
})