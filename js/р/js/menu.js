const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');
const blac = document.querySelector('.blac');
menuToggle.onclick = function(){
    navigation.classList.toggle('open')
    blac.classList.toggle('open')
}