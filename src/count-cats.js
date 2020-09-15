module.exports =  countCats = ( matrix ) => {
  let cats = 0;
  matrix.forEach (position => position.forEach( x => cats += (x == "^^")));
  return cats;
};
