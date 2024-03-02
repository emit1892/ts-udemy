export { };

type Profile = {
    name: string;
    age: number;
};

const me: Profile = {
    name: "em",
    age: 40,
};

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
    name: "Shigeru",
    age: 41,
};

// friend.age++; // error readonlyのため

type YomitoriSenyo<T> = {
    readonly [P in keyof T]: T[P];
};

type YomitoriSenyoProfile = YomitoriSenyo<Profile>;