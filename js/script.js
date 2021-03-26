// https://codeday.me/ko/qa/20190307/17224.html  브라우저별 스크롤이벤트참고.

$(function () {


	var options = {
		'speed': 500,
		'initTop': 250, //초기탭메뉴 위치 top에서 아래로 250
		'alwaysTop': false, //항상따라다니도록, true는 고정
		'default_x': '#wrap' //가로축, 레이아웃이 가운데 정렬 일때 레이어가 붙는 아이디값
	}

	$('#floatdiv').Floater(options); //Jquery floater 레이어를 항상 화면에 떠있거나 따라 다니도록 처리


	//페이지 위치
	$('#btn01').click(function () {
		$('html, body').animate({
			scrollTop: $('#main').offset().top
		}, 800); //.offset()은 선택한 요소의 좌표를 가져오거나 특정 좌표로 이동시킵니다.
	});
	$('#btn02').click(function () {
		$('html, body').animate({
			scrollTop: $('#profile').offset().top
		}, 800);
	});
	$('#btn03').click(function () {
		$('html, body').animate({
			scrollTop: $('#CSS').offset().top
		}, 800);
	});
	$('#btn04').click(function () {
		$('html, body').animate({
			scrollTop: $('#Script').offset().top
		}, 800);
	});
	$('#btn05').click(function () {
		$('html, body').animate({
			scrollTop: $('#Responsive').offset().top
		}, 800);
	});
	$('#btn06').click(function () {
		$('html, body').animate({
			scrollTop: $('#Portfolio').offset().top
		}, 800);
	});
	$('#btn07').click(function () {
		$('html, body').animate({
			scrollTop: $('#Contact_Me').offset().top
		}, 800);
	});

	$('.pulse').click(function () {
		$('html, body').animate({
			scrollTop: $('#profile').offset().top
		}, 800);
	});


	//메뉴클릭시 페이지 이동
	var logo = $('.mLogo');
	var menu = $('#menuWrap>ul>li');
	var contents = $('#contents>div');
	var btn = $('#floatdiv ul li');


	//메뉴클릭시 페이지 이동
	logo.click(function (event) {
		event.preventDefault(); //추가로 이벤트를 전파하지 않고 취소
		var tg = $(this); //현재 해당요소를 tg
		var i = tg.index(); //일치하는요소를 i라 하고
		var section = contents.eq(i); //i순번에 해당 컨텐츠를 section에 담아
		var tt = section.offset().top; //section을 top으로 이동한 값을 tt
		$('html,body').stop().animate({
			scrollTop: tt
		}); //scrollTop:화면이 시작되자 마자 원하는 위치tt로 스크롤 이동
	});


	menu.click(function (event) {
		event.preventDefault(); //추가로 이벤트를 전파하지 않고 취소
		var tg = $(this); //현재 해당요소를 tg
		var i = tg.index(); //일치하는요소를 i라 하고
		var section = contents.eq(i); //i순번에 해당 컨텐츠를 section에 담아
		var tt = section.offset().top; //section을 top으로 이동한 값을 tt
		$('html,body').stop().animate({
			scrollTop: tt
		}); //scrollTop:화면이 시작되자 마자 원하는 위치tt로 스크롤 이동
	});


	//스크롤 이동시 메뉴와 버튼 활성화
	$(window).scroll(function () {
		var sct = $(window).scrollTop(); //페이지 시작시 윈도우창에 스크롤의 위치를 sct(스크롤탑)으로
		contents.each(function () { //반복문
			//each는 jQuery를 사용해 배열을 관리하고자 할 때 each() 메서드를 사용(object 와 배열 모두에서 사용할 수 있는 일반적인 반복 함수
			//여기서는 일반 메서드:제이쿼리에 선택자를 넘기면 해당 선택자를 자바스크립트의 반복문과 같이 사용됨.
			var tg = $(this); //현재 해당요소를 tg
			var i = tg.index(); //일치하는요소를 i라 하고
			if (tg.offset().top <= sct) { //스크롤탑의 위치가 top보다 크거나 같다면 tg을 특정좌표로 이동
				menu.removeClass('on'); //메뉴 on취소
				menu.eq(i).addClass('on'); //현재 순번 메뉴 on
				btn.removeClass('active'); //버튼 활성화취소
				btn.eq(i).addClass('active'); //현재 순번 버튼활성화
			}
		});
	});



	//마우스휠 이벤트 : 브라우저 간 마우스 휠 속도 표준화.
	//익스, 크롬, 사파리, 오페라:mousewheel 이라는 이벤트를 사용할 수 있고,파이어폭스 의 경우:DOMMouseScroll 이라는 이벤트를 사용
	//파이어 폭스는 mousewheel 이라는 이벤트가 없기 때문에 mousewheel 과 DOMMouseScroll 이벤트 두개를 동시에 걸어주는 메서드인 .on() 를 사용해야 함.

	$("div.mn").each(function () { //개별적으로 휠 이벤트 적용
		$(this).on("mousewheel DOMMouseScroll", function (e) { //마우스 휠 이벤트: 마우스휠을 이용하여 스크롤(위,아래).예:아래-120,위120
			e.preventDefault(); //추가로 이벤트를 전파하지 않고 취소
			var delta = 0;
			if (!event) event = window.event; // DOM 이벤트 핸들러가 호출되는 동안에만 사용할 수 있는 마이크로소프트에서 제공하는 인터넷 익스플로러의 프로퍼티.
			//위에서 function (e)의 구문에서 Internet Explorer의 경우 e가 존재하지 않으므로 대신에 window.event를 필요로함.

			if (event.wheelDelta) { //wheelDelta:마우스 휠을 '내리게' 되면 -120 을 출력하고 마우스 휠을 '올리게' 되면 120 을 출력.
				//노트북에선 마우스 내릴 때 -150 올릴때 150 으로 표시되는 경우가 있음.
				// https://codeday.me/ko/qa/20190307/17224.html  브라우저별 스크롤이벤트참고.

				delta = event.wheelDelta / 120; /* IE/Chrome/Opera */
				/* if (window.opera) delta = -delta; //만약 오페라 브라우져라면 -delta */
			} else if (event.detail) delta = -event.detail / 3; // 또는 /3대신  * -40사용하기도 함. Safari 및 Chrome에서 wheelDelta는 마우스 휠의 경우 120 대신 3


			var moveTop = null;

			//마우스휠을 위에서 아래로
			if (delta < 0) {
				if ($(this).next() != undefined) {
					moveTop = $(this).next().offset().top;
				}

				if ($(this).next().attr('id') == "Contact_Me") {
					triggerAnimation()
				}

				//마우스휠을 아래에서 위로
			} else {
				if ($(this).prev() != undefined) {
					moveTop = $(this).prev().offset().top;
				}
			}

			//화면이동0.5초
			$("html,body").stop().animate({
				scrollTop: moveTop + 'px'
			}, {
				duration: 500
			});
		});
	});
});

