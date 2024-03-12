var current_users = ["user1", "admin", "user3", "user4", "user5"];
var new_users = ["user1", "user6", "user7", "admin", "user9"];
new_users.forEach(function (new_user) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === new_user.toLowerCase(); })) {
        console.log("".concat(new_user, " will need to enter a new username."));
    }
    else {
        console.log("".concat(new_user, " is available"));
    }
});
