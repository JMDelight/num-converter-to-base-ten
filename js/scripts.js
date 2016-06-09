var converter = function(input) {
  array = input.split("");
  var result = 0;
  for(i = 0 ; i < array.length; i ++) {
    var result = result + Math.pow(2, i) * parseInt(array[array.length - 1 - i]);
  };
  return result;
};


$(document).ready(function() {
  $(".converter-form").submit(function(event) {
    event.preventDefault();
    var userInput = ($("#user-input").val());
    var output = converter(userInput);
    $("#result").text(output);
  });
});
