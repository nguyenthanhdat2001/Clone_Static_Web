// ===================Banner=======================
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 7000,
  },
  speed: 1500,
});
// ======================Product-slide==========
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  grabCursor: true,
  speed: 500,
});
// ==================Fix null sale===============
let numberSale = document.querySelectorAll('.sale')
for(let i = 0; i < numberSale.length; i++){
  if(numberSale[i].innerHTML == ""){
    numberSale[i].classList = "sale hide"
  }else{
    numberSale[i].classList = "sale"
  }
}
// ================Reveal Effect=============
var slideProduct = {
  distance: '100px',
  delay: 300,
  duration: 2000,
  origin: 'right'
}

ScrollReveal().reveal('.product-favorite', slideProduct);

ScrollReveal().reveal('.news', {
  distance: '100px',
  delay: 300,
  duration: 2000,
  origin: 'top'
});

ScrollReveal().reveal('.news', {
  distance: '100px',
  delay: 300,
  duration: 2000,
  origin: 'top'
});

ScrollReveal().reveal('.img-link.time1', {
  distance: '50px',
  delay: 300,
  duration: 2000,
  origin: 'top'
});
ScrollReveal().reveal('.img-link.time2', {
  distance: '50px',
  delay: 500,
  duration: 2000,
  origin: 'top'
});
ScrollReveal().reveal('.introduce.time1', {
  distance: '50px',
  delay: 300,
  duration: 2000,
  origin: 'top'
});
ScrollReveal().reveal('.introduce.time2', {
  distance: '50px',
  delay: 300,
  duration: 2000,
  origin: 'bottom'
});

// ===============Menu sticky && onTop==============
window.addEventListener('scroll', function(){
  const header = document.querySelector('.header-bottom');
  const onTop = document.querySelector('.onTop');
  if(window.scrollY > 800){
    onTop.classList.add("show");
    header.classList.add("sticky");
  }else{
    if(window.scrollY < 200){
      header.classList.remove("sticky");
    }
    onTop.classList.remove("show");
  }
});
