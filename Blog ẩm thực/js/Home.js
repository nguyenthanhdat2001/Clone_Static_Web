//=============Render news slide content==============
var newsList = [
    {
        image: 'images/bgfood8.jpg',
        title: 'Có gì trong chai muối ớt chanh Nha Trang khiến giới review ẩm thực "rần rần"?',
        date: 'Aug 26, 2021',
        content: "Muối ớt chanh Nha Trang cải tiến cả công thức lẫn hình thức của thương hiệu gia vị Việt Dh Foods khiến vlogger Ninh Tito, Quỳnh Trần JP và giới review ẩm thực 'rần rần'.",
    },
    {
        image: 'images/bgfood8.jpg',
        title: 'Có gì trong chai muối ớt chanh Nha Trang khiến giới review ẩm thực "rần rần"?',
        date: 'Aug 26, 2021',
        content: "Muối ớt chanh Nha Trang cải tiến cả công thức lẫn hình thức của thương hiệu gia vị Việt Dh Foods khiến vlogger Ninh Tito, Quỳnh Trần JP và giới review ẩm thực 'rần rần'.",
    },
    {
        image: 'images/bgfood8.jpg',
        title: 'Có gì trong chai muối ớt chanh Nha Trang khiến giới review ẩm thực "rần rần"?',
        date: 'Aug 26, 2021',
        content: "Muối ớt chanh Nha Trang cải tiến cả công thức lẫn hình thức của thương hiệu gia vị Việt Dh Foods khiến vlogger Ninh Tito, Quỳnh Trần JP và giới review ẩm thực 'rần rần'.",
    },
    {
        image: 'images/bgfood8.jpg',
        title: 'Có gì trong chai muối ớt chanh Nha Trang khiến giới review ẩm thực "rần rần"?',
        date: 'Aug 26, 2021',
        content: "Muối ớt chanh Nha Trang cải tiến cả công thức lẫn hình thức của thương hiệu gia vị Việt Dh Foods khiến vlogger Ninh Tito, Quỳnh Trần JP và giới review ẩm thực 'rần rần'.",
    },
    {
        image: 'images/bgfood8.jpg',
        title: 'Có gì trong chai muối ớt chanh Nha Trang khiến giới review ẩm thực "rần rần"?',
        date: 'Aug 26, 2021',
        content: "Muối ớt chanh Nha Trang cải tiến cả công thức lẫn hình thức của thương hiệu gia vị Việt Dh Foods khiến vlogger Ninh Tito, Quỳnh Trần JP và giới review ẩm thực 'rần rần'.",
    },
    {
        image: 'images/bgfood8.jpg',
        title: 'Có gì trong chai muối ớt chanh Nha Trang khiến giới review ẩm thực "rần rần"?',
        date: 'Aug 26, 2021',
        content: "Muối ớt chanh Nha Trang cải tiến cả công thức lẫn hình thức của thương hiệu gia vị Việt Dh Foods khiến vlogger Ninh Tito, Quỳnh Trần JP và giới review ẩm thực 'rần rần'.",
    },
    {
        image: 'images/bgfood8.jpg',
        title: 'Có gì trong chai muối ớt chanh Nha Trang khiến giới review ẩm thực "rần rần"?',
        date: 'Aug 26, 2021',
        content: "Muối ớt chanh Nha Trang cải tiến cả công thức lẫn hình thức của thương hiệu gia vị Việt Dh Foods khiến vlogger Ninh Tito, Quỳnh Trần JP và giới review ẩm thực 'rần rần'.",
    },
    {
        image: 'images/bgfood8.jpg',
        title: 'Có gì trong chai muối ớt chanh Nha Trang khiến giới review ẩm thực "rần rần"?',
        date: 'Aug 26, 2021',
        content: "Muối ớt chanh Nha Trang cải tiến cả công thức lẫn hình thức của thương hiệu gia vị Việt Dh Foods khiến vlogger Ninh Tito, Quỳnh Trần JP và giới review ẩm thực 'rần rần'.",
    },
]

console.log(newsList);


var container = document.querySelector('.render')

