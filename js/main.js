$(function () {
  // open slick item text
  $(".slider__info-btn").on("click", function () {
    $(".slider__info-text").toggleClass("slider__info-text--active");
  });

  // slick slider
  $(".main__slider-wrapper").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    prevArrow:
      '<button type="button" class="slider-btn slider-btn_prev"><svg width="13" height="25" viewBox="0 0 13 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 1L1 12.5L12 24" stroke="white"/></svg></button>',
    nextArrow:
      '<button type="button" class="slider-btn slider-btn_next"><svg width="13" height="25" viewBox="0 0 13 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L12 12.5L1 24" stroke="white"/></svg></button>',
  });

  // open more product cards
  $(".products__btn").on("click", function () {
    $(".products__btn").toggleClass("products__btn--active");
    $(".products__inner-items").toggleClass("products__items--active");
  });

  // form styler

  // (function ($) {
  //   $(function () {
  //     $("input, select").styler();
  //   });
  // })(jQuery);


  // open select filter-----------------------------------------------------
  $(".products__select-title").on("click", function () {
    $(this).next().toggleClass("products__select-list--active");
  });



// select adress--------------------------------------------------------------

  function showOnChange(e) {
    var elem = document.getElementById("slct");
    var value = elem.options[elem.selectedIndex].value;
    if(value == "Ukraine")
      {
        document.getElementById('Ukraine').style.display = "block";
        document.getElementById('Poland').style.display = "none";
        document.getElementById('Belarus').style.display = "none";
        document.getElementById('Germany').style.display = "none";
      }
   else if(value == "Poland")
     {
          document.getElementById('Ukraine').style.display = "none";
          document.getElementById('Poland').style.display = "block";
          document.getElementById('Belarus').style.display = "none";
          document.getElementById('Germany').style.display = "none";
     }
   else if(value == "Belarus")
     {
        document.getElementById('Ukraine').style.display = "none";
        document.getElementById('Poland').style.display = "none";
        document.getElementById('Belarus').style.display = "block";
        document.getElementById('Germany').style.display = "none";
     }
      else if(value == "Germany")
     {
        document.getElementById('Ukraine').style.display = "none";
        document.getElementById('Poland').style.display = "none";
        document.getElementById('Belarus').style.display = "none";
        document.getElementById('Germany').style.display = "block";
     }

  }


  function showOnChange(element) {
    var value = element.value
    document.getElementById(value).style.display = "block";
  }

});
