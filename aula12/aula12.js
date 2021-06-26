let VarA = 'A'; // B
let VarB = 'B'; // C
let VarC = 'C'; // A
/* let troca = ''; */

// modo tradicional de trocar valor entre variáveis
/* troca = VarA;
VarA = VarB;
VarB = VarC;
VarC = troca; */

// modo mais moderno de fazer em JavaScript?
[VarA, VarB, VarC] = [VarB, VarC, VarA]


console.log(`valor de A: ${VarA}, valor de B: ${VarB}, valor de C: ${VarC}`);