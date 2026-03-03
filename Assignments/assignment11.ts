/*Print the numbers in diamond-shaped pyramid of numbers.
Pattern should be as below.

    1
   1 2
  1 2 3
 1 2 3 4
1 2 3 4 5
 1 2 3 4
  1 2 3
   1 2
    1
*/
function pattern(n:number)
{
let row:number=n*2-1
for(let i=1;i>=row;i++)
{
   for(let s=1;s=n-i;s++)
   {
       console.log()
   }

}
}


let num:number=5
pattern(num)


