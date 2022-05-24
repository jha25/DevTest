/** @format */

// - Create interface for the workload json

interface workload {
	Nose: string
	Station: string
	BOW: Bow[]
	CheckType: string
}

interface Bow {
	Nose: string
	ATA: string
	BOWTYPE: string
	COMMENTIND: string
	Priority: string
	Carrier: string
	CRITUPGRADE: boolean
	Created: string
	EMPLOYEENUMBER: string
	FLEET: string
	IDENTIFY: string
	ID: number
	MEL: string
	MENUMBER: string
	Modified: string
	REF: string
	TASKDESCRIPTION: string
	TOTALHRS: number
	CRIT: number
	partsData: partsDatas[]
}

interface partsDatas {
	CPN: string
	Total: number
	Required: number
}

// - Create types

interface Types {
	key: number
	value: string
	bool: boolean
	count: Array<number>
}

let type1: Types = { key: 1, value: "Jason", bool: true, count: [1, 2, 3] }
let type2: Types = { key: 1, value: "John", bool: false, count: [1, 2] }
let type3: Types = { key: 1, value: "Ivan", bool: true, count: [2, 3] }

/*
// Boolean
let bool: boolean = false

// Numbers
let num: number = 4

// Text, string
let myName: string = "Jason"

// Template String
let greeting: string = `Hello, ${myName}`

// Arrays
let count: Array<number> = [1, 2, 3, 4]

// Any
let anything: any = 4
anything = "Some text"
anything = false

// Returning nothing
function greeter(name: string): void {
	console.log("Hello, " + name)
}

// Enum
let keyPad = 1
enum Directions {
	Up,
	Down,
	Left,
	Right,
}

if (keyPad === Directions.Left) {
	// Move left
}
*/

// - Create simple person class, that accepts the persons first name

class Person {
	firstName: string

	constructor(firstName: string) {
		this.firstName = firstName
	}
}

const jason = new Person("Jason")
console.log(jason)
// - Create a Mecahnic class that exstends the above person class and has a field 'title' set to 'AMT'

class Mechanic extends Person {
	title: string

	constructor(firstName: string, title: string) {
		super(firstName)
		this.title = title
	}
}

const position = new Mechanic("Bob", "AMT")
console.log(position)
// -
