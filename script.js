passedt();

localStorage.removeItem("udmacau");
localStorage.removeItem("udmacau_e");


localStorage.setItem("DATA_e_M264",'##From 28/May/2016<br>This stop is suspended. Use "Macau Science Centre" or "N.A.P.E./Cultural Centre" stop.');localStorage.setItem("DATA_M264",'##2016年5月28日起<br>本站取消，您可使用「澳門科學館」站或「新口岸/文化中心」站上落。');
localStorage.setItem("DATA_e_T405",'##From 28/May/2016<br>This stop is suspended. Use "Roundabout Leonel Sousa Terminus" stop.');localStorage.setItem("DATA_T405",'##2016年5月28日起<br>本站取消，您可使用「蘇利安圓形地總站」站上落。');
localStorage.setItem("DATA_e_T329",'##From 28/May/2016<br>This stop is suspended. Use "Beira-Mar Garden Bldg" stop.');localStorage.setItem("DATA_T329",'##2016年5月28日起<br>本站取消，您可使用「氹仔海濱花園」站上落。');
localStorage.setItem("DATA_e_M132",'##11/Jun/2016, 09H00-12H00<br>Rt 8A, 18A and 19 skip this stop. For Areia Preta or Iao Hon, you may take Rt 6A instead.');localStorage.setItem("DATA_M132",'##2016年6月11日上午9時半至中午12時<br>8A、18A及19路線巴士不行經本站，您可改乘6A路線前往黑沙環或祐漢。');
localStorage.setItem("DATA_e_M200",'##11/Jun/2016, 09H00-12H00<br>Rt 8A, 18A, 19 and 26 skip this stop. For Rt 26, go "Ponte 16" stop. For other routes, go "Luis Camoes Square" stop.');localStorage.setItem("DATA_M200",'##2016年6月11日上午9時半至中午12時<br>8A、18A、19及26路線巴士不行經本站；乘搭26路線請使用「十六浦」站；乘搭其餘路線，請使用「白鴿巢前地」站上落。');
localStorage.setItem("DATA_e_M201",'##11/Jun/2016, 09H00-12H00<br>Rt 26 skips this stop. For Red Market, you may take Rt 17 or 19 instead.');localStorage.setItem("DATA_M201",'##2016年6月11日上午9時半至中午12時<br>26路線不行經本站；若前往紅街市，可考慮改乘17或19路線。');
localStorage.setItem("DATA_e_M121",'##11/Jun/2016, 09H00-12H00<br>Rt 26 skips this stop. For Red Market, you may take Rt 17 or 19 instead.');localStorage.setItem("DATA_M121",'##2016年6月11日上午9時半至中午12時<br>26路線不行經本站；若前往紅街市，可考慮改乘17或19路線。');
localStorage.setItem("DATA_e_M119",'##11/Jun/2016, 09H00-12H00<br>Rt 26 skips this stop. Use "Alm. Lacerda/Red Market" stop.');localStorage.setItem("DATA_M119",'##2016年6月11日上午9時半至中午12時<br>26路線不行經本站，您可於「提督/紅街市」站上落。');


if((vers!="v71")){
    var link = '<a ontouchstart="localStorage.setItem(\'getgetmacau\',\'\');localStorage.setItem(\'udmacau\',\'\');localStorage.setItem(\'udmacau_e\',\'\');window.location.href=\'https://play.google.com/store/apps/details?id=com.locmacau&apk\'" class="upd-icon">';

    localStorage.setItem("udmacau",link+"<b>澳門出行易 V4.3.3</b><u>您可憑站點編號搜尋巴士站</u><div>檢視</div></a>");
    localStorage.setItem("udmacau_e",link+"<b>Macau EasyGo V4.3.3</b><u>You can find bus stops by stop number</u><div>VIEW</div></a>");
    window.location.reload();
}
