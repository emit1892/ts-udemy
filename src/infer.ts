export { };

function add(a: number, b: number) {
    return a + b;
}

console.log(add(1, 2));

type ReturnTypeFromAdd = ReturnType<typeof add>;

// inferは条件を記載するところに使えるもの
// <T>は名前の前にしか使えない
// ↓のときのように使用したいとき、inferを使用する
type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;