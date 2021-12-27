const ourVision = [
  "B$u$i$ld",
  "$t$$h$e",
  "N$e$x$t",
  "E$$ra",
  "$$o$f$",
  "S$$of$t$wa$r$e",
  "De$$ve$l$op$me$n$t",
];

const filterArray = (inputArray) => {
  /* filter $ symbol from the given data and convert them to uppercase */
  const filterDollars = inputArray.map((val) => val.replace(/\$/g,'').toUpperCase())

  /* return array as string */
  return filterDollars.join(' ');
}

console.log(filterArray(ourVision));

