// Single line JavaScript comment

/* 	
	Multi-line
	Javascript 
	Comment
*/
"use strict";
var person = {
	fName: 'Quincy',
	lName: 'Pham',
	email: 'quincytpham@gmail.com',
	getFullName: function() { return this.fName + ' ' + this.lName;}
};

//NEVER USE ALERT
//alert(person.getFullNames());
console.log('running the getFullName function on person object');
console.log(person.getFullName());

console.log('looping through all properties of therson object');
//show all properties of the person object
for (var prop in person) {
	console.log(person[prop]); // => value of current property
}

//create a new img element
var elem = document.createElement('img');
elem.src = 'img/dog.jpg';
elem.alt = 'picture of my awesome, amazing dog';

//add this element to the top of the body
document.body.insertBefore(elem, document.body.firstChild);
