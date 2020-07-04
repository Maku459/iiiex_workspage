//spaceというクエリを送るのでspaceがあれば、クエリはそのまま、
//そうでない時（クエリがない時、または文字列が違う時）はクエリをなくす
let query = window.location.search;
//◯◯==××という配列に分解
let queries  = query.slice(1).split("&");
let referer = false;
//配列を順番に回して、◯◯の方に"space"という文字列があったら、refererをtrueにして抜ける
for (let i=0; i<queries.length; i++) {
	if (queries[i].split("=")[0] == "space") {
		referer = true;
		break;
	}
}
//refererがfalseだったら、該当のクエリはないので、クエリの文字列を空にする
if (!referer) query = "";
//↑でqueryの文字列の処理が終わったので、リンクのURLの末尾にqueryという変数を追加してください
window.onload =function(){ 
	var target = document.getElementById("button_back");
	var url = `https://www.iiiexhibition.com/`;
	if (query) url = 'https://extra2020-dev.iiiexhibition.com/' + query;
	target.href = url;

	lottie.loadAnimation({
		container: body, // the dom element that will contain the animation
		renderer: 'svg',
		loop: false,
		autoplay: true,
		path: 'data.json' // the path to the animation json
	});
}

$(document).ready(function(){

	var w = $(window).width();
	var x = 480;
	if (w <= x && $('.square').length) {
		$('iframe').css('display','none');
		$('.square').css('display','block');
	}

	$('.button_good').on('click',function(e){
		$('.button_good').children('img').attr('src', 'https://object-storage.tyo2.conoha.io/v1/nc_7d0030b822e246239683a325ebfb1974/iiiex/works/src/img/button_redheart_noborder%402x.png');
	});

	$('.button_speak').modaal({
		content_source: '#button_speak'
	});

	$('.speak_active > a > img').on('click',function(e){
		console.log("close")
		$('.button_speak').modaal('close');
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
    if ( 11 <= now_hour && now_hour <= 19 ){
		$('.button_speak').children('img').attr('src', 'https://object-storage.tyo2.conoha.io/v1/nc_7d0030b822e246239683a325ebfb1974/iiiex/works/src/img/button_sf2_active%402x.png');
		$('.speak_inactive').css('display','none');
		$('.speak_active').css('display','block');
    } else {
		$('.button_speak').children('img').attr('src', 'https://object-storage.tyo2.conoha.io/v1/nc_7d0030b822e246239683a325ebfb1974/iiiex/works/src/img/button_sf2_inactive%402x.png');
		$('.speak_active').css('display','none');
		$('.speak_inactive').css('display','block');
    }
})