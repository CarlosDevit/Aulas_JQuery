$(function () {
    
        var box = $('div.box');

        console.log('width sem contar padding: ' + box.width());
        console.log('height sem contar padding: '+box.height());
        console.log('width contando padding: '+box.innerWidth());
        console.log('height contando padding: ' + box.innerHeight());

        console.log('Outer width : '+box.outerWidth(true));
        console.log('Outer height : ' + box.outerHeight(true));
});
