let score = Math.floor(Math.random() * 101);
//score = 88;

let grade = "";
let result = "";

if (score >= 80) {
    grade = "A";
} else if (score >= 70) {
    grade = "B";
} else if (score >= 60) {
    grade = "C";
} else if (score >= 50) {
    grade = "D";
} else {
    grade = "F";
}

if (score >= 50) {
    result = "ผ่าน";
} else {
    result = "ไม่ผ่าน";
}

let outputText = `คะแนนที่สุ่มได้: ${score}<br>เกรด: ${grade}<br>ผลสอบ: ${result}`;
let consoleText = `คะแนนที่สุ่มได้: ${score}\nเกรด: ${grade}\nผลสอบ: ${result}`;

document.getElementById("output").innerHTML = outputText;
console.log(consoleText);