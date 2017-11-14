passedt();localStorage.removeItem("udmacau");localStorage.removeItem("udmacau_e");var ver = parseInt(vers.substr(1));

var begin_u = '<div style="font-size: 15px;line-height:20px;background: crimson;display:block;clear:both;color: #fff;padding: 20px;font-weight: bold;">';
var end_u = '</div>';

chineseText = begin_u + '2017年11月16日至19日賽車封路期間，各大路線將有較大改動，請留意巴士站及車廂通告。' + end_u;
englishText = begin_u + 'During car race (2017 Nov 16 - 19), bus routes will be diverted. Pls pay attention to notices posted inside the bus.' + end_u;

var arr = [
];

var cur_ver = 96;
var tmp_js = {
	ver: "4.4.13",
	chi: "更新關閘區路線",
	eng: "Update routes around Border Gate"
};

if(ver < cur_ver){
}

for(var i=0;i<arr.length;i++){for(var j=0;j<arr[i].r.length;j++){localStorage.setItem("DATA_e_"+arr[i].r[j], '##'+arr[i].e);localStorage.setItem("DATA_" +arr[i].r[j], '##'+arr[i].c);}}

	if(ver < cur_ver){

		var link = '<a ontouchstart="localStorage.setItem(\'getgetmacau\',\'\');localStorage.setItem(\'udmacau\',\'\');localStorage.setItem(\'udmacau_e\',\'\');window.location.href=\'https://play.google.com/store/apps/details?id=com.locmacau&apk\'" class="upd-icon">';
		var end_link = '</a>';
		localStorage.setItem("udmacau",chineseText+link+"<b>澳門出行易 V"+tmp_js.ver+"</b><u>"+tmp_js.chi+"</u><div>檢視</div>" + end_link);
		localStorage.setItem("udmacau_e",englishText+link+"<b>Macau EasyGo V"+tmp_js.ver+"</b><u>"+tmp_js.eng+"</u><div>VIEW</div>" + end_link);
		window.location.reload();
	}
	else{
		
	    localStorage.setItem("udmacau",chineseText);
	    localStorage.setItem("udmacau_e",englishText);
	    window.location.reload();
	}
	