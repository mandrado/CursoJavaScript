import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const chkNumeros = document.querySelector('.chk-numeros');
const chkMaiuscula = document.querySelector('.chk-maiuscula');
const chkMinuscula = document.querySelector('.chk-minuscula');
const chkSimbolos = document.querySelector('.chk-simbolos');
const btnGerarSenha = document.querySelector('.btn-gerar-senha');

export default () => {
    btnGerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera();
    });
};

function gera() {
    const senha = geraSenha(
        qtdCaracteres.value,
        chkMaiuscula.checked,
        chkMinuscula.checked,
        chkNumeros.checked,
        chkSimbolos.checked);
    return senha || 'Nada selecionado';
};
