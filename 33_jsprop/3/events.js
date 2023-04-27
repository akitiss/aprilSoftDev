// demo 3
// JS event propagation

var tds = document.getElementsByTagName('td');
var trs = document.getElementsByTagName('tr');
var table = document.getElementsByTagName('table')[0];

var clicky = function(e) {
  alert( this.innerHTML );
  //Q: What will happen when next line is uncommented?
  //e.stopPropagation();
 
  //it stops propogation from happening so only the first pop up appears and the others dont 
};

for (var x=0; x < tds.length; x++) {
  tds[x].addEventListener('click', clicky);
}

for (x=0; x < trs.length; x++) {
  trs[x].addEventListener('click', clicky);
}

//Predict, then test...
//Q: What effect does the boolean arg have?
//the 3rd parameter true/false determines is it is first or not. true means it'll appear first, false means it'll appear last

//   (Leave exactly 1 version uncommented to test...)

table.addEventListener('click', clicky, true);
//table.addEventListener('click', clicky, false);


// Q: When user clicks on a cell, in what order will the pop-ups appear?
// whole table appear firsts, then the singular box, then whats in the column 