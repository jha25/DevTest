/** @format */

const { of } = require("rxjs")
const { map, filter, tap } = require("rxjs/operators")

// - Pipe operators (map, tap, switchMap)

of([
	{
		id: 1,
		name: "Fabian",
	},
	{ id: 2, name: "Jan-Niklas" },
])
	.pipe(tap((item) => (item.name = item.name + "_2")))
	.subscribe((x) => console.log(x))

// - what will be logged to the console

of("Hello")
	.pipe(
		map((x) => `${x} World`),
		map((x) => `${x} of`),
		map((x) => `${x} RxJS`),
	)
	.subscribe((x) => {
		console.log(x)
	})

// Log: "Hello World of RxJS" as it is implementing the previous string into the template string

// - What will be logged to the console
of(1, 2, 3)
	.pipe(
		map((x) => x + 1),
		filter((x) => x > 2),
	)
	.subscribe((x) => {
		console.log(x)
	})

// each element is incremented by 1 and then the elements that are greater than 2 are kept. Log: 3 and 4

// - Subscription sequence
