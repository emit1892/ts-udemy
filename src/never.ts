export { };

function error(message: string): never {
    throw new Error(message); // エラーを出力
}

try {
    let result = error("test"); // neverは元に戻ってこない(ここで処理が終わる、もしくは例外キャッチされる)
    console.log({ result }); // 出力されない
} catch (error) {
    console.log({ error });
}

let foo: void = undefined;
// let bar: never = undefined; // neverは値の概念がないので、udefinedとnullをいれたらエラーとなる
let bar: never = error("only me!"); // errorのみ代入可