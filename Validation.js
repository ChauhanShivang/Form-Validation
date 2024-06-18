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
        document.getElementById("ename").innerHTML = "*Invalid Name";
        return false;
    }
    if(!Vsurname.test(Surname)){
        document.getElementById("esurname").innerHTML = "*Invalid Surname";
        return false;
    }
    if(!Vemail.test(Email)){
        document.getElementById("eemail").innerHTML = "*Invalid Email";
        return false;
    }
    if(!Vmobile.test(Mobile)){
        document.getElementById("emobile").innerHTML = "*Invalid Mobile No.";
        return false;
    }
    if(!Vpin.test(Pin)){
        document.getElementById("epin").innerHTML = "*Invalid Pin Code";
        return false;
    }
    return true;
}