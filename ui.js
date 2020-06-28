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
			$('.caption_en').fadeIn();
		}else{
			$('.caption_en').css('display','none');
			$('.caption_jp').fadeIn();
		}
    });
})