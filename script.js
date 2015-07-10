if(parseFloat(vers.substr(1))<62){
	localStorage.setItem("udmacau",'<a ontouchstart="localStorage.setItem(\'getgetmacau\',\'\');localStorage.setItem(\'udmacau\',\'\');localStorage.setItem(\'udmacau_e\',\'\');window.location.href=\'https://play.google.com/store/apps/details?id=com.locmacau&apk\'" class="upd-icon"><b>'+
		'澳門出行易 V4.2.1</b><u>提升用戶體驗，更快、更易用！</u><div>檢視</div></a>');
	localStorage.setItem("udmacau_e",'<a ontouchstart="localStorage.setItem(\'getgetmacau\',\'\');localStorage.setItem(\'udmacau\',\'\');localStorage.setItem(\'udmacau_e\',\'\');window.location.href=\'https://play.google.com/store/apps/details?id=com.locmacau&apk\'" class="upd-icon"><b>'+
		'Macau EasyGo V4.2.1</b><u>Much Better User Experience!</u><div>VIEW</div></a>');
	window.location.reload();
}
else{
	localStorage.removeItem("udmacau");
	localStorage.removeItem("udmacau_e");
}
