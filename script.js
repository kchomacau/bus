passedt();

localStorage.removeItem("udmacau");
localStorage.removeItem("udmacau_e");

localStorage.setItem('DATA_T307','##即日起<br>本站停用。');
localStorage.setItem('DATA_e_T307','##From now on<br>This stop is suspended.');

for(var i=0;i<=9;i++){
    localStorage.setItem('DATA_T55'+i,'##2016年9月29日00:30-03:00<br>由於澳大河底行車隧道全線封閉，本站暫停使用，如欲乘搭N6路線，請前往河底隧道氹仔行人出口乘搭。澳門出行易提提您，走過整條隧道約需十五分鐘。');
    localStorage.setItem('DATA_e_T55'+i,'##2016 Sep 29, 00:30-03:00<br>Due to tunnel closure, there is no bus service in UM. For Rt N6, go temp terminus set at Taipa pedestrian exit by walking through UM Tunnel (needs about 15 mins).');
}

localStorage.setItem('DATA_rN6x','##2016年9月29日00:30-03:00<br>由於澳大河底行車隧道全線封閉，本線將以河底隧道氹仔行人出口為臨時總站，不進入澳門大學校區。');
localStorage.setItem('DATA_e_rN6x','##2016 Sep 29, 00:30-03:00<br>Due to tunnel closure, there is no bus service in UM campus. Buses will terminate at Taipa pedestrian exit of UM Tunnel.');

if((vers!="v80")){
    var link = '<a ontouchstart="localStorage.setItem(\'getgetmacau\',\'\');localStorage.setItem(\'udmacau\',\'\');localStorage.setItem(\'udmacau_e\',\'\');window.location.href=\'https://play.google.com/store/apps/details?id=com.locmacau&apk\'" class="upd-icon">';
    localStorage.setItem("udmacau",link+"<b>澳門出行易 V4.4.0</b><u>更新離島區路線</u><div>檢視</div></a>");
    localStorage.setItem("udmacau_e",link+"<b>Macau EasyGo V4.4.0</b><u>Update Island Routes</u><div>VIEW</div></a>");
    window.location.reload();
}

