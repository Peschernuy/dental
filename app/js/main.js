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

});

