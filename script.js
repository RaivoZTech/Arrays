//Write a code that checks and prints out the largest number in an array
var numArray = [10,30,40,50,400,60,70,1];//Preset array of numbers

function largestNum(){
var largestNum= 0;

for (i=0; i<=numArray.length;i++){//Traverses trough an array
    if (numArray[i]>largestNum) { // checks for the largest number
        var largestNum=numArray[i];//assigns largest number to a var largestNum
    }
}
document.getElementById("main").innerHTML="The largest number in array ["+numArray+"] is "+"<br />"+largestNum;//prints out answer
}
////Write a code that checks and prints out sum and mean of the array
function meanAndSum(){
	var sum = 0;
	var mean = 0;
	for(i=0;i<numArray.length;i++){//Traverses trough an array
	 sum = sum + numArray[i];//Calculates the sum and assigns it to a var "sum"
	 mean = sum/numArray.length;//Calculates the mean and assigns it to a var "mean"
	 
	}
	//prints out the sum and mean of an array
	document.getElementById("main").innerHTML="The the sum of the entire array ["+numArray+"] is "+sum+"<br/>"+"The mean of the entire array is " + mean;
	
}