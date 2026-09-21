function runStringDemo(){
    const out = [];

    let text = 'JavaScript เจ๋งมาก';
    let firstName = 'สมชาย'
    //Template Literal
    out.push(`สวัสดี ${firstName}!`);
    console.log(`สวัสดี ${firstName}!`)
    //String Methods
    out.push(`ความยาว ${text.length}!`);
    console.log(`ความยาว ${text.length}!`)
    out.push("ตัวใหญ่: " +text.toLocaleUpperCase());
    console.log("ตัวใหญ่: " + text.toLocaleUpperCase);
    out.push("ตัวเล็ก: " +text.toLocaleLowerCase());
    console.log("ตัวเล็ก: " + text.toLocaleLowerCase);
    out.push('มี "Java"?' + text.includes('Java'));
    console.log('มี "Java"?' + text.includes('Java'))
    out.push('ตำแหน่ง "Script": ' + text.indexOf('Script'));
    console.log('ตำแหน่ง "Script": ' + text.indexOf('Script'))
    out.push("ตัดคำ (0-4): " + text.slice(0, 4));
    console.log("ตัดคำ (0-4): " + text.slice(0, 4))
    out.push("แทนที่: " + text.replace('เจ๋ง', 'สุดยอด'));
    console.log("แทนที่: " + text.replace('เจ๋ง', 'สุดยอด'))
    //แสดงผลบนหน้าเว็บ
    document.getElementById("output").textContent = out.join("\n");
    //แสดงผลใน console
    console.clear();
    out.forEach(line => console.log("> " + line));
}