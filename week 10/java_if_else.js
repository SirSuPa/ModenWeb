function runDemo() {
    const output = [];
    //ค่าเริ่มต้น
    let score = 72;
    //เงื่อนไข if / else
        if (score >= 50) {
            output.push("ผลทดสอบ: ผ่าน");
            console.log("ผลทดสอบ: ผ่าน");
        }else{
            output.push("ผลทดสอบ: ไม่ผ่าน");
            console.log("ผลทดสอบ: ไม่ผ่าน");
        }
        //วน loop 5 รอบ
        for (let i = 0;i <5; i++) {
            output.push("รอบที่: " + i);
            console.log("รอบที่:", i);
        }

        document.getElementById("outputBox").textContent = output.join("\n");
}