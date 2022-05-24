/** @format */

// Developer Test

// Basic JavaScript (bonus for efficiency):

// Below are varriables to be used for the below questions
// Global Varriables

var departmentInfo = require("./json/departmentInfo.json")
var objectArray = require("./json/objectArray.json")
var people = require("./json/people.json")

var objectF = {
	value: "f",
	Id: 5,
}

// end Global Varriables

// 1. Write a function that adds two given numbers

const add = (num1, num2) => {
	// Validating inputs
	if (typeof num1 !== "number" || typeof num2 !== "number")
		return "Both input should be numbers"

	return num1 + num2
}

// console.log(add(2, 3))

// 2. Adding 'objectF' to an 'objectArray'

const updateObjectArray = (object) => {
	// Validating input
	if (typeof object !== "object") return "Input should be an object"

	objectArray[objectArray.length] = object
	return objectArray
}

// updateObjectArray(objectF)

// 3. Write a function that returns Id 3 from 'objectArray'

const getId = (objectArray) => {
	// Validate inputs
	if (typeof objectArray !== "object") return "Input should be an object"

	return objectArray.find((object) => object.Id === 3)
}
// getId(objectArray)

// 4. Write a function that merges 'people' with 'departmentInfo' based on department

const addFacultyToDepartment = (department, faculty) => {
	// Valid Input
	if (!Array.isArray(department) || !Array.isArray(faculty))
		return "Input should be an array"

	// Create map to record visited keys && values
	let departmentMap = new Map()

	for (let i = 0; i < department.length; i++) {
		const departmentObj = department[i]
		console.log(departmentObj)
		// Nested departmentInfo within values of "department" to reduce time complexity
		// create faculty array to insert people data
		departmentMap[departmentObj.department] = { ...departmentObj, faculty: [] }
	}

	for (let j = 0; j < people.length; j++) {
		const peopleObj = people[j]
		// Push people's file data within correct department
		departmentMap[peopleObj.department].faculty.push(peopleObj)
	}
}

addFacultyToDepartment(departmentInfo, people)
