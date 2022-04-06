$(document).ready(function(){

    $(window).scroll(function(){
        const $scroll_top = $(window).scrollTop();
        console.log("현재 문서 상단으로부터 이격된 거리 " + $scroll_top);

        // slide-font-color
        if($scroll_top > 40){
            $(".carousel .txt").addClass("active");
            $(".carousel img").css("display", "none");
            $(".carousel .scroll").css("display", "block");
        }
        if($scroll_top < 180){
            $(".carousel .txt").removeClass("active");
            $(".carousel img").css("display", "block");
            $(".carousel .scroll").css("display", "none");
        }

        // cont1-img-scroll
        if($scroll_top > 550){
            $(".ourstory").css("background-size", "auto 150%");
            $(".ourterrorirs").css("background-position", "0 100%");
        }
        if($scroll_top < 370){
            $(".ourstory").css("background-size", "auto 130%");
            $(".ourterrorirs").css("background-position", "50% 50%");
        }
        
        // cont3-img-scroll
        if($scroll_top > 1450){
            $(".cont3").css("background-position", "90% 0");
        }
        if($scroll_top > 1800){
            $(".cont3").css("background-position", "50% 50%");
        }

    });
    // nav-menu-hover
    const $menu = $("header nav .resBtn");
    $($menu).hover(function(){
        $(this).find("img").attr("src", "./img/hamburger-hover.png");
    }, function(){
        $(this).find("img").attr("src", "./img/hamburger.png");
    })

    // cont1-img-hover
    const $terr = $(".ourterrorirs .dark p");
    $($terr).hover(function(){
        $(this).closest(".dark").addClass("active");
    }, function(){
        $(this).closest(".dark").removeClass("active");
    });

    const $story = $(".ourstory .dark p");
    $($story).hover(function(){
        $(this).closest(".dark").addClass("active");
    }, function(){
        $(this).closest(".dark").removeClass("active");
    });

    // cont2-prevs-hover
    const $prev = $(".prevs .prev img");
    $($prev).hover(function(){
        $(this).attr("src", "./img/left-hover.svg");
    }, function(){
        $(this).attr("src", "./img/left-solid.svg");
    });
    
    const $right = $(".prevs .append img");
    $($right).hover(function(){
        $(this).attr("src", "./img/right-hover.svg");
    }, function(){
        $(this).attr("src", "./img/right-solid.svg");
    });


    // cont2 - prevs
    $(".cont2 .prevs .prev").click(function(){
        var $last = $(".cont2 .wines .wineboxs .box").last();
        console.log($last);
        $(".wines .wineboxs").prepend($last);
        return false;
    });

    $(".cont2 .prevs .append").click(function(){
        var $first = $(".cont2 .wines .wineboxs .box").first();
        console.log($first);
        $(".wines .wineboxs").append($first);
        return false;
    });

    // cont3-img-hover
    const $experiences = $(".cont3");
    $experiences.hover(function(){
        $(this).find(".dark").addClass("active");
    }, function(){
        $(this).find(".dark").removeClass("active");
    });

    // cont4-img-hover
    const $club =$(".cont4 .box").eq(0);
    $club.hover(function(){
        $(this).find(".dark").addClass("active");
    }, function(){
        $(this).find(".dark").removeClass("active");
    });

    const $restaurent =$(".cont4 .box").eq(1);
    $restaurent.hover(function(){
        $(this).find(".dark").addClass("active");
    }, function(){
        $(this).find(".dark").removeClass("active");
    });

    const $event =$(".cont4 .box").eq(2);
    $event.hover(function(){
        $(this).find(".dark").addClass("active");
    }, function(){
        $(this).find(".dark").removeClass("active");
    });

    // cont5 - prev
    $(".cont5 .prevs .prev").click(function(){
        var $last = $(".cont5 .events .winerys .box").last();
        $(".cont5 .events .winerys").prepend($last);
        return false;
    });

    $(".cont5 .prevs .append").click(function(){
        var $first = $(".cont5 .events .winerys .box").first();
        $(".cont5 .events .winerys").append($first);
        return false;
    });

});

