/*
This is empty on purpose! Your code to build the resume will go here.
 */
var name = "Kimberly Cho";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Survey Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

 $("#header").prepend([formattedRole]);
 $("#header").prepend([formattedName]);
