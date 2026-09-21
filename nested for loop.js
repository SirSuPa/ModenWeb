let buffer = "";
let size = 8;

for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= i; j++) { // แก้ตรงนี้เป็น j++
        buffer += j;
    }
    buffer += "\n";
}

// เช็คว่ามี Element id="output" ไหมก่อนกำหนดค่า
const outputEl = document.getElementById("output");
if (outputEl) {
    outputEl.textContent = buffer;
}

console.log("=== Console Output ===");
console.log(buffer);