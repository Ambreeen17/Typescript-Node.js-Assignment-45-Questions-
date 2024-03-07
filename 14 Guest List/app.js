//use Array to manage a list of guests.
var Guests = ["Wania Rais", "Aaina Khan", "Syeda Fatima", "Summaiya Ali"];
//loop through the list to send each one personal invitation
Guests.forEach(function (Guest) {
    console.log("Dear ".concat(Guest, "!You are invited to a birthday extravaganza! Be part of the festivities as we celebrate Azeem's special day in style. "));
});
