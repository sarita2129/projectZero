$(document).ready(function(){
let result = 'false';
let offender='',userinPlay='',userOne='', UserOneScore=0,UsertwoScore=0;
let arrmoves = [];
let turn = 1;
const toggleDiv = function($hidediv,$showdiv){
  $hidediv.hide();
  $showdiv.show();
};
if(userinPlay === '')
{
  toggleDiv($('.tictacgrid'),$('.selectIcons'));
  // $('.selectIcons').show();
  // $('.tictacgrid').hide();
}
const UpdateScore = function(score){
  if(turn % 2 === 0)
  UsertwoScore += score;
  else
  UserOneScore += score;

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
          UpdateScore(100);
          return false;
        }
   });
   if(match.length === 3)
   {
     //UpdateScore(100);
     return false;
   }
   else{
     ClearMatch();
   }

 });
 return result;
};

const ClearMatch = function(){
  $.each(arrmoves, function(arrindex,moveslist){
     arrmoves[arrindex].match = 0;
   });
};
const ClearGameBoard = function(){
  const arrdiv = document.querySelectorAll('.tinytictacdiv');
  $.each(arrdiv, function(arrindex,divlist){
    $(this).attr('class','')
    $(this).addClass('tinytictacdiv tinytictac');
   });
};
var createDialogBox = function(text , title) {
    if($("body #dialog h1").length)
    {
      $('#dialog h1').html(text);
      $('#dialog h1').prop('title' , title);

    }
    else {
      var dialog =  '<div id="dialog" class="dialog"><h1>' + text + '</h1></div>';
      $('body').append(dialog);

    }
    $('#dialog').prop('title' , title);
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
     const finalscore = (turn % 2 === 0) ? UsertwoScore : UserOneScore;
     const msgtext = `${match[0].Player} is the winner !!! your score is ${finalscore}.`;
     createDialogBox(msgtext,`Yipppi`);
   }
   else if(turn === 9 && arrmoves.length === matchdraw.length)
   {
     createDialogBox(`Its a Draw !!!.`,``);
   }
};
const beginGame = function($obj,e){
    if($obj.hasClass(`gameinput-${userOne}`) || $obj.hasClass(`gameinput-${offender}`))
        return;

  // console.log('turn '+ turn);
      if(turn % 2 === 0)
      {
        userinPlay = offender;
      }
      else {
        userinPlay = userOne;
      }
      $obj.addClass(`gameinput-${userinPlay}`);
      $obj.removeClass('tinytictac');
      const inputparam = $obj.attr('id').split('');
       arrmoves.push(moves(userinPlay,inputparam[0],inputparam[1]));
       saveMoves(userinPlay);
       // console.log(arrmoves);
       checkforWinner();

       turn++;

};
$('.tinytictac').on('click', function(event){
  beginGame($(this),event);
});
const switchUser = function(user){
  userOne = user;
  offender = (user === 'X') ? 'O' :'X';
};
$(document).on("click", "#play", function(){
  toggleDiv($('.selectIcons'),$('.tictacgrid'));
});

$('.tinytictacIconX').on('click', function(){
switchUser($(this).attr('id'));

});
$('.tinytictacIconO').on('click', function(){
  switchUser($(this).attr('id'));

});

$(document).on("click", "#again", function(){
  ClearMatch();
  arrmoves = [];
  ClearGameBoard();
  toggleDiv($('.selectIcons'),$('.tictacgrid'));
  turn = 1;
});
$(document).on("click", "#exit", function(){
  arrmoves = [];
  offender='',userinPlay='',userOne='', UserOneScore=0,UsertwoScore=0;
  ClearGameBoard();
  ClearMatch();
  turn = 1;
  toggleDiv($('.tictacgrid'),$('.selectIcons'));
  // $('.selectIcons').show();
  // $('.tictacgrid').hide();
});

});
