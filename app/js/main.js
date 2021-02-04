$(function(){
  


  $('.services__slider').slick({
  draggable: true, 
  slidesToShow: 3,
  slidesToScroll: 3,
  infinite: true,
  
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
    arrows: false

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
    slidesToScroll: 3,
    infinite: true,

  });
  
  $('.menu__btn').on('click', function(){
  $('.menu__list').toggleClass('menu__list--active');  
  });







});

