var findReplace = function(sentence, find, replace) {
  var sentence = sentence;
  var newSentence = sentence.replace(find, replace);
  return newSentence;
};

$(document).ready(function() {
  $("form#find_replace").submit(function(event) {
    var sentence = $("input#sentence").val();
    var find = $("input#find").val();
    var replace = $("input#replace").val();
    var result = findReplace(sentence, find, replace);

    $(".newSentence").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
