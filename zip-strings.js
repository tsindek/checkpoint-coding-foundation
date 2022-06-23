function zipStrings(strA, strB) {
  let splitA = strA.split("");
  let splitB = strB.split("");
  let zippedArray = [];

  if (splitA.length >= splitB.length) {
    for (let i = 0; i < splitA.length; i++) {
      zippedArray.push(splitA[i]);
      zippedArray.push(splitB[i]);
    }
  } else {
    for (let i = 0; i < splitB.length; i++) {
      zippedArray.push(splitA[i]);
      zippedArray.push(splitB[i]);
    }
  }
  let zippedString = zippedArray.join("");
  return zippedString;
}
