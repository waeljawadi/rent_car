let tab_argument = localStorage.getItem("items").split(',');
console.log(tab_argument)
document.querySelector('#modele').value = tab_argument[1];
document.querySelector('#prix_jour').value = tab_argument[2];

$(document).ready(function(e){
$(function() {

    $('#date_d').datepicker({
        format: "dd-M-yy",
        todayHighlight:'TRUE',
        autoclose: true,
        minDate: 0,
        maxDate: '+1Y+6M'
    }).on('changeDate', function (ev) {
            $('#date_r').datepicker('setStartDate', $("#date_d").val());
    });
    
    
     
    
    $('#date_r').datepicker({
        format: "dd-M-yy",
        todayHighlight:'TRUE',
        autoclose: true,
        minDate: '0',
        maxDate: '+1Y+6M'
    }).on('changeDate', function (ev) {
            var start = $("#date_d").val();
            var startD = new Date(start);
            var end = $("#date_r").val();
            var endD = new Date(end);
            var diff = parseInt((endD.getTime()-startD.getTime())/(24*3600*1000));
            console.log(diff);
    });
    
    });
})