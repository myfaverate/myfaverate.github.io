document.addEventListener('pjax:complete', fps);
document.addEventListener('DOMContentLoaded', fps);
function fps(){
var rAF = function () {
    return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        }
    );
}();
var frame = 0;
var allFrameCount = 0;
var lastTime = Date.now();
var lastFameTime = Date.now();
var loop = function () {
    var now = Date.now();
    var fs = (now - lastFameTime);
    var fps = Math.round(1000 / fs);
 
    lastFameTime = now;
    // 不置 0，在动画的开头及结尾记录此值的差值算出 FPS
    allFrameCount++;
    frame++;
 
    if (now > 1000 + lastTime) {
        var fps = Math.round((frame * 1000) / (now - lastTime));
        if(fps<=6){
            var kd=`<span style="color:#bd0000; text-shadow: rgba(30, 30, 30, 1) 0.5px 0.5px 1px;">卡成ppt</span>`
        }
        else if(fps<=10){
            var kd=`<span style="color:red; text-shadow: rgba(30, 30, 30, 1) 0.5px 0.5px 1px;">电竞级帧率</span>`
        }
        else if(fps<=14){
            var kd=`<span style="color:yellow; text-shadow: rgba(30, 30, 30, 1) 0.5px 0.5px 1px;">难受</span>`
        }
        else if(fps<24){
            var kd=`<span style="color:orange; text-shadow: rgba(30, 30, 30, 1) 0.5px 0.5px 1px;">卡</span>`
        }
        else if(fps<=40){
            var kd=`<span style="color:green; text-shadow: rgba(30, 30, 30, 1) 0.5px 0.5px 1px;">一般</span>`
        }
        else{
            var kd=`<span style="color:#0CBD1B; text-shadow: rgba(30, 30, 30, 1) 0.5px 0.5px 1px;">正常</span>`
        }
        // <span style="color:#000000;  text-shadow: rgba(30, 30, 30, 1) 0.5px 0.5px 1px;">FPS:</span>
        document.getElementById("fps").innerHTML=`<span style="color:#FFFFFF;  text-shadow: rgba(30, 30, 30, 1) 0.5px 0.5px 1px;">FPS:${fps} </span>${kd}`;
        // document.getElementById("fps").innerHTML=`FPS:${fps} ${kd}`;
        frame = 0;
        lastTime = now;
    };
 
    rAF(loop);
}

loop();
}