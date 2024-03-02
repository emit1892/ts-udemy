export { };

type Profile = {
    name: string;
    age: number;
}

type PartialProfile = Partial<Profile>;
type PropertyTypes = keyof Profile; // 複数kyeがある場合一つづつ取り出しできる

type Optional<T> = {
    [P in keyof T]?: T[P] | null
}

type OptionalProfile = Optional<Profile>;