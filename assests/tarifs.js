let tab_argument = localStorage.getItem("items").split(',');
console.log(tab_argument)
document.querySelector('#modele').value = tab_argument[1];
document.querySelector('#prix_jour').value = tab_argument[2];

$('#dt2').datepicker({
    dateFormat: "dd-M-yy" 
});
$.datepicker.setDefaults( $.datepicker.regional[ "fr" ] );
$("#date_d").datepicker({
    dateFormat: "dd-M-yy", 
    minDate:  0,
    onSelect: function(date){            
        var date1 = $('#date_d').datepicker('getDate');           
        var date = new Date( Date.parse( date1 ) ); 
        date.setDate( date.getDate() + 1 );        
        var newDate = date.toDateString(); 
        newDate = new Date( Date.parse( newDate ) );                      
        $('#date_r').datepicker("option","minDate",newDate);            
    }
});