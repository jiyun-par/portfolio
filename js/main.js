function clock() {
var timer =new Date();
console.log(timer);
var mm = timer.getMonth() +1;
var dd =timer.getDate();
var day =timer.getDay();
var  h = timer.getHours();
var m = timer.getMinutes();
var s = timer.getSeconds();
var array =['일','월','화','수','목','금','토']
if (mm < 10) mm= '0' + mm;
if (dd < 10) dd= '0' + dd;
if (h < 10) h= '0' + h;
if (m < 10) m= '0' + m;
if (s < 10) s= '0' + s;
console.log(mm, dd, day, h , m, s); 
var current = mm + '월' +' ' +dd+'일' + ' '+array[day] +'요일'+' '+h+':'+m+':'+s;
console.log(current);
document.querySelector('.clock').innerHTML=current;
}
$(document).ready(function(){
    var _nav = $('.swiper-pagination-bullet');
    _nav.attr('tabindex','-1');
    _nav.eq(0).append('<a href="">'+'ABOUT'+'</a>');
    _nav.eq(1).append('<a href="">'+'SKILL'+'</a>');
    _nav.eq(2).append('<a href="">'+'PORTFOLIO'+'</a>');
    _nav.eq(3).append('<a href="">'+'CONTACT'+'</a>');
     clock();
    var time = setInterval(clock, 1000);
    var _ab2=$('.ab2 > video');
    var timer2 =new Date();
    var h2 = timer2.getHours();
    console.log(h2);
    if (h2>=5 && h2<6) _ab2.attr({src:'video/Sunrise - 7127.mp4'});
    if (h2>=6 && h2<18) _ab2.attr({src:'video/Clouds - 1154.mp4'});
    if (h2>=18 && h2<=19) _ab2.attr({src:'video/Sunset - 8451.mp4'});
    if (h2> 19 && h2<5) _ab2.attr({src:'video/Full Moon - 2144.mp4'});
 //버튼 클릭시 사진 변경이벤트
 $('.tb1').on('click',function(){
    attr({src:'video/Sunrise - 7127.mp4'});
 });
 $('.tb2').on('click',function(){
    _ab2.attr({src:'video/Clouds - 1154.mp4'});
 });
 $('.tb3').on('click',function(){
    _ab2.attr({src:'video/Sunset - 8451.mp4'});
 });
 $('.tb4').on('click',function(){
    _ab2.attr({src:'video/Full Moon - 2144.mp4'});
 });
});         