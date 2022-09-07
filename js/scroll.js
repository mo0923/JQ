$(document).ready(function(){
    /* scrollTo 플러그인 사용 */
    $('.gnb a').click(function(e){
        e.preventDefault();
        // scrollTo(링크될 # || Y축픽셀값, 애니메이션 시간)
        $(window).scrollTo(this.hash || 0,500);
    });
});

// 스크롤 100px이상 되었을때 TOP버튼 나오도록 코딩
// if~else , scrollTop(), 이벤트 scroll
var sa =100;
$(window).scroll(function(){
    var num = $(window).scrollTop();
    console.log(num);
    if(num>sa){
        $('aside div').stop().fadeIn();
    }else{
        $('aside div').stop().fadeOut();
    };
});


/* animate 부드러운 스크롤탑 이동 */
$('.top').click(function(e){
    e.preventDefault();
    $('html,body').stop().animate({scrollTop:0},1000,'swing');
});

