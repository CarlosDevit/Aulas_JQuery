$(function () {
    /*
        var timer;
    
        $(window).scroll(function(){
            console.log('Scroll ativo');
        })
    
        $(window).resize(function(){
            clearTimeout(timer);
            timer = setTimeout(function(){
                location.href = "http://localhost/Aulas_JQuery/";
            }, 1000);
        })
    
        $('a').click(function(e){
            e.preventDefault();
            // ou pode usar: 
            // return false 
            
        })
    
        */

        $('.box').click(function(e){
            e.stopPropagation();
        })

        $('body').click(function(){
            $('.box').css('background-color','green')
        })
});
