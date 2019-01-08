let tab_argument = localStorage.getItem("items").split(',');
console.log(tab_argument);
document.querySelector('#modele').value = tab_argument[1];
document.querySelector('#prix_jour').value = tab_argument[2]+ ' dinars par jour';

$(document).ready(function(e){
$(function() {

    $('#date_d').datepicker({
        format: "dd-MM-yyyy",
        todayHighlight:'TRUE',
        autoclose: true,
        minDate: 0,
        maxDate: '+1Y+6M'
    }).on('changeDate', function (ev) {
            $('#date_r').datepicker('setStartDate', $("#date_d").val());
    });
    $('#date_r').datepicker({
        format: "dd-MM-yyyy",
        todayHighlight:'TRUE',
        autoclose: true,
        minDate: '0',
        maxDate: '+1Y+6M'
    }).on('changeDate', function (ev) {
            var start = $("#date_d").val();
            var startD = new Date(start);
            var end = $("#date_r").val();
            var endD = new Date(end);
            diff = parseInt((endD.getTime()-startD.getTime())/(24*3600*1000));
            
    });

    
 window.setInterval(
    function()
    { if (diff == 0)
        {
            diff = 1;
        }
        $(".calcul").text('Voiture reservée pour '+diff+' jours à '+ diff*Number(tab_argument[2]) + ' dinars');
    }
    
    ,1000)});
    })

// prevent submit from redirection to other page 
 $("form").submit(function(e){
    e.preventDefault();
});


// start function when page is loaded
$(document).ready(function(e){
    

//  init vars

    var name = 0;
    var date_d = 0;
    var date_r = 0;
    var message = 0;


    // fn js pour lancer la fonction chaque n temps
window.setInterval(function(e){





if ($('#nom_prenom').val()  !="") 
{name = 1}
else
{name = 0}

if ($('#date_d').val()  !="")
{date_d = 1}
else
{date_d = 0}
if ($('#date_r').val()  !="")
{date_r = 1}
else 
{dae_rt = 0}

if ($('#area').val() !="" )
{message = 1}
else 
{messaeg = 0}

var somme = Number(name)+Number(date_d)+Number(date_r)+Number(message);

// ajouter le disable si il ya des champs non rempli
if (somme != 4)
{
$('#sbmt').attr('disabled','disabled');
}




else

{
$('#sbmt').removeAttr('disabled');
}









},1000);


$('#sbmt').click(function(e){

    alert('M.'+$('#nom_prenom').val() +',votre voiture est réservée');
})





});






