function translate(strIn) {
  var numCon = 0;
  var vows = ["a","e","i","o","u","A","E","I","O","U"];
  var result = "";
  var strWords = strIn.split(" ");
  var strSplit;
  var char;

  for (var i = 0; i < strWords.length; i++) {
    strSplit = strWords[i].split("");
    if ((strSplit[0] == "a" || strSplit[0] == "e" || strSplit[0] == "i" || strSplit[0] == "o" || strSplit[0] == "u" || strSplit[0] == "A" || strSplit[0] == "E" || strSplit[0] == "I" || strSplit[0] == "O" || strSplit[0] == "U") && (strSplit.length == 1)) {
      strSplit.push("ay");
      result += strSplit.join("")
    } else if ((strSplit[0] == "a" || strSplit[0] == "e" || strSplit[0] == "i" || strSplit[0] == "o" || strSplit[0] == "u" || strSplit[0] == "A" || strSplit[0] == "E" || strSplit[0] == "I" || strSplit[0] == "O" || strSplit[0] == "U")) {
      strSplit.push("way");
      result += strSplit.join("")
    } else {
      for (var j = 0; j < strSplit.length; j++) {
        if (strSplit[j] == "a" || strSplit[j] == "e" || strSplit[j] == "i" || strSplit[j] == "o" || strSplit[j] == "u" || strSplit[j] == "A" || strSplit[j] == "E" || strSplit[j] == "I" || strSplit[j] == "O" || strSplit[j] == "U") {
          if ((strSplit[j] == "U" || strSplit[j] == "u") && (strSplit[j-1] == "Q" || strSplit[j-1] == "q")) {

          } else {
            break;
          }
        }
        numCon++;
      }
      for (var k = 0; k < numCon; k++) {
        char = strSplit.shift();
        strSplit.push(char);
      }
      numCon = 0;
      strSplit.push("ay");
      result += strSplit.join("");
    }
    if (i != (strWords.length - 1)) {
      result += " ";
    }
  }
  return result;
}

translate("happy to see you today how are you")
