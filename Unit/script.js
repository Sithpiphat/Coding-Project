function convert() {
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    let result;

    if (isNaN(inputValue)) {
        result = "กรุณากรอกค่าที่ถูกต้อง";
    } else {
        // แปลงค่าตามหน่วยต้นทาง
        let valueInGrams;
        switch (fromUnit) {
            case "grams":
                valueInGrams = inputValue;
                break;
            case "moles":
                valueInGrams = inputValue * 18.015; // ตัวอย่าง: น้ำ (H2O)
                break;
            case "liters":
                valueInGrams = inputValue * 1000; // ตัวอย่าง: ลิตรเป็นมิลลิลิตร
                break;
            default:
                result = "ไม่ทราบหน่วยต้นทาง";
        }

        // แปลงค่าตามหน่วยปลายทาง
        switch (toUnit) {
            case "grams":
                result = `${inputValue} ${fromUnit} = ${valueInGrams.toFixed(4)} กรัม`;
                break;
            case "moles":
                result = `${inputValue} ${fromUnit} = ${(valueInGrams / 18.015).toFixed(4)} โมล (H2O)`;
                break;
            case "liters":
                result = `${inputValue} ${fromUnit} = ${(valueInGrams / 1000).toFixed(4)} ลิตร`;
                break;
            default:
                result = "ไม่ทราบหน่วยปลายทาง";
        }
    }

    document.getElementById("result").innerText = result;
}