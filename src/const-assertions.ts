export { };

let name = "Atushi";

name = "Ham";

let nickname = "Ham" as const;
// nickname = "hamtaro"; // error
nickname = "Ham"; // OK


let profile = {
    name: "Atsushi",
    height: 178,
} as const; // すべての要素がreadonlyとなる

// profile.name = "Ham"; // error
// profile.height = 180; // error
