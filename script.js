$(function(){
  let topics =$('.topics').offset().top;
  let institution =$('.institution').offset().top;
  let recruit =$('.recruit').offset().top;
  let contact =$('.contact').offset().top;

//ハンバーガーメニュー
$('.nav-button').on('click',function(){
$('.nav-button').toggleClass('is-active');
let button =$('.nav-button').hasClass('is-active');
if(button){
  $('.menu').slideDown();
}else{
  $('.menu').slideUp();
}
});

$('.menu-list li').on('click',function(){
  let click=$(this).attr('id');
  console.log(click);

  if(click=="topics"){
    $(window).scrollTop(topics);
    $('.menu').slideUp();
    $('.nav-button').removeClass('is-active');
  }
  else if (click=="institution") {
    $(window).scrollTop(institution);
    $('.menu').slideUp();
    $('.nav-button').removeClass('is-active');


  }
  else if (click=="recruit") {
    $(window).scrollTop(recruit);
    $('.menu').slideUp();
    $('.nav-button').removeClass('is-active');


  }
  else if (click=="contact") {
    $(window).scrollTop(contact);
    $('.menu').slideUp();
    $('.nav-button').removeClass('is-active');


  }
});

});
