$(function () {

  // open slick item text------------------------------------
  
  $(".slider__info-btn").on("click", function () {
    $(".slider__info-text").toggleClass("slider__info-text--active");
  });

  // slick slider-------------------------------------------
  
  $(".main__slider-wrapper").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    prevArrow:
      '<button type="button" class="slider-btn slider-btn_prev"><svg width="13" height="25" viewBox="0 0 13 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 1L1 12.5L12 24" stroke="white"/></svg></button>',
    nextArrow:
      '<button type="button" class="slider-btn slider-btn_next"><svg width="13" height="25" viewBox="0 0 13 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L12 12.5L1 24" stroke="white"/></svg></button>',
    asNavFor: ".main__slider-bg",
  });
  $(".main__slider-bg").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    fade: true,
    arrows: false,
    asNavFor: ".main__slider-wrapper",
  });

  // open more product cards---------------------------
  
  $(".products__btn").on("click", function () {
    $(".products__btn").toggleClass("products__btn--active");
    $(".products__inner-items").toggleClass("products__items--active");
  });

  // form styler--------------------------------------
  (function ($) {
    $(function () {
      $("input, select").styler();
    });
  })(jQuery);


  // select product filter-----------------------------------------------------
  $(".products__select-title").on("click", function () {
    $(this).next().toggleClass("products__select-list--active");
    $(this).toggleClass("select__title--active");
  });



  //open burger menu------------------------------------
  $(".burger__btn").on("click", function () {
    $(".burger__btn").toggleClass("burger__btn--active");
    $(".menu__list").toggleClass("menu__list--active");
  });
});



// map select adress--------------------------------------------------------------

function showOnChange(e) {
  var elem = document.getElementById("slct");
  var value = elem.options[elem.selectedIndex].value;
  if (value == "Ukraine") {
    document.getElementById("Ukraine").style.display = "block";
    document.getElementById("Poland").style.display = "none";
    document.getElementById("Belarus").style.display = "none";
    document.getElementById("Germany").style.display = "none";
  } else if (value == "Poland") {
    document.getElementById("Ukraine").style.display = "none";
    document.getElementById("Poland").style.display = "block";
    document.getElementById("Belarus").style.display = "none";
    document.getElementById("Germany").style.display = "none";
  } else if (value == "Belarus") {
    document.getElementById("Ukraine").style.display = "none";
    document.getElementById("Poland").style.display = "none";
    document.getElementById("Belarus").style.display = "block";
    document.getElementById("Germany").style.display = "none";
  } else if (value == "Germany") {
    document.getElementById("Ukraine").style.display = "none";
    document.getElementById("Poland").style.display = "none";
    document.getElementById("Belarus").style.display = "none";
    document.getElementById("Germany").style.display = "block";
  }
}

// footer select adress----------------------------------------

function OnChange(e) {
  var elem = document.getElementById("slct_footer");
  var value = elem.options[elem.selectedIndex].value;
  if (value == "ua") {
    document.getElementById("ua").style.display = "block";
    document.getElementById("pl").style.display = "none";
    document.getElementById("by").style.display = "none";
    document.getElementById("de").style.display = "none";
  } else if (value == "pl") {
    document.getElementById("ua").style.display = "none";
    document.getElementById("pl").style.display = "block";
    document.getElementById("by").style.display = "none";
    document.getElementById("de").style.display = "none";
  } else if (value == "by") {
    document.getElementById("ua").style.display = "none";
    document.getElementById("pl").style.display = "none";
    document.getElementById("by").style.display = "block";
    document.getElementById("de").style.display = "none";
  } else if (value == "de") {
    document.getElementById("ua").style.display = "none";
    document.getElementById("pl").style.display = "none";
    document.getElementById("by").style.display = "none";
    document.getElementById("de").style.display = "block";
  }
}

// google map function --------------------------------

