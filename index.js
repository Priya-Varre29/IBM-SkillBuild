const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
function validateForm()
{
    var name=document.forms["form1"]["name"].value;
    var email=document.forms["form1"]["email"].value;
    var text=document.forms["form1"]["email"].value;
    // var emailF = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(name ===""||email ==="" || text==="")
    {
    alert("one or more fileds are empty");
    return false;
    }
    else{ 
    alert("Thankyou for submitting");
    
    }
}
// if(emailId.value.match(mailformat))
// {
// alert("Thank You for submitting");
// document.form1.text1.focus();
// return true;
// }
// else
// {
// alert("Invalid email address.");
// document.form1.text1.focus();
// return false;
