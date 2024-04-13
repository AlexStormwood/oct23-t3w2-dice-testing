const { rollDice } = require("../src/diceRolling");

beforeEach(() => {
	// before each individual test runs,
	// so this block can run multiple times per file

	console.log("A test has been started!");
});

afterEach(() => {
	// after each individual test, so this block could run multiple times per file

	console.log("A test has finished!");
});

beforeAll(() => {
	console.log("Testing will begin!");

	// get JWT from API
	// store the JWT for all tests to use 

	// connection successful, make sure API is active & ready
	// connection successful, make sure database is available and running

	// setting up mocks of APIs or databases to make sure tests
	// are not using real-world resources
});

afterAll(() => {
	console.log("All tests are now done!");
});

describe('As a casual gamer...', () => { 
	
	// As a blah blah, I want to blah blah, because of blah blah.
	test('...I want to roll a 6-sided dice...', () => { 

		let result = rollDice();

		expect(result).toBeGreaterThan(0);
		expect(result).toBeLessThanOrEqual(6);

	});

});


describe('As a dungeon master...', () => { 
	
	describe('...I want to roll a variety of dice sizes, such as ...', () => { 
	

		let diceVarieties = [
			{
				diceSize: 4,
				diceName: "D4"
			},
			{
				diceSize: 6,
				diceName: "D6"
			},
			{
				diceSize: 8,
				diceName: "D8"
			},
			{
				diceSize: 10,
				diceName: "D10"
			},
			{
				diceSize: 12,
				diceName: "D12"
			},
			{
				diceSize: 20,
				diceName: "D20"
			},
			{
				diceSize: 100,
				diceName: "D100"
			},
		];

		test.each(diceVarieties)("$diceName", (diceObject) => {
			let diceResult = rollDice(diceObject.diceSize);
			expect(diceResult).toBeGreaterThan(0);
			expect(diceResult).toBeLessThanOrEqual(diceObject.diceSize);
		});





		// test('D6', () => { 
		// 	let result = rollDice();

		// 	expect(result).toBeGreaterThan(0);
		// 	expect(result).toBeLessThanOrEqual(6);
		// });

		// test('D8', () => { 
		// 	let result = rollDice(8);

		// 	expect(result).toBeGreaterThan(0);
		// 	expect(result).toBeLessThanOrEqual(8);
		// });

		// test('D10', () => { 
		// 	let result = rollDice(10);

		// 	expect(result).toBeGreaterThan(0);
		// 	expect(result).toBeLessThanOrEqual(10);
		// });

		// test('D12', () => { 
		// 	let result = rollDice(12);

		// 	expect(result).toBeGreaterThan(0);
		// 	expect(result).toBeLessThanOrEqual(12);
		// });

		// test('D20', () => { 
		// 	let result = rollDice(20);

		// 	expect(result).toBeGreaterThan(0);
		// 	expect(result).toBeLessThanOrEqual(20);
		// });
	});


	test("...roll with disadvantage", () => {
		let rollDiceWithDisadvantage = jest.fn().mockReturnValue({
			finalResult: 1,
			rolls: [1, 20]
		});

		let rollResult = rollDiceWithDisadvantage(20);

		expect(rollResult.finalResult).toBe(1);
	
	});


	test.skip("...roll with advantage", () => {
		var rollResult = null;

		expect(rollResult.finalResult).toBe(20);
	});


	test("...I want to see how many natural 20s I get in a session where I roll 1000 D20s", () => {

		let diceResults = [];

		for(let index = 0; index < 1000; index++){
			diceResults.push(rollDice(20));
		}

		console.log(diceResults);
		console.log(diceResults.length);

		let arrayOfNatural20s = diceResults.filter((result) => result == 20);
		console.log("Number of natural 20s is: " + arrayOfNatural20s.length);
		


		expect(diceResults.length).toBe(1000);
		expect(diceResults).toContain(20);

	});

});



test('Top level test is here', () => { 
	console.log("Hello world");

});