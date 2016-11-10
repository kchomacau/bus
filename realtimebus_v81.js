url_first = "http://202.175.87.15:7012/macauweb/bootstrap/lineDiagram.html?routeName=";
url_second = "&dir=";
url_last = "&lang=zh-tw";
avai_rt_array = ["1","1A","2","2A","3","3A","3X","4","5","6B","7","7A","8","8A","9","10","10A","10B","11","15","16","18","25","26","26A","28A","28B","28C","30","33","34","50","51","52","55","71","72","H1","H3","MT2"];

function show(i){
	window.clearInterval(interval);
	show_i = i;
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
	document.querySelector(".oroute").innerHTML += "<pre><small>Testing Log: Getting Bus Data r" + trc_rt + "</small></pre>";
	trcuser("realtimebus", trc_page+"@"+trc_stop_id, trc_lgtext);

	replace_or_init(false);
	fetch_busData();
	interval = window.setInterval(fetch_busData, 10000);
}
