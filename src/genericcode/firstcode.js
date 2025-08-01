//console.log(global)  //it will print the global 

global.console.log("global object in first js")
console.log(" in first js")
//globalThis.console.log(module)

function add(a,b)
{

    return a+b;
}

function second(a,b)
{
console.log("hello node");
    return a+b;
}
module.exports={add};