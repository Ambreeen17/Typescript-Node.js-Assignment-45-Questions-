let magicians:string[]=["David Blaine","Darren Brown","Criss Angel","David Copperfield"];

function show_magicians(magicians:string[]) {
    magicians.forEach(magicians=>{
        console.log(magicians);
    });
}

function make_great(magicians:string[]) {
for(let i=0;i<magicians.length;i++){
    magicians[i]="The Great"+ magicians[i];
} }
make_great(magicians);//Modifies the  original array
show_magicians(magicians);//Show modified array
