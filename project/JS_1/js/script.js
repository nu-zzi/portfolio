/* 네비 */

$(function () {
    _navHoverEventHandler();
    _navFocusEventHandler();
    _tab2hover();
    _tabmainheader();
    _swiperbanner();
    _favoritesPopup();
    _startPopup();
    _arrivePopup();
    _calendarPopup();
    _passengerPopup();
    _disabilityPopup();
    _datePicker();
    _passengerPopEventHandler();
    _disabilityPopEventHandler();
    _stationIndexClick();
    _stationListClick();
});

function _passengerPopEventHandler() {
    // 숫자 외 입력 방지
    $('.pop_passenger input').keyup(function () {
        this.value = this.value.replace(/[^0-9]/g, '').replace(/^0+/, '');
    });

    $('.pop_passenger input').focusout(function () {
        if (this.value === "") {
            this.value = 0;
        }
    });

    // 마이너스
    $('.pop_passenger .minus_btn').click(function () {
        var target = $(this).parents('.passenger').find('input');
        var prevValue = Number(target.val()); // 텍스트 -> 숫자로 변환 (계산하기 위해)

        if (prevValue > 0) { // 0 초과때만 작동하도록 (마이너스로 가는거 방지)
            target.val(--prevValue);
        }
    });

    // 플러스
    $('.pop_passenger .plus_btn').click(function () {
        var target = $(this).parents('.passenger').find('input');
        var prevValue = Number(target.val()); // 텍스트 -> 숫자로 변환 (계산하기 위해)

        if (prevValue >= 0) { // 0 이상때만 작동하도록
            target.val(++prevValue);
        }
    });
}

function _disabilityPopEventHandler() {
    // 숫자 외 입력 방지
    $('.pop_disability input').keyup(function () {
        this.value = this.value.replace(/[^0-9]/g, '').replace(/^0+/, '');
    });

    $('.pop_disability input').focusout(function () {
        if (this.value === "") {
            this.value = 0;
        }
    });

    // 마이너스
    $('.pop_disability .minus_btn').click(function () {
        var target = $(this).parents('.disability').find('input');
        var prevValue = Number(target.val()); // 텍스트 -> 숫자로 변환 (계산하기 위해)

        if (prevValue > 0) { // 0 초과때만 작동하도록 (마이너스로 가는거 방지)
            target.val(--prevValue);
        }
    });

    // 플러스
    $('.pop_disability .plus_btn').click(function () {
        var target = $(this).parents('.disability').find('input');
        var prevValue = Number(target.val()); // 텍스트 -> 숫자로 변환 (계산하기 위해)

        if (prevValue >= 0) { // 0 이상때만 작동하도록
            target.val(++prevValue);
        }
    });
}


function _datePicker() {
    $.datepicker.setDefaults({
        dateFormat: 'yy-mm-dd',
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년'
    });

    $("#datepicker").datepicker({
        onSelect: function (dateText, instance) {
            $('.calendar span').text(dateText);
        }
    });
}

/* function _passengerInput(){
    $("#datepicker").datepicker({
        onSelect: function (dateText, instance) {
            $('.calendar span').text(dateText);
        }
    });
}
 */

function _navHoverEventHandler() {
    $(".head_Nav>ul>li").hover(
        function () { // 뎁스1에 마우스가 오버 했을때
            /* $(this).addClass("active"); */
            $(this).find('.nav_sub').stop().animate({ // 뎁스1 높이를 220으로 애니메이트 (뎁스1 100 + 뎁스2 120)
                height: 260
            }, 250)
            // $(this).find('.nav_sub').css('height', '260px');
        },
        function () { // 뎁스1에 마우스가 벗어났을 때
            /* $('..nav_sub').removeClass("active"); */
            $(this).find('.nav_sub').stop().animate({ // 뎁스 1 높이를 100으로 애니메이트 (뎁스1의 원래 값)
                height: 0
            }, 250)
            // $(this).find('.nav_sub').css('height', '0px');
        }
    );
}

function _navFocusEventHandler() {
    $(".head_Nav>ul>li").focusin(function () {
        /* $('..nav_sub').addClass("active"); */
        $(this).find('.nav_sub').stop().animate({
            height: 260
        }, 250)
    });

    $(".head_Nav>ul>li").focusout(function () {
        /* $('..nav_sub').removeClass("active"); */
        $(this).find('.nav_sub').stop().animate({
            height: 0
        }, 250)
    });
}



/* 서비스예매 이미지 돌아가기 */
$(function () {
    $(".location").flip({
        axis: "y", //중심축
        reverse: true, //역,전환
        trigger: "hover", //마우스올렸을때
        speed: 250,
    });
});

/* 광고배너1 자동넘김 */

