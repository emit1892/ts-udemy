export { };

const reducer = (accumulator: number, currentValue: number): number => {
    console.log({ accumulator, currentValue });
    return accumulator + currentValue;
}

// ...valuesの形をrestパラメータと呼ぶ
const sum: (...values: number[]) => number = (...values: number[]): number => {
    // console.log(values);
    return values.reduce(reducer);
};

console.log(sum(1, 2, 3, 4, 5));

[1, 2, 3, 4].reduce(reducer);