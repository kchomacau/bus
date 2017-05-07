passedt();localStorage.removeItem("udmacau");localStorage.removeItem("udmacau_e");var ver = parseInt(vers.substr(1));

var begin_u = '<div style="font-size: 15px;line-height:20px;background: #ccc;display:block;clear:both;color: #666;padding: 20px;font-weight: bold;">';
var end_u = '</div>';

chineseText = begin_u + '站點名稱更正：本版本內的C659站與C660站的站點名稱錯誤地對調了，往黑沙方向的站名正確應為「路環居民大會堂(C660)」，其反方向之站名為「路環街市(C659)」。' + end_u;
englishText = begin_u + 'Correction: The name of bus stop "C659" and "C660" is swapped incorrectly. The one for Hac-Sa bound is "Coloane Residents\' Association (C660)", while the opposite one is "Municipal Market of Coloane (C659)"' + end_u;

var arr = [
	
{
	r:["r25Xx"],
	e:'8-10 May 2017, "Nova Cidade de Cotai-1", "Nova Cidade de Cotai-2", "Est. F. de Lotus/Rotunda F. de Lotus-1" will be skipped. Use "Est. do Istmo/Sands Cotai Central" or "Rotunda Flor de Lotus-1" instead.',
	c:'五月八日至十日，本線不停靠「路氹新城-1」、「路氹新城-2」及「蓮花路/蓮花圓形地-1」站，請使用「連貫公路/金沙城中心」或「蓮花圓形地-1」站。'
},
{
	r:["r50y","rMT4x","rN5y"],
	e:'8-10 May 2017, "Est. F. de Lotus/Rotunda F. de Lotus-2", "Nave Desportiva/R. do Tiro" will be skipped. Use "Est. do Istmo/Studio City" instead.',
	c:'五月八日至十日，本線不停靠「蓮花路/蓮花圓形地-2」及「體育館/射擊路」站，請使用「連貫公路/新濠影匯」站。'
},
{
	r:["r50x"],
	e:'8-10 May 2017, the 4 stops between (included) "Av. da Nave Desportiva/Wynn Palace" and "Est. F. de Lotus/Rotunda F. de Lotus-1" will be skipped. Use "Est. do Istmo/Sands Cotai Central" or "Rotunda Flor de Lotus-1", or the temp stop located at northwest (left-top corner in map) of Wynn Palace instead.',
	c:'五月八日至十日，本線不停靠「體育館馬路/永利皇宮」至「蓮花路/蓮花圓形地-1」站之間的四個站，請使用「連貫公路/金沙城中心」或「蓮花圓形地-1」站，或設於永利皇宮西北（地圖的左上角）的臨時站上落。'
},
{
	r:["r51x"],
	e:'8-10 May 2017, "Light Rail Depot-1" and "Light Rail Depot-2" will be skipped. Use "Av. Dr. Henry Fok/Wynn Palace" instead.',
	c:'五月八日至十日，本線不停靠「輕軌車廠-1」及「輕軌車廠-2」站，請使用「霍英東馬路/永利皇宮」站上落。'
},
{
	r:["r59x"],
	e:'8-10 May 2017, "Light Rail Depot-1" and "Est. F. de Lotus/Rotunda F. de Lotus-1" will be skipped. Use "Rotunda Flor de Lotus-1" or "Av. Dr. Henry Fok/Wynn Palace" instead.',
	c:'五月八日至十日，本線不停靠「輕軌車廠-1」及「蓮花路/蓮花圓形地-1」站，請使用「蓮花圓形地-1」或「霍英東馬路/永利皇宮」站上落，上車時請留意車頭顯示的方向。'
},
{
	r:["r59y"],
	e:'8-10 May 2017, "Light Rail Depot-2" and "Est. F. de Lotus/Rotunda F. de Lotus-2" will be skipped. Use "Est. do Istmo/Studio City", or the temp stop opposite to "Av. Dr. Henry Fok/Wynn Palace" instead.',
	c:'五月八日至十日，本線不停靠「輕軌車廠-2」及「蓮花路/蓮花圓形地-2」站，請使用「連貫公路/新濠影匯」站，或設於「霍英東馬路/永利皇宮」對面之臨時站上落，上車時請留意車頭顯示的方向。'
},
{
	r:["rMT4y","rN5x"],
	e:'8-10 May 2017, the 4 stops between (included) "Av. da Nave Desportiva/Wynn Palace" and "Est. F. de Lotus/Rotunda F. de Lotus-1" will be skipped. Use "Est. do Istmo/Sands Cotai Central" or "Rotunda Flor de Lotus-1" instead.',
	c:'五月八日至十日，本線不停靠「體育館馬路/永利皇宮」至「蓮花路/蓮花圓形地-1」站之間的四個站，請使用「連貫公路/金沙城中心」或「蓮花圓形地-1」站上落。'
},
{
	r:["r9x","r16x"],
	e:'8-10 May 2017, "Rua da Penha" and "Riviera Hotel" will be skipped. Use "Av. Republica" or "Lilau Square" stop instead.',
	c:'五月八日至十日，本線不停靠「西坑街」及「濠璟酒店」站，請使用「民國馬路」或「亞婆井前地」站上落。'
},

		{
			r:["r25x"],
			e:'From 6 May 2017, this route terminates at Coloane, <strong style="color:crimson">no stop at Cheoc Van and Hac Sa Beach.</strong> Take Rt 26A instead.',
			c:'五月六日起，本線以路環市區為總站，<strong style="color:crimson">不再前往竹灣及黑沙海灘。</strong>請改乘26A路線。'
		},
		{
			r:["C669","C658","C675","C668","C678","C665","C663","C661"],
			e:'From 6 May 2017, <strong style="color:crimson">Rt 25 skips this stop.</strong> Take Rt 26A instead.',
			c:'五月六日起，<strong style="color:crimson">路線25不停靠本站。</strong>請改乘26A路線。'
		},
		{
			r:["M172D","T403","T402","T309","T375","T379","T359","T357","C688","C691","C652","C655","C657"],
			e:'From 6 May 2017, Rt 25 terminates at Coloane. For Cheoc Van and Hac Sa Beach, take Rt 26A instead.',
			c:'五月六日起，路線25以路環市區為總站。前往竹灣及黑沙海灘，請改乘26A路線。'
		}
];

var cur_ver = 89;
var tmp_js = {
	ver: "4.4.9",
	chi: "性能優化",
	eng: "Performance Enhancement"
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
		},
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
	else{
		
	    localStorage.setItem("udmacau",chineseText);
	    localStorage.setItem("udmacau_e",englishText);
	    window.location.reload();
	}
