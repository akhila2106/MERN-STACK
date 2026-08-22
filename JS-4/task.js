function mean(a,b,c,d,e){
    console.log((a+b+c+d+e)/5);
}
mean(1,2,3,4,5);

const mean2=(a,b,c,d,e) =>{
    console.log((6+5+7+8+4)/5);
}
mean2(6,5,7,8,4)

const square=(x)=>{
    return x*x;
}
let x=square(6);
console.log(x)

function outer(){
    console.log("outer function running....");
function inner(){
    console.log("inner function running....");
}    
inner();
}
outer();