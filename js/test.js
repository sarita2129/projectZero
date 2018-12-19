$(document).ready(function(){

$('.divsmallgrid').on('click', function(){
  $(this).addClass('click-color');
  $(this).removeClass('default-color')
});
var createDialog = function(text , title) {
    var dialog =  '<div id="dialog" class="dialog"><h1>' + text + '</h1></div>';
    $('body').append(dialog);
    $('#dialog').prop('title' , title);
    $('#dialog').dialog();
};
createDialog('Hello world','Dialog');

});
