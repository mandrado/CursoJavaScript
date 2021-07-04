const meuHtml = document.querySelector('.container');

const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

/* for (i = 0; i < elementos.length; i++){
    const {tag, texto} = elementos[i];
    meuHtml.innerHTML += `<${tag}> ${texto} </${tag}>`;
} */

const div = document.createElement('div');

for (i = 0; i < elementos.length; i++){
    const {tag, texto} = elementos[i];
    const tagCriada = document.createElement(tag);
    // opção 1:
    /* tagCriada.innerHTML = texto; */
    // opção 2:
    //tagCriada.innerText = texto;
    // opção 3: criar um nó de texto
    const textoCriado = document.createTextNode(texto);
    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}
meuHtml.appendChild(div);