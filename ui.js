$(document).ready(function(){
	$('.button_good').on('click',function(e){
		$('.button_good').children('img').attr('src', './img/button_redheart_noborder@2x.png');
	});

	$('.button_speak').modaal({
		content_source: '#button_speak'
	});

	$('#switch1').click(function(){
		if($('.caption_jp').css('display') == 'block'){
			$('.caption_jp').css('display','none');
			$('.title_jp').css('display','none');
			$('.caption_en').fadeIn();
			$('.title_en').fadeIn();
			if($('.caption_text').css('height') == '120px'){
				$('#moreread__label').attr('data-display', $('#moreread__label').data('text')[1]);
			}else{
				$('#moreread__label').attr('data-display', $('#moreread__label').data('text')[3]);
			}
		}else{
			$('.caption_en').css('display','none');
			$('.title_en').css('display','none');
			$('.caption_jp').fadeIn();
			$('.title_jp').fadeIn();
			if($('.caption_text').css('height') == '120px'){
				$('#moreread__label').attr('data-display', $('#moreread__label').data('text')[0]);
			}else{
				$('#moreread__label').attr('data-display', $('#moreread__label').data('text')[2]);
			}
		}
	});

	$('#moreread__switch').click(function(){
		if($('.caption_jp').css('display') == 'block'){
			if($('.caption_text').css('height') == '120px'){
				$('#moreread__label').attr('data-display', $('#moreread__label').data('text')[0]);
			}else{
				$('#moreread__label').attr('data-display', $('#moreread__label').data('text')[2]);
			}
		}else{
			if($('.caption_text').css('height') == '120px'){
				$('#moreread__label').attr('data-display', $('#moreread__label').data('text')[1]);
			}else{
				$('#moreread__label').attr('data-display', $('#moreread__label').data('text')[3]);
			}
		}
	});
	
	var now_hour = new Date().getHours();
    if ( 10 <= now_hour && now_hour <= 18 ){
		$('.button_speak').children('img').attr('src', './img/button_sf2_active@2x.png');
		$('.speak_inactive').css('display','none');
		$('.speak_active').css('display','block');
    } else {
		$('.button_speak').children('img').attr('src', './img/button_sf2_inactive@2x.png');
		$('.speak_active').css('display','none');
		$('.speak_inactive').css('display','block');
    }
})