for (let i = 0; i < newsList.length; i++) {
    container.innerHTML += `
        <div class="swiper-slide">
            <div class="card">
                <div class="img-card">
                    <img src="${newsList[i].image}" alt="">
                </div>
            </div>
            <div class="card-content">
            <a href="" class="content-title">
                ${newsList[i].title}
            </a>
                <span class="date">${newsList[i].date}</span>
                <p>${newsList[i].content}</p>
                <a href="#" class="read-more">Read more <i class="fas fa-long-arrow-alt-right"></i></a>
            </div>
        </div>`;
    //container.appendChild(node);
}
//=============Render confide slide content==============
var ConfideList = [
    {
        image: 'images/bgfood2.jpg',
        title: 'Có gì trong chai muối ớt chanh Nha Trang khiến giới review ẩm thực "rần rần"?',
        date: 'Aug 26, 2021',
        content: "Muối ớt chanh Nha Trang cải tiến cả công thức lẫn hình thức của thương hiệu gia vị Việt Dh Foods khiến vlogger Ninh Tito, Quỳnh Trần JP và giới review ẩm thực 'rần rần'.",
    },
    {
        image: 'images/bgfood3.jpg',
        title: 'Có cái con cu trong chai muối ớt chanh Nha Trang khiến giới review ẩm thực "rần rần"?',
        date: 'Aug 26, 2021',
        content: "Muối ớt chanh Nha Trang cải tiến cả công thức lẫn hình thức của thương hiệu gia vị Việt Dh Foods khiến vlogger Ninh Tito, Quỳnh Trần JP và giới review ẩm thực 'rần rần'.",
    }
]

console.log(ConfideList);


var container2 = document.querySelector('.render2')

for (let i = 0; i < ConfideList.length; i++) {
    container2.innerHTML += `
        <div class="swiper-slide">
            <div class="card">
                <div class="img-card">
                    <img src="${ConfideList[i].image}" alt="">
                </div>
            </div>
            <div class="card-content">
            <a href="" class="content-title">
                ${ConfideList[i].title}
            </a>
                <span class="date">${ConfideList[i].date}</span>
                <p>${ConfideList[i].content}</p>
                <a href="#" class="read-more">Read more <i class="fas fa-long-arrow-alt-right"></i></a>
            </div>
        </div>`;
    //container.appendChild(node);
}


//=============Home slide==============
var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 10000,
    },
    speed: 2000,
    loop: true,
    spaceBetween: 30,
});

//=================News slide==============
function resize(x){
    if(x >= 1024){
        var swiper2 = new Swiper(".mySwiper2", {
            slidesPerView: 4,
            spaceBetween: 30,
            slidesPerGroup: 4,
            loop: false,
            loopFillGroupWithBlank: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }else if(x >= 767 && x < 1024){
        var swiper2 = new Swiper(".mySwiper2", {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 3,
            loop: false,
            loopFillGroupWithBlank: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }else if(x >= 415 && x < 767){
        var swiper2 = new Swiper(".mySwiper2", {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerGroup: 2,
            loop: false,
            loopFillGroupWithBlank: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    } 
    if(x < 415){
        var swiper2 = new Swiper(".mySwiper2", {
            slidesPerView: 1,
            spaceBetween: 30,
            slidesPerGroup: 1,
            loop: false,
            loopFillGroupWithBlank: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }
}
var x = innerWidth;
resize(x);
//===============SCROLL REVEAL===============
ScrollReveal().reveal('.home-welcome-container',{
    distance: '100px',
    origin: 'left',
    duration: 2000,
    delay: 500,
});

ScrollReveal().reveal('.home-order-box',{
    distance: '100px',
    duration: 2000,
    delay: 500,
    origin: 'right',
});

ScrollReveal().reveal('.mySwiper2',{
    distance: '100px',
    duration: 2000,
    delay: 300,
    origin: 'bottom',
});

ScrollReveal().reveal('.cl-1',{
    distance: '100px',
    duration: 2000,
    delay: 300,
    origin: 'left',
});

ScrollReveal().reveal('.cl-2',{
    distance: '100px',
    duration: 2000,
    delay: 300,
    origin: 'right',
});


ScrollReveal().reveal('.food-map-container',{
    distance: '100px',
    duration: 2000,
    delay: 300,
    origin: 'top',
});


    