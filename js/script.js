const openbtn = document.querySelector("#openbtn");

openbtn.addEventListener("click", () => {
     document.body.classList.toggle("show-mobile-menu");
});


function data(event) {
     var a = document.getElementById('n1').value;
     var b = document.getElementById('n2').value;
     var c = document.getElementById('n3').value;
 
     if (a == "" || b == "" || c == "") {
         alert("all fields are mandatory");
         event.preventDefault();
         return false;
     }
     return true; 
 }