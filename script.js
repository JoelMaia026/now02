var seguemento;
var projectos = [];
var projecto2;
var cont = 1;
$(document).ready(function() {

    //# clicando na primeira opcao
    $(".op1").click(function() {
        cont += 1;
        seguemento = $(this).text();
        $("#projecto2").text("Informe seus dados "+seguemento)
        $(".ct1").hide(500);

        $(".ct2").show(200);
        $(".op-container").css("display", "flex");
        $(".contagem").css({
            "color": "black",
            "background-color": "#eaeaea"
        })
        $("#cont2").css({
            "color": "white",
            "background-color": "rgb(21, 235, 21)",
        })
        $(".rodape").show(500)
        
    })
    //configurando a segunda opcao css
    /*$(".op-container>.op").click(function() {


    })*/
    //capturando os valores da segunda opcao

    $('.op2:lt(1)').css('display', '')
    //console.log();

    $(".op2").click(function(){
        if (this.style.background == 'rgb(21, 235, 21)') {
            this.style.background = '#eaeaea';
        }
        else {
            this.style.background = 'rgb(21, 235, 21)';
        }

    })
   

})
function voltar() {
    if (cont >= 2) {
        $(".contagem").css({
            "color": "black",
            "background-color": "#eaeaea"
        })
        cont = cont - 1;
        $("#cont" + cont).css({
            "color": "white",
            "background-color": "rgb(21, 235, 21)"
        })

        $(".ct" + cont).show(200);
        $(".ct" + (cont + 1)).hide(200);

    }if (cont == 1) {
        $(".rodape").hide(400);
        $(".mensagem").hide(400)
    }if(cont==3){
        $(".btn-p:gt(0)").show();
    }

}
function proximo() {
    if (cont <= 4) {
        
        if(cont ==2){
            validarProjectos();    
            if(projectos.length<=0){
                $(".mensagem").show(200)
                $("#mensagem").text("escolhe um elemento")
                return false
            }else{
                $(".mensagem").hide()
            }

        }
        //escondendo o botao proximo no último slide
        if(cont==3){
            $(".btn-p:gt(0)").hide();
        }
        //* colorindo todos elementos contagem padrão */
        $(".contagem").css({
            "color": "black",
            "background-color": "#eaeaea"
        })
        //* colorindo  elemento contagem asseguir padrão */
        cont = cont + 1;
        
        $("#cont" + cont).css({
            "color": "white",
            "background-color": "rgb(21, 235, 21)"
        })
        $(".ct" + cont).show(200);
        $(".ct" + (cont - 1)).hide(200);
    }

}

//validando os dados do segundo slide
function validarProjectos() {
    projectos = [];
    var j =0;
    var op2 = document.querySelectorAll(".op2");
    for(var i =0; i < op2.length ;i++){
       
        if(op2[i].style.background == 'rgb(21, 235, 21)'){
            
            projectos[j] = op2[i].innerHTML;
            j++;
        }
     }
    //console.log(seguemento)
    //console.log(projectos.length)
     
}
function validarDadosPessoaes(){
    var dados = document.forms["formulario"];
    if(dados[0].value=="" || dados[1].value=="" || dados[2].value=="" || dados[4].value==""){
        $(".mensagem").show(200)
        $("#mensagem").text("Preencha todos os campos")
    }
    else{
        $(".mensagem").hide()
        projecto2 = $("textarea").val();
        //console.log(dados)
        //console.log(projecto2)
    }
    
}