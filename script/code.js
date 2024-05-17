function calculateBMI() {
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById("result").innerHTML = "Please enter valid height and weight.";
        return;
    }

    let bmi = weight / ((height / 100) ** 2);
    let category = getBMICategory(bmi);
    let color = getCategoryColor(category);

    document.getElementById("result").innerHTML = `
        <p>Your BMI is: <span style="color: ${color};">${bmi.toFixed(2)}</span></p>
        <p class="category">Category: <span style="color: ${color};">${category}</span></p>
    `;
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

function getCategoryColor(category) {
    switch (category) {
        case "Underweight":
            return "#1E90FF"; // Dodger Blue
        case "Normal weight":
            return "#008000"; // Green
        case "Overweight":
            return "#FFA500"; // Orange
        case "Obese":
            return "#FF0000"; // Red
        default:
            return "#000"; // Black (fallback)
    }
}

function resetForm() {
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("result").innerHTML = "";
}