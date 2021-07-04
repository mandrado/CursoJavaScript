const meuHtml = document.querySelector('.container');

const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

for (i = 0; i < elementos.length; i++){
    //meuHtml.innerHTML += `<${i[i]}> ${i} <${i}>`;
    const {tag, texto} = elementos[i];
    meuHtml.innerHTML += `<${tag}> ${texto} </${tag}>`;
}
