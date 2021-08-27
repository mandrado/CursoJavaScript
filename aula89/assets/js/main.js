/**
 * 111. XMLHttpRequest (GET) + Promises
 * Requisições AJAX com JavaScript
 * Javascript assincrono / Requisição assincrona
 * Como carregar páginas dinamicamente sem recarregar a página inteira.
 * 
 * 
 */

// Criar uma função para fazer requisição Ajax XMLHttpRequest
const request = obj => {
    const xhr = new XMLHttpRequest();
    //xhr.open('GET', 'URL', true);
    xhr.open(obj.method, obj.url, true);
    xhr.send();


    //adicionar o evento para carregar a página
    xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            obj.sucess(xhr.responseText);
        } else {
            obj.error(xhr.statusText);
        }
    });

};

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);

    }
});


function carregaPagina(el) {
    const href = el.getAttribute('href');
   // console.log(href);

    request({
        method: 'GET',
        url: href,
        sucess(response) {
            carregaResultado(response);
        },
        error(errorText) {
            console.log(errorText);
        }
    });
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

