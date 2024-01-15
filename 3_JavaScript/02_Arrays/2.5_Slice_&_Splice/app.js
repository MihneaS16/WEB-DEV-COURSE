//Slice
let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
console.log(colors.slice(5));
let coolColors = colors.slice(2, 5);
console.log(coolColors);
console.log(colors.slice(-1));

//Splice
let months = ["Jan", "Mar", "Apr", "June"];
months.splice(1, 0, "Feb");
console.log(months);
months.splice(4, 1, "May");
console.log(months);
months.splice(0, 0, "Nov", "Dec");
console.log(months);


//!!!! When using array.sort() method, it is going to turn evrything into strings and then compare thair UTF-16 code units values