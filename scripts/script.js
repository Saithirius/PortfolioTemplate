// <!-- Плавная прокрутка -->
$("body").on('click', '[href*="#"]', function(e){
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - 50 }, 1000);
  e.preventDefault();
});

// <!-- Анимация появления примеров -->
let shownItems = 0;
function scrollTracking(){
  if (shownItems >= 10) return false;
  for (var i = 1; i < 11; i++) {
    let e = $('.figure' + i);
    if (e.hasClass('animate')) continue;
    if ($(window).height() + $(window).scrollTop() >= e.offset().top + (e.outerHeight() / 3)){
      e.addClass('animate');
      shownItems++;
    }
  }
}
 
$(window).scroll(function(){
	scrollTracking();
});
	
$(document).ready(function(){ 
	scrollTracking();
});