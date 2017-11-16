passedt();localStorage.removeItem("udmacau");localStorage.removeItem("udmacau_e");
var ver = parseInt(vers.substr(1));

function html(content, color){
return '<div style="font-size:15px;line-height:20px;background:' + color + ';display:block;clear:both;color:#fff;padding:15px;font-weight:bold;">' + content + '</div>';
}

var chi_st = html('2017年11月16日至19日賽車封路期間，各大路線將有較大改動，請留意巴士站及車廂通告。','crimson') + html('如果您在外港碼頭不知道要搭甚麼車，先乘12X路線到亞馬喇前地，那裡是澳門最多巴士線選擇的轉乘站。','#34a853');
var eng_st = html('During car race (2017 Nov 16 - 19), bus routes will be diverted. Pls pay attention to notices posted inside the bus.','crimson') + html("If you are at Macau Ferry Terminal and don\'t know what bus to take, take Rt. 12X to Praca Ferreira Amaral first. There are much more bus routes to choose.",'#34a853');

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

for(var i=0;i<arr.length;i++){for(var j=0;j<arr[i].r.length;j++){localStorage.setItem("DATA_e_"+arr[i].r[j], '##'+arr[i].e);localStorage.setItem("DATA_" +arr[i].r[j], '##'+arr[i].c);}}if(ver < cur_ver){var link = '<a ontouchstart="localStorage.setItem(\'getgetmacau\',\'\');localStorage.setItem(\'udmacau\',\'\');localStorage.setItem(\'udmacau_e\',\'\');window.location.href=\'https://play.google.com/store/apps/details?id=com.locmacau&apk\'" class="upd-icon">';var end_link = '</a>';chi_st += link+"<b>澳門出行易 V"+tmp_js.ver+"</b><u>"+tmp_js.chi+"</u><div>檢視</div>"+end_link;eng_st += link+"<b>Macau EasyGo V"+tmp_js.ver+"</b><u>"+tmp_js.eng+"</u><div>VIEW</div>"+end_link;}if(chi_st !== ""){localStorage.setItem("udmacau", chi_st);}if(eng_st !== ""){localStorage.setItem("udmacau_e", eng_st);}window.location.reload();