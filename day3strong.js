// min nbr from non primes
num=prompt("enter number:")
primes="", nonprimes=""
function checkPrime(n){
    for(i=2;i<n;i++){
        if(n%i==0)
        return false
    }
    return true
}
for(j of num){
    if(j>1){
     if(checkPrime(j)){
         primes+=j+""
     }else{
         nonprimes=nonprimes+j+""
     }
    }
}

console.log("nonprimes in "+num+" : "+nonprimes)
min = nonprimes[0]
for(i=0;i<nonprimes.length;i++){
if(nonprimes[i]<min)
min=nonprimes[i]
}
console.log("min number is: "+min)
// checking primesum is more or nonprime sum is more
num=prompt("Enter a number:")
primesum=0,nonprimesum=0
function checkprime(n){
    for(i=2;i<n;i++){
        if(n%2==0)
        return false
    }
    return true
}
for(j of num){
    if(j>1){
        if(checkprime(j)){
            primesum=Number(j)
        }
        else{
            nonprimesum=Number(j)
        }
    }
}
res=(primesum>nonprimesum)?"primesum is more":(primesum==nonprimesum)?"Both are equal":"nonprimesum is more"
console.log(res)
// Hardhad number
num=prompt("enter a number")
digitSum=0
for(i of num){
    digitSum+=Number(i)
}
res=(num%digitSum == 0)?"Harshad number":"not a harshad number"
console.log(res)