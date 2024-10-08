

function login()
{
    let usernameVal = document.getElementById("email").value;
    let passwardVal = document.getElementById("password").value;
   
    if(usernameVal=="" && passwardVal==""){
          alert("Please enter your details")
    }

    if(usernameVal=="Entri Elevate" && passwardVal=="admin123")
    {
        window.location.assign("https://www.netflix.com/in/");
        alert("Login successfull")
       
    }
    else
    {
        alert("Login Failed")
     }
}

function forget()
{
    let a=prompt("Enter login E-Mail:");
    window.alert("Verification link sent to your email.Thank You!");
}


