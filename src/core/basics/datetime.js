console.log(">>>>>>>>>>>>>>>>>>DATE>>>>>>>>>>>>>>>>>>>");

const today=new Date();

console.log(today);

console.log(today.getDate());
console.log(today.getUTCMonth());

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var dayName = days[today.getDay()];

console.log(dayName)
// console.log(today.getDay());
// console.log(today.getDate());
// console.log(today.getMonth());
// console.log(today.getFullYear());

// let [day,month,year]=[today.getDate(),today.getMonth(),today.getFullYear()]

// let todayNextYear=new Date(year+1,month,day);

// console.log(`todayNextYear: ${todayNextYear}`);

// let todayNextMonth=new Date(year,month+1,day);

// console.log(`todayNextMonth: ${todayNextMonth}`);

// let tomorrow=new Date(year,month,day+1);

// console.log(`tomorrow: ${tomorrow}`);