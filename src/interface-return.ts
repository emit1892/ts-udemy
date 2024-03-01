export { };

// class Mahotsukai {

// }

// class Soryo {

// }

// class Taro extends Mahotsukai, Soryo {
//     // 2つのクラスを継承することはできない
// }

// インターフェース: すべてが抽象メソッドのようなクラス
interface Kenja {
    ionazun(): void;
}

interface Senshi {
    kougeki(): void;
}

// interfaceは多重継承が可能
class Jiro implements Kenja, Senshi {
    kougeki(): void {
        console.log("kougeki!");
    }
    ionazun(): void {
        console.log("ionazun!!");
    }
}

const jiro = new Jiro();
jiro.kougeki();
jiro.ionazun();