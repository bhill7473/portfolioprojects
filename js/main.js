$(document).ready(function(){

$('#header').on('load', function(){
  $('#header').animate({
    fontSize:'30px'
  },500);
});


$('#postpick').on('click', function(){
  location.href = "https://postpick-app.herokuapp.com/";

});
$('#excitesbites').on('click', function(){
  location.href = "https://excitesandbites.herokuapp.com/";

});
$('#mobiledesign').on('click', function(){
  location.href = "https://mobilewebdesign.herokuapp.com/";

});
$('#postpick').on('click', function(){
  location.href = "https://postpick-app.herokuapp.com/";

});
$('#clothing').on('click', function(){
  location.href = "https://jqueryproject.herokuapp.com/";

});
$('#btn1').on('click', function(){
  location.href = "https://www.linkedin.com/in/brent-hillen/";

});
$('#btn2').on('click', function(){
  location.href = "https://github.com/bhill7473";

});
$(document).on('click', 'li', function(){
  $(this).toggleClass('list');
})













});
