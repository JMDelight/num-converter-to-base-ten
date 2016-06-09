var converter = function(input) {
  array = input.split("");
  var result = 2 * parseInt(array[0]) + parseInt(array[1]);
  return result
}


$(document).ready(function() {
  $(".converter-form").submit(function(event) {
    event.preventDefault();
    var userInput = ($("#user-input").val());
    var output = converter(userInput);
    $("#result").text(output);
  });
});
