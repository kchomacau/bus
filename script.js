passedt();

localStorage.removeItem("udmacau");
localStorage.removeItem("udmacau_e");

localStorage.setItem("DATA_e_r2x",'##2015/11/25起<br>Bus stop "VENCESLAU MORAIS/EDF. AIRWAY" is added for Barra bound temporarily.');localStorage.setItem("DATA_r2x",'##Since 2015/11/25<br>往媽閣方向臨時停靠「慕拉士/飛通大廈」站');
localStorage.setItem("DATA_e_r6Ax",'##2015/11/25起<br>Bus stop "VENCESLAU MORAIS/EDF. AIRWAY" is added for Barra bound temporarily.');localStorage.setItem("DATA_r6Ax",'##Since 2015/11/25<br>往媽閣方向臨時停靠「慕拉士/飛通大廈」站');






if((vers!="v66")){
    var link = '<a ontouchstart="localStorage.setItem(\'getgetmacau\',\'\');localStorage.setItem(\'udmacau\',\'\');localStorage.setItem(\'udmacau_e\',\'\');window.location.href=\'https://play.google.com/store/apps/details?id=com.locmacau&apk\'" class="upd-icon">';

    localStorage.setItem("udmacau",link+"<b>澳門出行易 V4.2.5</b><u>首頁顯示當前位置</u><div>檢視</div></a>");
    localStorage.setItem("udmacau_e",link+"<b>Macau EasyGo V4.2.5</b><u>Display Your Location On Homepage</u><div>VIEW</div></a>");
    window.location.reload();
}
