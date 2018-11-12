passedt();localStorage.removeItem("udmacau");localStorage.removeItem("udmacau_e");
var ver = parseInt(vers.substr(1));
var chi_st = "";
var eng_st = "";

function html(content, color){
return '<div style="font-size:14px;line-height:20px;background:' + color + ';display:block;clear:both;color:#fff;padding:15px;">' + content + '</div>';
}

var arr = [
];

var cur_ver = 103;
var tmp_js = {
	ver: "4.4.21",
	chi: "更新路線 2018-11",
	eng: "Update routes 2018-11"
};

if(ver === cur_ver) {
	chi_st = html("致支持者：您正在使用的這個版本將是現階段「澳門出行易」的最後一個版本，感謝您四年以來的支持，再見。 - 2018-11-12", "#607d8b");
	eng_st = html("To Whom Loves This App: This should be the last update. Thanks for your support over these 4 years. See you. - 2018 Nov 12", "#607d8b");
}

// if(ver < cur_ver) {
// 	chi_st = html("路線有大改動，請即更新至最新版。", "#f44336");
// 	eng_st = html("Routes are drastically changed. Update now!", "#f44336");
// }

// r:["T344","T356"],
// e:"From now on,<br>Rt 26 skips this stop for Bacia Norte bound. Take Rt MT4 instead.",
// c:"即日起<br>路線26往北灣方向不停靠本站，可改乘MT4路線。"


for(var i=0;i<arr.length;i++){for(var j=0;j<arr[i].r.length;j++){localStorage.setItem("DATA_e_"+arr[i].r[j], '##'+arr[i].e);localStorage.setItem("DATA_" +arr[i].r[j], '##'+arr[i].c);}}if(ver < cur_ver){var link = '<a ontouchstart="localStorage.setItem(\'getgetmacau\',\'\');localStorage.setItem(\'udmacau\',\'\');localStorage.setItem(\'udmacau_e\',\'\');window.location.href=\'https://play.google.com/store/apps/details?id=com.locmacau&apk\'" class="upd-icon">';var end_link = '</a>';chi_st += link+"<b>澳門出行易 V"+tmp_js.ver+"</b><u>"+tmp_js.chi+"</u><div>檢視</div>"+end_link;eng_st += link+"<b>Macau EasyGo V"+tmp_js.ver+"</b><u>"+tmp_js.eng+"</u><div>VIEW</div>"+end_link;}if(chi_st !== ""){localStorage.setItem("udmacau", chi_st);}if(eng_st !== ""){localStorage.setItem("udmacau_e", eng_st);}window.location.reload();