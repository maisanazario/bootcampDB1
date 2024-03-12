
function encontrarPares(array) {
    let pares = [];

for (let i = 0; i < Array.length; i++){
    if (array[i] % 2 === 0) {
        pares.push(array[i]);
    }
}
return pares;

}
let valores = [2, 4, 3, 1, 6, 7, 9];

console.log("Números pares:" encontrarPares(valores));