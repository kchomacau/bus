passedt();

localStorage.removeItem("udmacau");
localStorage.removeItem("udmacau_e");


localStorage.setItem("DATA_e_r52y",'##16/May/2016, 10H00-13H00<br>"Ocean Gardens/Rose Court" stop is temporary suspended. Use "Ocean Plaza" stop instead.');localStorage.setItem("DATA_r52y",'##2016年5月16日上午10時至下午1時<br>「海洋花園/玫瑰苑」站停用，可使用「海洋廣場」站上落。');
localStorage.setItem("DATA_e_T430",'##16/May/2016, 10H00-13H00<br>This stop is temporary suspended. Use "Ocean Plaza" stop instead.');localStorage.setItem("DATA_T430",'##2016年5月16日上午10時至下午1時<br>本站停用，可使用「海洋廣場」站上落。');
localStorage.setItem("DATA_e_T335",'##16/May/2016, 10H00-13H00<br>Rt 52 to Seac Pai Van uses this stop temporarily.');localStorage.setItem("DATA_T335",'##2016年5月16日上午10時至下午1時<br>52路線往石排灣方向臨時停靠本站。');


if((vers!="v71")){
    var link = '<a ontouchstart="localStorage.setItem(\'getgetmacau\',\'\');localStorage.setItem(\'udmacau\',\'\');localStorage.setItem(\'udmacau_e\',\'\');window.location.href=\'https://play.google.com/store/apps/details?id=com.locmacau&apk\'" class="upd-icon">';

    localStorage.setItem("udmacau",link+"<b>澳門出行易 V4.3.3</b><u>您可憑站點編號搜尋巴士站</u><div>檢視</div></a>");
    localStorage.setItem("udmacau_e",link+"<b>Macau EasyGo V4.3.3</b><u>You can find bus stops by stop number</u><div>VIEW</div></a>");
    window.location.reload();
}
