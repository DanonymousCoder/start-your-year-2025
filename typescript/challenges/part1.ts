function plus(x: number | string | undefined, y: number | string | undefined): number | string | undefined {
    if (typeof x === typeof y) {
        return (x as any) + y;
    }
    return undefined;
}

console.log(plus(2025, 1));
console.log(plus(undefined, 21));
console.log(plus("StackUp", "Learn"));