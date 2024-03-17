var magicians = ["David Blaine", "Darren Brown", "Criss Angel", "David Copperfield"];
function make_great(magicians) {
    var greatMagicians = [];
    magicians.forEach(function (magician) {
        greatMagicians.push("".concat(magician, " the Great"));
        console.log(magician);
    });
    return greatMagicians;
}
function show_magicians(magicians) {
    magicians.forEach(function (magicians) {
        console.log(magicians);
    });
}
var greatMagicians = make_great(magicians.slice()); //create a new modified array
console.log("Original magicians:");
show_magicians(magicians); //Show original array
console.log("Great magicians:");
show_magicians(greatMagicians); //Show modified array
