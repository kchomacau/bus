passedt();

localStorage.removeItem("udmacau");
localStorage.removeItem("udmacau_e");

var katcheong_tc_map = '改為停靠設於澳門福建同鄉總會前的「吉祥樓」站，<a href="javascript:full(\'22.212132,113.549705\',\'吉祥樓臨時站\')" style="color:#0097ff">請按此處查看該站的離線地圖</a>。';
var katcheong_en_map = 'Use the temp stop instead. <a href="javascript:full_e(\'22.212132,113.549705\',\'Edf. Kat Cheong Temp. Stop\')" style="color:#0097ff">Click here to view offline map of the temp stop.</a>';
var katcheong_tc = '即日起<br>路線10、10X及27不停靠本站，'+katcheong_tc_map;
var katcheong_en = 'From now on<br>Rt 10, 10X and 27 skip this stop. '+katcheong_en_map;

var late_bus_tc = "中秋延長服務時間<br>2016年9月15日之後的凌晨，本線將延至凌晨一時開出尾班車。";
var late_bus_en = "Service Temp. Extends<br>Last bus of 2016-Sep-15 will depart at 01H00.";

var late_bus_arr = ["1y","1Ax","1Ay","2x","2y","2Ax","2Ay","3y","3Ay","4x","5y","6Ax","6Bx","7x","7y","7Ax","7Ay","8x","8y","8Ax","10y","10Ax","10Ay","11x","12x","12y","17x","18y","18Ax","19x","21Ax","21Ay","22x","23x","26x","26y","26Ax","27x","28Ax","28Bx","28Cy","32x","33x","34y","35x","36x","50x","50y","MT1x","MT2x","MT4x","MT4y"];

for(var i=0;i<late_bus_arr.length;i++){
    localStorage.setItem('DATA_r' + late_bus_arr[i],'##'+late_bus_tc);
    localStorage.setItem('DATA_e_r' + late_bus_arr[i],'##'+late_bus_en);
}

localStorage.setItem('DATA_M225','##'+katcheong_tc);
localStorage.setItem('DATA_e_M225','##'+katcheong_en);
localStorage.setItem('DATA_M7','##'+katcheong_tc);
localStorage.setItem('DATA_e_M7','##'+katcheong_en);

localStorage.setItem('DATA_M27','##即日起<br>路線10及10X不停靠本站，'+katcheong_tc_map);
localStorage.setItem('DATA_e_M27','##From now on<br>Rt 10 and 10X skip this stop. '+katcheong_en_map);

localStorage.setItem('DATA_M229','##即日起<br>路線27不停靠本站，可使用「拱形馬路/蓮峰廟」站。');
localStorage.setItem('DATA_e_M229','##From now on<br>Rt 27 skip this stop. Use "Est. Arco/Lin Fung Temple" stop instead.');

if((vers!="v79")){
    var link = '<a ontouchstart="localStorage.setItem(\'getgetmacau\',\'\');localStorage.setItem(\'udmacau\',\'\');localStorage.setItem(\'udmacau_e\',\'\');window.location.href=\'https://play.google.com/store/apps/details?id=com.locmacau&apk\'" class="upd-icon">';

    localStorage.setItem("udmacau",link+"<b>澳門出行易 V4.3.9</b><u>路線更新</u><div>檢視</div></a>");
    localStorage.setItem("udmacau_e",link+"<b>Macau EasyGo V4.3.9</b><u>Rt Update</u><div>VIEW</div></a>");
    window.location.reload();
}
