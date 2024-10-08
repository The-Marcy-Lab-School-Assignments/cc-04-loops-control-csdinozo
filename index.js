//Write your solutions in this file, don't forget to test your functions.

const countFromOne = (n) => {
	for (let n = 1; n <= val; n++) console.log(n);
}

const countEveryOdd = (val) => {
	for (let n = 1; n <= val; n++) if (n % 2 != 0) console.log(n);
}

const isNegative = (n) => {
	if (n < 0) return true;
	else if (n > 0) return false;
	// zero is neither positive nor negative
	return null;
}

const betweenFiveAndTwenty = (n) => {
	if (n >= 5 && n <= 20) return true;
	return false;
}
