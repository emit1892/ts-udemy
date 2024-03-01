export { };

class Animal {
    constructor(public name: string) { }

    run(): string {
        return "I can run";
    }
}

class Lion extends Animal {
    public speed: number;

    // constructor(public name: string, public speed: number) {
    //     super(name);
    // }

    constructor(name: string, speed: number) {
        super(name);
        this.speed = speed;
    }

    run(): string {
        // const parentMessage = super.run();
        // console.log({ parentMessage });
        return `${super.run()} ${this.speed}km`;
    }
}

// let animal = new Animal("Mickey");
// console.log(animal.run());

// let lion = new Lion("lion");
// console.log(lion.run());

console.log(new Animal("Mickey").run());
console.log(new Lion("Simba", 80).run());