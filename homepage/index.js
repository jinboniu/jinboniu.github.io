(function($){

	/*------------------   预加载  ---------------------*/

	$(window).load(function() {  
		$('#status').fadeOut();
		$('#preloader').delay(300).fadeOut('slow');
	});

$(document).ready(function() {
	/*-------------  一屏高度  --------------*/
	$(".screen-height").height($(window).height());

	$(window).resize(function(){
		$(".screen-height").height($(window).height());
	});
	/*-------------  适应机型的背景滚动  --------------*/
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		$('#home').css({'background-attachment': 'scroll'});
	} else {
		$('#home').parallax('50%', 0.1);
	}
	/*--------------  吸顶条  -----------------------*/
	$('.header').sticky({
		topSpacing: 0
	});
	$('body').scrollspy({
		target: '.navbar-custom',
		offset: 70
	})

	wow = new WOW({
		mobile: false
	});
	wow.init();

	/*------------  返回顶部  ----------------------*/
	$('a[href*=#]').bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1000);
		e.preventDefault();
	});
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.scroll-up').fadeIn();
		} else {
			$('.scroll-up').fadeOut();
		}
	});

	/*------------  demo1  --------------*/
	
	var J_box = document.createElement('div');
		$('.J_box').append(J_box);
	for(var i=0;i<100;i++){
		var oS =document.createElement('span')
		oS.className = 'span';
		J_box.appendChild(oS)
	}
	var oSS = J_box.getElementsByTagName('span');
	for(var i=0;i<oSS.length;i++){
		oSS[i].index = i;
		oSS[i].addEventListener('mouseover',function(){
			oSS[this.index].style.background = 'rgba(0,0,0,0)';
		},false)
	}

	/*------------  demo2  --------------*/
	var x = 10,
		y = 10,
		oBox = box.getElementsByTagName('span'),
		boff = false,
  		baff = true;
	for(var i = 0;i < x ;i++){
		for(var j = 0;j < y;j++){
			var box1 = document.createElement('span');
			box1.style.width = '36px';
			box1.style.height = '25px';
			box1.style.left = j*box.offsetWidth/x+'px';
			box1.style.top  = i*box.offsetHeight/y+'px';
			box1.style.background = 'url(image/3.jpg)';
			box1.style.backgroundPosition = -(j*box.offsetWidth/x)+'px '+(-i*box.offsetHeight/y)+'px';
			box1.style.backgroundRepeat="no-repeat"
			box.appendChild(box1)
		}
	}
  	btn.onclick = function(){
  		if(boff){
  			return;
  		}
  		boff = true;
  		if(baff){
  			var iNow1=99;
  			timer = setInterval(function(){
  				// console.log(iNow1)
  				if(iNow1 == -1){
  					iNow1 = 99;
  					clearInterval(timer);
  					baff = false;
  					boff = false;
  				}
  				oBox[iNow1].style.transform = 'translateY(5px)';
  				oBox[iNow1].style.backgroundImage = 'url(image/4.jpg)';
  				iNow1--;
  				
  			},70)
  		}else{
  			var iNow2=0;
  			timer = setInterval(function(){
  				// console.log(iNow2)
  				if(iNow2 == oBox.length){
  					iNow2 = 0;
  					clearInterval(timer);
  					baff = true;
  					boff = false;
  				}
  				oBox[iNow2].style.transform = 'translateY(0px)';
  				oBox[iNow2].style.backgroundImage = 'url(image/3.jpg)';
  				iNow2++;
  			},70)
  		}
  	}

  	/*------------  demo3  --------------*/
  	var arr = [
	  		[0,6,12,16,20]
	  		,[0,6,12,8,4],
	  		[2,6,10,16,22],
	  		[10,6,2,8,14]
  		],
		oBtn = document.getElementById('div'),
		oB = document.getElementById('ball'),
		iNow = 0;

		for(var i = 0;i < 25;i++){
			var oSo = document.createElement('span');
			oSo.className = 'ov';
			oBtn.appendChild(oSo);
		}

		//初始化
		function ints(){
			var oSo = oBtn.getElementsByTagName('span');
			for(var i = 0;i < oSo.length;i++){
				oSo[i].style.background = '#fff';
				oSo[i].innerHTML = '';
			}
		}

		oB.addEventListener('click',function(){
			ints();
			var oSo = oBtn.getElementsByTagName('span');
			for(var i = 0;i<arr[0].length;i++){
				oSo[arr[iNow][i]].style.background = 'red';
				oSo[arr[iNow][i]].innerHTML = i;
			}
			iNow++;
			if(iNow >= 4){
				iNow = 0;
			}
		},false)	





});



})(jQuery)