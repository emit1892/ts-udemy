export { };

type MyExclude<T> = T extends string | number ? never : T;
type DebugType = () => void;
type SomeTypes = string | number | DebugType;

// SomeTypesからstringとnumber型を除外
type FunctionType = Exclude<SomeTypes, string | number>;
type MyFunctionType = MyExclude<SomeTypes>;

// SomeTypes からDebugTypeを取り出す
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;

type NullableTypes = string | number | null | undefined;
// null undefinedを取り除く
type NonNullableType = NonNullable<NullableTypes>;

