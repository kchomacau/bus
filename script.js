passedt();localStorage.removeItem("udmacau");localStorage.removeItem("udmacau_e");function checkVar(){
	
if(vers!="v82"){

	var ver = "4.4.2"
	var chi = "路線更新";
	var eng = "Update Routes"

var link = '<a ontouchstart="localStorage.setItem(\'getgetmacau\',\'\');localStorage.setItem(\'udmacau\',\'\');localStorage.setItem(\'udmacau_e\',\'\');window.location.href=\'https://play.google.com/store/apps/details?id=com.locmacau&apk\'" class="upd-icon">';localStorage.setItem("udmacau",link+"<b>澳門出行易 V"+ver+"</b><u>"+chi+"</u><div>檢視</div></a>");localStorage.setItem("udmacau_e",link+"<b>Macau EasyGo V"+ver+"</b><u>"+eng+"</u><div>VIEW</div></a>");
window.location.reload();}}checkVar();function setTmpData(){var arr = [
	
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
		e:"<strong>Timetable changed</strong><br><font color=crimson>No service on Sundays and public holidays.</font>. Service hours (Mon to Sat) 07:00-21:00. Departs every 8-25 mins appr.",
		c:"<strong>班次調整</strong><br><font color=crimson>星期日及公眾假期停駛</font>，星期一至六改為 07:00-21:00 約每8-25分鐘開出一班。"
	},
	{
		r:["rN4x","rN4y"],
		e:"<strong>Timetable changed</strong><br>Departs every 20 mins appr.",
		c:"<strong>班次調整</strong><br>改為約每20分鐘開出一班。"
	}
	

];for(var i=0;i<arr.length;i++){for(var j=0;j<arr.r.length;j++){localStorage.setItem("DATA_e_"+arr.r[j], '##'+arr.e);localStorage.setItem("DATA_" +arr.r[j], '##'+arr.c);}}}setTmpData();