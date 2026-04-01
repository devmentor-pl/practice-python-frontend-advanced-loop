const x = 5;
let result = 0;

for(let i=0; i<=x; i++){
    result += i;
}

console.log("Result: ", result);

let counter = 0;
while (counter > x){
    result += counter;
}

console.log("Result: ", result);