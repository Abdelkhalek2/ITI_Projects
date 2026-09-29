var employer ={
    name: 'John',
    age: 30,
    gender: 'male',
    salary: 50000,
    isMarried: true,
    address: {
        city: 'New York',
        state: 'new york',
    },
    sayHello: function(){
        console.log(`Hello, my name is ${employer.name} and I am ${employer.age} years old.`);
    }
}
console.log(employer.name);
employer.sayHello();
console.log(employer.address.city);
employer.name = 'mohamed';
console.log(employer.name);

// self-invoking function
(function(){
    console.log('system is running');
})()

// declare a function to calculate the total salary of an employee
function salary(basicSalary, bonus){
    var totalSalary = basicSalary + bonus;
    return totalSalary;
}
console.log(`Total salary: ${salary(50000, 10000)}`);

// declare a function to calculate the area of a rectangle
function calculateArea(length, width){
    var area = length * width;
    return area;
}
console.log(`Area: ${calculateArea(10, 5)}`);

//arrow function 
var rateSalary = (totalSalary) => {
    if(totalSalary > 100000){
        return 'high salary';
    }
    else if(totalSalary > 50000){
        return 'medium salary';
    }
    else{
        return 'low salary';
    }
}

console.log(`Salary rate: ${rateSalary(60000)}`);

var todoList = ['activity', 'exercise', 'study', 'work', 'sleep'];
for(var i=0;i<todoList.length;i++){
    console.log(`todo:${todoList[i]}`);
}

var countHolidays = 5;
while(countHolidays>=0){
    console.log(`Remaining holidays : ${countHolidays}`);
    countHolidays--;
}

var daysAttendedOfTheWeek = 0;
do{
    console.log(`Days attended: ${daysAttendedOfTheWeek}`);
    daysAttendedOfTheWeek++;
}while(daysAttendedOfTheWeek>5);