//about page 시계 설정
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
//시계 html에 삽입
document.querySelector('.clock').innerHTML=current;
}
//dom 불러오기
$(document).ready(function(){
   //마우스 따라다니는 애
   $('body').on('mousemove',function(e){
     var mouseX=e.pageX;
     var mouseY=e.pageY;
     gsap.to('#follow',{left:mouseX + 30, top:mouseY + 20,duration:0.3,delay:0.1});
   });
   //.pr_list li  .swiper-scrollbar-drag  #portfolio_box3 .pb input button
   $('.pr_list li ,.swiper-scrollbar-drag , #portfolio_box3 .pb, input, button,.swiper-pagination-bullet,#logo,.skill_image ').on({
      'mouseenter':function(){
           cursor_yellow();
      },
      'mouseleave':function(){
         cursor_black();
         if (h2>=18 && h2<=19)  cursor_white();
         if (h2>19 && h2<=23)  cursor_white();
         if ((h2>=0&&h2<5))  cursor_white();
      }
   });
   //커서 변환 다크모드시
  //loading 페이지
  var _page =$('#loading');
  var load = 0;
  var timer =setInterval(function(){
     if(load<100) {
        load++;
        $('#loading .progress_bar').css({width:load++ +1+'%'});
      }
     else {
        clearInterval(timer);
       _page.delay(2000).stop().fadeOut(1000);
      }
   $('#loading .progress_txt').text(load+'%');
  }, 30);

  //risize 이벤트 창크기를 줄이면 라인 자동으로 늘어나게
  $(window).resize(function(){
    var w= $('#wrap').width(),
          h=  $('#wrap').height();  
   var _line1 =$('#wrap .line');
   var _line2 =$('#wrap .line2');
      // console.log(w,h);
       if(w<1400 || h<900) {
          _line2.css({height:'100vh'});
          _line1.css({position:'fixed'});
       }
  });

  //스크롤바 늘어나기
  //1. 스와이퍼 전체 변수로 잡기

   //시계버튼 display

   //logo 클릭시 첫번째 페이지로 이동
   $('#logo').attr('tabIndex',0);
   $('#logo').on('click',function(){
      $(this).parent().siblings('.swiper-wrapper').css({transform:'translate3d(0,0,0)','transition-duration': '2000ms'});
      $(this).parent().siblings('.swiper-scrollbar').find('.swiper-scrollbar-drag').css({transform:'translate3d(0,0,0)','transition-duration': '2000ms'});
      var bullet= $(this).parent().siblings('.swiper-pagination').find('.swiper-pagination-bullet:nth-child(1)');
     bullet.addClass('swiper-pagination-bullet-active').siblings().removeClass('swiper-pagination-bullet-active');
      });
      //navi를 대신할 스와이퍼 페이지네이션 제어
    var _nav = $('.swiper-pagination-bullet');
    _nav.eq(0).text('HOME');
    _nav.eq(1).text('SKILL');
    _nav.eq(2).text('PORTFOLIO');
    _nav.eq(3).text('CONTACT');

    //시계 함수 호출
     clock();
    var time = setInterval(clock, 1000);
    var wrap =$('#wrap')
    var timer2 =new Date();
    var h2 = timer2.getHours();

    /* --------------------모드 제어 함수 들---------------------------------------------- */
  
    //색깔제어 함수
   var _white_tag=$('body,.line,.line2,.skill_image,#loading,.swiper-container, #portfolio_Tab,.clock, .intro_message');
   function white(){_white_tag.addClass('white');}
   function remove_white(){_white_tag.removeClass('white');}

   //포인터 되는 곳에 커서 이미지 변경할 태그들
   var yellow=$('.pr_list li ,.swiper-scrollbar-drag , #portfolio_box3 .pb, input, button,.swiper-pagination-bullet,#logo,.skill_image ');
  //커서색깔
  function cursor_white(){$('#follow img').attr('src','images/cursor_white.png');}
  function cursor_black(){$('#follow img').attr('src','images/cursor_black.png');}
  function cursor_yellow(){$('#follow img').attr('src','images/cursor_yellow.png');}

   //메인 텍스트 
   //새벽
   var _maintxt = $('#wrap #cnt1 .intro_message p');
   function maintxt_d_1(){_maintxt.eq(0).text('DAWN');}
   function maintxt_d_2(){_maintxt.eq(1).text('새벽 입니다');}
   function maintxt_d_3(){_maintxt.eq(2).text('오늘 할 일을 생각해 봅니다');}
   //낮
   function maintxt_day_1(){_maintxt.eq(0).text('DAY');}
   function maintxt_day_2(){_maintxt.eq(1).text('날이 좋네요');}
   function maintxt_day_3(){_maintxt.eq(2).text('코딩 하기 좋은 날 입니다');}
   //저녁
   function maintxt_evening_1(){_maintxt.eq(0).text('EVENING');}
   function maintxt_evening_2(){_maintxt.eq(1).text('저무는 해가 아쉬워요');}
   function maintxt_evening_3(){_maintxt.eq(2).text('커피를 한 잔 더 마셔 봅니다');}
   //밤
   function maintxt_night_1(){_maintxt.eq(0).text('NIGHT');}
   function maintxt_night_2(){_maintxt.eq(1).text('깊은 밤');}
   function maintxt_night_3(){_maintxt.eq(2).text('내일은 뭘 해야 할까요?');}
   
   function ani_c() {$('#wrap #cnt1 .clock').stop().animate({opacity:1,top:'vw-calc1920(190)'}),500;} //시간 클릭시 애니메이션 
   function ani_p() {_maintxt.addClass('ani');} //시간 클릭시 애니메이션 

//텍스트 서클
function txtcircle_attr(){
$('#cnt2 .txtcircle img').attr('src','images/CIRCLE2.svg');
$('#cnt3 .txtcircle img').attr('src','images/CIRCLE3.svg');
$('#cnt4 .txtcircle img').attr('src','images/CIRCLE4.svg');}
function txtcircle_attr_white(){
$('#cnt2 .txtcircle img').attr('src','images/circle2_white.svg');
$('#cnt3 .txtcircle img').attr('src','images/circle3_white.svg');
$('#cnt4 .txtcircle img').attr('src','images/circle4_white.svg');}

//스킬 로고 색깔
function skill_logo_white(){
$('.html').attr('src','images/white/white_html.svg');
$('.css').attr('src','images/white/white_css.svg');
$('.js').attr('src','images/white/white_js.svg');
$('.sass').attr('src','images/white/white_sass.svg');
$('.jquery').attr('src','images/white/white_jquery.svg');
$('.photoshop').attr('src','images/white/white_photoshop.svg');
$('.illustrator').attr('src','images/white/white_illustrator.svg');
$('.vue').attr('src','images/white/white_vue.svg');
$('.react').attr('src','images/white/white_react.svg');
$('.typescript').attr('src','images/white/white_typescript.svg');
$('.angular').attr('src','images/white/white_angular.svg');
$('.cv').attr('src','images/white/white_chain_vertical_1.svg');
$('.ch').attr('src','images/white/white_chain_horizontal_1.svg');
}
function skill_logo_black(){
   $('.html').attr('src','images/html.svg');
   $('.css').attr('src','images/css.svg');
   $('.js').attr('src','images/js.svg');
   $('.sass').attr('src','images/sass.svg');
   $('.jquery').attr('src','images/jquery.svg');
   $('.photoshop').attr('src','images/photoshop.svg');
   $('.illustrator').attr('src','images/illustrator.svg');
   $('.vue').attr('src','images/vue.svg');
   $('.react').attr('src','images/react.svg');
   $('.typescript').attr('src','images/typescript.svg');
   $('.angular').attr('src','images/angular.svg');
   $('.cv').attr('src','images/chain_vertical.svg');
   $('.ch').attr('src','images/chain_horizontal.svg');
}

/* ------------------------여기까지---------------------------------------------------- */
   // console.log(h2);
    if (h2>=5 && h2<6) {
       wrap.addClass('dawn')
      //메인 이미지 제어
      $('.main_photo img').attr({src:'images/morning.jpg',alt:'main_morning'});
      //메인 텍스트
       maintxt_d_1();
       maintxt_d_2();
       maintxt_d_3();
      }; //새벽 다섯시부터 여섯시전까지
    if (h2>=6 && h2<18) {
       wrap.addClass('day');
      //메인 이미지 제어
      $('.main_photo img').attr({src:'images/day.jpg',alt:'main_day'});
      //메인 텍스트
      maintxt_day_1();
      maintxt_day_2();
      maintxt_day_3();
      }//새벽 여섯시부터 저녁 6시 전까지
    if (h2>=18 && h2<=19) {
       wrap.addClass('evening');
       white();
       $('#logo img').attr('src','images/white/white_logo.svg');
       //커서
       cursor_white();
       //txtcircle
      txtcircle_attr_white();
      //메인 이미지 제어
      $('.main_photo img').attr({src:'images/evening.jpg',alt:'main_evening'});
      //메인 텍스트
      maintxt_evening_1();
      maintxt_evening_2();
      maintxt_evening_3();
      //로고 제어
      skill_logo_white();
      }//저녁 6시부터 저녁 7시까지
    if (h2>19 && h2<=23) {
       //배경 제어
       wrap.addClass('night');
       //폰트 색깔 배경 제어
       white();
       $('#logo img').attr('src','images/white/white_logo.svg');
       //커서
      cursor_white();
      //txtcircle
      txtcircle_attr_white();
       //메인 사진 제어
       $('.main_photo img').attr({src:'images/main_night.jpg',alt:'main_night'});
       //메인 텍스트
      maintxt_night_1();
      maintxt_night_2();
      maintxt_night_3();
       //로고 제어
       skill_logo_white();
      };//저녁7시부터 밤 11시까지
    if ((h2>=0&&h2<5)) {
       wrap.addClass('night');
         //배경 제어
         wrap.addClass('night');
         //폰트 색깔 배경 제어
         white();
         $('#logo img').attr('src','images/white/white_logo.svg');
        //커서
        cursor_white();
         //txtcircle
         txtcircle_attr_white();
        //메인 사진 제어
       $('.main_photo img').attr({src:'images/main_night.jpg',alt:'main_night'});
       //메인 텍스트
        maintxt_night_1();
        maintxt_night_2();
        maintxt_night_3();
       //로고 제어
       skill_logo_white();
    }//밤12시부터새벽 다섯시전까지

 //버튼 클릭시 배경 색깔 변경이벤트
 $('.tb1').on('click',function(){
    //흰색 클래스 제거
      remove_white();
    //배경 그라디언트 변경
      wrap.css({'background-image': 'linear-gradient(45deg,#64b3f4, #ffd89b,#bfe0f7,#ceaa7b, #ffd89b,#e4bef0)'});
    //시간 버튼 클릭시 색깔 변경
       $(this).addClass('btndeco').siblings().removeClass('btndeco');
      //커서 검은색으로 변경
       cursor_black();       
      yellow.on({
         'mouseenter':function(){
              cursor_yellow();
         },
         'mouseleave':function(){
           cursor_black();
         }
      });
      //메인텍스트
      maintxt_d_1();
      maintxt_d_2();
      maintxt_d_3();
      ani_c();
      ani_p();
      //메인 이미지 제어
       $('.main_photo img').attr({src:'images/morning.jpg',alt:'main_morning'});
      $('#logo img').attr('src','images/mainlogo.svg');

      //txtcircle
      txtcircle_attr();
         //로고 제어
         skill_logo_black();
 });

 $('.tb2').on('click',function(){
    //흰색 클래스 제거
    remove_white();
    //배경 그라데이션 변경
    wrap.css({'background-image':'linear-gradient(45deg,#c2e59c,#64b3f4,#7e9bec,#64b3f4,#c2e59c,#64b3f4)'});
    //시간 버튼 클릭시 변경
    $(this).addClass('btndeco').siblings().removeClass('btndeco');
    //커서 검은색으로 변경
    cursor_black();
       yellow.on({
         'mouseenter':function(){
               cursor_yellow();
         },
         'mouseleave':function(){
          cursor_black();
         }
      });
      //메인 텍스트
      ani_c();
      ani_p();
      maintxt_day_1();
      maintxt_day_2();
      maintxt_day_3();
      //메인 사진 제어
      $('.main_photo img').attr({src:'images/day.jpg',alt:'main_day'});
      $('#logo img').attr('src','images/mainlogo.svg');
      //txtcircle
      txtcircle_attr();
      //로고 제어
      skill_logo_black();
   });
 $('.tb3').on('click',function(){
   wrap.css({'background-image': 'linear-gradient(45deg,#556270,#b6482d,#3f4e5e,#8a6a00,#b6482d,#556270)'})
    $(this).addClass('btndeco').siblings().removeClass('btndeco');
    //흰색 색깔 제어 함수 호출
     white();
     //메이로고색깔
       $('#logo img').attr('src','images/white/white_logo.svg');
     //커서 흰색
    cursor_white();
       yellow.on({
         'mouseenter':function(){
           cursor_yellow();
         },
         'mouseleave':function(){
          cursor_white();
         }
      });
      //메인텍스트
      maintxt_evening_1();
      maintxt_evening_2();
      maintxt_evening_3();
      ani_c();
      ani_p();
       //txtcircle
     txtcircle_attr_white();
      //메인 이미지 제어
      $('.main_photo img').attr({src:'images/evening.jpg',alt:'main_evening'});
      //로고 제어
      skill_logo_white();
 });
 $('.tb4').on('click',function(){
   wrap.css({'background-image': 'linear-gradient(45deg,#141431,#212d35,#292E49,#04030a,#24353f,#292E49)'})
    $(this).addClass('btndeco').siblings().removeClass('btndeco');
      //폰트 색깔 배경 제어
      white();
      //메인로고
      $('#logo img').attr('src','images/white/white_logo.svg');
      //메인 텍스트
      maintxt_night_1();
      maintxt_night_2();
      maintxt_night_3();
      ani_c();
      ani_p();
      //커서색깔
     cursor_white();
     yellow.on({
         'mouseenter':function(){
             cursor_yellow();
         },
         'mouseleave':function(){
          cursor_white();
         }
      });
      //txtcircle
      txtcircle_attr_white();
      //메인 사진 제어
      $('.main_photo img').attr({src:'images/main_night.jpg',alt:'main_night'});
      //로고 제어
      skill_logo_white();
 });
 $('.tb5').on('click',function(){
 window.location.reload();
});

//ab1 이미지 마우스 움직이기
$('.main_photo').on('mousemove',function(e){
   //마우스 진입했을때 black 없애기
   //요소의  중앙 좌표값 구하기
   var centerX = $(this).offset().left +$(this).width()/2;
   var centerY = $(this).offset().top +$(this).height()/2;
 //  console.log(centerX,centerY);
//움직일 translate 값
translateX = (e.pageX - centerX)/5;
translateY = (e.pageY - centerY)/5;
//console.log(translateX,translateY);
gsap.to('.main_photo img',{transform:'translate('+translateX+'px,'+translateY+'px)'});
});

//스킬에 마우스 오버시 키워드 나타나기 
//칼라 로고로 변경
$('.fullskill').on({
  'mouseenter':function(){ 
     if($(this).is($('.html'))) $('.html').attr('src','images/color_html.svg');
      if($(this).is($('.css'))) $('.css').attr('src','images/color_css.svg');
      if($(this).is($('.js'))) $('.js').attr('src','images/color_js.svg');
      if($(this).is($('.sass'))) $('.sass').attr('src','images/color_sass.svg');
      if($(this).is($('.jquery'))) $('.jquery').attr('src','images/color_jquery.svg');
      if($(this).is($('.photoshop'))) $('.photoshop').attr('src','images/color_photoshop.svg');
      if($(this).is($('.illustrator'))) $('.illustrator').attr('src','images/color_illust.svg');
      if($(this).is($('.vue'))) $('.vue').attr('src','images/color_vue.svg');
      if($(this).is($('.react'))) $('.react').attr('src','images/color_react.svg');
      if($(this).is($('.typescript'))) $('.typescript').attr('src','images/color_typescript.svg');
      if($(this).is($('.angular'))) $('.angular').attr('src','images/color_angular.svg');
      if (_white_tag.hasClass('white')){
         if($(this).is($('.vue'))) $('.vue').attr('src','images/white/white_color_vue.svg');
         if($(this).is($('.react'))) $('.react').attr('src','images/white/white_color_react.svg');
         if($(this).is($('.typescript'))) $('.typescript').attr('src','images/white/white_color_typescript.svg');
         if($(this).is($('.angular'))) $('.angular').attr('src','images/white/white_color_angular.svg');
      }

},
'mouseleave':function(){
      if($(this).is($('.html'))) $('.html').attr('src','images/html.svg');
      if($(this).is($('.css'))) $('.css').attr('src','images/css.svg');
      if($(this).is($('.js'))) $('.js').attr('src','images/js.svg');
      if($(this).is($('.sass'))) $('.sass').attr('src','images/sass.svg');
      if($(this).is($('.jquery'))) $('.jquery').attr('src','images/jquery.svg');
      if($(this).is($('.photoshop'))) $('.photoshop').attr('src','images/photoshop.svg');
      if($(this).is($('.illustrator'))) $('.illustrator').attr('src','images/illustrator.svg');
      if($(this).is($('.vue'))) $('.vue').attr('src','images/vue.svg');
      if($(this).is($('.react'))) $('.react').attr('src','images/react.svg');
      if($(this).is($('.typescript'))) $('.typescript').attr('src','images/typescript.svg');
      if($(this).is($('.angular'))) $('.angular').attr('src','images/angular.svg');
      if (_white_tag.hasClass('white')) skill_logo_white();
      if (h2>19 && h2<=23) skill_logo_white();
      if (h2>=0&&h2<5) skill_logo_white();
}
});
$('.skill').on({

   'mouseenter':function(){
      var wid = $(window).outerWidth(true);
      console.log(wid);
      if (wid >= 1440) $(this).next().stop().animate({right:'-410px',opacity:'1'},'200','linear');
      //1440해상도
      if (wid <= 1440) $(this).next().stop().animate({right:'-145px',opacity:'1'},'200','linear');
   },
   'mouseleave':function(){
      $(this).next().stop().animate({right:'-300px',opacity:'0'},'200','easeInSine');
   }
});
$('.skill_d').on({
   'mouseenter':function(){
      $(this).next().stop().animate({top:'90px',opacity:'1'},'200','easeInSine');
   },
   'mouseleave':function(){
      $(this).next().stop().animate({top:'30px',opacity:'0'},'200','easeInSine');
   }
});
$('.vision_skill').on({
   'mouseenter':function(){
      $(this).next().stop().animate({top:'350px',opacity:'1'},'200','linear');
   },
   'mouseleave':function(){
      $(this).next().stop().animate({top:'200px',opacity:'0'},'200','linear');
   }
}); 

//포트폴리오 메뉴의 탭 메뉴 설정
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
    //console.log(key);
    //이전방향키 37 다음방향키 39 home 36 end 35 enter 13 space bar 32
    switch (key) {
        case 38:
            //이전방향키를 눌렀을떄
            //현재 자기 자신이 가지고 있는 포커스제거
            $(this).attr('tabIndext',-1);
            //만약에 첫번쨰 탭이면 마지막 탭의 포커스를 주고 아니면 이전에 있는 형제에게 포커스를 준다
            if($(this).is('.first')) $(this).siblings()('.last').attr('tabIndex',0).focus();
            else $(this).prev().attr('tabIndex',0).focus();
             break;
         case 40:
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
//포트폴리오 탭의 상세설명 교체 버튼
var _info =$('#cnt3 .workinfobox');
$('.right_left .right').on('click',function(){
    if(_info.css({marginLeft:0})) _info.animate({marginLeft:'-380px'},300);
    else if(_info.css({marginLeft:'-380px'})) _info.animate({marginLeft:'-760px'},300);
    else if(_info.css({marginLeft:'-760px'})) _info.animate({marginLeft:'-1140px'},300);
   //  else if(_info.css({marginLeft:'-1140px'})) _info.animate({marginLeft:'1520px'},300);
    else return false;
});
$('.right_left .left').on('click',function(){
   if(_info.css({marginLeft:'-1140px'})) _info.animate({marginLeft: '-760px'},300); 
   else if(_info.css({marginLeft:'-760px'})) _info.animate({marginLeft:'-380px'},300); 
    else if(_info.css({marginLeft: '-380px'})) _info.animate({marginLeft:0},300); 
    else return false;
});
               /* var _info = $('#cnt3 .tabpanel .workinfobox');
               //슬라이드의 가로크기(380) 전체 개수(4) marginLeft(380) 한화면에 1개 
               var onesize = _info.children().outerWidth(true);
               console.log(onesize);
               var total =_info.children().length;
               console.log(total);
               var current = 0;
               $('#cnt3 .tabpanel .right_left button').on('click',function(){
                  //이전버튼 다음버튼 구분하기
                  var btnNum = $(this).index();
                  console.log(btnNum); //이전버튼 0 다음버튼1
                  if(_info.is(':animated')) return false;
                  if (btnNum == 0 && current == 0) return false;
                  else if (btnNum == 1) return false;
                  if (btnNum === 1) current++;
                  else current--;
                  _info.animate({marginLeft:current * - onesize},500,ariaHidden); 
               });
               function ariaHidden(){
                  //현재 보여지는 것만 스크린 리더에서 읽히도록 한다
                  _info.children().attr('aria-hidden',true);
                  _info.children().slice(current).attr('aria-hidden',false);
               } */
//포트폴리오 다음 작업물 이동 버튼
//작업물 페이지 변수에 담기
 $('#cnt3 #works .prev_next .next').on('click',function(){
 });
 $('#cnt3 #works .prev_next .prev').on('click',function(){

});
//페이지 Parallax 넣기
});   