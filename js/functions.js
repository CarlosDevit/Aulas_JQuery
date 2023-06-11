$(function () {

       /* var box = $('.box');

        box.html('<div class="teste"><p>Olá Mundo!</p> ');

        box.html(box.html() +'<div class="teste"><h1 class="texto1">Meu texto em Javascript</h1></div>');


      $(b2).text('<div></div>');
  
        $(ip).val('Olá Mundo!')*/

        $(ipb).click(function(){
                var str  = $(ipt).val();
                //Split separa nossa string com base no delimitador.
                var var2 = str.split(',');
                console.log(var2);
                //substr recorta nossa string
                console.log(str.substr(0,4));

                var splitstr = str.split('@');

                if(splitstr[1] == 'hotmail.com'){
                        $(ipt).css('opacity', '0');
                }else{
                        console.log('A condicao não bateu')
                }
        });

});
