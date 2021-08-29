// podemos exportar durante a criação da variável:
export const nome = 'Mandrado';
const sobrenome = 'Santos';
const idade = 45;
// cpf não será exportado, pois não foi declarado como export.
const cpf = 12345678911;

function soma(x, y) {
    return x + y;
}
// podemos criar apenas um export padrão por arquivo (módulo)
export default function subtrair(x,y) {
    return x - y;
}

export class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

//exportar as variáveis com seus próprios nomes ou renomeando para outros arquivos dessa forma:
export { sobrenome, idade as old, soma };
