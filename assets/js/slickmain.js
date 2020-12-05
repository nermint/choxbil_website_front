$(document).ready(function(){
    $(".regular").slick({
        autoplay : true,
        dots: true,
        infinite: true,
        slidesToShow: 8,
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
        ]
      });


});