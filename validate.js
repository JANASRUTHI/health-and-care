function validated(){
    var username = document.getElementById("name").value;

    if(username == " "){
        document.getElementById("error").innerHTML="** please fill the name field";
        return false;
    }
}