/* Скрипты модальных окон */
  $(document).ready(function() {

    /* Модальное окно: видео */
    $('.video-button').on('click', function(event) {
      event.preventDefault();
      $('.popup-video').fadeIn();
    });
    $('.popup-video_close').on('click', function(event) {
      event.preventDefault();
      $('.popup-video').fadeOut();
    });

    /* Модальное окно: заказать звонок */
    $('.header-call').on('click', function(event) {
      event.preventDefault();
      $('.popup-call').fadeIn();
    });
    $('.popup-call_close').on('click', function(event) {
      event.preventDefault();
      $('.popup-call').fadeOut();
    });

    /* Модальное окно: заказать VR BOX */
    $('.main-header_btn, .apps-block_btn').on('click', function(event) {
      event.preventDefault();
      $('.popup-box').fadeIn();
    });
    $('.popup-box_close').on('click', function(event) {
      event.preventDefault();
      $('.popup-box').fadeOut();
    });

    /* Модальное окно: задать вопрос */
    $('.link-block').on('click', function(event) {
      event.preventDefault();
      $('.popup-link').fadeIn();
    });
    $('.popup-link_close').on('click', function(event) {
      event.preventDefault();
      $('.popup-link').fadeOut();
    });

    /* Модальное окно: комплектация */
    $('.equipment-btn').on('click', function(event) {
      event.preventDefault();
      $('.popup-equipment').fadeIn();
    });
    $('.popup-equipment_close').on('click', function(event) {
      event.preventDefault();
      $('.popup-equipment').fadeOut();
    });

    $('.select-arrow').on('click', function(e) {
    	e.preventDefault();
    	$(this).toggleClass('select-arrow_active');
    });
  });



/* Скрипт остановки видео */
  	 $(document).ready(function() {
  	$('.popup-video_close').click(function(){  
  	  $('.popup-video_content').fadeOut(0);
  	  $('iframe').attr('src', $('iframe').attr('src'));
  	});
  });


/* Скрипт отправки */
    $('.form').submit(function(e){
      e.preventDefault();
      let th = $(this);
      let mess = $('.mess');
      let btn = th.find('.btn');
      btn.addClass('progress-bar-striped progress-bar-animated');

      $.ajax({
        url: 'sendmail.php',
        type: 'POST',
        data: th.serialize(),
        success: function(){
          btn.removeClass('progress-bar-striped progress-bar-animated');
          mess.html('<div class="alert alert-success">Сообщение успешно отправлено!</div>');
        }, error: function(){
          mess.html('<div class="alert alert-danger">Ошибка отправки!</div>');
          btn.removeClass('progress-bar-striped progress-bar-animated');
        }
    })  
  });
