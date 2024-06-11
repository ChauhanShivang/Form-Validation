function Validate()
{
    var Name = document.getElementById("name").value.trim();
    var Surname = document.getElementById("surname").value.trim();
    var Email = document.getElementById("email").value.trim();
    var Mobile = document.getElementById("mobile").value.trim();
    var Pin = document.getElementById("pin").value.trim();
    
    var Vname = /^[a-z A-Z]+$/;
    var Vsurname = /^[a-z A-Z]+$/;
    var Vemail = /^[a-z]+[0-9]+\@[a-z]{4,}\.[a-z]{3,4}$/;
    var Vmobile = /^[0-9]{10}$/;
    var Vpin = /^\d{6}$/;

    if(!Vname.test(Name)){
        alert("Please Enter Valid Name");
        return false;
    }
    if(!Vsurname.test(Surname)){
        alert("Please Enter Valid Surname");
        return false;
    }
    if(!Vemail.test(Email)){
        alert("Please Enter Valid Email");
        return false;
    }
    if(!Vmobile.test(Mobile)){
        alert("Please Enter Valid Mobile Number");
        return false;
    }
    if(!Vpin.test(Pin)){
        alert("Please Enter Valid Pin Code");
        return false;
    }
    return true;
}