function getByClass(oParent,sClass) {
    var aEle=oParent.getElementsByTagName('*');//把所有的元素都选进来
    var aResult=[];//设置一个数组将他们都存进来
    for(var i=0;i<aEle.length;i++){
        if(aEle[i].className==sClass) {//如果这个属性等于传进来的
            aResult.push(aEle[i]);//就把他加进来
        }
    }
    return aResult;//返回数组
}
window.onload=function () {
    var oDiv=document.getElementById('playimages');
    var oBtnPrev=getByClass(oDiv,'prev')[0];
    var oBtnNext=getByClass(oDiv,'next')[0];
    var oMarkLeft=getByClass(oDiv,'mark_left')[0];
    var oMarkRight=getByClass(oDiv,'mark_right')[0];
    var oBtn=document.getElementById('btn1');
    var oU1=document.getElementById('ull');
    var oTxt=document.getElementById('txt2');

    var nowZIndex=2;
    var oUlBig=getByClass(oDiv, 'big_pic')[0];
    var aLiBig=oUlBig.getElementsByTagName('li');
    var now=0;
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
    //左右按钮
    oBtnPrev.onmouseover=oMarkLeft.onmouseover=function ()
    {
        startMove(oBtnPrev, 'opacity', 100);
    };
    oBtnPrev.onmouseout=oMarkLeft.onmouseout=function ()
    {
        startMove(oBtnPrev, 'opacity', 0);
    };
    oBtnNext.onmouseover=oMarkRight.onmouseover=function ()
    {
        startMove(oBtnNext, 'opacity', 100);
    };
    oBtnNext.onmouseout=oMarkRight.onmouseout=function ()
    {
        startMove(oBtnNext, 'opacity', 0);
    };
    function tab() {

        aLiBig[now].style.zIndex=nowZIndex++;
        aLiBig[now].style.width=0;
        startMove(aLiBig[now], 'width', 630);
    }
    oBtnPrev.onclick=function () {
        now--;
        if(now==-1){
            now=aLiBig.length-1;
        }
        tab();
    };
    oBtnNext.onclick=function () {
        now++;
        if(now==aLiBig.length){
            now=0;
        }
        tab();
    }
    var timer=setInterval(oBtnNext.onclick,4000);//让他自动播放
    oDiv.onmouseover=function () {
        clearInterval(timer);//鼠标移进去时关闭定时器
    }
    oDiv.onmouseout=function () {
        timer=setInterval(oBtnNext.onclick,4000);
    }

}