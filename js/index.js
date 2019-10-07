window.onload = function(){
	var mySwiper = new Swiper('.slider-touch', {
		autoplay: 2000,//可选选项，自动滑动，手指触屏滑动会停止自动轮播
		autoplayDisableOnInteraction : false,//手指触屏滑动之后，重新开启自动轮播
		initialSlide :0,//初始显示的li的索引
		speed : 500,//滑动的速度
		observer:true,//当li节点被修改的时候自动更新Swiper
		observeParents:true,//当容器container宽度改变的时候(window.onresize或者自适应)自动更新Swiper
		grabCursor : true,//鼠标抓手形状，触屏看不到
		pagination : '.swiper-pagination',//下面的图标跟随切换
		loop : true,//无缝轮播 自动在li列表的前面添加最后一个，在li列表后面添加第一个
	});


	
	//倒计时
	//设置结束时间
	var endTime = new Date();
	endTime.setFullYear(2019);
	endTime.setMonth(5);
	endTime.setDate(22);
	endTime.setHours(12);
	endTime.setMinutes(0);
	endTime.setSeconds(0);
	var endTimer = endTime.getTime();//获取结束时间
	// console.log(endTimer);
	console.log(new Date(endTimer))
	var hour = document.getElementById("hour");
	var min = document.getElementById("min");
	var sec = document.getElementById("sec");
	//转换时间
	function changeTime(time,obj1,obj2,obj3){
		var nowTime = new Date();
		var sec = (endTime - nowTime.getTime())/1000;
		//console.log(sec);
	
		if (sec > 0){
			var hour = Math.floor(sec/3600);//小时
			sec %= 3600;
			var min = Math.floor(sec/60);//分钟
			sec = Math.floor(sec%60);//秒
			obj1.innerHTML = addZero(hour);
			obj2.innerHTML = addZero(min);
			obj3.innerHTML = addZero(sec);
		}else{
			clearInterval(timer);
		}
	}
	var timer = setInterval(function(){
		changeTime(endTimer,hour,min,sec);
	},1000);
	changeTime(endTimer,hour,min,sec);

	//补零
	function addZero(time){
		time = time < 10 ? '0' + time : '' + time 
		 return time;
	}

}