/*Assignment: Write a program to search for all occurrences of a “Java” word in the paragraph and print their
indexes.
1. Find total number of occurrences
2. Print count and Indexes of the word

String paragraph = "Java is a popular programming language. Java is used for web
development, mobile applications, and more.";*/

function SearchActions(paragraph:string)
{
    //1. Find total number of occurrences
    let wordOccurances=paragraph.split(" ")
    let countOfJava:number=0
    let index:number=0
    for(let w of wordOccurances)
    {
        
        if(w.toUpperCase().includes("JAVA"))
        {
            console.log("The Index of the each occurances of word JAVA "+ index)
            countOfJava++
        }
        index++

    }
    console.log("Total number of occurrences"+ countOfJava)

}

const paragraph: string= "Java is a popular programming language. Java is used for web development, mobile applications, and more.";
SearchActions(paragraph)

