jQuery(document).ready(function($){
	var $timeline_block = $('.cd-timeline-block');
  /*var $filter_picture = $('.filter-picture');
  var $filter_movie = $('.filter-movie');
  var $filter_location = $('.filter-location');

  $filter_picture.click(function() {
  	$(this).parent().parent().find('.cd-timeline-block').removeClass('is-hidden');
  	$(this).parent().parent().find('.cd-timeline-picture').removeClass('is-hidden');
  	$(this).parent().parent().find('.cd-timeline-movie').addClass('is-hidden').addClass('bounce-in');
  	$(this).parent().parent().find('.cd-timeline-location').addClass('is-hidden');
  });

  $filter_movie.click(function() {
  	
  	$(this).parent().parent().find('.cd-timeline-block').removeClass('is-hidden');
  	$(this).parent().parent().find('.cd-timeline-picture').addClass('is-hidden');
  	$(this).parent().parent().find('.cd-timeline-movie').removeClass('is-hidden').addClass('bounce-in');
  	$(this).parent().parent().find('.cd-timeline-location').addClass('is-hidden');
  });

  $filter_location.click(function() {
  	
  	$(this).parent().parent().find('.cd-timeline-block').removeClass('is-hidden');
  	$(this).parent().parent().find('.cd-timeline-picture').addClass('is-hidden');
  	$(this).parent().parent().find('.cd-timeline-movie').addClass('is-hidden');
  	$(this).parent().parent().find('.cd-timeline-location').removeClass('is-hidden').addClass('bounce-in');
  });*/

	//hide timeline blocks which are outside the viewport
	$timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		}
	});

  $('.cd-toggle').click(function(e) {
    e.preventDefault();
    $('.timeline-filters').find('.toggle-button').wrapAll('<div></div>').toggleClass('is-hidden');
  });

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
			}
		});
	});


});