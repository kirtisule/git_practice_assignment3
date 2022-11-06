funtion check prime(num){
let count = 0;
for(let i=1;i<=num; i++){
if(num%i==0){
count++
}if(count == 2){
console.log("The Number is Prime Number");
}else{
console.log("The Number is not a Prime Number");
}
}