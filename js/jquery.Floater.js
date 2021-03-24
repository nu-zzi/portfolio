/**
*  Jquery floater 레이어를 항상 화면에 떠있거나 따라 다니도록 처리
*
* options
*
*  allwaysTop : true , 항상 위. false 따라다니도록
*  speed  : 1000  따라다니는 속도
*  bottom : true 항상 하단에. false 따라다니도록
*  default_x : 중앙정렬일때 엘리먼트 옆에 퀵메뉴 붙히기
* 
* @since 2009-10-30
* @author jsyang <yakuyaku@gmail.com>
* @version 1
*
*/

//참고1) (function($) { /* 내용생략 */ })(jQuery); 에서 인자로 넘겨주는 jQuery는 jQuery 객체이고 결국 $ 매개변수가 함수 내에서 jQuery 객체로 사용된다.
//참고2) jquery를 다른 라이브러리와 함께 사용할 때 $ 때문에 충돌이 일어나는 경우가 있을 수 있다. 이를 미연에 방지하기 위해서 위와 같이 사용한다.

(function($) {  //(function($) { /* 내용생략 */ })(jQuery); 의 의미는 jQuery 라는 인자를 $ 라는 매개변수로 넘겨받아 사용하는 즉시 실행 함수를 의미

	$.extend($.fn, {  //$.extend는 다수의 객체를 하나의 객체로 합치는 merge기능을 수행. jQuery prototype ( $.fn) 객체를 확장 하여 jQuery()함수에 연결될 수있는 새로운 메소드를 제공.
		Floater : function(setting)  
		{
			var options = $.extend($.fn.Floater.defaults, setting); //떠있거나 따라다니는 기본값,세팅값
			var box   = this;
			var initTop = options.initTop; //탭메뉴 위치 250
			
			if(options.bottom) { //만약 하단에 있다면
				bottom_pos = $(window).height() - $(box).height() - initTop; //윈도우높이-박스높이-탭메뉴 위치 250
				$(box).css('top' , bottom_pos);
				initTop = bottom_pos; //초기값으로 이동
			}

			if(options.default_x) { //중앙정렬일때 엘리먼트 옆에 퀵메뉴 붙히기
				box.css('left' , getX($(options.default_x)) );
				if(box.css('display')=='none') box.css('display','block'); //박스보이게
				
				$(window).bind('resize', function() { //.bind() 메서드는 말 그대로 개체와 이벤트를 묶어주는 역할. 크기에 맞게 조정하고 
					box.css('left' , getX($(options.default_x))); //박스를 왼쪽으로 하여 퀵메뉴 붙이기
				});

			}

			var prevTop = initTop; //퀵메뉴위치를 이전탑의 위치에 담고 

			$(window).bind('scroll', function(e){adjustTop();}); //.bind() 메서드는 말 그대로 개체와 이벤트를 묶어주는 역할. 맨위 오브젝트가 값이 변경되면 호출.

			function getX(el) //getX 및 getY는 추상 메서드.(접근자메서드).EL 기본(.,[],()),EL 산술연산자( +,-,*, /,%)... https://codedragon.tistory.com/6009 

			{
				return el.get(0).offsetLeft + el.width(); //offsetParent 요소를 기준으로 왼쪽 위치 (픽셀 단위)를 반환 +가로값
			};

			function adjustTop() //맨위 오브젝트가 값이 변경되면 호출.
			{
				var newTop = computeTop();  //top의 위치 계산하여 newtop에 담고
				if (newTop <= initTop) newTop = initTop; 
				if (prevTop != newTop) { //새로운 탑위치와 이전탑의 위치가 다르다면
					layerMove(newTop); //새로운 탑의 레이어이동
					prevTop = newTop; //새로운 탑의 위치를 이전탑의 위치로
				}
			};

			function layerMove(dest) //목적지로 레이어이동
			{
				if(options.alwaysTop) { //true ,  항상 위에 위치한다면
					//var posx=$(window).scrollLeft() + $(window).width() - $(box).width();
					$(box).css({'top': dest}); //top으로 이동
				}else{ //그렇지않다면
					$(box).stop();  //멈췄다가
					$(box).animate({'top': dest},{'duration':options.speed}); //탑으로 이동
				}
			};

			function computeTop() //compute:계산하다. top의 위치 계산
			{
				return $(window).scrollTop() + initTop; //상단에서 탭메뉴위치로 반환
			};
		}

	});

	$.fn.Floater.defaults = {
		'alwaysTop' : false ,  //true이면 고정
		'bottom'    : false , //true이면 아래를 기준으로 탭메뉴 이동
		'default_x' : false ,
		'initTop'   : 50 , //스크롤위치
		'speed' : 30  //속도
	};

})(jQuery);