// Wait until the DOM content is fully loaded before executing scripts
document.addEventListener("DOMContentLoaded", function () {
    
    // Define arrays containing student names and their corresponding grades
    const studentNames = ["Marie", "Mayyang", "Ambit", "Wasili", "Emerson"];
    const studentGrades = [92, 85, 78, 97, 74];

    // Function to compute the grading scale equivalent based on numerical score
    function getEquivalent(grade) {
        if (grade >= 95 && grade <= 100) return "1.0";
        if (grade >= 91 && grade <= 94) return "1.5";
        if (grade >= 87 && grade <= 90) return "1.75";
        if (grade >= 83 && grade <= 86) return "2.0";
        if (grade >= 79 && grade <= 82) return "2.25";
        if (grade >= 75 && grade <= 78) return "2.75";
        return "Failed"; // Passing threshold is 75
    }

    // Function to evaluate remarks based on grade
    function getRemark(grade) {
        return grade >= 75 ? "Passed" : "Failed";
    }

    // Function to determine academic honors status
    function getAcademicLeader(grade) {
        if (grade >= 95) return "1st Class Academic Leader";
        if (grade >= 90) return "2nd Class Academic Leader";
        return "-";
    }

    // Event listener for the "Show Grade Equivalent" button
    const evalButton = document.getElementById("evalButton");
    const evaluationSection = document.getElementById("evaluationSection");
    const resultBody = document.getElementById("resultBody");

    evalButton.addEventListener("click", function () {
        // Clear previous results to prevent duplication
        resultBody.innerHTML = "";

        // Use a for loop to iterate through the arrays and evaluate each student's grade
        for (let i = 0; i < studentNames.length; i++) {
            let name = studentNames[i];
            let grade = studentGrades[i];
            
            // Call evaluation functions
            let equivalent = getEquivalent(grade);
            let remark = getRemark(grade);
            let leader = getAcademicLeader(grade);

            // Create a new table row dynamically
            let row = document.createElement("tr");

            // Handle failed formatting appearance if needed, matching UI screenshot layout
            let equivalentDisplay = equivalent;
            let remarkDisplay = remark;

            if (equivalent === "Failed") {
                equivalentDisplay = "Failed";
                remarkDisplay = "Failed";
            }

            // Populate row cells with evaluated data
            row.innerHTML = `
                <td>${name}</td>
                <td>${grade}</td>
                <td>${equivalentDisplay}</td>
                <td>${remarkDisplay}</td>
                <td>${leader}</td>
            `;

            // Append the row to the result table body
            resultBody.appendChild(row);
        }

        // Reveal the evaluation section once generated
        evaluationSection.classList.remove("hidden");
    });
});