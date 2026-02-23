//Assignment: Write a program to perform the following tasks:
/*1. Count the total number of words in the sentence.
2. Print the sentence words in reverse order.
3. Convert the first character of each word to uppercase and print original sentence*/


function stringActions(sentence:string)
{
    //Count the total number of words in the sentence.
    let noOfWordsCount=0;
    let wordsArray:number=sentence.split(" ").length
    console.log("The total no of words count in sentence is: "+`${wordsArray}`)


    // Print the sentence words in reverse order.
    let reverseSentence:string =sentence.split(" ").reverse().join(" ")
    console.log("The Resevered order of the sentence is: "+`${reverseSentence}`)

    //Convert the first character of each word to uppercase and print original sentence
    let upperStr:string=""
    let splitSentence:string[]=sentence.split(" ")
    splitSentence.forEach((x,index)=>
        {
           splitSentence[index]= x.charAt(0).toUpperCase()+x.slice(1)
        })
    upperStr=splitSentence.join(" ")
    console.log("The first character to upper case is: "+ `${upperStr}`) 

}

const sentence:string = "Java programming is fun and challenging";
stringActions(sentence)
