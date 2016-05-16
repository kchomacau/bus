passedt();

localStorage.removeItem("udmacau");
localStorage.removeItem("udmacau_e");


localStorage.setItem("DATA_e_r37x",'##17~21/May/2016<br>Terminus is moved to Rua de Nam Keng.');localStorage.setItem("DATA_r37x",'##2016年5月17日至21日<br>本線總站臨時遷至南京街。');
localStorage.setItem("DATA_e_T401",'##17~21/May/2016<br>This stop is moved to Rua de Nam Keng.');localStorage.setItem("DATA_T401",'##2016年5月17日至21日<br>本站臨時遷至南京街。');
localStorage.setItem("DATA_e_T308",'##17/May~5/Jun/2016<br>This stop is divided into two stops. For Rt 21A, 26A and 33, walk forward (same direction as vehicles) and use the stop located beside Altira Macau. For other routes, walk forward and use the stop located opposite Edf. Chun Hung Garden (Pek Iun).');localStorage.setItem("DATA_T308",'##2016年5月17日至6月5日<br>本站臨時分拆成兩站，乘搭21A、26A及33路線請沿行車方向往前步行至新濠鋒外的臨時站；其他路線請往前步行至近海怡花園的站點。');


if((vers!="v71")){
    var link = '<a ontouchstart="localStorage.setItem(\'getgetmacau\',\'\');localStorage.setItem(\'udmacau\',\'\');localStorage.setItem(\'udmacau_e\',\'\');window.location.href=\'https://play.google.com/store/apps/details?id=com.locmacau&apk\'" class="upd-icon">';

    localStorage.setItem("udmacau",link+"<b>澳門出行易 V4.3.3</b><u>您可憑站點編號搜尋巴士站</u><div>檢視</div></a>");
    localStorage.setItem("udmacau_e",link+"<b>Macau EasyGo V4.3.3</b><u>You can find bus stops by stop number</u><div>VIEW</div></a>");
    window.location.reload();
}
