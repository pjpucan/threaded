jQuery(document).ready(function($) {
  $(' .navbar-toggler-icon').on('click', function () {     
    $('.navbar-toggler-icon').toggleClass('active-menu');
	});

   // Main Slider
  $('.slider__carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    dots:     true, 
    arrows: true,
    speed: 500,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false
        }
      }
    ]
  });
});