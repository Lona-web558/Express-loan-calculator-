function calculateLoan(){

let amount=parseFloat(document.getElementById("amount").value);

let interest=parseFloat(document.getElementById("interest").value)/100/12;

let payments=parseFloat(document.getElementById("years").value)*12;

let x=Math.pow(1+interest,payments);

let monthly=(amount*x*interest)/(x-1);

document.getElementById("payment").innerHTML=
"Monthly Payment: $" + monthly.toFixed(2);

}

calculateLoan();
