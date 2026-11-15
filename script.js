// var let const

  var a = 10
  let b = 23
  const c = 17

   console.log(a);
   console.log(b);
   console.log(c);

    

   // datatype
   let name = "Pavithra";
let dataage= 22;
let salary = 15000;
let isWorking = true;

console.log(typeof name);
console.log(typeof dataage);
console.log(typeof salary);
console.log(typeof isWorking);



  // array

  // let fruits = ["Apple", "Mango", "Orange", "Banana", "Grapes"];
    
  console.log(0);
  console.log(2);
  console.log(4);
  

  //object
    let fruits = {
    fruit1: "Apple",
    fruit2: "Mango",
    fruit3: "Orange",
    fruit4: "Banana",
    fruit5: "Grapes"
};

console.log(fruits.fruit1);
console.log(fruits.fruit2);
console.log(fruits.fruit3);
console.log(fruits.fruit4);
console.log(fruits.fruit5);



// arithmetic opertaors


   let e = 10;
let f = 5;

console.log(e + f);  // Addition = 15
console.log(e - f);  // Subtraction = 5
console.log(e * f);  // Multiplication = 50
console.log(e / f);  // Division = 2
console.log(e % f);  // Modulus = 0
console.log(e ** f); // Exponentiation = 100000
   


// pre increment

     let i = 10;

console.log(++i);


  

  //post increment
    
   let g = 20;

let h = g++;

console.log(g);
console.log(h);
  
   

// six assignment operators



let j = 10;

j += 5;
console.log(j); // 15

j -= 5;
console.log(j); // 10

j *=2;
console.log(j); // 20

j /=2;
console.log(j); // 10

j %= 3;
console.log(j); // 1

j **= 2;
console.log(a); // 1
// 100 > 50 , 100 =100 , 100 != 200

console.log(100 > 50);
console.log(100 == 100);
console.log(100 != 200);

// loose and strict equality

console.log(25 == "25");
console.log(25 === "25");

// and operator

let num = 50;

console.log(num > 10 && num < 100); 

// or operator

console.log(10>20|| 30>15);



// not operator  

console.log(!(10>5));



 // ternary operator

   let voter = 20;

let result = voter >= 18 ? "Eligible to vote" : "Not eligible to vote";

console.log(result);


// template strings

 let = "Pavithra";
let  = 22;
let course = "JavaScript";

console.log(`My name is ${name}`);
console.log(`My age is ${22}`);
console.log(`My course is ${course}`)

// datatype
console.log(typeof ("Hello" + 100));
console.log(typeof (100 + true));



// typecasting

let z = "500";

let about = Number(z) + 100;

console.log(about);


// typecasting using boolean

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("JavaScript"));


// if-else

let number = 10;

if (number > 0) {
    console.log("Positive Number");
}
else {
    console.log("Negative Number");
}



let eligible = 20;

if (eligible>= 18) {
    console.log("Eligible to Vote");
}
else {
    console.log("Not Eligible to Vote");
}


// even or odd

let n = 7;

if (n % 2 == 0) {
    console.log("Even Number");
}
else {
    console.log("Odd Number");
}

// student pass or fail
let mark = 75;

if (mark >= 35) {
    console.log("Pass");
}
else {
    console.log("Fail");
}

// else-if

let time = 10;

if (time >= 1 && time <= 6) {
    console.log("Early Morning");
}
else if (time >= 7 && time <= 12) {
    console.log("Good Morning");
}
else if (time >= 13 && time <= 15) {
    console.log("Good Afternoon");
}
else if (time >= 16 && time <= 18) {
    console.log("Good Evening");
}
else if (time >= 19 && time <= 24) {
    console.log("Good Night");
}
else {
    console.log("Invalid Time");
}

// nested if
let age = 22;
let height = 165;
let weight = 55;

if (age >= 18) {
    if (height >= 160) {
        if (weight >= 50) {
            console.log("Selected");
        }
        else {
            console.log("Weight is too low");
        }
    }
    else {
        console.log("Height is too low");
    }
}
else {
    console.log("Age is not eligible");
}


