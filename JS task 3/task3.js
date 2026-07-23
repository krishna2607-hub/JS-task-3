// Task 1: Employee Login System

let username = prompt("Enter Username");
let password = prompt("Enter Password");

if (username === "admin" && password === "12345") {
    console.log("Login Successful");
} else {
    console.log("Invalid Username or Password");
}


// Task 2: E-Commerce Discount

let amount = Number(prompt("Enter Purchase Amount"));

if (amount >= 5000) {
    let discount = amount * 0.20;
    let finalAmount = amount - discount;
    console.log("20% Discount Applied");
    console.log("Final Amount:", finalAmount);
} else {
    console.log("No Discount");
    console.log("Final Amount:", amount);
}


// Task 3: ATM Withdrawal

let balance = 10000;
let withdraw = Number(prompt("Enter Withdrawal Amount"));

if (withdraw <= balance) {
    balance -= withdraw;
    console.log("Transaction Success");
    console.log("Balance:", balance);
} else {
    console.log("Insufficient Balance");
}


// Task 4: Student Grade System

let mark = Number(prompt("Enter Marks"));

if (mark >= 90) {
    console.log("Grade A");
} else if (mark >= 80) {
    console.log("Grade B");
} else if (mark >= 70) {
    console.log("Grade C");
} else {
    console.log("Fail");
}


// Task 5: Traffic Signal

let signal = prompt("Enter Signal").toLowerCase();

switch (signal) {
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
        console.log("Invalid");
}


// Task 6: Online Shopping Delivery Charge

let orderAmount = Number(prompt("Enter Order Amount"));
let delivery = 0;

if (orderAmount >= 1000) {
    delivery = 0;
} else {
    delivery = 80;
}

console.log("Order Amount:", orderAmount);
console.log("Delivery:", delivery);
console.log("Total:", orderAmount + delivery);


// Task 7: User Age Verification

let age = Number(prompt("Enter Age"));

if (age >= 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}


// Task 8: Find Largest Number

let a = Number(prompt("Enter First Number"));
let b = Number(prompt("Enter Second Number"));
let c = Number(prompt("Enter Third Number"));

if (a >= b && a >= c) {
    console.log("Largest:", a);
} else if (b >= a && b >= c) {
    console.log("Largest:", b);
} else {
    console.log("Largest:", c);
}


// Task 9: Mobile Password

let pin = prompt("Enter 4 Digit PIN");

if (pin.length === 4) {
    console.log("Login Success");
} else {
    console.log("Invalid PIN");
}


// Task 10: Product Stock

let stock = Number(prompt("Enter Stock"));

if (stock === 0) {
    console.log("Out of Stock");
} else {
    console.log("Available");
}


// Task 11: Employee Salary Bonus

let salary = Number(prompt("Enter Salary"));
let bonus;

if (salary > 50000) {
    bonus = 10000;
} else if (salary > 30000) {
    bonus = 5000;
} else {
    bonus = 2000;
}

console.log("Bonus:", bonus);


// Task 12: Electricity Bill

let units = Number(prompt("Enter Units"));
let bill;

if (units <= 100) {
    bill = units * 2;
} else if (units <= 200) {
    bill = (100 * 2) + ((units - 100) * 4);
} else {
    bill = (100 * 2) + (100 * 4) + ((units - 200) * 6);
}

console.log("Electricity Bill:", bill);


// Task 13: Movie Ticket Booking

let movieAge = Number(prompt("Enter Age"));

if (movieAge < 5) {
    console.log("Free");
} else if (movieAge <= 18) {
    console.log("Ticket Price: 100");
} else {
    console.log("Ticket Price: 200");
}


// Task 14: Hospital Token System

let patient = prompt("Enter Type").toLowerCase();

switch (patient) {
    case "emergency":
        console.log("Token 1");
        break;

    case "senior citizen":
        console.log("Priority");
        break;

    case "normal":
        console.log("Regular Queue");
        break;

    default:
        console.log("Invalid");
}


// Task 15: Company Attendance

let attendance = prompt("Enter Attendance").toLowerCase();

switch (attendance) {
    case "present":
        console.log("Working");
        break;

    case "leave":
        console.log("Leave Approved");
        break;

    case "absent":
        console.log("Salary Deduction");
        break;

    default:
        console.log("Invalid");
}


// Task 16: Grocery Cart Total

let rice = 500;
let sugar = 300;
let oil = 250;

let total = rice + sugar + oil;

if (total > 1000) {
    total = total - (total * 0.10);
}

console.log("Total:", total);


// Task 17: Array Task

let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];

for (let i = 0; i < products.length; i++) {
    console.log((i + 1) + " " + products[i]);
}


// Task 18: Employee Database

let employee = {
    name: "Rahul",
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

let choice = Number(prompt("1.Deposit\n2.Withdraw\n3.Balance\n4.Exit"));

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


// Mini Project: Employee Management System

let employees = [
    {
        name: "Rahul",
        salary: 50000,
        attendance: "Present"
    },
    {
        name: "Priya",
        salary: 35000,
        attendance: "Leave"
    }
];

let option = Number(prompt(
    "1.Add Employee\n2.Show Employee\n3.Calculate Bonus\n4.Check Attendance\n5.Print Salary\n6.Exit"
));

switch (option) {

    case 1:
        let empName = prompt("Enter Name");
        let empSalary = Number(prompt("Enter Salary"));
        let empAttendance = prompt("Enter Attendance");

        employees.push({
            name: empName,
            salary: empSalary,
            attendance: empAttendance
        });

        console.log("Employee Added");
        break;

    case 2:
        for (let emp of employees) {
            console.log(⁠ Name: ${emp.name} ⁠);
            console.log(⁠ Salary: ${emp.salary} ⁠);
            console.log(⁠ Attendance: ${emp.attendance} ⁠);
        }
        break;

    case 3:
        for (let emp of employees) {
            let bonus = 2000;

            if (emp.salary > 50000) {
                bonus = 10000;
            } else if (emp.salary > 30000) {
                bonus = 5000;
            }

            console.log(⁠ ${emp.name} Bonus: ${bonus} ⁠);
        }
        break;

    case 4:
        for (let emp of employees) {
            console.log(⁠ ${emp.name} - ${emp.attendance} ⁠);
        }
        break;

    case 5:
        for (let emp of employees) {
            console.log(⁠ ${emp.name} Salary: ${emp.salary} ⁠);
        }
        break;

    case 6:
        console.log("Exit");
        break;

    default:
        console.log("Invalid Choice");
}