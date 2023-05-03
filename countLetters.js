const countLetters = function(sentence) {
  let returnedLetters = {};

  for (const letter of sentence) {
    if (letter === " ") {
      continue;
    }

    returnedLetters[letter] = (returnedLetters[letter] || 0) + 1;
  }

  return returnedLetters;
};

countLetters("This is a long sentance for counting letters lol how many is there lets try a number 88888 now lets try a symbol #^$");