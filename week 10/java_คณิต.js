function runOperators() {
    const out = [];
    // arithmetic คณิตศาสตร์
    let a = 10,b = 3;
    out.push("1) Arithmetic")
    out.push("10 + 3 = " + (a + b));
    out.push("10 - 3 = " + (a - b));
    out.push("10 * 3 = " + (a * b));
    out.push("10 / 3 = " + (a / b));
    out.push("10 % 3 = " + (a % b));
    out.push("-----------------");
    // comparison เปรียบเทียบ
    out.push("2) Comparison");
    out.push("5 > 3: " + (5 > 3));
    out.push("5 == '5': " + (5 == '5'));
    out.push("5 === '5': " + (5 === '5'));
    out.push("-----------------");
    // logical (ตรรกะ)
    out.push("3) Logical")
    out.push("true && false: " + (true && false));
    out.push("true || false: " + (true || false));
    out.push("!true: " + (!true));
    out.push("-----------------");
    //Assignment กำหนดค่า
    let x = 10;
    out.push("4) Assignment")
    out.push("x = 10 -> X += 5 = " + (x += 5));
    out.push("x -= 3 = " + (x -= 3));
    out.push("x *= 2 = " + (x *= 2));
    out.push("-----------------");
    //Increment / Decrement (เพิ่มลดค่า)
    let y = 5;
    out.push("5) Increment / Decrement");
    out.push("y = 5 -> y++ = "+ (y++));
    out.push("หลัง y++ ค่า y = " + y);
    out.push("y-- = " + (y--));
    out.push("หลัง y-- ค่า y = " + y);
    out.push("----------------");
    //Ternary เงื่อนไขแบบย่อ
    let age = 18;
    let result = age >= 18 ? "ผู้ใหญ่" : "เยาวชน"
    out.push("6) Ternary Operator");
    out.push("age = 18 -> result = " + result);
    out.push("----------------");
    //แสดงผลบนหน้าเว็บ
    document.getElementById("output").textContent = out.join("\n");
    //แสดงผลใน console
    console.clear();
    out.forEach(line => console.log(line));
}