passedt();

localStorage.removeItem("udmacau");
localStorage.removeItem("udmacau_e");

localStorage.setItem("DATA_e_r30x",'##2015/Dec/14 - 2016/Feb/11<br>Bus stop "Av. Kwong Tung/Jockey Club" is skipped.');localStorage.setItem("DATA_r30x",'##2015年12月14日至2016年2月11日<br>不停靠「廣東大馬路/馬會」站。');
localStorage.setItem("DATA_e_r3Xx",'##From now on, <br>Route 3X is also available in 20H00-23H00, buses depart every 6-10 min.');localStorage.setItem("DATA_r3Xx",'##即日起，<br>本線新增晚上8時至11時的服務，約6至10分鐘開出一班車。');

localStorage.setItem("DATA_e_r5Xx",'##Correction:<br>Route 5X runs between Fai Chi Kei and <del>Hospital S. Januario</del> N.A.P.E.');


if((vers!="v68")){
    var link = '<a ontouchstart="localStorage.setItem(\'getgetmacau\',\'\');localStorage.setItem(\'udmacau\',\'\');localStorage.setItem(\'udmacau_e\',\'\');window.location.href=\'https://play.google.com/store/apps/details?id=com.locmacau&apk\'" class="upd-icon">';

    localStorage.setItem("udmacau",link+"<b>澳門出行易 V4.3</b><u>恢復「我的下一站」功能</u><div>檢視</div></a>");
    localStorage.setItem("udmacau_e",link+"<b>Macau EasyGo V4.3</b><u>Update 24 Routes</u><div>VIEW</div></a>");
    window.location.reload();
}

