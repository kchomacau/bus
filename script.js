passedt();localStorage.removeItem("udmacau");localStorage.removeItem("udmacau_e");var ver = parseInt(vers.substr(1));

var begin_u = '<strong style="font-weight:normal;text-decoration:underline">';
var end_u = '</strong>';

var arr = [
	{
		r:["M155"],
		e:'18-27 Apr 2017<br>Due to roadwork, for aboarding (except Rt 5), you need to go "Garden of Comendador Ho Yin" stop.',
		c:"18-27/4/2017<br>工程影響，除5路線以外，其餘路線需於「何賢公園」乘搭。"
	}
];

var cur_ver = 88;
var tmp_js = {
	ver: "4.4.8",
	chi: "更新路線",
	eng: "Update Routes"
};

if(ver < cur_ver){
	
	arr.push(
		{
			r:["r5x"],
			e:"<strong>Diverted</strong><br>Skips Av. Coronel Mesquita. Go Horta e Costa for this route.",
			c:"<strong>改道</strong><br>本線不再行經美副將，請前往高士德乘搭。"
		},
		{
			r:["r7x"],
			e:"<strong>Diverted</strong><br>Skips San Malo <-> Barra. Take Rt 2 instead.",
			c:"<strong>改道</strong><br>本線不再行經新馬路至媽閣，請改乘2路線。"
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
