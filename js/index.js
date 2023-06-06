function convertRomanToArabic() {
    var romanNumeral = document.getElementById("romanInput").value.toUpperCase();
    var arabicNumeral = 0;
    var romanNumerals = {
      "M": 1000,
      "CM": 900,
      "D": 500,
      "CD": 400,
      "C": 100,
      "XC": 90,
      "L": 50,
      "XL": 40,
      "X": 10,
      "IX": 9,
      "V": 5,
      "IV": 4,
      "I": 1
    };

    for (var i = 0; i < romanNumeral.length; i++) {
      var currentSymbol = romanNumeral[i];
      var currentValue = romanNumerals[currentSymbol];
      var nextSymbol = romanNumeral[i + 1];
      var nextValue = romanNumerals[nextSymbol];

      if (nextValue && currentValue < nextValue) {
        arabicNumeral += nextValue - currentValue;
        i++;
      } else {
        arabicNumeral += currentValue;
      }
    }

    document.getElementById("arabicOutput").innerHTML = arabicNumeral;
}

// Automatic Slideshow - change image every 4 seconds
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000);    
}

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById('ticketModal');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
