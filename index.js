// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

function numParOrImpar(num){
    if(num % 2 === 0){
        console.log("El número es par")
    }
    else{
        console.log("El número es impar")
    }
}
numParOrImpar(7);
console.log(`---------------------------------`);

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

function TwoNumber(number1,number2){
    if(number1 > number2){
        console.log(`${number1} es mayor que ${number2}`)
    }
    else if(number2 > number1){
        console.log(`${number2} es mayor que ${number1}`)
    }
    else{
        console.log(`Ambos número son iguales`)
    }
}
TwoNumber(10,5);
TwoNumber(2,2)
console.log(`---------------------------------`);


// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function multiploDeCinco(n){
    if(n % 5 === 0 ){
        console.log(`Es múltiplo de 5`)
    }
    else{
        console.log(`No es múltiplo de 5`)
    }
}
multiploDeCinco(10);
console.log(`---------------------------------`);

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

function numeroRandom (n){
    for (let i = 0; i <= n  ; i++ ) {
        console.log(i)
    }
}
numeroRandom(10);
console.log(`---------------------------------`);
    
        
// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

function wordAndNumber(word,number){

    
    for(let i = 1; i <= number; i++){
        console.log(word,)
    }
}

wordAndNumber(`Notebook`, 5);
console.log(`---------------------------------`);

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

 function randomArray(array){
    for( let i = 0 ; i < array.length; i++){
        console.log(array[i])
    }
}
const webStack = [`html`,`css`,`javascript`]
randomArray(webStack);
console.log(`------------------`)


// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. 

 function tenDigitArray(arr){
    for( let i = 0 ; i < arr.length ; i++){
        if(arr[i] !== 5){
            console.log(arr[i])
        }
    }
}
const numbers = [0,1,2,3,4,5,6,7,8,9,10]
tenDigitArray(numbers);
console.log(`--------------------`)


// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

function multiplyParameters(arr,num){
    for( let i = 0 ; i < arr.length ; i++){
        const result = arr[i] * num;
        console.log(result)}
      
}
const oddNumbers = [3,6,9,1,13]
multiplyParameters(oddNumbers,2)
console.log(`--------------`)



    