//switch

let trafficLight = "red";

switch (trafficLight) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Get Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Traffic Light");
}


// weekdays using switch

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid Day");
}



let username = "Pavithra";
let password = "12345";

if (username == "Pavithra" && password == "12345") {
    console.log("Login Successful");
}
else {
    console.log("Invalid Username or Password");
}

//else-if
let m= 85;

if (mark >= 90) {
    console.log("Grade A");
}
else if (mark >= 75) {
    console.log("Grade B");
}
else if (mark >= 50) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}


//loop

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// even number
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
 //odd number


 for (let i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

// multiplication of 5
  for (let i = 1; i <= 10; i++) {
    console.log("5 x " + i + " = " + (5 * i));
}


// sum of numbers from 1 to 10

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}

console.log(sum);


//loop

let y = 10;

while (i >= 1) {
    console.log(i);
    i--;
}

//do-while


let s = 1;

do {
    console.log(i);
    i++;
}
while (i <= 5);


//for=of


let crs = "JAVASCRIPT";

for (let letter of  course ) {
    console.log(letter);
}


let languages = ["HTML", "CSS", "JavaScript", "Python", "Java"];

for (let language of languages) {
    console.log(language);
}

//for in

 let employee = {
    name: "Pavithra",
    age: 22,
    location: "Salem",
    designation: "Frontend Developer"
};

for (let key in employee) {
    console.log(key, employee[key]);
}

// for-of
let mobiles = ["Samsung", "Apple", "Vivo", "Oppo", "OnePlus"];

for (let brand of mobiles) {
    console.log(brand);
}



// array and loop


let marks = [85, 90, 75, 60, 95];

for (let mark of marks) {
    console.log(mark);
}

//for-in
let employe = {
    name: "Pavithra",
    age: 22,
    salary: 30000,
    location: "Salem"
};

for (let key in employee) {
    console.log(key, employee[key]);
}

//even and odd numbers
  

let numbers = [10, 15, 20, 25, 30];

for (let num of numbers) {
    if (num % 2 == 0) {
        console.log(num + " is Even");
    }
    else {
        console.log(num + " is Odd");
    }
}

//object


let student = {
    name: "Pavithra",
    marks: 80
};

if (student.marks >= 35) {
    console.log(student.name + " Pass");
}
else {
    console.log(student.name + " Fail");
}

//switch
let trafficSignal = "red";

switch (trafficSignal) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Get Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}

   // loop

   let nber = 7;

for (let i = 1; i <= 10; i++) {
    console.log(nber + " x " + i + " = " + (nber * i));
}

  // for-of

let vegetables = ["carrot", "potato", "tomato", "onion", "cabbage"];

for (let vegetable of vegetables) {
    console.log(vegetable.toUpperCase());



}

  //for-in and if-else
    

    let employeesalary= {
    name: "Pavithra",
    age: 22,
    salary: 30000,
    location: "Salem"
};

for (let key in employee) {
    console.log(key + ": " + employee[key]);
}

if (employee.salary > 25000) {
    console.log("Salary is above 25000");
}
else {
    console.log("Salary is 25000 or below");
}


// if-else

    let user = "Pavithra";
let pwd = "12345";

if (username == "Pavithra" && password == "12345") {
    console.log("Login Successful");
}
else {
    console.log("Invalid Username or Password");
}


let students = [
    {
        name: "Pavithra",
        marks: 85
    },
    {
        name: "Priya",
        marks: 30
    },
    {
        name: "Divya",
        marks: 75
    },
    {
        name: "Anu",
        marks: 25
    },
    {
        name: "Kavi",
        marks: 90
    }
];

for (let student of students) {

    console.log("Name: " + student.name);
    console.log("Marks: " + student.marks);

    if (student.marks >= 35) {
        console.log("Result: Pass");
    }
    else {
        console.log("Result: Fail");
    }

    
}