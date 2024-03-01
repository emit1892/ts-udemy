export { };

type Profile = {
    name: string;
    age?: number;
    zipCode: number;
};

// ↑ですべての型をオプショナルにしたくなった場合
// 項目が多いと大変だったりするのでコピーはよくない
// type Profile2 = {
//     name?: string;
//     age?: number;
// };

// Profileのすべての型がオプショナルになる
type PartialType = Partial<Profile>;

// Profileのすべての型が必須となる
type RequiredType = Required<Profile>;