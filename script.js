passedt();

localStorage.removeItem("udmacau");
localStorage.removeItem("udmacau_e");

localStorage.setItem("DATA_e_r30x",'##2015/Dec/14 - 2016/Feb/11<br>Bus stop "Av. Kwong Tung/Jockey Club" is skipped.');localStorage.setItem("DATA_r30x",'##2015年12月14日至2016年2月11日<br>不停靠「廣東大馬路/馬會」站');
localStorage.setItem("DATA_e_r3Xx",'##From now on<br>Route 3X is also available in 20H00-23H00, buses depart every 6-10 min.');localStorage.setItem("DATA_r3Xx",'##即日起<br>本線新增晚上8時至11時的服務，約6至10分鐘開出一班車');
localStorage.setItem("DATA_e_r11x",'##2016/Jan/28-30, 10H00-16H00 daily<br>Bus stop "Rua de Aveiro" is skipped. You may use the prev stop, "Edf. Nam Sun" instead.');localStorage.setItem("DATA_r11x",'##2016年1月28日至30日 每日10H00-16H00<br>本線不停靠「亞威羅街」站，您可使用上一站「南新花園」站上落');
localStorage.setItem("DATA_e_r34y",'##2016/Jan/28-30, 10H00-16H00 daily<br>Bus stop "Rua de Aveiro" is skipped. You may use the prev stop, "Edf. Nam Sun" instead.');localStorage.setItem("DATA_r34y",'##2016年1月28日至30日 每日10H00-16H00<br>本線不停靠「亞威羅街」站，您可使用上一站「南新花園」站上落');
localStorage.setItem("DATA_e_T340",'##2016/Jan/28-30, 10H00-16H00 daily<br>This stop is temporary suspended. You may go to "Edf. Nam Sun" for aboarding.');localStorage.setItem("DATA_T340",'##2016年1月28日至30日 每日10H00-16H00<br>本站停用，您可前往「南新花園」站乘車。');
localStorage.setItem("DATA_e_r6Ax",'##2016/Jan/30 19H00-22H00<br>Bus stop "Yuet Wah College" is skipped. You may use "Tap Seac Multi-sports Pavilion" (the one near Tap Seac Plaza) instead.');localStorage.setItem("DATA_r6Ax",'##2016年1月30日 19H00-22H00<br>本線不停靠「粵華中學」站，您可使用設於愛都酒店前的「塔石體育館」站上落。');
localStorage.setItem("DATA_e_r6Bx",'##From now on<br>Route 3X is also available in 20H00-23H00, buses depart every 6-10 min.');localStorage.setItem("DATA_r6Bx",'##即日起<br>本線新增晚上8時至11時的服務，約6至10分鐘開出一班車');
localStorage.setItem("DATA_e_r17x",'##2016/Jan/28-30, 10H00-16H00 daily<br>Bus stops "Esc. Chan Sui Ki" and "Yuet Wah College" are skipped. You may use "Victory Garden" stop or "Tap Seac Multi-sports Pavilion" (the one near Tap Seac Plaza) instead.');localStorage.setItem("DATA_r17x",'##2016年1月28日至30日 每日10H00-16H00<br>本線不停靠「陳瑞祺中學」及「粵華中學」站，您可使用「得勝花園」站或設於愛都酒店前的「塔石體育館」站上落。');
localStorage.setItem("DATA_e_r28Cx",'##2016/Jan/28-30, 10H00-16H00 daily<br>Bus stop "Rua de Aveiro" is skipped. You may use the prev stop, "Edf. Nam Sun" instead.');localStorage.setItem("DATA_r28Cx",'##2016年1月28日至30日 每日10H00-16H00<br>本線不停靠「亞威羅街」站，您可使用上一站「南新花園」站上落');
localStorage.setItem("DATA_e_M72",'##2016/Jan/28-30, 10H00-16H00 daily<br>This stop is suspended temporarily. You may use "Victory Garden" stop instead.');localStorage.setItem("DATA_M72",'##2016年1月28日至30日 每日10H00-16H00<br>本站停用，您可使用「得勝花園」站上落。');
localStorage.setItem("DATA_e_M149",'##2016/Jan/30 19H00-22H00<br>This stop is suspended temporarily. You may use "Tap Seac Multi-sports Pavilion" stop (the one near Tap Seac Plaza) instead.');localStorage.setItem("DATA_M149",'##2016年1月30日 19H00-22H00<br>本站停用，您可使用設於愛都酒店前的「塔石體育館」站上落。');

localStorage.setItem("DATA_e_r5Xx",'##Correction:<br>Route 5X runs between Fai Chi Kei and <del>Hospital S. Januario</del> N.A.P.E.');


if((vers!="v68")){
    var link = '<a ontouchstart="localStorage.setItem(\'getgetmacau\',\'\');localStorage.setItem(\'udmacau\',\'\');localStorage.setItem(\'udmacau_e\',\'\');window.location.href=\'https://play.google.com/store/apps/details?id=com.locmacau&apk\'" class="upd-icon">';

    localStorage.setItem("udmacau",link+"<b>澳門出行易 V4.3</b><u>恢復「我的下一站」功能</u><div>檢視</div></a>");
    localStorage.setItem("udmacau_e",link+"<b>Macau EasyGo V4.3</b><u>Update 24 Routes</u><div>VIEW</div></a>");
    window.location.reload();
}

