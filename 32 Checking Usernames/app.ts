let current_users:string[]=["user1","admin","user3","user4","user5"];
let new_users:string[]=["user1","user6","user7","admin","user9"];
new_users.forEach(new_user=>{
    if (current_users.some(currentUser=>currentUser.toLowerCase()===new_user.toLowerCase()
    )){
        console.log(`${new_user} will need to enter a new username.`);
    }else {
            console.log(`${new_user} is available`);
    }
});
    
