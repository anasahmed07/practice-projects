#! /usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import necessary modules
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
// Define class and fee details
var classDetails = {
    "9th": { courses: ["Science", "Humanities", "Commerce"], fees: 12000 },
    "10th": { courses: ["Science", "Humanities", "Commerce"], fees: 15000 },
    "11th": { courses: ["Pre-Engineering", "Pre-Medical", "Arts"], fees: 18000 },
    "12th": { courses: ["Pre-Engineering", "Pre-Medical", "Arts"], fees: 22000 },
};
// Function to generate a unique roll number
function generateRollNumber() {
    return Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
}
var students = [];
// Display welcome message
console.log("\n");
console.log(chalk_1.default.yellowBright("*".repeat(74)));
console.log(chalk_1.default.cyanBright("\t Welcome to Anas Student's Management System"));
console.log(chalk_1.default.yellowBright("*".repeat(74)));
console.log("\n");
// Main function
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var options, choice, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    options = [
                        { name: "View Status", value: "viewStatus" },
                        { name: "Enroll New Student", value: "enrollStudent" },
                        { name: "About Us", value: "aboutUs" },
                        { name: "Exit", value: "exit" },
                    ];
                    return [4 /*yield*/, inquirer_1.default.prompt([
                            {
                                name: "choice",
                                type: "list",
                                message: "Choose an option:",
                                choices: options,
                            },
                        ])];
                case 1:
                    choice = (_b.sent()).choice;
                    _a = choice;
                    switch (_a) {
                        case "viewStatus": return [3 /*break*/, 2];
                        case "enrollStudent": return [3 /*break*/, 4];
                        case "aboutUs": return [3 /*break*/, 6];
                        case "exit": return [3 /*break*/, 7];
                    }
                    return [3 /*break*/, 8];
                case 2: return [4 /*yield*/, viewStatus()];
                case 3:
                    _b.sent();
                    return [3 /*break*/, 9];
                case 4: return [4 /*yield*/, enrollStudent()];
                case 5:
                    _b.sent();
                    return [3 /*break*/, 9];
                case 6:
                    aboutUs();
                    main(); // Return to the main menu after displaying "About Us"
                    return [3 /*break*/, 9];
                case 7:
                    console.log(chalk_1.default.green("\n\t Exiting Anas's Student Management Application. Have a Great day. \n"));
                    process.exit();
                    return [3 /*break*/, 9];
                case 8:
                    console.log(chalk_1.default.red("\n\t Invalid choice. Please select a valid option. \n"));
                    main();
                    return [3 /*break*/, 9];
                case 9: return [2 /*return*/];
            }
        });
    });
}
// Function to view status
function viewStatus() {
    return __awaiter(this, void 0, void 0, function () {
        var studentIdentifier, student;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                        {
                            name: "studentIdentifier",
                            type: "input",
                            message: "Enter student's name or roll number to view status:",
                        },
                    ])];
                case 1:
                    studentIdentifier = (_a.sent()).studentIdentifier;
                    student = students.find(function (n) {
                        return n.name === studentIdentifier ||
                            n.rollNumber === parseInt(studentIdentifier);
                    });
                    if (student &&
                        (student.name === studentIdentifier ||
                            student.rollNumber === parseInt(studentIdentifier))) {
                        console.log(chalk_1.default.yellow("\n\t Student Name: ".concat(student.name)));
                        console.log(chalk_1.default.cyan("\t Roll Number: ".concat(student.rollNumber)));
                        console.log(chalk_1.default.green("\t Class: ".concat(student.class)));
                        console.log(chalk_1.default.blue("\t Course: ".concat(student.course)));
                        console.log(chalk_1.default.bold("\t paid Fees: ".concat(student.fees)));
                    }
                    else {
                        console.log(chalk_1.default.red("\n\t Student '".concat(chalk_1.default.greenBright(studentIdentifier), "' not found.")));
                    }
                    main();
                    return [2 /*return*/];
            }
        });
    });
}
// Function to enroll new student
function enrollStudent() {
    return __awaiter(this, void 0, void 0, function () {
        var studentDetails, selectedClass, fees, selectedCourse, studentRollNumber, newStudent, _a, paymentMethod, amountPaid;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log(chalk_1.default.blue("\n\t Enroll New Student:"));
                    return [4 /*yield*/, inquirer_1.default.prompt([
                            {
                                name: "name",
                                type: "input",
                                message: "Enter student's name:",
                            },
                            {
                                name: "class",
                                type: "list",
                                message: "Select student's class:",
                                choices: Object.keys(classDetails),
                            },
                        ])];
                case 1:
                    studentDetails = _b.sent();
                    selectedClass = studentDetails.class;
                    fees = classDetails[selectedClass].fees;
                    console.log(chalk_1.default.gray("\t Fees: ".concat(fees)));
                    return [4 /*yield*/, inquirer_1.default.prompt([
                            {
                                name: "selectedCourse",
                                type: "list",
                                message: "Select course for ".concat(studentDetails.name, ":"),
                                choices: classDetails.selectedClass.courses,
                            },
                        ])];
                case 2:
                    selectedCourse = (_b.sent()).selectedCourse;
                    studentRollNumber = generateRollNumber();
                    newStudent = {
                        name: studentDetails.name,
                        rollNumber: studentRollNumber,
                        class: selectedClass,
                        course: selectedCourse,
                        fees: fees,
                    };
                    students.push(newStudent);
                    return [4 /*yield*/, inquirer_1.default.prompt([
                            {
                                name: "paymentMethod",
                                type: "list",
                                message: "Select the payment method to pay ".concat(chalk_1.default.cyanBright(fees), " "),
                                choices: ["Cash", "Bank-Transfer", "JazzCash", "Easypaisa"],
                            },
                            {
                                name: "amountPaid",
                                type: "input",
                                message: "Enter the amount paid:",
                                validate: function (value) {
                                    if (isNaN(Number(value))) {
                                        return "Please enter a number.";
                                    }
                                    return true;
                                },
                            },
                        ])];
                case 3:
                    _a = _b.sent(), paymentMethod = _a.paymentMethod, amountPaid = _a.amountPaid;
                    if (parseFloat(amountPaid) >= fees) {
                        console.log(chalk_1.default.green("\n\t Enrollment successful for ".concat(chalk_1.default.whiteBright(newStudent.name), " in ").concat(chalk_1.default.yellowBright(newStudent.course), " of class ").concat(chalk_1.default.blueBright(newStudent.class), ".\n")));
                        main(); // After enrollment, return to the main menu
                    }
                    else {
                        console.log(chalk_1.default.red("\n\t Payment declined. Enrollment canceled.\n"));
                        main(); // After enrollment, return to the main menu
                    }
                    return [2 /*return*/];
            }
        });
    });
}
// Function to display information about the system
function aboutUs() {
    console.log(chalk_1.default.magenta("\n\t This is ABC School Student's Management Application"));
    console.log(chalk_1.default.gray("\n\t This system manages students' enrollment, courses and fees."));
    console.log(chalk_1.default.yellow("\t Developed by Anas Ahmed Shaikh"));
    console.log(chalk_1.default.gray("\n For more information, visit https://github.com/anasahmedshaikh \n"));
}
// Run the main function
main();
