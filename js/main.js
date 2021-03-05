function clock() {
var timer =new Date();
//console.log(timer);
var mm = timer.getMonth() +1;
var dd =timer.getDate();
var day =timer.getDay();
var  h = timer.getHours();
var m = timer.getMinutes();
var s = timer.getSeconds();
var arrayDay =['SUN','MON','TUE','WED','THU','FRI','SAT']
var arrayMonth =['JAN','FAB','MAR','APR','MAY','JUN','JUL','AUG','JUL','SEP','OCT','NOV','DEC']
// if (mm < 10) mm= '0' + mm;
if (dd < 10) dd= '0' + dd;
if (h < 10) h= '0' + h;
if (m < 10) m= '0' + m;
if (s < 10) s= '0' + s;
//console.log(mm, dd, day, h , m, s); 
var current = arrayMonth[mm-1]  +' ' +dd + ' '+arrayDay[day] +' '+h+':'+m+':'+s;
// var current =h+':'+m+':'+s;
//console.log(current);
document.querySelector('.clock').innerHTML=current;
}
$(document).ready(function(){
    var _nav = $('.swiper-pagination-bullet');
    _nav.eq(0).text('ABOUT');
    _nav.eq(1).text('SKILL');
    _nav.eq(2).text('PORFOLIO');
    _nav.eq(3).text('CONTACT');
     clock();
    var time = setInterval(clock, 1000);
    var _ab2=$('#vd');
    var timer2 =new Date();
    var h2 = timer2.getHours();
    //console.log(h2);
    if (h2>=5 && h2<6) _ab2.attr({src:'video/sunrise.mp4'}); //새벽 다섯시부터 여섯시전까지
    if (h2>=6 && h2<18) _ab2.attr({src:'video/Clouds - 1154.mp4'});//새벽 여섯시부터 저녁 6시 전까지
    if (h2>=18 && h2<=19) _ab2.attr({src:'video/sunsetmp4'});//저녁 6시부터 저녁 7시까지
    if (h2>19 && h2<=23) _ab2.attr({src:'video/Full Moon - 2144.mp4'});//저녁7시부터 밤 11시까지
    if ((h2>=0&&h2<5)) _ab2.attr({src:'video/Full Moon - 2144.mp4'});//밤12시부터새벽 다섯시전까지
 //버튼 클릭시 사진 변경이벤트
 $('.tb1').on('click',function(){
    _ab2.attr({src:'video/sunrise.mp4'});
    $(this).addClass('btndeco').siblings().removeClass('btndeco');
 });
 $('.tb2').on('click',function(){
    _ab2.attr({src:'video/Clouds - 1154.mp4'});
    $(this).addClass('btndeco').siblings().removeClass('btndeco');

 });
 $('.tb3').on('click',function(){
    _ab2.attr({src:'video/sunset.mp4'});
    $(this).addClass('btndeco').siblings().removeClass('btndeco');

 });
 $('.tb4').on('click',function(){
    _ab2.attr({src:'video/Full Moon - 2144.mp4'});
    $(this).addClass('btndeco').siblings().removeClass('btndeco');

 });
 $('.tb5').on('click',function(){
 window.location.reload();
});

//ab1 마우스 움직이기
$('.ab1').on('mousemove',function(e){
   //마우스 진입했을때 black 없애기
   //요소의  중앙 좌표값 구하기
   var centerX = $(this).offset().left +$(this).width()/2;
   var centerY = $(this).offset().top +$(this).height()/2;
   console.log(centerX,centerY);
//움직일 translate 값
translateX = (e.pageX - centerX)/5;
translateY = (e.pageY - centerY)/5;
console.log(translateX,translateY);
gsap.to('.ab1photo',{transform:'translate('+translateX+'px,'+translateY+'px)'});
});
$('.skill').on({
   'mouseenter':function(){
      $(this).next().stop().animate({right:'-220px',opacity:'1'},'500','easeInSine');
   },
   'mouseleave':function(){
      $(this).next().stop().animate({right:'-100px',opacity:'0'},'500','easeInSine');
   }
})
});         