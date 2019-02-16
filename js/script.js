function calculate()	{
  //this is my UI logic. It will interact with user.
var side1a= document.getElementById("first").value;
var side2a= document.getElementById("second").value;
var side3a= document.getElementById("third").value;
var side1=parseInt(side1a);
var side2=parseInt(side2a);
var side3=parseInt(side3a);


//This is my business logic//

var values=[side1,side2,side3];
if(values[0]===values[1] && values[1]===values[2] && values[2]===values[0])	{
 	document.getElementById('show').innerHTML= 'The triangle is equilateral <br> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKR-4u9PRtlGT3q6wugn10dzOFAowxTeu2waTzKfgwfeH1562eCA">'
 }
else if (values[0]===values[1] || values[1]===values[2] || values[0]===values[2])	{
 	alert("The triangle is isoceles")
 }
 else if(side1+side2<=side3 || side1+side3<=side2 || side2+side3<=side1)	{
	alert("These values do not make a triangle")
}

else if(side1!==side2 && side1!==side3 && side2!==side1 && side2!==side3 && side3!==side2 && side3!==side1 && side1+side2>side3 || side2+side3>side1 || side3+side1> side2 )	{
	alert("The triangle is scalene")
}
else {
	alert("Please enter a numeric value")
}

}
