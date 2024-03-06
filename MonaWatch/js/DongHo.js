let numberSale = document.querySelectorAll('.sale')
for(let i = 0; i < numberSale.length; i++){
  if(numberSale[i].innerHTML == ""){
    numberSale[i].classList = "sale hide"
  }else{
    numberSale[i].classList = "sale"
  }
}