window.addEventListener('scroll', function(){
    const header = document.querySelector('.header-bottom');
    const onTop = document.querySelector('.onTop');
    if(window.scrollY > 200){
      onTop.classList.add("show");
      header.classList.add("sticky");
    }else{
      if(window.scrollY <= 200){
        header.classList.remove("sticky");
      }
      onTop.classList.remove("show");
    }
});





