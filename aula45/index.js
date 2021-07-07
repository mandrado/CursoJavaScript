/**
 * 64. Tratando e lançando erros (try, catch, finally)
 * 
 */

try {
    ///E executado para tentar executar um código
    console.log('Abri um arquivo...');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');
    //console.log(a);
    try {
 //       console.log(b);
    } catch (e) {
        console.log('Sub CATCH é executado se houver erro');    
    } finally{
        console.log('Sub FINALLY sempre é executado');       
    }
} catch (e) {
    // É excutado quando há erro
    console.log('CATCH é executado se houver erro');

} finally {
    // É executado sempre
    console.log('FINALLY sempre é executado');
}

function retornaHora(data) {
    if (data && !(data instanceof Date)){
        //console.log('Não é Data');
        throw new TypeError('Esperando instância de Date.');
    }
    if (!data){
        data = new Date();
    }
    
    return data.toLocaleTimeString('pt-BR',{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    data = new Date('01-01-1970 12:58:12');
    //const hora = retornaHora(data);
    const hora = retornaHora(11);
    console.log(hora);
} catch (error) {
    console.log(error);
} finally{
    console.log('Tenha um bom dia!');
}


/* // não é data
retornaHora('data');

//é uma instancia de data
retornaHora(new Date()); */