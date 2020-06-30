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
}

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
    if ( 10 <= now_hour && now_hour <= 19 ){
		$('.button_speak').children('img').attr('src', './img/button_sf2_active@2x.png');
		$('.speak_inactive').css('display','none');
		$('.speak_active').css('display','block');
    } else {
		$('.button_speak').children('img').attr('src', './img/button_sf2_inactive@2x.png');
		$('.speak_active').css('display','none');
		$('.speak_inactive').css('display','block');
    }
})