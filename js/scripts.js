var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var alphabetValue = ["10","11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35"]

var converter = function(input, base) {
  input = input.replace(/\W/g, "")
  array = input.split("");
  var result = 0;
  for(i = 0 ; i < array.length; i ++) {
    if (alphabet.includes(array[i])) {
      var dicIndex = alphabet.indexOf(array[i]);
      array.splice(i, 1, alphabetValue[dicIndex]);
    };
  };
  debugger;
  for(i = 0 ; i < array.length; i ++) {
    var result = result + Math.pow(base, i) * parseInt(array[array.length - 1 - i]);
  };
  return result;
};


$(document).ready(function() {
  $(".converter-form").submit(function(event) {
    event.preventDefault();
    var userInput = ($("#user-input").val());
    var userBase = ($("#user-base").val());
    var output = converter(userInput, userBase);
    $("#result").text(output);
  });
});
