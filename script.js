passedt();localStorage.removeItem("udmacau");localStorage.removeItem("udmacau_e");

if(vers!="v83"){

	var tmp_js = {
		ver: "4.4.3",
		chi: "路線及地圖更新",
		eng: "Update Routes and Maps"
	};

	var link = '<a ontouchstart="localStorage.setItem(\'getgetmacau\',\'\');localStorage.setItem(\'udmacau\',\'\');localStorage.setItem(\'udmacau_e\',\'\');window.location.href=\'https://play.google.com/store/apps/details?id=com.locmacau&apk\'" class="upd-icon">';
	localStorage.setItem("udmacau",link+"<b>澳門出行易 V"+tmp_js.ver+"</b><u>"+tmp_js.chi+"</u><div>檢視</div></a>");
	localStorage.setItem("udmacau_e",link+"<b>Macau EasyGo V"+tmp_js.ver+"</b><u>"+tmp_js.eng+"</u><div>VIEW</div></a>");
	window.location.reload();
}

			// for old version, important changing.
			if(vers!="v83"){


var arr = [
	
	{
		r:["r39Xx"],
		e:"Service changed<br>Bus departs from Praca Ferreira Amaral. Edf Lago became a way stop of this route.",
		c:"服務調整<br>改為由亞馬喇前地開出；湖畔大廈改為中途站。"
	},
	{
		r:["rMT5x"],
		e:"Timetable changed<br><font color=crimson>No service on Sundays and public holidays.</font></strong>.",
		c:"班次調整<br><font color=crimson>星期日及公眾假期停駛。</font></strong>"
	},
	{
		r:["M74"],
		e:"Important Notice<br>Due to route adjustment, Rt 7, 7A and 8 using this stop are going to <font color=crimson>Hospital Kiang Wu</font> (which is the reverse trip of the info listed below). For Rt 7A or 8 to Praca Ferreira Amaral, go to \"Tap Seac Multisport Pavilion\" stop. For Rt 7 to San Malo, go to \"Tap Seac Plaza\" stop.",
		c:"重要通知<br>由於路線調整，停靠本站的 7、7A及8路線是前往<font color=crimson>鏡湖醫院</font>的（即與下方列出的路線方向剛好相反）。乘搭7A及8路線前往亞馬喇前地，請步行至「塔石體育館」站乘搭；乘搭7路線往新馬路，請步行至「塔石廣場」站乘搭。"
	}

];
for(var i=0;i<arr.length;i++){for(var j=0;j<arr[i].r.length;j++){localStorage.setItem("DATA_e_"+arr[i].r[j], '##'+arr[i].e);localStorage.setItem("DATA_" +arr[i].r[j], '##'+arr[i].c);}}


			}