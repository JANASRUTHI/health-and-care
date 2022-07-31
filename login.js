function validated()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    if(username=="admin@gmail.com" && password=="user")
    {
        alert("login Successfully");
        return false;
    }
    else{
        alert("login failed");
    }
}