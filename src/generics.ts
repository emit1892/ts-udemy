export { };

// const echo = (arg: number): number => {
//     return arg;
// }

// const echo = (arg: string): string => {
//     return arg;
// }

const echo = <T>(arg: T): T => {
    return arg;
}

console.log(echo<string>("test"));
console.log(echo<number>(1));
console.log(echo<boolean>(false));



class Mirror<T>{
    // constructor(public value: number) { }

    // echo(): number {
    //     return this.value;
    // }

    constructor(public value: T) { }

    echo(): T {
        return this.value;
    }
}

// console.log(new Mirror<number>(123).echo());
console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>("generics").echo());
console.log(new Mirror<boolean>(true).echo());