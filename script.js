passedt();localStorage.removeItem("udmacau");localStorage.removeItem("udmacau_e");

if(vers!="v82"){

	var tmp_js = {
		ver: "4.4.2",
		chi: "路線更新",
		eng: "Update Routes"
	};


	var link = '<a ontouchstart="localStorage.setItem(\'getgetmacau\',\'\');localStorage.setItem(\'udmacau\',\'\');localStorage.setItem(\'udmacau_e\',\'\');window.location.href=\'https://play.google.com/store/apps/details?id=com.locmacau&apk\'" class="upd-icon">';
	localStorage.setItem("udmacau",link+"<b>澳門出行易 V"+tmp_js.ver+"</b><u>"+tmp_js.chi+"</u><div>檢視</div></a>");
	localStorage.setItem("udmacau_e",link+"<b>Macau EasyGo V"+tmp_js.ver+"</b><u>"+tmp_js.eng+"</u><div>VIEW</div></a>");
	window.location.reload();
}

var arr = [
	
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
		r:["M74"],
		e:"From Dec 2<br>Rt 7, 7A, 8 <font color=crimson><del>to Jai Alai (via Praca Ferreira Amaral)</del></font> skips this stop. Meanwhile, this stop is renamed as \"Escola S. Luso-Chinesa de L. G. Gomes\". Rt 8 <font color=crimson>to Ilha Verde (via Kiang Wu Hospital)</font> stops here.</font>",
		c:"2016年12月2日起<br>路線7、7A及8 <font color=crimson><del>往回力（經亞馬喇）</del></font> 不停靠本站；同日，本站更名為「高美士中葡中學」站，路線8 <font color=crimson>往青洲（經鏡湖醫院）</font> 新增停靠本站。"
	},
	{
		r:["r7x","r7Ax","r8x"],
		e:"From Dec 2<br>\"Tung Hei Kok Bldg\" stop is skipped.",
		c:"2016年12月2日起<br>本線不再停靠「東曦閣」站。"
	},
	{
		r:["r8y"],
		e:"From Dec 2<br><strong>\"Escola S. Luso-Chinesa de L. G. Gomes\"</strong> (originally \"Tung Hei Kok Bldg\" stop) is added to this route after \"Rua do Campo\" stop.",
		c:"2016年12月2日起<br>本線行經水坑尾後，將停靠<strong>「高美士中葡中學」</strong>（原「東曦閣」）站。"
	}
	
];
for(var i=0;i<arr.length;i++){for(var j=0;j<arr[i].r.length;j++){localStorage.setItem("DATA_e_"+arr[i].r[j], '##'+arr[i].e);localStorage.setItem("DATA_" +arr[i].r[j], '##'+arr[i].c);}}
