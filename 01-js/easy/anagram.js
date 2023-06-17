/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
    str1=str1.toLowerCase();
    str2=str2.toLowerCase();
    var count=new Array(500).fill(0);
    for(var i=0;i<str1.length;i++){
        count[150+ str1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    for(var i=0;i<str2.length;i++){
        count[150+str2.charCodeAt(i)-'a'.charCodeAt(0)]--;
    }
    for(var i=0;i<500;i++){
        if(count[i]!==0)
            return false;
    }
    return true;
}

module.exports = isAnagram;
