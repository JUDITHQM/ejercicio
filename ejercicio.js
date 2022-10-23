 
function isPalindrome (s) {
    let str1= s.split(' ').join('').replace(/[^\w\s]/gi, '')
    str1 = str1.toLowerCase();
    console.log(str1)
    let str2 = str1.split('').reverse().join('');
    console.log(str2)
    return  str1 == str2 ? true : false;
   }
   
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));   
console.log(isPalindrome(" "));