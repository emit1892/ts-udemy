// echo 'export {};' > src/void.ts 

export { }; // ファイルをモジュールとする、モジュールの型チェックを強化する

function returnNothing(): void {
    console.log("I don't return anything!");
    // return undefined;
}

console.log(returnNothing()); // undefined




