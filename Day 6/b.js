function array_Clone(params) {
    copyarray=[...params];
    return copyarray;
}

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
