// Анимация появления примеров
let shownItems = 0;
function scrollTracking(){
  if (shownItems >= 10) return false;
  for (var i = 1; i < 11; i++) {
    let e = $('#figure' + i);
    if (e.hasClass('animate')) continue;
    if ($(window).height() + $(window).scrollTop() >= e.offset().top){
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

// Popups
const dis = '<p>Описание данной работы, ее идея, для каких целей была разработана, время исполнения.Сложно сказать, почему сделанные на базе интернет-аналитики выводы формируют глобальную экономическую сеть и при этом - ассоциативно распределены по отраслям. </p>';
const workExamples = new Map([
  ['figure1', '<span>Природа</span><img src="./img/photos/1.jpg" alt="Работа 1">' + dis],
  ['figure2', '<span>Визитки 1</span><img src="./img/photos/2.jpg" alt="Работа 2">' + dis],
  ['figure3', '<span>Визитки 2</span><img src="./img/photos/3.jpg" alt="Работа 3">' + dis],
  ['figure4', '<span>Визитки 3</span><img src="./img/photos/4.jpg" alt="Работа 4">' + dis],
  ['figure5', '<span>Спорт</span><img src="./img/photos/5.jpg" alt="Работа 5">' + dis],
  ['figure6', '<span>ANNUAL REPORT</span><img src="./img/photos/6.jpg" alt="Работа 6">' + dis],
  ['figure7', '<span>Визитки 4</span><img src="./img/photos/7.jpg" alt="Работа 7">' + dis],
  ['figure8', '<span>Визитки 5</span><img src="./img/photos/8.jpg" alt="Работа 8">' + dis],
  ['figure9', '<span>Визитки 6</span><img src="./img/photos/9.jpg" alt="Работа 9">' + dis],
  ['figure10', '<span>Магазин</span><img src="./img/photos/10.jpg" alt="Работа 10">' + dis],
]);
for (var i = 1; i < 11; i++) {
  $('#figure' + i).click(function(){
    const content = workExamples.get($(this)[0].id);
    $('.popup-box').append(content);
    $('.popup').css('transform', 'scale(1)');
    $('.popup').animate({opacity: '1'}, 200);
  })
}

$('.overlay').click(() => {
  $('.popup').animate({opacity: '0'}, 200);
  setTimeout(() => {
    $('.popup').css('transform', 'scale(0)');
    $('.popup-box').html('');
  }, 200);
})