function calculateAge(birthYear) {
    return 2018 - birthYear;
}
calculateAge(1945);
console.log(calculateAge(1945));
console.log(calculateAge(1944));
console.log(calculateAge(1935));


function waiterTips(visitedRestaurantBills) {
    if (visitedRestaurantBills < 50) {
        return visitedRestaurantBills * 0.2;
    } else if (visitedRestaurantBills >= 50 && visitedRestaurantBills < 200) {
        return visitedRestaurantBills * 0.15;
    } else {
        return visitedRestaurantBills * 0.1;
    }
}
var calculatedBill = [124, 30, 70];
var calculateTips = [waiterTips(calculatedBill[1]),
    waiterTips(calculatedBill[0]),
    waiterTips(calculatedBill[2])
]
var addTipsToBill = [calculatedBill[0] + calculateTips[0],
    calculatedBill[1] + calculateTips[1],
    calculatedBill[2] + calculateTips[2]
];
console.log(calculateTips, addTipsToBill);



var johnInfo = {
    firstName: 'john',
    lastName: 'smith',
    job: 'teacher',
    dob: 1980,
    isMarried: 'true',
    family: ['tolu', 'fred', 'mirabel']
}

function calculateAge(johnsAge) {
    return 2020 - johnsAge;
}
var findJohnDob = [johnInfo.dob];
var howOldIsJohn = findJohnDob;
var howOldIsJohnNow = calculateAge(howOldIsJohn);
console.log(howOldIsJohnNow);
console.log(findJohnDob);

function firstFactorial(num) {
    return num * 4 * 3 * 2 * 1
}
var result = firstFactorial(4);
console.log(result);




/* ==========================================================================
   In this little assignment you are given a string of space separated numbers, 
   and have to return the highest and lowest number.
========================================================================== */
function highestNumber(numbers) {
    var splitNumbers = numbers.split("");
    var min = Math.min.apply(null, splitNumbers);
    var max = Math.max.apply(null, splitNumbers);
    return min + ' ' + max;
}
console.log(highestNumber("0 1 2 3 4 5"));



var johnsInfo = {
    fullName: 'Johnny Jones',
    mass: 100,
    height: 6,
    johnsBmi: function() {
        this.bmi = this.mass / (this.height * this.height);
    }
};
johnsInfo.johnsBmi();
console.log(johnsInfo);


var marksInfo = {
    fullName: 'Mark Angel',
    mass: 15,
    height: 4,
    marksBmi: function() {
        this.bmi = this.mass / (this.height * this.height);
    }
};
marksInfo.marksBmi();
console.log(marksInfo);

if (johnsInfo.bmi > marksInfo.bmi) {
    console.log(johnsInfo.fullName + ' ' + 'BMI is the biggest with' + ' ' + johnsInfo.bmi + ' bmi')
} else {
    console.log(marksInfo.fullName + ' ' + 'BMI is the biggest with' + ' ' + marksInfo.bmi + ' bmi')
}




/* ==========================================================================
    In this exercise, you will be given a variable, it will be called: value
        You will also be given a variable named: greaterThanFive
        Using an 'if' statement check to see if the value is greater than 5. If it is, re-assign greaterThanFive the boolean true. 
========================================================================== */
function exerciseFour(value) {
    var greaterThanFive = false;
    if (value > 5) {
        console.log(true);
    } else {
        console.log(greaterThanFive);
    }


}
exerciseFour(9);



/* ==========================================================================
    In this exercise, you will be given a variable, it will be called: age
    You are also given another variable called: typeOfLicense;
    Using an if/else if/else statement assign typeOfLicense to:
    'Full License' if age is greater than or equal to 16,
    'Permit' if age is equal to 15,
    'None' if age is less than 15  
========================================================================== */
function exerciseFour(age) {
    var typeOfLicense;
    if (age >= 16) {
        typeOfLicense = 'Full-Licence';
    } else if (age === 15) {
        typeOfLicense = 'permit';
    } else {
        typeOfLicense = 'None';
    }
    console.log(typeOfLicense);
}
exerciseFour(13);


var restaurantBill = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 43],
    calcTip: function() {
        this.tips = [];
        this.finalValue = [];
        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var theBill = this.bills[i];

            if (theBill < 50) {
                percentage = 0.2;
            } else if (theBill >= 50 && theBill < 200) {
                percentage = 0.15;
            } else {
                percentage = 0.1;
            }
        }

        this.tips[i] = theBill * percentage;
        this.finalValue[i] = theBill + theBill * percentage;
    }
}
restaurantBill.calcTip();
console.log(restaurantBill);


/* ==========================================================================
   If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.Note: If the number is a multiple of both 3 and 5, only count it once.
========================================================================== */

function solution(number) {
    let sum = 0;
    for (i = 3; i < number; i++) {

        if ((i % 3 === 0) || (i % 5 === 0)) {
            sum += i;
        }
    }
    return sum;
}
solution(100)

