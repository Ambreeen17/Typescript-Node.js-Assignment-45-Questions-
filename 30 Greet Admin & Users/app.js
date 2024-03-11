let user_names:string[]=["Admin","Azeem","Waqar","Tahir","Arsalan"];
user_names.forEach(user_name=>{
    if (user_name==="Admin"){
        console.log("Hello Admin,would you like to see a status report?");
    }else {
        console.log(`Hello ${user_name},Thank you for logging in again.`);
    }
});
