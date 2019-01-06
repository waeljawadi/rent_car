var alter_ = Array.from(document.querySelectorAll(".p3")).map(i => i.onclick = () => 
{localStorage.clear();
var items = [];
 items.push(document.querySelector('#'+i.closest('.noover').attributes.id.value + ' img').src);
 items.push(document.querySelector('#'+i.closest('.noover').attributes.id.value + ' .p1').innerHTML);
 items.push(document.querySelector('#'+i.closest('.noover').attributes.id.value + ' .p2').innerHTML);
 localStorage.setItem("items", items);
});

