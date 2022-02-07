$(document).ready(function() {
$('form#wordPlay').submit(function(event) {
  event.preventDefault();

const sentenceOne = $('input#sentenceOne').val();
// const wordCount = wordCounter(sentenceOne)

$('.sentenceOne').text(sentenceOne);

$('display').show();
$('form#wordPlay').hide();

// the user will insert a sentence and it will become an array
let str = sentenceOne;

// let str = sentenceArray;

let strArray = str.split(' ');
console.log(strArray);

// const words = strArray.split(' ');
// console.log(words[3]);

let emptyArray = [];
// let wordCount = 3;

strArray.forEach(function(str) {
  emptyArray.push(str.join());


// strArray.forEach(function(word) {
//   emptyStr.push(word.join());


// strArray.forEach(function(str) {
// emptyStr.split(words[3]);




// const str = sentenceOne;

// const strArray = str.split();
// console.log(strArray);


// const words = str.split(' ');


});
});
});