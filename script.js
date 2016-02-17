passedt();

localStorage.removeItem("udmacau");
localStorage.removeItem("udmacau_e");

localStorage.setItem("DATA_e_r3Xx",'##From now on, <br>Route 3X is also available in 20H00-23H00, buses depart every 6-10 min.');localStorage.setItem("DATA_r3Xx",'##即日起，<br>本線新增晚上8時至11時的服務，約6至10分鐘開出一班車。');
localStorage.setItem("DATA_e_r21Ax",'##From now on, <br>Route 21A goes to Ka-Ho Fuel Oil Terminal after arriving Hac-Sa Beach. Service Hour from 06H30 to 23H30, departs every 30 mins.');localStorage.setItem("DATA_r21Ax",'##即日起，<br>本線停黑沙海灘站後繼續前往九澳油庫，服務時間改為06H30-23H30，每半小時一班');
localStorage.setItem("DATA_e_r21Ay",'##From now on, <br>Route 21A departs every 30 mins from Ka-Ho Fuel Oil Terminal, via Hac-Sa Village, then goes back to Hac-Sa Beach and follows the original route until Barra Terminus. Service Hour from 07H20 to 00H20.');localStorage.setItem("DATA_r21Ay",'##即日起，<br>本線服務時間改為07H20-00H20，每半小時一班由九澳油庫開出，經黑沙村至本站後，按原線前往媽閣。');

if((vers!="v68")){
    var link = '<a ontouchstart="localStorage.setItem(\'getgetmacau\',\'\');localStorage.setItem(\'udmacau\',\'\');localStorage.setItem(\'udmacau_e\',\'\');window.location.href=\'https://play.google.com/store/apps/details?id=com.locmacau&apk\'" class="upd-icon">';

    localStorage.setItem("udmacau",link+"<b>澳門出行易 V4.3</b><u>恢復「我的下一站」功能</u><div>檢視</div></a>");
    localStorage.setItem("udmacau_e",link+"<b>Macau EasyGo V4.3</b><u>Update 24 Routes</u><div>VIEW</div></a>");
    window.location.reload();
}

