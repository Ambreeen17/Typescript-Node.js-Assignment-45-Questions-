//version that passes
let alien_colour="green";
if(alien_colour =="green"){
    console.log("You just earned 5 points!");
}
//version that fails (no output)
alien_colour="red";
if(alien_colour =="green"){
    console.log("You just earned 5 points");
}
//no output because the condition is false
