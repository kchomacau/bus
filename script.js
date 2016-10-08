passedt();

localStorage.removeItem("udmacau");
localStorage.removeItem("udmacau_e");

localStorage.setItem("DATA_e_T313",'##From 9 Oct 2016 20:00<br>Rt MT3 skips this bus stop. Use "Avenida Olimpica" bus stop instead.');localStorage.setItem("DATA_T313",'##2016年10月9日晚上八時起<br>MT3路線不再停靠本站，請到「奧林匹克大馬路」站乘搭。');
localStorage.setItem("DATA_e_rMT3x",'##From 9 Oct 2016 20:00<br>"Greenville Garden Bldg" is skipped. Use "Avenida Olimpica" bus stop instead.');localStorage.setItem("DATA_rMT3x",'##2016年10月9日晚上八時起<br>本線不再停靠「氹仔茵景園」站，可使用「奧林匹克大馬路」站上落。');


if((vers!="v81")){
    var link = '<a ontouchstart="localStorage.setItem(\'getgetmacau\',\'\');localStorage.setItem(\'udmacau\',\'\');localStorage.setItem(\'udmacau_e\',\'\');window.location.href=\'https://play.google.com/store/apps/details?id=com.locmacau&apk\'" class="upd-icon">';
    localStorage.setItem("udmacau",link+"<b>澳門出行易 V4.4.1</b><u>加入H2路線</u><div>檢視</div></a>");
    localStorage.setItem("udmacau_e",link+"<b>Macau EasyGo V4.4.1</b><u>Add Rt. H2</u><div>VIEW</div></a>");
    window.location.reload();
}

