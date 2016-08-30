function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  // increases ranks in .ranked-list by n
  //get all the nested elements of ranked list
  const rankedlist = document.querySelectorAll('.ranked-list');
  //store them in a variable?
  // you'll want to grab the entire list and move all items
  const firstList = rankedlist[0];
  const secondList = rankedlist[1];

  var children = firstList
  var start = 1;
  for (var i = 0, l = children.length; i < l; i++) {
      return start + i + n;
  }

  children = secondList;
  start = 12;

  for (var i = 0, l = children.length; i < l; i++) {
      return start + i + n;
  }
}

function deepestChild(){
  return document.querySelector('#grand-node:last-of-type');
}
