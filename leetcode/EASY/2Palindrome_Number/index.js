/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let number = x.toString();
    let reversedNumber = number.split('').reverse().join('');
    return number === reversedNumber;
};

// OR

var isPalindromeWithoutString = function(x) {
    // Negative number are never palindrome
    if (x < 0) return false;

    // Last digit 0 (ex: 10, 100), except 0, cannot be palindrome
    if (x % 10 === 0 && x !== 0) return false;

    let reversed = 0;
    let original = x;

    while (x > 0) {
        let digit = x % 10;         // pick the last digit
        reversed = reversed * 10 + digit; // add it to the reversed number
        x = Math.floor(x / 10);     // remove the last digit from x
    }

    return original === reversed;
};


// Test the function with an example input
console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(-121)); // Output: false