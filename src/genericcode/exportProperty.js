function add(a,b)
{
    return a+b;
}

function substract(a,b)
{
    return a-b;
}

function multiply(a,b)
{
    return a*b;
}

function divide(a,b)
{
    return a/b;
}


module.exports={add,substract};


//module.exports={multiply};  //it will override previous exports

module.exports.divide=divide;

