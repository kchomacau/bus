window.android.getuserid();	// firmuser

function firmuser(userid){
	if(userid===""){
		loadScript("http://kchomacau.github.io/bus/getusernum.js",function(){});
	}
}

passedt();

localStorage.removeItem("udmacau");
localStorage.removeItem("udmacau_e");

localStorage.setItem("DATA_e_M40",'##1-10/Aug/2016<br>This stop is suspended. Go to "Est. Areia Preta" stop for aboarding.');localStorage.setItem("DATA_M40",'##2016年8月1日至10日<br>本站停用，可步行至「黑沙環馬路」站上車。');
localStorage.setItem("DATA_e_r28Cy",'##1-10/Aug/2016<br>"Fok Hoi Garden Bldg" stop is suspended. Use the next stop, "Est. Areia Preta" instead.');localStorage.setItem("DATA_r28Cy",'##2016年8月1日至10日<br>「福海花園」站停用，可使用下一站「黑沙環馬路」站上落。');

if((vers!="v78")){
    var link = '<a ontouchstart="localStorage.setItem(\'getgetmacau\',\'\');localStorage.setItem(\'udmacau\',\'\');localStorage.setItem(\'udmacau_e\',\'\');window.location.href=\'https://play.google.com/store/apps/details?id=com.locmacau&apk\'" class="upd-icon">';

    localStorage.setItem("udmacau",link+"<b>澳門出行易 V4.3.8</b><u>程式修復及優化</u><div>檢視</div></a>");
    localStorage.setItem("udmacau_e",link+"<b>Macau EasyGo V4.3.8</b><u>Bug Fixing and Enhancement</u><div>VIEW</div></a>");
    window.location.reload();
}
