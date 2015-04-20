var i = 0;

$(document).ready(function(){
	$("#btn").on("click", function(){
		i++;
		var age = randomNumber(1,100);
		var sex = randomNumber(1,2);
		var weight = randomNumber(1,600);


		var anotherPerson = new Person(age, sex, weight);
		$("#people").prepend("<li>"+ anotherPerson.age  + ", " + anotherPerson.sex + ", " + anotherPerson.weight + "</li>");


	});

});




function Person(age, sex, weight) {
	this.age = age;
	this.sex = sex;
	if (this.sex == 1) {
		return "male";
	} else {
		return "female";
	}
	this.weight = weight;
}; 


//Utility function
//A simple random number generator
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

/*function sex() {
	if (randomNumber(1,2) == 1 {
		return "male";
} else {
	return "female";
}*/