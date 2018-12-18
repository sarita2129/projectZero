
const AuthorizeUser = function(){
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
  if(AuthorizeUser())
  {
    window.location.href = "file:///Users/saritanair/WDI/Projects/projectZero/landing.html";
  }
  else {
    alert('Invalid User Id or password.');
  }
});
