async function paginator(req, res, next){
    let { limit = 5, page = 1, order = 1 } = req.query;

    limit = parseInt(limit);
    page  = parseInt(page);
    order = parseInt(order);

    if( !(limit > 0 && page > 0) )
        return res.status(400).json({ message: "Página e limite devem ser maior do que zero" })
    if( isNaN(order) || (order !== 1 && order !== -1) )
        return res.status(400).json({ message: "Tipo de ordenação inválida" })

    const resultado = req.result;

    const resultadoPaginado = await resultado.find()
    .sort({ number: order })
    .skip((page - 1) * limit)
    .limit(limit)
    .exec();
    
    return res.status(200).json(resultadoPaginado);
}

export default paginator;
