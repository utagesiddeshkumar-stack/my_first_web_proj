console.log("Program for checking if the sum of factors equals the number");

let y = prompt("Enter another number");
y = Number(y);   let sum = 0;

for (let i = 1; i < y; i++) {   
       if (y % i === 0) {
        sum = sum + i;         
    }
}

// check after loop
if (sum === y) {
    console.log("True → The number is a Perfect Number");
} else {
    console.log("False → The number is NOT a Perfect Number");
}