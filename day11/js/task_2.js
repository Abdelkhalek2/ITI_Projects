var text = "string";
console.log(text);
var number = 10;
console.log(number);
var boolean = true;
console.log(boolean);
var nullValue = null;
console.log(nullValue);
var undefinedValue;
console.log(undefinedValue);

var grade = 85;
if (grade >= 90) {
    console.log("Excellent");
} else if (grade>=80 && grade<=89) {
    console.log("Good");
}else if (grade>=70 && grade<=79) {
    console.log("Average");
}else if (grade>=60 && grade<=69) {
    console.log("Pass");
}else {
    console.log("Fail");
}