passedt();localStorage.removeItem("udmacau");localStorage.removeItem("udmacau_e");var ver = parseInt(vers.substr(1));

var begin_u = '<strong style="font-weight:normal;text-decoration:underline">';
var end_u = '</strong>';

var arr = [
	{
		r:["T368","T324","T347","T362","T364","T366"],
		e:"From now on,<br>Rt 25 skips this stop. Take Rt 26A instead.",
		c:"即日起，<br>路線25不停本站，可改乘路線26A。"
	},
	{
		r:["T367","T365","T363","T325","T339"],
		e:"From now on,<br>Rt 25 skips this stop. Take Rt 25X instead.",
		c:"即日起，<br>路線25不停本站，可改乘路線25X。"
	},
	{
		r:["M1"],
		e:"From now on,<br>Bus stop for Rt 51 and 59 is located beside Taxi Pick-up Point. Take escalator or walk upstairs, then turn right.",
		c:"即日起，<br>路線51及59的總站將改於的士上客站旁，請搭扶手梯往上至地面並轉右。"
	},
	{
		r:["M126","M127","M125"],
		e:"Since Rt MT4 is extended,<br>you may take Rt 26A (Praia Hac Sa bound) to Venetian in case you cannot get on the bus.",
		c:"路線MT4已被延長，<br>若未能上車，可乘坐路線26A(往黑沙方向)前往威尼斯人一帶。"
	},
	{
		r:["M136","M139","M184","M188","M203"],
		e:"Since Rt MT4 is extended,<br>you may take Rt 21A (Praia Hac Sa bound) to Venetian at the opposite bus stop in case you cannot get on the bus.",
		c:"路線MT4已被延長，<br>若未能上車，可到對面站點乘坐路線21A(往黑沙方向)前往威尼斯人一帶。"
	},
	{
		r:["M198"],
		e:"Since Rt MT4 is extended,<br>you may take Rt 21A (Praia Hac Sa bound) to Venetian at Barra Terminus in case you cannot get on the bus.",
		c:"路線MT4已被延長，<br>若未能上車，可到媽閣總站乘坐路線21A(往黑沙方向)前往威尼斯人一帶。"
	},
	{
		r:["rMT4y"],
		e:"From now on,<br>\"Rua Norte do Patane/Bacia Norte do Patane\" is skipped. Use \"Fai Chi Kei Social Housing\" stop instead.",
		c:"即日起，<br>路線MT4不停靠北灣總站，可於「筷子基社屋」下車。"
	},
	{
		r:["rMT4x"],
		e:"From now on,<br>\"Rua Norte do Patane/Bacia Norte do Patane\" is skipped. Use \"Rua da Doca Seca\" stop (<a href=\"javascript:full_e(\'22.206895,113.540333\',\'Rua da Doca Seca\')\" style=\"color:#0097ff\">Click here to view offline map of the stop</a>) instead.",
		c:"即日起，<br>路線MT4不停靠北灣總站，可於「船澳街」(<a href=\"javascript:full(\'22.206895,113.540333\',\'船澳街\')\" style=\"color:#0097ff\">離線地圖看位置</a>)上車。",
	},
	{
		r:["M95"],
		e:"From now on,<br>Rt MT4 skips this stop. Use \"Rua da Doca Seca\" stop (<a href=\"javascript:full_e(\'22.206895,113.540333\',\'Rua da Doca Seca\')\" style=\"color:#0097ff\">Click here to view offline map of the stop</a>) instead.",
		c:"即日起，<br>路線MT4不停靠本站，可於「船澳街」(<a href=\"javascript:full(\'22.206895,113.540333\',\'船澳街\')\" style=\"color:#0097ff\">離線地圖看位置</a>)上車。",
	},
	{
		r:["r25x"],
		e:"From now on,<br>\"Av. Olimpica\" to \"Est. Baia N. S. Esperanca\" (total 6 stops) are skipped. Take Rt 25X or 26A instead.",
		c:"即日起，<br>本線不行經奧林匹克大馬路至望德聖母灣路段(共六站受影響)，可改搭25X或26A路線。",
	},
	{
		r:["r25y"],
		e:"From now on,<br>\"Est. Baia N. S. Esperanca\" to \"Garden of Flower City\" (total 5 stops) are skipped. Take Rt 25X instead.",
		c:"即日起，<br>本線不行經望德聖母灣至花城公園路段(共五站受影響)，可改搭25X路線。",
	}
];

for(var i=0;i<arr.length;i++){for(var j=0;j<arr[i].r.length;j++){localStorage.setItem("DATA_e_"+arr[i].r[j], '##'+arr[i].e);localStorage.setItem("DATA_" +arr[i].r[j], '##'+arr[i].c);}}

var cur_ver = 85;

	if(ver < cur_ver){

		var tmp_js = {
			ver: "4.4.5",
			chi: "更新MT2路線",
			eng: "Update Rt MT2"
		};

		var link = '<a ontouchstart="localStorage.setItem(\'getgetmacau\',\'\');localStorage.setItem(\'udmacau\',\'\');localStorage.setItem(\'udmacau_e\',\'\');window.location.href=\'https://play.google.com/store/apps/details?id=com.locmacau&apk\'" class="upd-icon">';
		var end_link = '</a>';
		localStorage.setItem("udmacau",link+"<b>澳門出行易 V"+tmp_js.ver+"</b><u>"+tmp_js.chi+"</u><div>檢視</div>" + end_link);
		localStorage.setItem("udmacau_e",link+"<b>Macau EasyGo V"+tmp_js.ver+"</b><u>"+tmp_js.eng+"</u><div>VIEW</div>" + end_link);
		window.location.reload();
	}
