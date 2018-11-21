// add solution here
function theBeatlesPlay(musicians, insturments){
  var array = []
  for (var i = 0; i < musicians.length; i++){
    array.push(`${musicians[i]} plays ${insturments[i]}`)
  }
  return array
}

function johnLennonFacts(facts){
  var i = 0
  while (i < facts.length) {
    facts[i] + "!!!"
  }
  return facts
}

function iLoveTheBeatles(n){
  var array = [];
  var i = 0;
  do {
    array.push("I love the Beatles!");
    i++;
  } while (i <= n && n < 15 ){
    return array
  }
}
