//Write your solutions in this file, don't forget to test your functions.

// p1
const countFromOne = val => {
	for (let n = 1; n <= val; n++) console.log(n);
}
// countFromOne(10);

// p2
const countEveryOdd = val => {
	for (let n = 1; n <= val; n++) if (n % 2 != 0) console.log(n);
}
// countEveryOdd(10);

// p3
const isNegative = n => {
	return n < 0; // assume false when n === 0 since zero is not negative
}
// console.log(isNegative(1));
// console.log(isNegative(-1));

// p4
const betweenFiveAndTwenty = n => {
	return n >= 5 && n <= 20;
}
// console.log(betweenFiveAndTwenty(100));
// console.log(betweenFiveAndTwenty(15));

// p5
const sumOfThreeOrFive = () => {
	let sum = 0;

	for (let i = 1; i < 1000; i++) {
		if (i % 3 == 0 || i % 5 == 0) {
			sum += i;
		}
	}

	return sum;
}
// console.log(sumOfThreeOrFive());

// p6
const isAllLowerCase = s => {
	for (let i = 0; i < s.length; i++) if (s[i].toUpperCase() === s[i]) return false;
	return true;
}
// console.log(isAllLowerCase('hEllo'));
// console.log(isAllLowerCase('hello'));

// b1
const countMultiplesOfFive = a => {
	let n = 0;
	for (i = 0; i < a.length; i++) if (a[i] % 5 == 0) n++;
	return n;
}
// console.log(countMultiplesOfFive([5,10,12]));

