function make_shirt(size:string="Large",message:string="I love Pakistan") {
   console.log(`Making a ${size} t-shirt with the message "${message}"  printed on it.`);
 }
make_shirt();//Default large and message
make_shirt("Medium");//Default message ,medium size
make_shirt("Small","Proud  to be Pakistani");//custom message,small size
