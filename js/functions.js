$(function () {

        //append() para add conteudo/elementos no final do elemento selecionado
        //$ ('.box div').eq(0).append('<h3>Meu elemento adicionado dinamicamente</h3>');

        var el = $('<h3>Meu conteúdo p2</h3>').appendTo('.box div');

        el.css('color', 'red').css('font-size', '20px');

        $(bx).prepend('<h1>Olá Mundo!</h1>');

        var el2 = $('<h1>Olá Mundo! antes</h1>').prependTo($('.box')).css('color','purple')

        var t = '<p>Meu conteúdo antes/após div box! </p>';

       // $('.box').before(t);
       // $('.box').after(t);

       $(t).insertAfter($('.box')).css('color', 'blue');
       $(t).insertBefore($('.box')).css('color', 'green');

       setTimeout(function(){
        $('.box').eq(1).remove();
       },3000);

});
