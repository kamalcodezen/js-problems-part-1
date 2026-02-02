

// 2 to variable er value exchange korte hole swap kora lagbe extra variable use korte hobe;

//old style value swap
let a = 7;
let b = 9;
console.log("a =", a, "b =", b);
let x = a;
a = b;
b = x;
console.log("a =", a, "b =", b);

console.log(`------------------------`);

// new style 
let c = 5;
let d = 4;
console.log("c =", c, "d =", d);
[c, d] = [d, c];  // array make
console.log("c =", c, "d =", d);

