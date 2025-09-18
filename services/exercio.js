export const exercicio1 = (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    const result = num1 + num2;
    res.status(200).send({num1, num2, result})
}

export const exercicio2 = (req, res) => {
    const { valorHr, qtdeHr } = req.params;
    res.status(200).send({result: Number(valorHr) * Number(qtdeHr)}) ;
}

export const exercicio3 = (req, res) => {
    const { p1, p2, p3, p4, p5 } = req.params;
    const media = (Number(p1) + Number(p2) + Number(p3) + Number(p4) + Number(p5)) / 5;
    res.status(200).send({result: media});
}