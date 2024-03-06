//================Hiển thị nút lên đầu trang=================
window.addEventListener('scroll',()=>{
    let upTop = document.querySelector('.up-top');
    upTop.classList.toggle('active', window.pageYOffset > 160);
})
//================Hiển thị menu=================
let btnmenu = document.querySelector('.btn-menu');
let menu = document.querySelector('.header-menu-popup');

btnmenu.onclick = function(){
   
    menu.classList.toggle('active');
    //document.body.style.backgroundColor = "rgba(0,0,0,0.3)";
}

function closemenu(){
    menu.classList.remove('active');
    //document.body.style.backgroundColor = "#fff";
}

setTimeout(function(){
    $('#loading-box').fadeToggle();
},4000);

