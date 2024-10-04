var emailInput =document.getElementById("email")
var passwordInput =document.getElementById("password")
var button = document.getElementById("submit")

var underEmail = document.getElementById("under-email")
var underPassword = document.getElementById("under-password")


function checkEmail(){
 
    if (emailInput.value!=''){
        underEmail.innerText =''

    }
    
    if(emailInput.value==''){
        underEmail.innerText ="Please enter your email!"
    }      

}
    function checkPassword(){

    if(passwordInput.value!=''){
        underPassword.innerText=''

    }
    
    if(passwordInput.value==''){
        underPassword.innerText ="Please enter your password"
        
    }
}


function submitFunc(){
    if(emailInput.value!='' && passwordInput.value!=''){
        alert(" Information Submitted.")
    }else{
        alert("Information not Submitted")
    }
}