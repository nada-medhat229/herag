$(document).ready(function () {
  // loading

  $("body").css("overflow-y", "auto");
  $("#loading").fadeOut(800);

  // user sub menu

  $(".top-nav-user").click(function () {
    $(".top-nav-user .sub-menu").toggleClass("d-flex");
  });
  $(".top-nav-user").mouseover(function () {
    $(".top-nav-user .sub-menu").addClass("d-flex");
  });
  $(".top-nav-user").mouseleave(function () {
    $(".top-nav-user .sub-menu").removeClass("d-flex");
  });

 
  // ----- scroll top button ------

  var btn_top = $("#scroll-top");
  var btn_bottom = $(".scroll-bottom");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn_top.addClass("show");
    } else {
      btn_top.removeClass("show");
    }
  });

  btn_top.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });

  btn_bottom.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 730 }, "300");
  });
});

 
$('.Real-Estate .owl-carousel').owlCarousel({
  items:4,
  loop:true,
  rtl:false,
  center:true,
  margin:10,
  URLhashListener:true,
  autoplayHoverPause:true,
  startPosition: 'URLHash',
  autoplay:true,
  autoplayTimeout:3000,
  responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 2
      },
  
      1024: {
        items: 3
      },
  
      1366: {
        items: 4
      }
    }
});

var changeSlide = 5; // mobile -1, desktop + 1
// Resize and refresh page. slider-two slideBy bug remove
var slide = changeSlide;
if ($(window).width() < 600) {
  var slide = changeSlide;
  slide--;
} else if ($(window).width() > 999) {
  var slide = changeSlide;
  slide++;
} else {
  var slide = changeSlide;
}

$('.one').owlCarousel({
nav: false,
items: 1,
autoplay: 5000,
rtl:false
})
$('.two').owlCarousel({
nav: false,
margin: 10,
rtl:false,
responsive: {
    0: {
        items: changeSlide - 1,
        slideBy: changeSlide - 1
    },
    600: {
        items: changeSlide,
        slideBy: changeSlide
    },
    1000: {
        items: changeSlide + 1,
        slideBy: changeSlide + 1
    }
}
})
var owl = $('.one');
owl.owlCarousel();
owl.on('translated.owl.carousel', function (event) {
  $(".right").removeClass("nonr");
  $(".left").removeClass("nonl");
  if ($('.one .owl-next').is(".disabled")) {
      $(".slider .right").addClass("nonr");
  }
  if ($('.one .owl-prev').is(".disabled")) {
      $(".slider .left").addClass("nonl");
  }
  $('.slider-two .item').removeClass("active");
  var c = $(".slider .owl-item.active").index();
  $('.slider-two .item').eq(c).addClass("active");
  var d = Math.ceil((c + 1) / (slide)) - 1;
  $(".slider-two .owl-dots .owl-dot").eq(d).trigger('click');
})
$('.right').click(function () {
  $(".slider .owl-next").trigger('click');
});
$('.left').click(function () {
  $(".slider .owl-prev").trigger('click');
});
$('.slider-two .item').click(function () {
  var b = $(".item").index(this);
  $(".slider .owl-dots .owl-dot").eq(b).trigger('click');
  $(".slider-two .item").removeClass("active");
  $(this).addClass("active");
});
var owl2 = $('.two');
owl2.owlCarousel();
owl2.on('translated.owl.carousel', function (event) {
  $(".right-t").removeClass("nonr-t");
  $(".left-t").removeClass("nonl-t");
  if ($('.two .owl-next').is(".disabled")) {
      $(".slider-two .right-t").addClass("nonr-t");
  }
  if ($('.two .owl-prev').is(".disabled")) {
      $(".slider-two .left-t").addClass("nonl-t");
  }
})
$('.left-t').click(function () {
  $(".slider-two .owl-prev").trigger('click');
});
$('.right-t').click(function () {
  $(".slider-two .owl-next").trigger('click');
});
/* -------------- upload profile pic ---------------- */
if ($(".profile .profile-pic").length > 0) {
  const imgDiv = document.querySelector('.profile-pic');
  const img = document.querySelector('#photo');
  const file = document.querySelector('#file');
  const uploadBtn = document.querySelector('#uploadBtn');

  //if user hover on img div 

  imgDiv.addEventListener('mouseenter', function(){
      uploadBtn.style.display = "block";
  });

  //if we hover out from img div

  imgDiv.addEventListener('mouseleave', function(){
      uploadBtn.style.display = "none";
  });

  //when we choose a pic to upload

  file.addEventListener('change', function(){
  const choosedFile = this.files[0];
  if (choosedFile) {
      const reader = new FileReader(); 
      reader.addEventListener('load', function(){
          img.setAttribute('src', reader.result);
      });
      reader.readAsDataURL(choosedFile);
  }
  });
}
$('.op-pro-filter').click(function () {
    $(this).toggleClass('active');
    $('.friends ').slideToggle();
});

var theme = document.getElementById('theme')
theme.onclick = function(){
    document.body.classList.toggle("theme")
}
$("#country_selector").countrySelect({
  defaultCountry:"eg"
});

//  aos animation
AOS.init();
