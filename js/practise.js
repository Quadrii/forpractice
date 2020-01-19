// function calculateAge(birthYear) {
//     return 2018 - birthYear;
// }
// calculateAge(1945);
// console.log(calculateAge(1945));
// console.log(calculateAge(1944));
// console.log(calculateAge(1935));


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