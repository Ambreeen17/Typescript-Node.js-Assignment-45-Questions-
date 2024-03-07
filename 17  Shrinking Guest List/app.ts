console.log("Unfortunately,I can only invite two person for dinner.");
while(Guests.length>2){
    let removedGuest=Guests.pop();
    console.log(`Sorry,${removedGuest},I can't invite you to dinner. `);
}
Guests.forEach(Guest=>{console.log(`Dear ${Guest},You're still invited to dinner.`);
});
Guests.splice(0,Guests.length);
console.log(Guests);
//show an empty list
