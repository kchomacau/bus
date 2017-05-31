passedt();localStorage.removeItem("udmacau");localStorage.removeItem("udmacau_e");var ver = parseInt(vers.substr(1));

var arr = [
	{
		r:["T431"],
		e:"From now on, <strong>Rt 73 skips this stop</strong><br>For Areia Preta, take Rt 52 or 71 to Praca Ferreira Amaral then transfer to Rt 73.",
		c:"即日起，<strong>路線73不停靠本站</strong><br>前往黑沙環的乘客請改乘52或71路線至亞馬喇後轉乘73。"
	},
	{
		r:["T430"],
		e:'From now on, <strong>Rt 73 skips this stop</strong><br>For UM, go "Ocean Plaza" stop and take Rt 71.',
		c:'即日起，<strong>路線73不停靠本站</strong><br>前往澳大的乘客請前往「海洋廣場」站乘搭71路線。'
	},
	{
		r:["r73x"],
		e:'From now on, "Sai Van Bridge/Av. do Oceano" stop (for Areia Preta bound) and "Ocean Gardens/Rose Court" stop (for UM bound) will be skipped. Take Rt 52 or 71 instead.',
		c:'即日起，本線不再停靠「西灣大橋/海洋大馬路」站（往黑沙環）及「海洋花園/玫瑰苑」（往澳大），請改乘52或71路線。'
	},
	{
		r:["T345"],
		e:'<strong>Bus stop relocation</strong><br>This stop is relocated to the ground floor of the new Taipa Ferry Terminal.',
		c:'<strong>站點搬遷</strong><br>本站已搬遷至新氹仔客運碼頭地面層。'
	}

];

var cur_ver = 90;
var tmp_js = {
	ver: "4.4.10",
	chi: "路線更新",
	eng: "Route Update"
};

if(ver < cur_ver){
	
	arr.push(
		
		{
			r:["rMT5x"],
			e:"<strong>Service Hour Changed</strong><br>From now on, service on Mon to Fri only.",
			c:"<strong>服務時間調整</strong><br>即日起，本線只於星期一至五運作。"
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
