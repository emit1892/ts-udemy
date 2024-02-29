export { };

// シグネチャー
function double(value: number): number;
function double(value: string): string;

// 実体は一つしかかけない、型制約を行わない
function double(value: any): any {
    if (typeof value === "number") {
        return value * 2;
    } else {
        return value + value;
    };
    // else {
    //     throw "numberでもstringでもないので引数の型を確認してください。"
    // }
};

// function double(value: string): string {
//     return value + value;
// }

console.log(double(100));
console.log(double("Go "));

// console.log(double(false)); // error シグネチャーでたんぽされている型安全なのでelse句の処理は実行できない