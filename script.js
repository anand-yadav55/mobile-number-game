let number=Math.floor(Math.random()*10)+1;
console.log("answer: "+number);
let btn=document.querySelector("input[type='submit']");
let input=document.getElementById("input");	
let output=document.querySelector(".result");
let count=1;
let input_record=document.querySelector("#input_record");
let btn_hint=document.querySelector("#hint");
let hint_text=document.querySelector("#hint_text");
let lockSrc=document.querySelector("img");
//let border=document.querySelector(".border");


function hint() {
	hint_text.innerText="the number is between"+((number-10>0)?(number-10):0)+" and "+((number+10)>100?100:(number+10));
}

function reset(){
	number=Math.floor(Math.random()*10)+1;
	console.log("answer: "+number);
	btn.value="SUBMIT";
	input_record.innerText="";
	output.innerText="";
	count=1;
	input.value="";
	hint_text.innerText="";
	lockSrc.src="locked.jpg";
	//border.style.border="none";
	btn.onclick=result;
}

function input_record_function(numb){
	let ele=document.createElement("li");
	let nodeEle=document.createTextNode(numb);
	ele.appendChild(nodeEle);
	document.getElementById('input_record').appendChild(ele);
}

function result(){
	//	border.style.border="1px dashed black";
	if(input.value!=null && input.value!='' && count<=10){
		if(input.value==number){
			output.innerText="WELL! DONE.. YOU GUESSED IT RIGHT";
			
			lockSrc.src="unlocked.jpg";
			btn.value="RESET";
			btn.onclick=reset;
		}
		else if(input.value>number){
			output.innerText="TOO HIGH";
		}
		else if(input.value<number){
			output.innerText="TOO LOW";
		}
		console.log("your answer: "+input.value);
		input_record_function(input.value);
		count++;

	}
	if(count>10){
		output.innerText="you are out of move. click reset for a new round";
		btn.value="RESET";
		btn.onclick=reset;
	}
}
btn.onclick=result;
btn_hint.onclick=hint;
