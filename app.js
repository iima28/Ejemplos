var bandera=true;

function myFunction() {
    var x = document.getElementById("demo");
    if (bandera) {
        x.style.color = "red";
        bandera=false; 
    }else{
       x.style.color = "green";
       bandera=true;
    }
}

function mostrarMensaje() {
    alert("Hola!!!");
}

function myFunction2() {
    var x1 = document.getElementById("bt2");
    x1.onclick=mostrarMensaje;
}

function myFunctionBtn(){
    var x, text;

    // Get the value of the input field with id="numb"
    x = document.getElementById("numb").value;
  
    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 10) {
       text = "Input not valid";
    } else {
       text = "Input OK";
    }
    document.getElementById("demob").innerHTML = text;
}


// Click the button to create an A element with a link to w3schools.com.</p>
function myFunctionBtn1() {
  var x = document.createElement("A");
  var t = document.createTextNode("Tutorials");
  x.setAttribute("href", "https://www.w3schools.com");
  x.appendChild(t);
  document.body.appendChild(x);
}