$(function(){
    // Скрипт анимации
    new WOW().init();

    // Модальное окно
$('#button').on('click', function(){
    $('#modal').addClass('modal_active');
});

$('#overlay').on('click', function(){
    $('#modal').removeClass('modal_active');
});

$('#close').on('click', function(){
    $('#modal').removeClass('modal_active');
});

        // Кнопка вверх
var btnUp = $('.button-up');

$(document).on('scroll', function() {
    var top = $(this).scrollTop();

if (top > 200) {
    btnUp.fadeIn(500);
}
else {
    btnUp.fadeOut(500);
}
});

btnUp.on('click', function() {
    $('html').animate({
        scrollTop: 0
    }, 400);
});

     //      Слайдер

     $(".owl-carousel").owlCarousel({
        loop:true,
        margin: 30,
        nav:true,
        
        items: 3,
        dots: false,
        navContainerClass: 'arrows portfolio__arrows',
        navClass: ['arrows__left', 'arrows__right'],
        navText: ['<img src="img/portfolio/left-arrow.png">',
         '<img src="img/portfolio/right-arrow.png">'],

        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 600 up
            600 : {
                items: 2
            },
            // breakpoint from 1200 up
            1200 : {
                items: 3
            }
        }
        

     });

      // Валидация формы
      $.validator.setDefaults({
          highlight: function(element) {
              $(element)
              .closest('.brif__input')
              .addClass('has-invalid');
          },
          unhighlight: function(element) {
            $(element)
            .closest('.brif__input')
            .removeClass('has-invalid');
        }
      });
      $("#brif-form").validate({
        errorElement: "div",
        errorClass: "invalid",
        rules: {
            username: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            phone: "required",
            email: {
                required: true,
                email: true
                }
            },
            messages: {
                username: "Укажите ваше имя",
                phone: "Нам нужен ваш номер телефона",
                email: "Нам нужен ваш email",
            }

      });


    //   Маска для телефона
    $('.phone').mask('+7 (999) 999-99-99');

     //   Обработка и отправка формы Через Ajax
     $('#offer-form').on('submit', function(event) {
         event.preventDefault();
         $.ajax({
            url: 'mail.php',
            type: 'POST',
            data: $(this).serialize(),
            success: function(data) {
                console.log(data);
            }
         });
     });
  
});