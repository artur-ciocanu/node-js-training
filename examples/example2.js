const log = value => console.log(value);
const log1 = function(value) {
    console.log(value);
}

log("Hello World");
log1("Hello World");

const arr = [1, 2, 3].map(x => x * 2);

console.log(arr);
