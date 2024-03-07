var unableToAttend = "Aaina Khan";
console.log("".concat(unableToAttend, " can't make it to  birthday extravaganza.")); //new invitation
//replace the guest
var newGuest = "Maria Nadir";
Guests[Guests.indexOf(unableToAttend)] = newGuest;
Guests.forEach(function (Guest) {
    console.log("Dear ".concat(Guest, "!You are invited to a birthday extravaganza! Be part of the festivities as we celebrate Azeem's special day in style. "));
});
