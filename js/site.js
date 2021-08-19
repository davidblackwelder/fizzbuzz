// get the values from the Page
// starts/controller function
function getValues() {
	// get values from the page
	let fizzValue = document.getElementById("fizzValue").value;
	let buzzValue = document.getElementById("buzzValue").value;

	// validate the input
	// parse into Integers
	fizzValue = parseInt(fizzValue);
	buzzValue = parseInt(buzzValue);

	if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
		// call generateData
		let fizzBuzzArray = generateData(fizzValue, buzzValue);
		// call displayData
		displayData(fizzBuzzArray);
	} else {
		alert("You must enter integers.");
	}
}

// generate data for fizzbuzz
// logic function(s)
function generateData(fizzValue, buzzValue) {
	let returnArray = [];

	// loop from 1 to 100
	for (let i = 1; i <= 100; i++) {
		// check to see if divisible by both (3 and 5)
		// check to see if divisible by fizzValue (3)
		// check to see if divisible by buzzValue (5)
		if (i % fizzValue === 0 && i % buzzValue === 0) {
			returnArray.push("FizzBuzz");
		} else if (i % fizzValue === 0) {
			returnArray.push("Fizz");
		} else if (i % buzzValue === 0) {
			returnArray.push("Buzz");
		} else {
			returnArray.push(i);
		}
	}
	return returnArray;
}

// loop over the array and create a tablerow for each item
// display/view function
function displayData(fizzBuzzArray) {
	// get the table body element from the page
	let tableBody = document.getElementById("results");

	// get the template row
	let templateRow = document.getElementById("fbTemplate");

	// clear table first
	tableBody.innerHTML = "";

	for (let index = 0; index < fizzBuzzArray.length; index += 5) {
		let tableRow = document.importNode(templateRow.content, true);

		let rowCols = tableRow.querySelectorAll("td");

		// add class based on value from Array
		// insert Array value into the table
		rowCols[0].classList.add(fizzBuzzArray[index]);
		rowCols[0].textContent = fizzBuzzArray[index];

		rowCols[1].classList.add(fizzBuzzArray[index + 1]);
		rowCols[1].textContent = fizzBuzzArray[index + 1];

		rowCols[2].classList.add(fizzBuzzArray[index + 2]);
		rowCols[2].textContent = fizzBuzzArray[index + 2];

		rowCols[3].classList.add(fizzBuzzArray[index + 3]);
		rowCols[3].textContent = fizzBuzzArray[index + 3];

		rowCols[4].classList.add(fizzBuzzArray[index + 4]);
		rowCols[4].textContent = fizzBuzzArray[index + 4];

		// add content from template into the table
		tableBody.appendChild(tableRow);
	}
}
