$(document).ready(function(){

const authorizeUser = function(){
  const user = $('#loginid').val();
  const psw = $('#password').val();
  const User = Users.filter( function( el, index ) {
    //alert(el.match);
           return el.Name === user && el.psw === psw;
       });
       if(User.length > 0)
       return true;
       else
       return false;

};
$(document).on("click", "#login", function(){
  //alert($('#password').val());
  const startPageUrl = 'https://sarita2129.github.io/projectZero/landing.html';
  //const startPageUrl = 'file:///Users/saritanair/WDI/Projects/projectZero/landing.html';

  if(authorizeUser())
  {
    window.location.href = startPageUrl;
  }
  else {
    alert('Invalid User Id or password.');
  }
});
});
