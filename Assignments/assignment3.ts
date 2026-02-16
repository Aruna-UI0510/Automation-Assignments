/*Create two arrays to store student names ["Suresh","Mahesh","Naresh"] and
marks [75, 80, 82] Add 10 marks to each students using assignment operators andtore it into another array, after adding 10 marks identify the average marks of all
students*/




function calAvgMrks(arr:string[],marks:number[])
{

    let updatedMarks:number[]=[]
    let totalsum:number=0
    let avgMarks:number=0
    for(let m:number=0;m<marks.length;m++)
    {
        updatedMarks[m]=marks[m]+10
        totalsum+=updatedMarks[m]
    }
    avgMarks=totalsum/marks.length

    console.log("Updated Marks:")
    for(let m:number=0;m<marks.length;m++)
    {
        console.log(arr[m]+": "+updatedMarks[m])
    }
    console.log("Average Marks:"+avgMarks)


}

const arr:string[]=["Suresh","Mahesh","Naresh"]
const marks:number[]=[75, 80, 82]
calAvgMrks(arr,marks)
