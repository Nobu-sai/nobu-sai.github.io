// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';		

// Values
// myHeading.textContent = 'Bob';

// myHeading.textContent = 10;
// myHeading.textContent = true;
// myHeading.textContent = [1,'Bob','Steve',10];
// myHeading.textContent = [0]

// Operators
// myHeading.textContent = "Hello " + "world!!";

// myHeading.textContent = 9 - 3;
// myHeading.textContent = 8 * 2;
// myHeading.textContent = 9 / 3;

// myHeading = 3;		
// myHeading === 4; 

// let myVariable = 3;
// myVariable === 4;

// myHeading.textContent = 3;
// myHeading === 4; 

// myHeading.textContent = 3;
// !myHeading = 3;
// !(myHeading === 3);
// myHeading !== 3;


let iceCream = document.querySelector('#ice-cream');
// iceCream.textContent = 'chocolate';
iceCream = 'chocolate';
if(iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');
} else {
  alert('Awww, but chocolate is my favorite...');
}

 
// let iceCream = document.querySelector('body p:nth-of-type(2)');
// iceCream.textContent = 'Tasty!!!';

// function multiply(num1,num2) {
//   let result = num1 * num2;
//   return result;
// }

// function multiply(num1,num2) {
//   let Result = document.querySelector('.result'); 
//   let Result = num1 * num2;
//   return result;
// }

// multiply(5,6)


// document.querySelector('html').onclick = function() {
//   alert('Ouch! Stop poking me!');
// }





// let myImage = document.querySelector('img');

// myImage.onclick = function() {
//     let mySrc = myImage.getAttribute('src');
//     if(mySrc === 'images/firefox-icon.png') {
//       myImage.setAttribute ('src','images/firefox-icon-2-2.png');
//     } else {
//       myImage.setAttribute ('src','images/firefox-icon.png');
//     }
// }


// let myButton = document.querySelector('button'); 
// let myHeading = document.querySelector('h1');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


// function setUserName() {
//   let myName = prompt('Please Enter Your Name');
//   localStrage.setItem('name', myName);
//   myHeading.textContent = 'Mozilla is cool' + myName;
// }
function setUserName() {
  let myName = prompt('Please enter your name.’);
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}


// if(!localStorage.getItem('name')) {
//   setUserName 
// } else {
//   let storedName = localStorage.getItem('name')
//   myHeading.textContent = "Mozilla is cool" + storedName;
// }
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

// myButton.onclick = function() {
//   setUserName();
// }
myButton.onclick = function() {
  setUserName();
}

// function setUserName() {
//   let myName = prompt('Please Enter Your Name');
//   if(!myName || myName === null) {
//     setUserName('name', myName);
//   } else {
//     localStorage.setItem('name', myName);
//     myHeading.innerHTML = "Mozilla is cool" + storedName; 
//   }
// }
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}