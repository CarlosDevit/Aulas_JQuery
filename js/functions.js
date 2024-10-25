$(function () {

     $.ajax({
          'url': 'conteudo.html',
          //'method':'post', 
          //data:{'nome':'carlos','idade':'24'}
     }).done(function(data){
          $('#container').append(data);
     });

});