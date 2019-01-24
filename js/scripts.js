function translate(strIn) {
  var numCon = 0;
  var vows = ["a","e","i","o","u","A","E","I","O","U"];
  var result = "";
  var strWords = strIn.split(" ");
  var strSplit;
  var char;

  for (var i = 0; i < strWords.length; i++) {
    strSplit = strWords[i].split("");

    if ((vows.includes(strSplit[0])? true : false) && (strSplit.length == 1)) {
      strSplit.push("ay");
      result += strSplit.join("");
    } else if (vows.includes(strSplit[0])? true : false) {
      strSplit.push("way");
      result += strSplit.join("");
    } else {
      for (var j = 0; j < strSplit.length; j++) {
        if (vows.includes(strSplit[j])? true : false) {
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

$(document).ready(function(){
  $("form#translate").submit(function(event){
    event.preventDefault();
    $(".result").text(translate($("input").val()));
  });
});