function initMap() {
  var stylemap = [
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#e9e9e9",
        },
        {
          lightness: 17,
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [
        {
          color: "#f5f5f5",
        },
        {
          lightness: 20,
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          lightness: 17,
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          lightness: 29,
        },
        {
          weight: 0.2,
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          lightness: 18,
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "geometry",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          lightness: 16,
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#f5f5f5",
        },
        {
          lightness: 21,
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          color: "#dedede",
        },
        {
          lightness: 21,
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          visibility: "on",
        },
        {
          color: "#ffffff",
        },
        {
          lightness: 16,
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          saturation: 36,
        },
        {
          color: "#333333",
        },
        {
          lightness: 40,
        },
      ],
    },
    {
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [
        {
          color: "#f2f2f2",
        },
        {
          lightness: 19,
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#fefefe",
        },
        {
          lightness: 20,
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#fefefe",
        },
        {
          lightness: 17,
        },
        {
          weight: 1.2,
        },
      ],
    },
  ];
  const myLatLng = {
    lat: 48.51209715509255,
    lng: 32.25513435956643,
  };
  const centerloc = {
    lat: 48.51209715509255,
    lng: 32.25513435956643,
  };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2,
    center: centerloc,
    styles: stylemap,
    disableDefaultUI: true,
    gestureHandling: "greedy",
  });

  var locations = [
    ["Ukraine ", 48.51209715509255, 32.25513435956643, 2],
    ["Poland ", 51.730330204903126, 19.45751504413769, 1],
    ["Belarus ", 53.91192658775435, 27.576923363140093, 1],
    ["Germany ", 50.75417317177639, 9.687623702120641, 1],
  ];
  var infowindow = new google.maps.InfoWindow();
  var marker, i;
  const image = "img/marker.svg";
  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map,
      icon: image,
    });
    google.maps.event.addListener(
      marker,
      "click",
      (function (marker, i) {
        return function () {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        };
      })(marker, i)
    );

    google.maps.event.addListener(marker, "click", function () {
      map.setZoom(9);
      map.setCenter(marker.getPosition());
    });
  }

  function newLocation(newLat, newLng) {
    map.setCenter({
      lat: newLat,
      lng: newLng,
    });
  }

  // select country----------------------------

  var elem = document.getElementById("slct");
  var value = elem.options[elem.selectedIndex].value;
  if (value == "Ukraine") {
    newLocation(48.51209715509255, 32.25513435956643);
    map.setZoom(6);
  } else if (value == "Poland") {
    newLocation(51.730330204903126, 19.45751504413769);
    map.setZoom(6);
  } else if (value == "Belarus") {
    newLocation(53.91192658775435, 27.576923363140093);
    map.setZoom(7);
  } else if (value == "Germany") {
    newLocation(50.75417317177639, 9.687623702120641);
    map.setZoom(7);
  }

  // show sdress on map----------------------------------

  $(".UA__adress-1").on("click", function () {
    newLocation(48.924290333159554, 24.709234829124455);
    map.setZoom(11);
  });
  $(".UA__adress-2").on("click", function () {
    newLocation(48.47984446914236, 35.03200552326216);
    map.setZoom(11);
  });
  $(".PL__adress-1").on("click", function () {
    newLocation(51.11407846946611, 17.029945734242514);
    map.setZoom(11);
  });
  $(".PL__adress-2").on("click", function () {
    newLocation(50.06780851447201, 19.934802594527664);
    map.setZoom(11);
  });
  $(".BY__adress-1").on("click", function () {
    newLocation(53.90424326237949, 27.559051701787165);
    map.setZoom(11);
  });
  $(".BY__adress-2").on("click", function () {
    newLocation(52.894506716614714, 30.031844822793865);
    map.setZoom(11);
  });
  $(".DE__adress-1").on("click", function () {
    newLocation(48.1599229923438, 11.506818739219947);
    map.setZoom(11);
  });
  $(".DE__adress-2").on("click", function () {
    newLocation(52.517612112062984, 13.345776811434536);
    map.setZoom(11);
  });
}
