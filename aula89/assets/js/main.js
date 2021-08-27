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
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        //xhr.open('GET', 'URL', true);
        xhr.open(obj.method, obj.url, true);
        xhr.send();

        //adicionar o evento para carregar a página
        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        });
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


async function carregaPagina(el) {
    const href = el.getAttribute('href');
    // console.log(href);

    const objConfig = {
        method: 'GET',
        url: href
    };

    try {
        const response = await request(objConfig);
        carregaResultado(response);
        
    } catch (e) {
        console.log(e);
        carregaResultado(e)
    }

}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}
