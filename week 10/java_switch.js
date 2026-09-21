function convertDay(){
    let day = Number(document.getElementById("dayInput").value);
    let text = "";
    switch (day) {
        case 1:
            text = "วันจันทร์";
            break;
        case 2:
            text = "วันอังคาร";
            break;
        case 3:
            text = "วันพุธ";
            break;
        case 4:
            text = "วันพฤหัสบดี";
            break;
        case 5:
            text = "วันศุกร์";
            break;
        case 6:
            text = "เสาร์";
            break;
        case 7:
            text = "วันอาทิตย์";
            break;
        default:
            text = "กรุณากรอกเลข 1-7 เท่านั้น";
    }
    document.getElementById("output").textContent = text;
    console.log("เลขที่กรอก:", day);
    console.log("ชื่อวัน:", text);
}