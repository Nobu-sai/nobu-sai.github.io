function setUserName() {
  let myName = prompt('Please Enter Your Name');
  localStrage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool' + myName;
}
