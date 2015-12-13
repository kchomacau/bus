passedt();

localStorage.removeItem("udmacau");
localStorage.removeItem("udmacau_e");

localStorage.setItem("DATA_e_r2x",'##Since 2015/Nov/25<br>Bus stop "VENCESLAU MORAIS/EDF. AIRWAY" is added for Barra bound temporarily.');localStorage.setItem("DATA_r2x",'##2015年11月25日起<br>往媽閣方向臨時停靠「慕拉士/飛通大廈」站');
localStorage.setItem("DATA_e_r6Ax",'##Since 2015/Nov/25<br>Bus stop "VENCESLAU MORAIS/EDF. AIRWAY" is added for Barra bound temporarily.');localStorage.setItem("DATA_r6Ax",'##2015年11月25日起<br>往媽閣方向臨時停靠「慕拉士/飛通大廈」站');
localStorage.setItem("DATA_e_r30x",'##2015/Dec/14 - 2016/Feb/11<br>Bus stop "AV. KWONG TUNG/JOCKEY CLUB" is suspended temporarily.');localStorage.setItem("DATA_r30x",'##2015年12月14日 - 2016年2月11日<br>不停靠「廣東大馬路/馬會」站');


if((vers!="v67")){
    var link = '<a ontouchstart="localStorage.setItem(\'getgetmacau\',\'\');localStorage.setItem(\'udmacau\',\'\');localStorage.setItem(\'udmacau_e\',\'\');window.location.href=\'https://play.google.com/store/apps/details?id=com.locmacau&apk\'" class="upd-icon">';

    localStorage.setItem("udmacau",link+"<b>澳門出行易 V4.2.6</b><u>加大字體，更加好使</u><div>檢視</div></a>");
    localStorage.setItem("udmacau_e",link+"<b>Macau EasyGo V4.2.6</b><u>Make Text Larger</u><div>VIEW</div></a>");
    window.location.reload();
}


