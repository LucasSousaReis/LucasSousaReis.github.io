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