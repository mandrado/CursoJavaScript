// 51. Atribuição via desestruturação (Objetos)
const pessoa = {
    nome: 'Mandrado',
    sobrenome: 'Santos',
    idade: 45,
    endereco:{
        rua: 'Tv da rua X',
        numero: 50,
        bairro: 'Vila',
        Cidade: 'Santa',
        CEP: '09999-111'
    }
};
console.log(pessoa);
// atribuição normal
const nome0 = pessoa.nome;
console.log(nome0);

// atribuição por desestruturação:
/* const { nome, sobrenome, idade } =  pessoa;
console.log(nome, sobrenome);
 */
// atribuição por desestruturação com variável com valor padrão
const {nome = 'Não existe', sobrenome} = pessoa
console.log(nome, sobrenome);

// atribuição por desestruturação com variável com valor padrão e nome diferente
const {nome: teste = '', sobrenome: sobrenomeNovo} = pessoa;
console.log(teste, sobrenomeNovo);

// obtendo o bjeto endereço:
const {endereco: {rua, numero}} = pessoa;
console.log(rua, numero);

// ... rest. 
const {nome: n, ...resto} = pessoa;
console.log(n, resto);