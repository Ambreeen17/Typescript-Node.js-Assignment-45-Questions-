Default Value in make_shirt()*/
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love Pakistan"; }
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\"  printed on it."));
}
make_shirt(); //Default large and message
make_shirt("Medium"); //Default message ,medium size
make_shirt("Small", "Proud  to be Pakistani"); //cutom message,small size
