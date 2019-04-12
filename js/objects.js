(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person =
        {
        firstName: "Nadia",
        lastName: "Botello"
        };

    console.log(person.firstName);
    console.log(person.lastName);



    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */


    person.hello = function() {
        alert("Hello from " + person.firstName + " " + person.lastName);
    };

    person.hello();



    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    console.log(shoppers[0].name + "'s total before discount is " + shoppers[0].amount + ".");
    console.log(shoppers[1].name + "'s total before discount is " + shoppers[1].amount + ".");
    console.log(shoppers[2].name + "'s total before discount is " + shoppers[2].amount + ".");


    shoppers.forEach(function(shoppers, i) {
        for (i = 0; i < shoppers.length; i++);

        var total;
        var disc;

        if (shoppers.amount > 200) {
            disc = shoppers.amount * .12;
            total = shoppers.amount - disc;

            console.log(shoppers.name + " has a discount of $" + disc + ".");
            console.log(shoppers.name + " has a final total of $" + total + " after discount.");

        } else if (shoppers.amount < 200) {

            console.log(shoppers.name + " is not eligible to use this discount.");
        }

        console.log(" - - - - - ");
    });

    // function calculateDiscount(total) {
    //     var output = 0;
    //     if (total > 200) {
    //         output = total * .12;
    //     }
    //     return output;
    // }
    //
    // function displayShopperInfo(shopper) {
    //     var output = "";
    //     output += shoppers.name + " spent $" + shopper.amount.toFixed(2);
    //     output += " and received a discount of $" + calculateDiscount(shopper.amount).toFixed(2) + ".";
    //     output += " and paid $" + (shopper.amount - calculateDiscount(shopper.amount)).toFixed(2) + ".";
    //     return output;
    // }

        // function displayShoppersInfo(shoppers) {
        //     shoppers.forEach(function(shopper) {
        //         console.log(displayShoppersInfo(shopper));
        //     });
        // }
        //
        // displayShoppersInfo(shoppers);




    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books =
        [
            {
            title: "Figuring",
            author:{
                firstName: "Maria",
                lastName: "Popova"
                }
            },
            {
            title: "Weapons of Math Destruction",
            author:{
                firstName: "Cathy",
                lastName: "Oneil"
                }
            },
            {
                title: "The Age of Surveillance Capitalism",
                author:{
                    firstName: "Shoshana",
                    lastName: "Zuboff"
                }
            },
            {
                title: "Broad Band: The Untold Story of the Women Who Made the Internet",
                author:{
                    firstName: "Claire",
                    lastName: "Evans"
                }
            },
            {
                title: "Nicomachean Ethics",
                author:{
                    firstName: "Aristotle",
                    lastName: " "
                }
            }

    ];

    console.log(books[0].title);
    console.log(books[0].author.firstName);
    console.log(books[0].author.lastName);




    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */


    books.forEach(function(book, i) {
        console.log("Book " + i + " is " + book.title);
        console.log("The author's name is: " + book.author.firstName + " " + book.author.lastName);
        console.log(" ----------- ");
    });





    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */





})();
