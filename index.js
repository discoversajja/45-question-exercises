//exercise 32
//Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
//• Make another list of five usernames called new_users. Make sure one or two of the new
// usernames are also in the current_users list.
//• Loop through the new_users list to see if each new username has already been used. If it has, 
//print a message that the person will need to enter a new username. If a username has not been used, 
//print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var current_users = ["ali", "anus", "ahad", "jehan", "ayaz", "iqra", "admin"];
var new_users = ["ahmed", "manzoor", "madad", "ayaz", "ahad"];
//we will use foreach methood
new_users.forEach(function (_new_users) {
    var new_userlower = _new_users.toLowerCase();
    // we will use some() method
    var usernametaken = current_users.some(function (current_users) { return current_users.toLocaleLowerCase() === new_userlower; }); //true or false
    if (usernametaken) {
        console.log("".concat(new_users, " needs to choose a new username because it's already taken"));
    }
    else {
        console.log("".concat(new_users, "is the new member added"));
        current_users.push(_new_users); // add new user to current usersarray;
    }
});
console.log(current_users);
