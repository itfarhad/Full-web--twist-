
  $(document).ready(function(){
    $('.homepage-slides').owlCarousel({
      items:1,
      loop:true,
      nav:true,
      dots:true,
      navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
      autoplay:true,
    });

    $('.team-list').owlCarousel({
      items:3,
      margin:30,
      loop:true,
      nav:false,
      dots:true,
      autoplay:true,
    });
    $('.testimonial-list').owlCarousel({
      items:3,
      margin:30,
      loop:true,
      nav:false,
      dots:true,
      autoplay:true,
    });

    $('.logo-carousel').owlCarousel({
      items:5,
      margin:30,
      loop:true,
      nav:false,
      dots:false,
      autoplay:true,
    });


    $('.webdesign-skill-bar').circleProgress({
      value: 0.90,
      size: 214,
      fill: '#4022c8',
      thickness:6,
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('.skill-cunter-no').html(Math.round(90 * progress) + '<i>%</i>');
    });

    $('.webdevevlopment-skill-bar').circleProgress({
      value: 0.95,
      size: 214,
      fill: '#4022c8',
      thickness:6,
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('.skill-cunter-no').html(Math.round(95 * progress) + '<i>%</i>');
    });
    $('.graphicdesign-skill-bar').circleProgress({
      value: 0.84,
      size: 214,
      fill: '#4022c8',
      thickness:6,
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('.skill-cunter-no').html(Math.round(84 * progress) + '<i>%</i>');
    });

    $('.portfolio-list').isotope({
      layoutMode:'masonry',
      masonry:{
        columnWidth: '.col-md-3',
        horizontalOrder:false,
      }
    });
     

    $(".protfolio-filter li").on('click', function(){
      $(".protfolio-filter li").removeClass("active");
      $(this).addClass("active");

      var filterValue = $(this).attr("data-filter");

      $(".portfolio-list").isotope({
        filter: filterValue,
        layoutMode:'masonry',
        masonry:{
          columnWidth: '.col-md-3',
          horizontalOrder:false,
          }
      });
    });
  });
   
   