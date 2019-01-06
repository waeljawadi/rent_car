let tab_argument = localStorage.getItem("items").split(',');
console.log(tab_argument)
document.querySelector('#modele').value = tab_argument[1];
document.querySelector('#prix_jour').value = tab_argument[2];