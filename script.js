passedt();localStorage.removeItem("udmacau");localStorage.removeItem("udmacau_e");var ver = parseInt(vers.substr(1));

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

var begin_u = '<strong style="font-weight:normal;text-decoration:underline">';
var end_u = '</strong>';

var arr = [
	{
		r:["r6Bx","r26x","r26y"],
		e:"2016 Dec 31 20:00-Last Departure<br>This route skips Macau Tower. For Macau Tower, take another route.",
		c:"2016年12月31日晚上八時至尾班車<br>本線不行經旅遊塔，請改乘其他路線。"
	},
	{
		r:["M172B"],
		e:"2016 Dec 31 21:30(Appr.)-01:00<br>You may take rt 32X for Macau Tower. (The first bus departs from Macau Tower at 21:00)",
		c:"2016年12月31日晚上約九時半至凌晨一時<br>您可乘搭32X路線前往旅遊塔。（首班車將於夜晚九時在旅遊塔開出）"
	},
	{
		r:["M177"],
		e:"2016 Dec 31 21:00-01:00<br>You may take rt 32X for Praca Ferreira Amaral.",
		c:"2016年12月31日晚上九時至凌晨一時<br>您可乘搭32X路線前往亞馬喇前地。"
	}
];

	// for old version, important changing.
	if(ver < 84){
		arr.push(
			{
				r:["rMT2x"],
				e:"Service changed<br>This route will return at Hotel Taipa Square. For Airport, take Rt MT1.",
				c:"服務調整<br>本線將於駿景酒店折返，前往機場請選乘MT1路線。"
			}
		);
	}
	if(ver < 83){
		arr.push(
			{
				r:["r39x"],
				e:"Service changed<br>Bus departs from "+begin_u+"Praca Ferreira Amaral"+end_u+". Edf Lago became a way stop of this route.",
				c:"服務調整<br>改為由"+begin_u+"亞馬喇前地"+end_u+"開出；湖畔大廈改為中途站。"
			},
			{
				r:["rMT5x"],
				e:"Timetable changed<br><strong><font color=crimson>No service on Sundays and public holidays.</font></strong>.",
				c:"班次調整<br><strong><font color=crimson>星期日及公眾假期停駛。</font></strong>"
			},
			{
				r:["M74"],
				e:"Important Notice<br>Due to route adjustment, Rt 7, 7A and 8 using this stop are going to <strong><font color=crimson>Hospital Kiang Wu</font></strong> (which is the reverse trip of the info listed below). For Rt 7A or 8 to Praca Ferreira Amaral, go to \""+begin_u+"Tap Seac Multisport Pavilion"+end_u+"\" stop. For Rt 7 to San Malo, go to \""+begin_u+"Tap Seac Plaza"+end_u+"\" stop.",
				c:"重要通知<br>由於路線調整，停靠本站的 7、7A及8路線是前往<strong><font color=crimson>鏡湖醫院</font></strong>的（即與下方列出的路線方向剛好相反）。乘搭7A及8路線前往亞馬喇前地，請步行至「"+begin_u+"塔石體育館"+end_u+"」站乘搭；乘搭7路線往新馬路，請步行至「"+begin_u+"塔石廣場"+end_u+"」站乘搭。"
			}
		);
	}

for(var i=0;i<arr.length;i++){for(var j=0;j<arr[i].r.length;j++){localStorage.setItem("DATA_e_"+arr[i].r[j], '##'+arr[i].e);localStorage.setItem("DATA_" +arr[i].r[j], '##'+arr[i].c);}}
