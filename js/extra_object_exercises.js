"use strict";
//
// ================================= OBJECTS MINI EXERCISES AND BONUSES (better done with a partner!)
//
// Mini Exercise 1
//
// Create a few beverage objects and assign values to each object for the following properties:
//
//     - brandName
//     - type
//     - volumeInLiters
//     - priceInCents
//     - expirationDate
//     - dateTimesOfLastSips
//     - isOpen
//

var beverages = [

    {
     brandName: "Dr. Pepper",
     type: "Soda",
     volumeInLiters: "2",
     priceInCents: "1.67",
     expirationDate: "4/20/20",
     dateTimesOfLastSips: "4/12/19 3:09pm",
     isOpen: "Yes"
    },
    {
        brandName: "Bill Millers",
        type: "Sweet Tea",
        volumeInLiters: "2",
        priceInCents: ".99",
        expirationDate: "4/12/19",
        dateTimesOfLastSips: "",
        isOpen: "No"
    },
    {
        brandName: "Topo Chico",
        type: "Mineral Water",
        volumeInLiters: "2",
        priceInCents: "3.99",
        expirationDate: "4/20/22",
        dateTimesOfLastSips: {
            dateOfLastSip: "4/12/19",
            timeOfLastSip: "10:09am"
        },
        isOpen: "Yes"
    }
];

beverages.brandName = "La Croix";
beverages.type = "Flavored carbonated water";




// Define your objects using both literal syntax to create all properties and values at once and also try
// defining empty objects and assign property values in separate statements.
//
//
//     Mini Exercise 2
//
var users = [
    {
        name: "Sam",
        age: 21
    },
    {
        name: "Cathy",
        age: 34
    },
    {
        name: "Karen",
        age: 43
    }
];
//
// 1. Log the names of all users in a single console log seperated by spaces.
// 2. Change the names of all users to "John Doe"
// 3. Increase the current age of all users by 1
//
// Can you accomplish each step using iteration?

console.log(users[0].name + " " + users[1].name + " " + users[2].name);

users.name = "John Doe";
console.log(users.name);

// users.age = Number(users.age + 1);
// console.log(users[0].age + " " + users[1].age + ' ' + users[2].age);


users.forEach(function(user) {
    var output = 0;
    output += (user.age + 1);
    console.log(output);
});


//
//
//     Mini Exercise 3
//
// Create a dog object...
//
//     The dog object should have properties for:
// breed (string),
//     weightInPounds (number),
//     age (number),
//     color (string),
//     sterilized (boolean),
//     shotRecords (array of objects with properties for date and typeOfShot)
//
// The dog object should have methods to:
//     bark() - will console.log "Woof!"
// getOlder() - will increase age by 1
// fix() - will set sterile to true if dog sterilized property is false
// vaccinate() - takes in an argument for the name of the shot and adds a new shot with the current date to the shotRecords array
//
//

var dogs = [
    {
        breed: "dachshund",
        weightInPoints: 9,
        age: 5,
        color: "black and tan",
        sterilized: false,
        shotRecords:{
            date: "1/2015",
            typeOfShot: "rabies"
        }
    }
];

dogs.bark = function() {
    console.log("Woof!");
};

dogs.bark();

dogs.forEach(function(dog) {
    var output = 0;
    output += (dog.age + 1);
    console.log(output);
});

dogs.fix = function(dog) {
    if (dog.sterilized === false) {
        return console.log(true);
    }
};

dogs.fix();




// BONUS 1 (expanding on the books object exercise):
//
// Add a property "keywords" that contains an array of possible genres the book may be categorized by
// Add a boolean property "isAvailable" and set it to true
// Add a dateAvailable property that has a string of the date/time when the book will be available
// Add a method lend() that...
// - changes the available property to false if it is not already false
// - sets the dateAvailable to a date exactly two weeks from when the lend() method is called
// (to do this, research the JS Date object and use methods from it in your code)
// Add a method receive() that...
// - changes the available property to true
// - changes the dateAvailable property to the string "now"
//
//
// BONUS 2 (expanding on the books object exercise):
//
// Create an application to take in user input to build the books array of objects.
//     Allow the user to continue adding books or to finish adding books.
//     Once the books have been added, output the books array in the console.
//
//     Allow a user to delete a book or a group of books by title or author last name
//
// Allow a user to edit a book by index number in the books array
