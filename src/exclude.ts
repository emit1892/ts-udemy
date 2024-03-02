export { };

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

// SomeTypesからstringとnumber型を除外
type FunctionType = Exclude<SomeTypes, string | number>;

type NunFunctionType = Exclude<SomeTypes, DebugType>;

// Functionを除外
type TypeExcludingFunction = Exclude<SomeTypes, Function>;

// SomeTypes からDebugTypeを取り出す
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;

type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
type FunctionTypeByExtractingFunction = Extract<SomeTypes, Function>;

type NullableTypes = string | number | null | undefined;
// null undefinedを取り除く
type NonNullableType = NonNullable<NullableTypes>;