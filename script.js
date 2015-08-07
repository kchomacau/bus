passedt();

localStorage.removeItem("udmacau");
localStorage.removeItem("udmacau_e");

localStorage.setItem("DATA_e_M27",'##Since 4/Jun/2015<br>Rt 1A, 28B, 28BX for Ferry Terminal and Rt 7, 7A for Iao Hon stop at this stop.');localStorage.setItem("DATA_M27",'##2015年6月4日起<br>往港澳碼頭方向的1A、28B、28BX及往祐漢的7、7A路線停靠本站。');
localStorage.setItem("DATA_e_M54",'##8/Aug/2015 9:00-17:30<br>This stop is suspended.');localStorage.setItem("DATA_M54",'##2015年8月8日9:00-17:30<br>本站停用。');
localStorage.setItem("DATA_e_M9",'##Since 4/Jun/2015<br>This stop is suspended, please use "Istmo F. Amaral/Triangle Garden" stop.');localStorage.setItem("DATA_M9",'##2015年6月4日起<br>本站停用，請使用「關閘馬路/三角花園」站上落。');
localStorage.setItem("DATA_e_r18y",'##8/Aug/2015 9:00-17:30<br>This route skips "C.E.M." stop, stops at "Montanha Russa Park", "Fok Hoi Garden Bldg." and "Trav. Venc. Morais" stop.');localStorage.setItem("DATA_r18y",'##2015年8月8日9:00-17:30<br>本線不停靠「電力公司」站，將臨時停靠「螺絲山公園」、「福海花園」及「慕拉士巷」站。');
localStorage.setItem("DATA_e_r1Ax",'##Since 4/Jun/2015<br>"Estrada do Arco" stop is suspended, please use "Istmo F. Amaral/Triangle Garden" stop.');localStorage.setItem("DATA_r1Ax",'##2015年6月4日起<br>不再行經「拱形馬路」站，請使用「關閘馬路/三角花園」站上落。');
localStorage.setItem("DATA_e_r28Bx",'##Since 4/Jun/2015<br>"Estrada do Arco" stop is suspended, please use "Istmo F. Amaral/Triangle Garden" stop.');localStorage.setItem("DATA_r28Bx",'##2015年6月4日起<br>不再行經「拱形馬路」站，請使用「關閘馬路/三角花園」站上落。');
localStorage.setItem("DATA_e_r28BXx",'##Since 4/Jun/2015<br>"Estrada do Arco" stop is suspended, please use "Istmo F. Amaral/Triangle Garden" stop.');localStorage.setItem("DATA_r28BXx",'##2015年6月4日起<br>不再行經「拱形馬路」站，請使用「關閘馬路/三角花園」站上落。');
localStorage.setItem("DATA_e_r2Ay",'##8/Aug/2015 9:00-17:30<br>This route skips "C.E.M." stop, stops at "Montanha Russa Park", "Fok Hoi Garden Bldg." and "Trav. Venc. Morais" stop.');localStorage.setItem("DATA_r2Ay",'##2015年8月8日9:00-17:30<br>本線不停靠「電力公司」站，將臨時停靠「螺絲山公園」、「福海花園」及「慕拉士巷」站。');
localStorage.setItem("DATA_e_r2y",'##8/Aug/2015 9:00-17:30<br>This route skips "C.E.M." stop, stops at "Montanha Russa Park" and "Fok Hoi Garden Bldg." stop.');localStorage.setItem("DATA_r2y",'##2015年8月8日9:00-17:30<br>本線不停靠「電力公司」站，將臨時停靠「螺絲山公園」及「福海花園」站。');
localStorage.setItem("DATA_e_r6Ax",'##8/Aug/2015 9:00-17:30<br>This route skips "C.E.M." stop, stops at "Montanha Russa Park" and "Fok Hoi Garden Bldg." stop.');localStorage.setItem("DATA_r6Ax",'##2015年8月8日9:00-17:30<br>本線不停靠「電力公司」站，將臨時停靠「螺絲山公園」及「福海花園」站。');
localStorage.setItem("DATA_e_r7Ay",'##Since 4/Jun/2015<br>"Estrada do Arco" stop is suspended, please use "Istmo F. Amaral/Triangle Garden" stop.');localStorage.setItem("DATA_r7Ay",'##2015年6月4日起<br>不再行經「拱形馬路」站，請使用「關閘馬路/三角花園」站上落。');
localStorage.setItem("DATA_e_r7y",'##Since 4/Jun/2015<br>"Estrada do Arco" stop is suspended, please use "Istmo F. Amaral/Triangle Garden" stop.');localStorage.setItem("DATA_r7y",'##2015年6月4日起<br>不再行經「拱形馬路」站，請使用「關閘馬路/三角花園」站上落。');

if((vers!="v62")&&(vers!="v63")){
    var link = '<a ontouchstart="localStorage.setItem(\'getgetmacau\',\'\');localStorage.setItem(\'udmacau\',\'\');localStorage.setItem(\'udmacau_e\',\'\');window.location.href=\'https://play.google.com/store/apps/details?id=com.locmacau&apk\'" class="upd-icon">';

    localStorage.setItem("udmacau",link+"<b>澳門出行易 V4.2.1</b><u>提升用戶體驗，更快、更易用！</u><div>檢視</div></a>");
    localStorage.setItem("udmacau_e",link+"<b>Macau EasyGo V4.2.1</b><u>Much Better User Experience!</u><div>VIEW</div></a>");
    window.location.reload();
}
