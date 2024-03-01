export { };

let fooCompatible: any;
let barCompatible: string = "TypeScript";


console.log(typeof fooCompatible); // undefined

fooCompatible = barCompatible; // 代入可能 互換性あり

console.log(typeof fooCompatible); // string


let fooIncompatible: string;
let barIncompatible: number;

// fooIncompatible = barIncompatible; // error 互換性なし

let fooString: string;
let barString: string = "string";

fooString = barString;

let fooStringLiteral: "fooStringLiteral" = "fooStringLiteral";

fooString = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;

fooNumber = fooNumberLiteral;

interface Animal {
    age: number;
    name: string;
}

class Person {
    constructor(public age: number) { }
}

let me: Animal;
// me = new Person(43); // error Personクラスにnameを追加する必要がある

// 構造的部分形