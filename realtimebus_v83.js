url_first = "http://202.175.87.15:7012/macauweb/bootstrap/lineDiagram.html?action=dy&routeName=";
url_second = "&dir=";
url_last = "&lang=zh-tw";
avai_rt_array = ["1","1A","2","2A","3","3A","3X","4","5","5X","6A","6B","7","8","8A","9","9A","10","10A","10B","10X","11","12","15","16","17","18","18A","19","21A","22","23","25","25X","26","26A","27","28A","28B","28BX","28C","30","30X","32","33","34","35","36","37","39","50","50X","51","51A","52","55","56","59","71","72","73","AP1","AP1X","H1","H2","H3","MT1","MT2","MT3","MT4","MT5","N1A","N1B","N2","N3","N4","N5","N6"];
show_plate = false;

function show(i){
	window.clearInterval(interval);
	show_i = i;
	
	// added.
	var trc_stop_id = document.querySelector("body").id;
	var trc_lgtext  = "tc";
	
	if(trc_stop_id.indexOf("e_") > -1){
	    trc_stop_id = trc_stop_id.substr(2);
	    trc_lgtext  = "en";
	}
	var trc_page = rArray[i].ref;
	var trc_rt = trc_page.substr(0,trc_page.length-1);
	
	trcuser_pro = function(cata,page,lang,ver){
		mixpanel.track("Page View",{"Cata":cata,"Page":page,"Lang":lang,"Vers":vers,"User":userCode,"AndroidVersion":ver});
	}
	
	// if(document.getElementById("additional-tips")){
	// }
	// else{
	// 	document.querySelector(".oroute").innerHTML += "<pre id='additional-tips'></pre>";
	// }
	trcuser("realtimebus", trc_page+"@"+trc_stop_id, trc_lgtext);

	// end.

	replace_or_init(false);
	fetch_busData();
	interval = window.setInterval(fetch_busData, 10000);
}

eval(showBusCurrentPos.toString()
		.replace("tcName", "staCode")
		.replace("resultJSON = resultJSON[0]", "resultJSON = resultJSON.data")
		.replace("[0-9]*", "[0-9]{1,}")
)