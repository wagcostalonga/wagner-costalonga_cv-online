$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus(); 
          };
        });
      }
    }
  });

  $(window).scroll(function(){
    let position = $(this).scrollTop();
    console.log(position);
     if(position >= 100) {
       $('home__anim-1').addClass('from-left');
       $('home__anim-2').addClass('from-left--delay');
   } else {
       $('home__anim-1').removeClass('from-left');
       $('home__anim-2').removeClass('from-left--delay'); 
   }

    if(position >=100) {
      $('.perfil__anim').addClass('from-right');
    } else {
      $('.perfil__anim').removeClass('from-right');
    }

    if(position >=2100) {
      $('.habilidades__anim').addClass('from-left');
    } else {
      $('.habilidades__anim').removeClass('from-left');
    }

    if(position >=5600) {
      $('.contato__anim').addClass('from-right');
    } else {
      $('.contato__anim').removeClass('from-right');
    }
  });

  $(document).ready(function() {
    $("#navbar").click();
  });