/*function emailverification(enteredemail) {
    var mail=document.getElementById("email").value;
    var regx=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(enteredemail.value.match(regx)){
        alert("You have provided a valid email");
        return true;
    }else{
        alert("You have entered an invalid email address!");
        return false;
    }
}
*/
var nameError=document.getElementById("name-error");

function namevalidation(){
    var name=document.getElementById("fullname").value;

    if (name==0) {
      nameError.innerHTML="Name is required";  
      return false;
    }
    if(!name.match(/^[a-zA-Z]+ [a-zA-Z]+$/)){
        nameError.innerHTML="Enter full name";
        return false;
    } else{
        nameError.innerHTML="valid";
        return true;
    }
}


/*function validate(){
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var name = document.getElementById('name').value;
    if(!regName.test(name)){
        alert('Please enter your full name (first & last name).');
        document.getElementById('name').focus();
        return false;
    }else{
        alert('Valid name given.');
        return true;
    }
}
<p>Full Name: <input id="name" value=""></p>
<input type="button" onclick="validate();" value="Validate Name"></input>*/