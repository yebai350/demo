window.onload = function(){	
	//返回顶部
	var backtop = document.getElementById("back");
	backtop.onclick = function(){
		window.scrollY = document.documentElement.scrollTop = document.body.scrollTop = 0;
	}
	window.onscroll = function(){
		var fixtion = document.getElementById("fixtion");
		var li = fixtion.getElementsByTagName("li");
		var scrolltop = document.documentElement.scrollTop || document.body.scrollTop  || window.scrollY;
		if(scrolltop >= 691){
			console.log(scrolltop);
			backtop.style.display = "block";
			fixtion.className = "fixtion";
			li[0].style.marginLeft = "800px";
		}else{
			backtop.style.display = "none";
			fixtion.className = "nav_menu ul";
			li[0].style.marginLeft = "66px"
		}
	}
	//关闭下边的那个图
	var close = document.getElementById("close");
	var footer = document.getElementById("footer");
	close.onclick = function(){
		footer.style.display = "none"; 
	}
	//轮播图
	var curIndex=0;
	var timeInterval=4000;
	var left_arrow = document.getElementsByClassName("left_arrow")[0];
	var right_arrow = document.getElementsByClassName("right_arrow")[0];
	var arr=new Array();
	arr[0]="images/lun.jpg";
	arr[1]="images/lun2.jpg";
	arr[2]="images/lun3.jpg";
	arr[3]="images/lun4.jpg";
	arr[4]="images/lun5.jpg";
	arr[5]="images/lun6.jpg";
	setInterval(changeImg,timeInterval);
	function changeImg(){
		var obj=document.getElementById("obj");
		if (curIndex==arr.length-1){
		curIndex=0;
	}
		else{
			curIndex+=1;
	}
		obj.src=arr[curIndex];
	}
	//轮播图点击
	right_arrow.onclick = function(){
		if(curIndex == arr.length - 1){
	        curIndex = 0;
	    }else{
	        curIndex ++;
	    } 
		obj.src=arr[curIndex];
	}
	left_arrow.onclick = function(){
		if(curIndex == 0){
	        curIndex == arr.length - 1;
	    }else{
	        curIndex --;
	    } 
		obj.src=arr[curIndex];
	}
	//分页
	var pagelist = document.getElementById("citypage").children;
	for(let j=0;j<pagelist.length;j++){
		pagelist[j].onclick = function(){
			for(var i=0;i<pagelist.length;i++){
				pagelist[i].className = "";
			}
			this.className = "active";
		}
	}
	
}			