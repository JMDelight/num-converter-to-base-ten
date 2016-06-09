var converter = function(input) {
  return input
}


$(document).ready(function() {
  $(".converter-form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#user-input").val());
    var output = converter(userInput);
    $("#result").text(output);
  });
});
