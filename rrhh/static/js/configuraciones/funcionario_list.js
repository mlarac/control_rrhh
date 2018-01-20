/**
 * Created by lgamarra on 15/04/14.
 */

$('#input-filtro').on('input', function() {
    var url = cambiarQueryUrl('filtro', $(this).val());
    console.log(url);
    $.get(url, function(data){
        var tabla = $(data).find('.table').html();
        var paginador = $(data).find('.pagination');
        $(".table").html(tabla);
        $(".pagination").html(paginador);
    });

});

