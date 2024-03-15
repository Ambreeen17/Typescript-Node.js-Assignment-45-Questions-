var magicians = ["David Blaine", "Darren Brown", "Criss Angel", "David Copperfield"];
function show_magicians(magicians) {
    magicians.forEach(function (magicians) {
        console.log(magicians);
    });
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great" + magicians[i];
    }
}
make_great(magicians); //Modifies the  original array
show_magicians(magicians); //
