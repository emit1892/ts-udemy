export { };

// 抽象メソッド: 必ずオーバーライドが必要なメソッド、抽象クラスの中で定義する必要がある
// シグネチャ: 抽象メソッドの宣言のこと

abstract class Animal {
    abstract cry(): string;
}

class Lion extends Animal {
    cry() {
        return "roar";
    }
}

// class Tiger extends Animal {
//     // 抽象メソッドがオーバーライドされていないのでエラーとなる
// }

class Tiger extends Animal {
    cry(): string {
        return "grrrrrr";
    }
}