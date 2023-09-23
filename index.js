const firstEmail = document.querySelector("#firstEmail").value ;
const lastEmail = document.querySelector("#secondEmail").value ;
const firstPassword = document.querySelector("#firstPassword").value ;
const lastPassword = document.querySelector("#confirmPassword"). value ;

if (firstEmail !== lastEmail ){
    console("Emails Do Not Match")
} else{
    console("Email Address Match")
};

if (firstPassword !== lastPassword ){
    console("Password Do Not Match")
} else{
    console("Password Match")
};


  