$(function () {

    function validarCliqueHover() {
        $('.txt1').click(function () {
            $('.txt2').css('background', 'red').css('color', 'white');
        })

        $('.txt1').hover(function () {
            $('.txt2').css('background', 'blue').css('color', 'white');
        }, function () {
            $('.txt2').css('background', 'rgb(100, 100, 100)').css('color', 'black');
        })

        $('textarea').focus(function () {
            console.log('Estou dentro do textarea!');
        }).blur(function () {
            console.log('Estou fora do textarea!');
        })
    }

    function validarFormulario() {
        $('select').change(function () {
            console.log("Meu select foi alterado!");
        })
    }

    validarFormulario();
    validarCliqueHover();

});
