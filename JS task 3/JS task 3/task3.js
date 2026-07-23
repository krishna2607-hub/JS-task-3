// Task 1: Employee Login System

let username = prompt("Enter Username:");
let password = prompt("Enter Password:");

if (username === "admin" && password === "12345") {
    console.log("Login Successful");
    alert("Login Successful");
} else {
    console.log("Invalid Username or Password");
    alert("Invalid Username or Password");
}

// Task 2: E-Commerce Discount

let amount = Number(prompt("Enter Purchase Amount:"));

if (amount >= 5000) {
    let discount = amount * 20 / 100;
    let finalAmount = amount - discount;

    console.log("20% Discount Applied");
    console.log("Discount Amount: ₹" + discount);
    console.log("Final Amount: ₹" + finalAmount);
} else {
    console.log("No Discount");
    console.log("Final Amount: ₹" + amount);
}

// Task 3: ATM Withdrawal

let balance = 10000;
let withdraw = Number(prompt("Enter Withdrawal Amount:"));

if (withdraw <= balance) {
    balance = balance - withdraw;

    console.log("Transaction Successful");
    console.log("Withdraw Amount: ₹" + withdraw);
    console.log("Remaining Balance: ₹" + balance);
} else {
    console.log("Insufficient Balance");
}

// Task 4: Student Grade System

let mark = Number(prompt("Enter Student Marks:"));

if (mark >= 90) {
    console.log("Grade A");
} 
else if (mark >= 80) {
    console.log("Grade B");
} 
else if (mark >= 70) {
    console.log("Grade C");
} 
else {
    console.log("Fail");
}

// Task 5: Traffic Signal

let signal = prompt("Enter Traffic Signal (red, yellow, green):");

switch (signal.toLowerCase()) {

    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}

// Task 6: Online Shopping Delivery Charge

let orderAmount = Number(prompt("Enter Order Amount:"));
let deliveryCharge;
let total;

if (orderAmount >= 1000) {
    deliveryCharge = 0;
} else {
    deliveryCharge = 80;
}

total = orderAmount + deliveryCharge;

console.log("Order Amount : ₹" + orderAmount);
console.log("Delivery Charge : ₹" + deliveryCharge);
console.log("Total Amount : ₹" + total);

// Task 7: User Age Verification

let age = Number(prompt("Enter Your Age:"));

if (age >= 18) {
    console.log("Eligible");
    alert("Eligible");
} else {
    console.log("Not Eligible");
    alert("Not Eligible");
}

//Task:8 Find Largest Among 3 Numbers

let a = 10;
let b = 20;
let c = 15;

if (a >= b && a >= c) {
    console.log("Largest Number:", a);
} else if (b >= a && b >= c) {
    console.log("Largest Number:", b);
} else {
    console.log("Largest Number:", c);
}

// Task 9: Mobile Password

let pin = prompt("Enter 4-Digit PIN:");

if (pin.length === 4) {
    console.log("Login Success");
} else {
    console.log("Invalid PIN");
}

// Task 10: Product Stock

let stock = Number(prompt("Enter Product Stock:"));

if (stock === 0) {
    console.log("Out of Stock");
} else {
    console.log("Available");
}

// Task 11: Employee Salary Bonus

let salary = Number(prompt("Enter Employee Salary:"));
let bonus;

if (salary > 50000) {
    bonus = 10000;
} 
else if (salary > 30000) {
    bonus = 5000;
} 
else {
    bonus = 2000;
}

console.log("Employee Salary: ₹" + salary);
console.log("Bonus: ₹" + bonus);
console.log("Total Salary: ₹" + (salary + bonus));

// Task 12: Electricity Bill

let units = Number(prompt("Enter Electricity Units:"));
let bill;

if (units <= 100) {
    bill = units * 2;
}
else if (units <= 200) {
    bill = (100 * 2) + ((units - 100) * 4);
}
else {
    bill = (100 * 2) + (100 * 4) + ((units - 200) * 6);
}

console.log("Units Consumed: " + units);
console.log("Electricity Bill: ₹" + bill);

// Task 13: Movie Ticket Booking

let movieAge = 20;

if (movieAge < 5) {
    console.log("Ticket Price: Free");
} else if (movieAge <= 18) {
    console.log("Ticket Price: ₹100");
} else {
    console.log("Ticket Price: ₹200");
}

// Task 14: Hospital Token System

let category = "Senior Citizen";

switch (category) {
    case "Emergency":
        console.log("Token 1");
        break;

    case "Senior Citizen":
        console.log("Priority");
        break;

    case "Normal":
        console.log("Regular Queue");
        break;

    default:
        console.log("Invalid Category");
}

// Task 15: Company Attendance

let status = "Present";

switch (status) {
    case "Present":
        console.log("Working");
        break;

    case "Leave":
        console.log("Leave Approved");
        break;

    case "Absent":
        console.log("Salary Deduction");
        break;

    default:
        console.log("Invalid Status");
}

// Task 16: Grocery Cart Total

let rice = 500;
let sugar = 300;
let oil = 250;

let groceryTotal = rice + sugar + oil;

if (groceryTotal > 1000) {
    groceryTotal = groceryTotal - (groceryTotal * 10 / 100);
    console.log("10% Discount Applied");
}

console.log("Final Total: ₹" + groceryTotal);

// Task 17: Array Task

let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];

for (let i = 0; i < products.length; i++) {
    console.log((i + 1) + " " + products[i]);
}

// Task 18: Employee Database

let employee = {
    name: "krishna",
    role: "Developer",
    salary: 50000
};

for (let key in employee) {
    console.log(employee[key]);
}

// Task 19: Type Casting

let num = Number("100");
let bool = Boolean("true");
let str = String(200);

console.log(num);
console.log(bool);
console.log(str);

// Task 20: Banking Menu

let choice = 2;

switch (choice) {
    case 1:
        console.log("Deposit");
        break;

    case 2:
        console.log("Withdraw");
        break;

    case 3:
        console.log("Balance");
        break;

    case 4:
        console.log("Exit");
        break;

    default:
        console.log("Invalid Choice");
}

// Employee Management System

let employeeDetails = {
    name: "krishna",
    role: "Developer",
    salary: 50000,
    attendance: "Present"
};

let menuChoice = 5;

switch (menuChoice) {

    case 1:
        console.log("Employee Added");
        break;

    case 2:
        console.log("Name:", employeeDetails.name);
        console.log("Role:", employeeDetails.role);
        console.log("Salary:", employeeDetails.salary);
        break;

    case 3:
        let employeeBonus = 0;

        if (employeeDetails.salary > 50000) {
            employeeBonus = 10000;
        } else if (employeeDetails.salary > 30000) {
            employeeBonus = 5000;
        } else {
            employeeBonus = 2000;
        }

        console.log("Bonus:", employeeBonus);
        break;

    case 4:
        console.log("Attendance:", employeeDetails.attendance);
        break;

    case 5:
        console.log("Salary:", employeeDetails.salary);
        break;

    case 6:
        console.log("Exit");
        break;

    default:
        console.log("Invalid Choice");
}

