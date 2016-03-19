passedt();

localStorage.removeItem("udmacau");
localStorage.removeItem("udmacau_e");

localStorage.setItem("DATA_e_r34y",'##7/Mar - 30/Apr/2016<br>This route skips "Rua de Aveiro", "Hou Kong Middle School Taipa" and "Rua Evora/Flower City" stop. You may use "Nam Sun Garden Bldg.", "Va Pou Garden Bldg." or "Garden of Flower City" stop instead.');localStorage.setItem("DATA_r34y",'##2016年3月7日至4月30日<br>本線不停靠「亞威羅街」、「氹仔濠江中學」及「埃武拉街/花城」站，您可使用「南新花園」、「華寶花園」或「花城公園」站上落。');
localStorage.setItem("DATA_e_T348",'##7/Mar - 30/Apr/2016<br>This stop is temporary suspended. You may use "Va Pou Garden Bldg." or "Garden of Flower City" stop instead.');localStorage.setItem("DATA_T348",'##2016年3月7日至4月30日<br>本站停用，您可使用「華寶花園」或「花城公園」站上落。');
localStorage.setItem("DATA_e_T349",'##7/Mar - 30/Apr/2016<br>This stop is temporary suspended. You may use "Kingsville" stop instead.');localStorage.setItem("DATA_T349",'##2016年3月7日至4月30日<br>本站停用，您可使用「雍景灣」站上落。');
localStorage.setItem("DATA_e_T340",'##7/Mar - 30/Apr/2016<br>Route 34 skips this stop. You may use "Nam Sun Garden Bldg." stop instead.');localStorage.setItem("DATA_T340",'##2016年3月7日至4月30日<br>路線34不停靠本站，您可使用「南新花園」站上落。');
localStorage.setItem("DATA_e_T361",'##From 16/Mar/2016<br>This stop is suspended. You may use "Rotunda da Piscina Olimpica" stop instead.');localStorage.setItem("DATA_T361",'##2016年3月16日起<br>本站停用，您可使用「奧林匹克游泳館圓形地」站上落。');
localStorage.setItem("DATA_e_r25y",'##From 16/Mar/2016<br>"Avenida do Estadio" stop is suspended. You may use "Rotunda da Piscina Olimpica" stop instead.');localStorage.setItem("DATA_r25y",'##2016年3月16日起<br>本線不停靠「運動場道」站，您可使用「奧林匹克游泳館圓形地」站上落。');
localStorage.setItem("DATA_e_r25Xx",'##From 16/Mar/2016<br>"Avenida do Estadio" stop is suspended. You may use "Rotunda da Piscina Olimpica" stop instead.');localStorage.setItem("DATA_r25Xx",'##2016年3月16日起<br>本線不停靠「運動場道」站，您可使用「奧林匹克游泳館圓形地」站上落。');
localStorage.setItem("DATA_e_r26Ay",'##From 16/Mar/2016<br>"Avenida do Estadio" stop is suspended. You may use "Rotunda da Piscina Olimpica" stop instead.');localStorage.setItem("DATA_r26Ay",'##2016年3月16日起<br>本線不停靠「運動場道」站，您可使用「奧林匹克游泳館圓形地」站上落。');
localStorage.setItem("DATA_e_r35x",'##From 16/Mar/2016<br>"Avenida do Estadio" stop is suspended. You may use "Rotunda da Piscina Olimpica" stop instead.');localStorage.setItem("DATA_r35x",'##2016年3月16日起<br>本線不停靠「運動場道」站，您可使用「奧林匹克游泳館圓形地」站上落。');
localStorage.setItem("DATA_e_rMT1x",'##From 16/Mar/2016<br>"Avenida do Estadio" stop is suspended. You may use "Rotunda da Piscina Olimpica" stop instead.');localStorage.setItem("DATA_rMT1x",'##2016年3月16日起<br>本線不停靠「運動場道」站，您可使用「奧林匹克游泳館圓形地」站上落。');
localStorage.setItem("DATA_e_rMT2x",'##From 16/Mar/2016<br>"Avenida do Estadio" stop is suspended. You may use "Rotunda da Piscina Olimpica" stop instead.');localStorage.setItem("DATA_rMT2x",'##2016年3月16日起<br>本線不停靠「運動場道」站，您可使用「奧林匹克游泳館圓形地」站上落。');
localStorage.setItem("DATA_e_rMT3x",'##From 16/Mar/2016<br>"Avenida do Estadio" stop is suspended. You may use "Rotunda da Piscina Olimpica" stop instead.');localStorage.setItem("DATA_rMT3x",'##2016年3月16日起<br>本線不停靠「運動場道」站，您可使用「奧林匹克游泳館圓形地」站上落。');
localStorage.setItem("DATA_e_rMT4x",'##From 16/Mar/2016<br>"Avenida do Estadio" stop is suspended. You may use "Rotunda da Piscina Olimpica" stop instead.');localStorage.setItem("DATA_rMT4x",'##2016年3月16日起<br>本線不停靠「運動場道」站，您可使用「奧林匹克游泳館圓形地」站上落。');

if((vers!="v69")){
    var link = '<a ontouchstart="localStorage.setItem(\'getgetmacau\',\'\');localStorage.setItem(\'udmacau\',\'\');localStorage.setItem(\'udmacau_e\',\'\');window.location.href=\'https://play.google.com/store/apps/details?id=com.locmacau&apk\'" class="upd-icon">';

    localStorage.setItem("udmacau",link+"<b>澳門出行易 V4.3.1</b><u>更新路線</u><div>檢視</div></a>");
    localStorage.setItem("udmacau_e",link+"<b>Macau EasyGo V4.3.1</b><u>Route Info Updated</u><div>VIEW</div></a>");
    window.location.reload();
}