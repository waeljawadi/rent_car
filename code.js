function verif() {
let sendname = document.getElementById("fname").value;
let sendlast = document.getElementById("lname").value;
let sendsubject = document.getElementById("tsubject").value;
let sendtele = document.getElementById("tele").value;
var vertele = new RegExp("^[0-9]{8}$")

if(sendname== ""){
    alert ("merci de completer le nom");
    return false;
}
if(sendlast== ""){
    alert ("merci de completer le Prenom");
    return false;
}
if(sendtele== ""){
    alert ("merci de completer le numéro de tele");
    return false;
}
// if(sendcountry== ""){
//     alert ("merci de completer le pays");
//     return false;
// }
// if(sendemail== ""){
//     alert ("merci de completer l'email");
//     return false;
// }

if(sendsubject== ""){
    alert ("merci de completer le sujet");
    return false;
}
// if(sendemail ==!"" && veremail.test(sendemail)== false ){
//     alert ("merci de corriger l'email");
//     return false;  
// }
if(vertele.test(sendtele)== false){
    alert ("merci de corriger le numero de tele");
    return false;
}

else {
    return true;
}

function myFunction() {
    document.getElementById("myForm").reset();
}

}

