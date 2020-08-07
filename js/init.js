var bgOverlayImg='url(images/pattern-light.png)';var bgOverlayColor='#000000';var bgOverlayOpacity='0.2';var rotate_options={fx:'scrollVert',timeout:6000,delay:1000,speed:500,slides:'.rotate'};var launchDate="10/01/2015 12:00:00";var offset="+10";var overlayBackground='';if(bgOverlayImg.length>0)overlayBackground=overlayBackground+bgOverlayImg+' repeat ';if(bgOverlayColor.length>0){var rgbColor="rgba("+hexToRgb(bgOverlayColor).r+","+hexToRgb(bgOverlayColor).g+","+hexToRgb(bgOverlayColor).b+","+bgOverlayOpacity+")";overlayBackground=overlayBackground+rgbColor;}if($(".bg-overlay").length)$(".bg-overlay").css('background',overlayBackground);$(window).load(function(){"use strict";if($('html').hasClass('ie9')){$('.herotext .top').css('display','none');$('.herotext .bottom').css('display','none');}else{$('.herotext .top').css('opacity','0');$('.herotext .bottom').css('opacity','0');}$('#preload').delay(1500).fadeOut(1000,function(){animStart();});$("body").removeClass("preload");$('.countdown').downCount({date:launchDate,offset:offset});$('.wrapper').niceScroll({cursorcolor:"#ccc",cursorwidth:"10",cursoropacitymin:0.6,background:"transparent",cursorborder:"0",autohidemode:true,cursorminheight:30,zindex:100,horizrailenabled:false});valign();});$("[rel='tooltip']").tooltip();$(".tip-top").tooltip({placement:'top'});var mySwiper=new Swiper('.swiper-container',{initialSlide:1,keyboardControl:true,speed:1400,progress:true,onProgressChange:function(swiper){for(var i=0;i<swiper.slides.length;i++){var slide=swiper.slides[i];var progress=slide.progress;var rotate=-90*progress;if(rotate<-90)rotate=-90;if(rotate>90)rotate=90;var translate=progress*swiper.width/2;var opacity=1-Math.min(Math.abs(progress),1);slide.style.opacity=opacity;swiper.setTransform(slide,'rotateY('+rotate+'deg) translate3d('+translate+'px,0,0)');}},onTouchStart:function(swiper){for(var i=0;i<swiper.slides.length;i++){swiper.setTransition(swiper.slides[i],0);}},onSetWrapperTransition:function(swiper,speed){for(var i=0;i<swiper.slides.length;i++){swiper.setTransition(swiper.slides[i],speed);}},onSlideChangeStart:function(swiper){var activeSlide=swiper.activeSlide();var slideHeight=$(activeSlide).find('.slide-content')[0].offsetHeight;$('.swiper-container').css('height',slideHeight);$('.swiper-wrapper').css('height',slideHeight);$('.wrapper').getNiceScroll().resize();}});$('.arrow-left').on('click',function(e){e.preventDefault()
mySwiper.swipePrev()
return false;});$('.arrow-right').on('click',function(e){e.preventDefault()
mySwiper.swipeNext()
return false;});
$('.countdownDiv').on('click',function(e){e.preventDefault();showContent('countdown');return false;});
$('.countdownClose').on('click',function(e){e.preventDefault();closeContent('countdown');return false;});
$('.comandDiv').on('click',function(e){e.preventDefault();showContent('comand');return false;});
$('.comandClose').on('click',function(e){e.preventDefault();closeContent('comand');return false;});
$('.akciiDiv').on('click',function(e){e.preventDefault();showContent('akcii');return false;});
$('.akciiClose').on('click',function(e){e.preventDefault();closeContent('akcii');return false;});
$(window).resize(function(){swiperHeight();})

$('.countdownDiv2').on('click',function(e){e.preventDefault();showContent('countdown2');return false;});
$('.countdownClose').on('click',function(e){e.preventDefault();closeContent('countdown2');return false;});

$(window).resize(function(){swiperHeight();})
function animStart(){$('.header-top').css('height','80px');$('.header-bottom').css('height','70px');$('.header-top .logo').css('opacity','1').fadeIn(1000);$('#rotate').cycle(rotate_options);setTimeout(function(){if($('html').hasClass('ie9')){$('.herotext .top').fadeIn(1000);$('.herotext .bottom').fadeIn(1000);}else{$('.herotext .top').addClass('animated fadeInDown');$('.herotext .bottom').addClass('animated fadeInUp');}},1000);}function swiperHeight(){var activeSlide=mySwiper.activeSlide();var slideHeight=$(activeSlide).find('.slide-content')[0].offsetHeight;$('.swiper-container').css('height',slideHeight);$('.swiper-wrapper').css('height',slideHeight);mySwiper.reInit();valign();}function valign(){$('.main').css({'height':$(window).height()});$('.wrapper').getNiceScroll().resize();}var buttonClicked=false;function showContent(content){if(buttonClicked===false){buttonClicked=true;if($('html').hasClass('ie9')){var className="."+content;$('.herotext .top').fadeOut(1000);$('.herotext .bottom').fadeOut(1000);setTimeout(function(){$(className).css('opacity','1');$(className).fadeIn(1000);},1000);}else{var contentTop="."+content+" .top";var contentBottom="."+content+" .bottom";$(contentTop).css('opacity','0');$(contentBottom).css('opacity','0');$('.herotext .top').removeClass('fadeInDown').removeClass('fadeOutUp').addClass('animated fadeOutUp');$('.herotext .bottom').removeClass('fadeInUp').removeClass('fadeOutDown').addClass('animated fadeOutDown');function showSection(){var className="."+content;$('.herotext .top').css('display','none').css('opacity','0');$('.herotext .bottom').css('display','none').css('opacity','0');$(className).css('display','block').removeClass('fadeOut').removeClass('fadeIn').addClass('animated fadeIn');$(contentTop).removeClass('fadeInDown').removeClass('fadeOutUp').addClass('animated fadeInDown');$(contentBottom).removeClass('fadeInUp').removeClass('fadeOutDown').addClass('animated fadeInUp');}setTimeout(showSection,1000);}}}function closeContent(content){if($('html').hasClass('ie9')){var className="."+content;$(className).fadeOut(1000);setTimeout(function(){$('.herotext .top').fadeIn(1000);$('.herotext .bottom').fadeIn(1000);buttonClicked=false;},1000);}else{var contentTop="."+content+" .top";var contentBottom="."+content+" .bottom";var className="."+content;$(contentTop).removeClass('fadeInDown').removeClass('fadeOutUp').addClass('fadeOutUp');$(contentBottom).removeClass('fadeInUp').removeClass('fadeOutDown').addClass('fadeOutDown');$(className).removeClass('fadeOut').removeClass('fadeIn').addClass('fadeOut');function showHomeSection(){$(className).css('display','none');$('.herotext .top').css('display','block');$('.herotext .bottom').css('display','block');$('.herotext .top').removeClass('fadeInDown').removeClass('fadeOutUp').addClass('fadeInDown');$('.herotext .bottom').removeClass('fadeOutDown').removeClass('fadeInUp').addClass('fadeInUp');buttonClicked=false;}setTimeout(showHomeSection,1000);}}