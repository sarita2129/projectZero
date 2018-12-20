$(document).ready(function(){
let result = 'false';
let playerTwo='',userinPlay='',playerOne='', userOneScore=0,usertwoScore=0;
let arrmoves = [];
let turn = 1;
const toggleDiv = function($hidediv,$showdiv){
  $hidediv.hide();
  $showdiv.show();
};
if(userinPlay === '')
{
  toggleDiv($('.tictacgrid'),$('.selectIcons'));
}
const updateScore = function(score){
  if(turn % 2 === 0)
  usertwoScore += score;
  else
  userOneScore += score;
};

const saveMoves = function(){
  let match = [];
  result = false;
  $.each(winmoves, function(index,arrwin){
    $.each(arrwin, function(index1,arrwin1){
        $.each(arrmoves, function(arrindex,moveslist){
         if(String(arrwin[index1]) === arrmoves[arrindex].position && arrmoves[arrindex].Player === userinPlay)
         {
           arrmoves[arrindex].match = 1;
         }
        });
        match = arrmoves.filter( function( el, index ) {
                return Number(el.match) === 1 && el.Player === userinPlay;
            });
        if(match.length === 3)
        {
          updateScore(100);
          return false;
        }
   });
   if(match.length === 3)
   {
     return false;
   }
   else{
     clearMatch();
   }
 });
 return result;
};

const clearMatch = function(){
  $.each(arrmoves, function(arrindex,moveslist){
     arrmoves[arrindex].match = 0;
   });
};
const clearGameBoard = function(){
  const arrdiv = document.querySelectorAll('.tinytictacdiv');
  $.each(arrdiv, function(arrindex,divlist){
    $(this).attr('class','')
    $(this).addClass('tinytictacdiv tinytictac');
   });
};
var createDialogBox = function(text , titletext) {
  let dialog = '';
  if($("body #dialog h1").length){
        $('body #dialog').empty();
        if(titletext === ''){
        dialog = `<h1> ${text} </h1>`;
        }
        else{
          dialog = `<img src="images/cartoon-dancing-pig-1.gif" alt="" width="210px" height="270px"><h1>${text}<h1>`;
          }
          $('#dialog').append(dialog);
        }
          else{
                if(titletext === ''){
                  dialog =  '<div id="dialog" class="dialog"><h1>' + text + '</h1></div>';
                  $('body').append(dialog);
                }
                else{
                        dialog =  '<div id="dialog" class="dialog"><img src="images/cartoon-dancing-pig-1.gif" alt="" width="210px" height="270px"><h1>'+ text +'<h1></div>';
                        $('body').append(dialog);
                }
              }
          $('#dialog').prop('title' , titletext);
          $('#dialog').dialog();
  };

const checkforWinner = function(){
  const match = arrmoves.filter( function( el, index ) {
       return Number(el.match) === 1 && el.Player === userinPlay;
   });
  const matchdraw = arrmoves.filter( function( el, index ) {
            return Number(el.match) === 0;
        });
   if(match.length === 3)
   {
     $.each(match, function(index, objmatch){
       const id = match[index].position.replace(',','');
       $(`#${id}`).addClass('boxshadow');
     });
     const finalscore = (turn % 2 === 0) ? usertwoScore : userOneScore;
     const msgtext = `${match[0].Player} is the winner !!! <br />Score is ${finalscore}.`;
     createDialogBox(msgtext,`Yipppi`);
   }
   else if(turn === 9 && arrmoves.length === matchdraw.length)
   {
     createDialogBox(`Its a Draw !!!.`,'');
   }
};
const beginGame = function($obj){
    if($obj.hasClass(`gameinput-${playerOne}`) || $obj.hasClass(`gameinput-${playerTwo}`))
        return;
      if(turn % 2 === 0)
      {
        userinPlay = playerTwo;
      }
      else {
        userinPlay = playerOne;
      }
      $obj.addClass(`gameinput-${userinPlay}`);
      $obj.removeClass('tinytictac');


      const inputparam = $obj.attr('id').split('');
       arrmoves.push(moves(userinPlay,inputparam[0],inputparam[1]));
       saveMoves(userinPlay);
       checkforWinner();
       turn++;
};
$('.tinytictac').on('click', function(){
  var tick = document.getElementById("myAudio");
  tick.play().catch(function () {});

  beginGame($(this));
});
const switchUser = function(user){
  playerOne = user;
  playerTwo = (user === 'X') ? 'O' :'X';
};
$(document).on("click", "#play", function(){
  toggleDiv($('.selectIcons'),$('.tictacgrid'));
});

$('.tinytictacIconX').on('click', function(){
  $('#play').prop('disabled',false);
  switchUser($(this).attr('id'));
});
$('.tinytictacIconO').on('click', function(){
  $('#play').prop('disabled',false);
  switchUser($(this).attr('id'));
});
const ClearSession = function(){
  clearMatch();
  arrmoves = [];
  clearGameBoard();
  turn = 1;
};
$(document).on("click", "#again", function(){
  ClearSession();
  toggleDiv($('.selectIcons'),$('.tictacgrid'));
});
$(document).on("click", "#exit", function(){
  ClearSession();
  $('#play').prop('disabled',true);
  playerTwo='',userinPlay='',playerOne='', userOneScore=0,usertwoScore=0;
  toggleDiv($('.tictacgrid'),$('.selectIcons'));
});

});
