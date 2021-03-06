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
   $('#logo').on('click',function(){
     window.location.reload();
      });
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
    if (h2>=18 && h2<=19) _ab2.attr({src:'video/sunset.mp4'});//저녁 6시부터 저녁 7시까지
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
      var wid = $(window).outerWidth(true);
      console.log(wid);
      if (wid >= 1440) $(this).next().stop().animate({right:'-190px',opacity:'1'},'500','easeInSine');
      //1440해상도
      if (wid <= 1440) $(this).next().stop().animate({right:'-145px',opacity:'1'},'500','easeInSine');
      if($(this).is($('.html'))) $('.html').attr('src','images/color_html.svg');
      if($(this).is($('.css'))) $('.css').attr('src','images/color_css.svg');
      if($(this).is($('.js'))) $('.js').attr('src','images/color_js.svg');
      if($(this).is($('.sass'))) $('.sass').attr('src','images/color_sass.svg');
      if($(this).is($('.jquery'))) $('.jquery').attr('src','images/color_jquery.svg');
   },
   'mouseleave':function(){
      $(this).next().stop().animate({right:'-100px',opacity:'0'},'500','easeInSine');
      if($(this).is($('.html'))) $('.html').attr('src','images/html.svg');
      if($(this).is($('.css'))) $('.css').attr('src','images/css.svg');
      if($(this).is($('.js'))) $('.js').attr('src','images/js.svg');
      if($(this).is($('.sass'))) $('.sass').attr('src','images/sass.svg');
      if($(this).is($('.jquery'))) $('.jquery').attr('src','images/jquery.svg');

   }
});
$('.skill_d').on({
   'mouseenter':function(){
      $(this).next().stop().animate({top:'50px',opacity:'1'},'500','easeInSine');
      if($(this).is($('.photoshop'))) $('.photoshop').attr('src','images/color_photoshop.svg');
      if($(this).is($('.illustrator'))) $('.illustrator').attr('src','images/color_illust.svg');

   },
   'mouseleave':function(){
      $(this).next().stop().animate({top:'30px',opacity:'0'},'500','easeInSine');
      if($(this).is($('.photoshop'))) $('.photoshop').attr('src','images/photoshop.svg');
      if($(this).is($('.illustrator'))) $('.illustrator').attr('src','images/illustrator.svg');

   }
});
//1)탭제목의 첫번째를 호출
$('.tab:first-of-type, .tabpanel:first-of-type').addClass('active').attr('tabIndex',0);
//첫번째 탭, 첫번째 탭패널이 처음에 선택되어져서 보이도록 설정
//->.active:dispaly:block//focus를 갖지 못하는 li,div,태그에 focus를 준다

//접근성=>aria-selected(탭버튼)-선택되어진것 aria-hidden(탭패널)
$('.tab:first-of-type').attr('aria-selected',true).siblings().attr('aria-selected',false);
$('.tabpanel:first-of-type').attr('aria-hidden',false).siblings().attr('aria-hidden',true);
//keybord제어
$('.tab').on('keydown',function(e){
    var key = e.keyCode;
    // console.log(key);
    //이전방향키 37 다음방향키 39 home 36 end 35 enter 13 space bar 32
    switch (key) {
        case 37:
            //이전방향키를 눌렀을떄
            //현재 자기 자신이 가지고 있는 포커스제거
            $(this).attr('tabIndext',-1);
            //만약에 첫번쨰 탭이면 마지막 탭의 포커스를 주고 아니면 이전에 있는 형제에게 포커스를 준다
            if($(this).is('.first')) $(this).siblings()('.last').attr('tabIndex',0).focus();
            else $(this).prev().attr('tabIndex',0).focus();
             break;
         case 39:
             $(this).attr('tabIndex',-1);
             if ($(this).is('.last')) $(this).siblings('.first').attr('tabIndex',0).focus();
             else $(this).next().attr('tabIndex',0).focus();
            break;
        case 36:
            //home의 기본기능인 브라우저 첫번째로 돌아가는 것을 제거
            e.preventDefault();
            $(this).attr('tabIndex',-1).siblings('.first').attr('tabIndex',0).focus();
            break;
        case 35:
            e.preventDefault();
            $(this).attr('tabIndex',-1).siblings('.last').attr('tabIndex',0).focus();
            break;
        case 13://enter
        case 32://spacebar 공통함수는 이렇게 쓴다
            var _tg =$(this);
            tabActive(_tg); //tabActive('.tab li')
    }
});
$('.tab').on('click',function(){
    var _tg = $(this); //tabActive 함수를 호출할 li를 변수에 저장
    tabActive(_tg);
});
function tabActive(_tgTab){
    //_tgTab=#tab1 #tab2 #tab3

    var _tgPanel = $('#'+_tgTab.attr('aria-controls'));
    _tgTab.addClass('active').attr({tabIndex:0,'aria-selected':true}).siblings().removeClass('active').attr({tabIndex:-1,'aria-selected':false});
    _tgPanel.addClass('active').attr({tabIndex:0,'aria-hidden':false}).siblings('.tabpanel').removeClass('active').attr({tabIndex:-1,'aria-hidden':true});
}
});         