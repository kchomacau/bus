passedt();

localStorage.removeItem("udmacau");
localStorage.removeItem("udmacau_e");

localStorage.setItem("DATA_e_r2y",'##30/Jul/2016 09H00-17H00<br>This route skips following busstops: "Dom Bosco Sport Field", "C.E.M.", "Venceslau Morais/C.E.M." and "Venc. Morais/Mong-Ha". You may use "Montanha Russa Park" or "Fok Hoi Garden Bldg" busstop instead.');localStorage.setItem("DATA_r2y",'##2016年7月30日上午9時至下午5時半<br>本線不停靠「鮑思高球場」、「電力公司」、「慕拉士/發電廠」、「慕拉士馬路/望廈」站，可使用「螺絲山公園」或「福海花園」站上落。');
localStorage.setItem("DATA_e_r6Ax",'##30/Jul/2016 09H00-17H00<br>This route skips following busstops: "Dom Bosco Sport Field", "C.E.M.", "Venceslau Morais/C.E.M." and "Venc. Morais/Mong-Ha". You may use "Montanha Russa Park" or "Fok Hoi Garden Bldg" busstop instead.');localStorage.setItem("DATA_r6Ax",'##2016年7月30日上午9時至下午5時半<br>本線不停靠「鮑思高球場」、「電力公司」、「慕拉士/發電廠」、「慕拉士馬路/望廈」站，可使用「螺絲山公園」或「福海花園」站上落。');
localStorage.setItem("DATA_e_r2Ay",'##30/Jul/2016 09H00-17H00<br>This route skips following busstops: "Dom Bosco Sport Field", "C.E.M." and "Venceslau Morais/C.E.M.". You may use "Montanha Russa Park", "Fok Hoi Garden Bldg" or "Trav. Venc. Morais" busstop instead.');localStorage.setItem("DATA_r2Ay",'##2016年7月30日上午9時至下午5時半<br>本線不停靠「鮑思高球場」、「電力公司」、「慕拉士/發電廠」站，可使用「螺絲山公園」、「福海花園」或「慕拉士巷」站上落。');
localStorage.setItem("DATA_e_r18y",'##30/Jul/2016 09H00-17H00<br>This route skips following busstops: "Dom Bosco Sport Field", "C.E.M." and "Venceslau Morais/C.E.M.". You may use "Montanha Russa Park", "Fok Hoi Garden Bldg" or "Trav. Venc. Morais" busstop instead.');localStorage.setItem("DATA_r18y",'##2016年7月30日上午9時至下午5時半<br>本線不停靠「鮑思高球場」、「電力公司」、「慕拉士/發電廠」站，可使用「螺絲山公園」、「福海花園」或「慕拉士巷」站上落。');
localStorage.setItem("DATA_e_M54",'##30/Jul/2016 09H00-17H00<br>This stop is suspended temporarily. Use "Fok Hoi Garden Bldg" instead.');localStorage.setItem("DATA_M54",'##2016年7月30日上午9時至下午5時半<br>本站停用，可使用「福海花園」站上落。');

if((vers!="v75")){
    var link = '<a ontouchstart="localStorage.setItem(\'getgetmacau\',\'\');localStorage.setItem(\'udmacau\',\'\');localStorage.setItem(\'udmacau_e\',\'\');window.location.href=\'https://play.google.com/store/apps/details?id=com.locmacau&apk\'" class="upd-icon">';

    localStorage.setItem("udmacau",link+"<b>澳門出行易 V4.3.6</b><u>路線更新及程式優化</u><div>檢視</div></a>");
    localStorage.setItem("udmacau_e",link+"<b>Macau EasyGo V4.3.6</b><u>Route Update & App Enhancement</u><div>VIEW</div></a>");
    window.location.reload();
}
