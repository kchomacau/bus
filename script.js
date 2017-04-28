passedt();localStorage.removeItem("udmacau");localStorage.removeItem("udmacau_e");var ver = parseInt(vers.substr(1));

var begin_u = '<strong style="font-weight:normal;text-decoration:underline">';
var end_u = '</strong>';

var arr = [
	{
		r:["r37x"],
		e:'Route extension<br>From now on, Rt 37 departs at Chun Su Mei Bus Terminus (Near Rua do Cunha) every 30-35 minutes. Bus fee $2.8 wherever you aboard. For passengers at Rua de Lagos, go "Av. Sun Yat Sen/C.T.M." stop. For other passengers, no effect.',
		c:"路線擴展<br>由即日起，路線37將延伸至松樹尾總站（近官也街），並改為每30至35分鐘一班車、及劃一收費$2.8。原於「拉哥斯街」站乘車的乘客，可於「氹仔電訊」站上車；其餘站點的乘客不受影響。"
	},
	{
		r:["M1"],
		e:'Passengers of Rt 27 (to Ilha Verde), go "Border Gate Square" stop.',
		c:"乘搭路線27（往青洲）的乘客請前往位於地面的「關閘廣場」站。"
	},
	{
		r:["M207"],
		e:'Rt 27 skips this stop.',
		c:"路線27不再停靠本站。"
	},
	{
		r:["r27x"],
		e:'For Ilha Verde bound, no stop at "Av. Norte do Hipodromo" and "Border Gate". Use "Border Gate Square" stop instead (no effect for Areia Preta bound).',
		c:"往青洲方向不再停靠「馬場北大馬路」及「關閘總站」，請使用「關閘廣場」站（僅限往青洲方向）"
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
