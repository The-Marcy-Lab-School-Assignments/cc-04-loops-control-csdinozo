//Write your solutions in this file, don't forget to test your functions.

// p1
const countFromOne = n => {
	for (let n = 1; n <= val; n++) console.log(n);
}

// p2
const countEveryOdd = val => {
	for (let n = 1; n <= val; n++) if (n % 2 != 0) console.log(n);
}

// p3
const isNegative = n => {
	return n < 0; // assume false when n === 0 since zero is not negative
}

// p4
const betweenFiveAndTwenty = n => {
	if (n >= 5 && n <= 20) return true;
	return false;
}

// p5
const sumOfThreeOrFive = () => {
	let sum = 0;

	for (let i = 0; i < 1000; i++) {
		if (i % 3 == 0 || i % 5 == 0) {
			sum += i;
		}
	}

	return sum;
}

// p6
const isAllLowerCase = s => {
	for (let i = 0; i < str.length; i++) if (s[i].toUpperCase() === s[i].toUpperCase()) return false;
	return true;
}

// b1
const countMultiplesOfFive = a => {
	let n = 0;
	for (i = 0; i < a.length; i++) if (a[i] % 5 == 0) n++;
	return n;
}

