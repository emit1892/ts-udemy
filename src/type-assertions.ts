export { };

let name: any = "em";

// なるべく早く型が決まっている方が良い
let length = (<string>name).length; // 推奨されていない記法
// let length = (name as string).length;
// let length = name.length as number; //型アサーション

// length = "foo"; // error
console.log(length);