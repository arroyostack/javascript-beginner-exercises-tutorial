function fizzBuzz() {  
	// Your code here

	for (var i = 1; i < 101; i++) {
		if (i % 15 == 0) console.log('FizzBuzz');
		else if (i % 3 == 0) console.log('Fizz');
		else if (i % 5 == 0) console.log('Buzz');
		else console.log(i);
	}

	// another posible solution
	// for (let i = 0; i < 100;) console.log((++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i)

}

fizzBuzz();