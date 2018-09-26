function validation()
{

    var letters = /^[A-Za-z]+$/;
    //first name validation
    var fname=document.getElementById("fName").value;
    if(fname=="")
    {
        alert("please enter firstname")     
           return false;
    }
    else if(!fname.match(letters))
    {
        alert("please enter valid firstname")    
            return false
    }

  //last name validation
  var lname=document.getElementById("lName").value;
    if(lname=="")
    {
        alert("please enter lastname")
        return false;
    }
    else if(!lname.match(letters))
    {
        alert("please enter valid lastname")     
           return false
    }  
   //dob validation
     var dob=document.getElementById("Dob").value;
     var d=new Date(dob);
     byr=d.getFullYear();
     today=new Date();
     tyr=today.getFullYear();
     if(byr<1950||byr>tyr)
     {
         alert("please select valid date of birth");
         return false;
     }
    //phone no validation
    var phone=document.getElementById("phone").value;
    if(phone==""||isNaN(phone))
    {
        alert("enter a phone number");
        return false;
    }
    else if(phone.length!=10)
    {
        alert("please check phone number");
        return false;
    }
    //email validation
    var reg=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    var mail=document.getElementById("Email").value;
    if(mail==""||!mail.match(reg))
    {
        alert("enter the valid email");
        return false;

    }
  //password validation
    var pass=document.getElementById("Password").value;
    if(pass=="")
    {
        alert("enter the password");
        return false;
    }
    else if(pass.length<8)
    {
        alert("password must of 8 or more chracters");
    }

    var Cpass=document.getElementById("CPassword").value;
    if(Cpass=="")
    {
        alert("enter the password");
        return false;
    }
    else if(Cpass!=pass)
    {
        alert("alert password not matching");
        return false;
    }
    
}


//function to change the backgrond color of input field wen it focus

function change(back) {
    back.style.background = "orange";

}
//function to change the name in uppercase when user leaves the field
function uppercase(upper)
{
    var fname=document.getElementById(upper).value
    var fupper=fname.toUpperCase();
    document.getElementById(upper).value=fupper;

}

//function to calculate the age when user enters a date of birth
function Age()
{

    var input = document.getElementById("Dob").value;
     var d = new Date( input );

   if ( !!d.valueOf() ) {
    var byr = d.getFullYear();
    var bmo = d.getMonth();
    var bday = d.getDate();
   }
    var byr;
    var age;
    var now = new Date();
    tday=now.getDate();
    tmo=(now.getMonth());
    tyr=(now.getFullYear());
    {
    if((tmo > bmo)||(tmo==bmo & tday>=bday))
    {age=byr}
    else
    {age=byr+1}
    
    document.getElementById("age").value=(tyr-age);
    }
}
