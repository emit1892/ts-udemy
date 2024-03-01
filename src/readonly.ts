export { };

class VisaCard {

    // constructor(owner: string) {
    //     this.owner = owner;
    // }

    // constructor(public owner: string) { }
    // constructor(public readonly owner: string) { }

    constructor(readonly owner: string) { } // publicはなくてOKだけどメンバーがpublicなのを明示する意味で省略しないほうがよいかも、あとreadonlyをやめるときはpublicが必要になるので残しておいたほうがよいかも
}

let myVisaCard = new VisaCard("em");
console.log(myVisaCard.owner);
// myVisaCard.owner = "hoge"; // error