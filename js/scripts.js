$(document).ready(function () {
  $("form#wordPlay").submit(function (event) {
    event.preventDefault();

    const sentenceOne = $("input#sentenceOne").val();
    $(".sentenceOne").text(sentenceOne);

    $("#display").show();
    $("form#wordPlay").hide();

    // the user will insert a sentence and it will become an array
    let strArray = sentenceOne.split(" ");
    let emptyArray = [];

    strArray.forEach(function (str) {
      if (strArray.length >= 3) {
        emptyArray.push(str);
      }
    });

    //reverse the sentence
    emptyArray.reverse();
    //join the sentence
    let finalSentence = emptyArray.join(" ");

    //print
    $("#display").append(finalSentence);
    console.log(finalSentence);
  });
});
