var stationData = {
    '가' : ["가평", "각계", "강경", "강구", "강릉", "강촌", "개포", "건천", "경산", "경주", "계룡", "고한", "곡성", "공주", "광명", "광양", "광주", "광주송정", "광천", "구례구", "구미", "구포", "군북", "군산", "극락강", "기장", "김유정", "김제", "김천", "김천구미"],

    '나' : ["나전", "나주", "남성현", "남원", "남창", "남춘천", "논산", "능주"],

    '다' : ["다시", "단양", "대광리", "대구", "대성리", "대야", "대전", "대천", "덕소", "덕하", "도계", "도고온천", "도라산", "동대구", "동두천", "동백산", "동탄", "동해", "동화", "둔내", "득량"],

    '라' : [],

    '마' : ["마산", "마석", "만종", "망상해변", "매곡", "명봉", "목포", "몽탄", "무안", "묵호", "문산", "물금", "민둥산", "밀양"],

    '바' : ["반곡", "반성", "백마고지", "백양리", "백양사", "벌교", "별어곡", "보성", "봉성", "봉양", "봉화", "부강", "부산", "부전", "북영천", "북천", "분천", "불국사", "비동"],

    '사' : ["사곡", "사릉", "사북", "사상", "삼랑진", "삼례", "삼산", "삼탄", "삽교", "상동", "상봉", "상주", "서경주", "서광주", "서대전", "서울", "서원주", "서정리", "서천", "석불", "석포", "선평", "성환", "센텀", "소요산", "수서", "수원", "순천", "승부", "신경주", "신기", "신녕", "신동", "신례원", "신림", "신망리", "신창", "신탄리", "신탄진", "신태인", "신해운대", "심천", "쌍룡"],

    '아' : ["아산", "아우라지", "안강", "안동", "안양", "안인", "약목", "양동", "양원", "양평", "여수EXPO", "여천", "연산", "연천", "영덕", "영동", "영등포", "영월", "영주", "영천", "예당", "예미", "예산", "예천", "오근장", "오산", "오송", "오수", "옥산", "옥수", "옥천", "온양온천", "완사", "왕십리", "왜관", "용궁", "용문", "용산", "운천", "울산(통도사)", "웅천", "원동", "원주", "월포", "음성", "의성", "의정부", "이양", "이원", "익산", "인천공항T1", "인천공항T2", "일로", "일신", "임기", "임성리", "임실", "임진강", "입석리"],

    '자' : ["장사", "장성", "장항", "전곡", "전의", "전주", "점촌", "정동진", "정선", "정읍", "제천", "조성", "조치원", "좌천", "주덕", "중리", "증평", "지제", "지탄", "지평", "진례", "진부", "진상", "진영", "진주"],

    '차' : ["창원", "창원중앙", "천안", "천안아산", "철암", "청도", "청량리", "청리", "청소", "청주", "청주공항", "청평", "초성리", "추풍령", "춘양", "춘천", "충주"],

    '카' : [],

    '타' : ["탑리", "태백", "태화강", "퇴계원"],

    '파' : ["판교", "평내호평", "평창", "평택", "포항", "풍기"],

    '하' : ["하동", "하양", "한림정", "한탄강", "함안", "함열", "함창", "함평", "행신", "현동", "호계", "홍성", "화명", "화본", "화순", "황간", "횡성", "횡천", "효천", "희방사"],

};

/*

function _stationListHandler() {
    $('#stationIndexBtn li').click(function () {
        $('#stationList').empty();
        var currentIndex = $(this).index();

        for (var i = 0; i < window['stationList' + currentIndex].length; i++) {
            $('#stationList').append('<li>' + window['stationList' + currentIndex][i] + '</li>')
        }

    });
}

*/

$(function() {
    _stationInitial();
    _stationListHandler();
    _stationSelectkHandler();
});

function _stationInitial() {
    $('.stationList').empty();
    for (var i = 0; i < stationData['가'].length; i++) {
        $('.stationList').append('<li>' + stationData['가'][i] + '</li>')
    }
}

function _stationListHandler() {
    $('.stationIndexBtn li').click(function () {
        var target;

        if ($(this).parents('#pop_start').length > 0) { // 출발
            target = $('#pop_start .stationList');
        } else { // 도착
            target = $('#pop_arrive .stationList');
        }
        
        target.empty();
        var currentTarget = $(this).text(); // 가, 나, 다...

        for (var i = 0; i < stationData[currentTarget].length; i++) {
            target.append('<li>' + stationData[currentTarget][i] + '</li>');
        }
        _stationSelectkHandler();
    });
}

function _stationSelectkHandler() {
    $('.stationList li').click(function() {
        var selectedStation = $(this).text();

        if ($(this).parents('#pop_start').length > 0) { // 출발
            $('.start span').text(selectedStation);
        } else { // 도착
            $('.arrive span').text(selectedStation);
        }
    });
}

function _scrollLock(bool) {
    if (bool === true) { // 잠궈라
        $('body').css('overflow', 'hidden');
    } else { // 잠금 풀어라
        $('body').css('overflow', 'auto');
    }
}