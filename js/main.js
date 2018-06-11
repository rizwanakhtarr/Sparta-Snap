$(document).ready(function(){


function shuffle(arrayColor) {
  var currentIndex = arrayColor.length,
  temporaryValue, shuffleColorsRand;
  while (0 != currentIndex) { //while there are colors to shuffle

// one remaining
  shuffleColorsRand = Math.floor(Math.random() * currentIndex);
  currentIndex -= 1;

//swap with current element
  temporaryValue = arrayColor[currentIndex];
  arrayColor[currentIndex] = arrayColor[shuffleColorsRand];
  arrayColor[shuffleColorsRand] = temporaryValue;
  }
  return arrayColor;
  }

  var colors = ['red', 'blue', 'green', 'red', 'blue' , 'green' , 'black' , 'black' , 'yellow' ,'yellow', 'orange','orange','grey','grey', 'brown','brown' ];
  shuffle(colors);
  var i = 0;
  $(".cards").each(function() {
  $(this).css("background", colors[i++]);

});

});
