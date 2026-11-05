let myString : string = "Program"
let myNumber : number = 4554
let myBoolean: boolean = true
let mySymbol: symbol = Symbol();
let myBigInt: bigint = 100n
//Why the letter n? It is a notation chosen by JavaScript to distinguish BigInt literals from ordinary Number literals. 
// It has no mathematical meaning.


const addTwo = (a: number,b: number) : number =>{
    return a+b;
}

console.log(addTwo(80, 5))