/** 
 * 45. Operação ternária
 * definida por ? :
 * 
*/
const pontuacaoUsuario = 999;

// podemos fazer uma verificação assim
if (pontuacaoUsuario >= 1000) {
    console.log('Usuario ViP');
} else {
    console.log('Usuario normal');
}

// ou com operação ternária:
// (condicao) ? 'Valor para verdadeiro" : 'Valor para falso'
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuário normal';
console.log(nivelUsuario);

const corUsuario = null;
const corPadrao = corUsuario || 'Preto';

console.log(nivelUsuario, corPadrao);