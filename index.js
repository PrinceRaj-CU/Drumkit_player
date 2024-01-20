// document.querySelector("button").addEventListener("click",HandleClick);
// function HandleClick(){
//     alert("I got clicked");
// }

//also we can do the above same thing by using anonymous function
// document.querySelector("button").addEventListener("click",function(){
//     alert("I got clicked once again")
// })

//writing a handleclick function type for all button at once using for loop and while loop
//by using for loop
// var numberofDrumbutton = document.querySelectorAll(".drum").length;
// for(i=0; i<numberofDrumbutton; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//         alert("I  got clicked!");
//     })
// }

//by using while loop
// var numberofDrumbutton= document.querySelectorAll(".drum").length;
// var i=0;
// while(i<numberofDrumbutton){
//     document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//         alert("I got clicked."); 
//     }
//     )
//     i++;
// }
//created a function that generated sound when clicked the button
var numberofDrumbutton= document.querySelectorAll(".drum").length;
for(i=0; i<numberofDrumbutton; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        // var audio= new Audio('sounds/tom-1.mp3');
        // audio.play();
        // this.style.color ="white"; this keyword is basically used for pointing out the button,key or word which has been clicked and
        //return that as a output that this keyword has been clicked yet.
        //now for putting different sounds for different button we can use if conditions but that might be very lengthy so we can use switch condition instead of if conditions --->
        var buttonInnerHTML= this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })
}
//here another function created that generate sound when keys are clicked through keyboard
document.addEventListener("keypress",function(event){
    makeSound(event.key)
    buttonAnimation(event.key);
})

//creating a function for instrument sound
function makeSound(key){
    switch(key){
        case "w":
            var tom1= new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2= new Audio('sounds/tom-2.mp3')
            tom2.play();
            break;
        case "s":
            var tom3= new Audio('sounds/tom-3.mp3')
            tom3.play();
            break;
        case "d":
            var tom4= new Audio('sounds/tom-4.mp3')
            tom4.play();
            break;
        case "j":
            var snare= new Audio('sounds/snare.mp3')
            snare.play();
            break;
        case "k":
            var crash= new Audio('sounds/crash.mp3')
            crash.play();
            break;
        case "l":
            var kick= new Audio('sounds/kick-bass.mp3')
            kick.play();
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey).classList.add("pressed");
    setTimeout(function() {
        var activeButton = document.querySelector("."+currentKey).classList.remove("pressed");
    }, 100);
}
//Callback funtion--> Are the function which get trigger when any action perform like when we click the button then callback function fire or trigger and event in respond to that click

//Higher order Functions--> Higher functions are the functions that take another function as an input(argument).
// function add(num1, num2){
//     return num1+num2;
// }
// function multiply(num1, num2){
//     return num1*num2;
// }
// function divison(num1, num2){
//     return num1/num2;
// }
// function subtract(num1,  num2){
//     return num1-num2;
// }
// function calculator(num1, num2, operator){
//     return operator(num1, num2);
// }