$(function () {
    var banner = $('.cont1_R_1>ul>li');
    var button1 = $('.arrowbox>a.next');
    var button2 = $('.arrowbox>a.prev');
    var current = 0;
    var setIntervalId00;
    var p = $('.number>p');

    timer(); //사용자 지정함수
    function timer() {
        setIntervalId00 = setInterval(function () {
            var prev = banner.eq(current);
            var pn = p.eq(current);

            move(prev, 0, '-100%');
            pn.removeClass('bl');

            current++;
            if (current == banner.size()) {
                current = 0;
            }

            var next = banner.eq(current);
            var pnn = p.eq(current);
            move(next, '100%', 0);
            pnn.addClass('bl');
        }, 2000)
    }

    function move(tg, start, end) {
        tg.css('left', start).stop().animate({
            left: end
        }, {
            duration: 500,
            ease: 'easeOutCubic'
        });
    }

    $('.cont1_R_1').on({
        mouseover: function () {
            clearInterval(setIntervalId00);
        },
        mouseout: function () {
            timer();
        }

    });

    button1.click(function () {
        var prev = banner.eq(current);
        var pn = p.eq(current);

        move(prev, 0, '-100%');
        pn.removeClass('bl');

        current++;

        if (current == banner.size()) {
            current = 0;
        }
        var next = banner.eq(current);
        var pnn = p.eq(current);
        move(next, '100%', 0);
        pnn.addClass('bl');

        return false;
    });


    button2.click(function () {
        var prev = banner.eq(current);
        var pn = p.eq(current);

        move(prev, 0, '100%');
        pn.removeClass('bl');

        current--;

        if (current == -banner.size()) {
            current = 0;
        }
        var next = banner.eq(current);
        var pnn = p.eq(current);
        move(next, '-100%', 0);
        pnn.addClass('bl');

        return false;
    });

});


function _tab2hover() {
    $(".cont2_2_disC").each(function () {
        $(this).hover(function () {
            $(this).animate({
                width: "750px"
            }, {
                queue: false,
                duration: 450
            });
            //queue:대기시간.false인 경우 애니메이션이 즉시 실행되도록...
        }, function () {
            $(this).animate({
                width: "135px"
            }, {
                queue: false,
                duration: 450
            });
        });
    });


}


function _tabmainheader() {
    $('.tab .tab-btn').click(function () {
        // 현재 클릭한 버튼의 순서
        var currentIndex = $(this).index();

        // tab 버튼 색 변경
        $('.tab .tab-btn').removeClass('on');
        $(this).addClass('on');

        // 내용물 변경
        $('.cont2').removeClass('on');
        $('.cont2').eq(currentIndex).addClass('on');
    });
}


function _swiperbanner() {
    var swiper1 = new Swiper('.swiper1', {
        spaceBetween: 30, //슬라이드 간격
        loop: true, //무한반복
        pagination: {
            el: '.swiper-pagination1',
            clickable: true, // 페이징을 클릭하면 해당 영역으로 이동
        },
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: '.next1', //다음버튼 클래스명
            prevEl: '.prev1', //이전버튼 클래스명
        }
    });
}

function _favoritesPopup() {
    $('.star_btn .cont1_open').click(function () {
        $('#pop_favorites').css('display', 'block');
        _scrollLock(true);
    });


    $('#pop_favorites button').click(function () {
        $('#pop_favorites').css('display', 'none');
        _scrollLock(false);
    });
}

function _stationIndexClick() {
    $('.stationIndexBtn li').click(function () {
        $('.stationIndexBtn li').removeClass('stationIndexOn');
        $(this).addClass('stationIndexOn');

    });
}

function _stationListClick() {
    $('.stationList li').click(function () {
        $('.stationList li').removeClass('stationIndexOn');
        $(this).addClass('stationIndexOn');

    });
}

function _startPopup() {
    $('.start').click(function () {
        $('#pop_start').css('display', 'block');
        _scrollLock(true);
    });


    $('#pop_start button').click(function () {
        $('#pop_start').css('display', 'none');
        _scrollLock(false);
    });

}


function _arrivePopup() {
    $('.arrive').click(function () {
        $('#pop_arrive').css('display', 'block');
        _scrollLock(true);
    });


    $('#pop_arrive button').click(function () {
        $('#pop_arrive').css('display', 'none');
        _scrollLock(false);
    });
}

function _calendarPopup() {
    $('.calendar').click(function () {
        $('#pop_calendar').css('display', 'block');
        _scrollLock(true);
    });


    $('#pop_calendar button').click(function () {
        $('#pop_calendar').css('display', 'none');
        _scrollLock(false);
    });
}

function _passengerPopup() {
    $('.passenger').click(function () {
        $('#pop_passenger').css('display', 'block');
        _scrollLock(true);
    });


    $('#pop_passenger button').click(function () {
        $('#pop_passenger').css('display', 'none');
        _scrollLock(false);
    });
}

function _disabilityPopup() {
    $('.disability').click(function () {
        $('#pop_disability').css('display', 'block');
        _scrollLock(true);
    });


    $('#pop_disability button').click(function () {
        $('#pop_disability').css('display', 'none');
        _scrollLock(false);
    });
}