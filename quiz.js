var button = document.getElementById("treeMaker")
function makeTree() {
  var height = document.getElementById("height").value
  var decoration = document.getElementById("character").value
  var placement = document.getElementById("treeGrowsHere")
  tester(height, decoration)
  var tree = ""
  for (i=0; i < height; i++) {
  //adjusts height of tree
  tree +="<p>"
    for (j=0; j < i*2+1; j++) {
      //creates all characters on line
      tree += decoration
    }
  tree += "</p>"
  }
  placement.innerHTML = tree
  placement.style.textAlign = "center"
}
function tester(number, character) {
  //tests for possible problems
  if (character === "") {
    alert("Please use an actual character!")
  } else if (isNaN(number)) {
    alert("Please use an actual number!")
  }
}
button.addEventListener("click", makeTree)