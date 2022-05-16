// ===========Exercicio 1=============  \\
let fatorial = 10;
let resultado = fatorial;
for (let i = 1; i < fatorial; i++)
{
    resultado *= i;
}
console.log(resultado);
// ===========Exercicio 2=============  \\
let word = 'tryber';

function reverse(s){
    return s.split("").reverse().join("");
}

word = reverse(word);
console.log(word);
// ===========Exercicio 3=============  \\
let bigword = "0";
let smallword = "0";
let array = ['java', 'javascript', 'python', 'html', 'css'];
    for(i = 0; i < array.length; i++)
{
    if(array[i].length > bigword.length)
    {
        bigword = array[i];
    }
    else if(array[i].length < bigword.length)
    {
        smallword = array[i];
    }
}
console.log('Maior palavra:', bigword, "Menor Palavra: ", smallword);
// ===========Exercicio 4=============  \\
MaiorPrimo = 0;
let naoprimos = [];
let num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39, 
40,41,42,43,44,45,46,47,48,49,50];

for(let i = 0; i < num.length; i++)
{
    if(num[i] % 2 === 0)
    {
        naoprimos.push(num[i]);
    }
    else if(MaiorPrimo < num[i])
    {
        MaiorPrimo = num[i];
    }
}
console.log("Maior número primo:",MaiorPrimo);
console.log("Números não primos:",naoprimos);