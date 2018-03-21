//  set the focus on first text field when the page is loaded
const name = document.getElementById('name');
name.focus();

// add text field when "Other" option is chosen on the Job Role
const jobRole = document.getElementById('title');
const jobRoleText = document.createElement('input');
jobRoleText.type = 'text';
jobRoleText.id = 'other-title';
jobRoleText.placeholder = 'Your Job Role';

jobRole.addEventListener('change', (e)=> {
  jobRole.parentNode.appendChild(jobRoleText);
  if (title.value === 'other') {
    jobRoleText.style.display = 'block';
  } else {
    jobRoleText.style.display = 'none';
  }
});

///// T-Shirt Info /////
const design = document.getElementById('design');
const color = document.getElementById('colors-js-puns');
const cornFlowerBlue = document.querySelectorAll('#color option')[0];
const darkSlateGrey = document.querySelectorAll('#color option')[1];
const gold = document.querySelectorAll('#color option')[2];
const tomato = document.querySelectorAll('#color option')[3];
const steelblue = document.querySelectorAll('#color option')[4];
const dimgrey = document.querySelectorAll('#color option')[5];

// only show the available colors for the chosen design
function chooseColor(){
  for (let i = 0; i < design.length; i++) {
    if (design.value === 'js puns') {
      color.display = 'block';
      cornFlowerBlue.style.display = 'block';
      darkSlateGrey.style.display = 'block';
      gold.style.display = 'block';
      tomato.style.display = 'none';
      steelblue.style.display = 'none';
      dimgrey.style.display = 'none';
    } else if (design.value === 'heart js') {
      color.style.display = 'block';
      cornFlowerBlue.style.display = 'none';
      darkSlateGrey.style.display = 'none';
      gold.style.display = 'none';
      tomato.style.display = 'block';
      steelblue.style.display = 'block';
      dimgrey.style.display = 'block';
    } else {
      color.style.display = 'none';
      cornFlowerBlue.style.display = 'none';
      darkSlateGrey.style.display = 'none';
      gold.style.display = 'none';
      tomato.style.display = 'none';
      steelblue.style.display = 'none';
      dimgrey.style.display = 'none';
    }
  }
};
chooseColor();

// Hide the color label and select menu until a T-Shirt design is selected from the design menu
design.addEventListener('change', (e) =>{
  if (design.value == 'js puns' || design.value == 'heart js'){
    color.style.display = 'block';
    chooseColor();
  } else {
    color.style.display = 'none';
  }
});

///// Register for Activities /////
const activities = document.getElementsByClassName('activities')[0];
const main = document.getElementsByName('all')[0];
const frameworks = document.getElementsByName('js-frameworks')[0];
const libs = document.getElementsByName('js-libs')[0];
const express = document.getElementsByName('express')[0];
const node = document.getElementsByName('node')[0];
const tools = document.getElementsByName('build-tools')[0];
const npm = document.getElementsByName('npm')[0];
const price = document.createElement('span');

// set style for the total cost
price.setAttribute("style", "color:#184f68; font-weight: 500; font-size: 1.25em;");

// set each activities cost to value
main.value = 200;
frameworks.value = 100;
libs.value = 100;
express.value = 100;
node.value = 100;
tools.value = 100;
npm.value = 100;

// disable an activity which will be held on the same time as the checked event
// also calculating the cost when the event is checked
function activityRegister(){
  let totalCost = 0;
    if (main.checked) {
    totalCost += parseInt(main.value);
    }
    if (frameworks.checked){
    express.disabled = true;
    totalCost += parseInt(frameworks.value);
    } else {
    express.disabled = false;
    }
    if (libs.checked) {
    node.disabled = true;
    totalCost += parseInt(node.value);
    } else {
    node.disabled = false;
    }
    if (express.checked) {
    frameworks.disabled = true;
    totalCost += parseInt(express.value);
    } else {
    frameworks.disabled = false;
    }
    if (node.checked) {
    libs.disabled = true;
    totalCost += parseInt(node.value);
    } else {
    libs.disabled = false;
    }
    if (tools.checked) {
    totalCost += parseInt(tools.value);
    } else {
    }
    if (npm.checked) {
    totalCost += parseInt(npm.value);
    }
    price.innerHTML = 'Total: $' + totalCost;
    activities.appendChild(price);
    }
