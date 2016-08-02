var nu = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
function getNum(){
    return nu[Math.floor(Math.random()*36)];
}
function getId(){
    var userid_temp = "";
    for(var i=0;i<18;i++){
        userid_temp += getNum();
    }
    window.android.firmuser(userid_temp);
}

getId();

fetch_website_url = "error";
//fetch_website_url = "http://202.175.46.123/upd.php";