export { };

const debugProfile = (name: string, age: number) => {
    console.log({ name, age });
}

debugProfile("em", 40);

type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ["Gloria", 76];

debugProfile(...profile);

// constructor parameters
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let taro = new Person("Taro", 18);
console.log(taro);

type PersonType = typeof Person;
type ProfilePerosn = ConstructorParameters<PersonType>;

const profilePerson: ProfilePerosn = ["Jiro", 29];
const jiro = new Person(...profilePerson);
console.log(jiro);