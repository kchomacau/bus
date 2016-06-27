passedt();

localStorage.removeItem("udmacau");
localStorage.removeItem("udmacau_e");


localStorage.setItem("DATA_e_M264",'##From 28/May/2016<br>This stop is suspended. Use "Macau Science Centre" or "N.A.P.E./Cultural Centre" stop.');localStorage.setItem("DATA_M264",'##2016年5月28日起<br>本站取消，您可使用「澳門科學館」站或「新口岸/文化中心」站上落。');
localStorage.setItem("DATA_e_T405",'##From 28/May/2016<br>This stop is suspended. Use "Roundabout Leonel Sousa Terminus" stop.');localStorage.setItem("DATA_T405",'##2016年5月28日起<br>本站取消，您可使用「蘇利安圓形地總站」站上落。');
localStorage.setItem("DATA_e_T329",'##From 28/May/2016<br>This stop is suspended. Use "Beira-Mar Garden Bldg" stop.');localStorage.setItem("DATA_T329",'##2016年5月28日起<br>本站取消，您可使用「氹仔海濱花園」站上落。');


if((vers!="v71")){
    var link = '<a ontouchstart="localStorage.setItem(\'getgetmacau\',\'\');localStorage.setItem(\'udmacau\',\'\');localStorage.setItem(\'udmacau_e\',\'\');window.location.href=\'https://play.google.com/store/apps/details?id=com.locmacau&apk\'" class="upd-icon">';

    localStorage.setItem("udmacau",link+"<b>澳門出行易 V4.3.3</b><u>您可憑站點編號搜尋巴士站</u><div>檢視</div></a>");
    localStorage.setItem("udmacau_e",link+"<b>Macau EasyGo V4.3.3</b><u>You can find bus stops by stop number</u><div>VIEW</div></a>");
    window.location.reload();
}
