passedt();

localStorage.removeItem("udmacau");
localStorage.removeItem("udmacau_e");

localStorage.setItem("DATA_e_r34y",'##From 7/Mar/2016<br>This route skips "Rua de Aveiro", "Hou Kong Middle School Taipa" and "Rua Evora/Flower City" stop. You may use "Nam Sun Garden Bldg.", "Va Pou Garden Bldg." or "Garden of Flower City" stop instead.');localStorage.setItem("DATA_r34y",'##2016年3月7日起<br>本線不停靠「亞威羅街」、「氹仔濠江中學」及「埃武拉街/花城」站，您可使用「南新花園」、「華寶花園」或「花城公園」站上落。');
localStorage.setItem("DATA_e_T348",'##From 7/Mar/2016<br>This stop is temporary suspended. You may use "Va Pou Garden Bldg." or "Garden of Flower City" stop instead.');localStorage.setItem("DATA_T348",'##2016年3月7日起<br>本站停用，您可使用「華寶花園」或「花城公園」站上落。');
localStorage.setItem("DATA_e_T349",'##From 7/Mar/2016<br>This stop is temporary suspended. You may use "Kingsville" stop instead.');localStorage.setItem("DATA_T349",'##2016年3月7日起<br>本站停用，您可使用「雍景灣」站上落。');
localStorage.setItem("DATA_e_T340",'##From 7/Mar/2016<br>Route 34 skips this stop. You may use "Nam Sun Garden Bldg." stop instead.');localStorage.setItem("DATA_T340",'##2016年3月7日起<br>路線34不停靠本站，您可使用「南新花園」站上落。');
localStorage.setItem("DATA_e_r18y",'##15/Apr - 4/May/2016<br>"Rua das Estalagens" and "R. Cinco Outubro" stop are suspended. You may use the temp. stop located at the intersection of Rua dos Faitiões and Rua da Tercena.');localStorage.setItem("DATA_r18y",'##2016年4月15日至5月4日<br>「草堆街」站及「十月初五街」站停用，您可使用快艇頭街與果欄街交界的臨時站上落。');
localStorage.setItem("DATA_e_r4x",'##From 27/Apr/2016<br>"Van Sion Son Chun" temp. stop is added after "Lam Mau/Macau Yacht Club".');localStorage.setItem("DATA_r4x",'##2016年4月27日起<br>本線在停靠「林茂/澳門遊艇會」站後，新增停靠「運順新邨」臨時站，您可使用該站上落。');

if((vers!="v70")){
    var link = '<a ontouchstart="localStorage.setItem(\'getgetmacau\',\'\');localStorage.setItem(\'udmacau\',\'\');localStorage.setItem(\'udmacau_e\',\'\');window.location.href=\'https://play.google.com/store/apps/details?id=com.locmacau&apk\'" class="upd-icon">';

    localStorage.setItem("udmacau",link+"<b>澳門出行易 V4.3.2</b><u>點到點搜尋通宵路線</u><div>檢視</div></a>");
    localStorage.setItem("udmacau_e",link+"<b>Macau EasyGo V4.3.2</b><u>Overnight Rt Option for Point-to-point Rt Search</u><div>VIEW</div></a>");
    window.location.reload();
}