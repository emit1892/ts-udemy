export { };

const nextYeearSalary = (currentSalary: number, rate: number = 1.1) => {
    return currentSalary * rate;
}

console.log(nextYeearSalary(1000, 1.05));
console.log(nextYeearSalary(1000)); //1100