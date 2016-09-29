passedt();

localStorage.removeItem("udmacau");
localStorage.removeItem("udmacau_e");

localStorage.setItem('DATA_T307','##即日起<br>本站停用。');
localStorage.setItem('DATA_e_T307','##From now on<br>This stop is suspended.');

if((vers!="v80")){
    var link = '<a ontouchstart="localStorage.setItem(\'getgetmacau\',\'\');localStorage.setItem(\'udmacau\',\'\');localStorage.setItem(\'udmacau_e\',\'\');window.location.href=\'https://play.google.com/store/apps/details?id=com.locmacau&apk\'" class="upd-icon">';
    localStorage.setItem("udmacau",link+"<b>澳門出行易 V4.4.0</b><u>更新離島區路線</u><div>檢視</div></a>");
    localStorage.setItem("udmacau_e",link+"<b>Macau EasyGo V4.4.0</b><u>Update Island Routes</u><div>VIEW</div></a>");
    window.location.reload();
}

