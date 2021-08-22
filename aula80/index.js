/**
 * 101. Objeto Map()
 * Estrutura de dados recebidas via API
 */

const pessoas = [
    {id:2, nome: 'Maria'},
    {id:3, nome: 'Mandrado'},
    {id:1, nome: 'Nathalya'},
];

//a chave será alterada para string:
const novasPessoas1 = {};
for (const pessoa of pessoas){
    const { id } = pessoa;
    novasPessoas1[id] = {...pessoa};
    console.log(id);
}
console.log(novasPessoas1);
// obter a pessoa 2
console.log(novasPessoas1[2]);

// agora a chave se mantem como sendo um número
const novasPessoas = new Map();
for (const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa});
}
console.log(novasPessoas)
// obter a pessoa 2
console.log(novasPessoas.get(2));;

// iteração no Map();
for (const pessoa of novasPessoas){
    console.log(pessoa);
}

//
for (const [identifier, {id, nome}] of novasPessoas) {
    console.log(identifier, id, nome);
}
// pegar somente as chaves
for (const pessoas of novasPessoas.keys()) {
    console.log(pessoas);
}
// pegar somente os valores
for (const pessoas of novasPessoas.values()) {
    console.log(pessoas);
}
// deletar uma chave:
novasPessoas.delete(2);
console.log(novasPessoas);