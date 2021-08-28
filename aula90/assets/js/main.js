/**
 * 112. Fetch API (GET)
 * 
 * Requisições AJAX com JavaScript
 * Javascript assincrono / Requisição assincrona
 * Como carregar páginas dinamicamente sem recarregar a página inteira.
 * 
 * A API Fetch fornece uma interface JavaScript para acessar e manipular 
 * partes do pipeline HTTP, tais como os pedidos e respostas. Ela também fornece 
 * o método global fetch() (en-US) que fornece uma maneira fácil e lógica para 
 * buscar recursos de forma assíncrona através da rede.
 * 
 * Este tipo de funcionalidade era obtida anteriormente utilizando XMLHttpRequest. 
 * Fetch fornece uma alternativa melhor que pode ser facilmente utilizada por outras 
 * tecnologias como Service Workers (en-US). Fetch também provê um lugar lógico único 
 * para definir outros conceitos relacionados ao protocolo HTTP como CORS e extensões ao HTTP
 *  
 */

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
})

async function carregaPagina(el) {
    try {
        const href = el.getAttribute('href');
        const response = await fetch(href);
    
        if (response.status < 200 || response.status > 299) throw new Error('Erro 404 NOSSO');
        
        const html = await response.text();
        carregaResultado(html);
        
    } catch (error) {
        console.error(error);
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}