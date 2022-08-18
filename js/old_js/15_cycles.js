let i = 1;
let limit = 19;

console.log();
console.log('while');

while (i <= limit) {
  console.log(i);
  i++;
}

console.log();
console.log('do_while');

i = 1;
do {
  console.log(i);
  i++;
} while (i <= limit);

console.log();
console.log('for');

for (let n = 1; n <= limit; n++) {
  console.log(n);
  i++;
}
