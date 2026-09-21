let numbers = [30, 27, 84, 36, 24, 2, 74, 37, 8, 50];
let min = numbers[0];
let max = numbers[0];
let sum = 0;

//find min & max
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) min = numbers[i];
    if (numbers[i] > max) max = numbers[i];
}
// Sum
for (let i = 0;i < numbers.length; i++) {
    sum += numbers[i];
}

// Average
let avg = sum / numbers.length;
//console log(จริง)
console.log("Numbers: " + numbers.join(" "));
console.log("Min: " + min);
console.log("Max: " + max);
console.log("Sum: " + sum);
console.log("Average: " + avg);
//show on page
document.getElementById("output").textContent = 
    "Numbers: " + numbers.join(" ") + "\n" +
    "Min: " + min + "\n" +
    "Max: " + max + "\n" +
    "Sum: " + sum + "\n" +
    "Average: " + avg;