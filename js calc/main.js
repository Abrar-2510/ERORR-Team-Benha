


var myInput= document.getElementById ("input"),
myDiv= document.getElementById ("div"),
myCurrency= document.getElementById ("currency");

myCurrency.onchange = function(){
    "use strict";
    myDiv.innerHTML = "worth"+ myInput.value * myCurrency.value + "L.E";
}