activities.addEventListener('change', activityRegister, false);

////// Payment Info section of the form /////
const payment = document.getElementById('payment');
const credit = document.getElementById('credit-card');
const paypal = document.querySelectorAll('fieldset div p')[0];
const bitcoin = document.querySelectorAll('fieldset div p')[1];

// show corresponded form depending on the payment method a user slected
function paymentMethod(){
  for (var i = 0; i < payment.length; i++) {
    if (payment.value === 'credit card'){
      credit.style.display = 'block';
      paypal.style.display = 'none';
      bitcoin.style.display = 'none';
    } else if (payment.value === 'paypal') {
      credit.style.display = 'none';
      paypal.style.display = 'block';
      bitcoin.style.display = 'none';
    } else if (payment.value === 'bitcoin') {
      credit.style.display = 'none';
      paypal.style.display = 'none';
      bitcoin.style.display = 'block';
    } else {
    credit.style.display = 'none';
    paypal.style.display = 'none';
    bitcoin.style.display = 'none';
  }
}
};
paymentMethod();
payment.addEventListener('change', paymentMethod, false);


///// Form Validation /////

const activitiesLegend = document.querySelectorAll('legend')[2];
const mail = document.getElementById('mail');
const ccNum = document.getElementById('cc-num');
const zip = document.getElementById('zip');
const cvv = document.getElementById('cvv');
const submit = document.querySelector('button');
const nameError = document.createElement('span');
const mailError = document.createElement('span');
const mailStyleError = document.createElement('span');
const actError = document.createElement('span');
const ccNumEmpty = document.createElement('span');
const zipEmpty = document.createElement('span');
const cvvEmpty = document.createElement('span');
const ccNumInvalid = document.createElement('span');
const zipInvalid = document.createElement('span');
const cvvInvalid = document.createElement('span');
const errorStyle = 'border: 1px solid #E50000; background: #ffc9c9';

// error messages
// name
nameError.textContent= 'Your name is required.';
nameError.style.color = '#E50000';
// no email address
mailError.textContent= 'Your email address is required.';
mailError.style.color = '#E50000';
// not valid email address
mailStyleError.textContent= 'Please enter a valid email address.';
mailStyleError.style.color = '#E50000';
// no activity is checked
actError.textContent= 'Please choose at least one activity.';
actError.style.color = '#E50000';
// no credit card number
ccNumEmpty.textContent= 'Your credit card number is requied';
ccNumEmpty.style.color = '#E50000';
// no zip code
zipEmpty.textContent= 'Your zip code is requied';
zipEmpty.style.color = '#E50000';
// no cvv
cvvEmpty.textContent= 'Your cvv is requied';
cvvEmpty.style.color = '#E50000';
// invalid credit card number
ccNumInvalid.textContent= 'Please enter a number that is between 13 and 16 digits long.';
ccNumInvalid.style.color = '#E50000';
// invalid zip code
zipInvalid.textContent= 'Please enter a 5-digit number';
zipInvalid.style.color = '#E50000';
// invalid cvv
cvvInvalid.textContent= 'Please enter a 3-digit number';
cvvInvalid.style.color = '#E50000';

// name validation: have to contain at least one letter
function nameVal() {
  if (name.value === '') {
    name.setAttribute("style", errorStyle);
    nameError.style.display = 'block';
    name.parentNode.insertBefore(nameError, name);
    // submit.disabled = true;
    return false;
  } else {
    name.removeAttribute("style", errorStyle);
    nameError.style.display = 'none';
    // submit.disabled = false;
    return true;
  }
};
// email validation: have to begin with alphabet or number + @ + alphabet or number
function mailVal(){
  if (mail.value == ''){
  mail.setAttribute("style", errorStyle);
  mailStyleError.style.display = 'none';
  mailError.style.display = 'block';
  mail.parentNode.insertBefore(mailError, mail);
  // submit.disabled = true;
  return false;
  } else if (!mail.value.match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)) {
  mail.setAttribute("style", errorStyle);
  mailStyleError.style.display = 'block';
  mailError.style.display = 'none';
  mail.parentNode.insertBefore(mailStyleError, mail);
  // submit.disabled = true;
  return false;
  } else {
  mail.removeAttribute("style", errorStyle);
  mailError.style.display = 'none';
  mailStyleError.style.display = 'none';
  // submit.disabled = false;
  return true;
  }
};

