/*Bank Transactions
Positive value refers Credit and Negative refers Debit Transaction
Transactions Amount
1 50000
2 -2000
3 3000
4 -15000
5 -200
6 -300
7 4000
8 -3000
First Store all the transactions in any data structure of Your Choice from collections, and by using
Loops and conditional statements
1. Print total number of credit and debit transactions completed
2. Print the total amount credited and debited in account
3. Print total amount remaining at the end in Bank Account
4. If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit
Transaction with Amount” and also print total number of suspicious transactions*/

//1. Function Print total number of credit and debit transactions completed
function totalNoofCreditandDebit(bankTransaction:Map<number,number>)
{
    let creaditcount:number=0
    let debitCount:number=0
    for(let v of bankTransaction.values())
    {
        if(v>0)
            creaditcount++;
        else
            debitCount++;

    }
     console.log("The credit count"+ `${creaditcount}`)
     console.log("The credit count"+ `${debitCount}`)
    

}

//2. Print the total amount credited and debited in account
function totalSumOfCreditAndDebit(bankTransaction:Map<number,number>)
{
    let creaditsum:number=0
    let debitsum:number=0
    for(let v of bankTransaction.values())
    {
        if(v>0)
            creaditsum+=v
        else
           debitsum+=v

    }
     console.log("The credit count"+ `${creaditsum}`)
     console.log("The credit count"+ `${debitsum}`)
 totalRemaningAmt(creaditsum,debitsum)

    

}

//3. Print total amount remaining at the end in Bank Account
function totalRemaningAmt(creditsum:number,debitsum:number)
{
    let creditAmt:number=creditsum
    let debitAmt:number=debitsum
    let totalRemaningAmt:number=creditAmt-(debitAmt)
    console.log(totalRemaningAmt)
     

}
//4. If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit
//Transaction with Amount” and also print total number of suspicious transactions

function findSuspiciousTranscation(bankTransaction:Map<number,number>){

     let totalNoOfSuspiciousTranscations:number=0
   
    for(let v of bankTransaction.values())
    {
        if(v>0 && v>10000)
            {console.log("Suspicious credit Transaction with Amount: Rs "+`${v}`)
            totalNoOfSuspiciousTranscations++;}
        else if(v<-10000){
             totalNoOfSuspiciousTranscations++;}
    }
     console.log("The Total No of Suspicious Transactions: "+`${totalNoOfSuspiciousTranscations}`)
    
}

function bankActivities()
{
     totalNoofCreditandDebit(bankTransaction)
     totalSumOfCreditAndDebit(bankTransaction)
     findSuspiciousTranscation(bankTransaction)

}

let bankTransaction:Map<number,number>=new Map()
bankTransaction.set(1 , 50000)
bankTransaction.set(2 , -2000)
bankTransaction.set(3 , 3000)
bankTransaction.set(4 , -15000)
bankTransaction.set(5 , -200)
bankTransaction.set(6 , -300)
bankTransaction.set(7 , 4000)
bankTransaction.set(8 , -3000)
console.log(bankTransaction)
bankActivities()




