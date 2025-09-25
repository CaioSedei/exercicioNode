import { salario, somar } from "../service/exercio.js";

//1. Peça ao usuário dois números com casas decimais (números reais), some os dois e mostre o resultado.
export const exercicio1 = (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    const result = somar(num1, num2);
    res.status(200).send({
        msg: `O resultado é ${result}`,
        data: { num1, num2, result },
        error: null
    })
}


//2. Peça o valor que a pessoa ganha por hora e a quantidade de horas trabalhadas no mês. Mostre quanto ela vai receber no final do mês.
export const exercicio2 = (req, res) => {
    const { valorHr, qtdeHr } = req.body;
    const result = salario(valorHr, qtdeHr);
    res.status(200).send({
        msg: `O salário do mês é ${result}`,
        data: { valorHr, qtdeHr, result },
        error: null
    });
}