// activity validation: have to be checked at least one activity
function actVal(){
  if (main.checked ||  frameworks.checked || libs.checked || express.checked || node.checked || tools.checked || npm.checked){
  actError.style.display = 'none';
  return true;
} else {
  actError.style.display = 'block';
  activities.insertBefore(actError, activitiesLegend);
  return false;
}
};
// credit card number validation: have to be 13 - 16 disits
function ccNumVal(){
  if (payment.value === 'credit card' && ccNum.value == ''){
    ccNum.setAttribute("style", errorStyle);
    ccNumEmpty.style.display = 'block';
    ccNum.parentNode.insertBefore(ccNumEmpty, ccNum);
    ccNumInvalid.style.display = 'none';
    // submit.disabled = true;
    return false;
  } else if (payment.value === 'credit card' && !ccNum.value.match(/([0-9]{13,16})$/)) {
    ccNum.setAttribute("style", errorStyle);
    ccNumEmpty.style.display = 'none';
    ccNumInvalid.style.display = 'block';
    ccNum.parentNode.insertBefore(ccNumInvalid, ccNum);
    // submit.disabled = true;
    return false;
  }   else {
    ccNum.removeAttribute("style", errorStyle);
    ccNumEmpty.style.display = 'none';
    ccNumInvalid.style.display = 'none';
    // submit.disabled = false;
    return true;
  }
};

// zip code validation: have to be 5 disits
function zipVal(){
  if (payment.value === 'credit card' && zip.value == ''){
    zip.setAttribute("style", errorStyle);
    zipEmpty.style.display = 'block';
    zip.parentNode.insertBefore(zipEmpty, zip);
    zipInvalid.style.display = 'none';
    // submit.disabled = true;
    return false;
  } else if (payment.value === 'credit card' && !zip.value.match(/^([0-9]{5})$/)) {
    zip.setAttribute("style", errorStyle);
    zipEmpty.style.display = 'none';
    zipInvalid.style.display = 'block';
    zip.parentNode.insertBefore(zipInvalid, zip);
    // submit.disabled = true;
    return false;
  }   else {
    zip.removeAttribute("style", errorStyle);
    zipEmpty.style.display = 'none';
    zipInvalid.style.display = 'none';
    // submit.disabled = false;
    return true;
  }
};

// cvv validation: have to be 3 digits
function cvvVal(){
  if (payment.value === 'credit card' && cvv.value == ''){
    cvv.setAttribute("style", errorStyle);
    cvvEmpty.style.display = 'block';
    cvv.parentNode.insertBefore(cvvEmpty, cvv);
    cvvInvalid.style.display = 'none';
    // submit.disabled = true;
    return false;
  } else if (payment.value === 'credit card' && !cvv.value.match(/^([0-9]{3})$/)) {
    cvv.setAttribute("style", errorStyle);
    cvvEmpty.style.display = 'none';
    cvvInvalid.style.display = 'block';
    cvv.parentNode.insertBefore(cvvInvalid, cvv);
    // submit.disabled = false;
    return false;
  } else {
    cvv.removeAttribute("style", errorStyle);
    cvvEmpty.style.display = 'none';
    cvvInvalid.style.display = 'none';
    // submit.disabled = false;
    return true;
  }
};

// real time validation
name.addEventListener('blur', nameVal, false);
name.addEventListener('keyup', nameVal, false);
mail.addEventListener('blur', mailVal, false);
mail.addEventListener('keyup', mailVal, false);
ccNum.addEventListener('focus', ccNumVal, false);
ccNum.addEventListener('keyup', ccNumVal, false);
zip.addEventListener('focus', zipVal, false);
zip.addEventListener('keyup', zipVal, false);
cvv.addEventListener('focus', cvvVal, false);
cvv.addEventListener('keyup', cvvVal, false);

// validation on submit
submit.addEventListener('click',(e)=>{
  if (nameVal() && mailVal() && actVal() && ccNumVal() && zipVal() && cvvVal()) {
    nameVal();
    mailVal();
    actVal();
    ccNumVal();
    zipVal();
    cvvVal();
  } else {
    nameVal();
    mailVal();
    actVal();
    ccNumVal();
    zipVal();
    cvvVal();
    e.preventDefault();
  }
});
