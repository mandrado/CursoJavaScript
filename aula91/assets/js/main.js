/**
 * 113. Fetch API e Axios (JSON)
 * 
 * Para usar o Axios, precisamos apontar no html o CDN
 * 
 */
// fetch('pessoas.json')
//     .then(resposta => resposta.json())
//     .then(json => carregaLementosNaPagina(json));

axios('pessoas.json')
    .then(resposta => carregaLementosNaPagina(resposta.data));

function carregaLementosNaPagina(json) {
    // criar uma table html
    const table = document.createElement('table');
    const tr0 = document.createElement('tr');
    let th = document.createElement('th');

    th.innerHTML = 'Nome';
    tr0.appendChild(th);

    th = document.createElement('th');
    th.innerHTML = 'Idade';
    tr0.appendChild(th);

    th = document.createElement('th');
    th.innerHTML = 'Salário';
    tr0.appendChild(th);

    table.appendChild(tr0);

    for (const pessoa of json) {
        const tr = document.createElement('tr');

        let td = document.createElement('td');
        td.innerHTML = pessoa.nome;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.idade;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.salario;
        tr.appendChild(td);

        table.appendChild(tr);

    }
    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}
