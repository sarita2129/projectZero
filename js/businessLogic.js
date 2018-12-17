$(document).ready(function(){
let result = 'false';
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
        return false;
      }
     //console.log(arrwin[index1]);
   });
   if(match.length === 3)
   {
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
//console.log(`${result}`);
let userinPlay = "";
let arrmoves = [];
let turn = 1;
$('.tinytictac').on('click', function(){
  console.log('turn '+ turn);
  if(turn % 2 === 0)
  {
    userinPlay = 'O';
  }
  else {
    userinPlay = 'X';
  }
  $(this).find('span').text(userinPlay);

  $(this).find('span').addClass('gameinput');
  $(this).css('background-color','#FFF');
  const inputparam = $(this).attr('id').split('');
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
          alert(`${match1[0].Player} is the winner !!!`);
        }
        else if(turn === 9 && arrmoves.length === matchdraw.length)
        {
          alert(`Its a Draw !!!`);

        }
   //console.log(arrmoves);
   turn++;
  //$(this).removeClass('tinytictac');
  //$(this).addClass('gameinput');
});

});
