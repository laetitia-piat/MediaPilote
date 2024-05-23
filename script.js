const buttonOne = document.querySelector('#btn1');
const buttonTwo = document.querySelector('#btn2');
const close = document.querySelector('#close');

const popUp = document.querySelector('#pop-up');

buttonOne.addEventListener('click', function(){
   popUp.style.display = 'block';
});

buttonTwo.addEventListener('click', function(){
    popUp.style.display = 'block';
 });

 close.addEventListener('click', function(){
   popUp.style.display = 'none';
 })