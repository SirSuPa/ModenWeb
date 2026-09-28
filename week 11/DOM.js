//เลือก Element ตั่งแต่ต้น
const title = document.getElementById("header");
const items = document.querySelectorAll(".item");
const logBox = document.getElementById("logBox");

function log(message) {
    console.log(message);
    logBox.textContent += "\n" + message;
}

//เปลี่ยนข้อความ + สีของหัวข้อ
function changeTitle(){
    title.textContent = "หัวข้อถูกเปลี่ยนโดย JavaScript";
    title.style.color = "red";
    title.style.fontWeight = "bold";
    log("เปลี่ยนข้อความและสีของ #header แล้ว");
}

//ไฮไลต์ element ที่มี class = "item"
function highlightItem(){
    items.forEach((item, index) => {
        item.classList.add("highlight");
        item.textContent = "รายการที่ " + (index + 1) + " (ถูกไฮไลต์)";
    });
    log("เพิ่มคลาส .highlight ให้ .item ทั้งหมด");
}

// สร้าง <p> ใหม่แล้วแปะท้าย body
function addParagraph(){
    let p = document.createElement("p");
    p.textContent = "ข้อความใหม่ที่เพิ่มจาก JavaScript เวลา: " + new Date().toLocaleTimeString();
    document.body.appendChild(p);
    log("สร้าง <p> ใหม่และ appendChild ลงท้าย <body>");
}