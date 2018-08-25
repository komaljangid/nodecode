const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
function printPrime(value)
{
i=2,count=i+1,a=2;
if(value>1){
    console.log(i);
    while(i<=value)//number of times the loop should execute
    {
        a=2;
        while(a<count)//checking the value is prime or not
        {
         if(count%a!=0){
         a++;
          continue;   
    }
    else{
    
    break;
    }
}
    if(count==a){
        console.log(count);
    count++;}
    else
    {
    count++;
    i--;
    } 
    i++;   
     }
}
else if(value==1)
console.log(i);
else
console.log("value is less than 1");
}
rl.question('Enter the number till you want prime numbers ',(answer)=>
{
    printPrime(answer);

    rl.close();
});