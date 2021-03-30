$(function () {

    //슬라이드 이미지
    var visual = $('.pc_main>ul>li'); //슬라이드 이미지
    var button = $('.slide_num>ul>li'); //슬라이드 버튼
    var current = 0; //현재상태 초기화
    var setIntervalId; //변수선언

    function move(tg, start, end) { //move함수를 이용해 해당객체를 시작과 끝지점으로 이동
        tg.css('left', start).stop().animate({
            left: end
        }, 500);
    }

    function timer() { //일정시간 호출하기위해 타이머를 만듬.

        setIntervalId = setInterval(function () { //반복실행 지정

            var prev = visual.eq(current); //현재 자신의 위치를 prev에 담고
            var pn = button.eq(current); //현재 순번 버튼을 pn으로 담고
            move(prev, 0, '-100%'); //오른쪽에서 왼쪽으로 이동

            pn.removeClass('on'); //순번 버튼 on해제
            current++; //현재 상태에서 하나씩 추가

            if (current == visual.size()) {
                current = 0;
            }
            //비주얼 이미지의 사이즈가 끝까지 갔다면 current에 담아서 초기화 

            var next = visual.eq(current);
            var pnn = button.eq(current);
            move(next, '100%', 0);
            pnn.addClass('on')
        }, 3000);

    }

    timer();

    $('.sd_stop').click(function () { //stop버튼을 클릭하면
        clearInterval(setIntervalId); //반복취소
        $('.sd_stop').hide();
        $('.sd_start').show();
    });

    $('.sd_start').click(function () { //stop버튼을 클릭하면
        timer(); //반복실행
        $('.sd_stop').show();
        $('.sd_start').hide();
    });

    button.click(function () {

        var tg = $(this); //클릭한 버튼을 tg라 하고
        var i = tg.index(); //클릭되어진 요소(인덱스0~2)를 i라하고
        button.removeClass('on');
        tg.addClass('on');
        movel(i); //버튼을 누르면 현재 화면에서 해당요소의 이미지가 보여지도록

    });

    function movel(i) {
        if (current == i) {
            return
        } //i가 현재화면과 같다면 되돌아가~~
        var currentEl = visual.eq(current);
        var nextEl = visual.eq(i);

        currentEl.css({
            left: 0
        }).stop().animate({
            left: '-100%'
        }, 500);
        nextEl.css({
            left: '100%'
        }).stop().animate({
            left: 0
        }, 500);

        current = i;
    }





    //보도자료 슬라이드

    var current1 = 0;
    var subtext = $('.sub_text>li');
    var tim;

    function set() { //set객체를 만듬. 

        tim = setInterval(function () { //반복실행되는 서브텍스트들을 tim으로 지정

            var prev1 = subtext.eq(current1); //현재 초기화된 상태에서 서브텍스트를 prev1에 할당
            move1(prev1, 0, '-100%'); //위로 이동

            current1++; //하나씩 추가되어 보여지도록

            if (current1 == subtext.size()) { //만약 서브텍스트의 사이즈(개수)가 끝까지 갔다면
                current1 = 0; //초기화
            }

            var next = subtext.eq(current1);
            move1(next, '100%', 0);

        }, 3500);
    }

    set();

    $('.sub_text').hover(function () { //서브텍스트에 마우스 올리면
        clearInterval(tim); //반복실행 해제
    }, function () { //마우스를 떼면
        set(); //set함수를 다시 불러와 실행
    });

    function move1(tgg, start, end) {
        tgg.css('top', start).stop().animate({
            top: end
        }, 800); //위쪽으로
    }


    //사회공헌 슬라이드

    var current2 = 0;
    var subtext1 = $('.sub_text1>li');
    var tim1;

    function set1() { //set객체를 만듬. 

        tim1 = setInterval(function () { //반복실행되는 서브텍스트들을 tim으로 지정

            var prev2 = subtext1.eq(current2); //현재 초기화된 상태에서 서브텍스트를 prev1에 할당
            move2(prev2, 0, '-100%'); //위로 이동

            current2++; //하나씩 추가되어 보여지도록

            if (current2 == subtext1.size()) { //만약 서브텍스트가 현 상태와 동일하다면
                current2 = 0; //초기화
            }

            var next2 = subtext1.eq(current2);
            move2(next2, '100%', 0);

        }, 3500);
    }

    set1();

    $('.sub_text1').hover(function () { //서브텍스트에 마우스 올리면
        clearInterval(tim1); //반복실행 해제
    }, function () { //마우스를 떼면
        set1(); //set함수를 다시 불러와 실행
    });

    function move2(tgg, start, end) {
        tgg.css('bottom', start).stop().animate({
            bottom: end
        }, 800); //위쪽으로
    }



    //sns호버
    $('.cont5_sns>ul>li>a').hover(function () {
        $(this).find('img').css({
            'transform': 'scale(1.1)',
            'transition': 'all 0.2s'
        });
    }, function () {
        $(this).find('img').css({
            'transform': 'scale(1)'
        });
    });




    //top버튼

    $('#top_btn>a').hide();
    $(window).scroll(function () { //브라우저에 스크롤 변화가 발생하면 호출

        if ($(this).scrollTop() > 500) { //스크롤의 위치가 500보다 크다면
            $('#top_btn>a').fadeIn(); //버튼이 서서히 나타나도록
        } else {
            $('#top_btn>a').fadeOut(); //그렇지않으면 서서히 사라지도록
        }
    });

    $('#top_btn>a').click(function () { //탑버튼을 클릭했을때 (click이벤트)
        $('html,body').animate({
            scrollTop: 0
        }, 400); //스크롤의 위치를 탑0으로 이동
        return false; //원래 가지고 있는 링크속성 무시
    });






    //모바일 메뉴

    $('.m_nav_btn').click(function () {
        $('#mo_nav').css('display', 'block')
    });

    $('.mo_close').click(function () {
        $('#mo_nav').css('display', 'none')
    });

    $('.mo_depth2').hide(); //서브메뉴 처음에는 안보이게

    /* 모바일 서브메뉴 슬라이드 */
    $('.mo_depth1>li>div').toggle(function () {
        var tg = $(this);
        var th = tg.next('.mo_depth2');

        th.slideDown();
        tg.addClass('on');

    }, function () {
        var tg = $(this);
        var th = tg.next('.mo_depth2');

        th.slideUp();
        tg.removeClass('on');
    });
});