wines = [
    ["wines_01.jpg", "chardonnay 2021", "$15.00", "$9.99", "Add to Cart"],
    ["wines_02.jpg", "merlot rose 2021", "", "$25.00", "Add to Cart"],
    ["wines_03.jpg", "sauvignon blanc 2021", "", "$10.00", "Add to Cart"],
    ["wines_04.jpg", "merlot 2021", "", "$33.00", "Add to Cart"],
    ["wines_05.jpg", "carbernet sauvignon 2021", "", "$39.00", "Add to Cart"],
    ["wines_06.jpg", "seven case #1", "", "$59.99", "Add to Cart"],
    ["wines_07.jpg", "seven case #2", "", "$65.00", "Add to Cart"],
]

let winesCase = "";

let wineBox = document.querySelector(".cont2 .wines .wineboxs");

wines.forEach(function(v, i){
    winesCase += `
    <div class="box">
        <div class="img" style="background-image:url(./img/${v[0]})"></div>
        <h2>${v[1]}</h2>
        <div class="price">
            <h3>${v[2]}</h3>
            <h3>${v[3]}</h3>
        </div>
        <a href="">${v[4]}</a>
    </div>
    `;
});

wineBox.innerHTML = winesCase;


// cont4 
club = [
    ["content3-1.jpg", "seven wine club", "join the club"],
    ["content3-2.jpg", "seven restaurent", "reserve a table"],
    ["content3-3.jpg", "private event", "learn more"],
];

let wineCol = "";

let wineEvent = document.querySelector(".cont4 .row");

club.forEach(function(v, i){
    wineCol +=`
    <div class="col p-none">
        <div class="box" style="background-image:url(./img/${v[0]})">
            <div class="dark">
                <div class="txt">
                    <h1 class="poiret">${v[1]}</h1>
                    <a href="">${v[2]}</a>
                </div>
            </div>
        </div>
    </div>
    `;
});

wineEvent.innerHTML = wineCol;

// cont5 
eventarry = [
    ["winery-1.jpg", 
    "New lorem nulla dolor glavrida", 
    "Faucibus feugiat quam vulputate, condimentum tempor neque. Quisque lobortis venenatis quam vel porta. Mauris mollis in diam.", 
    "Read more"],
    ["winery-2.jpeg", 
    "Lorem glavrida nulla dolor ipsum",
    "Aenean massa sapien, faucibus feugiat quam vulputate, condimentum tempor neque. Quisque lobortis venenatis quam vel porta. Mauris mollis in diam ut feugiat.",
    "Read more"],
    ["winery-3.jpeg", 
    "Glavrida amet wine festival", 
    "Proin ornare metus ut lacus varius, eu condimentum nibh vehicula. Etiam eget ultricies enim, a ullamcorper nunc. Duis non nunc accumsan, condimentum nisi eget, eleifend odio. Nunc in orci nec libero!", 
    "Read more"],
    ["winery-4.jpeg", 
    "Nulla glavrida dolor cooking class", 
    "Etiam eget ultricies enim, a ullamcorper nunc. Duis non nunc accumsan, condimentum nisi eget, eleifend odio. Nunc in orci nec libero sodales facilisis.", 
    "Read more"],
    ["winery-5.jpeg", 
    "Presentation of lorem ipsum dolor", 
    "Nunc in orci nec libero sodales facilisis. Phasellus hendrerit ante diam, imperdiet vulputate semper sodales. Nulla varius dictum lorem in viverra.", 
    "Read more"],
    ["winery-6.jpeg", 
    "Wine tasting weekend",
    "Proin ornare metus ut lacus varius, eu condimentum nibh vehicula. Etiam eget ultricies enim, a ullamcorper nunc. Duis non nunc accumsan, condimentum nisi eget, eleifend odio. Nunc in orci nec libero sodales facilisis.", 
    "Read more"],
];


let eventCase = "";

let eventBox = document.querySelector(".cont5 .row .events .winerys");

eventarry.forEach(function(v, i){
    eventCase += `
    <div class="box">
        <div class="img" style="background-image:url(./img/${v[0]})">
            <div class="dark"></div>
        </div>
        <div class="txt">
            <div class="eventTitle">${v[1]}</div>
            <p>${v[2]}</p>
            <a href="">${v[3]}</a>
        </div>
    </div>
`;
});

eventBox.innerHTML = eventCase;


