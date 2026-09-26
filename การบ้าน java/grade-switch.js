let score = Math.floor(Math.random() * 101);
//score = 88;
let grade = "";
let result = "";
let description = "";

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

switch (grade) {
    case "A":
        description = "ยอดเยี่ยมมาก";
        break;
    case "B":
        description = "ดีมาก รักษามาตรฐานไว้";
        break;
    case "C":
        description = "ผ่านเกณฑ์ระดับดี";
        break;
    case "D":
        description = "พอใช้ แต่ควรพัฒนาเพิ่ม";
        break;
    case "F":
        description = "ต้องลงทะเบียนเรียนใหม่";
        break;
}

let outputHTML = `คะแนนที่สุ่มได้: ${score}<br>เกรด: ${grade}<br>ผลสอบ: ${result}<br>คำอธิบาย: ${description}`;
document.getElementById("outputBox").innerHTML = outputHTML;

console.log("คะแนนที่สุ่มได้:", score);
console.log("เกรด:", grade);
console.log("ผลสอบ:", result);
console.log("คำอธิบาย:", description);