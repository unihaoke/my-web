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

    var nowZIndex=2;
    var oUlBig=getByClass(oDiv, 'big_pic')[0];
    var aLiBig=oUlBig.getElementsByTagName('li');
    var now=0;
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