/*String paragraph = "Java is a popular programming language. Java is used for web
development, mobile applications, and more.";
Assignment: Write a program to print * in triangle pattern
1. If I will pass int rows = 5 then it should print triangle with 5 Rows
     *
    **
   ***
  ****
 *****
*/
function printPattern(n:number)
{
    
    for(let i=1;i<=n;i++)
    {
        let row:string="" // re-intinalize the row as empty as it start the next next iteration 
        for(let spaces=1;spaces<=n-i;spaces++) // to add spaces in row
        {
           row+=" "
        }
        for(let stars=1;stars<=i;stars++) // to add * in row
        {
            row+="*"
        }
        console.log(row) // to print the entire row of spaces and * 
    }

}


let n:number =5
printPattern(n)


