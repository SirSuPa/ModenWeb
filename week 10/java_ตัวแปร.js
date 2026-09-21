function runDemo() {
    // ล้างคำสั้ง console ทุกครั้งที่รัน เพื่อไม่ให้สับสนกับผลเก่า
    console.clear();
    const output = [];

    //ตัวอย่างตัวแปร
    let studentName = 'สมชาย';
    let age = 20;
    let isStudebt = true;

const universityName = 'มหาวิทยาลัยเทคโนโลยี';
// แสดงค่าตัวแปรเริ่มต้น
output.push("ชื่อ: " + studentName);
console.log("ชื่อ:",studentName);
output.push("อายุ: " + age)
console.log("อายุ:",age);

//เปลี่ยนค่า let
age = 21;
output.push("อายุใหม่: " + age);
console.log("อายุใหม่:",age);
//เปลี่ยนค่า const (จะ error แต่ถูกจับใน catch)
try {
        universityName = 'มหาวิทยาลัยใหม่'; // เกิด TypeError ทันที
    } catch (e) {
        output.push("Error: " + e.message);
        console.error("จับ Error ได้:", e.message);
    }

//แสดงผลบนหน้าเว็บ
document.getElementById("outputBox").textContent = output.join("\n");
}