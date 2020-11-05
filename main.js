/* this is a comment.

yea. */

/* let iceCream = 'chocolate';
if(iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');    
} else {
  alert('Awwww, but chocolate is my favorite...');    
} */

function multiply(num1,num2) {
    let result = num1 * num2;
    result = result + 1;
    return result;
  }

 /* document.querySelector('body').onclick = function() {
    alert('Ouch! Dont touch me!');
} */

let myImage = document.querySelector('img');


/* image changer */ 
myImage.onclick = function(){
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/first-image.jpg'){
    myImage.setAttribute('src','images/qwed.png');
  } else {
    myImage.setAttribute('src','images/first-image.jpg')
  }
} 

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

/*myButton.onclick = function() {                  why not here rather than the below of the function?
  setUserName(); 
} */

function setUserName(){
  let myName = prompt('Please enter your name');
  if(!myName) 
    setUserName();
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Off-Tone is cool, ' + myName;
}

myButton.onclick = function() {
  setUserName();
}

if(!localStorage.getItem('name')){
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Off-Tone is cool, ' + storedName;
}
