var hr = 0;
var min = 0;
var sec = 0;
var res = new Date();
setInterval(
    function(){
        res = new Date();
        sec = res.getSeconds()*6;
        min = res.getMinutes()*6;        
        hr = res.getHours()*30+Math.round(min/12);
        document.getElementById("rotate-sec").style.transform="rotate("+sec+"deg)";
        document.getElementById("rotate-min").style.transform="rotate("+min+"deg)";
        document.getElementById("rotate-hr").style.transform="rotate("+hr+"deg)";
    }, 1000
)