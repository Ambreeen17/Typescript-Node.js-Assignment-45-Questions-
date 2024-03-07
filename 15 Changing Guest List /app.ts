let unableToAttend="Aaina Khan";
 console.log(`${unableToAttend} can't make it to  birthday extravaganza.`); //new invitation
 //replace the guest
 let newGuest="Maria Nadir";
 Guests[Guests.indexOf(unableToAttend)]=newGuest;
 Guests.forEach(Guest=>{
    console.log(`Dear ${Guest}!You are invited to a birthday extravaganza! Be part of the festivities as we celebrate Azeem's special day in style. `);
} );
