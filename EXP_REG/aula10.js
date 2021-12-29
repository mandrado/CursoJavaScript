// Encontra todas as palavras
const palavrasRegEx = /([\wÁ-ú]+)/gm

// Não números
const naoNumerosRegEx = /\D/gm

// Valida IP
const ipRegEx = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g

// Valida CPF (chegar se o usuário digitou algo que parece um cpf)
const cpfRegEx = /(?:\d{3}\.){2}\d{3}-\d{2}/g

// Valida telefones (um telefone por linha)
const validaTelefone = /^(\(\d{2}\)\s*)?(9\s*)?(\d{4})(-)?(\d{4})$/gm

// Valida telefones (vários telefones por linha ou não)
const validaTelefone = /(\(\d{2}\)\s*)?(9\s*)?(\d{4})(-)?(\d{4})/gm


// valida senhas fortes com no mínimo 8 caracteres
const validaSenhasFortes = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\[\]\)]).{8,}$/gm

// Validação de e-mail (https://emailregex.com/)
const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm
