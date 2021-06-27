// obter o texto digitado e converter para um número
const num = Number(prompt("Digite um número: "));
const numeroTitulo = window.document.getElementById('numero-titulo');
const texto = window.document.getElementById('texto');

numeroTitulo.innerHTML = num;
texto.innerHTML += `<p>Número digitado: ${num + 2} </p>`;
texto.innerHTML = `<p>A raiz quadrada do número com "Math.sqrt" é ${Math.sqrt(num)}</p>`;
texto.innerHTML += `<p>A raiz quadrada do número com "** 1/2" é ${num ** (1/2)}</p>`;
texto.innerHTML += `<p>A raiz quadrada do número com "** 0.5" é ${num ** 0.5}</p>`;
texto.innerHTML += `<p>${num} é inteiro?: ${Number.isInteger(num)}</p>`;
texto.innerHTML += `<p>O número ${num} é NaN?: ${Number.isNaN(num)}</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(num)} </p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(num)} </p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${num.toFixed(2)} </p>`;