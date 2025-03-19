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

/*function findTheBanana(array) {
    array.forEach((item, index) =>{
        if (item === "Banana") {
            alert(`Found the banana in position ${index + 1}`);
        }
    });
}

findTheBanana(L1)
findTheBanana(L2)
*/

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
function addYear() {
    var d = new Date();
    var y = d.getFullYear();
    var c = document.getElementById("copyYear");
    if (c) {
        c.innerHTML = "Designed and coded by Yari Gonzalez &copy; " + y;
    }
}

/*function showList() {
    document.getElementById("favList").style.display = "block";
    document.getElementById("seeMore").style.display = "none"; 
}*/

$(document).ready(function() {
    $("#readMore").click(function() {
        $("#longIntro").show();
        $("#readMore").hide();
        $("#readLess").show();
    });
    $("#readLess").click(function() {
        $("#longIntro").hide();
        $("#readLess").hide();
        $("#readMore").show();
    });
});

function validate(){
    var userName = document.getElementById("name");
    var userEmail = document.getElementById("email");
    var userText = document.getElementById("comment");
    var msg = document.getElementById("validateMsg");

    if(!userName.checkValidity() || !userEmail.checkValidity() || !userText.checkValidity()){
        msg.innerHTML = "Please fill out the form correctly so I can get back to you :)"; 
        msg.style.color = "red";
        return false;
    }
    return true;
}
if (window.location.href.includes("fun.html")) {
    getAdvice();
}
function getAdvice(){
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {
        document.getElementById("adviceText").innerHTML = data.slip.advice;
    })
    .catch(error => {
        console.error("Error fetching advice:", error);
        document.getElementById("adviceText").innerHTML = "Oops! Something went wrong. Try Again.";
    });
}