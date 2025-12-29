let count=0;

let countText=document.getElementById("count");
let plusBtn=document.getElementById("plus");
let minusBtn=document.getElementById("minus");
let resetBtn=document.getElementById("reset");

console.log("coneeeeeeeerted");


plusBtn.addEventListener("click",()=>{
      
    count++;
    countText.innerText=count;
    updateColor();

    
});


minusBtn.addEventListener("click",()=>{
   
    count--;
    countText.innerText=count;
    updateColor();
    
});

resetBtn.addEventListener("click",()=>{
    
    count=0;
    countText.innerText=count;
    updateColor();
    
});


function updateColor() {
  if (count > 0) {
    countText.style.color = "green";
    document.querySelector("body").style.backgroundColor="green";
   
  } else if (count < 0) {
    countText.style.color = "red";
     document.querySelector("body").style.backgroundColor="red";
  } else {
    countText.style.color = "black";
     document.querySelector("body").style.backgroundColor="black";
  }
}
