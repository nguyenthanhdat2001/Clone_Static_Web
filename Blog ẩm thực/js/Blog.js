//=============Render news slide content==============
var list = [
    {
        image: 'images/bgfood7.png',
        title: 'Tại sao thầy Huấn chỉ cho mình 9,5 điểm ?',
        date: 'Sep 6, 2021',
        content: "Câu trả lời rất đơn giản. Bởi vì sau một lần chơi cờ bạc thầy đã làm rớt nửa ngón tay",
    },
    {
        image: 'images/bgfood2.jpg',
        title: 'Có cái cục shit trong chai muối ớt chanh Nha Trang khiến giới review ẩm thực "rần rần"?',
        date: 'Aug 26, 2021',
        content: "Muối ớt chanh Nha Trang cải tiến cả công thức lẫn hình thức của thương hiệu gia vị Việt Dh Foods khiến vlogger Ninh Tito, Quỳnh Trần JP và giới review ẩm thực 'rần rần'.",
    },
    {
        image: 'images/bgfood3.jpg',
        title: 'Có gì trong chai muối ớt chanh Nha Trang khiến giới review ẩm thực "rần rần"?',
        date: 'Aug 26, 2021',
        content: "Muối ớt chanh Nha Trang cải tiến cả công thức lẫn hình thức của thương hiệu gia vị Việt Dh Foods khiến vlogger Ninh Tito, Quỳnh Trần JP và giới review ẩm thực 'rần rần'.",
    },
    {
        image: 'images/bgfood4.jpg',
        title: 'Có gì trong chai muối ớt chanh Nha Trang khiến giới review ẩm thực "rần rần"?',
        date: 'Aug 26, 2021',
        content: "Muối ớt chanh Nha Trang cải tiến cả công thức lẫn hình thức của thương hiệu gia vị Việt Dh Foods khiến vlogger Ninh Tito, Quỳnh Trần JP và giới review ẩm thực 'rần rần'.",
    },
    {
        image: 'images/bgfood5.jpg',
        title: 'Có gì trong chai muối ớt chanh Nha Trang khiến giới review ẩm thực "rần rần"?',
        date: 'Aug 26, 2021',
        content: "Muối ớt chanh Nha Trang cải tiến cả công thức lẫn hình thức của thương hiệu gia vị Việt Dh Foods khiến vlogger Ninh Tito, Quỳnh Trần JP và giới review ẩm thực 'rần rần'.",
    },
]

console.log(list);


var container = document.querySelector('.main-content-container')

for (let i = 0; i < list.length; i++) {
    container.innerHTML += `
        <div class="card">
            <div class="img-card">
                <img src="${list[i].image}" alt="">
            </div>
            <div class="card-content">
                <span class="date">${list[i].date}</span>
                <a href="" class="content-title">${list[i].title}</a>
                <p>${list[i].content}</p>
                <a href="#" class="read-more">Read more <i class="fas fa-long-arrow-alt-right"></i></a>
            </div>
        </div>`;
}

//===============SCROLL REVEAL===============
ScrollReveal().reveal('.card',{
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
});

ScrollReveal().reveal('.big-title',{
    distance: '100px',
    origin: 'left',
    duration: 2000,
});

ScrollReveal().reveal('.small-title',{
    distance: '100px',
    origin: 'right',
    duration: 2000,
});