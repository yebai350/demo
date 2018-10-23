window.onload = function() {
	var list = document.getElementsByClassName("tab-bottom")[0].children;
	var log = document.getElementById("login-div-box");
	var note_login = document.getElementById("note_login");
	list[0].onclick = function(){
		log.style.display = "block";
		note_login.style.display = "none";
		list[0].style.color = "black";
		list[0].style.borderBottom = "2px solid #000000";
		list[1].style.color = "#C1B9B9";
		list[1].style.border = "none";
	}
	list[1].onclick = function(){
		note_login.style.display = "block";
		log.style.display = "none";
		list[1].style.color = "black";
		list[1].style.borderBottom = "2px solid #000000";
		list[0].style.color = "#C1B9B9";
		list[0].style.border = "none";
	}
	var phone = document.getElementById("phone");
	var pho = document.getElementById("pho");
	var error_1 = document.getElementById("error_one");
	var error_2 = document.getElementById("error_two");
	var error_3 = document.getElementById("error_three");
	var auth_code = document.getElementById("auth_code");
	var pasw = document.getElementById("pasw");
	var code = document.getElementById("code");
	error_2.style.display = "none";
	//手机号验证
	phone.onfocus = function(){
		this.style.background = "white";
	}
	phone.onblur = function(){
		var phone_v = document.getElementById("phone").value;
		this.style.background = "none";
		var reg = /^1(3|5|8|7|6)\d{9}$/;         
		if(reg.test(phone_v)){
			auth_code.style.display = "block";
			pasw.style.display = "block";
			error_2.style.display = "block";
		}else{
			error_1.style.opacity = 1;
			pho.style.borderColor = "red";
			v_over.style.width = 0;
			v_move.style.left = 0;
		}
	}
	//移动滑块
	var v_move = document.getElementsByClassName("v-move")[0];
	var v_over = document.getElementsByClassName("v-over")[0];
	var v_tip = document.getElementsByClassName("v-tip")[0];
	v_move.onmousedown = function(e) {
		var e = e || event;
		var mousePos = {
			x: e.offsetX,
			y: e.offsetY
		}
		document.onmousemove = function(e) {
			var e = e || event;
			var _left = (e.clientX - v_move.parentNode.offsetLeft) - mousePos.x;
			v_over.style.width = v_move.style.left = Math.min(v_move.parentNode.offsetWidth - v_move.offsetWidth, Math.max(0, _left)) + "px";
		}
		return false;
	}
	document.onmouseup = function() {
		document.onmousemove = null;
		//是否滑动成功
		if(v_move.offsetLeft == (v_move.parentNode.offsetWidth - v_move.offsetWidth)) {
			v_over.style.backgroundColor = "#5AC65A";
			v_tip.innerText = "验证通过";
			v_move.onmousedown = null;
			document.onmouseup = null;
			v_move.innerHTML = "√";
			v_move.style.color = "#5AC65A"
			
		} else {
			v_over.style.width = 0;
			v_move.style.left = 0;
		}return false;
		
	}
	//验证码验证
	code.onblur = function(){
		var code_y = code.value;
		if(/[0-9]{6}/.test(code_y)){
			
		}else{
			error_2.style.opacity = 1;
		}
	}
	
	//密码验证
	
	upwd.onblur = function(){
		var upwd_y = upwd.value;
		var res = /\w{6,16}/;
		var regist_out = document.getElementById("regist_out");
		
		if(res.test(upwd_y)){
			regist_out.style.background = "none"
			regist_out.style.color = "black"
		}else{
			error_3.style.opacity = 1;
			
		}
	}

}