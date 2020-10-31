function isPalindrome(x: number): boolean {
    if (x < 0) {
        return false;
    }
    const strX = x.toString(10);
    const xLength = strX.length;
    let revertStr = '';
    for (let i = xLength - 1; i >= 0; i -= 1) {
        revertStr += strX[i]
    }
    return revertStr === strX;
}


function isPalindromeSecond(x: number): boolean {
    if (x < 0) {
        return false;
    }
    const strX = x.toString(10);
    const xLength = strX.length;
    for (let i = 0, j = xLength - 1; i < j; i += 1, j -= 1) {
        if (strX[i] !== strX[j]) {
            return false;
        }
    }
    return true;
}



console.assert(isPalindrome(100) === false);
console.assert(isPalindrome(121) === true);
console.assert(isPalindrome(1441) === true);
console.assert(isPalindrome(-121) === false);
