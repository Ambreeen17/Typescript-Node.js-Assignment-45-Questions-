console.log("Unfortunately,I can only invite two person for dinner.");
while (Guests.length > 2) {
    var removedGuest = Guests.pop();
    console.log("Sorry,".concat(removedGuest, ",I can't invite you to dinner. "));
}