/* ==========================================================================
    Check If a number is divisible by 2.
========================================================================== */
var isEven = function(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven(8));


/* ==========================================================================
    Find Duplicate in an Array
========================================================================== */
const findDuplicates = (arr) => {
    let sorted_arr = arr.slice().sort(); // You can define the comparing function here. 
    // JS by default uses a crappy string compare.
    // (we use slice to clone the array so the
    // original array won't be modified)
    let results = [];
    for (let i = 0; i < sorted_arr.length - 1; i++) {
        if (sorted_arr[i + 1] == sorted_arr[i]) {
            results.push(sorted_arr[i]);
        }
    }
    return results;
}

let duplicatedArray = [9, 9, 111, 2, 3, 4, 4, 5, 7];
console.log(`The duplicates in ${duplicatedArray} are ${findDuplicates(duplicatedArray)}`);

/* ==========================================================================
    You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
========================================================================== */
function findOutlier(integers) {
    var evens = [];
    var odds = [];
    for (var i = 0; i < integers.length; i++) {
        if ((integers[i] % 2) == 0) {
            evens.push(integers[i]);
        } else {
            odds.push(integers[i]);
        }
    }
    var elen = evens.length;
    var olen = odds.length;

    if (elen > olen) {
        return odds[0];
    } else {
        return evens[0];
    }
}


/* ==========================================================================

The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. A "Avengers" ticket costs 25 dollars.
Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?
Return YES, if Vasya can sell a ticket to each person and give the change. Otherwise return NO.
========================================================================== */
function tickets(peopleInline) {
    let amount25 = 0;
    let amount50 = 0;
    let amount100 = 0;
    for (let i = 0; i < peopleInline.length; i++) {

        if (peopleInline[i] === 100) {
            if (amount25 >= 1 & amount50 >= 1) {
                amount25 -= 1;
                amount50 -= 1;
                amount100++;
            } else if (amount25 >= 3) {
                amount25 -= 3;
                amount100++;
            } else {
                return "NO";
            }
        }
        if (peopleInline[i] === 50) {
            if (amount25 >= 1) {
                amount25--;
                amount50++;
            } else {
                return "NO";
            }
        }
        if (peopleInline[i] === 25) {
            amount25++;
        }
    }
    return "YES";
}

/* ==========================================================================
    Declare two variables: admin and name.
    Assign the value "John" to name.
    Copy the value from name to admin.
    Show the value of admin using alert (must output “John”).
========================================================================== */
var name = "john";
var admin = name;
alert(admin);


/* ==========================================================================
    What is the output of the script?
========================================================================== */

let oruko = "Ilya";
alert(`hello ${1}`); // hello 1?
alert(`hello ${"oruko"}`); // hello name?
alert(`hello ${oruko}`); // hello Ilya?

/* ==========================================================================
What are the final values of all variables a, b, c and d after the code below?
========================================================================== */
let a = 1,
    b = 1;
let c = ++a; // 2?
let d = b++; // 1?

/* ==========================================================================
    What are the values of a and x after the code below?
========================================================================== */
let y = 2;
let x = 1 + (y *= 2); // y = 2 * 2; y = 4;
// solution
let x = 1 + 4;
let x = 5;

/* ==========================================================================
What are results of these expressions?
========================================================================== */
"" + 1 + 0 // "10"
    "" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // "$45"
    "4" - 2 // 2
    "4px" - 2 // NAN
7 / 0 // infinity
    "  -9  " + 5 // " -9  5 "
    "  -9  " - 5 // -14
null + 1 // 1
undefined + 1 // NaN
    " \t \n" - 2 // -2

/* ==========================================================================
    wHAT WILL BE THE RESULT FOR THIS EXPRESSION 
========================================================================== */
5 > 4 // true
    "apple" > "pineapple" // false
"2" > "12" // true // first char of "2" is greater than the first char of "1".
undefined == null // false
undefined === null // false
null == "\n0\n" // false
null === +"\n0\n" // false

/* ==========================================================================
    will alert be hown
========================================================================== */
if ("0") {
    alert('Hello'); // yes, it'll 
}

/* ==========================================================================
    Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’
    If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “Didn’t know? ECMAScript!”
    This should be inside your HTML file for you to see the result
========================================================================== */
let jsName = prompt(‘What is the officialname of JavaScript ? ’, '');

if (jsName == 'ECMAScript') {
    alert('Right!');
} else {
    alert('Didn’t know? ECMAScript!');
}

/* ==========================================================================
Using if..else, write the code which gets a number via prompt and then shows in alert:

    1, if the value is greater than zero,
    -1, if less than zero,
    0, if equals zero.
========================================================================== */
let value = prompt('what is the real value?', 4)
if (value > 0) {
    alert(1);
} else if (value < 0) {
    alert(-1);
} else {
    alert(0)
}

/* ==========================================================================
What is the code below going to output?
========================================================================== */
alert(null || 2 || undefined); // 2

