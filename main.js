"use strict";
//                        // Object , Array and function
let students = [
    {
        name: "Ayesha",
        isSenior: true,
        hasCompletedAssignments: true
    },
    {
        name: "Babar",
        isSenior: false,
        hasCompletedAssignments: false
    },
    {
        name: "Zohaib",
        isSenior: true,
        hasCompletedAssignments: false
    }
];
console.log(students);
// for (let i = 0; i < students.length; i++) {
//   console.log(`Student ${i + 1}:`);
//   console.log(`Name: ${students[i].name}`);
//   console.log(`Is Senior: ${students[i].isSenior}`);
//   console.log(`Has Completed Assignments: ${students[i].hasCompletedAssignments}`);
//   console.log('-------------------------');
// }
// // Step 4: Add functions to update the properties if needed
// function updateSeniorStatus(student: Student, isSenior: boolean): void {
//   student.isSenior = isSenior;
// }
// function updateAssignmentStatus(student: Student, hasCompletedAssignments: boolean): void {
//   student.hasCompletedAssignments = hasCompletedAssignments;
// }
// // Example usage of the update functions
// updateSeniorStatus(students[1], true);
// updateAssignmentStatus(students[2], true);
// console.log('Updated student data:');
// console.log(students);
