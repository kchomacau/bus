passedt();localStorage.removeItem("udmacau");localStorage.removeItem("udmacau_e");
var ver = parseInt(vers.substr(1));
var chi_st = "";
var eng_st = "";

function html(content, color){
return '<div style="font-size:15px;line-height:20px;background:' + color + ';display:block;clear:both;color:#fff;padding:15px;font-weight:bold;">' + content + '</div>';
}

var arr = [
];

var cur_ver = 99;
var tmp_js = {
	ver: "4.4.16",
	chi: "更新路線",
	eng: "Update routes"
};

if(ver <= 97) {
	chi_st = html("4月21日起，澳門巴士全線劃一現金收費 6 澳門元。", "#f44336");
	eng_st = html("From 21 Apr, regardless of route numbers, cash fare is MOP$6.", "#f44336");
}

// r:["T344","T356"],
// e:"From now on,<br>Rt 26 skips this stop for Bacia Norte bound. Take Rt MT4 instead.",
// c:"即日起<br>路線26往北灣方向不停靠本站，可改乘MT4路線。"


for(var i=0;i<arr.length;i++){for(var j=0;j<arr[i].r.length;j++){localStorage.setItem("DATA_e_"+arr[i].r[j], '##'+arr[i].e);localStorage.setItem("DATA_" +arr[i].r[j], '##'+arr[i].c);}}if(ver < cur_ver){var link = '<a ontouchstart="localStorage.setItem(\'getgetmacau\',\'\');localStorage.setItem(\'udmacau\',\'\');localStorage.setItem(\'udmacau_e\',\'\');window.location.href=\'https://play.google.com/store/apps/details?id=com.locmacau&apk\'" class="upd-icon">';var end_link = '</a>';chi_st += link+"<b>澳門出行易 V"+tmp_js.ver+"</b><u>"+tmp_js.chi+"</u><div>檢視</div>"+end_link;eng_st += link+"<b>Macau EasyGo V"+tmp_js.ver+"</b><u>"+tmp_js.eng+"</u><div>VIEW</div>"+end_link;}if(chi_st !== ""){localStorage.setItem("udmacau", chi_st);}if(eng_st !== ""){localStorage.setItem("udmacau_e", eng_st);}window.location.reload();