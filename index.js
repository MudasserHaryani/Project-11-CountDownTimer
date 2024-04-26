#! /usr/bin/env node
import inquirer from "inquirer";
async function getUserInput() {
    while (true) {
        const res = await inquirer.prompt({
            name: "userInput",
            type: "input",
            message: "Please enter the amount of seconds",
            validate: (input) => {
                const num = parseInt(input);
                if (isNaN(num) || num <= 0) {
                    return "Please enter a valid positive number";
                }
                else {
                    return true;
                }
            },
        });
        if (!isNaN(parseInt(res.userInput))) {
            return parseInt(res.userInput);
        }
    }
}
function startTime(val) {
    let remainingTime = val;
    const interval = setInterval(() => {
        if (remainingTime <= 0) {
            console.log("Timer has expired");
            clearInterval(interval);
            process.exit();
        }
        const min = Math.floor(remainingTime / 60);
        const sec = remainingTime % 60;
        console.log(`${min.toString().padStart(2, "0")} : ${sec.toString().padStart(2, "0")}`);
        remainingTime--;
    }, 1000);
}
async function main() {
    const userInput = await getUserInput();
    startTime(userInput);
}
main();
