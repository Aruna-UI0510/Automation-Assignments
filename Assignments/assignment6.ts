function isPirme(n:number):boolean
{

    let divisorcount=0
    if(n==1)
    {
        return false
    }
    else
    {
    for(let i=2;i<=n;i++)
    {
        
        if(n%i===0)
          divisorcount++

    }
    if(divisorcount===1)
         return true
    else
         return false
}

}

console.log(isPirme(7))
console.log(isPirme(25))
console.log(isPirme(1))