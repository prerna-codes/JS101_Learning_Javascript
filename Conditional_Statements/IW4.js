//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.
//db : databse
let db_username = "prerna@gmail.com";
let db_password = "prerna1234";

//login
let login_username="prerna@gmail.com"
let login_password = "prerna1234";

//codition 
if(db_username==login_username){
  if(db_password==login_password){
    console.log("Can Login");
  }
  else{
    console.log("Incorrect Password")
  }
}
else{
  console.log("Cannot login");
}