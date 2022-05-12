const a = 5;
const b = 3;
const c = 8;

soma = a + b;
mult = a * b;
sub = a - b;
div = a / b;
exp = a ** b;

console.log(soma);
console.log(mult);
console.log(sub);
console.log(div);
console.log(exp);
console.log();
console.log("Maior número comum")

if (a > b && a > c)
{
    console.log(a);
}
else if(b > a && b > c){
    console.log(b)
}
else {
    console.log(c);
}
