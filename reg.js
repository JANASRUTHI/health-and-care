function validate(){
    var group = document.formof.selecting;
    var username = document.getElementById("name").value;

    if(username == " "){
        document.getElementById("error").innerHTML="** please fill the name field";
        return false;
    }
    for(var i=0; i<group.length; i++){
        if(group[i].checked != false){
            alert("successfully submitted");
            return true;
        }
        else{
            document.getElementById("error").innerHTML="*please, fill the details";
            alert("fill the field")
            return false;
        }
    }   
}
