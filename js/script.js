$(document).ready(function() {

// =============== Form Validation ===============

$('#contact-form').formValidation({
  framework: 'bootstrap',
  icon: {
    valid: 'glyphicon glyphicon-ok',
    invalid: 'glyphicon glyphicon-remove',
    validating: 'glyphicon glyphicon-refresh'
  },
  // List of fields and their validation rules
  fields: {
    NOMBRE: {
      validators: {
        notEmpty: {
          message: 'Se requiere un nombre'
        }
      }
    },
    EMPRESA: {
      validators: {
        notEmpty: {
          message: 'Se requiere un nombre de empresa'
        }
      }
    },
    EMAIL: {
      validators: {
        notEmpty: {
          message: 'Se requiere una dirección de correo electrónico'
        },
        emailAddress: {
          message: 'La dirección de correo electrónico no es válida'
        },
        regexp: {
          regexp: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
          message: 'La dirección de correo electrónico sólo puede ser del siguiente formato xyz@ejemplo.com'
        }
      }
    },
    TEL: {
      validators: {
        notEmpty: {
          message: 'Se requiere un teléfono'
        }
      }
    },
    MMERGE4: {
      validators: {
        notEmpty: {
          message: 'Se requiere un nombre de empresa'
        }
      }
    }
  }
  })
  .on('success.form.fv', function(e) {
    // Prevent form submission
    e.preventDefault();

    var $form = $('#contact-form');
    register($form);

    // ====== Use Ajax to submit form data to MAILCHIMP ========

    function register($form) {
      $.ajax({
        type: $form.attr('method'),
        url: "http://lache.us3.list-manage.com/subscribe/post-json?u=e6176f7abb276306fe67f2ba8&amp;id=5fc0d49b67&c=?",
        data: $form.serialize(),
        cache       : false,
        dataType    : 'json',
        contentType: "application/json; charset=utf-8",
        error       : function(err) { $('#notification_container').html('<div class="alert alert-warning">Could not connect to server. Please try again later.</div>'); },
        success     : function(data) {

          if (data.result != "success") {
            var message = data.msg.substring(4);
            $('#notification_container').html('<div class="alert alert-warning">'+message+'</div>');
          }

          else {
            var message = data.msg;
            $('#notification_container').html('<div class="alert alert-success">'+message+'</div>');
          }
        }
      });
    }
  });

// ============ Slick carousel ==============

  $('.logo-carousel').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.testimonies-carousel').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $('.team-carousel').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  });

// ============== Smooth scrolling ===============

$(function() {
  $('a[href*=#]:not([data-toggle="tab"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


$(function () {
  $("#animation-container").wordsrotator({
    autoLoop: true,             //auto rotate words
    randomize: false,               //show random entries from the words array
    stopOnHover: false,             //stop animation on hover
    changeOnClick: false,           //force animation run on click
    animationIn: "fadeInLeft",         //css class for entrace animation
    animationOut: "fadeOut",           //css class for exit animation
    speed: 4000,                //delay in milliseconds between two words
    words: ['Desarrollo', 'Validacion', 'bla']
  });
});

});
