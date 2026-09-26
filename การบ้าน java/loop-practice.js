let maxNumber = 20;
let htmlContent = "";

for (let i = 0; i <= maxNumber; i++) {
    let type = (i % 2 === 0) ? "(คู่)" : "(คี่)";
    let text = `${i} ${type}`;
    htmlContent += text + "<br>";
    console.log(text);
}

for (let i = 0; i <= maxNumber; i += 2) {
    let text = `นับทีละ 2 : ${i}`;
    htmlContent += text + "<br>";
    console.log(text);
}

for (let i = 10; i >= 0; i--) {
    let text = `ถอยหลัง : ${i}`;
    htmlContent += text + "<br>";
    console.log(text);
}

document.getElementById("output").innerHTML = htmlContent;