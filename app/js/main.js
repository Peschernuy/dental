$(function(){
  


  $('.services__slider').slick({ 
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  draggable: false,
  rows: 0,
  responsive:[
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,

      }
   },
    {
      breakpoint: 660,
      settings: {
        slidesToShow: 1,

      }
    },
  ]
  
  });

  $('.about__slider').slick({
    draggable: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    arrows: false

  });

  $('.specialists__inner').slick({
    draggable: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    dots: true,
    arrows: false,
    
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]

  });


  $('.advantages__slider').slick({
    draggable: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    arrows: false

  });
  
  $('.examples__slider').slick({
    draggable: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    rows:0,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,

        }
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,

        }
      },
    ]

  });
  
  $('.menu__btn').on('click', function(){
  $('.menu__list').toggleClass('menu__list--active');  
  });







});

