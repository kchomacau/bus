passedt();

localStorage.removeItem("udmacau");
localStorage.removeItem("udmacau_e");

if((vers!="v81")){
    var link = '<a ontouchstart="localStorage.setItem(\'getgetmacau\',\'\');localStorage.setItem(\'udmacau\',\'\');localStorage.setItem(\'udmacau_e\',\'\');window.location.href=\'https://play.google.com/store/apps/details?id=com.locmacau&apk\'" class="upd-icon">';
    localStorage.setItem("udmacau",link+"<b>澳門出行易 V4.4.1</b><u>加入H2路線</u><div>檢視</div></a>");
    localStorage.setItem("udmacau_e",link+"<b>Macau EasyGo V4.4.1</b><u>Add Rt. H2</u><div>VIEW</div></a>");
    window.location.reload();
}

