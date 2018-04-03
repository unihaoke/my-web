window.onload=function (){
    var oBtn=document.getElementById('btn1');
    var oU1=document.getElementById('ull');
    var oTxt=document.getElementById('txt2');
    oBtn.onclick=function () {
        var oLi=document.createElement('li');
        oLi.innerHTML=oTxt.value;
        oTxt.value='';
        if(oU1.children.length>0) {
            oU1.insertBefore(oLi, oU1.children[0]);
        }
        else
        {
            oU1.appendChild(oLi);
        }
//                运动
        var iHeight=oLi.offsetHeight;
        oLi.style.height='0';
        startMove2(oLi, {height:iHeight}, function () {
            startMove2(oLi,{opacity:100});
        });
    }
};