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
        $(".calcul").text('Voiture reservez pour '+diff+' jour à '+ diff*Number(tab_argument[2]) + ' dinars');
    }
    
    ,1000)});
    })







