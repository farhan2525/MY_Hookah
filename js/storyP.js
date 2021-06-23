$('.banner_slider').slick({
    dots: false,
    infinite: false,
    arrows:true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:'<i class="fas fa-angle-left prev"></i>',
    nextArrow:'<i class="fas fa-angle-right next"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
          dots:true, 
        }
      }
    ]
  });
  $(document).ready(function(){
    $('.venobox').venobox(); 
  });
  $('.counter').counterUp();
  $('.team_slider').slick({
    dots: true,
    infinite: false,
    arrows:false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });