passedt();localStorage.removeItem("udmacau");localStorage.removeItem("udmacau_e");var ver = parseInt(vers.substr(1));

var arr = [
];

var cur_ver = 94;
var tmp_js = {
	ver: "4.4.12B",
	chi: "修復GPS地圖顯示",
	eng: "Fix Bug: Map w/ GPS"
};

if(ver < cur_ver){
	
	arr.push(
{
r:["r11x","r22x","r25Xx","r26y","r26Ax","r30x","r33x","r34x","r35x","r37x","rMT1x","rMT3x"],
e:"Temp Diversion until Sep 2017:<br>Skip Taipa Village (Rua do Cunha). Install latest version for latest detail.",
c:"臨時改道至2017年9月<br>不進入氹仔舊城區。請安裝最新版本以檢視最新停站資訊。"
}
	);
	
}

for(var i=0;i<arr.length;i++){for(var j=0;j<arr[i].r.length;j++){localStorage.setItem("DATA_e_"+arr[i].r[j], '##'+arr[i].e);localStorage.setItem("DATA_" +arr[i].r[j], '##'+arr[i].c);}}

	if(ver < cur_ver){

		var link = '<a ontouchstart="localStorage.setItem(\'getgetmacau\',\'\');localStorage.setItem(\'udmacau\',\'\');localStorage.setItem(\'udmacau_e\',\'\');window.location.href=\'https://play.google.com/store/apps/details?id=com.locmacau&apk\'" class="upd-icon">';
		var end_link = '</a>';
		localStorage.setItem("udmacau",link+"<b>澳門出行易 V"+tmp_js.ver+"</b><u>"+tmp_js.chi+"</u><div>檢視</div>" + end_link);
		localStorage.setItem("udmacau_e",link+"<b>Macau EasyGo V"+tmp_js.ver+"</b><u>"+tmp_js.eng+"</u><div>VIEW</div>" + end_link);
		window.location.reload();
	}
