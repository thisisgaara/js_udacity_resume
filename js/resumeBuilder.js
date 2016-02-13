/*
This is empty on purpose! Your code to build the resume will go here.
 */

var name = 'Vignesh Kannan';
var Role = "Systems programmer";
formattedName = HTMLheaderName.replace("%data%",name);
formattedRole = HTMLheaderRole.replace("%data%", Role);
//Append the values to header
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var temp = "audacity";
console.log(temp.slice(1, temp.length));