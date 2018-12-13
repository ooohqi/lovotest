//1、自动播放
//currIndex：当前图片的下标
let currIndex = 0;
var myTimer = null;

function autoPlay(){	
	if(myTimer!=null){
		return;
	}
	myTimer = setInterval(function(){
		//1、改变数据（图片序号）
		let outIndex = currIndex;//要出去的那张。
		currIndex=currIndex+1;
		//2、边界处理
		if(currIndex>2 || currIndex<0){
			currIndex = 0;
		}
		//3、改变外观
		showImg(outIndex,currIndex);
	},3000);	
}

//2、停止
function stop(){
	if(myTimer!=null){
		window.clearInterval(myTimer);
		myTimer = null;
	}
}

//3、跳转指定的图片
//
function goImg(transIndex){//2
	//1、改变数据（图片序号）
	let outIndex = currIndex;
	currIndex=transIndex;//2
	//2、边界处理
	if(currIndex>2 || currIndex<0){
		currIndex = 0;
	}
	//3、改变外观
	showImg(outIndex,currIndex);
}

//
//参数：
//outIndex:淡出的那张图片的序号
//inIndex:淡入的那张图片的序号
function showImg(outIndex,inIndex){
	//3、改变外观
	//1)、改图片
	let imgs = $("#banner").children;
	let bwidth = $("#banner").offsetWidth;
	imgs[inIndex].style.left = bwidth+"px";
	//让inIndex滑入
	linearMove03(imgs[inIndex],"left",bwidth,0,340);
	//让outIndex滑出
	linearMove03(imgs[outIndex],"left",0,-bwidth,340);
	
	//2)、改豆豆
	let lis = $("#banner").lastElementChild.children;
	for(let i=0;i<lis.length;i++){
		lis[i].style.cssText= "color: #4c4c4c;font-size: 12px;height:33px;line-height:33px;margin-top: 4px;text-align: center;background: rgba(255,255,255,.5);";
	}
	lis[currIndex].style.cssText = "background:url(img/lbzb1.png) no-repeat;color: #fff;padding-top:4px;height: 33px;line-height: 33px;margin-top: 0;";
}

window.onload = function(){
	//1、自动播放
	autoPlay();
	//2、鼠标放上，停止播放
	$("#banner").onmouseover = stop;

	//3、鼠标离开，继续播放
	$("#banner").onmouseout = autoPlay;
	
	//4、点击豆豆，跳转到对应图片
	let lis = $("#banner").lastElementChild.children;
	
	for(var i=0;i<lis.length;i++){
		lis[i].setAttribute("index",i);//这句话是给每个li增加了一个index属性，值是下标。
		lis[i].onclick = function(){
			goImg(parseInt(this.getAttribute("index")));
		};
	}
}	
