let  Guests: String[]=["Wania Rais","Aaina Khan","Syeda Fatima","Summaiya Ali"];
    console.log("Great News! I found a bogger dinner table");
    //adding more guest
    Guests.unshift("Ambreen Khan");
    Guests.splice(Guests.length/2,0,"Ayesha Aun");
    Guests.push("Dina Kazmi");
    Guests.forEach(Guest=> {
        console.log(`Dear ${Guest},Would you like to join me for dinner?`);
    });

    
