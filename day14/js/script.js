// ### 1) إيه اللي بيرجعه `map()` ؟
// الاجابة
// - [ ] Array جديدة بنفس الطول


// ### 2) مين فيهم بيرجع أول عنصر يحقق الشرط؟
// الاجابة
// - [ ] find()

// ### 3) `filter()` بيرجع...
// الاجابة:
// - [ ] Array جديدة بالعناصر اللي حققت الشرط

// ### 4) `forEach()` بيرجع...
// الاجابة:
// - [ ] undefined

// ### 5) `for...of` بنستخدمها غالباً مع...
//  الاجابة:
// - [ ] Arrays

// # Part 2 - True or False

// 1. `map()` بيغير الـ Array الأصلية. (false) ايوه عشان هي بتعمل مصفوف جديدة مش بتغير الأصلية.
// 2. `filter()` ممكن يرجع Array فاضية. (true) عشان لو مفيش عناصر بتحقق الشرط.
// 3. `find()` ممكن يرجع undefined. (true) عشان بتاخد أول عنصر يحقق الشرط ولو مفيش بيرجع undefined.
// 4. `for...in` بيلف على الـ Index بتاع الـ Array. (true) عشان بيرجع الـ Index مش القيمة نفسها.
// 5. `forEach()` ينفع أعمل بيها break. (false) عشان هي بتعمل تكرار على العناصر ولا بتحتاج لbreak.

// Q1
const numbers = [1,2,3,4];
numbers.map((num)=>{
    console.log(num * 2);
});


// Q2
const nums = [10,25,5,30,15,40];
const result = nums.filter((num)=>{
    return num > 20;
});
console.log(result);

// ## Q3
const users = [
    {name:"Ali", age:20},
    {name:"Sara", age:28},
    {name:"Omar", age:30}
];


const user = users.find((item)=>{
    return item.age > 25;
});

console.log(user);

// Q4 
const names = ["ali","mona","ahmed"];
const result_2 = names.map((name)=>{
    return name.toUpperCase();
});

console.log(result_2);

const fruits = ["Apple","Banana","Orange"];
for (const fruit of fruits){
    console.log(fruit);
}
    

for (const i in fruits){
    console.log(fruits[i]);
}


fruits.forEach((fruit,index)=>{
    console.log(`${index} => ${fruit}`);
});

let sum = (a,b)=>{
    return a + b;
};


let user_2 = {
    name: "Ali",
    age: 20
}

let {name: name_user, age} = user_2;
console.log(name_user);
console.log(age);

console.log(`Hello ${name_user}`)

const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);


const students = [
    {name:"Ali", degree:70},
    {name:"Sara", degree:95},
    {name:"Ahmed", degree:40},
    {name:"Mona", degree:85},
    {name:"Omar", degree:55}
];

// هعمل نسحة وارجع فيها الاسماء بتاعت الطلاب باستخدام map() وارجعها في مصفوفة جديدة
const studentNames = students.map((student)=>{
    return student.name;
});
console.log(studentNames);

// هنا عشان هفلتر بالشرط هستخدم filter
const highScorers = students.filter((student)=>{
    return student.degree >= 60;
});
console.log(highScorers);

// هنا عشان هستخدم find  عشان ارجع اول طالب جاب درجة اعلى من 90
const firstHighScorer = students.find((student)=>{
    return student.degree > 90;
});
console.log(firstHighScorer);
// هنا عشان هستخدم forEach عشان اطبع اسماء الطلاب

students.forEach((student)=>{
    console.log(student.name);
});

const numbers_2 = [5,10,15,20];
const TotalSum = numbers_2.reduce((a, b)=>{
    return a + b;
}, 0);
console.log(TotalSum);