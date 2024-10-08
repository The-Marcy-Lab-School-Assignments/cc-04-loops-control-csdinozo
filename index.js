//Write your solutions in this file, don't forget to test your functions.

const countFromOne = n => {
	for (let n = 1; n <= val; n++) console.log(n);
}

const countEveryOdd = val => {
	for (let n = 1; n <= val; n++) if (n % 2 != 0) console.log(n);
}

const isNegative = n => {
	if (n < 0) return true;
	else if (n > 0) return false;
	// zero is neither positive nor negative
	return null;
}

const betweenFiveAndTwenty = n => {
	if (n >= 5 && n <= 20) return true;
	return false;
}

const sumOfThreeOrFive = () => {
	let sum = 0;

	for (let i = 0; i <= 1000; i++) {
		if (i % 3 == 0) {
			if (i % 5 != 0) sum += i;
		}
		else if (i % 5 == 0) sum += i;
	}

	return sum;
}

