passedt();localStorage.removeItem("udmacau");localStorage.removeItem("udmacau_e");
var ver = parseInt(vers.substr(1));
var chi_st = "";
var eng_st = "";

function html(content, color){
return '<div style="font-size:15px;line-height:20px;background:' + color + ';display:block;clear:both;color:#fff;padding:15px;font-weight:bold;">' + content + '</div>';
}

var arr = [
];

var cur_ver = 96;
var tmp_js = {
	ver: "4.4.13",
	chi: "更新關閘區路線",
	eng: "Update routes around Border Gate"
};

arr.push(
{
r:["r26y"],
e:"From now on,<br>This route skips \"Airport Office\" and \"Macau Int'l Airport\" for Bacia Norte bound.",
c:"即日起<br>本線往北灣方向不停靠「機場倉庫」及「澳門機場」站。"
},
{
r:["T344","T356"],
e:"From now on,<br>Rt 26 skips this stop for Bacia Norte bound. Take Rt MT4 instead.",
c:"即日起<br>路線26往北灣方向不停靠本站，可改乘MT4路線。"
},
{
r:["r51Ax","r51Ay"],
e:"From now on,<br>You can aboard/alight at \"Taipa Ferry Terminal\" for both bound.",
c:"即日起<br>本線來回程均停靠北安碼頭。"
},
{
r:["r18x"],
e:"From now on,<br>Rt 18 departs from RUA DA SERENIDADE (near \"Rua 1 Iao Hon\" busstop).<br>&nbsp;<br>You may take Rt 18B for destinations except S. Lourenco at midway stops of Rt 18. Rt 18B follows the exact same stops until Macau Tower, then go to Barra Terminus directly.",
c:"即日起<br>路線18改由永定街開出（近「祐漢第一街」巴士站）。在本線之沿途站點，您可選乘18B路線（與路線18停站相同，唯18B停靠旅遊塔後將直接前往媽閣總站，不往風順堂區）。"
},
{
r:["r18y"],
e:"From now on,<br>Rt 18 terminates at RUA DA SERENIDADE (near \"Rua 1 Iao Hon\" busstop).<br>&nbsp;<br>You may take Rt 18B for destinations except San Malo and Rua Xavier Pereira at midway stops of Rt 18.",
c:"即日起<br>路線18改以永定街為總站（近「祐漢第一街」巴士站）。在本線之沿途站點，您可選乘18B路線（不包括前往新馬路及俾利喇街的乘客）。"
},
{
r:["r10Bx"],
e:"From now on,<br>Rt 10B departs and terminates at AVENIDA DO HIPODROMO (near traffic light closed to McDonald's at Border Gate).",
c:"即日起<br>路線10B以馬場大馬路為總站（近關閘麥當勞紅綠燈）。"
}
);

if(ver < cur_ver){
}

for(var i=0;i<arr.length;i++){for(var j=0;j<arr[i].r.length;j++){localStorage.setItem("DATA_e_"+arr[i].r[j], '##'+arr[i].e);localStorage.setItem("DATA_" +arr[i].r[j], '##'+arr[i].c);}}if(ver < cur_ver){var link = '<a ontouchstart="localStorage.setItem(\'getgetmacau\',\'\');localStorage.setItem(\'udmacau\',\'\');localStorage.setItem(\'udmacau_e\',\'\');window.location.href=\'https://play.google.com/store/apps/details?id=com.locmacau&apk\'" class="upd-icon">';var end_link = '</a>';chi_st += link+"<b>澳門出行易 V"+tmp_js.ver+"</b><u>"+tmp_js.chi+"</u><div>檢視</div>"+end_link;eng_st += link+"<b>Macau EasyGo V"+tmp_js.ver+"</b><u>"+tmp_js.eng+"</u><div>VIEW</div>"+end_link;}if(chi_st !== ""){localStorage.setItem("udmacau", chi_st);}if(eng_st !== ""){localStorage.setItem("udmacau_e", eng_st);}window.location.reload();