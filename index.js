const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(Ralph){cats.push("Ralph")
return cats;}
function destructivelyPrependCat(Bob){cats.unshift("Bob")
return cats;}
function destructivelyRemoveLastCat(){cats.pop()
return cats;}
function destructivelyRemoveFirstCat(){cats.shift()
return cats;}
function appendCat(Broom){var cats2= [...cats,"Broom"];
return cats2;}
function prependCat(Arnold){var cats2= ["Arnold", ...cats,];
return cats2;}
function removeLastCat(){var cats2= cats.slice(0,cats.length-1);
return cats2;}
function removeFirstCat(){var cats2= cats.slice(1);
return cats2;}  