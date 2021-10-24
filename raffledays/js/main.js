$(function(){
   //주메뉴에 마우스를 올리면 서브메뉴와 서브배경 보이게
   $('.gnb').mouseover(function(){
     $('.gnb-subright,.sub-bg').stop().slideDown();
   })
   $('.gnb,.sub-bg').mouseout(function(){
    $('.gnb-subright,.sub-bg').stop().slideUp();
  })
   
  //메인이미지 확대
  


  //스와이퍼 라이브러리
  var mainSlider = new Swiper(".main-slider", {
    //자동재생
    autoplay: {
    //자동재생시간
    delay: 3500,
    //동그라미버튼이나 좌우버튼을 클릭하면 자동재생 멈춤
    disableOnInteraction: true
    },
    //동그라미 버튼
    pagination: {
      el: ".m-pager",
      //버튼을 클릭하면 해당 슬라이드 이동
      clickable: true,
    },
    //3번이미지에서 1번으로 바로 넘어가게 함
    loop:true,
  });
  
  //ootd (스와이퍼)
  var ootdslider = new Swiper(".ootd-slider", {
    slidesPerView: 6,
    spaceBetween: 20,
    pagination: {
      el: ".b-pager",
      clickable: true,
    },
    navigation: {
      nextEl: ".b-next",
      prevEl: ".b-prev",
    },
  });

  //winning (스와이퍼)
  var ootdslider = new Swiper(".winning-slider", {
    slidesPerView: 6,
    spaceBetween: 20,
    pagination: {
      el: ".i-pager",
      clickable: true,
    },
    navigation: {
      nextEl: ".i-next",
      prevEl: ".i-prev",
    },
  });

  //스와이퍼 라이브러리
  var mainSlider = new Swiper(".ad-slider", {
    //자동재생
    autoplay: {
    //자동재생시간
    delay: 3500,
    //동그라미버튼이나 좌우버튼을 클릭하면 자동재생 멈춤
    disableOnInteraction: true,
    },
    //동그라미 버튼
    pagination: {
      el: ".a-pager",
      //버튼을 클릭하면 해당 슬라이드 이동
      clickable: true,
    },
    //3번이미지에서 1번으로 바로 넘어가게 함
    loop:true,
  });

   //스와이퍼 라이브러리
   var mainSlider = new Swiper(".info-slider", {
    //동그라미 버튼
    pagination: {
      el: ".info-pager",
      //버튼을 클릭하면 해당 슬라이드 이동
      clickable: true,
    },
    //3번이미지에서 1번으로 바로 넘어가게 함
    loop:true,
  });

  $(".info-plus")
    .on('mousemove', magnify)
    .prepend("<div class='magnifier'></div>")
    .children('.magnifier').css({
        "background": "url('" + $(".target").attr("src") + "') no-repeat"
    });
 
  var target = $('.target');
  var magnifier = $('.magnifier');
  function magnify(e) {
 
    // 1
    var mouseX = e.pageX - $(this).offset().left;
    var mouseY = e.pageY - $(this).offset().top;
 
    // 2
    if (mouseX < $(this).width() && mouseY < $(this).height() && mouseX > 0 && mouseY > 0) {
        magnifier.fadeIn(100);
    } else {
        magnifier.fadeOut(100);
    }
 
    // 3
    if (magnifier.is(":visible")) {
 
        // 4    
        var rx = -(mouseX / target.width() * target[0].naturalWidth - magnifier.width() / 2);
        var ry = -(mouseY / target.height() * target[0].naturalHeight - magnifier.height()  /2);
 
        // 5
        var px = mouseX - magnifier.width() / 2;
        var py = mouseY - magnifier.height() / 2;
 
        // 6
        magnifier.css({
            left: px,
            top: py,
            backgroundPosition: rx + "px " + ry + "px"
          });
      }
  };

});//로딩함수

