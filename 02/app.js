const x = 5;
let result = 0;

console.log("for")
for (let i = 1; i <= x; i++) {
    result += i;
    console.log(result)
}
console.log("wynik for")
console.log(result)

console.log("")

result = 0;
let i = 1;

console.log("while")
while (i <= x) {
    result += i;
    console.log(result)
    i++;
}
console.log("wynik while")
console.log(result)