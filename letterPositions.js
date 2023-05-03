const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (letter === " ") {
      continue;
    }
    if (results[letter] === undefined)
      results[letter] = [];

    results[letter].push(i);
  }

  return results;
};

console.log(letterPositions("This is a long sentance for counting letters lol how many is there lets try a number 88888 now lets try a symbol #^$"));