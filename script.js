passedt();localStorage.removeItem("udmacau");localStorage.removeItem("udmacau_e");
	
if(vers!="v82"){

	var tmp_js = {
		ver: "4.4.2",
		chi: "路線更新",
		eng: "Update Routes"
	};


var mt32X = "，該線於2016年11月11-13、17-20及25-27日提供服務，每十至十五分鐘由旅遊塔開出。";
var mt32X_e = " in <strong>19:00-23:00</strong> on the following days: <strong>2016 Nov 11-13, 17-20 and 25-27</strong>. Bus departs from Macau Tower every 10-15 mins appr.";

var link = '<a ontouchstart="localStorage.setItem(\'getgetmacau\',\'\');localStorage.setItem(\'udmacau\',\'\');localStorage.setItem(\'udmacau_e\',\'\');window.location.href=\'https://play.google.com/store/apps/details?id=com.locmacau&apk\'" class="upd-icon">';localStorage.setItem("udmacau",link+"<b>澳門出行易 V"+tmp_js.ver+"</b><u>"+tmp_js.chi+"</u><div>檢視</div></a>");localStorage.setItem("udmacau_e",link+"<b>Macau EasyGo V"+tmp_js.ver+"</b><u>"+tmp_js.eng+"</u><div>VIEW</div></a>");
window.location.reload();}var arr = [
	
	{
		r:["r5Xx"],
		e:"<strong>Timetable changed</strong><br>Service hours 07:00-09:30, 17:00-19:30.Departs every (Mon to Fri) 5-10 / (Sat) 12-15 mins appr.",
		c:"<strong>班次調整</strong><br>一至六 07:00-09:30 及 17:00-19:30，平日約每5-10分鐘 / 星期六約每12-15分鐘開出一班。"
	},
	{
		r:["r39Xx"],
		e:"<strong>Service changed</strong><br>Bus departs from Praca Ferreira Amaral every 10-20 mins appr. Edf Lago became a way stop of this route.",
		c:"<strong>服務調整</strong><br>改為約每10-20分鐘一班，由亞馬喇前地開出；湖畔大廈改作中途站。"
	},
	{
		r:["r56x"],
		e:"<strong>Timetable changed</strong><br>Bus departs every 12-20 mins appr.",
		c:"<strong>班次調整</strong><br>改為約每12-20分鐘開出一班。"
	},
	{
		r:["rH1x"],
		e:"<strong>Timetable changed</strong><br>Bus departs every 10-18 mins appr.",
		c:"<strong>班次調整</strong><br>改為約每10-18分鐘開出一班。"
	},
	{
		r:["rMT5x"],
		e:"<strong>Timetable changed<br><font color=crimson>No service on Sundays and public holidays.</font></strong>. Service hours (Mon to Sat) 07:00-21:00. Departs every 8-25 mins appr.",
		c:"<strong>班次調整<br><font color=crimson>星期日及公眾假期停駛</font></strong>，星期一至六改為 07:00-21:00 約每8-25分鐘開出一班。"
	},
	{
		r:["rN4x","rN4y"],
		e:"<strong>Timetable changed</strong><br>Departs every 20 mins appr.",
		c:"<strong>班次調整</strong><br>改為約每20分鐘開出一班。"
	},
	{
		r:["T365"],
		e:"Nov 12 2016 10:00-20:00<br>This stop is suspended. You may use \"Roundabout of Olympic Aquatic Centre\" stop.",
		c:"2016年11月12日 10:00-20:00<br>本站停用，您可使用「奧林匹克游泳館圓形地」站上落。"
	},
	{
		r:["M177","M181","M179"],
		e:"<strong>New route available</strong><br>You may take <strong>Rt 32X</strong> to Praca Ferreira Amaral" + mt32X_e,
		c:"<strong>新線提供服務</strong><br>您可選乘路線32X前往亞馬喇前地" + mt32X
	},
	{
		r:["M172B","M187","M199"],
		e:"<strong>New route available</strong><br>You may take <strong>Rt 32X</strong> to Macau Tower" + mt32X_e,
		c:"<strong>新線提供服務</strong><br>您可選乘路線32X前往旅遊塔" + mt32X
	}
	

];for(var i=0;i<arr.length;i++){for(var j=0;j<arr[i].r.length;j++){localStorage.setItem("DATA_e_"+arr[i].r[j], '##'+arr[i].e);localStorage.setItem("DATA_" +arr[i].r[j], '##'+arr[i].c);}}