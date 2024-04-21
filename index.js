#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
let studentData = null;
let condition = true;
while (condition) {
    let studentInformition = await inquirer.prompt({
        name: "name",
        type: "list",
        message: chalk.blueBright.bold("......please select one option and continue opration......."),
        choices: [
            "Add New Student",
            "Check Balance",
            "Pay Tuition Fees",
            "Student Status",
        ],
    });
    if (studentInformition.name === "Add New Student") {
        let studentName = await inquirer.prompt({
            name: "name",
            type: "input",
            message: chalk.greenBright.bold("please enter student name"),
        });
        if (studentName.name !== "") {
            let studentId = await inquirer.prompt({
                name: "id",
                type: "number",
                message: chalk.blueBright.bold("please enter student id and id number is must be (....5 digits)."),
            });
            if (studentId.id > 1111 && studentId.id < 100000) {
                let bankAccountNumber = await inquirer.prompt({
                    name: "account",
                    type: "number",
                    message: chalk.greenBright.bold("please enter bank account number and number is must be (...8 digits)."),
                });
                if (bankAccountNumber.account > 1111111 &&
                    bankAccountNumber.account < 100000000) {
                    let coursesList = await inquirer.prompt({
                        name: "options",
                        type: "list",
                        message: chalk.blueBright.bold("please enter one option and continue opration"),
                        choices: ["Free Courses", "Paid Courses"],
                    });
                    if (coursesList.options === "Free Courses") {
                        let freeCoursesList = await inquirer.prompt({
                            name: "free",
                            type: "list",
                            message: chalk.greenBright.bold("please select one option and select course"),
                            choices: ["PIAIC", "GIAIC"],
                        });
                        studentData = {
                            StudentName: studentName.name,
                            StudentId: studentId.id,
                            BankAccount: bankAccountNumber.account,
                            CourseName: coursesList.options,
                            CourseSelect: freeCoursesList.free,
                        };
                        console.log(studentData);
                    }
                    else if (coursesList.options === "Paid Courses") {
                        let paidCoursesList = await inquirer.prompt({
                            name: "paid",
                            type: "list",
                            message: chalk.greenBright.bold("please select one option and select course"),
                            choices: ["Digital Marketing", "Freelancing"],
                        });
                        if (paidCoursesList.paid === "Digital Marketing") {
                            let digitalMarketing = await inquirer.prompt({
                                name: "fees",
                                type: "rawlist",
                                message: chalk.blueBright.bold("do you want to buy this course ?"),
                                choices: ["100000"],
                            });
                            studentData = {
                                StudentName: studentName.name,
                                StudentId: studentId.id,
                                BankAccount: bankAccountNumber.account,
                                CourseName: coursesList.options,
                                CourseSelect: paidCoursesList.paid,
                                Fees: digitalMarketing.fees,
                            };
                            console.log(studentData);
                        }
                        else if (paidCoursesList.paid === "Freelancing") {
                            let freelancing = await inquirer.prompt({
                                name: "fees",
                                type: "rawlist",
                                message: chalk.blueBright.bold("do you want to buy this course ?"),
                                choices: ["150000"],
                            });
                            studentData = {
                                StudentName: studentName.name,
                                StudentId: studentId.id,
                                BankAccount: bankAccountNumber.account,
                                CourseName: coursesList.options,
                                CourseSelect: paidCoursesList.paid,
                                Fees: freelancing.fees,
                            };
                            console.log(studentData);
                        }
                    }
                }
                else {
                    console.log(chalk.redBright.bold("....!  sorry you wrong entered --- only 8 digits are requierd."));
                }
            }
            else {
                console.log(chalk.redBright.bold("....!  sorry you wrong entered --- only 5 digits are requierd."));
            }
        }
        else {
            console.log(chalk.redBright.bold("....!  this must be fill out"));
        }
    }
    else if (studentInformition.name === "Check Balance") {
        let showBalance = await inquirer.prompt({
            name: "show",
            type: "number",
            message: chalk.greenBright.bold("do you want to show balance so enter same account (...8 digits)."),
        });
        if (showBalance.show === studentData?.BankAccount) {
            console.log(chalk.greenBright.bold("student balance is :"), chalk.yellowBright.bold(10000000));
        }
        else {
            console.log(chalk.redBright.bold("....!  sorry you wrong entered please same number enter --- only 8 digits are requierd."));
        }
    }
    else if (studentInformition.name === "Pay Tuition Fees") {
        let tuitionFees = await inquirer.prompt({
            name: "fees",
            type: "input",
            message: chalk.greenBright.bold("pay tuition fees so enter same student name"),
        });
        if (tuitionFees.fees === studentData?.StudentName) {
            console.log(chalk.greenBright.bold("student per month fees is :"), chalk.yellowBright.bold(50000));
        }
        else {
            console.log(chalk.redBright.bold("....!  please enter same student name"));
        }
    }
    else if (studentInformition.name === "Student Status") {
        let enterId = await inquirer.prompt({
            name: "id",
            type: "number",
            message: chalk.greenBright.bold("please enter same student id number (...5 digits)."),
        });
        if (enterId.id === studentData?.StudentId) {
            console.log(studentData);
        }
        else {
            console.log(chalk.redBright.bold("....!  sorry you wrong entered please same id enter --- only 5 digits are requierd."));
        }
    }
    let loop = await inquirer.prompt({
        name: "selection",
        type: "confirm",
        message: chalk.yellowBright.bold("do you want to continue"),
        default: "true",
    });
    if (loop.selection === false) {
        condition = false;
    }
    if (condition === false) {
        console.log(chalk.cyanBright("no i am not continue this program"));
    }
}