/* ==========================================================================
What is the code below going to output?
========================================================================== */
alert(alert(1) || 2 || alert(3)); // 2

/* ==========================================================================
    What is this code going to show?
========================================================================== */
alert(1 && null && 2); // the answer is null because its the first falsy value

/* ==========================================================================
    What is this code going to show?
========================================================================== */
alert(alert(1) && alert(2)); // undefined

/* ==========================================================================
    Write an “if” condition to check that age is between 14 and 90 inclusively.
    “Inclusively” means that age can reach the edges 14 or 90.
========================================================================== */
function parseInt(age) {
    if (age < 14 || age < 90) {
        alert('you are good');
    }
}
check(20);

or

if (age >= 14 && age <= 90);

or

var checkAge = function parseInt(age) {
    if (age >= 14 && age <= 90) {
        return true;
    } else {
        return false;
    }
}
console.log(checkAge(30));

/* ==========================================================================
    Write an if condition to check that age is NOT between 14 and 90 inclusively.
    Create two variants: the first one using NOT !, the second one – without it.
========================================================================== */

var checkAge = function parseInt(age) {
    if (!(age >= 14 && age <= 90)) {
        return true;
    } else {
        return false;
    }
}

or

if (!(age >= 14 && age <= 90));

// second variant
if (age > 14 || age < 90);

/* ==========================================================================
    Which of these alerts are going to execute?
    What will the results of the expressions be inside if(...)?
========================================================================== */

if (-1 || 0) alert('first'); // truthy
if (-1 && 0) alert('second'); // won't run
if (null || -1 && 1) alert('third'); // third


/* ==========================================================================
    Write the code which asks for a login with prompt.
    If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.
    The password is checked as follows:
    If it equals “TheMaster”, then show “Welcome!”,
    Another string – show “Wrong password”,
    For an empty string or cancelled input, show “Canceled”
========================================================================== */
let userName = prompt("Who's there?", '');
if (userName == 'Admin') {
    let pass = prompt('Password?', '');
    if (pass == 'TheMaster') {
        alert('Welcome!');
    } else if (pass == '' || pass == null) {
        alert('Canceled');
    } else {
        alert('Wrong password');
    }
} else if (userName == '' || userName == null) {
    alert('Canceled');
} else {
    alert("I don't know you");
}


or

let userName = prompt('Enter your username', '');
let passWord = prompt('Enter your password', '');
if (userName == 'master' && passWord == '123') {
    alert('Welcome');
} else if (userName == '' || userName !== 'master' && passWord == '' || passWord !== '123') {
    alert('Wrong username or password!');
    alert('Canceled!');
}


/* ==========================================================================
    What is the last value alerted by this code? Why?
========================================================================== */
let i = 3;

while (i) {
    alert(i--); // 1
}
/* ==========================================================================
    For every loop iteration, write down which value it outputs and then compare it with the solution.
    Both loops alert the same values, or not?
========================================================================== */
// first
let i = 0;
while (++i < 5) alert(i); //  1, 2, 3, 4. 
// second
let i = 0;
while (i++ < 5) alert(i); // 1, 2, 3, 4 and 5

/* ==========================================================================
    Use the for loop to output even numbers from 2 to 10.
========================================================================== */
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        alert(i);
    }

}

/* ==========================================================================
    Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).
========================================================================== */

for (let i = 0; i < 3; i++) {
    alert(`number ${i}!`);
}

// solution

let i = 0;
while (1 < 3) {
    alert(`number ${i}`);
    i++;
}

/* ==========================================================================
Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.
========================================================================== */
let num;
do {
    num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

or

let x;
label: while (true) {
    x = prompt("Enter a number greater than 100?", 0);
    if (x == "") {
        break label;
    } else if (x > 101) {
        break label;
    } else if (x == null) {
        break label;
    } else if (x < 101) {
        x;
    } else {
        break label;
    }
}

or

let value = true;
while (value) {
    let input = prompt("Enter a number");
    if (input > 100 || input === null || input === "") {
        value = false;
    }
}

/* ==========================================================================
    An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.
    In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.
    For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.
    Write the code which outputs prime numbers in the interval from 2 to n.
    For n = 10 the result will be 2,3,5,7.
    P.S. The code should work for any n, not be hard-tuned for any fixed value.
========================================================================== */

let n = 10;

nextPrime:
    for (let i = 2; i <= n; i++) { // for each i...

        for (let j = 2; j < i; j++) { // look for a divisor..
            if (i % j == 0) continue nextPrime; // not a prime, go next i
        }

        alert(i); // a prime
    }

or

let n;
n = prompt("Enter a number greater than 1");
if (n <= 1)
    alert("Invalid input");
else if (n == 2)
    alert("The number is a prime number");
else {
    for (i = 2; i < n; i++) {
        if (n % i == 0) {
            alert("The number is not a prime number");
            break;
        }
    }
    if (i == n)
        alert("The number is a prime number");
}

or