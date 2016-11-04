passedt();

localStorage.removeItem("udmacau");
localStorage.removeItem("udmacau_e");

if((vers!="v82")){
    var link = '<a ontouchstart="localStorage.setItem(\'getgetmacau\',\'\');localStorage.setItem(\'udmacau\',\'\');localStorage.setItem(\'udmacau_e\',\'\');window.location.href=\'https://play.google.com/store/apps/details?id=com.locmacau&apk\'" class="upd-icon">';
    localStorage.setItem("udmacau",link+"<b>澳門出行易 V4.4.2</b><u>路線更新</u><div>檢視</div></a>");
    localStorage.setItem("udmacau_e",link+"<b>Macau EasyGo V4.4.2</b><u>Update Routes</u><div>VIEW</div></a>");
    window.location.reload();
}