$(document).ready(function () {
	/*   Copyright (c) 2021 by Heidi (https://codepen.io/HeidiChang/pen/gPwPZX)
	  Fork of an original work CSS animated waves (https://codepen.io/loktar00/pen/kfrKC) */
	//물결배경

	var ocean = document.getElementById("ocean"),
		waveWidth = 10,
		waveCount = Math.floor(window.innerWidth / waveWidth),
		docFrag = document.createDocumentFragment();
	for (var i = 0; i < waveCount; i++) {
		var wave = document.createElement("div");
		wave.className += " wave";
		docFrag.appendChild(wave);
		wave.style.left = i * waveWidth + "px";
		wave.style.webkitAnimationDelay = (i / 100) + "s";

		var wave_middle = document.createElement("div");
		wave_middle.className += " wave_middle";
		docFrag.appendChild(wave_middle);
		wave_middle.style.left = i * waveWidth + "px";
		wave_middle.style.webkitAnimationDelay = (i / 97) + "s";

		var wave_bottom = document.createElement("div");
		wave_bottom.className += " wave_bottom";
		docFrag.appendChild(wave_bottom);
		wave_bottom.style.left = i * waveWidth + "px";
		wave_bottom.style.webkitAnimationDelay = (i / 91) + "s";

		var wave_light = document.createElement("div");
		wave_light.className += " wave_light";
		docFrag.appendChild(wave_light);
		wave_light.style.left = i * waveWidth + "px";
		wave_light.style.webkitAnimationDelay = (i / 86) + "s";

	}
	ocean.appendChild(docFrag);
});

