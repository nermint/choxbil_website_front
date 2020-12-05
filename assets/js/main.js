


$(document).ready(function(){
  $('.preloader').fadeOut();
});


$(document).ready(function(){
  $('.details').click(function(){
    $('body').addClass('overflow-property');
    $('.popup-wrapper').fadeIn();
  });
});

$(document).ready(function(){
  $(".close-popup").click(function(){
    $('body').removeClass('overflow-property');
     $('.popup-wrapper').fadeOut();
  });
});

$(document).ready(function(){
    // window scroll
    $(window).scroll(function(){
      if($(this).scrollTop() > 200){
        $('.scrollTop').fadeIn();
      }else{
        $('.scrollTop').fadeOut();
      }
    });

    //smooth scrolling to top
    $('.scrollTop').click(function(){
      $('html,body').animate(
        {scrollTop:0},1000
      )
    });

    // active link
    $('.navbar-side ul li a').filter(function(){
      return this.href==location.href
    }).parent().addClass('active').siblings().removeClass('active');
    

   

});




$(document).ready(function(){
  $('.pagination li a').filter(function(){
    return this.href==location.href
  }).parent().addClass('active').siblings().removeClass('active');
});




