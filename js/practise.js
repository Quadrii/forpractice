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
var calculateBill = [124, 30, 70];
var calculateTips = [waiterTips(calculateBill[1]),
    waiterTips(calculateBill[0]),
    waiterTips(calculateBill[2])
]
var addTipsToBill = [calculateBill[0] + calculateTips[0],
    calculateBill[1] + calculateTips[1],
    calculateBill[2] + calculateTips[2]
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
   In this little assignment you are given a string of space separated numbers, and have to
     return the highest and lowest number. 
========================================================================== */
function highestNumber(numbers) {
    var splitNumbers = numbers.split("");
    var min = Math.min.apply(null, splitNumbers);
    var max = Math.max.apply(null, splitNumbers);
    return min + ' ' + max;
}
document.write(highestNumber("1 2 3 4 5"));



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
        document.write(typeOfLicense = 'Full-Licence')
    } else if (age <= 15) {
        document.write(typeOfLicense = 'permit')
    }

}
exerciseFour(16);





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