$(document).ready(function(){


function moveDiv() {
    var $span = $("img");
    $span.removeAttr('style');
    // var leftPos = Math.random(50);//Math.floor(Math.random() * (maxLeft + 1))
    // var topPos = Math.random(100);//Math.floor(Math.random() * (maxTop + 1))
    //
    // $span.css('top','+=30'+'px');
    // $span.css('left','+=30'+'px');
    $span.fadeOut(1000, function() {
        // var maxLeft = //$(window).width() - $span.width() - 510;
        // var maxTop = $(window).height() - $span.height() -510;
        var leftPos = Math.random(50);//Math.floor(Math.random() * (maxLeft + 1))
        var topPos = Math.random(100);//Math.floor(Math.random() * (maxTop + 1))

        // $span.css('top',`+=30`+'px');
        // $span.css('left','+=30'+'px');
        $span.css('left')
        if (Number($span.css('left').substring(0,$span.css('left').length-2)) > (100)) {
            window.clearInterval(stop);
          }
          $span.css('style','display:none;');

        //$span.css({ left: leftPos, top: topPos }).fadeIn(1000);
    });
};
const stop=0;
function playSound() {
  const soundfile="TinyButton.mp3";
 $('body').innerHTML=
 "<embed src=\""+soundfile+"\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
 }

$('.divsmallgrid').on('click', function(){
  // $(this).addClass('click-color');
  // $(this).removeClass('default-color');
  // $('.test').remove();
  // $("#beep-" + $(this).data("beeper"))[0].play();
playSound();
  // moveDiv();
  // stop = setInterval(moveDiv, 5000);
});

// var createDialog = function(text , title) {
//     var dialog =  '<div id="dialog" class="dialog"><img src="images/cartoon-dancing-pig-1.gif" alt="" width="150px" height="190px"><h1>'+ text +'<h1></div>';
//     $('body').append(dialog);
//     $('#dialog').prop('title' , title);
//     $('#dialog').dialog();
// };
//
// createDialog('X is the winner the score is 1000.','Dialog');

});
