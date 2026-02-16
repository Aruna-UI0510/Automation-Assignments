
//Assignment-2 (Conditional Statements) 

function isLoanApprovedORDenied(client:customer)

{
   if(client.creditScore>750)
       {
        console.log("loan is automatically approved.")
       }
   else if(client.creditScore<650)
   {
     console.log("loan is Denied.")
   }
   else 
    {
        console.log("credit score is between 650 and 750, additional checks are performing")
        if((client.income>=50000) && (client.isEmployed))
        {
            console.log("the system checks the debt-to-income (DTI) ratio.")
            if(client.debtToIncomeRatio<40.0)
                console.log("Laon is approved")
            else
                console.log("loan is Denied due to DIT is greater than 40")

        }
        else
        {
             console.log("loan is Denied due to client Income is less then 50,000 oris umemployeed")

        }

   }
 

}

interface customer {
customerName :string  
creditScore : number 
income :number 
isEmployed :boolean  
debtToIncomeRatio :number
}


const client:customer ={

customerName : "John Doe",  
creditScore : 720, 
income : 55000.0,  
isEmployed :true,  
debtToIncomeRatio : 35.0

}

isLoanApprovedORDenied(client)
