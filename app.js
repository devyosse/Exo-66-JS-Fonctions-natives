let operande = 10;

let paraOne = document.getElementById('entier');
paraOne.innerHTML = parseInt(paraOne.innerHTML) * operande;


let paraTwo = document.getElementById('flottant');
paraTwo.innerHTML = parseFloat(paraTwo.innerHTML) * operande + parseInt(paraOne.innerHTML);

let paraThree = document.getElementById('non-numerique');

if (isNaN(paraThree)){
    paraThree.innerHTML = '0';
}

let paraFour= document.getElementById('random');

paraFour.innerHTML = Math.random();

let paraFive = document.getElementById('trunc');

paraFive.innerHTML =  Math.trunc(54);


let paraSix = document.getElementById('replace');

paraSix.innerHTML= paraSix.innerHTML.replace(' world ', ' Hocine Hassaini')

let random = document.getElementById('random');
random.innerHTML = Math.trunc(Math.random() *100);
console.log(random);