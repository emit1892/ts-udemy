export { };

// 名前空間: フォルダみたいなもの
namespace Japanese {

    export namespace Tokyo {
        export class Person {
            constructor(public name: string) { }
        }
    }

    export namespace Osaka {
        export class Person {
            constructor(public name: string) { }
        }
    }

    export class Person {
        constructor(public name: string) { }
    }
}

namespace English {
    export class Person {
        constructor(
            public firstName: string,
            public middleName: string,
            public lastName: string
        ) { }
    }
}


const me = new Japanese.Tokyo.Person("えむ");
console.log(me.name);

const osaka = new Japanese.Osaka.Person("やで");
console.log(osaka.name);

const englishMe = new English.Person("Joseph", "D", "House");
console.log(englishMe);