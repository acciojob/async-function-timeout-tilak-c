const outputDiv=document.getElementById("output");
const input=document.getElementById("text");
const number=document.getElementById("delay");
const button=document.getElementById("btn");

button.addEventListener("click",function(){
	
const inputValue=input.value;
const numberValue=number.value;
	setTimeout(()=>{
		outputDiv.innerHTML=inputValue;
	},numberValue)
})