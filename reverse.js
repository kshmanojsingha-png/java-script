function reverseNumber(number) {
    let sum = 0;

    while (number > 0) {
        let remainder = number % 10;
        sum = sum * 10 + remainder;
        number = Math.floor(number / 10);
    }
    return sum;
}
console.log(reverseNumber(123));