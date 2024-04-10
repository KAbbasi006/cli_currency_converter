#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const currency = {
    USD: 1,
    AED: 3.67,
    PKR: 277.95,
    EUR: 0.92,
    GBP: 0.78,
    INR: 83.22,
    JPY: 151,
    TRY: 32.23,
    SAR: 3.75,
    CAD: 1.35, // Canadian Dollar
};
let user_ans = await inquirer.prompt([
    {
        message: "Enter the currency from which you want to convert",
        type: "list",
        name: "from",
        choices: ["USD", "PKR", "AED", "EUR", "GBP", "INR", "JPY", "TRY", "SAR", "CAD"]
    },
    {
        message: "Enter the currency in which you want to convert",
        type: "list",
        name: "to",
        choices: ["USD", "PKR", "AED", "EUR", "GBP", "INR", "JPY", "TRY", "SAR", "CAD"]
    },
    {
        message: "Enter your amount",
        type: "number",
        name: "amount"
    }
]);
let fromAmount = currency[user_ans.from];
let toAmount = currency[user_ans.to];
let amount = user_ans.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log("Your converted currency from", chalk.greenBright(user_ans.from), "to ", chalk.greenBright(user_ans.to), "is ", chalk.yellowBright(convertedAmount.toFixed(2)));
