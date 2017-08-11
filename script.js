passedt();localStorage.removeItem("udmacau");localStorage.removeItem("udmacau_e");var ver = parseInt(vers.substr(1));

if(ver < 95){

var begin_style = '<div style="font-size: 17px;line-height:110%;background: limegreen;display:block;clear:both;color: #222;padding: 12px;font-weight: bold;">';
var end_style = "</div>";
var chineseWish = begin_style + '最新通知(11/8 10:20 am)<br>最新修復版本(V4.4.12C)仍在審核中，請不必急於更新。' + end_style;
var englishWish = begin_style + 'Latest News (11 Aug 10:20 am)<br>The latest bug fixing version (V4.4.12C) is under validation. You don\'t need to update now.' + end_style;

		localStorage.setItem("udmacau",chineseWish);
		localStorage.setItem("udmacau_e",englishWish);
		window.location.reload();
		
}