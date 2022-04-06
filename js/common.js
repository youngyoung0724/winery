
$(document).ready(function(){
    $("#header_part").load("./header.html", function(){
        $('.carousel').carousel({
            interval: 3000
        });

        // 메뉴버튼 클릭
        $("header nav .resBtn").click(function(){
            console.log(this + "보여줘");
            $(".darkbg").css("z-index", "10");
            $(".darkbg").addClass("active");
            $(".modal").addClass("active");

            return false;
        });

        $(".modal .btn").click(function(){
            console.log(this + "닫아줘");
            $(".modal").removeClass("active");
            $(".darkbg").css("z-index", "-1");
            $(".darkbg").removeClass("active");
            return false;
        });


        // btn-hover
        $(".modal .btn").hover(function(){
            $(this).find("img").attr("src", "./img/close-hover.png");
        }, function(){
            $(this).find("img").attr("src", "./img/close.png");
        })
    
    });






    // footer - sns:hover{
    $("#footer_part").load("./footer.html", function(){

        $("footer .sns li img").eq(0).hover(function(){
            $(this).attr("src","./img/sns-1-hover.svg");
        }, function(){
            $(this).attr("src","./img/sns-1.svg");
        });
    
        $("footer .sns li img").eq(1).hover(function(){
            $(this).attr("src","./img/sns-2-hover.svg");
        }, function(){
            $(this).attr("src","./img/sns-2.svg");
        });
    
        $("footer .sns li img").eq(2).hover(function(){
            $(this).attr("src","./img/sns-3-hover.svg");
        }, function(){
            $(this).attr("src","./img/sns-3.svg");
        });
    });



});


