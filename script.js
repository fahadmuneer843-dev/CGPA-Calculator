function generateFields() {
    let count = document.getElementById("subjectCount").value;
    let formArea = document.getElementById("formArea");

    formArea.innerHTML = "";

    for (let i = 0; i < count; i++) {
        formArea.innerHTML += `
        <div class="box">
            <h4>Subject ${i + 1}</h4>

            Grade:
            <select class="grade">
                <option value="4">A+</option>
                <option value="4">A</option>
                <option value="3.5">B+</option>
                <option value="3">B</option>
                <option value="2.5">C+</option>
                <option value="2">C</option>
                <option value="0">F</option>
            </select>

            Credit Hours:
            <input type="number" class="ch" min="1">
        </div>
        `;
    }
}

function calculateCGPA() {
    let grades = document.querySelectorAll(".grade");
    let credits = document.querySelectorAll(".ch");

    let totalPoints = 0;
    let totalCredits = 0;

    for (let i = 0; i < grades.length; i++) {
        let gp = Number(grades[i].value);
        let ch = Number(credits[i].value);

        totalPoints += gp * ch;
        totalCredits += ch;
    }

    let cgpa = totalPoints / totalCredits;

    if (isNaN(cgpa)) {
        document.getElementById("result").innerText =
        "Please fill all fields properly!";
    } else {
        document.getElementById("result").innerText =
        "Your CGPA is: " + cgpa.toFixed(2);
    }
}
