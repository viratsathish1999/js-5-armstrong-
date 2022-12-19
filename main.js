var n,a=0,b,c;
n=parseInt(prompt("Enter the NUmber"));
c=n;
while(n!=0){
    b=n%10;
    a=b*b*b+a;
    n=n-b;
    n=n/10;
    
}

if(c==a){
    document.write(c+" This Number is armstrong");
}
else{
    document.write(c+ " This Number is not armstrong");
}