// demo 4
// JS event propagation

// Name the collections of TDs, TRs, and overall table
var tds = document.getElementsByTagName('td');
var trs = document.getElementsByTagName('tr');
var table = document.getElementsByTagName('table')[0];


var clicky = function(e) {
  alert( this.innerHTML );
  //Q: What will happen when next line is uncommented?
  //e.stopPropagation();

  //it only prints out the most recent line 
};


//Q: Does the order in which the event listeners are attached matter?

//Predict, then test...
//Q: What effect does the boolean arg have in each?
//   (Leave exactly 1 version uncommented to test...)

//the order does matter. based on the order it is listed that is the order it is added to the propogation call order.
//when using true. it'll overwrite what is currently there and place the most recent one with true in the front, so if everything has true it'll be in the inverted way 

for (var x=0; x < tds.length; x++) {
  tds[x].addEventListener('click', clicky, true);
  //tds[x].addEventListener('click', clicky, false);
}

for (x=0; x < trs.length; x++) {
  trs[x].addEventListener('click', clicky, true);
  //trs[x].addEventListener('click', clicky, false);
}

table.addEventListener('click', clicky, true);
//table.addEventListener('click', clicky, false);