/* 둥실둥실 */

$(function () {
	$('.main_me').DB_springMove({
		key: 'red',
		dir: 'x',
		mirror: 3,
		radius: 10,
		motionSpeed: 0.08
	})

})

$(document).ready(function () {
	$(".title").lettering();
	$(".button").lettering();

	$('.restart-btn').click(function () {
		animation();
	});
});

// $(document).ready(function () {
// 	animation();
// }, 1000);


function triggerAnimation() {
	setTimeout(function () {
		animation();
	}, 300);
}

function animation() {
	var title1 = new TimelineMax();
	title1.to(".button", 0, {
		visibility: 'hidden',
		opacity: 0
	})
	title1.staggerFromTo(".title span", 0.5, {
		ease: Back.easeOut.config(1.7),
		opacity: 0,
		bottom: -80
	}, {
		ease: Back.easeOut.config(1.7),
		opacity: 1,
		bottom: 0
	}, 0.05);
	title1.to(".button", 0.2, {
		visibility: 'visible',
		opacity: 1
	})
}

/* 프로필 차트 */

$(function () {
	activate = 0;

	function setchartpercent() {
		var $content = $('#scene-2-content'),
			$charts = $content.find('.chart');
		$charts.find('.percent-number').eq(0).text(90);
		$charts.find('.percent-number').eq(1).text(70);
		$charts.find('.percent-number').eq(2).text(90);
		$charts.find('.percent-number').eq(3).text(85);
	};
	$(window).scroll(function () {
		var sct = $(this).scrollTop();
		if (sct >= 1000 && sct < 2000) {
			activateScene2();
		} else {
			no_activateScene2();
		};
	});

	//activateScene2();

	function no_activateScene2() {
		var $content = $('#scene-2-content'),
			$charts = $content.find('.chart');
		$content.stop(true).animate({
			right: '-1200'
		}, 1200, 'easeInOutQuint');
		activate = 0;
		setchartpercent();
	};

	function activateScene2() {
		var $content = $('#scene-2-content'),
			$charts = $content.find('.chart');
		$content.stop(true).animate({
			right: '0'
		}, 1200, 'easeInOutQuint');
		if (activate == 0) {
			setchartpercent();
			$charts.each(function () {
				var $chart = $(this);
				var $circleLeft = $chart.find('.left .circle-mask-inner').css({
					transform: 'rotate(0)'
				});
				// $circleRight 왼쪽 div
				var $circleRight = $chart.find('.right .circle-mask-inner').css({
					transform: 'rotate(0)'
				});
				var $percentNumber = $chart.find('.percent-number');
				var percentData = $percentNumber.text();
				$percentNumber.text(0);
				// var percent 0~60, 0~90, 0~20, 0~45
				$({
					percent: 0
				}).delay(1000).animate({
					percent: percentData
				}, {
					duration: 1500,
					progress: function () {
						var now = this.percent,
							deg = now * 360 / 100,
							degRight = Math.min(Math.max(deg, 0), 180),
							degLeft = Math.min(Math.max(deg - 180, 0), 180);
						$circleRight.css({
							transform: 'rotate(' + degRight + 'deg)'
						});
						$circleLeft.css({
							transform: 'rotate(' + degLeft + 'deg)'
						});
						$percentNumber.text(Math.floor(now));
					}
				});
			});
		};
		activate = 1;
	};


});

$(function(){
	//컴퓨터이미지 호버하면 자동 스크롤
	$('.css_L .css_img').hover(function(){
		var ah = $(this).find('a').innerHeight();
		var img = $(this).find('img');
		var imgh = $(this).find('img').innerHeight();

		img.stop().animate({top:ah-imgh},5000);

	},function(){
		var ah = $(this).find('a').innerHeight();
		var img = $(this).find('img');
		var imgh = $(this).find('img').innerHeight();

		img.stop().animate({top:0},5000);
	});
	
});
