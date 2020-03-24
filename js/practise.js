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