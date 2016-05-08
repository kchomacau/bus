passedt();

localStorage.removeItem("udmacau");
localStorage.removeItem("udmacau_e");


if((vers!="v71")){
    var link = '<a ontouchstart="localStorage.setItem(\'getgetmacau\',\'\');localStorage.setItem(\'udmacau\',\'\');localStorage.setItem(\'udmacau_e\',\'\');window.location.href=\'https://play.google.com/store/apps/details?id=com.locmacau&apk\'" class="upd-icon">';

    localStorage.setItem("udmacau",link+"<b>澳門出行易 V4.3.3</b><u>您可憑站點編號搜尋巴士站</u><div>檢視</div></a>");
    localStorage.setItem("udmacau_e",link+"<b>Macau EasyGo V4.3.3</b><u>You can find bus stops by stop number</u><div>VIEW</div></a>");
    window.location.reload();
}
