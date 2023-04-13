$( "#galeria1" ).show();
$( "#galeria2" ).hide();
$( "#galeria3" ).hide();
$( "#galeria4" ).hide();
$( "#galeria5" ).hide();
$( "#galeria6" ).hide();
$( "#galeria7" ).hide();
$("#pie2").hide();
$("#pie3").hide();

$( document ).ready(function(){
    $( "#btnMas" ).click(function(){
        $("#galeria2").show();
        $("#galeria3").hide();
        $("#galeria4").hide();
        $("#galeria5").hide();
        $( "#galeria6" ).hide();
        $( "#galeria7" ).hide();
        $("#pie2").hide();
        $("#pie3").hide();
            $( "#btnMas" ).click(function(){
                $("#galeria3").show();
                $("#galeria4").hide();
                $("#galeria5").hide();
                $( "#galeria6" ).hide();
                $( "#galeria7" ).hide();
                $("#pie2").hide();
                $("#pie3").hide();
                    $( "#btnMas" ).click(function(){
                        $("#galeria4").show();
                        $("#galeria5").hide();
                        $( "#galeria6" ).hide();
                        $( "#galeria7" ).hide();
                        $("#pie2").hide();
                        $("#pie3").hide();
                            $( "#btnMas" ).click(function(){
                                $("#galeria5").show();
                                $( "#galeria6" ).hide();
                                $( "#galeria7" ).hide();
                                $("#pie2").hide();
                                $("#pie3").hide();
                                    $( "#btnMas" ).click(function(){
                                        $( "#galeria6" ).show();
                                        $( "#galeria7" ).hide();
                                        $("#pie2").hide();
                                        $("#pie3").hide();
                                            $( "#btnMas" ).click(function(){
                                                $("#galeria7").show();
                                                $("#pie2").show();
                                                $("#pie3").show();
                                                $( "#btnMas" ).hide();
                                            });
                                    });
                            }); 
                    });
            });
    });
});

function btnDrama(){
    document.location.href = "drama.html";
}
function btnTerror(){
    document.location.href = "terror.html";
}
function btnCome(){
    document.location.href = "comedia.html";
}
function btnFanta(){
    document.location.href = "fantasia.html";
}


//FUNCIONAMIENTO DEL BUSCADOR
document.addEventListener('keyup', e => {
     if(e.target.matches('#buscador')){
        document.querySelectorAll('.imgt').forEach(imagen => {
            imagen.textContent.toLowerCase().includes(e.target.value)
            ? imagen.classList.remove('filtro')
            : imagen.classList.add('filtro');
        })
     }
})
function botoncito1(){
    document.location.href = "trabajos2.html";
}
function botoncito2(){
    document.location.href = "trabajos2.html";
}
function botoncito3(){
    document.location.href = "trabajos2.html";
}
function botoncito4(){
    document.location.href = "trabajos2.html";
}
function botoncito5(){
    document.location.href = "trabajos2.html";
}
function botoncito6(){
    document.location.href = "trabajos2.html";
}
function botoncito7(){
    document.location.href = "trabajos2.html";
}
function botoncito8(){
    document.location.href = "trabajos2.html";
}
function botoncito9(){
    document.location.href = "trabajos2.html";
}
function botoncito10(){
    document.location.href = "trabajos2.html";
}
function botoncito11(){
    document.location.href = "trabajos2.html";
}
function botoncito12(){
    document.location.href = "trabajos2.html";
}
function botoncito13(){
    document.location.href = "trabajos2.html";
}
function botoncito14(){
    document.location.href = "trabajos2.html";
}
function botoncito15(){
    document.location.href = "trabajos2.html";
}
function botoncito16(){
    document.location.href = "trabajos2.html";
}