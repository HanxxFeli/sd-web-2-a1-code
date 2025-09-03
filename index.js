"use strict";

// sample data - expanded Star Wars characters with varied ages
const users = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];

// broken test data for exercise 6

// 1. Print out the names of each character in the console, then render them in the HTML list with id "names-list"
  // get the target element 
const namesList = document.getElementById("names-list")

  // log each of the character names in the console and in the html list
users.forEach(character => {
  namesList.innerHTML += `<li>${character.name}</li>`
  console.log(character.name);
});


// 2. Print out the names of characters whose age is less than 40 in the console, then render them in the HTML list with id "young-characters-list"
  // get the young char list element 
const youngCharList = document.getElementById("young-characters-list")

  // get each char with the age less than 40 then add to the html
users.forEach(character => { 
  if (character.age < 40) { 
    if (character.name === "") { 
      console.error("Character does not have a name"); // log console error if char name doesnt exist
    } else
      youngCharList.innerHTML += `<li>${character.name}</li>`
      console.log(character.name);
  }
})

// 3. Create a reusable function that takes any array and uses logic to render a list of character names in the HTML. Use this function to populate the list with id "function-list"
  // get the function list element 
const funcList = document.getElementById("function-list")

  // create the function for logging char names in the array and adding to the HTML 
let printCharNames = (array) => { 
  array.forEach(character => { 
      funcList.innerHTML += `<li>${character.name}</li>`
      console.log(character.name);
  })
};

printCharNames(users); // call the function for checking console.log of char names

// 4. Create a function that takes an array and an age threshold parameter. The function should only display characters whose age is below the given number. Render results in the list with id "age-filter-list"
  // get the age filter list 
const ageFilterList = document.getElementById("age-filter-list")

  // create the function for filtering the age and getting the age based on the array provided
let filterCharByAge = (array, age) => { 
  array.forEach(character => { 
    if (character.age < age) { 
      if (character.name === "") { 
        errorMessages.innerHTML += `<li>Character with age ${character.age} does not have a name</li>`
      } else
      ageFilterList.innerHTML += `<li>${character.name}</li>`
      console.log(character.name); 
    }
  })
};

filterCharByAge(users, 40); // call the function for checking age validation for char under 40

// 5. Add error handling to your functions that will log an error message using console.error() if any object doesn't have a "name" property. Display any error messages in the div with id "error-messages"
  // get the errorhandling list and messages elements
const errorHandlingList = document.getElementById("error-handling-list")
const errorMessages = document.getElementById("error-messages")

  // name function with errorHandling
let printErrorHandledCharNames = (array) => { 
  array.forEach(character => { 
    if (character.name === "") { 
      errorMessages.innerHTML += `<li>Character with age ${character.age} does not have a name</li>`
      console.error("Character does not have a name"); // log console error if char name doesnt exist
    } else 
      errorHandlingList.innerHTML += `<li>${character.name}</li>`
      console.log(character.name);
  })
};

 printErrorHandledCharNames(users); // call the function for error handling function

// 6. Test your error handling by creating a second array that's intentionally broken (missing name properties) and passing it to your functions. Verify that your error handling works correctly and displays errors in the div with id "broken-array-errors"

// test array 
const testUserArray = [
  {id: 11, name: "", age: 27},
  {id: 12, name: "", age: 28},
  {id: 13, name: "", age: 100},
]

// testing the error handling of the function 
// printCharNames(testUserArray);