var x, y, z;
x = 5;
y = 7; 
z = x + y; 
console.log(z);

let A = "Hello ";
let B = "world!";
let C = A + B;
console.log(C); 


function SumNPrint(x1, x2){
    var x3 = x1 + x2;
    console.log(x3);
}

SumNPrint(x, y)
SumNPrint(A, B)


if (C.length === z) {
    console.log("good job!");
}else if(C.length > z){
    console.log(C);
}else {
    console.log(z);
}

var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"]
var L2 = ["Apple", "Banana", "Kiwi", "Orange"]

function findTheBanana(array) {
    array.forEach((item, index) =>{
        if (item === "Banana") {
            alert(`Found the banana in position ${index + 1}`);
        }
    });
}

findTheBanana(L1)
findTheBanana(L2)

function greetingFunc() {
    const d = new Date();
    let h = d.getHours();
    let message = "";

    if (h < 12){
        message = "Good morning, my name is Yari";
    } else if (h < 18) {
        message = "Good afternoon, my name is Yari";
    } else if (h < 20) {
        message = "Good evening, my name is Yari";
    } else {
        message = "Good night, my name is Yari";
    }
    let element = document.getElementById("changedate");
    if (element) {
        element.innerHTML = message;
    }
}

if (window.location.href.includes("index.html")) {
    greetingFunc();
}