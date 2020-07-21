module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(20>=item.enhancemnt){
    return{...item,enhancemnt:item.enhancemnt+1}
  }else{
    return { ...item };
  }

}

function fail(item) {
  if (item.enhancemnt<15){
  return { ...item,durability:durability-5 };
  }
  // If the item's enhancement is 15 or more,
  //  the durability of the item is decreased by 10.

  // If the item's enhancement level is greater than 16, 
  // the enhancement level decreases by 1

  else if(item.enhancemnt>=15){
    return { ...item,durability:durability-10 };
  }
  else if(item.enhancemnt>16)
  return{...item, enhancement:item.enhancemnt-1}
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
