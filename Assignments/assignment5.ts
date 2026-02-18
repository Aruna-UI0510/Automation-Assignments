
// storing Employee data

let employeeData:Map<string,number[]>=new Map()
employeeData.set("Alice Johnson", [75000, 5, 4.2]);
employeeData.set("Bob Smith", [68000, 3, 3.8]);
employeeData.set("Carol Davis", [82000, 7, 4.5]);
employeeData.set("David Brown", [90000, 10, 2.0]);
employeeData.set("Eva Green", [60000, 2, 3.5]);

// Stroing Hike data based on rating
let hikeData:Map<string,number[]>=new Map()
hikeData.set("Greater than 4",[15,15000])
hikeData.set("Between 3 and 4",[15,15000])
hikeData.set("Less than 3",[15,15000])

//
//Employees with Experience >= 5 Years get extra Reward of 5000;

/**There are 5 Employee records. Now Calculate the Hike percentage of each Employee and store the
Values in Map with EmployeeName and HikePercentagevalue and Print them.

Hike = ( Base Salary * variable pay % ) + Bonus + Reward ;
Hike % = Hike / Base Salary .*/
//Result Hikemapping for each employee
let hike:Map<string,number>=new Map()
for(let h of employeeData.keys())
{
   
    let data=employeeData.get(h)!
    let basicSalary=data[0]
    let yearOfExp=data[1]
    let rating=data[2]

    let hikepercent:number=calculateHike(basicSalary,yearOfExp,rating)
    hike.set(h,hikepercent)
}
console.log(hike.entries())

function calculateHike(basicSalary:number,yearOfExp:number,rating:number):number
{
    let hikeamt:number=0
    let hikepercent:number=0
 
        if(rating>=4)
        {
             hikeamt= (basicSalary*0.15)+1500
        }
        else if(rating>=3 && rating<4)
        {
             hikeamt= (basicSalary*0.1)+1200 
        }
        else
        {
          hikeamt= (basicSalary*0.03)+300

        }

        if(yearOfExp>5)
        {
         hikepercent=(hikeamt+5000)/basicSalary 
        }
        else
        {
          hikepercent=hikeamt/basicSalary 
        }
    
   
    
     return hikepercent 
}
    
