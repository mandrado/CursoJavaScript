/**
 * 100. Factory Functions + Prototypes
 * 
 * 
 */


// Factory Functions
function criaPessoa(nome, sobrenome) {
    const pessoaPrototype = {
        falar() {
            console.log(`${this.nome} está falando.`);
        },
        comer() {
            console.log(`${this.nome} está comendo.`);
        },
        beber() {
            console.log(`${this.nome} está bebendo.`);
        }
    };

    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
}

const p1 = criaPessoa('Mandrado', 'Santos');
console.log(p1);

//Prototypes
// composiçao do tipo missing

const falar  = {
    falar() {
        console.log(`${this.nome} está falando.`);
    }
};

const comer = {
    comer() {
        console.log(`${this.nome} está comendo.`);
    }
};

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo.`);
    }
};

const pessoaPrototype2 = {...falar, ...comer, ...beber};

function criaPessoa2(nome, sobrenome) {
    return Object.create(pessoaPrototype2, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
}

const p2 = criaPessoa2('Maria Efigenia', 'Santos');
console.log(p2);

const pessoaPrototype3 = Object.assign({}, falar, comer, beber);

function criaPessoa3(nome, sobrenome) {
    return Object.create(pessoaPrototype3, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
}

const p3 = criaPessoa3('Nathalya', 'Santos');
console.log(p3);