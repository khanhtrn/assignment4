//Practice with JavaScript OOP Concepts (10 points)
/*Within a new web page, create the following applications. Remember to comment out every application once you’ve finished with that step. Be sure to place all of your JavaScript code within an external script file:*/
/*1.	Create a namespace called Animal. Then, define two sub namespaces, one called Cat and another called Dog.*/
//var ANIMAL = ANIMAL {};
//ANIMAL.Dog = function();
//ANIMAL.Cat = function();
/*2.	Abandon the use of namespaces and start over. Now, create two classes, one called Cat and another called Dog. The Cat class should be created using literal syntax and the Dog class should be created using the constructor syntax.*/
//function Cat() {};
//var Dog = function(){};
/*3.	Create a new instance of Cat class. Directly underneath, create a new instance of the Dog class.*/
//var cat = new cat();
//var dog = new dog();
/*4.	Start over and now create a new class using literal syntax called Animal. When a new instance of the Animal class is created, the message “The Animal has been created” should be displayed in the console window. */
//var Animal = function()  {
//    this.message = "This Animal has been created";
//};
//var myAnimal = new Animal();
//console.log(myAnimal.message);
/*5.	Now, change the above code so that is mimics a true constructor. The class should accept an argument and that value is what should be displayed in the console window. The message should be passed into the constructor at the moment that the Animal class is instantiated.*/
//var Animal = function(message) {
//    this.message = message;
//    return message;
//};
//var myMessage = new Animal("The Animal might have been created by accident");
//console.log(myMessage.message);
/*6.	Start over and now create a new class using constructor notation called Animal. Define five properties within your class including type, breed, color, height, and length. These properties will be set in the constructor so you’ll need to pass in parameters into the function’s constructor, set the properties, and then pass in the actual arguments during the object’s instantiation.  */
//function Animal(type, breed, color, height, length) {
//    this.type = init_type;
//    this.breed = init_breed;
//    this.color = init_color;
//    this.height = init_height;
//    this.length = init_length;
//    return ("You have a " + this.color + " " + this.breed + " " + this.type + " that is " + this.height + " tall and is " + this.length + " long.")
//};
//console.log(Animal("dog", "labrador", "black", "20ft", "40ft"));
/*7.	Use a for-in loop to loop through and display all of the properties in the Animal class. You should see a total of 5 properties displayed in a list within the console window.*/
//var Animal = function(init_type, init_breed, init_color, init_height, init_length) {
//    this.type = init_type;
//    this.breed = init_breed;
//    this.color = init_color;
//    this.height = init_height;
//    this.length = init_length;
//}
//var dog = new Animal("dog", "labrador", "black", "20ft", "40ft");
//for (var property in dog) {
//console.log(property + " : " + dog[property]);}
/*8.	Now, create a public method called speak. Within the speak method you will use a conditional to check the type of Animal being created. If it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The <color> cat is meowing!” instead. Call that method after the Animal class has been instantiated.*/
//var Animal = function(init_type, init_breed, init_color, init_height, init_length) {
//	this.type = init_type;
//	this.breed = init_breed;
//	this.color = init_color;
//	this.height = init_height;
//	this.length = init_length;
//}
//Animal.prototype.speak = function() {
//	if (this.type.toLowerCase() == "dog") {
//        return "The " + this.color.toLowerCase() + " dog is barking!";
//} else {
//		return "The " + this.color.toLowerCase() + " cat is meowing!";
//}}
//var dog = new Animal("dog", "labrador", "black", "20ft", "40ft");
//console.log(dog.speak());
/*9.	Now, convert all of your properties to private properties. Then, create a private method called checkType(). In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. Then, create a public method called speak that returns the value of the checkType() method. The console window should now display “The <animal type> has made a noise!”*/
//var Animal = function(init_type, init_breed, init_color, init_height, init_length) {
//    var type = init_type;
//	var breed = init_breed;
//	var color = init_color;
//	var height = init_height;
//	var length = init_length;
//	var checkType = function() {
//if (type.toLowerCase() == "dog") {
//        return "dog";
//} else {
//        return "cat";
//}}
//    this.speak = function() {
//        return checkType();
//}}
//var animal = new Animal("dog", "labrador", "black", "20ft", "40ft");
//console.log("The " + animal.speak() + " has made a noise!");
/*10.	Create your own String method called findWords that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of time that word was found in the paragraph.*/
//String.prototype.findWords = function(word) {
//			var paragraph = [];
//			var total = 0;
//			paragraph = this.split(" ");
//			for (var wordObject = 0; wordObject < paragraph.length; wordObject++) {
//            if (paragraph[wordObject].toLowerCase() == word.toLowerCase()) {
//				total += 1;
//}}
//			return total;
//}
//var message = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
//console.log(message.findWords("lorem"));
//Does My Vehicle Need An Oil Change? (10 points)
/*In this lab you will be build an application that determines whether or not your vehicle needs an oil change. If it does, it should alert the user of the fact within the console window. To complete this application, follow the steps outlined below:*/
//var Vehicle = function(init_make, init_model, init_total_miles, init_last_oil_change) {
//    this.make = init_make;
//    this.model = init_model;
//	this.totalMiles = init_total_miles;
//    this.drivenMiles = 0;
//	this.type = "";
//    this.lastOilChange = init_last_oil_change;
//}
//Vehicle.prototype.drive = function(miles) {
//    this.drivenMiles += miles;
//    return this;
//}
//Vehicle.prototype.checkOil = function() {
//    if (this.totalMiles - this.lastOilChange + this.drivenMiles >= 3000) {
//        return "You need an oil change!";
//    } else {
//		return this;
//	}
//}
//var Car = function(door_count) {
//	this.doorCount = door_count;
//    if (this.door_count > 2) {
//        this.type = "Sedan";
//    } else {
//        this.type = "Coupe";
//    }
//}
//Car.prototype = new Vehicle("Toyota", "Corolla", 9000, 8000);
//var myCar = new Car(4);
//console.log(myCar.drive(987).checkOil());
/*Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings). Your object should have a publically available method that when called, will log out the recipe within the console so that the recipe information looks like this:*/
//var recipe = {
//    "title": "Guacamole",
//    "servings": 4,
//    "ingredients": ["3 Avocados", "1 Lime", "1 Teaspoon Salt", "1/2 Cup Onion", "3 Tablespoons Cilantro", "2 Diced Tomatoes", "1 Teaspoon Garlic"]
//};
//console.log(recipe.title);
//console.log("Serves: " + recipe.servings);
//console.log("Ingredients:");
//for (var i = 0; i < recipe.ingredients.length; i++) {
//    console.log(recipe.ingredients[i]);
//}
/*Keep track of which books you read and which books you want to read! Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet). Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien". Then, use a conditional to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.' Make sure your object contains at least 5 books.*/
//var books = [
//    {title: 'Ice Station',
//   author: 'Matthew Reilly',
//   alreadyRead: true
//  },
//    {title: 'Temple',
//   author: 'Matthew Reilly',
//   alreadyRead: true
//  },
//    {title: 'Amazonia',
//   author: 'James Rollins',
//   alreadyRead: true
//  },
//    {title: 'Act of Teason',
//   author: 'Vince Flynn',
//   alreadyRead: false
//  },
//    {title: 'The Last Patriot',
//  author: 'Brad Thor',
//  alreadyRead: false
//  }];
//for (var i = 0; i < books.length; i++) {
//  var book = books[i];
//  var bookInfo = book.title + '" by ' + book.author;
//  if (book.alreadyRead) {
//    console.log('You already read "' + bookInfo);
//  } else {
//    console.log('You still need to read "' + bookInfo);
//  }
//}
/*Fill in the Blanks (10 points)
Fill in the blanks to make this program work.*/
//(function () {
//    var person = {
//        buy: function() { console.log("I'm rich"); }
//    };
//    var  car = {
//        drive: function() { console.log("Vroom Vroom"); },
//        price: 500000
//    };
//    car.drive();
//    if ( car.price > 100000 ) {
//        person.buy(car);
//    }
//}());




