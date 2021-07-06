const paragrafos = document.querySelector('.paragrafos');
const ps = document.querySelectorAll('p');

const estiloBory = getComputedStyle(document.body);
const backgroudColorBody = estiloBory.backgroundColor;
console.log(backgroudColorBody);

for (let p of ps){
    p.style.backgroundColor = backgroudColorBody;
    p.style.color = '#FFFFFF';
}
