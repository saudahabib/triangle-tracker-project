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
document.getElementById('show').innerHTML='The triangle is isoceles <br> <img src="http://2000clicks.com/MathHelp/IsoscelesTriangleXHB.gif">'
 }
 else if(side1+side2<=side3 || side1+side3<=side2 || side2+side3<=side1 ||side1<=0|| side2<=0||side3<=0)	{
document.getElementById('show').innerHTML='These values do not make a triangle <br> <img src="https://media.tenor.com/images/020e1899e91ed2742fd0491927d90401/tenor.gif">'
}

else if(side1!==side2 && side1!==side3 && side2!==side1 && side2!==side3 && side3!==side2 && side3!==side1 && side1+side2>side3 || side2+side3>side1 || side3+side1> side2 )	{
	document.getElementById('show').innerHTML='The triangle is scalene <br> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHXUOrQnZKiso7SF_amW37JV4548WCDB8ah5GZdAhK2iJO6X2XRQ">'
}
else {
 document.getElementById('show').innerHTML='Please enter a numeric value <br> <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZDwLKpK4jt17Vprx6ONFMqpc3DlfOxVIIt_kSZm9ySPSoJBmb">'
}

}
