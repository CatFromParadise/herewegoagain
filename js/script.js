let variant = 13,r,h,S,N; 
alert("Nikita Meshcheryakov\n"+"Variant "+variant);  
/*  
r=3*N-5 
h=N-2  
S=2πrh+2πr2=2πr(r+h)*/ 
r=3*N-5; 
h=N-2; 
const pi=3.14159265359; 
S=2*pi*r*(r+h) 
function cylinderArea(){ 
N=document.forma1.t1.value;
r=3*N-5;
h=N-2;
S=2*pi*r*(r+h);
document.forma1.res.value=S;
}
function myFunc(){
    N=document.forma1.t1.value;
    r=3*N-5;
    h=N-2;
    S=2*pi*r*(r+h);
    document.forma1.res.value=0;
}
