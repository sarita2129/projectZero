$(document).ready(function(){
let result = 'false';
let offender='',userinPlay='',userOne='', UserOneScore=0,UsertwoScore=0;
if(userinPlay === '')
{
  $('.selectIcons').show();
  $('.tictacgrid').hide();
}
// alert(userinPlay);
const UpdateScore = function(score){
  if(turn % 2 === 0)
  UsertwoScore += score;
  else
  UserOneScore += score;

};
const checkforwinner = function(){

  let match = [];
  result = false;
  //alert(arrmoves.length);
 $.each(winmoves, function(index,arrwin){
   //match = 0;
   $.each(arrwin, function(index1,arrwin1){
      $.each(arrmoves, function(arrindex,moveslist){
       if(String(arrwin[index1]) === arrmoves[arrindex].position && arrmoves[arrindex].Player === userinPlay)
       {
         arrmoves[arrindex].match = 1;
         //console.log(' arrmoves[index].position true;');
       }
      });
       match = arrmoves.filter( function( el, index ) {
         //alert(el.match);
                return Number(el.match) === 1 && el.Player === userinPlay;
            });
//alert(match.length);
      if(match.length === 3)
      {
        UpdateScore(100);
        return false;
      }
     //console.log(arrwin[index1]);
   });
   if(match.length === 3)
   {
     UpdateScore(100);
     return false;
   }
   else{
     ClearMatch();
   }

 });
 //if(match === 3)
 return result;
};

//let result = checkforwinner();

const ClearMatch = function(){
  $.each(arrmoves, function(arrindex,moveslist){
     arrmoves[arrindex].match = 0;
   });
};
const ClearGameBoard = function(){
  const arrdiv = document.querySelectorAll('.tinytictacdiv');
  $.each(arrdiv, function(arrindex,divlist){
    $(this).find('span').text('');
    $(this).find('span').removeClass('gameinput');
    $(this).addClass('tinytictac');
    $(this).removeClass('boxshadow');
    //$(this).bind("click" ,beginGame($(this)));

    //$(this).css('background-color','red');
   });
};
//console.log(`${result}`);
//let userinPlay = "";
let arrmoves = [];
let turn = 1;
const beginGame = function($obj,e){
    if($obj.find('span').hasClass('gameinput'))
        e.preventDefault();

  console.log('turn '+ turn);
  //alert($obj.attr('id'));
  if(turn % 2 === 0)
  {
    userinPlay = offender;
  }
  else {
    userinPlay = userOne;
  }
  $obj.find('span').text(userinPlay);

  $obj.find('span').addClass('gameinput');
  //$(this).css('background-color','#FFF');
  //e.preventDefault();
  $obj.removeClass('tinytictac');
  //$obj.unbind("click");
  const inputparam = $obj.attr('id').split('');
  //alert(inputparam);
   arrmoves.push(moves(userinPlay,inputparam[0],inputparam[1]));
   //console.log(arrmoves);
   checkforwinner(userinPlay);
   console.log(arrmoves);
   const match1 = arrmoves.filter( function( el, index ) {
     //alert(el.match);
            return Number(el.match) === 1 && el.Player === userinPlay;
        });
        //draw condition
        const matchdraw = arrmoves.filter( function( el, index ) {
          //alert(el.match);
                 return Number(el.match) === 0;
             });
        if(match1.length === 3)
        {
          //player[0]
          //alert(match1[0].position);
          $.each(match1, function(index, objmatch){
            const id = match1[index].position.replace(',','');
            alert(id);
            $(`#${id}`).addClass('boxshadow');
          });
          alert(`${match1[0].Player} is the winner !!! your score is ` );
        }
        else if(turn === 9 && arrmoves.length === matchdraw.length)
        {
          alert(`Its a Draw !!!`);

        }
        if(match1.length === 3)
        {
          if(turn % 2 === 0)
          {
            alert(UsertwoScore);
          }
          else {
            alert(UserOneScore);
          }
        }



   //console.log(arrmoves);
   turn++;

};
$('.tinytictac').on('click', function(){
  // alert(userinPlay);
  // alert(offender);
  beginGame($(this));

  //$(this).removeClass('tinytictac');
  //$(this).addClass('gameinput');
});
const switchUser = function(user){
  userOne = user;
  offender = (user === 'X') ? 'O' :'X';
  //alert('one : '+ userOne);
  //alert('offender ' + offender);

//$('#play').removeAttr("disabled");

};
$(document).on("click", "#play", function(){
  //alert('clicked');
  $('.selectIcons').hide();
  $('.tictacgrid').show();
});

$('.tinytictacIconX').on('click', function(){
switchUser($(this).attr('id'));
//alert($(this).attr('id'));
   // const userinPlayobj = player.filter( function( el, index ) {
   //  //alert(el.match);
   //         return el.Player === $(this).attr('id');
   //     });
   //    const offenderobj = player.filter( function( el, index ) {
   //      //alert(el.match);
   //             return el.Player !== $(this).attr('id');
   //         });
           // console.log('userinPlayobj[0]',userinPlayobj[0]);

       //window.location.href = "file:///Users/saritanair/WDI/Projects/projectZero/Welcome.html";

});
$('.tinytictacIconO').on('click', function(){
  switchUser($(this).attr('id'));

});
$(document).on("click", "#again", function(){
  ClearMatch();
  arrmoves = [];
  ClearGameBoard();
  $('.selectIcons').hide();
  $('.tictacgrid').show();
  turn = 1;
});
$(document).on("click", "#exit", function(){
  alert('clicked');
  arrmoves = [];
  offender='',userinPlay='',userOne='', UserOneScore=0,UsertwoScore=0;
  ClearGameBoard();
  ClearMatch();
  turn = 1;
  $('.selectIcons').show();
  $('.tictacgrid').hide();
});

});
