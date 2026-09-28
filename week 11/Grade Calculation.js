function calculateGrade(score) {
    if (score >= 80) { 
        return "A"; 
    }else if (score >= 70) { 
        return "B";
    }else if (score >= 60) { 
        return "C"; 
    }else if (score >= 50) { 
        return "D"; 
    }else { return "F"; 
    }
}
function runGrade() {
    const output = [];
    let score = Number(document.getElementById("scoreInput").value);
    // ตรวจค่าผิด
    if (isNaN(score) || score < 0 || score > 100) {
        output.push("! กรุณากรอกคะแนน 0 - 100");
        document.getElementById("outputBox").textContent = output.join("\n");
        return;
    }
    let grade = calculateGrade(score);
    output.push("คะแนน: " + score);
    output.push("เกรดที่ได้: " + grade);

    console.log("คะแนน: ", + score);
    console.log("เกรดที่ได้: ", + grade);

    document.getElementById("outputBox").textContent = output.join("\n");
}