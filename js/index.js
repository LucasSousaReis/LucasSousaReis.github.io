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

    for (var key in romanNumerals) {
      while (romanNumeral.indexOf(key) === 0) {
        arabicNumeral += romanNumerals[key];
        romanNumeral = romanNumeral.replace(key, "");
      }
    }

    document.getElementById("arabicOutput").innerHTML = arabicNumeral;
  }