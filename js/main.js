$(function () {
    
    console.log(window.outerHeight);
    //banner
    var sNum = 0;

    setInterval(function () {
        sNum++;
        if (sNum == 3) {
            sNum = 0;
        }
        //        console.log(sNum);
        $(".banner > li").eq(sNum).fadeIn(2000).siblings().fadeOut(2000);
    }, 3000);


    //menuBtn nav

    var cNum = 0;

    
    //menuBtn을 클릭하면 navBg와 nav가 옆에서 나오도록
    //css에서 navBg와 nav에 right : -100%로 화면에서 안보이게 옆으로 옮겨놓고
    //제이쿼리에서 right:0 을 주면서 화면에 다시 보이게 해준다.
    $(".menuBtn").click(function () {
        
        $(".nav_area").stop().animate({
            "right": 0
        }, 500);
        //css에서 closeBtn>a에 값을 줬기때문에 제이쿼리에서도 선택자를 closeBtn>a로 해줘야한다.
        //right : 80px 을 주는건 closeBtn의 보이는 위치가 80px이기때문에
        /*$(".closeBtn>a").stop().animate({
            "right": "80px"
        }, 500);*/
        
        $('.nav_area').show();
    });
    
    //closeBtn을 클릭하면 전부 화면 밖 오른쪽으로 나가게 
    $(".closeBtn").click(function () {
        
        $(".nav_area").animate({
            "right": "-100%",
        }, 500, function(){
            $('.nav_area').hide()
        } );
       
    });
    
    //nav에 호버하면 sub가 보이게

    $("#nav>li").eq(2).mouseover(function () {
        $(".sub").stop().slideDown(300)

    })
    
    $("#nav>li").eq(2).mouseout(function(){
        $(".sub").stop().slideUp(300)
    })


})
