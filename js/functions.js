$(function () {
/*
    $('a').click(function () {
        alert('Olá Mundo!');
    })

    $('body').on('click', 'a', function () {
        alert('Olá Mundo!');
        return false
    });

    setTimeout(function () {
        $('body').html('<a href="">Meu Link</a>');
    }, 3000);
*/
    var func = function(){
        $('input[type=text]').eq($(this).index()).css('background', 'green');
    }

    $('input[name=nome_pessoa]').keyup(func);
   // $('input[name=nome_pessoa]').keydown(func);
});
