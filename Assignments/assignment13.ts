/*Assignment (String Operations)
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all
non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include
letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.*/


function reversesentence(input:string)
{

    let extractedstring:string=input.toLowerCase().replace(/[^0-9a-z]/g,"")
    let reversestring:string=""
    for(let i=extractedstring.length-1;i>=0;i--)
    {

      reversestring+=extractedstring.charAt(i)
    }
    if(extractedstring===reversestring)
        console.log("Given Input is a Palindrome: "+`${reversestring}`)
    else
        console.log("Given Input is not a Palindrome: "+`${reversestring}`)
    


}

let input:string = "A man, a plan, a canal: Panama"
let input1:string="race a car"
reversesentence(input)
reversesentence(input1)


