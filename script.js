passedt();

localStorage.removeItem("udmacau");
localStorage.removeItem("udmacau_e");

localStorage.setItem("DATA_e_r2x",'##Since 2015/Nov/25<br>Bus stop "VENCESLAU MORAIS/EDF. AIRWAY" is added for Barra bound temporarily.');localStorage.setItem("DATA_r2x",'##2015年11月25日起<br>往媽閣方向臨時停靠「慕拉士/飛通大廈」站');
localStorage.setItem("DATA_e_r30x",'##2015/Dec/14 - 2016/Feb/11<br>Bus stop "AV. KWONG TUNG/JOCKEY CLUB" is suspended temporarily.');localStorage.setItem("DATA_r30x",'##2015年12月14日至2016年2月11日<br>不停靠「廣東大馬路/馬會」站');
localStorage.setItem("DATA_e_r6Bx",'##2015/Dec/17-31<br>Bus stop "YUET WAH COLLEGE" is suspended for Riviera Macau bound temporarily. Passengers may use "PAVILHÃO POLIDESPORTIVO TAP SEAC" instead.');localStorage.setItem("DATA_r6Bx",'##2015年12月17日至31日<br>往凱泉灣方向不停靠「粵華中學」站，請使用「塔石體育館」站上落。');
localStorage.setItem("DATA_e_r17x",'##2015/Dec/17-31<br>Bus stop "ESC. CHAN SUI KI" and "YUET WAH COLLEGE" are suspended for Cultural Centre bound temporarily. Passengers may use "JARDIM DA VITÓRIA" or "PAVILHÃO POLIDESPORTIVO TAP SEAC" instead.');localStorage.setItem("DATA_r17x",'##2015年12月17日至31日<br>往文化中心方向不停靠「陳瑞祺中學」、「粵華中學」站，請使用「得勝花園」或「塔石體育館」站上落。');
localStorage.setItem("DATA_e_r28Cx",'##2015/Dec/17-31<br>Bus stop "ESC. CHAN SUI KI" and "YUET WAH COLLEGE" are suspended for Cultural Centre bound temporarily. Passengers may use "JARDIM DA VITÓRIA" or "PAVILHÃO POLIDESPORTIVO TAP SEAC" instead.');localStorage.setItem("DATA_r28Cx",'##2015年12月17日至31日<br>往回力方向不停靠「陳瑞祺中學」、「粵華中學」站，請使用「得勝花園」或「塔石體育館」站上落。');
localStorage.setItem("DATA_e_M72",'##2015/Dec/17-31<br>This stop is suspended temporarily. Please use "JARDIM DA VITÓRIA" instead.');localStorage.setItem("DATA_M72",'##2015年12月17日至31日<br>本站停用，請使用「得勝花園」站上落。');
localStorage.setItem("DATA_e_M149",'##2015/Dec/17-31<br>This stop is suspended temporarily. Please use "PAVILHÃO POLIDESPORTIVO TAP SEAC" instead.');localStorage.setItem("DATA_M149",'##2015年12月17日至31日<br>本站停用，請使用「塔石體育館」站上落。');
localStorage.setItem("DATA_e_r6Ax",'##Since 2015/Nov/25<br>Bus stop "VENCESLAU MORAIS/EDF. AIRWAY" is added for Hospital S. Januario bound temporarily.<br>&nbsp;<br>2015/Dec/17-31<br>Bus stop "YUET WAH COLLEGE" is suspended for P. SERENIDADE bound temporarily. Passengers may use "PAVILHÃO POLIDESPORTIVO TAP SEAC" instead.');localStorage.setItem("DATA_r6Ax",'##2015年11月25日起<br>往山頂醫院方向臨時停靠「慕拉士/飛通大廈」站<br>&nbsp;<br>2015年12月17日至31日<br>往順景廣場方向不停靠「粵華中學」站，請使用「塔石體育館」站上落。');





if((vers!="v67")){
    var link = '<a ontouchstart="localStorage.setItem(\'getgetmacau\',\'\');localStorage.setItem(\'udmacau\',\'\');localStorage.setItem(\'udmacau_e\',\'\');window.location.href=\'https://play.google.com/store/apps/details?id=com.locmacau&apk\'" class="upd-icon">';

    localStorage.setItem("udmacau",link+"<b>澳門出行易 V4.2.6</b><u>加大字體，更加好使</u><div>檢視</div></a>");
    localStorage.setItem("udmacau_e",link+"<b>Macau EasyGo V4.2.6</b><u>Make Text Larger</u><div>VIEW</div></a>");
    window.location.reload();
}


